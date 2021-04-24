<script>
  import { onMount } from "svelte";
  import { strPath } from "../store";
  export let output;
  export let terminalRef;

  onMount(() => {
    if (terminalRef) {
      terminalRef.scrollTop = terminalRef.scrollHeight;
    }
  });
</script>

{#each output.text as text}
  <div class="line">
    {#if output.type === "user"}
      <span class="prep-input">user@portfolio:{$strPath}$</span>
    {/if}
    <span class={output.type === "error" && "error"}>{text}</span>
  </div>
{/each}

<style>
  .line {
    height: 20px;
    font-size: 1rem;
  }

  .error {
    color: red;
  }

  .prep-input {
    height: 20px;
    font-size: 1rem;
    margin-right: -0.13rem;
    color: #1ac400;
  }
</style>
