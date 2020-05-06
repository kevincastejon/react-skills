import React from 'react';
import {  Link } from "react-router-dom";
import { SkillBars, SkillBar } from '../lib';
import skills from './skills';
import smiley from './smiley.png';
import githubIcon from './githubIcon.png';
import storybookIcon from './storybookIcon.png';
import docIcon from './docIcon.png';
const App = () => {
  const styles = { root: { width: '30%', margin: 'auto' } };
  return (
    <div style={styles.root}>
      <h1>react-skills live demo</h1>
      <ul>
      <li><Link to="/storybook">  <img alt="icon" style={{height:25, verticalAlign:'baseline'}} src={storybookIcon} /> Storybook playground</Link></li>
      <li><Link to="/documentation">  <img alt="icon" style={{height:25, verticalAlign:'baseline'}} src={docIcon} /> Documentation</Link></li>
      <li><a href="https://github.com/kevincastejon/react-skills"><img alt="icon" style={{height:25, verticalAlign:'baseline'}} src={githubIcon} /> Github</a></li>
      </ul>
      <h3>Basic examples</h3>
      <SkillBars skills={skills} />
      <h3>Custom settings examples</h3>
      <SkillBar name="duration=5" level="100" color="#ad6c75" duration="5" />
      <br/>
      <SkillBar name="height=100" level="100" color="#8ab3a2" height={50} />
      <br/>
      <SkillBar name="levelProgress" level="100" color="#177dda" levelProgress />
      <br/>
      <SkillBar name="flat" level="100" color="#19cd05" flat />
      <br/>
      <SkillBar name="labelWidth=200" level="100" color="#d542bd" labelWidth={200} />
      <br/>
      <SkillBar name="customLabel" level="100" color="#36cae4" labelWidth={160} customLabel={
        <h5 style={{margin: 0, backgroundColor: 'rgb(0, 0, 0, 0.2)', paddingLeft:10, textAlign:'left', fontSize:18, color:'#e74023'}}>
            <img alt="icon" style={{height:25, marginRight:10, marginBottom:4, verticalAlign:'middle'}} src={smiley} />
            customLabel
          </h5>
      } />
    </div>
  );
};

export default App;
