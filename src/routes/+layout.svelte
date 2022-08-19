<script lang="ts">
	import theme from '$lib/shared/stores/theme';
	import '$lib/styles/styles.css';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-serif-pro/400.css';
	import { container, containerMain, header, themeButton } from './layout.css';

	$: themeIsSummer = $theme === 'summer';
	$: currentTheme = themeIsSummer ? summerTheme : winterTheme;
	$: buttonText = themeIsSummer ? 'Summer theme' : 'Winter theme';
	$: buttonAriaLabel = themeIsSummer ? 'Switch to Winter theme' : 'Switch to Summer theme';
</script>

<div class="{container} {containerMain} {currentTheme}">
	<!-- svelte-ignore component-name-lowercase -->
	<header class={header}>
		<button
			aria-label={buttonAriaLabel}
			class="{themeButton} {currentTheme}"
			on:click={() => (themeIsSummer ? theme.set('winter') : theme.set('summer'))}
			>{buttonText}</button
		>
	</header>
	<slot />
</div>
