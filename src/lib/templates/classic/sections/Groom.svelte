<script lang="ts">
	export let couple;
</script>

<section
	class="relative mx-auto flex w-full max-w-md items-center bg-slate-500 px-6 py-12 text-center md:max-w-lg"
>
	<div class="mx-auto grid max-w-lg grid-cols-1 gap-2 text-center md:grid-cols-2">
		<div
			class="z-20 mx-auto w-60 rounded-t-full bg-rose-400/10 text-amber-950 ring-1 ring-rose-400/40 backdrop-blur-sm md:col-span-2"
		>
			<h2 class="font-classic mt-10 pt-2 text-center text-2xl font-bold text-amber-950">
				The Groom
			</h2>

			<div class="flex flex-col items-center text-amber-950">
				<img
					src={couple.groom_photo_url}
					alt="Foto mempelai pria"
					class="my-4 h-60 w-40 rounded-full border-2 border-rose-200 object-cover object-top shadow ring-2 ring-rose-600"
				/>

				<h3 class="text-2xl font-bold">{couple.groom_name}</h3>

				<p class=" my-2 text-center text-sm">
					Putra dari Bapak {couple.groom_father} dan
					<br />
					Ibu {couple.groom_mother}
				</p>
				{#if couple.groom_ig}
					<a
						href="https://instagram.com/{couple.groom_ig.replace('@', '')}"
						target="_blank"
						rel="noopener noreferrer"
						class="my-2 flex items-center gap-0.5 pb-5 text-sm text-blue-600 hover:no-underline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-5 w-5"
						>
							<path
								d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
							/>
						</svg>
						{couple.groom_ig}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background:
			linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
			url('/16340656_v798-adj-28.jpg') no-repeat center center;
		background-size: cover;
	}
</style>
