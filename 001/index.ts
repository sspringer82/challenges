export function nbDig(n: number, d: number) {
  const results: number[] = [];
  for (let i = 0; i <= n; i++) {
    results.push(i ** 2);
  }

  return (
    results
      .filter((i) => i.toString().indexOf(d.toString()) > -1)
      .join('')
      .match(new RegExp(d.toString(), 'g')) || []
  ).length;
}
