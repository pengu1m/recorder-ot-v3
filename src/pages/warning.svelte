<script lang="ts">

    import { push, querystring } from "svelte-spa-router";

    let is_clicked = false
    let darkened = false

    const clicking = () => {
        is_clicked = true
        document.body.className = "darkened"

        setTimeout(() => push("/duungjang"), 1500)

    }
</script>
<div class="warning">
    <div class="warning__meta">
        <div class="warning__header">
        <span>Warning</span>
        <span>- □ <span class="red">&nbsp;X&nbsp;</span></span>
        </div>
        <hr />

    </div>
    <div class="warning__body">
        잠시 컴퓨터에서 손 떼세요.

        <div class="warning__btns">
            <button on:click={clicking} disabled={is_clicked}>확인</button>
            <button on:click={clicking} disabled={is_clicked}>확인</button>
        </div>
    </div>
</div>

<style>
    .warning {
        position: fixed;

        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);

        /* border-radius: 15px; */
        background-color: #d3d3d1;
        color: var(--color-bg);

        width: 25%;
        height: 20%;

        padding: 10px;

        border: 5px rgb(159, 159, 159) inset;
    }



    .red {
        color: tomato;

    }

    .warning__header {
        display: flex;
        justify-content: space-between;

        user-select: none;
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
        border: 3px rgb(159, 159, 159) inset;
        background-color: #d3d3d1;
    }

    button:active {
        border: 3px whitesmoke inset;
    }
</style>