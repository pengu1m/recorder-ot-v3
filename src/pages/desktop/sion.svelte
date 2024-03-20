<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    const MONITOR1_PATH = "/monitor/monitor1.png"

    let cn = "st"
    let sty = ""

    onMount(() => {
        const back = (document.querySelector(".warning") as HTMLElement)
        const header = (document.querySelector(".warning__header") as HTMLElement)
        
        const whole = back.clientHeight - 40
        const head = header.clientHeight
        const body = whole - head


        const l = (document.querySelector("ul") as HTMLElement)

        const inn = l.clientHeight

        const good_rate = (body / inn) - 0.3;

        sty = `height: ${body}px; font-size: ${good_rate}rem`
    })
</script>
<main>
    <img src={MONITOR1_PATH} alt="모니터 사진" class="monitor" />

    <div class={`warning ${cn}`} style="user-select: none;">
        <div class="warning__meta">
            <div class="warning__header">
            <span>📄 | 강시온</span>
            <span>- □ <span class="red" on:click={() => { 
                const w = document.querySelector(".warning")

                if (w !== null) {
                    cn = "en"
                }

                setTimeout(() => {
                    push("/monitor")
                }, 200)
                }   }>&nbsp;X&nbsp;</span></span>
            </div>
            <hr />
    
        </div>
        <div class="warning__body" style={sty}>

            <ul>
                <li>이 동아리 내가 만든 척 하기</li>
                <li>이세계 아이돌 시청하기</li>
                <li>너의 이름은 굿즈 구매</li>
                <li>애들에게 인스타 홍보하기</li>
                <li>김토트 구박하기</li>
                <li>박창현에게 잘 보이기</li>
                <li>윤연욱 의견 묵살하기</li>
                <li>박주원 트집잡기</li>
                <li>남궁성욱 붙잡아두기</li>
                <li>후배들 내 편으로 만들기</li>
            </ul>
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: center;
    }

    img {
        height: 100%;
        user-select: none;
        position: relative;
    }

    @keyframes foanimation {
        from {
            opacity: 1;
            
        }
        to {
            opacity: 0;
        }
    }

    .warning {
        position: fixed;

        /* border-radius: 15px; */
        background-color: #ffffff;
        color: var(--color-bg);

        width: 80%;
        height: 80%;

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
        
    }

    .warning__body {
        position: absolute;
        width: calc(100% - 20px);
    }

    @keyframes starting_animation {
        from {
            opacity: 0;
            transform: scale(1%);
            transform: translate(-100%, 100%);
        }
        to {
            opacity: 1;
            transform: scale(100%);
        }
    }

    .st {
        animation: starting_animation 200ms forwards ;
    }

    @keyframes ending_animation {
        from {
            opacity: 1;
            transform: scale(100%);
        }
        to {
            opacity: 0;
            transform: scale(1%);
            transform: translate(-100%, 100%);
        }
    }

    .en {
        animation: ending_animation 200ms forwards;
    }
</style>