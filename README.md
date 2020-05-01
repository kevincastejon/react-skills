# react-skills

A dependency-free, pure-css animated, resizable, customizable, skill bars panel React component.

***This project was bootstrapped with [Create React Library](https://github.com/dimimikadze/create-react-library).***


## Install
```
npm i react-skills
```

## Usage
```
import SkillBars from 'react-skills';

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

...

<SkillBars skills={skillsData} />
```

or you can use the SkillBar (singular) component this way:
```
import SkillBar from 'react-skills';

...

<SkillBar name="ReactJS" level={100} color="blue" />
<SkillBar name="SomeOtherTech" level={80} color="red" />
```

## Props API

### SkillBars

- skills [array of object] *required* - An array of SkillBar props data (see below).
- barsHeight [number] *optional* default 30 - The SkillBar component height.
- labelsWidth [number] *optional* default 100 - The SkillBar component label width.
- spacing [number] *optional* default 15 - The spacing between each SkillBar row.

### SkillBar

- name [string] *required* - The name of the skill.
- level [number] *required* - The skill level.
- color [string] *required* - The SkillBar component color.
- height [number] *optional* default 30 - The SkillBar component height.
- labelWidth [number] *optional* default 100 - The SkillBar component label width.

## Developers

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test` or `yarn run test`

Runs the test watcher in an interactive mode.

### `npm run build` or `yarn build`

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm publish`

Publishes the library to NPM.
