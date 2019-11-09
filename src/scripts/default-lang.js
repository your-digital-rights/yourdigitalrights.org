const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')
const glob = require('glob')

const defaultMessages = glob.sync('./src/lang/.messages/**/*.json')
  .map((filename) => readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((messages, descriptors) => {
    descriptors.forEach(({id, defaultMessage}) => {
      if (messages.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }
      messages[id] = defaultMessage
    })
    return messages
  }, {})

writeFileSync('./src/lang/en.json', JSON.stringify(defaultMessages, null, 2))
console.log(`> Wrote default messages to: "${resolve('./src/lang/en.json')}"`)