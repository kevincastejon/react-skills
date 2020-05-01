import React from 'react';
import SkillBars from '../lib';
import skills from './skills';

const App = () => {
  const styles = {root:{width: '30%', margin: 'auto'}}
  return(
  <div style={styles.root}>
  <h1>react-skill-bars live demo</h1>
    <SkillBars skills={skills} />
  </div>
)};

export default App;
