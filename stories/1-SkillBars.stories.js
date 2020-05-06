import React from 'react';

import SkillBars from '../src/lib/components/SkillBars';
import { withKnobs, text, number, boolean, color as colorComponent, object as obj  } from '@storybook/addon-knobs';

export default {
  title: 'SkillBars',
  component: SkillBars,
  decorators: [withKnobs]
};

export const Playground = () => {
  const flat = boolean('Flat',false);
  const levelProgress = boolean('LevelProgress',false);
  const duration = number('Duration', 2, {
    range: true,
    min: 0,
    max: 10,
    step: 1,
  });
  const labelWidth = number('LabelWidth', 100, {
    range: true,
    min: 0,
    max: 300,
    step: 1,
  });
  const height = number('Height', 30, {
    range: true,
    min: 0,
    max: 200,
    step: 1,
  });
  const skills = obj('Skills', [
    {
      name: 'ReactJS',
      level: 90,
      color: '#00d8ff',
    },
    {
      name: 'ExpressJS',
      level: 85,
      color: '#6cc24a',
    },
    {
      name: 'MySQL',
      level: 80,
      color: '#00758f',
    },
    {
      name: 'GraphQL',
      level: 75,
      color: '#e535ab',
    },
    {
      name: 'Apollo',
      level: 72,
      color: '#371777',
    },
    {
      name: 'Prisma',
      level: 70,
      color: '#050f2c',
    },
  ]);

  return(<div style={{fontFamily:'Segoe UI',width:'50%', margin:'auto', marginTop:100}}>
        <SkillBars
          skills={skills}
          flat={flat}
          levelProgress={levelProgress}
          duration={duration}
          labelsWidth={labelWidth}
          barsHeight={height}
        />
      </div>)
};
