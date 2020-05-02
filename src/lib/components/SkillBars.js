import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import SkillBar from './SkillBar';

export default function SkillBars(props) {
  const {
    skills, barsHeight, spacing, labelsWidth, customLabels
  } = props;
  const styles = {
    root: {
      margin: 5,
    },
    skill: {
      marginBottom: spacing,
    },
  };
  return (
    <div style={styles.root}>
      {skills.map((skill, i) => (
        <div style={styles.skill} key={skill.name}>
          <SkillBar customLabel={customLabels(skill)} labelWidth={labelsWidth} height={barsHeight} name={skill.name} level={skill.level} color={skill.color} labelColor={skill.labelColor} />
        </div>
      ))}
    </div>
  );
}

SkillBars.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    color: PropTypes.string,
  })).isRequired,
  barsHeight: PropTypes.number,
  labelsWidth: PropTypes.number,
  spacing: PropTypes.number,
  customLabels: PropTypes.arrayOf(PropTypes.node)
};
SkillBars.defaultProps = {
  barsHeight: 30,
  labelsWidth: 100,
  spacing: 15,
  customLabels: null
};
