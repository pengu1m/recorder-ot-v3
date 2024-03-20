<script lang="ts">
    import { push } from "svelte-spa-router";
    import { InteractiveManager } from "../lib/interactive";
    import Notfoundwithposition from "../notfoundwithposition.svelte";
    import { onDestroy } from "svelte";

    document.body.className = document.body.className.replace("darkened", "")

    let something_for_rendering = -999999

    let notfounds = new Array<{
        notfound_showing: boolean,
        todo: () => void,
        description: string,
        top: number,
        left: number,
        play_that_mofucking_warning_sound_in_SPACE: boolean
    }>()

    /**
     * 
_________ .____    .____________  ____  __.      ________ ___________________________       .____    .___   _____  .______________
\_   ___ \|    |   |   \_   ___ \|    |/ _|     /  _____/ \_____  \__    ___/\_____  \      |    |   |   | /     \ |   \__    ___/
/    \  \/|    |   |   /    \  \/|      <      /   \  ___  /   |   \|    |    /   |   \     |    |   |   |/  \ /  \|   | |    |   
\     \___|    |___|   \     \___|    |  \     \    \_\  \/    |    \    |   /    |    \    |    |___|   /    Y    \   | |    |   
 \______  /_______ \___|\______  /____|__ \_____\______  /\_______  /____|   \_______  /____|_______ \___\____|__  /___| |____|   
        \/        \/           \/        \/_____/      \/         \/                 \/_____/       \/           \/               

     */

    const CLICK_GOTO_LIMIT = 13


  const add_fucking_notfound = () => {
    new Array(6).fill(0).forEach(() => {
            notfounds.push({
            description: "404 NoT fouND Not 404 FOund 4No0 4tF undo",
            left: Math.floor(Math.random() * 101),
            top: Math.floor(Math.random() * 101),
            notfound_showing: true,
            todo: add_fucking_notfound,
            play_that_mofucking_warning_sound_in_SPACE: false
          })
    })
    
    something_for_rendering++

    if (something_for_rendering === CLICK_GOTO_LIMIT - 1) {
        notfounds = []
        push("/warning")
    }
  }

  const i = new InteractiveManager()

    i.space(() => {
        notfounds.push({
    description: "404 NoT fouND Not 404 FOund 4No0 4tF undo",
    left: 50,
    top: 50,
    notfound_showing: true,
    todo: add_fucking_notfound,
    play_that_mofucking_warning_sound_in_SPACE: true,
  })

        something_for_rendering = 0
    })

    const warning_sound = new Audio("/profile/warning.mp3")

    const SPACE_KEY = ' '
    document.body.addEventListener("keydown", (e) => {
        if (e.key !== SPACE_KEY) return

        warning_sound.currentTime = 0
        warning_sound.play()

    })

    onDestroy(() => {
        warning_sound.muted = true
    })

    i.run()
</script>

<main>
    <div>
        <img src="/background/sucks.jpg" alt="구린것들">
    </div>

    <div class="description">
        <h1>우리가 코딩에게 벽을 느끼는 이유.</h1>

        <p>
            스크래치는 작업을 쉽게 만들어주지만, <br />
            완성품도 쉽게 만들어버리는 문제가 있습니다.
        </p>
        

        <p>
            대한민국은 코딩 인프라가 잡히지 못해, <br />
            사실 코딩 교육이라는 틀 자체도 애매합니다.
        </p>

        <p>
            글로 연애를 배우면 어떻게 될까요? <br />
            코딩도 마찬가지 입니다.
        </p>

        <p>
            코딩도 코딩만의 언어가 있겠죠? <br />
            설명이 아주 배반적입니다.
        </p>

    </div>


    {#each notfounds as nf}
    <Notfoundwithposition
        description={nf.description}
        left={nf.left}
        top={nf.top}
        notfound_showing={nf.notfound_showing}
        todo={nf.todo}
        play_warning_on_click_X={true}
        play_that_mofucking_warning_sound_in_SPACE={false}
        play_that_mofucking_warning_sound_in_click_X={true}
        />
        <p style="opacity: 0;">{something_for_rendering}</p>
    {/each}

</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        column-gap: 20%;

        width: 90%;
        margin: auto;

        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;

        transform: translateX(35px);
    }

    p {
        font-size: x-large;
    }
</style>