export function cc_format(value: string) {
  // console.log(value.match(/\d/));
  if (value.match(/\d/)!) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .slice(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.slice(i, i + 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }
}
