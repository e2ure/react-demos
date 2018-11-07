/**
 * Draw an ASCII letters
 */
const {
  green,
  blue,
  white,
  cyan,
  red,
  magenta,
  yellow,
  grey,
} = require('chalk')

function asciiName() {
  const log = console.info
  let whiteSpaces = ''
  for (let i = 0; i < 18; i++) {
    whiteSpaces += ' '
  }

  // ASCII letters
  log(`${whiteSpaces}       ${yellow('______')}`)
  log(`${whiteSpaces}      ${yellow('|  ____|')}`)
  log(`${whiteSpaces}      ${yellow('| |__ ___  _ __ _ __ ___')}`)
  log(`${whiteSpaces}      ${yellow("|  __/ _ \\| '__| '_ ` _ \\")}`)
  log(`${whiteSpaces}      ${yellow('| | | (_) | |  | | | | | |')}`)
  log(`${whiteSpaces}   ${yellow('___|_|  \\___/|_|  |_| |_| |_|')}`)
  log(`${whiteSpaces}  ${yellow('/ ____|')}`)
  log(`${whiteSpaces} ${yellow('| (___   ___ _ __ __ _ _ __   ___ _ __')}`)
  log(`${whiteSpaces}  ${yellow("\\___ \\ / __| '__/ _` | '_ \\ / _ \\ '__|")}`)
  log(`${whiteSpaces}  ${yellow('____) | (__| | | (_| | |_) |  __/ |')}`)
  log(`${whiteSpaces} ${yellow('|_____/ \\___|_|  \\__,_| .__/ \\___|_|')}`)
  log(`${whiteSpaces}                       ${yellow('| |')}`)
  log(`${whiteSpaces}                       ${yellow('|_|')}`)
}

function displayInfo({ name, env, port, host, apiHost, debug }) {
  const log = console.info
  log(` ⌛  ${green(new Date())}`)
  log(` ${blue('Environment    : ')} ${cyan(`⚒  ${env}`)}`)
  if (debug) log(` ${blue('Debugger       : ')} ${cyan('⚑  True')}`)
  log(` ${blue('Port           : ')} ${cyan(`⚙  ${port}`)}`)
  log(` ${blue('Host Client    : ')} ${cyan(`⌦  ${host}`)}`)
  log(` ${blue('Host API       : ')} ${cyan(`⌦  ${apiHost}`)}`)
  log(` ${white(`✂ To stop ${name}, press <CTRL> + C at any time`)}`)
}

function line() {
  console.log(
    '----------------------------------------------------------------------------'
  )
}

function eaccess() {
  const log = console.error
  log(`${white(' ☠ ')} ${yellow('EACCES, Permission denied')} ${white(' ☠ ')}`)
  log(`${red(' Ha ocurrido un error al inicializar express ☹ ')}`)
  log(`${green(' Tome en cuenta lo siguiente: ')}`)
  log(
    `${magenta(' ⊚ ')} ${white(
      'Como regla general, los procesos que se ejecutan sin privilegios de'
    )}`
  )
  log(` ${white('root no pueden enlazarse a puertos inferiores a 1024')}`)
  log(
    `${magenta(' ⊚ ')} ${white(
      'Intente con un puerto más alto o ejecute el server con otro usuario'
    )}`
  )
  log(` ${white('ej:')} ${blue.italic('sudo')}`)
}

function addrInUse(port) {
  const log = console.error
  log(
    `${white(' ☠ ')} ${yellow('EADDRINUSE, Address already in use')} ${white(
      ' ☠ '
    )}`
  )
  log(`${red(' Ha ocurrido un error al inicializar express ☹ ')}`)
  log(`${green(' Tome en cuenta lo siguiente: ')}`)
  log(
    `${magenta(' ⊚ ')} ${white(
      `Al parecer el puerto ${cyan(port)} ya está en uso`
    )}`
  )
  log(
    `${magenta(' ⊚ ')} ${white(
      'Para ver el id del proceso que lo esta usando; en consola digite:'
    )}`
  )
  log(` ${grey.bold.italic(`Linux: > fuser -n tcp ${port}`)}`)
  log(` ${grey.bold.italic(`Mac: > lsof -i -P | grep -i ${port}`)}`)
  log(
    `${magenta(' ⊚ ')} ${white(
      'Si quiere ver el detalle del proceso, en consola digite:'
    )}`
  )
  log(` ${grey.bold.italic('> ps x | grep PID')}`)
  log(`${magenta(' ⊚ ')} ${white('Para matar el proceso, en consola digite:')}`)
  log(` ${grey.bold.italic('> kill -9 PID')}`)
  log(` ${green.bold('PID es el id del proceso')}`)
}

module.exports = {
  asciiName,
  line,
  displayInfo,
  eaccess,
  addrInUse,
}
