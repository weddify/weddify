<script lang="ts">
	export let data: any; // preview object
	export let amount: number;
</script>

<div class="card glass space-y-4 p-6">
	<h2 class="mb-4 text-2xl font-bold">Review Data</h2>

	<!-- tampilkan semua field read-only -->
	<div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
		<!-- Detail Couple -->
		<div>
			<div><strong>Mempelai Pria:</strong> {data.display_groom_name}</div>
			<div><strong>Mempelai Wanita:</strong> {data.display_bride_name}</div>
		</div>
		<!-- Detail Event -->
		<div>
			<div><strong>Tanggal Akad:</strong> {data.ijab_date} {data.ijab_time_range}</div>
			<div><strong>Tanggal Resepsi:</strong> {data.resepsi_date} {data.resepsi_time_range}</div>
		</div>
		<!-- Package -->
		<div>
			<div><strong>Paket:</strong> {data.paket} — Rp {amount.toLocaleString()}</div>
		</div>
		<!-- Detail Gift -->
		<div>
			<!-- rekening -->
			{#if data.bank_accounts.length}
				<div>
					<strong>Rekening:</strong>
					<ul class="ml-4 list-disc">
						{#each data.bank_accounts as acc}
							<li>{acc.bank} – {acc.name} – {acc.number}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</div>
</div>
