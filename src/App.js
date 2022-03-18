import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = () => {
    setResultText(text);
  }

  const handleClear = () => {
    setText("");
    setResultText("");
  }

  return (
    <div className='App'>
      <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark p-3">
        <a className="navbar-brand" href="#">Navbar</a>
      </nav>
      <div style={{ "height": "150px" }}></div>
      <main className='container-fluid'>
        <div className="row">
          <div className="col">
            <div className='bg-light p-3 shadow'>
              <div className='d-flex justify-content-end'>
                <button
                  className='btn btn-outline-danger'
                  onClick={handleClear}>Clear</button>
                <div className='mx-2'></div>
                <button
                  className='btn btn-danger'
                  onClick={handleSubmit}>Submit</button>
              </div>
              <br></br>
              <div className="form-floating">
                <textarea
                  ref={textAreaRef}
                  id='contentText'
                  className="form-control"
                  value={text}
                  placeholder="..."
                  onChange={handleTextChange}
                ></textarea>
                <label htmlFor="contentText">Văn bản</label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='p-3'>
              <div className='display-line-break'>
                {resultText}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
