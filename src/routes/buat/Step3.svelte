<script lang="ts">
	/* ---- exportable form fields ---- */
	export let quote = '';
	export let greeting = '';
	export let music_url = '';
	export let quotes_json: any = null;
	export let paket: 'basic' | 'premium' = 'basic';

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
<main class="min-h-screen bg-gray-100 p-8">
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
						<option value="basic">Basic (Gratis)</option>
						<option value="premium">Premium (Rp 149.000)</option>
					</select>
				</label>
			</div>

			<!-- Bagian rekening -->
			<section class="mt-6">
				<h2 class="mb-2 text-xl font-bold">Rekening Bank</h2>
				<p class="mb-4 text-sm text-gray-500">Tambahkan hingga 10 rekening bank.</p>

				{#each bank_accounts as account, index (index)}
					<div class="relative mb-4 rounded-md border border-gray-200 bg-gray-50 p-4">
						<h3 class="mb-2 text-lg font-semibold">Rekening #{index + 1}</h3>

						{#if bank_accounts.length > 1}
							<button
								type="button"
								on:click={() => removeBankAccount(index)}
								class="absolute top-2 right-2 text-gray-500 transition hover:text-red-600"
								aria-label="Hapus"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						{/if}

						<div class="space-y-3">
							<label class="form-control">
								<span class="label-text">Nama Bank</span>
								<input bind:value={account.bank} required class="input input-bordered" />
							</label>

							<label class="form-control">
								<span class="label-text">Nama Pemilik</span>
								<input bind:value={account.name} required class="input input-bordered" />
							</label>

							<label class="form-control">
								<span class="label-text">Nomor Rekening</span>
								<input bind:value={account.number} required class="input input-bordered" />
							</label>
						</div>
					</div>
				{/each}

				<button type="button" on:click={addBankAccount} class="btn btn-outline btn-primary w-full">
					+ Tambah Rekening Lain
				</button>
			</section>
		</form>
	</div>
</main>
