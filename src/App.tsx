import React from 'react';
import './App.css';
import { Application } from './components/application/Application';
import { Counter } from './components/counter/Counter';
import Form from './components/Form/Form';
import Formular from './components/Form/Formular';
import { MuiMode } from './components/mui/MuiMode';
import { Skills } from './components/skills/Skills';
import { AppProviders } from './providers/AppProviders';
import { CounterTwo } from './components/counter-two/CounterTwo';
import { Users } from './components/users/Users';

function App() {
  return (
    <AppProviders>
      <div className='App'>
        {/*<Application />*/}
        {/*<Skills skills={['HTML', 'CSS']} />*/}
        {/*<Counter />*/}
        <Application />
        <Skills skills={['HTML', 'CSS']} />
        <Counter />
        <CounterTwo count={1} />
        <Users />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
