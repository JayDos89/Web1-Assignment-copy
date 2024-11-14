<script>
  import MenuHover from "$lib/MenuHover.svelte";
  import Counter from "$lib/Counter.svelte";
  import TextInput from "$lib/TextInput.svelte";
  
  export let title = "Escape the virus sweep";
  export let data;
  console.log(data);
  
</script>

<h5>{title}</h5><br>

<!--<section class="container">-->
    <p>I can see a hiding spot between 13 - 15</p>
    <p>You need to land there or they will catch you - Don't over step</p><br>
    <Counter />
<!--</section>-->

<section class ="container2">
    <div class="cryptoFont1">
      <h1>Crtpo Currency API data</h1> <br>
        Crypto name - {data.btc.name}<br>
        All time high - ${(data.btc.allTimeHighUSD).toFixed(2)} USD<br>
        Volume - {(data.btc.volume)} <br>
        Cap - {(data.btc.cap)}
        <p>Delta:</p>
        <ul>
              <li>Hour: {data.btc.delta.hour}</li>
              <li>Day: {data.btc.delta.day}</li>
              <li>Week: {data.btc.delta.week}</li>
              <li>Month: {data.btc.delta.month}</li>
              <li>Quarter:{data.btc.delta.quarter}</li>
              <li>Year: {data.btc.delta.year}</li>
        </ul>
    </div>
</section> 

<style>
  .cryptoFont1{
    color: blueviolet;
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
  }
  .container2{
    max-width: 800px;
    margin: auto;
    padding: 2px;   
    background: rgb(0, 0, 255); /* White background for content */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>