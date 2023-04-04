<script lang='ts'>
    import H1 from '$lib/components/title/H1.svelte';
	import type { PageData } from './$types';

    export let data:PageData;
</script>

<H1 text="Welcome {data.auth.user?.name}"></H1>