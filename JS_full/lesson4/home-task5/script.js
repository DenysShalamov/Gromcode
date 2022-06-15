let sum = 0;

for (let i = 0; i <= 1000; i += 1) {
  sum += i;
}

const div = Math.floor(sum / 1234);
const mod = sum % 1234;

console.log(div > mod);
