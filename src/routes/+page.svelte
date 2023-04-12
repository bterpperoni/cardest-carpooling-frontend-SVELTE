<script lang='ts'>
    import type { PageData } from './$types';
    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
	import { onMount } from 'svelte';
    
    export let data: PageData;	
    initialize(data, invalidateAll);

    onMount(() => {
        if(!data.auth.access_token){
            window.location.href = '/auth';
        }else{
            window.location.href = `/auth/${data.auth.user?.email}`;
        }
    });
</script>