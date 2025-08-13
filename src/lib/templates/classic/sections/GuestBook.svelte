<script lang="ts">
	import { CircleCheck, CircleX, CircleEqual } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
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

<section
	class="bg-base-200 relative mx-auto w-full max-w-lg items-center px-6 py-12 text-center text-base"
>
	<h2 class="font-classic mb-6 text-center text-3xl md:text-4xl">Ucapan & Doa</h2>

	<p class="mb-6 text-sm">Berikan ucapan dan doa terbaik</p>

	<form
		class="card glass mx-auto mb-8 max-w-md space-y-4 p-6 shadow-lg"
		on:submit|preventDefault={submitRsvp}
	>
		<h3 class="mb-6 border-b border-dashed pb-4 text-xl font-semibold">Kirim Ucapan</h3>

		<input
			type="text"
			placeholder="Nama Anda"
			bind:value={guestName}
			required
			class="input input-bordered w-full"
		/>

		<select bind:value={status} class="select select-bordered w-full">
			<option value="hadir">Hadir</option>
			<option value="tidak">Tidak Hadir</option>
			<option value="ragu">Masih Ragu</option>
		</select>

		<div class="relative">
			<textarea
				bind:value={message}
				rows="4"
				maxlength="300"
				placeholder="Ucapan / Doa (maks. 300 karakter)"
				class="ilang textarea textarea-bordered w-full pr-12"
			></textarea>
			<span class="absolute right-3 bottom-3 text-xs" class:text-red-500={remaining < 30}>
				{remaining}
			</span>
		</div>

		<button
			type="submit"
			class="btn btn-primary w-full"
			disabled={loading || !guestName || !message}
		>
			{#if loading}
				<span class="loading loading-spinner"></span> Mengirim...
			{:else}
				Kirim Ucapan
			{/if}
		</button>
	</form>

	<div class="glass mx-auto max-w-md rounded-lg p-4 shadow-lg">
		<h3 class="mb-6 border-b border-dashed pb-4 text-xl font-semibold">Ucapan Tamu</h3>
		{#if ucapans.length === 0}
			<p class="text-gray-500">Belum ada ucapan.</p>
		{:else}
			<div class="ilang max-h-96 space-y-2 overflow-y-auto pr-2" in:fade={{ duration: 400 }}>
				{#each ucapans as ucapan (ucapan.id)}
					<div class="chat chat-start">
						<div class="chat-image avatar">
							<img
								src="https://ui-avatars.com/api/?name={encodeURIComponent(
									ucapan.guest_name
								)}&background=random&color=fff&rounded=true&size=30"
								alt="Avatar"
								class="w-10 rounded-full"
							/>
						</div>
						<div class="chat-header items-center">
							<span class="text-sm font-light">{ucapan.guest_name}</span>

							{#if ucapan.status === 'hadir'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-4 w-4"
								>
									<circle cx="12" cy="12" r="10" class="fill-success" />
									<path d="m9 12 2 2 4-4" class="stroke-base-100" fill="none" />
								</svg>
							{:else if ucapan.status === 'tidak'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-4 w-4"
								>
									<circle cx="12" cy="12" r="10" class="fill-error" />
									<path d="m15 9-6 6" class="stroke-base-100" />
									<path d="m9 9 6 6" class="stroke-base-100" />
								</svg>
							{:else if ucapan.status === 'ragu'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-4 w-4"
								>
									<circle cx="12" cy="12" r="10" class="fill-warning" />
									<path d="M7 10h10" class="stroke-base-100" fill="none" />
									<path d="M7 14h10" class="stroke-base-100" fill="none" />
								</svg>
							{/if}
						</div>
						<div class="chat-bubble bg-neutral text-base-200 text-left">{ucapan.message}</div>
						<div class="chat-footer text-xs text-gray-400">
							{formatRelative(ucapan.created_at ?? '')}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
