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
		if (!locals.session) throw error(401);

		const form = await request.formData();
		const name = form.get('name') as string;
		if (!name) return fail(400, { name, missing: true });

		await locals.supabase.from('couples').insert({
			bride_name: name,
			groom_name: 'Belum diisi',
			slug: crypto.randomUUID().slice(0, 8),
			user_id: locals.session.user.id,
		});

		throw redirect(303, '/dashboard');
	},

	logout: async ({ locals }) => {
		await locals.supabase.auth.signOut();
		throw redirect(303, '/login');
	},
};
