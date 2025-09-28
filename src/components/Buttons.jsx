import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { FileNotUploaded } from "../components/Alerts";

export function Convert({ spin, setSpin, fileUploaded, setFileAlert }) {
  const handleConverting = () => {
    if (fileUploaded) {
      setSpin(true);
      setFileAlert();
    } else setFileAlert(<FileNotUploaded />);
  };
  return (
    <button className="btn btn-primary" onClick={handleConverting}>
      {spin ? (
        <>
          <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
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
