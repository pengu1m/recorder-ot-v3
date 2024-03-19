<script lang="ts">
    import { InteractiveManager } from "../lib/interactive";
    import Notfound from "../notfound.svelte";
    import Warning from "./warning.svelte";

    const i = new InteractiveManager()

    
    let card1 = { classname: "card", src: "/profile/yunyok.jpg", name: "21324 윤연옥" }
    let card2 = { classname: "card", src: "/profile/sion.jpg", name: "21001 강시온" }
    let card3 = { classname: "card", src: "/profile/sunguk.jpg", name: "20811 남궁성욱" }

    const SPACE = ' '
    const clnize = (text: string) => SPACE + text
    const warning_sound = new Audio("/profile/warning.mp3")

    i.space(() => { card1.classname += clnize("uppen") })
    i.space(() => { card2.classname += clnize("uppen") })
    i.space(() => { card3.classname += clnize("uppen") })
    i.space(() => {
        card1.src = "/profile/blue_skull.jpg"
        card1.name = ""
        card2.src = "/profile/orange_skull.jpg"
        card2.name = ""
        card3.src = "/profile/pupple_skull.jpg"
        card3.name = ""

        document.body.className = "darkened"
    })

    let err_show = false

    i.space(() => { 
        warning_sound.play()
        card1.name = "H1, I'm Thoth"
        card1.classname += clnize("reden")

        card2.name = "H1, I'm Thoth"
        card2.classname += clnize("reden")

        card3.name = "H1, I'm Thoth"
        card3.classname += clnize("reden")
        err_show = true
    })

    i.run()
</script>

<main class="centered">
    <div class="tripled">
        <div class={card1.classname}>
            <img src={card1.src} alt="성욱 프로필 사진" />
            <h2 class="nametag">{card1.name}</h2>
        </div>
    
        <div class={card2.classname}>
            <img src={card2.src} alt="시온 프로필 사진" />
            <h2 class="nametag">{card2.name}</h2>
        </div>
    
        <div class={card3.classname}>
            <img src={card3.src} alt="연욱 프로피 사진" />
            <h2 class="nametag">{card3.name}</h2>
        </div>
    </div>

    <Notfound goto="/background" notfound_showing={err_show} description="404 Not Found" />
</main>

<style>
    .centered {
        display: flex;
        justify-content: center;
        flex-direction: column;

        height: 100%;
    }

    .tripled {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: space-evenly;
        column-gap: 10%;

        width: 80%;
        margin: auto;
    }

    img {
        object-fit: cover;
        width: 100%;

        border-radius: 20px;
    }

    .nametag {
        text-align: center;
    }

    @keyframes uppen {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .card {
        transform: translateY(100%);
        opacity: 0;
    }
    
    .uppen {
        animation: uppen 1000ms forwards cubic-bezier(0.075, 0.82, 0.165, 1)
    }

    .reden h2 {
        color: black;
        background-color: red;
        font-family: var(--rag-font);
    }
</style>