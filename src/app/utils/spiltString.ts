export function splitString(value: string, atPosition = 4): string {
  let str = '';

  value.split('').forEach((v, index) => {
    const current = index + 1;
    if (current % atPosition === 0) {
      str += v + ' ';
    } else {
      str += v;
    }
  });

  return str.trim();
}
