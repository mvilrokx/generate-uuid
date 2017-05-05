/**
 * @module generateUUID
*/
const generateUUID = () => {
  /* eslint-disable no-bitwise */
  /* eslint-disable no-mixed-operators */
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + (Math.random() * 16)) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}

/**
 * generate a UUID, copied from https://jsfiddle.net/briguy37/2MVFd/
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import generateUUID from './lib/generateUUID'
 *
 * const uuid = generateUUID()
 *
 * @function
 * @returns {String} UUID String
 *
 */
export default generateUUID
