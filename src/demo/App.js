import React from 'react';
import { SkillBars } from '../lib';
import skills from './skills';
import reactIcon from './reactIcon.png';
import otherTechIcon from './otherTechIcon.png';
const iconSkills = [{
  name: 'ReactJS',
  level: 90,
  color: '#00d8ff',
  icon: reactIcon
},
{
  name: 'ExpressJS',
  level: 85,
  color: '#6cc24a',
  icon: otherTechIcon
}];
const App = () => {
  const styles = { root: { width: '30%', margin: 'auto' } };
  return (
    <div style={styles.root}>
      <h1>react-skills live demo</h1>
      <SkillBars
        height={40}
        labelsWidth={120}
        customLabels={(skill) => (
          <h5 style={{margin: 0, color: 'white', marginLeft:10, textAlign:'left'}}>
            <img alt="icon" style={{height:25, marginRight:10, verticalAlign:'middle'}} src={skill.icon} />
            {skill.name}
          </h5>
        )}
        skills={iconSkills} />
      <a style={{ color: 'white' }} href="https://github.com/kevincastejon/react-skills">GITHUB sources</a>
    </div>
  );
};

export default App;
