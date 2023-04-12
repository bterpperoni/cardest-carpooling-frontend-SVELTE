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