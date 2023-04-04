<script lang='ts'>
    import H2 from '$lib/components/title/H2.svelte';
	import type { PageData } from './$types';

    export let data:PageData;
</script>

<H2 text="Welcome {data.auth.user?.name}"></H2>