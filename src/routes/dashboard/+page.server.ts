import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session) throw error(401, 'Login required');

	const { data } = await locals.supabase
		.from('couples')
		.select('*')
		.eq('user_id', locals.session.user.id);

	return { couples: data ?? [] };
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		await locals.supabase.auth.signOut();
		throw redirect(303, '/login');
	},
};
