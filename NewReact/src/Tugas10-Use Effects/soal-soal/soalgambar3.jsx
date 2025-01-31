import React, { useState, useEffect } from "react";

const TextLogger = () => {
  const [text, setText] = useState("");
  const [updatedText, setUpdatedText] = useState("");

  // useEffect dengan array dependency berisi text
  useEffect(() => {
    console.log(`Teks berubah menjadi: ${text}`);
  }, [text]); // Efek hanya dijalankan saat text berubah

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleUpdateText = () => {
    setUpdatedText(text); // Simulasi pembaruan teks
  };

  return (
    <div className="text-center space-x-4 ">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Masukkan teks"
        cladsName="w-[300px] ml-[100px] mt-[20px] "
      />
      <button
        onClick={handleUpdateText}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 "
      >
        Update Teks
      </button>
      <p className="mt-5">Teks yang dimasukkan: {updatedText}</p>
    </div>
  );
};

export default TextLogger;
