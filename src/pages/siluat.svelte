<script lang="ts">
    import { push } from "svelte-spa-router";
    import { InteractiveManager } from "../lib/interactive";
    import { slowly } from "../lib/slowly";
    
    let c = ""

    document.body.className = "darkened"

    const comments = [
        "자 이제 다시 진행하세요.",
        "아! 잠깐, 박주원씨 지금입니다."
    ]

    const i = new InteractiveManager()

    const LIMITTIME = 40

    const sanstalk = new Audio("/duungjang/sanstalk.mp3")
    sanstalk.loop = true
    sanstalk.playbackRate = 2

    const warning_sound = new Audio("/profile/warning.mp3")


    i.space(() => {
        c = ""

        sanstalk.play()

        slowly(
            comments[0],
            (t) => "- " + t + " -",
            (t) => c = t,
            LIMITTIME,
            () => sanstalk.pause()
        )
    })

    i.space(() => {
        warning_sound.currentTime = 0
        warning_sound.play()

        c = ""

        sanstalk.play()

        slowly(
            comments[1],
            (t) => "- " + t + " -",
            (t) => c = t,
            LIMITTIME,
            () => sanstalk.pause()
        )
    })

    let adsasd = "aaaaaaed"

    i.space(() => {
        sanstalk.muted = true
        warning_sound.muted = true

        adsasd = "anied"

        setTimeout(() => push("/tto"), 1000);
        
    })

    i.run()
</script>

<main>
    <div class={`img ${adsasd}`}>
        <img src="/siluat/siluat.png" alt="김토트 실루엣 이미지">
    </div>

    <div class="comments">
        <h1>{c}</h1>
        <p>Space를 입력하여 다음으로</p>
    </div>
</main>

<style>

    @keyframes aaaaaa {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .aaaaaaed {
        animation: aaaaaa 500ms forwards;
    }
    
    .img {
       margin: auto;
       height: 60%;

       text-align: center;

       position: relative;
       top: 45%;
       transform: translateY(-50%);

       user-select: none;
    }

    img {
        widows: 100%;
        height: 100%;
    }

    main {
        width: 100%;
        height: 100%;
    }

    .comments {
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 20%;

        user-select: none;

        transform: translateY(-32px);
    }

    h1 {
        text-align: center;
    }

    p {
        color: gray;
        text-align: center;
        width: 100%;
        user-select: none;
    }

    @keyframes ani {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .anied {
        animation: ani 1000ms forwards;
    }
</style>