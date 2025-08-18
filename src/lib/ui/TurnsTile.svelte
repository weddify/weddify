<script lang="ts">
	import { Turnstile } from 'sveltekit-turnstile';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
</script>

<Turnstile siteKey={PUBLIC_TURNSTILE_SITE_KEY} />
