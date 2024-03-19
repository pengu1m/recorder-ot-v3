<script>
    import { push } from "svelte-spa-router";
    import { InteractiveManager } from "../lib/interactive";

    let cn = "fined"

    const i = new InteractiveManager()

    i.space(() => {
        cn = "fouted"
        setTimeout(() => push("/profile"), 400)
    })

    i.run()
</script>

<div class={`contents ${cn}`}>
    <h1 class="contents__title">CONTENTS</h1>
    <div class="content__body">
        <ol class="contents__list">
            <li class="contents__item">간단한 소개</li>
            <li class="contents__item">배경</li>
            <li class="contents__item">목적</li>
            <li class="contents__item">운영구조</li>
            <li class="contents__item">앞으로의 계획</li>
            <li class="contents__item">오늘의 계획</li>
        </ol>
    </div>
</div>

<style>
    .contents {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        overflow: hidden;

        height: 100%;
    }

    .contents__title {
        text-align: center;

        font-size: 4rem;
    }

    .content__body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-evenly;

        width: 80%;
        margin: auto;
    }


    .contents__item {
        font-weight: bold;
        font-size: 2.5rem;
    }

    @keyframes fin {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .fined {
        animation: fin 400ms forwards;
    }

    @keyframes fout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fouted {
        animation: fout 400ms forwards;
    }
</style>