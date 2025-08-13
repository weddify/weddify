<script lang="ts">
	export let couple;
</script>

<section>
	<div>
		<div>
			<h2>The Groom</h2>

			<div>
				<img src={couple.groom_photo_url} alt="Foto mempelai pria" />

				<h3>{couple.groom_name}</h3>

				<p>
					Putra dari Bapak {couple.groom_father} dan
					<br />
					Ibu {couple.groom_mother}
				</p>

				{#if couple.groom_ig}
					<a
						href="https://instagram.com/{couple.groom_ig.replace('@', '')}"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
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
