import React, { useState } from 'react'
import './App.css'
import { QRCodeCanvas } from 'qrcode.react';
import { BsArrowRightSquare } from 'react-icons/bs'

const App = () => {

  const [URL, setURL] = useState();
  const [QRValue, setQRValue] = useState();

  const handleURL = (e) => {
    setURL(e.target.value)
  }

  const generateQR = () => {
    setQRValue(URL)
  }

  const handleDownload = () => {
    const qrcode = document.getElementById('qrcode')

    var dataUrl = qrcode.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = "qrcode.png";
    link.href = dataUrl.replace("image/png", "image/octet-stream");
    // console.log(link);
    link.click();

  }

  return (
    <div className='relative overflow-hidden w-full h-[100vh] bg-cyan-300 flex justify-center items-center'>
      <div className='absolute z-50 w-[90%] h-[90%] container glass-bg flex flex-col justify-center items-center gap-10'>
        <h1 className='font-poppins font-bold text-transparent text-center text-6xl md:text-7xl bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-500 mb-10'>Create your ultimate QR Code</h1>

        <div className="webflow-style-input">
          <input type="text" value={URL} placeholder="What's your url?" onChange={(e) => ((handleURL(e)))}></input>
          <button type="button arrow-btn" onClick={() => generateQR()} ><BsArrowRightSquare /></button>
        </div>

        <div className='bg-white rounded-md p-3 shadow-md cursor-pointer group relative' onClick={() => handleDownload()}>
          <QRCodeCanvas
            id='qrcode'
            value={QRValue}
            size={138}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level='M'
            includeMargin={true}
          />
          <div className='w-fit h-fit absolute left-1/2 top-1/2 -mt-[12.5px] -ml-[29px] bg-white select-none rounded-sm font-bold shadow-md py-2 px-3 opacity-0 group-hover:opacity-100'>
            Download
          </div>
        </div>

      </div>

      {/* Gradient Background */}
      <div className='gradient1'></div>
      <div className='gradient2'></div>
      <div className='gradient3'></div>
    </div >
  )
}

export default App