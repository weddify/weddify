<script lang="ts">
	import { formatDate } from '$lib/utils/date';
	export let couple;
</script>

<section
	class="bg-base-200 relative mx-auto w-full max-w-lg items-center px-6 py-12 text-center text-base"
>
	<h2 class=" font-classic mb-6 text-center text-4xl">Acara</h2>
	<p class="mb-6 text-sm">
		Merupakan kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i, hadir untuk
		memberikan do'a dan restu pada acara Resepsi Pernikahan kami, yang Insya Allah akan dilaksanakan
		pada :
	</p>

	<div class="mb-6 flex flex-col justify-center gap-8">
		<!-- Tanggal dan Waktu Ijab -->
		{#if couple.ijab_date}
			<div class="mb-6 flex-1 rounded bg-white p-4 text-center shadow-sm md:mb-0 dark:bg-gray-800">
				<h3 class="mb-3 text-center text-xl font-bold text-gray-800 dark:text-gray-100">Akad</h3>
				<!-- Tanggal Ijab  -->
				<div class=" gap-1">
					<span class="text-lg">{formatDate(couple.ijab_date ?? '')}</span>
				</div>
				<!-- Waktu Ijab -->
				<div class=" gap-1">
					<span class="text-lg">{couple.ijab_time_range}</span>
				</div>
				<!-- Lokasi Ijab -->
				<div class=" gap-1">
					<span class="text-lg">{couple.ijab_location}</span>
				</div>
			</div>
		{/if}

		<!-- Tanggal dan Waktu Resepsi -->
		<div class="mb-6 flex-1 rounded bg-white p-4 text-center shadow-sm md:mb-0 dark:bg-gray-800">
			<h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">Resepsi</h3>
			<!-- Tanggal Ijab  -->
			<div class="items-start gap-1">
				<span class="text-lg">{formatDate(couple.resepsi_date ?? '')}</span>
			</div>
			<!-- Waktu Ijab -->
			<div class="items-start gap-1">
				<span class="text-lg">{couple.resepsi_time_range}</span>
			</div>
			<!-- Lokasi Ijab -->
			<div class="  items-start gap-1">
				<span class="text-lg">{couple.resepsi_location}</span>
			</div>
		</div>
	</div>

	{#if couple.maps_url}
		<div class="glass rounded p-6 shadow">
			<iframe
				src={couple.maps_url}
				class="mx-auto h-72 w-full rounded"
				loading="lazy"
				title="Peta lokasi acara"
			></iframe>
		</div>
	{/if}
</section>
