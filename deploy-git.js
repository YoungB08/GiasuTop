const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('1. Dang don dep thu muc build cu...');
  const nextDir = path.join(__dirname, 'packages', 'web', '.next');
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
  }

  console.log('2. Dang build du an Next.js (FE) o may local cua ban...');
  execSync('npm run build', { cwd: path.join(__dirname, 'packages', 'web'), stdio: 'inherit' });

  console.log('3. Dang tu dong add, commit va push len GitHub...');
  execSync('git add .', { stdio: 'inherit' });
  
  try {
    execSync('git commit -m "update build and config without large cache"', { stdio: 'inherit' });
  } catch (e) {
    console.log('Khong co thay doi nao can commit.');
  }
  
  execSync('git push', { stdio: 'inherit' });

  console.log('==================================================');
  console.log('Da cap nhat code len GitHub thanh cong!');
  console.log('Bay gio ban len cPanel Terminal chay lenh: git pull');
  console.log('==================================================');
} catch (err) {
  console.error('Loi trong qua trinh chay:', err.message);
}
