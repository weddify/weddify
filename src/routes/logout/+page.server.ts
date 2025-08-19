import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Sign out dari Supabase
	await locals.supabase.auth.signOut();

	// Hapus cookie session
	locals.session = null;

	// Redirect ke login
	throw redirect(303, '/login');
};
