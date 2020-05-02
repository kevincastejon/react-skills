import React, { useState, useEffect } from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

export default function SkillBar(props) {
  const {
    name, level, color, height, labelWidth, customLabel,
  } = props;
  const [ready, setReady] = useState(false);
  const styles = {
    root: {
      display: 'flex',
      borderRadius: 3,
      backgroundColor: 'rgba(0,0,0,0)',
      boxShadow: '3px 3px 5px 0px #252525',
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
      transition: 'width 2s',
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
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div style={styles.root}>

      <div style={styles.labelContainer}>
        {customLabel || (
        <h5 style={styles.label}>
          {name}
        </h5>
        )}
      </div>
      <div style={styles.barContainer}>
        <span style={styles.level}>
          {level}
          %
        </span>
        <div style={styles.progressBar} />
      </div>
    </div>
  );
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number,
  labelWidth: PropTypes.number,
  customLabel: PropTypes.node,
};
SkillBar.defaultProps = {
  height: 30,
  labelWidth: 100,
  customLabel: null,
};
