<script>
    document.body.className = "idarken"
</script>

<main>
    <h1>T<span class="w">0</span> B<span class="w">E</span> C<span class="w">0</span>NTINU<span class="w">E</span>D</h1>
    <span><br/></span>
    <span><br/></span>
    <span class="fake__author">PRESENTATION BY 21324 윤연욱</span>
    <span class="fake__author">MADE IT BY 김토트, AND 20811 남궁성욱</span>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
    }

    h1 {
        font-size: 8.4rem;
        text-shadow: 0px 0px 13px tomato;

        margin: 0;
        padding: 0;

        border-radius: 3px;

        color: rgb(215, 1, 1);

        transform: translateY(-20%);
    }

    .w {
        color: rgb(239, 232, 232);
        text-shadow: 0px 0px 13px whitesmoke;
    }
    
    .fake__author {
        font-size: 1.5rem;

        transform: translateY(25px);
        font-weight: 800;
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