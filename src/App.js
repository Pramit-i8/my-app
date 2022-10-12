import logo from './logo.svg';
import './App.css';

function App() {
  const name ="Willy Nilly";
  const element1 = <h1> Hello, {name}</h1>;
  
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element2 = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  return (
    <div className="App">
        {element2}
        </div>
  );
}

export default App;
