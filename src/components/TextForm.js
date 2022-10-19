import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>{
        let newText='';
        setText(newText);
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>   
        <h1>{props.heading}</h1> 
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        
         </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something to preview it here"}</p>
      </div>
    </>
  )
}
