import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabase';

export const load: PageServerLoad = async ({ params, url }) => {
	const { slug } = params;
	const host = url.host;
	const protocol = url.protocol; // http: atau https:

	if (!slug) {
		throw error(404, 'Slug tidak ditemukan');
	}

	let query = supabase.from('couples').select('*');

	if (host.startsWith('localhost:') || host.endsWith('.vercel.app')) {
		query = query.eq('slug', slug);
	} else {
		query = query.eq('custom_domain', host);
	}

	const { data: couple, error: dbError } = await query.single();

	if (dbError || !couple) {
		throw error(404, 'Undangan tidak ditemukan');
	}

	if (couple.payment_status !== 'paid') {
		// Redirect ke halaman pembayaran
		throw redirect(302, `/bayar/${slug}`);
	}

	// Bangun canonical URL
	const base = couple.custom_domain
		? `${protocol}//${couple.custom_domain}`
		: `${protocol}//${host}`;
	const canonicalUrl = couple.custom_domain
		? `https://${couple.custom_domain}` // root only
		: `https://${host}/${slug}`; // vercel + slug

	return { couple, canonicalUrl };
};
