<script lang='ts'>
	import H2 from "../title/H2.svelte";
    export let progress: number;
</script>

<div class="div-progress-bar">
    <H2 text="Loading"></H2>
    <div class="progress-bar">
        <div class="progress-bar-fill" style="width: {progress}%"></div>
    </div>
</div>

<style>
    .progress-bar {
    width: 50vw;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--dark-blue) 0px 0px 0px 1px #f0f0f0 ;
  }
  
  .progress-bar-fill {
    height: 100%;
    background-color: #17b943;
    border-radius: 4px;
    transition: width 0.2s ease-in;
  }

  .div-progress-bar {
    width: 100%;
    height: 80vh;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-flow : column wrap;
    align-items: center;
    justify-content: center;
  }
</style>