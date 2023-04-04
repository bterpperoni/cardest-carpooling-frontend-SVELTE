<script lang='ts'>
    export let placeholder: string = '';
    export let name: string = '';
    export let label: string = '';
    export let customClassDivInput: string = '';
    export let customClassInput: string = '';
    export let id: string = '';
    export let value: string = '';

    
 </script>

 <div class="form-floating {customClassDivInput}">
  <input class="form-control {customClassInput}" {id} {placeholder} {name} bind:value={value}/>
  <label for={id}>{label}</label>
</div>

<style>
  .form-control {
    cursor: pointer;
  }
</style>