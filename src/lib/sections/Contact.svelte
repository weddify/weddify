<section id="contact" class="h-dvh bg-rose-50 px-6 py-16">
	<div class="mx-auto mt-5 max-w-xl space-y-8 text-center">
		<h2 class="text-3xl font-bold text-rose-700">Hubungi Kami</h2>

		<!-- Form -->
		<form
			class="card glass space-y-4 p-6"
			on:submit|preventDefault={(e) => {
				alert('Pesan terkirim! Kami akan balas via email.');
				e.target.reset();
			}}
		>
			<input type="email" placeholder="Email Anda" required class="input input-bordered w-full" />
			<textarea
				rows="3"
				placeholder="Pesan & pertanyaan"
				required
				class="textarea textarea-bordered w-full"
			></textarea>
			<button type="submit" class="btn btn-primary w-full"> Kirim Pesan </button>
		</form>

		<!-- Contact Details -->
		<div class="space-y-2 text-sm text-rose-600">
			<p><strong>Email:</strong> hello@weddify.id</p>
			<p><strong>Telegram:</strong> t.me/weddify_id</p>
		</div>
	</div>
</section>
