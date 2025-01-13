import React, { useState, useEffect } from 'react';

const CountLogger = () => {
  const [count, setCount] = useState(0);

  // useEffect dengan array dependency berisi count
  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  }, [count]); // Efek hanya dijalankan saat count berubah

  const handleTambah = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className='text-[30px] font-bold text-blue-500 mb-5 ml-7'>{count}</h1>
      <button onClick={handleTambah} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Tambah</button>
    </div>
  );
};

export default CountLogger;
