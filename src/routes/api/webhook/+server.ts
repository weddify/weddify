import { json } from '@sveltejs/kit';
import { supabase } from '$lib/db/supabase';

export async function POST({ request }) {
	const body = await request.json(); // { order_id, status, ... }

	if (body.status === 'completed') {
		await supabase
			.from('couples')
			.update({ payment_status: 'paid', paid_at: new Date().toISOString() })
			.eq('pakasir_order_id', body.order_id);
	}
	return json({ ok: true });
}
