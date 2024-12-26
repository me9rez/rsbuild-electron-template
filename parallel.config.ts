import { defineConfig } from 'parallel-wait-run'

function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export default defineConfig({
  scripts: [
    {
      name: 'dev1',
      command: `pnpm dev:renderer`,
      wait: async () => {
        return true
      },
    },
    {
      name: `dev2`,
      command: `pnpm dev:main`,
      wait: async () => {
        await sleep(3000)
        return true
      },
    },
  ],
})
