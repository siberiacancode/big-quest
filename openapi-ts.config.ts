import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  enums: 'typescript',
  input: 'http://95.174.93.7/api-doc-json',
  output: './generated/api',
  exportServices: false,
  exportCore: false,
  types: true,
  schemas: false,
  debug: true
});
