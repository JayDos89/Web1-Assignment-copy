<script>
    export let title = "The Simulation Theory";
    import Footer from '$lib/Footer.svelte';
    import brainMatrix from '$lib/images/Binary_Brain.png';
    import billionaire from '$lib/images/billionaireMatrix.png';
    import ElonMatrixTheory from '$lib/images/ElonMatrixTheory.png'
</script>

<section>
    <img  src={brainMatrix} width="100%" alt="Background brain" />
</section>
      
<div class="Container3">
    <img src={billionaire} width="100%" alt="An article about billionaires">;
    <img src={ElonMatrixTheory} width="100%" alt="An article about billionaires">;   
</div>

<style>
    
    .background {
    background-image: url($lib/images/Binary_Brain.png);
    background-size: cover;
    background-position: center;
   
}
.Container3{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    max-width: 500px;
    margin-right: 50px;
    margin-left: 120px;
    padding: 2px;
    background: #ffffff00; /* White background for content */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>
