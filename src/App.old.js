import logo from './logo.svg';
import { Component } from 'react'; //for classes and the render method
import './App.css';
/*
This is all entirely JSX, which is a combination of JS and HTML
Anything inside the { } brackets is strictly JS
*/

class App extends Component {
/* Using a Class component gains us access to 'state' which is big JS
object w/ props which we can access anytime inside our class 
and also the 'setState' method on ANY HTML
*/
  constructor() { 
    super();//calls the constructor method on the component class
    this.state = {//hence allows us access to the state in our class
      string: 'Hello Harris'
    };
  }

  render() {
    return (//what is below is HTML/JSX (hence comments don't work)
/*JSX is trying to mimic HTML, in order to utilise as virtualDOM but you'll
still see small diffs like 'className' (classname) and 'button onClick=' 
<button onclick=src>, this is cos JSX is primarily JS and hence camelCase is
used instead*/
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'Test'})}>
            Change Text 
          </button> 
        </header>
      </div>
/* why setState? Because unidirectional data flow, cannot access state
directly, hence whenever button is clicked and state is adjusted, the 
render() method is called again, state is updated etc -> declarative approach
*/
    );
  }
}

export default App; 
//as seen, this goes to index.js as 'App.js' gets imported 
/*DELETED CODE
function App() {
  
}





*/