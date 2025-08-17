<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/db/supabase';

	const slug = $page.params.slug;

	async function redirectToPayment() {
		const { data: couple, error } = await supabase
			.from('couples')
			.select('*')
			.eq('slug', slug!)
			.single();

		if (error || !couple) {
			alert('Undangan tidak ditemukan');
			return;
		}

		const orderId = couple.pakasir_order_id;
		const amount = couple.paket === 'basic' ? 12000 : couple.paket === 'premium' ? 149000 : 299000;
		const redirectUrl = `${$page.url.origin}/${slug}`;

		const payUrl = `https://app.pakasir.com/pay/weddify/${amount}?order_id=${orderId}&redirect=${encodeURIComponent(redirectUrl)}`;
		window.location.href = payUrl;
	}
</script>

<main class="min-h-screen bg-gradient-to-r from-fuchsia-500 to-pink-500 p-8">
	<div class="card glass mx-auto max-w-3xl p-6 md:p-8">
		<h2 class="mb-4 text-2xl font-bold">Undangan Belum Terbayar</h2>
		<p class="mb-6">Silakan selesaikan pembayaran terlebih dahulu.</p>
		<button class="btn btn-primary" on:click={redirectToPayment}>Bayar Sekarang</button>
	</div>
</main>
