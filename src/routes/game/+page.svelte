
<script>
  import MenuHover from "$lib/MenuHover.svelte";
  import Counter from "$lib/Counter.svelte";
  import TextInput from "$lib/TextInput.svelte";
  import Touch from "$lib/images/tech_banner.png";
  import crypto from "$lib/images/crypto.png";
  import blockchain_machine from "$lib/images/blockchain_machine.png";
  import keyboard from "$lib/images/Keyboard.png";
  //export let title = "Escape the virus sweep";
  export let data;
  console.log(data);
  const code = "WIN";
  let guess;
  let tokens = 5;
  let keyLetter = [];
  function add(){
    tokens ++;
  }
  function randKey(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = Math.floor(Math.random() * 26);
    keyLetter[keyLetter.length + 1] = alphabet[index];
    tokens -= 1;
  }
</script>

<h2>Tokens = {tokens}</h2><br>
  
<label for="name"><h3>The word is (WIN) 
  <input type="text" bind:value={guess} id="guess">           
</label>
console.log({guess})
<div class="container4">
    <h2>Random Letter Generator</h2>
    <h4>Cost - 1 Token per letter </h4><br><br><p> Console: {keyLetter}</p>
    <img src={keyboard} width="300px" alt="of a rainbow keyboard" on:click={randKey} />
</div>

<section class="container2">
    <img src={blockchain_machine} width="100%" alt="of blockchain machine" on:click={add}/>
</section>

<section class="container2">
  <Counter />
</section>


<section class ="container2">
    <div>
      <img src={crypto} width="100%"  alt="pic of human robot hands touching"/> 
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
    max-width: 50rem;
    margin: auto;
    padding: 1px;  
    margin-right: 100px;
    margin-top: 1px; 
    background: rgb(0, 0, 255); /* White background for content */
    background-image: none;
    border-radius: 5px;
    box-shadow: 0 0 10px #17a82a;
  }

  .container4{
    max-width: 25rem;
    margin:auto;
    padding: 1px;  
    margin-right: 100px;
    margin-top: 20px;    
  }

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

  .flex2{
    display: flex;
    align-items: start;
    justify-content:flex-start;
    max-width: 500px;
}

</style>