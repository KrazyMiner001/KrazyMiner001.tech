import { writable } from 'svelte/store';

function createTheme() {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const initialValue = savedTheme || 'light';
    const { subscribe, set, update } = writable(initialValue);

    return {
        subscribe,
        toggle: () => set(savedTheme === 'light' ? 'dark' : 'light'),
        update
    };
}

export const theme = createTheme();

if (typeof window !== 'undefined') {
    theme.subscribe((value) => {
        localStorage.setItem('theme', value);
    });
}