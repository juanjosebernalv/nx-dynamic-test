import * as React from 'react';
import { loadRemoteModule } from '@dynamic-app/load-remote-module';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Myreactapp = React.lazy(() => loadRemoteModule('myreactapp', './Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myreactapp">Myreactapp</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/" element={<Myreactapp />} />


      </Routes>
    </React.Suspense>
  );
}

export default App;
