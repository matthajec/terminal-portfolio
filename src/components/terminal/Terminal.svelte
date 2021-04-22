<script>
  import { onMount } from "svelte";
  import InactiveLine from "./components/InactiveLine.svelte";
  import ActiveLine from "./components/ActiveLine.svelte";
  import run from "./run";

  let inputRef;
  let textLines = [];

  onMount(() => {
    inputRef.focus();
  });

  function handleLineInput({ detail }) {
    textLines = [...textLines, detail.inputText];
    textLines = [...textLines, ...run(detail.inputText)];
  }
</script>

<div on:click={() => inputRef.focus()}>
  {#each textLines as line}
    <InactiveLine text={line} />
  {/each}

  <ActiveLine bind:inputRef on:submit={handleLineInput} />
</div>
