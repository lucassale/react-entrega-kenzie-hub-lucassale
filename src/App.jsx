import React from 'react';
import { RoutesMain } from "../src/routes/RoutesMain.jsx";
import { UserProvider } from '../src/contexts/UserContext.jsx';

function App() {
  return (
      <UserProvider>
        <RoutesMain />
      </UserProvider>
  );
}

export default App;
