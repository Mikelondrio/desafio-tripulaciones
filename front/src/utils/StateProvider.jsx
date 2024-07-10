import React from 'react'
import { useState, useEffect } from 'react'
import GeneralContext from './GeneralContext';


function StatesProvider({children}){
 
    const [burgerMenuIsOpen, setburgerMenuIsOpen] = useState(false);
    const [viewportWidth, setviewportWidth] = useState(window.innerWidth);
    const [analysisIsDone, setanalysIsDone] = useState(false);
    
    const contextValue = {
        viewportWidth,
        setviewportWidth,
        burgerMenuIsOpen,
        setburgerMenuIsOpen,
        analysisIsDone,
        setanalysIsDone
    };
  
    return(
      <GeneralContext.Provider value={contextValue}>
        {children}
      </GeneralContext.Provider>
    );
  }
  
  export default StatesProvider
  
  