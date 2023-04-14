<script lang='ts'>
    import "$lib/style/main.css";
    import LayoutTemplate from "$lib/components/layout/LayoutTemplate.svelte";
    import { initialize, signOut } from "svelte-google-auth/client";
    import { invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";
	import A from "$lib/components/button/A.svelte";

    async function goHomeWithoutSignup(){
        await signOut();   
        window.location.href = '/';
    }
    export let data: PageData;	
    initialize(data, invalidateAll);
</script>

<LayoutTemplate>
    <div slot="nav">
        <A customClass="layout1NavA" text="Home" doIt={() => goHomeWithoutSignup()}></A>  
    </div>
    <slot/>
</LayoutTemplate>



