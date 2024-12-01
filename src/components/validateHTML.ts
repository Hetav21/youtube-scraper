export function validateHTML(str: string): boolean {
  var isHtml = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
  return isHtml(str);
}
