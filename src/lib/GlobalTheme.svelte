<script>
    import { theme } from '$lib/stores/theme.js';
    import '../global.css';

    // Reactive statement that updates the body class whenever theme changes or page is loaded/refreshed
    $: {
        if (typeof window !== 'undefined') {
            document.body.className = $theme;
        }
    }
</script>