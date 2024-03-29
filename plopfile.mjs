export default function (plop) {
  plop.setGenerator('component', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Where is the path to create components? (e.g. components)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name? (e.g. button)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: '.plop/index.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: '.plop/component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/component.stories.tsx.hbs',
      },
    ],
  })
}