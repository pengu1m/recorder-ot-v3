<script lang="ts">
    import { push } from "svelte-spa-router";
    import { InteractiveManager } from "../../lib/interactive";
    import { onMount } from "svelte";

    let cn = "fied"

    const i = new InteractiveManager()

    i.space(() => {
        cn = "foed"

        setTimeout(() => push("/un5"), 300)
    })

    i.run()
</script>

<main class={cn}>
    <img src="/plan/plan5.png" alt="plan 5" />
</main>

<style>
    @keyframes fi {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .fied {
        animation: fi 300ms forwards;
    }

    main {
        height: 100%;
        width: 100%;

        position: relative;
    }

    img {
        display: block;
        height: 100%;
        margin: auto;
    }
    @keyframes fo {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .foed {
        animation: fo 300ms forwards;
    }

    .vail {
        position: absolute;
        background-color: red;

        display: inline-block;

        height: 100px;
        width: 100px;
    }
</style>
