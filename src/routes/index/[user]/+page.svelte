<script lang='ts'>
    import type { PageData } from './$types';
    import H2 from '$lib/components/title/H2.svelte';
    import Button from '$lib/components/button/Button.svelte';
    import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
    export let data: PageData;
    let selected: number = data.DESTINATIONS[0].id;
    $ : console.log(data.actualUser);
    
    
    
</script>

<div class="div-index-user display-column-center">
    <H2 text="#{data.actualUser.username}"></H2>
    <Dropdown label="Find drivers to your School" bind:selected options={data.DESTINATIONS}></Dropdown>
    <Button class="btn-register-login">Find it !</Button>
</div>


