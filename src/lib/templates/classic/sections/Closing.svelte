<script lang="ts">
	export let couple;
</script>

<section
	class="mx-auto flex h-dvh w-full max-w-lg items-center bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200"
>
	<div class="mx-auto max-w-lg grid-cols-1 gap-2 text-center">
		<div class="flex flex-col items-center text-amber-950">
			<img
				src="https://static.vecteezy.com/system/resources/previews/004/328/836/large_2x/muslim-wedding-couple-illustration-free-vector.jpg"
				alt="Foto mempelai pria"
				class="my-4 h-70 w-40 rounded-full border-2 border-rose-200 object-cover object-top shadow ring-2 ring-rose-600"
			/>
		</div>
		<div>
			<span class="text-sm">
				Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan
				hadir dan memberikan doa restu. Atas kehadiran dan doa restunya kami mengucapkan terima
				kasih.
			</span>
		</div>
		<div class="my-10">
			<span class="text-md font-thin"><i>Kami yang berbahagia</i></span>
			<br />
			<span class="font-classic text-lg font-bold"> {couple.groom_name} & {couple.bride_name}</span>
		</div>
	</div>
</section>
