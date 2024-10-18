import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'LinkedIn Chat Assistant',
    version: '1.0.0',
    description: 'Adds an AI assistant button to LinkedIn chat',
    permissions: ['activeTab'],
  },
  // srcDir: 'entrypoints',
});