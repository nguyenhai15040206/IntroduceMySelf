
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import video from './assets/Videos/chill.mp4';

const HomePage = React.lazy(() => import('./components/Header/Header'));
const About = React.lazy(() => import('./feature/About/About'));
const Contact = React.lazy(() => import('./feature/Contact/Contact'));
const Resume = React.lazy(() => import('./feature/Resume/Resume'));

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <Suspense fallback={<div class="spinner-border text-warning"></div>}>
          <BrowserRouter>
            <Switch>
              <Redirect exact from="/" to="/HomePage" >
              </Redirect>
              <Route path="/HomePage" component={HomePage} />
              <Route path="/About" component={About} />
              <Route path="/Resume" component={Resume} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </BrowserRouter>
          <audio id="video" controls autoPlay loop>
            <source src={video} type="audio/mp4" />
          </audio>
        </Suspense>
      </div>

    </div>
  );
}

export default App;
