<script lang='ts'>
    import "$lib/style/main.css";
    import A from "$lib/components/button/A.svelte";
	import { signOut } from "svelte-google-auth/client";
	import { onMount } from "svelte";
    import type { PageData } from './$types';
    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
	import Nav from "$lib/components/nav/Nav.svelte";

    export let data: PageData;	
    initialize(data, invalidateAll);

    onMount(() => {
        console.log('User\'s data');
        console.log(data);
        if(!data.auth.access_token){
            window.location.href = '/auth';
        }
    });

    async function signOutHandle() {
        await signOut();
        window.location.href = '/auth';
    }
</script>
<Nav>
    <A customClass="layout1NavA" text="About"></A>
    <A customClass="layout1NavA" text="Logout" doIt={() => signOutHandle()}></A>
</Nav>
    
    <slot/>
