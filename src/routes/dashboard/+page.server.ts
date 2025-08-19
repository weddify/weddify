import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session) throw error(401, 'Login required');

	// validasi user autentik
	const { data: user, error: authErr } = await locals.supabase.auth.getUser();
	if (authErr || !user) throw error(401, 'Invalid session');

	// cek / buat profil (menggunakan session.user)
	const { data: profile } = await locals.supabase
		.from('profiles')
		.select('*')
		.eq('user_id', user.id)
		.single();

	if (!profile) {
		await locals.supabase
			.from('profiles')
			.insert({ user_id: user.id, full_name: locals.session.user.email });
	}

	const { data: couples } = await locals.supabase
		.from('couples')
		.select('*')
		.eq('user_id', locals.session.user.id);

	return { couples: couples ?? [] };
};
