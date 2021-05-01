<script>
  import { onMount } from "svelte";
  import { strPath } from "../store";
  export let output;
  export let terminalRef;

  // scroll to bottom of terminal
  // this is here because we want to scroll to the bottom after everything has been mounted
  onMount(() => {
    if (terminalRef) {
      terminalRef.scrollTop = terminalRef.scrollHeight;
    }
  });

  let directoryString = $strPath.join("/");
</script>

{#each output.text as text}
  <div class="line">
    {#if output.type === "user"}
      <span class="prep-input">user@portfolio:{directoryString}$</span>
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
    min-height: 20px;
    font-size: 1rem;
    margin-right: -0.13rem;
    color: #1ac400;
  }
</style>
