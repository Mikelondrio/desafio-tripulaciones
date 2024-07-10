import React from 'react'
import { useState, useEffect } from 'react'
import GeneralContext from './GeneralContext';


function StatesProvider({children}){
 
  
    const [burgerMenuIsOpen, setburgerMenuIsOpen] = useState(false);
    const [viewportWidth, setviewportWidth] = useState(window.innerWidth);
    const [analysisIsDone, setAnalysisIsDone] = useState(false)
    

    const contextValue = {
        viewportWidth,
        setviewportWidth,
        burgerMenuIsOpen,
        setburgerMenuIsOpen,
        analysisIsDone,
        setAnalysisIsDone
    };
  
    return(
      <GeneralContext.Provider value={contextValue}>
        {children}
      </GeneralContext.Provider>
    );
  }
  
  export default StatesProvider
  
  