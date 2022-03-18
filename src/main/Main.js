import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';

function Main() {

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
        <div className="row">
            <div className="col">
                <div className='shadow p-3 rounded' style={{ backgroundColor: "#f3f3f3" }}>
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
    );
}

export default Main;