<script>
  import { onMount } from "svelte";
  import InactiveLine from "./components/InactiveLine.svelte";
  import ActiveLine from "./components/ActiveLine.svelte";
  import run from "./run";
  import { strPath } from "./store";

  let path;
  let inputRef;
  let terminalRef;
  let textLines = [
    "welcome to terminal - version 1.0.0",
    'use "help" for a list of commands',
    "",
  ];

  onMount(() => {
    inputRef.focus();
  });

  strPath.subscribe((v) => {
    path = v.join("/");
  });

  function handleLineInput({ detail }) {
    if (detail.inputText === "clear") {
      textLines = [];
    } else {
      textLines = [...textLines, `user@portfolio:${path}$ ${detail.inputText}`];
      textLines = [...textLines, ...run(detail.inputText)];
      textLines = [...textLines, ""];
    }
    inputRef.focus();
  }
</script>

<div class="terminal" on:click={() => inputRef.focus()} bind:this={terminalRef}>
  {#each textLines as line}
    <InactiveLine text={line} />
  {/each}

  <ActiveLine bind:inputRef on:submit={handleLineInput} />
</div>

<style>
  .terminal {
    font-family: "Courier New", Courier, monospace;
    padding: 1em;
    overflow-y: scroll;
    cursor: text;
    height: 90%;
    width: 90%;
    background-color: #230063;
    color: #fff;
  }
</style>
