const data = require('./test.json')
const fs = require('fs')
const mustache = require('mustache')

const title = data['title']

const htmlContent ={
  title
}

const componentNamesList = []
const componentsList = []
data.components.forEach((c) => {
  componentNamesList.push(c['name'])

  let arr = ['<component']
    arr.push(`is='${c['name']}'`)

  c.data.forEach((data) => {
    const value = (typeof data['value'] === 'string') ? `"${data['value']}"` : data['value']
    arr.push(`${data['name']}=${value}`)
  })

  arr.push('/>')
  componentsList.push(arr.join(' '))
})
const components  = componentsList.join('\n')
const componentNames = componentNamesList.join(', ')
const imports = componentNamesList.map((name) => `import ${name} from './components/${name}'`).join('\n')

fs.readFile('./template.vue', 'utf8', (err, template) => {
  const vue = mustache.render(template, {
    components,
    imports,
    componentNames
  })
  fs.writeFile(`dist/src/App.vue`, vue, () => {})
})

fs.readFile('./template.html', 'utf8', (err, template) => {
  const html = mustache.render(template, htmlContent)
  fs.writeFile(`dist/index.html`, html, () => {})
})
