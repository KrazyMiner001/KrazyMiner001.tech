import { writable } from 'svelte/store';

// Create a writable store and set the initial value based on the user's system preference
export const darkMode = writable(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);