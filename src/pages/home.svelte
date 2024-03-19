<script>
    import { push } from "svelte-spa-router";
    import { InteractiveManager } from "../lib/interactive";

    let cn = ""
    const i = new InteractiveManager()

    i.space(() => {
        cn = "fouted"
        setTimeout(() => push("/index"), 400)
    })

    i.run()
</script>

<main class={cn}>
    <h1>OT</h1>
    <span class="fake__author">made it by 21001 강시온</span>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
    }

    h1 {
        font-size: 25rem;
        text-shadow: rgb(72, 72, 72) 15px 5px 20px;

        margin: 0;
        padding: 0;
    }
    
    .fake__author {
        font-size: 2rem;
    }

    @keyframes fout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fouted {
        animation: fout 400ms forwards;
    }
</style>