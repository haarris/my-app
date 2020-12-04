import React from 'react';

import './search-box.styles.css';


/* functional components don't have access to state, or lifecycle methods
unlike class components, hence used for largely returning html (via 
    taking in props)

*/
export const SearchBox = ({ placeholder, handleChange }) => (
//                  remember how you could pass thru props?
    <input 
        type='search'
        placeholder={ placeholder }
        className='search'
        onChange={handleChange}
   />
);
/*Why not put State here?
Because remember 'One Way Dataflow' that the top most part of the tree-like
Data structure is the best place to put it since the bottom majority can
easily find the refreshed state, if we do it solely on searchbox, then 
it's not at the top, way down, and if it did it both at the same time, then
confusing and potentially conflicting states down the line.
Research more on React architecture  theory as well, get Data Structures
right. 
*/



/*OLD BEFORE CONVERTED INTO COMPONENT

const searchBox = ({ placeholder }) => {
    <input type='search' placeholder={ placeholder } className='search'
       onChange={e => { //synthetic event via react DOM
       //console.log(e.target.value)} //default e.target
       this.setState({ searchField: e.target.value }//, () =>
//           console.log(this.state)
       ); //we're doing it in this fashion (i.e. console.log as callback)
         //bcos setState is async (vs sync) hence it doesn't return entire
         //input immediately (lag of 1 unit), but callback takes care of this
    }} 
   />
}
*/