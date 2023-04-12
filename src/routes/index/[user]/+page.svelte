<script lang='ts'>
    import type { PageData } from './$types';
    import H2 from '$lib/components/title/H2.svelte';
    
    export let data: PageData;
</script>

<H2 text="Welcome {data.actualUser.username}"></H2>

