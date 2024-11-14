<script>
    export let title = "The Simulation Theory";
    import Footer from '$lib/Footer.svelte';
    import brainMatrix from '$lib/images/Binary_Brain.png';
    import billionaire from '$lib/images/billionaireMatrix.png';
</script>


    <img  src={brainMatrix} alt="Background brain" />

      
<div class="container">
    <img src={billionaire} alt="An article about billionaires">;
    <caption>A bunch of text here </caption>
</div>

<style>
    
    .background {
    background-image: url($lib/images/Binary_Brain.png);
    background-size: cover;
    background-position: center;
   
}
</style>
