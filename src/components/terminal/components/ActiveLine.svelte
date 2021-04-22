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

<form on:submit|preventDefault={submitLine}>
  <span>user@portfolio:~$</span>
  <input bind:this={inputRef} bind:value={inputText} />
</form>
