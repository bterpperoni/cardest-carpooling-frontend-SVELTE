<script lang='ts'>
    export let placeholder: string = '';
    export let name: string = '';
    export let label: string = '';
    export let id: string = '';
    export let bindValue: string | undefined;
    export let disabled: boolean = false;
    export let type: string = 'text';

    function typeAction(node: HTMLInputElement) {
        node.type = type;
    }
</script>

 <div class="div-input">
  <label for={id}>{label}</label>
  <input class="input form-control" {id} {placeholder} {name} bind:value={bindValue} {disabled}/>
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