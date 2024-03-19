<script lang="ts">
    import { pop } from "svelte-spa-router";

    document.body.className += " canflow"

    const dommmhauugcha = () => {
        document.body.className = document.body.className.replace("canflow", "")
        pop()
    }
</script>

<h1>
    <div># 시오니의 투두</div>
    <div class="list">
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

    <button on:click={dommmhauugcha}>뒤로가기</button>
</h1>

<style>
    button {
        font-size: 3rem;
        font-weight: bold;
    }

    .list {
        background-color: whitesmoke;
        color: black;
        padding: 20px;

        display: inline-block;
    }
</style>

