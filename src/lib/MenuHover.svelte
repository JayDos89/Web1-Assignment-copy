<script>
    import { sound } from "svelte-sound";
    import menuHover from "$lib/sound/button_Hover1.ogg";
</script>

<button use:sound={{ src: menuHover, events: ["mouseover", "mouseout"]}}> Hover Me!! 🎶</button >


