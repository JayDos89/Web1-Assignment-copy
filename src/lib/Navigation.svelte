<script>
    import logo from "$lib/images/Ai_logo.png";
</script>

<nav>
    <container class="flex">
        <img src={logo} alt="Ai head pic" width="100px" >;
    </container>
    <ul>
        <li>            
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
        margin-right: 300px;
        gap: 50px;
        flex-direction: row;     
        background-color: #000000;
    }
    .Container4 {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        background: #ffffff00; /* White background for content */
        border-radius: 5px;
        box-shadow: 0 0 10px #17a82a;
}
    
</style>