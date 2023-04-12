<script lang='ts'>
    import type { PageData } from './$types';
    import H2 from '$lib/components/title/H2.svelte';
    import Button from '$lib/components/button/Button.svelte';
    import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
    export let data: PageData;
    let selected: string = '';
</script>

<div class="div-index-user">
    <H2 text="#{data.actualUser.username}"></H2>
    <Dropdown></Dropdown>
    <Button text=""></Button>
</div>


