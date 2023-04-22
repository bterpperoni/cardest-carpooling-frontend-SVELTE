<script lang='ts'>
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
    
    <Footer>
    {#if $$slots.footer}
        <slot name="footer" />
    {/if}
    </Footer>
    
</div>

<style>
    .layout-index{
        display: grid;
        grid-template-rows: 1fr 10fr 1fr;
        grid-template-columns: 1fr;
        height: 100vh;
    }
    
</style>
