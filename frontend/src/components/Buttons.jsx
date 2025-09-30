import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faArrowsSpin,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Error } from "../components/Alerts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Convert({ spin, setSpin, fileUploaded, setFileAlert, file }) {
  const navigate = useNavigate();
  const handleConverting = () => {
    if (fileUploaded) {
      setSpin(true);
      console.log(file);
      requestFromBackend(file);
      setFileAlert();
    } else setFileAlert(<Error message={"No file uploaded."} />);
  };
  const requestFromBackend = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData.get("file"));
    axios
      .post("http://127.0.0.1:9090/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => {
        console.log(data.request.response);
        navigate("/login", { state: data.request.response });
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
export function HandleTakeQuiz({ handleTakeQuiz }) {
  return (
    <button
      className="btn bg-black text-white border-black"
      onClick={handleTakeQuiz}
    >
      Take Quiz
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}
export function SubmitQuiz({ handleSubmitQuiz }) {
  return (
    <div className="flex justify-end mt-5">
      <button
        className="btn bg-black text-white border-black "
        onClick={handleSubmitQuiz}
      >
        Submit
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
