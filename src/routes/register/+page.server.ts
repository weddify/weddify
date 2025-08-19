import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const fd = await request.formData();
		const fullName = fd.get('fullName') as string;
		const email = fd.get('email') as string;
		const password = fd.get('password') as string;

		// 1. sign-up dengan client biasa
		const { data: authData, error: signUpError } = await locals.supabase.auth.signUp({
			email,
			password,
		});

		if (signUpError) return fail(400, { error: signUpError.message });
		if (!authData.user) return fail(500, { error: 'Tidak ada user' });

		// 2. redirect ke login (tanpa insert di sini)
		throw redirect(303, '/login');
	},
};
