import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsPaths()],
});
