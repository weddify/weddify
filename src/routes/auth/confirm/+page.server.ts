import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { createClient } from '@supabase/supabase-js';
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from '$env/static/private';

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

export const load: PageServerLoad = async ({ url }) => {
	const token_hash = url.searchParams.get('token_hash');
	const type = url.searchParams.get('type');

	if (token_hash && type === 'signup') {
		const { data, error } = await supabase.auth.exchangeCodeForSession(token_hash);

		if (error) {
			console.error('exchange error', error);
			throw redirect(303, '/login');
		}

		// ✅ session sekarang sudah aktif, tanpa fragment token di URL
		throw redirect(303, '/dashboard');
	}

	throw redirect(303, '/login');
};
