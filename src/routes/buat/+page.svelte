<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { supabase } from '$lib/db/supabase';
	import { onMount } from 'svelte';

	import type { Database } from '$lib/types/supabase';
	type CoupleInsert = Database['public']['Tables']['couples']['Insert'];
	/* --- wajib diisi pertama kali --- */
	let slug = $page.url.searchParams.get('slug') ?? '';
	let groom_name = '';
	let bride_name = '';
	let display_groom_name = '';
	let display_bride_name = '';
	let resepsi_date = '';
	let resepsi_time_range = '19:00';
	let resepsi_location = '';
	let loading = false;
	let msg = '';

	/* --- sisanya default kosong --- */
	const defaults = {
		groom_father: null,
		groom_mother: null,
		groom_photo_url: null,
		bride_father: null,
		bride_mother: null,
		bride_photo_url: null,
		ijab_date: null,
		ijab_time_range: null,
		ijab_location: null,
		maps_url: null,
		gift_address: null,
		quote: null,
		music_url: null,
		bank_accounts: null,
		custom_domain: null,
		template: 'default',
		meta_title: null,
		meta_description: null,
		meta_image_url: null,
		meta_noindex: false,
		meta_twitter_card: null,
		greeting: null,
		quotes_json: null,
	};

	async function handleSubmit() {
		loading = true;
		msg = '';

		const amount = 149000; // harga paket
		const orderId = `w3-${slug}-${Date.now()}`;
		const redirectUrl = `https://weddify-three.vercel.app/${slug}`;

		const payload: CoupleInsert = {
			slug,
			groom_name,
			bride_name,
			display_groom_name: display_groom_name || groom_name,
			display_bride_name: display_bride_name || bride_name,
			resepsi_date,
			resepsi_time_range,
			resepsi_location,
			pakasir_order_id: orderId,
			payment_status: 'pending',
			...defaults,
		};

		const { error } = await supabase.from('couples').insert(payload as any);

		if (error) {
			msg = error.message;
			loading = false;
		} else {
			// redirect ke halaman bayar Pakasir
			const payUrl = `https://app.pakasir.com/pay/weddify/${amount}?order_id=${orderId}&qris_only=1&redirect=${redirectUrl}`;
			window.location.href = payUrl;
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="card glass mx-auto max-w-lg space-y-4 p-6">
	<h1 class="text-center text-2xl font-bold text-rose-800">Order Undangan Digital</h1>

	<label class="form-control">
		<span class="label-text">Slug / URL</span>
		<input bind:value={slug} class="input input-bordered" required />
	</label>

	<label class="form-control">
		<span class="label-text">Nama Mempelai Pria</span>
		<input bind:value={groom_name} class="input input-bordered" required />
	</label>

	<label class="form-control">
		<span class="label-text">Nama Mempelai Wanita</span>
		<input bind:value={bride_name} class="input input-bordered" required />
	</label>

	<div class="grid grid-cols-2 gap-4">
		<label class="form-control">
			<span class="label-text">Tanggal Resepsi</span>
			<input type="date" bind:value={resepsi_date} class="input input-bordered" required />
		</label>

		<label class="form-control">
			<span class="label-text">Waktu</span>
			<input type="time" bind:value={resepsi_time_range} class="input input-bordered" required />
		</label>
	</div>

	<label class="form-control">
		<span class="label-text">Lokasi Resepsi</span>
		<input bind:value={resepsi_location} class="input input-bordered" required />
	</label>

	<button type="submit" class="btn btn-primary w-full" disabled={loading}>
		{loading ? 'Membuat...' : 'Buat Sekarang'}
	</button>
</form>
