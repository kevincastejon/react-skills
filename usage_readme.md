```javascript

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

// ...

<SkillBar name="ReactJS" level={100} color="blue" />
<SkillBar name="SomeOtherTech" level={80} color="red" />

```
