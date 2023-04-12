<script lang="ts">
    import type { PageData } from './$types';
    import { signIn } from 'svelte-google-auth/client';
    import Google from '$lib/components/button/Google.svelte';
    import H1 from '$lib/components/title/H1.svelte';
    import { onMount } from 'svelte';
    
    export let data: PageData;	
    
    onMount(() => {
        if(data.auth.access_token){
            window.location.href = '/index';
        }
    });

    const signInHandle = async () => {
        await signIn();
        if(data.auth.access_token){
            window.location.href = `/auth/${data.auth.user?.email}`;
        }
    }
    </script>
    
    <div class="display-column-center div-main-page">
        <H1 text="Cardest"></H1>
        <figure>
            <img src="" alt="carpooling" class="img-carpooling"/>
        </figure>   
        <Google doIt={() => signInHandle()}/>
    </div>