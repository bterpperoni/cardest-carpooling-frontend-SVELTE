<script lang='ts'>
    export let placeholder: string = '';
    export let name: string = '';
    export let label: string = '';
    export let id: string = '';
    export let type: string = 'text';
    export let bindValue: string | undefined = '';
    export let value: string | undefined;

  $: bindValue = value;

  function handleChange(event: InputEvent) {
      const target = event.target as HTMLInputElement;
      bindValue = target.value;
  }

 </script>

 <div class="div-input">
  <label for={id}>{label}</label>
  <input class="input form-control" {id} {placeholder} {name} value={bindValue} {type} on:input={() => handleChange}/>
</div>

<style>
  .div-input {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
  }

  input::placeholder {
    color: rgb(184, 182, 182);
  }

  .div-input label {
    min-width: 30vw;
    margin-right: 10px;
    color: white;
  }
</style>