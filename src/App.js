import './App.css';
import MainContent from './components/MainContent';
import Counter from './components/Counter';

function App() {
  const name = 'Srinivas';
  const myname = 'Rakesh';

  return (
    <div className="App">
      <header className="App-header">
        <h2>This is my First React App</h2>
        <p>Hello, {name}</p>
        <MainContent name={myname} />
        <MainContent name={'Saloni'} />
        <Counter no={1} />
        <Counter no={2} />
        <Counter no={9} />
      </header>
    </div>
  );
}

export default App;
