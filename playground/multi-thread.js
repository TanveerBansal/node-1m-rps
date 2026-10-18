import { Worker, isMainThread } from "worker_threads";
import { fileURLToPath } from "url";
import { cpus } from 'os';

if (isMainThread) {
  // Spawn 12 system level threads
  for (let i = 0; i < cpus().length; i++) {
    new Worker(fileURLToPath(import.meta.url));
  }
} else {
  // Run this in each of the threads
  while (true) {}
}
