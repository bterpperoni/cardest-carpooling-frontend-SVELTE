<script lang='ts'>
    import "$lib/style/main.css";
    import A from "$lib/components/button/A.svelte";
    import Nav from "$lib/components/nav/Nav.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
	import { signOut } from "svelte-google-auth/client";
	import { onMount } from "svelte";
    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
	import type { PageData } from "../$types";

	
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
<div class="layout-index">
    <Nav>
        <A customClass="layout1NavA" text="Home" ref="/index/{data.auth.user?.email}"></A>
        <div class="display-row-center">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img style="width:40px; height:40px" src={data.auth.user?.picture} alt="Profil picture">
            <A customClass="layout1NavA" text="Logout" doIt={() => signOutHandle()}></A>
        </div>
    </Nav>
        
        <slot/>
    
    <Footer>
        <div class="div-footer">
            <A customClass="layout1FooterA" text="Passenger" ref="/index/passenger"></A>
        </div>
        <div class="div-footer">
            <A customClass="layout1FooterA" text="Driver"></A>
        </div>
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