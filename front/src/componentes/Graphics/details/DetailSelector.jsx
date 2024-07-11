import React, { useState } from 'react';
import DetailPerceptible from './DetailPerceptible.jsx';
import DetailOperable from './DetailOperable.jsx';
import DetailUnderstandable from './DetailUnderstandable.jsx';
import DetailRobust from './DetailRobust.jsx';
import styles from './DetailSelector.module.css';

function DetailSelector() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <button className={styles.button} onClick={() => toggleSection('perceptible')}>
          PERCEPTIBLE <span className={styles.icon}>{expandedSection === 'perceptible' ? '-' : '+'}</span>
        </button>
        {expandedSection === 'perceptible' && <DetailPerceptible />}
      </div>
      <div className={styles.section}>
        <button className={styles.button} onClick={() => toggleSection('operable')}>
          OPERABLE <span className={styles.icon}>{expandedSection === 'operable' ? '-' : '+'}</span>
        </button>
        {expandedSection === 'operable' && <DetailOperable />}
      </div>
      <div className={styles.section}>
        <button className={styles.button} onClick={() => toggleSection('understandable')}>
          COMPRENSIBLE <span className={styles.icon}>{expandedSection === 'understandable' ? '-' : '+'}</span>
        </button>
        {expandedSection === 'understandable' && <DetailUnderstandable />}
      </div>
      <div className={styles.section}>
        <button className={styles.button} onClick={() => toggleSection('robust')}>
          ROBUSTO <span className={styles.icon}>{expandedSection === 'robust' ? '-' : '+'}</span>
        </button>
        {expandedSection === 'robust' && <DetailRobust />}
      </div>
    </div>
  );
}

export default DetailSelector;
