<script>
    let count = 0;
    let hide = false;
    function incrementCount123() {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        count += randomNum;
    }
    function subtractCount1() {
        const randomNum = Math.floor(Math.random() * 2) + 1;
        count -= randomNum;
    }
    
</script>

<section class="container">
    <h2>Escape the virus sweep</h2><br>
    <p>Hidden: {hide}</p>
    console.log({hide});
    <figure>
                <p>I can see a hiding spot between 13 - 15</p>
                <p>You need to land there or they will catch you - Don't over step</p><br>
            <div>
                <button on:click={incrementCount123}><h3>Add 1,2 or 3 randomly</h3></button>
            </div>
                <button on:click={subtractCount1}><h3>subtract 1,2 randomly</h3></button>
       
                <h2>Your currently sitting on: {count} and they can see you</h2>

            {#if count > 13 && count < 15}
                <p>You survived.... for now</p>
            {:else}    
                {#if count <= 13}
                    <p>keep going!</p>
                {:else}
                    <p>You were caught and terminated</p>
                    {hide = true}
                {/if}
            {/if}    
    </figure>
</section>

<style>
    .Button2{
    background:    #17a82a;
    background:    linear-gradient(#17a82a, #073763);
    border-radius: 50px;
    padding:       20px 45px;
    color:         #ffffff;
    display:       inline-block;
    font:          normal bold 26px/1 "Roboto", sans-serif;
    text-align:    center;
  }
  .container-div{
    direction: flex;
    
  }
</style>
