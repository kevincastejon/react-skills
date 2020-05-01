import React from 'react';
import SkillBars from '../lib';
import skills from './skills';

const App = () => {
  const styles = {root:{width: '30%', margin: 'auto'}}
  return(
  <div style={styles.root}>
  <h1>react-skills live demo</h1>
    <SkillBars skills={skills} />
    <a style={{color: 'white'}} href="https://github.com/kevincastejon/react-skills">GITHUB sources</a>
  </div>
)};

export default App;
