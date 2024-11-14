<script>
    import Header from "$lib/Header.svelte";
    import Nueralink from "$lib/images/Nueralink.png";
    import Hands2 from '$lib/images/Hands2.png';
    import AppleVision from '$lib/images/Apple_Vision_Pro.png';
    import Techbanner from '$lib/images/tech_banner.png';

</script>

<Header headingTitle="Technology's" />

<section class="Container">
    <figure>
        <img src={Techbanner} alt="crypto pic"/>
        <figcaption> <h1>Cryptocurrencys</h1>
            <p>The birth of the first cryptocurrency
                Bitcoin was first released by Satoshi Nakamoto on 3rd Jan 2009 as a new form of money. It is a novel invention that has given birth to the technology we call blockchain today. Little did people know that it will have an impact wider than just reinventing the antiquated financial system. It has in fact, gone on to inspire a whole generation of developers</p>
            <p>There are thousands of cryptocurrencies. Some of the best known include:
                Bitcoin:
                Founded in 2009, Bitcoin was the first cryptocurrency and is still the most commonly traded. The currency was developed by Satoshi Nakamoto – widely believed to be a pseudonym for an individual or group of people whose precise identity remains unknown.</p>
            </figcaption>           
    </figure>
</section>
    
<div class="Container">
    <img src={Nueralink} alt="pic of Nueralink"/> 
    <img src={Hands2} alt="pic of robot and human hands"/>
    <img src={AppleVision} alt="pic of Apple Vision Pro"/>
</div>

<style>
   .Container{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px;
   } 
</style>