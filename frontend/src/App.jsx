import React from 'react';
import nav from './pages/nav';
import Home from './pages/Home';
import auth from './pages/auth';  // Use relative path here

const App = () => {
  return (
    <div>
      <Home />
      {/* You can add auth component where necessary */}
    </div>
  );
}

export default App;
