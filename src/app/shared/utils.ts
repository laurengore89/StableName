export function ToTitleCase(input: string): string {
  let words: string[] = input.toLocaleLowerCase().split(' ');
  let output: string[] = [];
  words.forEach(w => {
    output.push(w.substring(0, 1).toLocaleUpperCase() + w.substring(1, w.length));
  });
  return output.join(' ');
}
