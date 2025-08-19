import { redirect, fail } from '@sveltejs/kit';
// import { checkTurnstile } from '$lib/utils/turnstile';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const fd = await request.formData();

		// 1. captcha
		// const ok = await checkTurnstile(fd);
		// if (!ok) return fail(400, { error: 'Captcha gagal' });

		// 2. ambil data
		const fullName = fd.get('fullName') as string;
		const email = fd.get('email') as string;
		const password = fd.get('password') as string;

		// 3. sign-up di Auth
		const { data: authData, error: signUpError } = await locals.supabase.auth.signUp({
			email,
			password,
		});

		if (signUpError) return fail(400, { error: signUpError.message });
		if (!authData.user) return fail(500, { error: 'Tidak ada user' });

		// 4. insert ke public.profiles (opsional)
		await locals.supabase.from('profiles').insert({
			user_id: authData.user.id,
			full_name: fullName,
		});

		// 5. langsung masuk
		throw redirect(303, '/dashboard');
	},
};
