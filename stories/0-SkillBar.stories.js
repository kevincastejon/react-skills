import React from 'react';

import SkillBar from '../src/lib/components/SkillBar';
import { withKnobs, text, number, boolean, color as colorComponent, button } from '@storybook/addon-knobs';

export default {
  title: 'SkillBar',
  component: SkillBar,
  decorators: [withKnobs]
};

export const Playground = () => {
  const name = text('Name', 'Skill Name');
  const level = number('Level', 100, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  });
  const color = colorComponent('Color', '#6cc24a');
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

  return(<div style={{fontFamily:'Segoe UI',width:'50%', margin:'auto', marginTop:100}}>
        <SkillBar
          name={name}
          level={level}
          color={color}
          flat={flat}
          levelProgress={levelProgress}
          duration={duration}
          labelWidth={labelWidth}
          height={height}
        />
      </div>)
};
