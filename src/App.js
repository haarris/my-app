import { Component } from 'react';
//import { unmountComponentAtNode } from 'react-dom';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from '../src/components/search-box/search-box';

class App extends Component { 
/* Using a Class component gains us access to 'state' which is big JS
object w/ props which we can access anytime inside our class 
and also the 'setState' method on ANY HTML
*/
  constructor() { 
    super();//calls the constructor method on the component class
    this.state = {//hence allows us access to the state in our class
      monsters: [
        /*{ //need to keep empty since we're fetching data anyway
          name: 'Frankenstein',
          id: 'asdfkey1' //react needs a unique key for each, for quick
                        //calling and in case state changes the name
        },
        {
          name: 'Dracula',
          id: 'asdfkey2'
        },
        {
          name: 'Zombie',
          id: 'asdfkey3'
        } */
      ],
      searchField: ''
    };
  }
  //life cycle methods are methods of the components dependent on specific
  //times or events
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //.then(users => console.log(users));
    .then(users => this.setState({ monsters: users}));
  }
  render() { //from Component
    const { monsters, searchField} = this.state; //destructuring
    //equivalent to:   const monsters = this.state.monsters;
    //                 const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (//what is below is HTML/JSX (hence comments don't work)
/*JSX is trying to mimic HTML, in order to utilise as virtualDOM but you'll
still see small diffs like 'className' (classname) and 'button onClick=' 
<button onclick=src>, this is cos JSX is primarily JS and hence camelCase is
used instead*/

      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange ={e => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
      /*this.state.monsters (and whenever state is ref'd in places like here)
      is passed down as 'props' hence why setState is so important cos:
/* why setState? Because unidirectional data flow, cannot access state
directly, hence whenever button is clicked and state is adjusted, the 
render() method is called again, state is updated etc -> declarative approach
      so all the components (read: functions) that take in props via state, 
      all end up refreshing via new state (read: new props), hence important 
      via rule 2) 'decide on where/how state lives/runs'
*/
    );
  }
}

export default App; 
