import { checkTurnstile } from '$lib/utils/turnstile';
import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const fd = await request.formData();
		const ok = await checkTurnstile(fd);
		if (!ok) return fail(400, { error: 'Captcha gagal' });

		const email = fd.get('email') as string;
		const password = fd.get('password') as string;

		const { data, error: signUpError } = await locals.supabase.auth.signUp({ email, password });
		if (signUpError) return fail(400, { error: signUpError.message });

		// opsional: langsung masuk
		throw redirect(303, '/dashboard');
	},
};
