<script lang='ts'>
	import type { Destination } from "$lib/typescript/interface";

    export let options: Array<Destination> = [];
    export let label: string = '';
    export let selected: string = '';
</script>

<div class="div-select display-column-center"> 
    <label for="select">{label}</label>
    <select id="select" bind:value={selected}>
      {#each options as option}
          <option value={option.id}>{option.name}</option>
      {/each}
      </select>
  </div>

<style>
    label{
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>
