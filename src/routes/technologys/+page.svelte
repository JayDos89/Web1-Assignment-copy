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
        <img src={Techbanner} alt="of a crypto banner" width="750px"/>
        <figcaption> <h1>Cryptocurrencys</h1><br>
            <h2>What is bitcoin?</h2><p>The birth of the first cryptocurrency
                Bitcoin was first released by Satoshi Nakamoto on 3rd Jan 2009 as a new form of money. It is a novel invention that has given birth to the technology we call blockchain today. Little did people know that it will have an impact wider than just reinventing the antiquated financial system. It has in fact, gone on to inspire a whole generation of developers</p>
            <p>There are thousands of cryptocurrencies. Some of the best known include:
                Bitcoin:
                Founded in 2009, Bitcoin was the first cryptocurrency and is still the most commonly traded. The currency was developed by Satoshi Nakamoto – widely believed to be a pseudonym for an individual or group of people whose precise identity remains unknown.</p></figcaption>
    </figure>
</section>
<section class="Container"> 
    <figure>
        <img src={Nueralink} alt="of Nueralink" width="400px" />
        <figcaption><h4>Neuralink's first human patient able to control mouse through thinking, Musk says
            By Reuters
            February 21, 20248:22 AM GMT+13Updated 9 months ago</h4></figcaption>
    </figure>
</section> 
<div class="Container">    
    <img src={Hands2} alt="of robot and human hands"/>   
</div>

<div class="Container">
    <img src={AppleVision} alt="of Apple Vision Pro"/>
</div>

<style>
   .Container{
    display: flex;
    justify-content: space-between;
    gap: 2px;
    padding: 1px;
    
   } 
</style>