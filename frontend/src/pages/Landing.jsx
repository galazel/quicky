import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Convert } from "../components/Buttons";

function Landing() {
  const fileRef = useRef(null);
  const [spin, setSpin] = useState(false);
  const [uploadLabel, setUploadLabel] = useState(
    "Files to upload: .pdf,.doc,.docx,.txt,.ppt,.pptx"
  );
  const [fileUploaded, setIsFileUploaded] = useState(false);
  const [fileAlert,setFileAlert] = useState()
  const handleUpload = () => {
    fileRef.current.click();
    console.log(fileRef.current.value);
  };
  const handleFileChange = () => {
    const files = fileRef.current.files;
    if (files.length > 0) {
      setUploadLabel(files[0].name);
      setIsFileUploaded(true)
    }
  };
  return (
    <main className="w-screen h-screen bg-violet-300 flex flex-col justify-center items-center gap-10">
      <div className="flex items-center flex-col gap-10">
        <h1 className="animate-bounce">Quicky</h1>
        <p className="text-center w-7xl">
          Quicky is a simple app that lets you upload files like PDFs, Word
          documents, PowerPoints, or text files and convert them into quizzes
          instantly.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <FontAwesomeIcon
          icon={faUpload}
          onClick={handleUpload}
          size="10x"
          className="hover:cursor-pointer hover:-translate-y-1 delay-150 hover:scale-110 hover:text-blue-400"
        />
        <label htmlFor="file">{uploadLabel}</label>
      </div>
      <Convert
        spin={spin}
        setSpin={setSpin}
        fileUploaded={fileUploaded}
        setIsFileUploaded={setIsFileUploaded}
        setFileAlert={setFileAlert}
      />
     {fileAlert}
      <input
        className="hidden"
        ref={fileRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
        onChange={handleFileChange}
      />
    </main>
  );
}

export default Landing;
