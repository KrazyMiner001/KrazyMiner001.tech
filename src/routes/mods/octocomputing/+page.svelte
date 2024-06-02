<script>
    import GlobalTheme from "$lib/GlobalTheme.svelte";

</script>

<GlobalTheme />

<svelte:head>
    <title>OctoComputing</title>
    <meta name="description" content="Cool mod about leaves" />
</svelte:head>

<div class="text-column">
    <h1>OctoComputing</h1>
    <p>
        A Minecraft mod about leaves I created to learn how to make mods and as an excuse to play Minecraft in IT. It adds realistic leaf drops and other <i>related</i> features.
    </p>
    <h2>Basic premise of mod:</h2>
    <p>
        In this mod, breaking leaves yields an accurate number of leaves.
        As this causes a lot of item entities to be spawned, you need to use the leaf picker item to obtain leaves.
        These leaves allow you to create gear with them, which is somewhat good, but breaks quickly.
        All leaves can be crafted in a 3x3 to make compressed variants, which can be used to make gear that is better than the normal gear.
        Compressed leaves can also be further compressed into double compressed leaves, which can be used to make gear that is better than the compressed gear.
        The mod also adds a leaf blower, which breaks nearby leaf blocks.
        All leaves can be used as fuel with normal leaves cooking for 1 tick, compressed for 10 ticks, and double compressed for 100 ticks.
    </p>
    <h2>Progression:</h2>
    <p>
        The mod have 3 main progressions stages:
        <ol>
            <li>Discovery</li>
            <li>Corruption</li>
            <li>Purification</li>
        </ol>
    <p>
        These stages each mark a large change in what you do to keep progressing.
        The first stage shall be discussed here, but to experience the others you will need to play the mod, as I don't want to spoil it.
    </p>
    <h2>Discovery:</h2>
    <p>
        This is the stage in which you discover the world of leaves around you.
        You will first need to craft leaf pickers and use them to obtain leaves.
        During this stage you will craft gear, gather the various types of leaves, etc.
        If you go exploring you might discover ruins underground or massive tree with pedestals inside.
        This stage's end is marked by you gathering all four types of leaf singularities.
    </p>
    <h2>Leaf Singularities:</h2>
    <p>
        Leaf singularities are a super tier of leaves and only exist for the 4 unique leaf types:
        <ul>
            <li>Mixed Leaves: Obtained from combining all 9 vanilla leaves</li>
            <li>Mystery Leaves: Rare drop from any leaf type, guaranteed drop from leaf monsters</li>
            <li>Transientwood Leaves: Transientwood trees can be found around the world, those drop these leaves</li>
            <li>Endergleam Leaves: New tree variant spawns in the end called Endergleam trees</li>
        </ul>
    <h1>Downloads:</h1>
    <a href="https://modrinth.com/mod/octocomputing/versions">
        <img alt="Modrinth Version" src="https://img.shields.io/modrinth/v/octocomputing?style=for-the-badge&logo=modrinth">
    </a>
</div>

<style>
    h2 {
        font-size: 1.5em;
        margin-bottom: 0.2em;
    }
    p {
        margin: 0.5em;
    }
</style>