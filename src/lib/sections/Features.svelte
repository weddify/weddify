<script lang="ts">
	import { page } from '$app/stores';
</script>

<section
	id="features"
	class="mx-auto flex w-full max-w-lg flex-col content-center justify-center bg-rose-300 py-20 md:max-w-none lg:w-10/12"
>
	<div class=" mt-5 grid-cols-1 space-y-8 px-16 text-center">
		<h2 class="text-3xl font-bold text-rose-700 md:text-4xl">Fitur Unggulan</h2>

		<div class="grid grid-cols-2 gap-8 md:grid-cols-3">
			<!-- 1. Wizard 4 Langkah -->
			<div class="card bg-rose-50 p-6 shadow-lg">
				<div class="mb-4 text-4xl">⚡</div>
				<h3 class="mb-2 text-lg font-bold">Wizard 4 Langkah</h3>
				<p class="text-sm text-rose-600">
					Isi data → pilih template → bayar → langsung live. Selesai dalam hitungan menit.
				</p>
			</div>

			<!-- 2. Template Premium -->
			<div class="card bg-rose-50 p-6 shadow-lg">
				<div class="mb-4 text-4xl">🎨</div>
				<h3 class="mb-2 text-lg font-bold">Template Premium</h3>
				<p class="text-sm text-rose-600">Responsive di semua device, bisa custom domain.</p>
			</div>

			<!-- 3. Pembayaran Fleksibel -->
			<div class="card bg-rose-50 p-6 shadow-lg">
				<div class="mb-4 text-4xl">💳</div>
				<h3 class="mb-2 text-lg font-bold">Pembayaran Fleksibel</h3>
				<p class="text-sm text-rose-600">QRIS hinga transfer Bank, Harga mulai 12k.</p>
			</div>

			<!-- 4. RSVP & Tamu Tak Terbatas -->
			<div class="card bg-rose-50 p-6 shadow-lg">
				<div class="mb-4 text-4xl">👥</div>
				<h3 class="mb-2 text-lg font-bold">RSVP & Tamu Tak Terbatas</h3>
				<p class="text-sm text-rose-600">
					Tamu bisa konfirmasi hadir, kirim ucapan, tanpa batas jumlah undangan.
				</p>
			</div>

			<!-- 5. Responsive & SEO -->
			<div class="card bg-rose-50 p-6 shadow-lg">
				<div class="mb-4 text-4xl">📱</div>
				<h3 class="mb-2 text-lg font-bold">Responsive & SEO</h3>
				<p class="text-sm text-rose-600">Mobile-first, meta tag otomatis, URL slug SEO-friendly.</p>
			</div>

			<!-- 6. Reseller & Kolaborasi -->
			<div class="card bg-rose-50 p-6 shadow-lg">
				<div class="mb-4 text-4xl">🤝</div>
				<h3 class="mb-2 text-lg font-bold">Reseller</h3>
				<p class="text-sm text-rose-600">
					Buat undangan untuk orang lain, dapat komisi. <br />
					<span class="text-[18px]"><i><strong>(Coming soon)</strong></i></span>
				</p>
			</div>
		</div>
	</div>
</section>
