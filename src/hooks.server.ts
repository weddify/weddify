// src/hooks.server.ts
import { createServerClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
		cookies: {
			get: (name) => event.cookies.get(name),
			set: (name, value, options) => event.cookies.set(name, value, { ...options, path: '/' }),
			remove: (name, options) => event.cookies.delete(name, { ...options, path: '/' }),
		},
	});

	const { data } = await event.locals.supabase.auth.getSession();
	event.locals.session = data.session;
	return resolve(event);
};
