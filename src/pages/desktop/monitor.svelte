<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    document.body.className = "idarken";

    onMount(() => {
        const i = (document.querySelector(".monitor") as HTMLImageElement)
    
        document.body.addEventListener("click", (e: MouseEvent) => {
            const START = {
                x: window.scrollX + i.getBoundingClientRect().left,
                y: 0,
            }

            const END = {
                x: START.x + i.clientWidth,
                y: START.y + i.clientHeight
            }

            
            const OK_X = {
                from: START.x + (i.clientWidth / 13),
                to: START.x + (i.clientWidth / 6)
            }
            
            const x = e.clientX
            const y = e.clientY
            
            if (!(OK_X.from <= x && x <= OK_X.to)) return
            
            console.log(y)

            const OK_SION_Y = {
                from: START.y + ((i.clientHeight / 120) * 12),
                to: START.y + ((i.clientHeight / 120) * 28)
            }

            if (OK_SION_Y.from <= y && y <= OK_SION_Y.to) {
                push("/sion")
            }

            const OK_UNNYOUNG_Y = {
                from: START.y + ((i.clientHeight / 120) * 28),
                to: START.y + ((i.clientHeight / 120) * 44)
            }

            if (OK_UNNYOUNG_Y.from < y && y <= OK_UNNYOUNG_Y.to) {
                push("/unnyoung")
            }

            const OK_PLAN_Y = {
                from: START.y + ((i.clientHeight / 120) * 44),
                to: START.y + ((i.clientHeight / 120) * 60)
            }

            if (OK_PLAN_Y.from < y && y <= OK_PLAN_Y.to) {
                push("/plan")
            }
        })
    })

</script>
<main>
    <img src="/monitor.png" alt="모니터 사진" class="monitor" />
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