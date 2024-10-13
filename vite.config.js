import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove the external option so react and react-dom are bundled
      // external: ['react'],  // Remove or comment out this line
    },
  },
})
