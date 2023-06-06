<script lang='ts'>
    	import "$lib/style/main.css";
	import { signOut } from "svelte-google-auth/client";
	import { onMount } from "svelte";
    	import { invalidateAll } from '$app/navigation';
    	import { initialize } from 'svelte-google-auth/client';
	import { goto } from '$app/navigation';
	import type { PageData } from "../$types";
	import LayoutTemplate from "$lib/components/layout/LayoutTemplate.svelte";
	import Button from "$lib/components/button/Button.svelte";

	
    export let data: PageData;
    initialize(data, invalidateAll);
    onMount(() => {
        console.log('User\'s data');
        console.log(data);
        if(!data.auth.access_token){
            goto('/auth');
        }
    });
    async function signOutHandle() {
        await signOut();
        goto('/auth');
    }
</script>

    <LayoutTemplate>        
        <div slot="nav" class="display-row-space-between">
            <Button class="layout1NavA" ref="/index/{data.auth.user?.email}">Home</Button>
            <div class="display-row-center">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img style="width:40px; height:40px" src={data.auth.user?.picture} alt="Profil picture">
                <Button class="layout1NavA" doIt={() => signOutHandle()}>Logout</Button>
            </div>
        </div>

        <slot/>

        <div slot="footer" class="footer">
            <div class="div-footer">
                <Button class="layout1FooterA" ref="/index/rides">Passenger</Button>
            </div>
            <div class="div-footer">
                <Button class="layout1FooterA">Driver</Button>
            </div>
        </div>
    </LayoutTemplate>        

    <style>
        .footer{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            height: 100%;
            width: 100%;
        }
    </style>
