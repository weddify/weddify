<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Couples</h1>

<form method="POST" action="?/logout">
	<button>Logout</button>
</form>

{#each data.couples as c (c.id)}
	<p>{c.groom_name}</p>
{:else}
	<p>Belum ada pasangan.</p>
{/each}
<form method="POST" action="?/create" class="mb-4">
	<input name="name" required placeholder="Nama pasangan" class="border px-2" />
	<button class="ml-2 rounded bg-blue-600 px-3 py-1 text-white">Tambah</button>
</form>
