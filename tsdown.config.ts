import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  noExternal: [
    'id-odd',
  ],
  outDir: 'dist',
})
