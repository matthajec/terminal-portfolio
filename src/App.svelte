<script>
  import logo from "./logo.png";
</script>

<div class="container">
  <h1 class="title">Svelte Template</h1>
  <img class="logo" src={logo} alt="svelte logo" />
</div>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-family: "Courier New", Courier, monospace;
    margin-bottom: 3rem;
  }

  .logo {
    height: 300px;
  }
</style>
