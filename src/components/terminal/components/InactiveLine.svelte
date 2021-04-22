<script>
  export let text;
</script>

<div>
  <span class="location">user@portfolio:~$</span>
  <span class="text">{text}</span>
</div>

<style>
  .text {
    margin: 0;
    padding: 0;
    height: 20px;
  }

  .location {
    color: green;
  }
</style>
