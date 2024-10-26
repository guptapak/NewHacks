import { useState } from "react";
import "./App.css";
import { FileUpload } from "./components/ui/file-upload";

function App() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const handleNormalUpload = (files: File[]) => {
    // do server upload here
    console.log(files);
    setIsImageUploaded(false);
  };

  if (!isImageUploaded) {
    return (
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className="px-20 py-20 border-4 rounded-lg flex flex-col items-center ">
          <h2 className="text-4xl mb-12">Image Upload</h2>
          <FileUpload onChange={handleNormalUpload} />
        </div>
      </div>
    );
  }
}

export default App;
