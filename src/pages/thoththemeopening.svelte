<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    import Notfoundwithposition from "../notfoundwithposition.svelte";

    let count = 0;
    let try_counnt = 0;

    let show_wiihubbb = false;
    let left_chance = 3
    let can_use_enter = true;
    let hint = ""
    onMount(() => {

        const ENTER_KEY = "Enter"
        const BACKSPACE_KEY = "Backspace"

        const it = (document.querySelector(".input") as HTMLSpanElement)

        document.addEventListener("keydown", (e: KeyboardEvent) => {

            console.log(e.key)
            if (e.key === ENTER_KEY) {
                if (can_use_enter === false) return
                left_chance--;

                try_counnt++;
                if (try_counnt <= 2) {
                    show_wiihubbb = true;
                    can_use_enter = false;

                    setTimeout(() => {
                        show_wiihubbb = false
                        can_use_enter = true
                    }, 4000)

                    it.innerText = ""
                    count = 0;

                    if (try_counnt == 2) {
                        hint = `<br/> <h1>Hint: 지금시간 + 체육복을 입은 사람의 수</h1>`
                    }
                } else {
                    push("/tt")
                }
                

            } else if (e.key === BACKSPACE_KEY) {
                it.innerText = it.innerText.substr(0, it.innerText.length -1 )
                count--;
            } else if (/^[a-zA-Z0-9]+$/.test(e.key)) {

                if (count === 12) return

                console.log("영어")
                it.innerText += "*"

                count++;
            }
        })
    })

</script>

<main>
    <h1>{"Thoth's Theme".toUpperCase()}</h1>
    
    <img src="/siluat/siluat.png" alt="김토트 실루엣 이미지">

    <span style="margin: auto; user-select: none; color: gray;">12자리 비밀번호를 입력하세요</span>
    <span class="input"></span>

    <Notfoundwithposition 
        description={`<h1 style="font-size: 2.7rem;">남은 기회 ${left_chance}번 </h1> ${hint}`}
        left={50}
        top={50}
        notfound_showing={show_wiihubbb}
        play_that_mofucking_warning_sound_in_click_X={true}
        play_that_mofucking_warning_sound_in_SPACE={true}
        play_warning_on_click_X={true}
        todo={() => { }}
        height={55}
        width={75}
    />
</main>

<style>
    h1 {
        text-align: center;
        font-size: 2.7rem;

        user-select: none;
    }

    .input {
        background-color: rgb(26, 26, 26);
        width: 30%;
        font-size: xx-large;

        padding: 5px;
        

        color: whitesmoke;

        margin: auto;

        font-family: Consolas;
        font-weight: bold;

        text-align: center;

        border: 2px whitesmoke solid;
        border-radius: 7px;

        height: 40px;
    }


    .input:focus {
        outline: none;
    }

    .input::selection {
        color: black;
        background-color: whitesmoke;
    }

    main {
        margin-top: 2.5%;
        margin-bottom: 2.5%;
        height: 95%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }


    img {
        height: 60%;

        margin: auto;

        aspect-ratio: 1/1.1;

        animation: fi 1000ms forwards;

        user-select: none;
    }

    @keyframes fi {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>