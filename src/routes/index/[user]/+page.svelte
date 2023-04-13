<script lang='ts'>
    import type { PageData } from './$types';
    import H2 from '$lib/components/title/H2.svelte';
    import Button from '$lib/components/button/Button.svelte';
    import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import type { Destination } from '$lib/scripts/interface';
    import { onMount } from 'svelte';
	import { getDestinations } from '$lib/scripts/httpRequest';
    export let data: PageData;
    let selected: string = '';
    let destinations: Array<Destination> = [];

    $ : console.log(data.actualUser);
    
    onMount(async () => {
        destinations = await getDestinations();
    });
    
</script>

<div class="div-index-user display-column-center">
    <H2 text="#{data.actualUser.username}"></H2>
    <Dropdown label="Find drivers to your School" bind:selected options={destinations}></Dropdown>
    <Button text="Find it !" customClass="btn-register-login"></Button>
</div>


