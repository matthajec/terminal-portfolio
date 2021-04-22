<script>
  import { onMount } from "svelte";
  import InactiveLine from "./components/InactiveLine.svelte";
  import ActiveLine from "./components/ActiveLine.svelte";
  import run from "./run";
  import { text } from "svelte/internal";

  let inputRef;
  let textLines = [];

  onMount(() => {
    inputRef.focus();
  });

  function handleLineInput({ detail }) {
    if (detail.inputText === "clear") {
      textLines = [];
    } else {
      textLines = [...textLines, `user@portfolio:~$ ${detail.inputText}`];
      textLines = [...textLines, ...run(detail.inputText)];
      textLines = [...textLines, ""];
    }
  }
</script>

<div class="terminal" on:click={() => inputRef.focus()}>
  {#each textLines as line}
    <InactiveLine text={line} />
  {/each}

  <ActiveLine bind:inputRef on:submit={handleLineInput} />
</div>

<style>
  .terminal {
    cursor: text;
    height: 100%;
    background-color: #230063;
    color: #fff;
  }
</style>
