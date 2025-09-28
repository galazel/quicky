import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { FileNotUploaded } from "../components/Alerts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Convert({ spin, setSpin, fileUploaded, setFileAlert, file }) {
  const navigate = useNavigate()
  const handleConverting = () => {
    if (fileUploaded) {
      setSpin(true);
      console.log(file)
      requestFromBackend(file);
      setFileAlert();
    } else setFileAlert(<FileNotUploaded />);
  };
  const requestFromBackend = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData.get('file'))
    axios
      .post("http://127.0.0.1:9090/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response)
        navigate('/login')
      })
      .catch((error) => console.log(error));
  };

  return (
    <button className="btn btn-primary" onClick={handleConverting}>
      {spin ? (
        <>
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          Converting
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faArrowsSpin} />
          Convert
        </>
      )}{" "}
    </button>
  );
}
