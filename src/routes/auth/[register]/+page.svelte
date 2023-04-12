<script lang='ts'>
	import type { PageData } from "./$types";
    import Form from "$lib/components/form/Form.svelte";
    import Input from "$lib/components/form/Input.svelte";
    import Button from "$lib/components/button/Button.svelte";
    import H2 from "$lib/components/title/H2.svelte";
	import { postUser } from "$lib/typescript/httpRequest";
	import type { User } from "$lib/typescript/interface";
	import { parseISODate } from "$lib/typescript/service";
    import { onMount} from "svelte";
	import { beforeUpdate } from "svelte/internal";
    export let data: PageData;

    let username: string | undefined = '';
    let firstName: string | undefined = data.auth.user?.given_name;
    let familyName: string | undefined = data.auth.user?.family_name;
    let email: string | undefined = data.auth.user?.email;
    let birthDate: string = "2021-01-01";
    let address: string = "";
    let locality: string= "";
    let zip: string = '';
    let progress = 0;
    let intervalId: NodeJS.Timeout ;

    $ : if(progress >= 150) window.location.href = '/index';

    async function startProgressBar() {
            intervalId = setInterval(() => {
            progress += 10;
            if (progress >= 150) {
                clearInterval(intervalId);
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
            id : 0,
            username: username,
            firstName: firstName,
            familyName: familyName,
            email: email,
            birthDate: parseISODate(birthDate),
            address : address,
            locality: locality,
            zip: zip,
        };
        await postUser(user);
        window.location.href = `/index`;
    } 


</script>

{#if data.isANewUser}
<H2 text="Please fill out all the fields below"></H2>
<div class="div-auth-register">
    <Form>
        <Input id="username"  label="Username : " placeholder={data.auth.user?.name} bind:bindValue={username} />
        <Input id="firstName" label="First Name : "  placeholder="First Name" bind:bindValue={firstName}/>
        <Input id="familyName" label="Last Name : "  placeholder="Family Name" bind:bindValue={familyName}/>
        <Input id="email" label="Email :" placeholder="Email" bind:bindValue={email} />
        <Input id="birthDate" label="Birth Date : "  bind:bindValue={birthDate}/>
        <Input id="address"  label="Address : " placeholder="Adress" bind:bindValue={address}/>
        <Input id="locality"  label="Locality : " placeholder="Locality" bind:bindValue={locality}/>
        <Input id="zip"  label="Zip : " placeholder="Zip" bind:bindValue={zip}/>
        <Button customClass="btn-register-login" type="submit" text="Submit" doIt={() => register()}></Button>
    </Form>
</div>
{:else}
<div class="div-progress-bar">
    <H2 text="Loading"></H2>
    <div class="progress-bar">
        <div class="progress-bar-fill" style="width: {progress}%"></div>
    </div>
</div>
{/if}