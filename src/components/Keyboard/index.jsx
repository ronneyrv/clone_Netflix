/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Keyboard.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import UploadIcon from "@mui/icons-material/Upload";

export default function Keyboard({ onChange }) {
  const [isUpperCase, setIsUpperCase] = useState(true);

  const keyboardUp = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "Ã",
    "Á",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ç",
    "É",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Ó",
    "Ô",
  ];

  const keyboardDow = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "ã",
    "á",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "ç",
    "é",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "ó",
    "ô",
  ];
  const keyboardUcase = isUpperCase ? keyboardUp : keyboardDow;

  const write = (char) => {
    onChange?.(char);
  };

  const handleBackspace = () => {
    onChange?.("__backspace__");
  };

  const handleKeyboard = () => {
    setIsUpperCase((prev) => !prev);
  };
  return (
    <div className="keyboard-container">
      <div className="keyboard">
        {keyboardUcase.map((char) => (
          <button key={char} className="key" onClick={() => write(char)}>
            {char}
          </button>
        ))}
        <button className="key4" onClick={() => handleKeyboard()}>
          <UploadIcon />
        </button>
        <button className="key2" onClick={() => write(" ")}>
          <SpaceBarIcon />
        </button>
        <button className="key3" onClick={handleBackspace}>
          <BackspaceIcon />
        </button>
      </div>
    </div>
  );
};
