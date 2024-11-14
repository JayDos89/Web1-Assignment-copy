<script>  
    import Header from "$lib/Header.svelte"
    let inputText = "";
    let inputName = "";
    let inputAge = "";
    let inputEmail = "";
    let inputMessage = "";
    let name = "";
    let age = "";
    let email = "";
    let message = "";
                                        // check form validation on Moodle about anti hacking
    function saveInput(event){      
        event.preventDefault();
        inputName = name;
        inputAge = age;
        inputEmail = email;
        inputMessage = message;
    }
    
</script>

<Header headingTitle="Contact us" />

<iframe src="https://giphy.com/embed/128Ygie2wLdH5m" width="384" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<p><a href="https://giphy.com/gifs/computer-reality-mind-128Ygie2wLdH5m"></a></p>

<p>If you feel stuck in the simulation please let us know below</p>
<box>
    <form on:submit={saveInput}>
        <label for="name">Name
            <input type="text" bind:value={name} id="name">            
        </label>
    
        <label for="name">Age  
            <input type="text" bind:value={age} id="age">           
        </label>
    
        <label for="email">Email
            <input type="email" bind:value={email} id="email">      
        </label>
    
        <label for="message">Your message:
            <textarea bind:value={message} id="message"></textarea>
        </label>

        <button type="submit">Save</button>
        
    </form>
</box>

<h1>People stuck in the matrix</h1>

<section class="text1">
    Name: {inputName} <br>
    Age: {inputAge} <br>
    Email: {inputEmail} <br>
    Message: {inputMessage}
</section>


<style>
    form {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    p{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: large;
        font-size: 1.5rem ;
        color: rgb(84, 218, 82);
    }
    input{
        display: flex;
        justify-content: space-around;
        width: 250px;
        height: 50;
    }
    textarea{
        width: 1000px;
        height: 50px;
    }
    
    button{
        display: flex;
        justify-content: space-around;
        width: 50px;
        height: 30px;
        background-color: rgb(84, 218, 82);
        color:#a81717;
    }
    .text1{
        color:blueviolet;
        font-size: larger;
        font-style: italic;
    }
   
</style>

