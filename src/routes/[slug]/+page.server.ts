// src/routes/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabase';

export const load: PageServerLoad = async ({ params, url }) => {
	const { slug } = params;

	// cek juga custom domain jika ada
	const host = url.host;
	let query = supabase.from('couples').select('*');

	if (host === 'localhost:5173' || host.endsWith('.vercel.app')) {
		query = query.eq('slug', slug);
	} else {
		query = query.eq('custom_domain', host);
	}

	const { data: couple, error: dbError } = await query.single();

	if (dbError || !couple) {
		throw error(404, 'Undangan tidak ditemukan');
	}

	return { couple };
};
