<script lang="ts">
  import { openUpdateWindow } from "./utils";
  import { onMount } from "svelte";

  const logToMain = () => {
    window.__electronLog.info("测试日志")
    console.log(window);
  };

</script>

<main>
  <div class="content">
    <h1>Rsbuild with Svelte And Electron</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <button onclick={() => openUpdateWindow()}>open update window</button>
    <button onclick={() => logToMain()}>log to mian process</button>
  </div>
</main>

<style>
</style>
