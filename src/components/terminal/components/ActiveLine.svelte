<script>
  import { createEventDispatcher } from "svelte";
  import { strPath } from "../store";
  const dispatch = createEventDispatcher();

  export let inputRef;

  let path;
  let inputText;

  function submitLine() {
    dispatch("submit", {
      inputText,
    });
    inputText = "";
  }

  strPath.subscribe((v) => {
    path = v.join("/");
  });
</script>

<form class="input-container" on:submit|preventDefault={submitLine}>
  <span class="prep-input">user@portfolio:{path}$</span>
  <input class="input" bind:this={inputRef} bind:value={inputText} />
</form>

<style>
  .input-container {
    display: flex;
  }

  .prep-input {
    height: 20px;
    font-size: 1rem;
    margin-right: 0.5rem;
    color: #1ac400;
  }

  .input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1rem;
    height: 20px;
    padding: 0;
    margin: 0;
    font-family: inherit;
    color: inherit;
    width: 100%;
  }
</style>
