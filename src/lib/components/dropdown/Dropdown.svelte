<script lang='ts'>
	import type { Destination, Mode } from "$lib/scripts/interface";

    export let options: Array<Destination> | Array<Mode> = [] ;
    export let label: string = '';
    export let selected: number;
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
