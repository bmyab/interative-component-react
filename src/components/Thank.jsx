import React from "react";
import image from "../assets/images/illustration-thank-you.svg";

const Thank = ({items , enviado}) => {
  // console.log(enviado)
  return (
    <div className="card">
      <div className="mx-auto pt-4">
        <img src={image} alt="Imagen referencial" />
      </div>
      <div className="text-content bg-gray-700">
      <p className="text-center text-orange-500 px-2 py-1 text-sm">You selected {items} of 5</p>
      </div>
      <h2 className="text-white text-2xl text-center">Thank You!</h2>
      <p className="text-gray-400 pb-5 text-center">
        We appreciated you talkin the time to give a rating. If you ecer need
        mor support. don't tohesitate to get in touch!
      </p>
      <button 
        onClick={()=>enviado(false)}
        className="btn">Back</button>
    </div>
  );
};

export default Thank;
