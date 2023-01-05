
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';

import NavBar from './components/Navbar';
import { TextForm } from './components/TextForm';

const darkStyle = {
  color: 'white',
  backgroundColor: '#2C3333'
}

const lightStyle = {
  color: 'black',
  backgroundColor: 'white'
}

const light = "light"
const dark = "dark"
function App() {
  const [mode, setMode] = useState(light)
  const [textMode, setTextMode] = useState(dark)
  const [style, setStyle] = useState(lightStyle)
  const [alert, setAlert] = useState(null)

  const onCopyToClipboardClicked = (message) => {
    setAlert(message)
  }
  const onCloseAlertClicked = () => {
    setAlert(null)
  }

  const toggleMode = () => {
    if (mode === light) {
      setMode(dark)
      setTextMode(light)
      setStyle(darkStyle)
    }
    else {
      setMode(light)
      setTextMode(dark)
      setStyle(lightStyle)
    }
  }
  return (
    <div className="App" style={style}>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} textMode={textMode}></NavBar>
      <Alert onCloseAlertClicked={onCloseAlertClicked} alert={alert}></Alert>
      <div className="container my-5">
        <TextForm onCopyToClipboardClicked={onCopyToClipboardClicked} textMode={textMode} mode={mode} heading="Enter text here"></TextForm>
      </div>
    </div>
  );
}

export default App;
