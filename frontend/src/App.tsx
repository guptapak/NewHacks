import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const handleNormalUpload = () => {
    // do server upload here
    setIsImageUploaded(true);
  };

  if (!isImageUploaded) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="px-20 py-20 border-4 rounded-lg flex flex-col items-center ">
          <h2 className="text-4xl mb-12">Image Upload</h2>
          <Button onClick={() => handleNormalUpload()}>Upload</Button>
        </div>
      </div>
    );
  }
}

export default App;
