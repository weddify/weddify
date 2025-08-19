import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const type = url.searchParams.get('type');
	const token_hash = url.searchParams.get('token_hash');

	console.log('Token hash:', token_hash);
	console.log('Type:', type);

	// Supabase v2: verifikasi sudah otomatis dilakukan via magic link
	if (type === 'email_confirm' && token_hash) {
		// Di titik ini, email sudah diverifikasi oleh Supabase
		// Kamu tinggal redirect ke halaman yang kamu mau
		throw redirect(303, '/dashboard');
	}

	throw redirect(303, '/login');
};
