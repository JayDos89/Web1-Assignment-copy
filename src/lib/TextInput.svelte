<script>
    let myText = "Hello";
</script>

<h3>Change the text in the input and the paragraph changes too</h3>

<p>{myText}</p>
<input type="text" bind:value={myText}>