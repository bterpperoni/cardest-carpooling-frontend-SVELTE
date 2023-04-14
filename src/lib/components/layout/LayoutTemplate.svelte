<script lang='ts'>
	import { update_slot} from "svelte/internal";
    import Footer from "../footer/Footer.svelte";
    import Nav from "../nav/Nav.svelte";
</script>

<div class="layout-index">
    <Nav>
    {#if $$slots.nav }
            <slot name="nav" />
    {/if}
    </Nav>
    
    <slot/>
    
    {#if $$slots.footer}
    <Footer>
        <slot name="footer" update_slot_base />
    </Footer>
    {/if}
</div>

<style>
    .layout-index{
        display: grid;
        grid-template-rows: 1fr 10fr 1fr;
        grid-template-columns: 1fr;
        height: 100vh;
    }
    
</style>
