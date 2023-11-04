import React, { useState } from "react";

export default function TextForm(props) {
    // by default all normal variables are not upadated with page reloading by react but state variables {hooks} are upadated by react without page  reloading
    const upClick = () => {
        // console.log("that button was clicked" , Text);
        let upperCase = Text.toUpperCase()
        setText(upperCase)
        props.showAlert('success', 'Text to UpperCase done')

    }
    const lowClick = () => {
        // console.log("that button was clicked" , Text);
        let lowerCase = Text.toLowerCase()
        setText(lowerCase)
        props.showAlert('success', 'Text to LowerCase done')
    }
    const clearText = () => {
        setText("")
        props.showAlert('primary', 'All Cleared')
    }
    const copy = () => {
        // let text = document.getElementById("yoyo")
        // text.select()
        // navigator.clipboard.writeText(text.value)
        navigator.clipboard.writeText(Text)
        props.showAlert('success', 'Text Copied to your clipboard')
    }
    // setText original Text ki value upadate krney mien kaam aati hia Original Text hi update hota hai so original Text hi print hoga if we try to print ,setText cannot be printed it just a medium/refernce/way to update the original Text
    // setText just dispplay the updated value on the screen
    const saveFile = () => {
        // Create a Blob containing the text
        const blob = new Blob([Text], { type: "text/plain" });

        // Create an object URL from the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "text.txt";

        // Trigger a click event on the anchor element
        a.click();

        // Release the object URL
        window.URL.revokeObjectURL(url);
    }

    const handleOnChange = (e) => {
        // console.log("change hua hia kuch");
        // pehley to set text ki value thi + jo abhi event se jo value aayi
        // isesey setText(ki value) bhi upadte hoti jaayegi[Actually mien original Text hi hai jo update hota h] , new SetText() each time
        setText(e.target.value)

    }

    const isPunctuationMark = (e) => {
        let punctuationMarks = ['.', '?', '!'];
        return punctuationMarks.indexOf(e) !== -1;
    }

    const properCase = () => {
        let ok = true;
        let modifiedText = Text;
        for (let i = 0; i < modifiedText.length; i += 1) {
            if (isPunctuationMark(modifiedText[i])) {
                ok = true;
            } else if (i === 0 || (i > 0 && (modifiedText[i - 1] === ' ' || ok || modifiedText[i - 1] === '\n'))) {
                modifiedText = modifiedText.substring(0, i) + modifiedText[i].toUpperCase() + modifiedText.substring(i + 1, modifiedText.length);
                ok = false;
            } else {
                modifiedText = modifiedText.substring(0, i) + modifiedText[i].toLowerCase() + modifiedText.substring(i + 1, modifiedText.length);
                ok = false;
            }
        }
        setText(modifiedText);
    }
    const isLetter = (e) => {
        return (e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z');
    }
    const sentenceCase = () => {
        let ok = true;
        let modifiedText = Text;
        for (let i = 0; i < modifiedText.length; i += 1) {
            if (isPunctuationMark(modifiedText[i])) {
                ok = true; 
            } else if (isLetter(modifiedText[i]) && ok) {
                modifiedText = modifiedText.substring(0, i) + modifiedText[i].toUpperCase() + modifiedText.substring(i + 1, modifiedText.length);
                ok = false;
            } else if (isLetter(modifiedText[i])) {
                modifiedText = modifiedText.substring(0, i) + modifiedText[i].toLowerCase() + modifiedText.substring(i + 1, modifiedText.length);
            }
        }
        setText(modifiedText);
    }
    
    const [Text, setText] = useState("");

    return (
        <>
            <div style={{ backgroundColor: props.mode === 'dark' ? '#252f3e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="container my-4">
                    <h1>📝 {props.heading}</h1>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id="yoyo"
                            rows="8"
                            value={Text}
                            placeholder="Enter text here"
                            onChange={handleOnChange}
                            style={{ backgroundColor: props.mode === 'dark' ? '#454a7e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        ></textarea>
                    </div>
                    <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={upClick}>UpperCase</button>
                    <button disabled={Text.length === 0} className="btn btn-success mx-2 my-1" onClick={lowClick}>LowerCase</button>
                    <button disabled={Text.length === 0} className="btn btn-secondary mx-2 my-1" onClick={sentenceCase}>SentenceCase</button>
                    <button disabled={Text.length === 0} className="btn btn-warning mx-2 my-1" onClick={properCase}>ProperCase</button>
                    <button disabled={Text.length === 0} className="btn btn-info mx-2 my-1" onClick={copy}>Copy to clipboard</button>
                    <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={saveFile}>Save File</button>
                    <button disabled={Text.length === 0} className="btn btn-danger mx-2 my-1" onClick={clearText}>Clear All</button>
                </div>
                <div className="container">
                    <h2>Your Text Summary</h2>
                    <p>Your Text has {Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {Text.length} characters</p>
                    <h2>Preview</h2>
                    <p>{Text.length > 0 ? `${Text}` : 'nothing for preview'}</p>
                </div>
            </div>
        </>
    );
}