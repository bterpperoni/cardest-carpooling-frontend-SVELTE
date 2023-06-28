<script lang='ts'>
    import type { PageData } from './$types';
    import H2 from '$lib/components/title/H2.svelte';
    import Button from '$lib/components/button/Button.svelte';
    import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import H1 from '$lib/components/title/H1.svelte';
    export let data: PageData;


    // let selectedMode : number = data.MODE[0].id; 
    let selected: number = data.DESTINATIONS[0].id;
    $ : console.log(selected);
</script>

<div class="div-index-user">
    <!-- Dropdown to select mode -->
    <!-- <Dropdown options={data.MODE} bind:selected={selectedMode}></Dropdown> -->
   
    <H2>#{data.actualUser.username}</H2>
    <br><br>
    <!-- <Dropdown label="There is Drivers to your School ? : " bind:selected options={data.DESTINATIONS}></Dropdown> -->
    <H1>C'est là QUI Y AURA LES INFOS USERS</H1>
    <br>
    <H2>PAS OUBLIER LE MODAL QUI SWITCH ENTRE PASSENGER ET DRIVER</H2>
    <br><br>
    <Button class="btn-register-login">Passenger</Button>
</div>


