import { SECRET_TURNSTILE_KEY } from '$env/static/private';
import { validateToken } from 'sveltekit-turnstile';

export async function checkTurnstile(fd: FormData) {
	const token = fd.get('cf-turnstile-response') as string;
	const ok = await validateToken(token, SECRET_TURNSTILE_KEY);
	return ok;
}
