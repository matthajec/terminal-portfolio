<script>
  import { createEventDispatcher } from "svelte";

  export let inputRef;

  let inputText;

  const dispatch = createEventDispatcher();

  function submitLine() {
    dispatch("submit", {
      inputText,
    });
    inputText = "";
  }
</script>

<form class="input-container" on:submit|preventDefault={submitLine}>
  <span class="prep-input">user@portfolio:~$</span>
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
