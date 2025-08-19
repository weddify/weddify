import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const fd = await request.formData();
		const fullName = fd.get('fullName') as string;
		const email = fd.get('email') as string;
		const password = fd.get('password') as string;

		const { error } = await locals.supabase.auth.signUp({ email, password });
		if (error) return fail(400, { error: error.message });

		// simpan nama sementara di cookie/sessionStorage (opsional)
		throw redirect(303, '/login');
	},
};
