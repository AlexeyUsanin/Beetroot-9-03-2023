import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Navigation/Navigation';

import './App.css';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
    </>
  );
}

export default App;
