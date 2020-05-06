# react-skills

A dependency-free, pure-css animated, resizable, customizable, skill bars panel React component.

![react-skills preview](https://repository-images.githubusercontent.com/260488185/fa955200-8c9f-11ea-91d8-d8307c6c288c)

- [Links](#links)
- [Installation](#install)
- [Usage](#usage)
- [Developers](#dev)
- [Props API](#propsapi)

***This project was bootstrapped with [Create React Library](https://github.com/dimimikadze/create-react-library).***

<a name="links"></a>
## Links

- #### [Documentation](https://kevincastejon.github.io/react-skills/documentation)
- #### [Quick demo](https://kevincastejon.github.io/react-skills/)
- #### [Storybook playground](https://kevincastejon.github.io/react-skills/storybook)

<a name="install"></a>
## Installation
```bash
npm i react-skills
```
<a name="usage"></a>
## Usage
```js
import { SkillBars } from 'react-skills';

const skillsData= [
  {
    name: 'ReactJS',
    level: 100,
    color: 'blue',
  },
  {
    name: 'SomeOtherTech',
    level: 85,
    color: 'red',
  }
]

// ...

<SkillBars skills={skillsData} />
```

or you can use the SkillBar (singular) component this way:
```js
import { SkillBar } from 'react-skills';

...

<SkillBar name="ReactJS" level={100} color="blue" />
<SkillBar name="SomeOtherTech" level={80} color="red" />
```

<a name="dev"></a>
## Developers

### Start
`npm run start` or `yarn start`

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test
`npm run test` or `yarn test`

Runs the test watcher in an interactive mode.

### Build
`npm run build` or `yarn build`

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### Deploy
`npm run deploy` or `yarn deploy`
Builds the component then push it on NPM as new version.
Builds the github page app for production to the `demo` folder.
Creates a gh-page github branch and push the demo build on that branch.
