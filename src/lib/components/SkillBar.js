import React, { useRef, useState, useEffect } from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';


/**
 * Displays a animated skill bar
 */
export default function SkillBar(props) {
  const {
    name, level, color, height, labelWidth, customLabel, duration, levelProgress, flat
  } = props;
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const styles = {
    root: {
      display: 'flex',
      borderRadius: 3,
      backgroundColor: 'rgba(0,0,0,0)',
      boxShadow: flat?'none':'3px 3px 5px 0px #252525',
    },
    labelContainer: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      width: labelWidth,
      height,
      borderRadius: 3,
      backgroundColor: color,
      color: 'white',
      lineHeight: `${height}px`,
      margin: 0,
      padding: 0,
      fontSize: 14,
    },
    label: {
      margin: 0,
      color: 'white',
    },
    barContainer: {
      flexGrow: 1,
      borderRadius: 3,
      backgroundColor: 'white',
      textAlign: 'left',
    },
    progressBar: {
      borderRadius: 3,
      height,
      transition: 'width '+duration+'s',
      width: `${ready ? level : 0}%`,
      backgroundColor: color,
    },
    level: {
      fontSize: 14,
      position: 'absolute',
      lineHeight: `${height}px`,
      marginLeft: 10,
      color: 'white',
      fontWeight: 'bold',
    },
  };
  const progressBarRef = useRef(null);
  const barContainerRef = useRef(null);
  useEffect(() => {
    setReady(true);
    let timer;
    if (progress < level) {
      timer = setInterval(() => {
        const innerWidth = getComputedStyle(progressBarRef.current).width;
        const outerWidth = getComputedStyle(barContainerRef.current).width;
        let lvl = (Math.ceil(parseInt(innerWidth.substr(0, innerWidth.length-1), 10)/parseInt(outerWidth.substr(0, outerWidth.length-1), 10)*100));
        lvl = lvl>level?level:lvl;
        setProgress(lvl)
      }, 20);
    }
    return(() => {
      clearInterval(timer);
    })
  }, [progress, duration, level], );
  return (
    <div style={styles.root}>

      <div style={styles.labelContainer}>
        {customLabel || (
        <h5 style={styles.label}>
          {name}
        </h5>
        )}
      </div>
      <div ref={barContainerRef} style={styles.barContainer}>
        <span style={styles.level}>
          {levelProgress?progress:level}
          %
        </span>
        <div ref={progressBarRef} style={styles.progressBar} />
      </div>
    </div>
  );
}

SkillBar.propTypes = {
  /** The name of the skill. */
  name: PropTypes.string.isRequired,
  /** The skill level. */
  level: PropTypes.number.isRequired,
  /** The background color. */
  color: PropTypes.string.isRequired,
  /** The animation duration in seconds. */
  duration: PropTypes.number,
  /** The component height. */
  height: PropTypes.number,
  /** Whether or not the level text should increment as the bar grows up or directly display the level value. */
  levelProgress: PropTypes.bool,
  /** Whether the component owns a box shadow or not. */
  flat: PropTypes.bool,
  /** The label width. */
  labelWidth: PropTypes.number,
  /** User defined function that takes a skill parameter and returns a React component to display instead of the default label. */
  customLabel: PropTypes.func,
};
SkillBar.defaultProps = {
  height: 30,
  duration: 2,
  levelProgress: false,
  flat: false,
  labelWidth: 100,
  customLabel: null,
};
