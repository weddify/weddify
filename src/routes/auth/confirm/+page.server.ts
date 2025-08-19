import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const token_hash = url.searchParams.get('token_hash');
	const type = url.searchParams.get('type');

	if (token_hash && type) {
		// Supabase otomatis menangani token
		// kita cuma redirect ke halaman yang diinginkan
		throw redirect(303, '/dashboard');
	}

	throw redirect(303, '/login');
};
