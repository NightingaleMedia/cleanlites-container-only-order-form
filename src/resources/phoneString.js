export default function formatPhoneNumber(ph) {
  if (ph.length === 10) {
    var match = ph.match(/^(\d{3})(\d{3})(\d*)$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3].slice(0, 4);
    }
  }
  if (ph.length === 11) {
    var match = ph.match(/^(\d{1})(\d{3})(\d{3})(\d*)$/);
    if (match) {
      return (
        match[1] +
        " (" +
        match[2] +
        ") " +
        match[3] +
        "-" +
        match[4].slice(0, 4)
      );
    }
  }
  return ph.replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3");
}
