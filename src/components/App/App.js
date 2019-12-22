import React, { useState } from 'react';
import './App.css';
import Image from '../Image/Image';
import FileUpload from '../Fileupload/FileUpload';

function App() {
  const [imgName, setImageName] = useState();

  return (
    <div className="App">
      <FileUpload onChange={setImageName} />
      <Image imgName={imgName} />
    </div>
  );
}

export default App;
