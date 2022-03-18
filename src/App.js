import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Main from './main/Main';
import Login from './login/Login';

function App() {

  const [option, setOption] = useState('main');

  const changeOptionToLogin = () => {
    setOption('login');
  }

  return (
    <div className='App'>
      <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark p-3">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" onClick={changeOptionToLogin}>Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ "height": "150px" }}></div>
      <main className='container-fluid'>
        {option === 'main' && <Main />}
        {option === 'login' && <Login />}
      </main>
    </div>
  );
}

export default App;
