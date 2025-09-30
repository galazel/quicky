import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Convert } from "../components/Buttons";

function Landing() {
  const fileRef = useRef(null);
  const [spin, setSpin] = useState(false);
  const [uploadLabel, setUploadLabel] = useState(
    "Files to upload: .pdf,.doc,.docx,.txt,.ppt,.pptx"
  );
  const [fileUploaded, setIsFileUploaded] = useState(false);
  const [fileAlert, setFileAlert] = useState();
  const [file, setFile] = useState();
  const handleUpload = () => {
    fileRef.current.click();
  };
  const handleFileChange = () => {
    const files = fileRef.current.files;
    if (files.length > 0) {
      setUploadLabel(files[0].name);
      setFile(files[0]);
      setIsFileUploaded(true);
    }
  };
  return (
    <main className="grid grid-4 gap-6 p-5">
      <div className="flex items-center flex-col gap-10">
        <h1 className="animate-bounce">
          Quicky
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </h1>
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
      <div className="flex justify-center ">
        <Convert
          spin={spin}
          setSpin={setSpin}
          fileUploaded={fileUploaded}
          setIsFileUploaded={setIsFileUploaded}
          setFileAlert={setFileAlert}
          file={file}
        />
      </div>
      <div className="flex justify-center ">
        {fileAlert}
        <input
          className="hidden"
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
          onChange={handleFileChange}
        />
      </div>
    </main>
  );
}

export default Landing;
