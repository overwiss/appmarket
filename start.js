import { spawn } from 'child_process';

console.log('=== Starting Web Server ===');
console.log('[1/1] Starting server-new.js...');

const server = spawn('node', ['server-new.js'], {
  stdio: 'inherit',
  shell: true
});

server.on('error', (err) => {
  console.error('❌ Server error:', err.message);
  process.exit(1);
});

server.on('exit', (code) => {
  console.log(`ℹ️ Server exited with code ${code}`);
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Stopping server...');
  process.exit(0);
});