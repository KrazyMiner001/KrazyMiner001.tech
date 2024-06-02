<script lang="ts">
    import { darkMode } from '../stores/theme.js';

    function toggle() {
        darkMode.update((value: boolean) => !value);
        window.document.body.classList.toggle('dark-mode');
    }
</script>
<button on:click={toggle}>
    <slot/>
</button>
<style>
    button {
        background-color: transparent;
        color: white;
        border: none;
        border-radius: 0;
        padding: 0;
        text-transform: uppercase;

    }
    :global(body.dark-mode) button {
        background-color: transparent;
        color: white;
    }
</style>