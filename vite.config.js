import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cv-portafolio/', // Cambiar por el nombre real del repo en GitHub
});