<!--<script>
    const hoverSound = new Audio ("$lib/sound/button_Hover1");

    function hoversound (){
        hoverSound.play();
    }
</script>-->

<nav>
    <ul>
        <li>
            <!--<button on:mouseenter={playHoverSound}>Reality</button>-->  
            <a href="/"> Reality</a>  
            <a href="/technologys"> Technology's</a>  
            <a href="/simulation"> Simulation</a>  
            <a href="/game"> Game</a>  
        </li>
    </ul>
</nav>

<style>
    a {
        text-decoration: none;
        color: #27ace4;
        font-weight: bold;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
        font-size: large;
    }
    li {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0.5em 1em;
        margin: 0.5em 1em;
    }
    ul {
        display: flex;
        gap: 50px;
        flex-direction: row;     
        background-color: #000000;
    }
</style>