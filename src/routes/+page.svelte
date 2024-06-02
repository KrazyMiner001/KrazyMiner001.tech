<script>
	import { theme } from '$lib/stores/theme.js';

	// Reactive statement that updates the body class whenever theme changes
	$: {
		if (typeof window !== 'undefined') {
			document.body.className = $theme;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<style>
	:global(body) {
		transition: background-color 0.3s, color 0.3s;
	}

	:global(body.light) {
		background-color: var(--light-background-color);
		color: var(--light-color);
	}

	:global(body.dark) {
		background-color: var(--dark-background-color);
		color: var(--dark-color);
	}
</style>
