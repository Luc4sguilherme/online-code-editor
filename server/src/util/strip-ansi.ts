function ansiRegex({ onlyFirst = false } = {}) {
  const pattern =
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

  return new RegExp(pattern, onlyFirst ? undefined : 'g');
}

export default function stripAnsi(string: string) {
  return string.replace(ansiRegex(), '');
}
