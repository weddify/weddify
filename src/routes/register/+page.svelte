<script lang="ts">
	import TurnsTile from '$lib/ui/TurnsTile.svelte';
</script>

<form method="POST">
	<input name="email" type="email" required placeholder="email" />
	<input name="password" type="password" required placeholder="password" />
	<TurnsTile />
	<button>Daftar</button>
</form>
