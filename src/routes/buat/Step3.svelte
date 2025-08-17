<script lang="ts">
	/* ---- exportable form fields ---- */
	export let quote = '';
	export let greeting = '';
	export let music_url = '';
	export let quotes_json: any = null;
	export let paket: 'basic' | 'premium' | 'reseller' = 'basic';

	export let gift_address = '';
	export let template: 'classic' | 'modern' = 'classic';

	/* ---- bank accounts ---- */
	export let bank_accounts: Array<{ bank: string; name: string; number: string }> = [];

	/* ---- helpers ---- */
	function addBankAccount() {
		bank_accounts = [...bank_accounts, { bank: '', name: '', number: '' }];
	}

	function removeBankAccount(index: number) {
		bank_accounts = bank_accounts.filter((_, i) => i !== index);
	}

	/* ---- optional: build payload ---- */
	$: payload = {
		quote,
		greeting,
		music_url,
		quotes_json,
		paket,
		gift_address,
		template,
		bank_accounts: bank_accounts.filter((a) => a.bank.trim() && a.name.trim() && a.number.trim()),
	};
</script>

<!-- Mark-up sudah rapi & responsif -->
<main class=" p-4">
	<div class="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
		<h1 class="mb-6 text-center text-2xl font-bold">Form Pengaturan Undangan Digital</h1>

		<form on:submit|preventDefault>
			<!-- Grid 2 kolom di desktop -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<label class="form-control">
					<span class="label-text">Quote</span>
					<textarea bind:value={quote} class="textarea textarea-bordered" rows="2"></textarea>
				</label>

				<label class="form-control">
					<span class="label-text">Kata Sambutan</span>
					<textarea bind:value={greeting} class="textarea textarea-bordered" rows="2"></textarea>
				</label>

				<label class="form-control">
					<span class="label-text">Alamat Kirim Hadiah</span>
					<input bind:value={gift_address} class="input input-bordered" />
				</label>

				<label class="form-control">
					<span class="label-text">URL Musik</span>
					<input bind:value={music_url} class="input input-bordered" />
				</label>

				<label class="form-control">
					<span class="label-text">Tema</span>
					<select bind:value={template} class="select select-bordered">
						<option value="classic">Classic</option>
						<option value="modern">Modern</option>
					</select>
				</label>

				<label class="form-control">
					<span class="label-text">Paket</span>
					<select bind:value={paket} class="select select-bordered">
						<option value="basic">Basic (12.000)</option>
						<option value="premium">Premium (Rp 30.000)</option>
						<option value="reseller">Reseller (Rp 70.000)</option>
					</select>
				</label>
			</div>

			<!-- Bagian rekening -->
			<section class="mt-6 max-h-72 space-y-4 overflow-y-auto">
				<h2 class="text-xl font-bold">Rekening Bank</h2>
				<p class="mb-2 text-sm text-gray-500">Tambahkan hingga 5 rekening bank.</p>

				{#each bank_accounts as account, index (index)}
					<div
						class="bg-base-100 relative rounded-xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md"
					>
						<h3 class="mb-3 text-lg font-semibold text-gray-700">Rekening #{index + 1}</h3>

						{#if bank_accounts.length > 1}
							<button
								type="button"
								on:click={() => removeBankAccount(index)}
								class="btn btn-xs btn-circle absolute top-3 right-3 text-gray-500 transition hover:bg-red-100 hover:text-red-600"
								aria-label="Hapus"
							>
								✕
							</button>
						{/if}

						<div class="space-y-4">
							<label class="form-control">
								<span class="label-text font-medium">Nama Bank</span>
								<input bind:value={account.bank} required class="input input-bordered w-full" />
							</label>

							<label class="form-control">
								<span class="label-text font-medium">Nama Pemilik</span>
								<input bind:value={account.name} required class="input input-bordered w-full" />
							</label>

							<label class="form-control">
								<span class="label-text font-medium">Nomor Rekening</span>
								<input bind:value={account.number} required class="input input-bordered w-full" />
							</label>
						</div>
					</div>
				{/each}

				<button
					type="button"
					on:click={addBankAccount}
					disabled={bank_accounts.length >= 5}
					class="btn btn-outline btn-primary mt-2 w-full"
				>
					+ Tambah Rekening Lain
				</button>
			</section>
		</form>
	</div>
</main>
