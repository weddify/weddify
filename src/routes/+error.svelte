<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<p>{$page.error?.message}</p>
{#if $page.status === 401}
	<a href="/login">Login dulu</a>
{/if}
