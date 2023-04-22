<script lang='ts'>

    export let type: "button" | "submit" | "reset" | null | undefined = 'button';
    export let fontSize: string = '1';
    export let doIt: () => void = () => {};
    export let ref: string = '';
</script>

{#if ref}
    <a href={ref} class={$$props.class} style="font-size: {fontSize}rem" on:click={doIt}><slot/></a>
{:else}
    <button {type} class="{$$props.class} mt-2" style="font-size: {fontSize}rem" on:click={doIt}><slot/></button>
{/if}

<style>
.layout1NavA {
    border:2px solid white;
    margin-left: 10px;
    padding:5px;
    border-radius: 15%;
    text-decoration: none;
    background-color: var(--deep-blue);
    color: white;
}

.layout1NavA:hover {
    background-color: white;
    color: var(--deep-blue);
}

.layout1FooterA {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
}

.layout1FooterA:hover {
    background-color: white;
    color: var(--deep-blue);
    box-shadow: 0 0 0 2px var(--light-blue), 0 0 0 2px white;
    overflow: hidden;
}

.btn-register-login{
    color: white;
    border: 0 none;
    cursor: pointer;
    padding: 5px 40px;
    margin:10px 10px;
    border-radius: 1vh;
    background-color: var(--dark-blue);
    box-shadow: 0 0 0 2px var(--light-blue), 0 0 0 3px var(--dark-blue);
}

.btn-register-login:hover {
    font-size: 3.1vw;
    color:var(--dark-blue);
    background-color:white!important;
}

</style>