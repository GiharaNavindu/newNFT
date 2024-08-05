// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the Vite plugin for TS path resolution

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // Enable TS path resolution
  ],
  resolve: {
    alias: {
      '@': '/src', // Configure path alias for src directory
    },
  },
});
