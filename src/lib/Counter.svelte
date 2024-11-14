<script>
    let count = 0;

    function incrementCount123() {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        count += randomNum;
    }
    function subtractCount1() {
        const randomNum = Math.floor(Math.random() * 2) + 1;
        count -= randomNum;
    }
    
</script>

<button on:click={incrementCount123}><h4>Add 1,2 or 3 randomly</h4></button>
<button on:click={subtractCount1}><h3>subtract 1,2 randomly</h3></button>

<h2>Your currently sitting on: {count} and they can see you</h2>

{#if count > 13 && count < 15}
      <p>You survived.... for now</p>
  {:else if count <= 13}
      <p>keep going!</p>
      {:else}
      <p>You were caught and terminated</p>
{/if}

<style>
    
</style>