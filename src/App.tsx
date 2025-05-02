import React from 'react';
import './App.css';
// import Greet from './Component/greet/greet';
// import Application from './Component/Application/Application';
import { Skills } from './Component/skills/Skills';
import Counter from './Component/Counter/counter';

const App = () => {
  return (
    <div>
      <a href='https://reactjs.org'
     /*  target='_blank' */>
        learn react
      </a>
      {/* <b ><Greet name='Lokendra'/></b>  */}
      {/* <Application /> */}
      <Skills skills={['HTML', 'CSS', 'Javascript']} />
      <Counter />

    </div>
  );
}

export default App;




