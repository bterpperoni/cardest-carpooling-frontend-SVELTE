<script lang='ts'>
    import "$lib/style/main.css";
    import LayoutTemplate from "$lib/components/layout/LayoutTemplate.svelte";
	import { initialize, signOut } from "svelte-google-auth/client";
	import { goto, invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";
	import Button from "$lib/components/button/Button.svelte";

    async function goHomeWithoutSignup(){
        await signOut();   
        goto('/');
    }
    export let data: PageData;	
    initialize(data, invalidateAll);
</script>

<LayoutTemplate>
    <div slot="nav">
        <Button class="layout1NavA" doIt={() => goHomeWithoutSignup()}>Home</Button>  
    </div>
    <slot/>
</LayoutTemplate>



