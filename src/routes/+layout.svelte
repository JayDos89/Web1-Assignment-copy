<script>
    import Navigation from "$lib/Navigation.svelte";
    import '../styles/global.css';
    import Footer from "$lib/Footer.svelte";
</script>

<Navigation />

<slot />
<Footer />
<style>
    :global(*) {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #000000;
        color: #502ecc;
    }
</style>