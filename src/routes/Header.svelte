<script>
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme.js';
	import github_mark from '$lib/images/github_mark.svg';
	import github_mark_white from '$lib/images/github_mark_white.svg';
	import darkThemeMoon from '$lib/images/dark_theme_moon.svg';
	import lightThemeSun from '$lib/images/light_theme_sun.svg';
	let github = github_mark;
	let themeSymbol = lightThemeSun;

	// Reactive statement that updates the GitHub logo and theme symbol whenever theme changes
	$: {
		if ($theme === 'dark') {
			github = github_mark_white;
			themeSymbol = darkThemeMoon;
		} else {
			github = github_mark;
			themeSymbol = lightThemeSun;
		}
	}

	function toggleTheme() {
		theme.update(value => value === 'dark' ? 'light' : 'dark');
	}
</script>

<header>
	<div class="corner">
		<button on:click={toggleTheme}>
			<img src={themeSymbol} alt="Change Theme" />
		</button>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/mods' ? 'page' : undefined}>
				<a href="/mods">Mods</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/KrazyMiner001/KrazyMiner001.tech">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		display: flex;
		align-items: center;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.corner Button img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	:global(body) nav {
		transition: --background 0.3s;
	}

	:global(body.dark) nav {
		--background: rgba(0, 0, 0, 0.7);
	}

	:global(body.light) nav {
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--background);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	:global(body) nav a {
		transition: color 0.3s;
	}

	:global(body.dark) nav a {
		color: var(--dark-text-color);
	}

	:global(body.light) nav a {
		color: var(--light-text-color);
	}

	a:hover {
		color: var(--color-theme-1);
	}

	button {
		background-color: transparent;
		border: none;
		border-radius: 0;
		padding: 0;
	}
</style>
