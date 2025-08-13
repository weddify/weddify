<script lang="ts">
	export let groomName: string;
	export let brideName: string;
	export let receptionDate: string;
	export let guestName: string;
	export let onOpen: () => void;
</script>

<section>
	<h1>
		{groomName}
		<span>&</span>
		{brideName}
	</h1>
	<p>{receptionDate}</p>
	<p>
		Kepada Yth.
		<strong>{guestName}</strong>
	</p>
	<button on:click={onOpen}>Buka Undangan</button>
</section>
