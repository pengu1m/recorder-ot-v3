<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    document.body.className = "idarken";

    const MONITOR1_PATH = "/monitor/monitor1.png"
    const MONITOR2_PATH = "/monitor/monitor2.png"
    const MONITOR3_PATH = "/monitor/monitor3.png"

    let mp = MONITOR1_PATH

    enum WinSTATE {
        WinClosed,
        WinOpened,
        Shutdowning
    }

    let win_state = WinSTATE.WinClosed;

    onMount(() => {
        const i = (document.querySelector(".monitor") as HTMLImageElement)
        
        const NormalWin = (e: MouseEvent) => {
            const START = {
                x: window.scrollX + i.getBoundingClientRect().left,
                y: 0,
            }

            const END = {
                x: START.x + i.clientWidth,
                y: START.y + i.clientHeight
            }

            
            const OK_X = {
                from: START.x + (i.clientWidth / 186) * 15,
                to: START.x + (i.clientWidth / 186) * 31
            }
            
            const x = e.clientX
            const y = e.clientY

            // check if clicking win button
            const OK_WIN_X = {
                from: START.x + (i.clientWidth / 186) * 13,
                to: START.x + (i.clientWidth / 186) * 20
            }

            const OK_WIN_Y = {
                from: START.y + ((i.clientHeight / 120) * 83),
                to: START.y + ((i.clientHeight / 120) * 94)
            }

            const is_x_ok = (OK_WIN_X.from <= x && x <= OK_WIN_X.to)
            const is_y_ok = (OK_WIN_Y.from <= y && y <= OK_WIN_Y.to)
            if (is_x_ok && is_y_ok) {
                win_state = WinSTATE.WinOpened
                mp = MONITOR2_PATH

                return
            }

            
            // check if clicking others
            if (!(OK_X.from <= x && x <= OK_X.to)) return
            

            const OK_SION_Y = {
                from: START.y + ((i.clientHeight / 120) * 12),
                to: START.y + ((i.clientHeight / 120) * 34)
            }

            if (OK_SION_Y.from <= y && y <= OK_SION_Y.to) {
                push("/sion")
            }

            const OK_UNNYOUNG_Y = {
                from: START.y + ((i.clientHeight / 120) * 38),
                to: START.y + ((i.clientHeight / 120) * 54)
            }

            if (OK_UNNYOUNG_Y.from < y && y <= OK_UNNYOUNG_Y.to) {
                push("/unnyoung")
            }

            const OK_PLAN_Y = {
                from: START.y + ((i.clientHeight / 120) * 58),
                to: START.y + ((i.clientHeight / 120) * 74)
            }

            if (OK_PLAN_Y.from < y && y <= OK_PLAN_Y.to) {
                push("/plan")
            }


        }

        const BarWin = (e: MouseEvent) => {
            const START = {
                x: window.scrollX + i.getBoundingClientRect().left,
                y: 0,
            }

            const END = {
                x: START.x + i.clientWidth,
                y: START.y + i.clientHeight
            }

            const x = e.clientX
            const y = e.clientY

            // check if clicking win button
            const OK_WIN_X = {
                from: START.x + (i.clientWidth / 186) * 13,
                to: START.x + (i.clientWidth / 186) * 20
            }

            const OK_WIN_Y = {
                from: START.y + ((i.clientHeight / 120) * 83),
                to: START.y + ((i.clientHeight / 120) * 94)
            }

            const is_win_x_ok = (OK_WIN_X.from <= x && x <= OK_WIN_X.to)
            const is_win_y_ok = (OK_WIN_Y.from <= y && y <= OK_WIN_Y.to)
            if (is_win_x_ok && is_win_y_ok) {
                win_state = WinSTATE.WinClosed
                mp = MONITOR1_PATH

                return
            }

            // check if clicking shutdown
            const OK_SHUTDOWN_X = {
                from: START.x + (i.clientWidth / 186) * 43,
                to: START.x + (i.clientWidth / 186) * 65
            }

            const OK_SHUTDOWN_Y = {
                from: START.y + ((i.clientHeight / 120) * 75),
                to: START.y + ((i.clientHeight / 120) * 85)
            }

            const is_shutdown_x_ok = (OK_SHUTDOWN_X.from <= x && x <= OK_SHUTDOWN_X.to)
            const is_shutdown_y_ok = (OK_SHUTDOWN_Y.from <= y && y <= OK_SHUTDOWN_Y.to)
            if (is_shutdown_x_ok && is_shutdown_y_ok) {
                win_state = WinSTATE.Shutdowning

                mp = MONITOR3_PATH

                setTimeout(() => push("/end"), 1000)
            }

            console.log(x)
        }
    
        

        document.body.addEventListener("click", (e: MouseEvent) => {
            if (win_state === WinSTATE.WinOpened) {
                BarWin(e)
            } else if (win_state === WinSTATE.WinClosed) {
                NormalWin(e)
            }
        })
    })

</script>
<main>
    <img src={mp} alt="모니터 사진" class="monitor" />
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
</style>