<script lang='ts'>
    import type { PageData } from './$types';
    import { goto, invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
	import { onMount } from 'svelte';
    
    export let data: PageData;	
    initialize(data, invalidateAll);

    onMount(() => {
        if(!data.auth.access_token){
            goto('/auth');
        }else{
            goto(`/auth/${data.auth.user?.email}`);
        }
    });
</script>