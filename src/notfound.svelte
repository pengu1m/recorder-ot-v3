<script lang="ts">
    import { onDestroy } from "svelte";
    import { push } from "svelte-spa-router";

    let flash = ""
    export let notfound_showing = false
    export let goto = ""
    export let description = ""
    const SPACE_KEY = ' '

    const warning_sound = new Audio("/profile/warning.mp3")

    document.body.addEventListener("keydown", (e) => {
        if (e.key !== SPACE_KEY) return
        if (!notfound_showing) return

        flash = "flash"
        warning_sound.currentTime = 0
        warning_sound.play()
        setTimeout(() => { flash = "" }, 800)
    })

    onDestroy(() => {
        warning_sound.muted = true;
    })
</script>

<div class={`notfound ${flash} ${notfound_showing ? "show" : "hide"}`}>
    <div class="notfound__header">
        <span class="notfound__error">Error!</span>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span>- □ <span class="red" on:click={() => push(goto)}>&nbsp;X&nbsp;</span></span>
    </div>
    <hr>
    <div class="notfound__body">
        {description}
    </div>
</div>

<style>
    .notfound {
        position: fixed;

        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);

        /* border-radius: 15px; */
        background-color: #d3d3d1;
        color: var(--color-bg);

        width: 25%;
        height: 20%;

        padding: 10px;

        border: 5px rgb(159, 159, 159) inset;
    }

    .notfound__header {
        display: flex;
        justify-content: space-between;

        user-select: none;
    }

    .notfound__error {
        font-weight: bold;
    }

    .red {
        color: red;

    }

    .red:hover {
        background-color: red;
        color: var(--color-text);
    }

    .notfound__body {
        margin-top: 10px;
        font-family: var(--rag-font);
        font-weight: bold;
    }

    .show {
        display: block;
    }

    .hide {
        display: none;
    }

    @keyframes flashing {
        7% {
            border: 5px rgb(159, 159, 159) inset;
        }
        14% {
            border: gray inset;
        }
        21% {
            border: 5px rgb(159, 159, 159) inset;
        }
        28% {
            border: gray inset;
        }
        35% {
            border: 5px rgb(159, 159, 159) inset;
        }
        42% {
            border: gray inset;
        }
        50% {
            border: 5px rgb(159, 159, 159) inset;
        }
        60% {
            border: gray inset;
        }
        67% {
            border: 5px rgb(159, 159, 159) inset;
        }
        74% {
            border: gray inset;
        }
        80% {
            border: 5px rgb(159, 159, 159) inset;
        }
        90% {
            border: gray inset;
        }
        95% {
            border: 5px rgb(159, 159, 159) inset;
        }
        100% {
            border: gray inset;
        }
    }

    .flash {
        animation: flashing 800ms;
    }
</style>