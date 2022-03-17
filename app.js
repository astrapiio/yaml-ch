const yaml = require('yaml')
const fs = require('fs')
const _ = require('lodash')

const main = async () => {
  const filePath = process.argv[2]
  const pathToKey = process.argv[3]
  const replaceValue = process.argv[4]

  if (!filePath || !pathToKey || !replaceValue) errorExit('missing required parameters. example: ./app.js {PATH_TO_FILE} {YAML_KEY_PATH} {REPLACE_VALUE}')

  console.log(`loading ${filePath}`)
  const fileExists = fs.existsSync(filePath)

  if (!fileExists) errorExit('file does not exist')

  let obj
  try {
    let data = fs.readFileSync(filePath, 'utf8')
    obj = yaml.parse(data)
  } catch (error) {
    errorExit('unable to parse yaml')
  }

  try { 
    _.set(obj, pathToKey, replaceValue)
  } catch (error) {
    errorExit('invalid path in yaml')
  }

  let result
  try {
    result = yaml.stringify(obj)
  } catch (error) {
    errorExit('unable to parse yaml')
  }

  fs.writeFileSync(filePath, result)
  process.exit()

}

const errorExit = (msg) => {
  console.log(msg)
  process.exit(2)
}

main()