<script lang='ts'>
    import "$lib/style/main.css";
    import A from "$lib/components/button/A.svelte";
	import { signOut } from "svelte-google-auth/client";
	import { onMount } from "svelte";
    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
	import type { PageData } from "../$types";
	import LayoutTemplate from "$lib/components/layout/LayoutTemplate.svelte";

	
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

    <LayoutTemplate>        
        <div slot="nav" class="display-row-space-between">
            <A customClass="layout1NavA" text="Home" ref="/index/{data.auth.user?.email}"></A>
            <div class="display-row-center">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img style="width:40px; height:40px" src={data.auth.user?.picture} alt="Profil picture">
                <A customClass="layout1NavA" text="Logout" doIt={() => signOutHandle()}></A>
            </div>
        </div>

        <slot/>

        <div slot="footer" class="footer">
            <div class="div-footer">
                <A customClass="layout1FooterA" text="Passenger" ref="/index/rides"></A>
            </div>
            <div class="div-footer">
                <A customClass="layout1FooterA" text="Driver"></A>
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