import React, { useState, useEffect } from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

export default function SkillBar(props) {
  const {
    name, level, color, height, labelWidth,
  } = props;
  const [ready, setReady] = useState(false);
  const styles = {
    root: {
      display: 'flex',
      borderRadius: 3,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    label: {
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
    },
    barContainer: {
      flexGrow: 1,
      borderRadius: 3,
      backgroundColor: 'white',
    },
    progressBar: {
      borderRadius: 3,
      height,
      transition: 'width 2s',
      width: `${ready ? level : 0}%`,
      backgroundColor: color,
    },
    level: {
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

      <h5 style={styles.label}>
        {name}
      </h5>
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
};
SkillBar.defaultProps = {
  height: 30,
  labelWidth: 100,
};
