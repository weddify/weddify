<script lang="ts">
	import { Copy } from 'lucide-svelte';
	export let couple;
</script>

<section
	class="bg-base-200 relative mx-auto w-full max-w-lg items-center px-6 py-12 text-center text-base"
>
	<h2 class="font-classic text-center text-4xl">Kirim Hadiah</h2>
	<p class="my-6 text-sm">
		Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah tanda
		ungkapan kasih anda, anda bisa meberi kado secara cashless.
	</p>

	<div class="bg-base-100 border-base-300 collapse border text-center">
		<input class="w-full" type="checkbox" />
		<div class="collapse-title mx-auto pr-4 text-center font-semibold">Klik Disini</div>
		<div class="collapse-content text-sm">
			{#each couple.bank_accounts ?? [] as acc}
				<div
					class="mx-auto mb-2 flex w-full max-w-xl items-center justify-between rounded bg-gray-100 p-3"
				>
					<div class="flex flex-col">
						<span class="text-lg font-medium text-gray-800">{acc.bank} a/n {acc.name}</span>
						<span class="text-base text-gray-900">{acc.number}</span>
					</div>
					<button
						class="btn btn-sm btn-outline whitespace-nowrap"
						on:click={() => navigator.clipboard.writeText(acc.number)}
					>
						Copy <Copy class="my-2" size={16} />
					</button>
				</div>
			{/each}
		</div>
	</div>

	{#if couple.gift_address}
		<div class="glass mx-auto mt-6 w-full max-w-xl rounded p-4 text-center">
			<span class="font-bold">Atau kirim ke alamat:</span>
			<p class="my-4 text-center">{couple.gift_address}</p>
			<button
				class="btn btn-sm btn-outline my-4 py-4 whitespace-nowrap"
				on:click={() => navigator.clipboard.writeText(couple.gift_address)}
			>
				Copy
				<Copy class="my-2" size={16} />
			</button>
		</div>
	{/if}
</section>
