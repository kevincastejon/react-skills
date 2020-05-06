import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import SkillBar from './SkillBar';


/**
 * Group your Skillbars components together
 */
export default function SkillBars(props) {
  const {
    skills, duration, barsHeight, spacing, labelsWidth, customLabels, levelProgress, flat
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
          <SkillBar flat={flat} levelProgress={levelProgress} duration={duration} customLabel={customLabels?customLabels(skill):null} labelWidth={labelsWidth} height={barsHeight} name={skill.name} level={skill.level} color={skill.color} />
        </div>
      ))}
    </div>
  );
}

SkillBars.propTypes = {

  /**
   * An array of SkillBar props data
   */
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    color: PropTypes.string,
  })).isRequired,

  /**
   * The animation duration in seconds.
   */
  duration: PropTypes.number,
  /**
   * Whether or not the level text should increment as the bar grow up or directly display the level value.
   */
  levelProgress: PropTypes.bool,
  /**
   * Whether the skillbars own a box shadow or not.
   */
  flat: PropTypes.bool,
  /**
   * The SkillBar component height.
   */
  barsHeight: PropTypes.number,
  /**
   * The SkillBar component label width.
   */
  labelsWidth: PropTypes.number,
  /**
   * The spacing between each SkillBar row.
   */
  spacing: PropTypes.number,
  /**
   * User defined function that takes a skill parameter and returns a React component to display instead of the default labels.
   */
  customLabels: PropTypes.func
};
SkillBars.defaultProps = {
  duration: 2,
  levelProgress: false,
  flat: false,
  barsHeight: 30,
  labelsWidth: 100,
  spacing: 15,
  customLabels: null
};
