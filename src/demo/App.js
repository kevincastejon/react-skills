import React from 'react';
import { SkillBars } from '../lib';
import skills from './skills';
import reactIcon from './reactIcon.png';
import nodeIcon from './nodeIcon.png';
const iconSkills = [
  {
    name: 'NodeJS',
    level: 95,
    color: '#6cc24a',
    icon: nodeIcon
  },
  {
  name: 'ReactJS',
  level: 90,
  color: '#00d8ff',
  icon: reactIcon
  }
];
const App = () => {
  const styles = { root: { width: '30%', margin: 'auto' } };
  return (
    <div style={styles.root}>
      <h1>react-skills live demo</h1>
      <h3>Basic example</h3>
      <SkillBars skills={skills} />
      <h3>Custom settings example</h3>
      <SkillBars
        height={40}
        labelsWidth={120}
        duration={5}
        levelProgress
        customLabels={(skill) => (
          <h5 style={{margin: 0, marginLeft:10, textAlign:'left', fontSize:18, color:'#252525'}}>
            <img alt="icon" style={{height:25, marginRight:10, marginBottom:4, verticalAlign:'middle'}} src={skill.icon} />
            {skill.name}
          </h5>
        )}
        skills={iconSkills} />
      <a style={{ color: 'white' }} href="https://github.com/kevincastejon/react-skills">Documentation and sources</a>
    </div>
  );
};

export default App;
