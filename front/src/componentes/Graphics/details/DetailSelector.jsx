import React, { useState } from 'react';
import DetailPerceptible from './DetailPerceptible.jsx';
import DetailOperable from './DetailOperable.jsx';
import DetailUnderstandable from './DetailUnderstandable.jsx';
import DetailRobust from './DetailRobust.jsx';
import styles from './DetailSelector.module.css';


function DetailSelector() {
  const [selectedComponent, setSelectedComponent] = useState('perceptible');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'perceptible':
        return <DetailPerceptible />;
      case 'operable':
        return <DetailOperable />;
      case 'understandable':
        return <DetailUnderstandable />;
      case 'robust':
        return <DetailRobust />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <select 
        className={styles.selector}
        value={selectedComponent} 
        onChange={(e) => setSelectedComponent(e.target.value)}
      >
        <option value="perceptible">Perceptible</option>
        <option value="operable">Operable</option>
        <option value="understandable">Understandable</option>
        <option value="robust">Robust</option>
      </select>
      <div className={styles.componentContainer}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default DetailSelector;