import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = 'summer';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});

export default theme;
