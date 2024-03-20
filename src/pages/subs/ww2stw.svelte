<script>
    import { onDestroy } from "svelte";


    import { push } from "svelte-spa-router";


    let flash = ""
    let fo = ""
    const warning_sound = new Audio("/profile/warning.mp3")
    const SPACE_KEY = ' '
    document.body.addEventListener("keydown", (e) => {
        if (e.key !== SPACE_KEY) return

        flash = "flash"
        warning_sound.currentTime = 0
        warning_sound.play()

        setTimeout(() => { flash = "" }, 600)
    })

    onDestroy(() => {
        warning_sound.muted = true
    })
</script>

<div class={`warning ${flash} ${fo}`} style="user-select: none;">
    <div class="warning__meta">
        <div class="warning__header">
        <span>Warning</span>
        <span>- □ <span class="red" on:click={() => {
            fo = "foed"

            setTimeout(() => push("/s/3stw"), 300)
        }}>&nbsp;X&nbsp;</span></span>
        </div>
        <hr />

    </div>
    <div class="warning__body">
        <h1>또 누르는 걸 보니, 윤연욱씨네요. <br> 장난 그만치시죠.</h1>

        <div class="warning__btns">
            <button on:click={() => push("/monitor")}>확인</button>
            <button on:click={() => push("/monitor")}>확인</button>
        </div>
    </div>
</div>

<style>

    @keyframes foanimation {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .foed {
        animation: foanimation 300ms forwards;
    }

    .warning {
        position: fixed;

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        /* border-radius: 15px; */
        background-color: #d3d3d1;
        color: var(--color-bg);

        width: 55%;
        height: 50%;

        padding: 10px;

        border: 10px rgb(159, 159, 159) inset;
    }

    .red {
        color: red;

    }

    .red:hover {
        background-color: red;
        color: var(--color-text);
    }

    .warning__header {
        display: flex;
        justify-content: space-between;

        user-select: none;
        font-size: xx-large;
    }

    .warning__meta {
        height: 30%;
        
    }

    .warning__body {
        position: absolute;
        height: 60%;
        width: calc(100% - 20px);
    }


    .warning__btns {
        position: absolute;
        bottom: 0;
        right: 0;
        /* //margin-right: 10px; */
    }
    button {
        border: 5px rgb(159, 159, 159) inset;
        background-color: #d3d3d1;

        margin-left: 10px;
        margin-right: 10px;

        font-size: xx-large;
    }

    button:active {
        border: 3px whitesmoke inset;
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
        animation: flashing 600ms;
    }
</style>