<script lang='ts'>
    export let text: string = '';
    export let ref: string = '';
    export let customClass: string = '';
    export let fontSize: string = '';
    export let doIt: () => void = () => {};
  </script>
  
  <a href={ref} class={customClass} style="font-size: {fontSize}" on:click={doIt}>{text}</a>

  <style>
    a {
      text-decoration: none;
      color: white;
    }
  </style>