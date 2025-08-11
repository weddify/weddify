<script lang="ts">
	import { formatDate } from '$lib/utils/date';

	export let couple: {
		groom_name: string;
		bride_name: string;
		ijab_date?: string;
		ijab_time_range?: string;
		ijab_location?: string;
		resepsi_date: string;
		resepsi_time_range?: string;
		resepsi_location?: string;
		maps_url?: string;
	};

	const location = couple.resepsi_location ?? '';
	const eventTitle = `Pernikahan ${couple.groom_name} & ${couple.bride_name}`;
	const date = new Date(couple.resepsi_date);
	const startISO = date.toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
	const endISO =
		new Date(date.getTime() + 3 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').slice(0, 15) +
		'Z';

	const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startISO}/${endISO}&details=${encodeURIComponent('Undangan pernikahan')}&location=${encodeURIComponent(location ?? '')}`;
</script>

<section
	class="bg-base-200 relative mx-auto w-full max-w-lg items-center px-6 py-12 text-center text-base"
>
	<h2 class="font-classic mb-6 text-center text-4xl">Acara</h2>
	<p class="mb-6 text-sm">
		Merupakan kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i, hadir untuk
		memberikan do'a dan restu pada acara Resepsi Pernikahan kami, yang Insya Allah akan dilaksanakan
		pada :
	</p>

	<div class="my-8 flex flex-col justify-center gap-8">
		<!-- Tanggal dan Waktu Ijab -->
		{#if couple.ijab_date}
			<div class="bg-base-100 text-base-content flex-1 rounded p-4 text-center shadow-sm md:mb-0">
				<h3 class="font-classic mb-3 text-center text-xl font-bold">Akad</h3>
				<!-- Tanggal Ijab  -->
				<div class="gap-1">
					<span class="text-lg">{formatDate(couple.ijab_date ?? '')}</span>
				</div>
				<!-- Waktu Ijab -->
				<div class="gap-1">
					<span class="text-lg">{couple.ijab_time_range}</span>
				</div>
				<!-- Lokasi Ijab -->
				<div class="gap-1">
					<span class="text-lg">{couple.ijab_location}</span>
				</div>
			</div>
		{/if}

		<!-- Tanggal dan Waktu Resepsi -->
		<div
			class="bg-base-100 text-base-content mb-6 flex-1 rounded p-4 text-center shadow-sm md:mb-0"
		>
			<h3 class="font-classic mb-3 text-xl font-bold">Resepsi</h3>
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
			<h3 class="font-classic mb-3 text-xl font-bold">Lokasi</h3>
			<iframe
				src={couple.maps_url}
				class="ring-success mx-auto h-72 w-full rounded p-1 ring-1"
				loading="lazy"
				title="Peta lokasi acara"
			></iframe>
		</div>
	{/if}

	<a
		href={googleCalUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="btn btn-primary my-6 w-50 shadow-md"
	>
		Set Reminder
	</a>
</section>
