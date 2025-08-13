<script lang="ts">
	import { supabase } from '$lib/db/supabase.js';
	import type { Tables } from '$lib/types/supabase';
	import { formatRelative } from '$lib/utils/date.js';
	export let couple: Tables<'couples'>;

	type Ucapan = Tables<'rsvps'>;

	let guestName = '';
	let message = '';
	let status = 'hadir';
	let loading = false;
	let sent = false;
	let errorMsg = '';
	let ucapans: Ucapan[] = [];

	// hitung mundur karakter
	$: remaining = 300 - message.length;

	async function loadUcapan(): Promise<Ucapan[]> {
		const { data } = await supabase
			.from('rsvps')
			.select('*')
			.eq('couple_id', couple.id)
			.order('created_at', { ascending: false });
		return data ?? [];
	}

	async function submitRsvp() {
		if (message.length > 300) {
			errorMsg = 'Pesan tidak boleh lebih dari 300 karakter';
			return;
		}
		if (!guestName.trim()) {
			errorMsg = 'Nama tidak boleh kosong';
			return;
		}
		if (!message.trim()) {
			errorMsg = 'Pesan tidak boleh kosong';
			return;
		}

		loading = true;
		errorMsg = '';

		const { error } = await supabase.from('rsvps').insert({
			couple_id: couple.id,
			guest_name: guestName.trim(),
			status,
			message: message.trim(),
		});

		if (error) {
			errorMsg = error.message;
		} else {
			sent = false;
			guestName = '';
			message = '';
			status = 'hadir';
			ucapans = await loadUcapan();
		}
		loading = false;
	}

	// load on mount
	(async () => {
		ucapans = await loadUcapan();
	})();
</script>

<section>
	<h2>Ucapan & Doa</h2>
	<p>Berikan ucapan dan doa terbaik</p>

	<form on:submit|preventDefault={submitRsvp}>
		<h3>Kirim Ucapan</h3>

		<input type="text" placeholder="Nama Anda" bind:value={guestName} required />

		<select bind:value={status}>
			<option value="hadir">Hadir</option>
			<option value="tidak">Tidak Hadir</option>
			<option value="ragu">Masih Ragu</option>
		</select>

		<div>
			<textarea
				bind:value={message}
				rows="4"
				maxlength="300"
				placeholder="Ucapan / Doa (maks. 300 karakter)"
			></textarea>
			<span>{remaining}</span>
		</div>

		<button type="submit" disabled={loading || !guestName || !message}>
			{#if loading}
				Mengirim...
			{:else}
				Kirim Ucapan
			{/if}
		</button>
	</form>

	<div>
		<h3>Ucapan Tamu</h3>
		{#if ucapans.length === 0}
			<p>Belum ada ucapan.</p>
		{:else}
			<div>
				{#each ucapans as ucapan (ucapan.id)}
					<div>
						<img
							src="https://ui-avatars.com/api/?name={encodeURIComponent(
								ucapan.guest_name
							)}&background=random&color=fff&rounded=true&size=40"
							alt="Avatar"
						/>
						<div>
							<span>{ucapan.guest_name}</span>

							{#if ucapan.status === 'hadir'}
								<svg width="16" height="16" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="m9 12 2 2 4-4" />
								</svg>
							{:else if ucapan.status === 'tidak'}
								<svg width="16" height="16" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="m15 9-6 6" />
									<path d="m9 9 6 6" />
								</svg>
							{:else if ucapan.status === 'ragu'}
								<svg width="16" height="16" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M7 10h10" />
									<path d="M7 14h10" />
								</svg>
							{/if}
						</div>
						<div>{ucapan.message}</div>
						<div>{formatRelative(ucapan.created_at ?? '')}</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
