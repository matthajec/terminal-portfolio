<script>
  import { onMount } from "svelte";
  import InactiveLine from "./components/InactiveLine.svelte";
  import ActiveLine from "./components/ActiveLine.svelte";
  import run from "./run";
  import TextLine from "./util/TextLine";

  let inputRef;
  let terminalRef;
  $: console.log(terminalRef);
  let textLines = [
    new TextLine("standard", [
      "welcome to terminal - version 1.0.0",
      'use "help" for a list of commands',
      "",
    ]),
  ];

  onMount(() => {
    inputRef.focus();
  });

  function handleLineInput({ detail }) {
    if (detail.inputText === "clear") {
      textLines = [];
    } else {
      textLines = [...textLines, new TextLine("user", [detail.inputText])];
      textLines = [...textLines, run(detail.inputText)];
      textLines = [...textLines, new TextLine("standard", [""])];
    }
    inputRef.focus();
  }
</script>

<div id="terminal" on:click={() => inputRef.focus()} bind:this={terminalRef}>
  {#each textLines as output}
    <InactiveLine {terminalRef} {output} />
  {/each}

  <ActiveLine bind:inputRef on:submit={handleLineInput} />
</div>

<style>
  #terminal {
    font-family: "Courier New", Courier, monospace;
    padding: 1em;
    overflow-y: scroll;
    cursor: text;
    width: 95vw;
    height: calc((100vh) - (5vw));
    background-color: #230063;
    color: #fff;
  }
</style>
