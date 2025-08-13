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

<section id="time">
	<h2>Acara</h2>
	<p>
		Merupakan kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i, hadir untuk
		memberikan do'a dan restu pada acara Resepsi Pernikahan kami, yang Insya Allah akan dilaksanakan
		pada :
	</p>

	<!-- Tanggal dan Waktu Ijab -->
	{#if couple.ijab_date}
		<div>
			<h3>Akad</h3>
			<span>{formatDate(couple.ijab_date ?? '')}</span>
			<span>{couple.ijab_time_range}</span>
			<span>{couple.ijab_location}</span>
		</div>
	{/if}

	<!-- Tanggal dan Waktu Resepsi -->
	<div>
		<h3>Resepsi</h3>
		<span>{formatDate(couple.resepsi_date ?? '')}</span>
		<span>{couple.resepsi_time_range}</span>
		<span>{couple.resepsi_location}</span>
	</div>

	{#if couple.maps_url}
		<div>
			<h3>Lokasi</h3>
			<iframe src={couple.maps_url} loading="lazy" title="Peta lokasi acara"></iframe>
		</div>
	{/if}

	<a href={googleCalUrl} target="_blank" rel="noopener noreferrer"> Set Reminder </a>
</section>
