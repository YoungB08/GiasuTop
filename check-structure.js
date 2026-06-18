const fs = require('fs');
const content = fs.readFileSync('packages/web/app/components/HomeScreen.tsx', 'utf8');
const lines = content.split('\n');

let divCount = 0;

for (let i = 3835; i < lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/<div/g) || []).length;
  const closes = (line.match(/<\/div>/g) || []).length;
  divCount += opens - closes;
  
  if (i >= 3945 && i <= 3960) {
    console.log(`L${i+1}: divs=${divCount} | ${line.trim().substring(0, 60)}`);
  }
}

console.log(`\nDivs from 3836: ${divCount}`);
