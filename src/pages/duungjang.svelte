<script lang="ts">
    import { push } from "svelte-spa-router";
    import { InteractiveManager } from "../lib/interactive";
    import { slowly } from "../lib/slowly";
    import { onMount } from "svelte";

    const action = (item: {top: string, bottom: string}) => {
        c1 = ""
        c2 = ""

        sanstalk.play()

        slowly(
            item.top,
            (t) => "- " + t,
            (t) => c1 = t,
            LIMITTIME,
            () => slowly(
                item.bottom,
                (t) => t + " -",
                (t) => c2 = t,
                LIMITTIME,
                () => {
                    sanstalk.pause();
                    
                    c1 = c1.replace(ORIGINAL_KIMTHOTH, GOLD_KIMTHOTH)
                    c2 = c2.replace(ORIGINAL_KIMTHOTH, GOLD_KIMTHOTH)
                }
            )
        )
    }
    

    const comments = [
        {
            top: "여러분 안녕하세요. 면접 때 이후로 오랜만입니다.",
            bottom: "저는 동아리 속 또 다른 누군가 '김토트'라고 합니다."
        },
        {
            top: "OT가 너무 지루해 잠시 뺏었습니다.",
            bottom: "잠시 지루한 OT는 잊으시고 감상해주세요."
        },
        {
            top: "우리의 목적은 간단합니다.",
            bottom: "코딩의 세계를 학교 전체로 넓혀보고 싶었습니다."
        },
        {
            top: "지속 가능한 학교의 활동을 꿈꿨습니다.",
            bottom: "여러분도 원하는 걸 얻고, 저희도 같이 만들어나가며, 원하는 걸 얻죠."
        },
        {
            top: "지금 보고 계시는 것 또한 모두 코딩으로 구현했습니다.",
            bottom: "다음으로 넘어가 볼까요?"
        }
    ]

    let c1 = ""
    let c2 = ""

    const FIRST_INTERVAL = 11.13 * 1000
    const SECOD_INTERVAL = 19.6 * 1000
    const THIRD_INTERVAL = 18.5 * 1000
    const FOURTH_INTERVAL = 11 * 1000

    onMount(() => {
        const COMMENTS = (document.querySelector(".h2s") as HTMLDivElement).offsetHeight
        const HEIGHT = screen.availHeight
        const v = (document.querySelector("video") as HTMLVideoElement)

        v.height = (HEIGHT - COMMENTS)

        v.play()

        v.playbackRate = 0.95

        action(comments[0])

        setTimeout(() => {
            action(comments[1])

            setTimeout(() => {
                action(comments[2])

                setTimeout(() => {
                    action(comments[3])

                    setTimeout(() => {
                        action(comments[4])
                    }, FOURTH_INTERVAL)
                }, THIRD_INTERVAL)
            }, SECOD_INTERVAL)
        }, FIRST_INTERVAL)

    })

    const ORIGINAL_KIMTHOTH = "김토트"
    const GOLD_KIMTHOTH = `<span style="color: yellow; font-weight: bold;">김토트</span>`

    const i = new InteractiveManager()

    const LIMITTIME = 20

    const sanstalk = new Audio("/duungjang/sanstalk.mp3")
    sanstalk.loop = true
    sanstalk.playbackRate = 2
    
    let casdas = "";

    i.space(() => {
        sanstalk.muted = true

        setTimeout(() => push("/siluat"), 1000);
        
        casdas = "fo"
    })

    i.run()
</script>

<main class={`${casdas}`}>
    <div class="h2s">
        <h2>{@html (c1 == "" ? `<span style="color: black">???</span>` : c1)}</h2>
        <h2>{@html (c2 == "" ? `<span style="color: black">???</span>` : c2)}</h2>
    </div>

    <div class="video">
        <video src="/ot.mp4" muted />
    </div>
</main>

<style>
    .h2s {
        padding: 60px;
    }

    h2 {
        text-align: center;
        user-select: none;
    }

    main {
        height: 100vh;
        display: flex;

        flex-direction: column;
        justify-content: space-between;
    }

    .video {
        /* background-color: ; */
    }

    video {
        display: block;

        margin: auto;

        transform: translateY(-50px);
    }

    @keyframes fo_ani {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fo {
        animation: fo_ani 1000ms forwards;
    }
</style>