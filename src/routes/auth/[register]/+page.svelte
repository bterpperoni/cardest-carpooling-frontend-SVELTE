<script lang='ts'>
	import type { PageData } from "./$types";
    import Form from "$lib/components/form/Form.svelte";
    import ProgressBar from "$lib/components/bar/ProgressBar.svelte";
    import Input from "$lib/components/form/Input.svelte";
    import Button from "$lib/components/button/Button.svelte";
    import H2 from "$lib/components/title/H2.svelte";
	import { postUser } from "$lib/scripts/script";

	import { parseISODate } from "$lib/scripts/script";
    import { onMount} from "svelte";
	import type { User } from "$lib/scripts/interface";
	import { goto } from "$app/navigation";
    export let data: PageData;

    let username: string | undefined = data.auth.user?.name;
    let firstName: string | undefined = data.auth.user?.given_name;
    let familyName: string | undefined = data.auth.user?.family_name;
    let email: string | undefined = data.auth.user?.email;
    let birthDate: string = "2021-01-01";
    let address: string = "";
    let locality: string= "";
    let zip: string = '';
    
    let progress = 0;
    let intervalId: NodeJS.Timeout ;

    function startProgressBar() {
            intervalId = setInterval(() => {
            progress += 10;
            if (progress >= 150) {
                clearInterval(intervalId);
                goto(`/index/${data.auth.user?.email}`);
            }
        }, 100);
        }

    onMount(() => {
        if(!data.isANewUser){
            startProgressBar();
        }
    });
    
    async function register(): Promise<void> {
        const user: User = {
            id : null,
            username: username,
            firstName: firstName,
            familyName: familyName,
            email: email,
            birthDate: parseISODate(birthDate),
            address : address,
            locality: locality,
            zip: zip,
            isNew : true
        };
        await postUser(user);
        goto(`/index/${data.auth.user?.email}`);
    } 
</script>

{#if data.isANewUser}
<H2>Please fill out all the fields below</H2>
<div class="div-auth-register">
    <Form>
        <Input type="text" id="username"  label="Username : " placeholder={data.auth.user?.name} bind:value={username} />
        <Input type="text" id="firstName" label="First Name : "  placeholder="First Name" bind:value={firstName}/>
        <Input type="text" id="familyName" label="Last Name : "  placeholder="Family Name" bind:value={familyName}/>
        <Input type="email" id="email" label="Email :" placeholder="Email" bind:value={email} disabled />
        <Input type="date" id="birthDate" label="Birth Date : "  bind:value={birthDate}/>
        <Input type="text" id="address"  label="Address : " placeholder="Adress" bind:value={address}/>
        <Input type="text" id="locality"  label="Locality : " placeholder="Locality" bind:value={locality}/>
        <Input type="text" id="zip"  label="Zip : " placeholder="Zip" bind:value={zip}/>
        <Button class="btn-register-login" type="button" doIt={() => register()}>Submit</Button>
    </Form>
</div>
{:else}
<ProgressBar progress={progress} />
{/if}

<!-- /auth/[register] Page -->