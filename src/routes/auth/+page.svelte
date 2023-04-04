<script lang="ts">
    import type { PageData } from './$types';
    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
    import Google from '$lib/components/button/Google.svelte';
    import H1 from '$lib/components/title/H1.svelte';
    import { onMount } from 'svelte';
    
    export let data: PageData;	
    initialize(data, invalidateAll);
    
    onMount(() => {
        console.log('onMount');
        console.log(data);
        if(data.auth.access_token){
            window.location.href = '/index';
        }
    });
    </script>
    
    <div class="display-column-center div-main-page">
        <H1 text="Cardest"></H1>
        <figure>
            <img src="" alt="carpooling" class="img-carpooling"/>
        </figure>   
        <Google/>
    </div>