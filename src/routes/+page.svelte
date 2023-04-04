<script lang="ts">
import type { PageData } from './$types';
import { invalidateAll } from '$app/navigation';
import { initialize } from 'svelte-google-auth/client';
import Google from '$lib/components/button/Google.svelte';
import H1 from '$lib/components/title/H1.svelte';

export let data: PageData;	
initialize(data, invalidateAll);
</script>

<div class="display-column-center div-main-page">
    {data.auth.user?.name}
    <H1 text="Cardest"></H1>
    <Google/>
</div>

<style>
    .div-main-page {
        height: 75vh;
    }
</style>


