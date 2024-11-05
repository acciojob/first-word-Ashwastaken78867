function firstWord(s) {
  const trimmedStr = s.trim();
  const spaceIndex = trimmedStr.indexOf(' ');
  return spaceIndex === -1 ? trimmedStr : trimmedStr.slice(0, spaceIndex);
}

const s = prompt("Enter String:");
alert(firstWord(s));

