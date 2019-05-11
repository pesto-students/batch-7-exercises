function callTemplateTagFunction() {
  const html = 'The expression 5 > 4 is "true" & 3 < 1 is false';
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/&/g, '&amp;');
}

export { callTemplateTagFunction };
