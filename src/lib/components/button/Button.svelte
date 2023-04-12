<script lang='ts'>
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let customClass: string = '';
    export let text: string = '';
    export let fontSize: string = '3';
    export let doIt: () => void = () => {};
    export let bg: string = 'dark-blue';
</script>

<button {type} class="{customClass} mt-2" style="font-size: {fontSize}vw; background-color: var(--{bg})" on:click={doIt}>{text} <slot/></button>
