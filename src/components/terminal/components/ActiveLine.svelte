<script>
  import { createEventDispatcher } from "svelte";
  import { strPath } from "../store";
  export let inputRef;

  let inputText = "";
  let prevText = "";

  const dispatch = createEventDispatcher();

  function submitLine() {
    prevText = inputText;
    dispatch("submit", {
      inputText,
    });
    inputText = "";
  }

  // handle setting the input to the previous command on arrow up
  function handleKeyDown({ keyCode }) {
    if (keyCode === 38) {
      inputText = prevText;
    }
  }
</script>

<form class="input-container" on:submit|preventDefault={submitLine}>
  <span class="prep-input">user@portfolio:{$strPath.join("/")}$</span>
  <input
    class="input"
    bind:this={inputRef}
    bind:value={inputText}
    on:keydown={handleKeyDown}
  />
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
