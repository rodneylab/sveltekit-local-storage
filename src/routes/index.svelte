<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import theme from '$lib/shared/stores/theme';
  import '$lib/styles/styles.css';
  import { summerTheme } from '$lib/styles/themes/summerTheme.css';
  import { winterTheme } from '$lib/styles/themes/winterTheme.css';
  import { heading, main } from './index.css';

  $: themeIsSummer = $theme === 'summer';
  $: currentTheme = themeIsSummer ? summerTheme : winterTheme;
</script>

<!-- svelte-ignore component-name-lowercase -->
<main class={`${main} ${currentTheme}`}>
  <Card>
    <h1 class={heading}>SvelteKit Local Storage</h1>
  </Card>
</main>
