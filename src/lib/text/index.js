// From https://stackoverflow.com/a/49432524
const removeExtraLineBreaks = (s) => {
  const EOL = /\r\n/gm.test(s) ? '\r\n' : '\n'
  const regExp = new RegExp('(' + EOL + '){3,}', 'gm')
  return s.replace(regExp, EOL + EOL).trim()
}

export default { removeExtraLineBreaks }
