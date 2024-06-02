<script>
    import {theme} from '$lib/stores/theme.js';
    import ModButton from "./ModButton.svelte";
    import octocomputing from '$lib/images/octocomputing.png';
    import theAbsorber from '$lib/images/the_absorber.png';
    import GlobalTheme from "$lib/GlobalTheme.svelte";
</script>

<GlobalTheme/>

<svelte:head>
    <title>Mods</title>
    <meta name="description" content="List of Minecraft mods that I have created" />
</svelte:head>

<div class="text-column">
    <h1>List of Minecraft mods that I have made:</h1>

    <ModButton
            modName="OctoComputing"
            modDescription='A Minecraft mod about leaves I created to learn how to make mods and as an excuse to play Minecraft in IT. It adds realistic leaf drops and other <i>related</i> features.'
            modImageLocation={octocomputing}
    />
    <ModButton
            modName="The Absorber"
            modDescription='Adds a sponge re-texture as a custom block. Behaves like a sponge with increased range. I made this to practice making mods.'
            modImageLocation={theAbsorber}
    />
</div>