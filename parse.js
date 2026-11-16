// Exact marked 18.1.3-compatible drop-in with default options.
import { marked } from './vendor/marked/marked.esm.js';

export function parse(markdown) {
  return marked.parse(markdown);
}