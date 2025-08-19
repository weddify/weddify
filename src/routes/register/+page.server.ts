import { redirect, fail } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE } from '$env/static/private';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const fd = await request.formData();
		const fullName = fd.get('fullName') as string;
		const email = fd.get('email') as string;
		const password = fd.get('password') as string;

		// 1. sign-up via service-role
		const supAdmin = createClient(VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
			auth: { persistSession: false },
		});

		const { data: authData, error: signUpError } = await supAdmin.auth.signUp({ email, password });
		if (signUpError) return fail(400, { error: signUpError.message });

		// 2. insert profil (bypass RLS)
		await supAdmin.from('profiles').insert({ user_id: authData.user!.id, full_name: fullName });

		// 3. langsung redirect
		throw redirect(303, '/dashboard');
	},
};
