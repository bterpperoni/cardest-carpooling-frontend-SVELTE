<script>
    import "$lib/style/main.css";
    import Nav from "$lib/components/nav/Nav.svelte";
    import A from "$lib/components/button/A.svelte";
</script>
<Nav>
    <A customClass="layout1NavA" text="About"></A>
    <A customClass="layout1NavA" text="Login" ref="/auth/login"></A>
</Nav>
<slot/>