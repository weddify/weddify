<script lang="ts">
	// import TurnsTile from '$lib/ui/TurnsTile.svelte';
</script>

<div class="bg-base-200 flex min-h-screen items-center justify-center p-4">
	<div class="w-full max-w-md">
		<h1 class="mb-6 text-center text-2xl font-bold">Daftar Akun Baru</h1>

		<form
			method="POST"
			class="bg-base-100 mx-auto flex flex-col gap-4 rounded-lg border p-6 shadow-lg"
		>
			<div class="form-control w-full">
				<label class="label" for="fullName">
					<span class="label-text">Nama Lengkap</span>
				</label>
				<input
					id="fullName"
					name="fullName"
					type="text"
					required
					minlength="2"
					placeholder="Masukkan nama lengkap Anda"
					class="input input-bordered w-full"
				/>
			</div>

			<div class="form-control w-full">
				<label class="label" for="email">
					<span class="label-text">Email</span>
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					placeholder="Masukkan email Anda"
					class="input input-bordered w-full"
				/>
			</div>

			<div class="form-control w-full">
				<label class="label" for="password">
					<span class="label-text">Password</span>
				</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					minlength="6"
					placeholder="Minimal 6 karakter"
					class="input input-bordered w-full"
				/>
			</div>
			<!-- <TurnsTile /> -->
			<button type="submit" class="btn btn-primary mt-4 w-full"> Daftar </button>
		</form>

		<p class="mt-6 text-center text-sm">
			Sudah punya akun?
			<a href="/login" class="link link-primary">Login di sini</a>
		</p>
	</div>
</div>
