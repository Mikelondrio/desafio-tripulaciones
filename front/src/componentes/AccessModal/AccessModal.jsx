import React from 'react'
import { useRef } from 'react'


function AccessModal(){

    const accessModalRef= useRef(null);

    function toggleAccessModal() {
        if(!accessModalRef.current) {
          return;
        }
        accessModalRef.current.hasAttribute('open') ? accessModalRef.current.close() : accessModalRef.current.showModal();
      }

    return (
      <>

        <button onClick={toggleAccessModal}>Modal</button>

          <div className='accessModalContainer'>
            
            <dialog ref={accessModalRef}>
                <button><ion-icon name="close"></ion-icon></button>
                <p>modal content</p>
            </dialog>
          
          </div>
      </>
    )
    
}

export default AccessModal
