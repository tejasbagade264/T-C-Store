import React, { useState } from 'react';
import '../styles/filter.css';
import { useValue } from '../itemContext';

function Filter() {
  const Opt = ["Categories", "About Us", "Contact"];
  const { addFilter, categories, selectedCategories, scrollToBody } = useValue();
  const [showMenu, setShowMenu] = useState(false);
 

  return (
    <>
      <div className="filter-container">


        {/* <div className="menu-tab" style={{ color:"red"}} onClick={() => setShowMenu(!showMenu)}>
             <p style={{color:"red"}}>
                Menu
             </p>
             </div>
       
        {showMenu && (
            <>
            
          <div className="sidebar">
            {Opt.map((option, index) => (
              <div key={index} className="sidebar-menu-item">
                {option}
              </div>
            ))}
          </div>

            </> 
        )} */}
        <div className="types">
          {Opt.map((option, index) => (
            <div key={index}>{option}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filter;
