<script lang='ts'>
	import type { PageData } from "./$types";
    import Form from "$lib/components/form/Form.svelte";
    import Input from "$lib/components/form/Input.svelte";
    import Button from "$lib/components/button/Button.svelte";
    import H2 from "$lib/components/title/H2.svelte";
	import { postUser } from "$lib/typescript/httpRequest";
	import type { User } from "$lib/typescript/interface";
	import { parseISODate } from "$lib/typescript/service";
    import { beforeUpdate, onMount} from "svelte";
    export let data: PageData;

    let username: string | undefined = data.auth.user?.name;
    let firstName: string | undefined = data.auth.user?.given_name;
    let familyName: string | undefined = data.auth.user?.family_name;
    let email: string | undefined = data.auth.user?.email;
    let birthDate: string = "2021-01-01";
    let address: string = "Paris";
    let locality: string= data.auth.user?.locale || "Roubais";
    let zip: string = "7000";

    onMount(() => {
        if(!data.isANewUser){
            window.location.href = '/index';
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
            address: address,
            locality: locality,
            zip: zip
        };
        await postUser(user);
        window.location.href = `/index`;
    } 


</script>

{#if data.isANewUser}
<H2 text="Please fill out all the fields below"></H2>
<div class="div-auth-register">
    <Form>
        <Input type="text" id="username"  label="Username : " placeholder="Username" bind:value={username}/>
        <Input type="text" id="firstName" label="First Name : "  placeholder="First Name" bind:value={firstName}/>
        <Input type="text" id="familyName" label="Last Name : "  placeholder="Family Name" bind:value={familyName}/>
        <Input type="email" id="email" label="Email :" placeholder="Email" bind:value={email} />
        <Input type="date" id="birthDate" label="Birth Date : "  bind:value={birthDate}/>
        <Input type="text" id="address"  label="Address : " placeholder="Adress" bind:value={address}/>
        <Input type="text" id="locality"  label="Locality : " placeholder="Locality" bind:value={locality}/>
        <Input type="text" id="zip"  label="Zip : " placeholder="Zip" bind:value={zip}/>
        <Button customClass="btn-register-login" type="submit" text="Submit" doIt={() => register()}></Button>
    </Form>
</div>
{:else}
    <h1>Not a new user</h1>
{/if}