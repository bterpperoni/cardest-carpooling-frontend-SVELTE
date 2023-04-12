<script lang='ts'>
    import "$lib/style/main.css";
    import Nav from "$lib/components/nav/Nav.svelte";
    import A from "$lib/components/button/A.svelte";
	import { initialize, signOut } from "svelte-google-auth/client";
	import { invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";

    async function goHomeWithoutSignup(){
        await signOut();   
        window.location.href = '/';
    }

    export let data: PageData;	
    initialize(data, invalidateAll);
</script>
<Nav>
    <A customClass="layout1NavA" text="Home" doIt={() => goHomeWithoutSignup()}></A>  
</Nav>
<slot/>