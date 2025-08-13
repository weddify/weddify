<script lang="ts">
	import { Copy } from 'lucide-svelte';
	export let couple;
</script>

<section>
	<h2>Kirim Hadiah</h2>
	<p>
		Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah tanda
		ungkapan kasih Anda, Anda bisa memberi kado secara cashless.
	</p>

	<div>
		<input type="checkbox" />
		<div>Klik Disini</div>
		<div>
			{#each couple.bank_accounts ?? [] as acc}
				<div>
					<div>
						<span>{acc.bank} a/n {acc.name}</span>
						<span>{acc.number}</span>
					</div>
					<button on:click={() => navigator.clipboard.writeText(acc.number)}>
						Copy <Copy size={16} />
					</button>
				</div>
			{/each}
		</div>
	</div>

	{#if couple.gift_address}
		<div>
			<span>Atau kirim ke alamat:</span>
			<p>{couple.gift_address}</p>
			<button on:click={() => navigator.clipboard.writeText(couple.gift_address)}>
				Copy <Copy size={16} />
			</button>
		</div>
	{/if}
</section>
