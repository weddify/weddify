<script lang="ts">
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import { supabase } from '$lib/db/supabase'; // Ensure this import is correct
	import { goto } from '$app/navigation';

	// Data form
	let groom_name = '';
	let groom_father = '';
	let groom_mother = '';
	let groom_ig = '';
	let groom_photo_url = '';
	let display_groom_name = '';
	let bride_name = '';
	let bride_father = '';
	let bride_mother = '';
	let bride_ig = '';
	let bride_photo_url = '';
	let display_bride_name = '';
	let slug = '';
	let ijab_date = '';
	let ijab_time_range = '';
	let ijab_location = '';
	let resepsi_date = '';
	let resepsi_time_range = '';
	let resepsi_location = '';
	let maps_url = '';
	let quote = '';
	let greeting = '';
	let gift_address = '';
	let bank_accounts = [] as Array<{ bank: string; name: string; number: string }>;
	let music_url = '';
	let quotes_json: any = null;
	let template: 'classic' | 'modern' = 'classic';
	let paket: 'basic' | 'premium' = 'basic';

	// UI state
	let step = 1;
	let loading = false;

	// Handlers
	const next = () => step < 3 && step++;
	const prev = () => step > 1 && step--;

	async function submitOrder() {
		loading = true;
		const amount = paket === 'premium' ? 149000 : 12000; // Harga paket basic diatur menjadi 12000
		const orderId = `w3-${slug}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
		const redirectUrl = `https://weddify-three.vercel.app/${slug}`;

		const payload = {
			slug,
			groom_name,
			bride_name,
			display_groom_name: display_groom_name || groom_name,
			display_bride_name: display_bride_name || bride_name,
			groom_father,
			groom_mother,
			groom_ig,
			groom_photo_url,
			bride_father,
			bride_mother,
			bride_ig,
			bride_photo_url,
			ijab_date,
			ijab_time_range,
			ijab_location,
			resepsi_date,
			resepsi_time_range,
			resepsi_location,
			maps_url,
			quote,
			greeting,
			gift_address,
			music_url,
			quotes_json,
			bank_accounts,
			template,
			pakasir_order_id: orderId,
			payment_status: amount === 12000 ? 'paid' : 'pending', // Set payment_status based on amount
		};

		const { error } = await supabase.from('couples').insert(payload as any);
		if (error) {
			alert(error.message);
			loading = false;
			return;
		}

		if (amount === 12000) {
			goto(`/${slug}`);
		} else {
			const payUrl = `https://app.pakasir.com/pay/weddify/${amount}?order_id=${orderId}&redirect=${encodeURIComponent(redirectUrl)}`;
			window.location.href = payUrl;
		}
	}
</script>

<svelte:head><title>Order Undangan</title></svelte:head>

<main class="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-10">
	<form on:submit|preventDefault={submitOrder} class="card glass mx-auto max-w-3xl p-6 md:p-8">
		<ul class="steps mb-6 w-full">
			<li class="step" class:step-primary={step >= 1}>Couple</li>
			<li class="step" class:step-primary={step >= 2}>Event</li>
			<li class="step" class:step-primary={step >= 3}>Tambahan & Bayar</li>
		</ul>

		{#if step === 1}
			<Step1
				bind:groom_name
				bind:groom_father
				bind:groom_mother
				bind:groom_ig
				bind:groom_photo_url
				bind:display_groom_name
				bind:bride_name
				bind:bride_father
				bind:bride_mother
				bind:bride_ig
				bind:bride_photo_url
				bind:display_bride_name
				bind:slug
			/>
		{/if}

		{#if step === 2}
			<Step2
				bind:ijab_date
				bind:ijab_time_range
				bind:ijab_location
				bind:resepsi_date
				bind:resepsi_time_range
				bind:resepsi_location
				bind:maps_url
			/>
		{/if}

		{#if step === 3}
			<Step3
				bind:quote
				bind:greeting
				bind:gift_address
				bind:music_url
				bind:quotes_json
				bind:template
				bind:paket
				bind:bank_accounts
			/>
		{/if}

		<div class="mt-6 flex justify-between">
			<button type="button" class="btn btn-outline" disabled={step === 1} on:click={prev}
				>Sebelumnya</button
			>
			{#if step < 3}
				<button type="button" class="btn btn-primary" on:click={next}>Selanjutnya</button>
			{:else}
				<button type="submit" class="btn btn-success" disabled={loading}>
					{loading ? 'Memproses...' : 'Buat Undangan'}
				</button>
			{/if}
		</div>
	</form>
</main>
