import React from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import RouterPrincipal from './components/router/RouterPrincipal';
import { BrowserRouter as Router } from 'react-router-dom';

// Crear un cliente de Apollo
const client = new ApolloClient({
  uri: 'https://finniu.com/api/v1/graph/finniu/', // Reemplaza con la URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <RouterPrincipal />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;