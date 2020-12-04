/*
This is one big component to hold all the other components, such as 
the individual monsters and ordering the structure and maybe design too

Now we can also use this component for other things, so always:
BREAK THINGS DOWN, into tiny tiny pieces called COMPONENTS, which
we can COMBINE to their relevant CONCERNS
*/

import React from 'react';

import './card-list.styles.css';
import '../card/card.component';
import { Card } from '../card/card.component';

export const CardList = (props) => (//object comes from React
//    console.log(props);
//    console.log(`This is props.children: ${props.children}`);
//'card-list' from card.list.styles.css
    <div className='card-list'> 
          {props.monsters.map(monster =>( 
            //<h1 key={monster.id}> {monster.name}</h1> //REPLACED BY
            <Card key={monster.id} monster={monster}/>
            //good rule of thumb to use key attribute whenever mapping thru
            //a list in render() since React needs a unique key for each
          ))}    
    </div>
    //{props.children} has to be curly braces due to it pushing thru JS
    //i.e. not a simple <h1> tag but entire map function JS code etc
    //'card-list' is the classname which the css file also references
);