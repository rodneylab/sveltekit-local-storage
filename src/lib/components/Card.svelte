<script lang="ts">
	import theme from '$lib/shared/stores/theme';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import { container, content } from './Card.css';

	$: currentTheme = $theme === 'summer' ? summerTheme : winterTheme;
</script>

<section class={container}>
	<div class="{content} {currentTheme}">
		<slot />
	</div>
</section>
