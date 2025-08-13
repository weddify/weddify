<!-- src/lib/templates/classic/+page.svelte -->
<script lang="ts">
	import Opening from './sections/Opening.svelte';
	import Groom from './sections/Groom.svelte';
	import Bride from './sections/Bride.svelte';
	import Countdown from './sections/Countdown.svelte';
	import CoupleQuotes from './sections/CoupleQuotes.svelte';
	import EventInfo from './sections/EventInfo.svelte';
	import GuestBook from './sections/GuestBook.svelte';
	import GiftInfo from './sections/GiftInfo.svelte';
	import Closing from './sections/Closing.svelte';
	import Footer from './sections/Footer.svelte';

	export let data; // dari +page.server.ts
</script>

<div data-theme="classic">
	<Opening couple={data.couple} />

	{#if data.couple.groom_name}
		<Groom couple={data.couple} />
	{/if}

	{#if data.couple.bride_name}
		<Bride couple={data.couple} />
	{/if}

	<CoupleQuotes couple={data.couple} />
	<EventInfo couple={data.couple} />

	{#if data.couple.resepsi_date}
		<Countdown target={data.couple.resepsi_date} />
	{/if}

	<GuestBook couple={data.couple} />
	<GiftInfo couple={data.couple} />
	<Closing couple={data.couple} />
	<Footer />
</div>
