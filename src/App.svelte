<script lang="ts">
  import { openUpdateWindow } from "./utils";
  import { onMount } from "svelte";
  import { faker } from "@faker-js/faker";

  let users = $state<any[]>([]);

  const logToMain = () => {
    window.__electronLog.info("info日志");
    console.log(window);
  };

  const logToMain2 = () => {
    window.__electronLog.error("error日志");
    console.log(window);
  };

  let name = $state();
  let email = $state();

  const handleSubmit = async () => {
    console.log(name, email);
    const res = await window.electron.ipcRenderer.invoke("insert", name, email);
    console.log(res);
    await handleQuery();
  };

  const handleQuery = async () => {
    const res = await window.electron.ipcRenderer.invoke("query");
    console.log(res);
    users = res;
  };

  const handleGenerate = () => {
    name = faker.person.fullName();
    email = faker.internet.email({provider:"gmail"});
  };

  onMount(async () => {
    // await handleQuery();
  });
</script>

<main>
  <div class="content">
    <h1>Rsbuild with Svelte And Electron</h1>
    <button onclick={() => logToMain()}>log info</button>
    <button onclick={() => logToMain2()}>log error</button>
    <div>
      <ul>
        {#each users as user, i}
          <li>[序号:{i}]  id:{user.id},name:{user.name},email:{user.email}</li>
        {/each}
      </ul>
      <div class="user-form">
        <input type="text" bind:value={name} />
        <input type="text" bind:value={email} />
        <button onclick={() => handleQuery()}>查询</button>
        <button onclick={() => handleGenerate()}>生成</button>
        <button onclick={() => handleSubmit()}>提交</button>
      </div>
    </div>
  </div>
</main>

<style>
  .user-form {
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>
