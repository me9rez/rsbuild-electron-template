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
      name: 'rsbuild',
      command: `pnpm dev:renderer`,
      wait: async () => {
        return true
      },
    },
    {
      name: `electron`,
      command: `pnpm dev:main`,
      wait: async () => {
        await sleep(3000)
        return true
      },
    },
  ],
})
