<script lang="ts">
    export let modName: string;
    export let modDescription: string;
    export let modImageLocation: string;
</script>

<button>
    <a href={"/mods/"+modName.toLowerCase().replaceAll(" ", "-")}>
        <div class="content">
            <img class="corner" src={modImageLocation} alt={modName}/>
            <div class="text">
                <h2>{modName}</h2>
                <p>{@html modDescription}</p>
            </div>
        </div>
    </a>
</button>

<style>
    img {
        height: 5em;
        width: 5em;
        object-fit: inherit;
        image-rendering: pixelated;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5em;
        overflow: hidden;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    .text h2, .text p {
        margin: 0;
    }

    .text h2 {
        font-size: 1.5em;
    }

    button {
        background-color: forestgreen;
        border: 0.5em solid oklch(24.12% 0.054 154);
        cursor: pointer;
        color: inherit;
        margin-bottom: 1em;
    }

    a {
        text-decoration: none; /* Remove underline */
        color: inherit; /* Use the same color as the parent element */
    }

    a:hover {
        color: inherit; /* Use the same color as the parent element on hover */
    }
</style>
