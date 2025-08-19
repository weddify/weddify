import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session) throw error(401, 'Login required');
	const { data } = await locals.supabase
		.from('couples')
		.select('*')
		.eq('user_id', locals.session.user.id);
	return { couples: data ?? [] };
};

// ⬇️ letak action create + logout
export const actions: Actions = {
	create: async ({ request, locals }) => {
		// di load function
		if (!locals.session) throw error(401);

		// cek apakah profil sudah ada
		const { data: profile } = await locals.supabase
			.from('profiles')
			.select('*')
			.eq('user_id', locals.session.user.id)
			.single();

		if (!profile) {
			// insert otomatis (nama default dulu)
			await locals.supabase
				.from('profiles')
				.insert({ user_id: locals.session.user.id, full_name: locals.session.user.email });
		}

		throw redirect(303, '/dashboard');
	},

	logout: async ({ locals }) => {
		await locals.supabase.auth.signOut();
		throw redirect(303, '/login');
	},
};
