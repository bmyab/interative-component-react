import React, { useState } from "react";
import start from "../assets/images/icon-star.svg";
import Thank from "./Thank";

const Card = () => {
  const [item, setItems] = useState("");

  const [enviar, setEnviar] = useState(false);

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="input-select text-white bg-gray-800 focus:bg-gray-600"
      >
        {number}
      </button>
    );
  };
  // console.log(item);
  // console.log(enviar)

  return (
    <>
    {!enviar &&(
      <div className="card">
      <div className="image-container bg-gray-800">
        <img className="img" src={start} alt="estrella imagen" />
      </div>
      <h2 className="text-white font-bold text-2xl">How did we do?</h2>
      <p className="text-gray-400">
        Please let us knpw we did with your support request.All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className=" grid grid-cols-5 ">
        <li>
          <Button number={1} />
        </li>
        <li>
          <Button number={2} />
        </li>
        <li>
          <Button number={3} />
        </li>
        <li>
          <Button number={4} />
        </li>
        <li>
          <Button number={5} />
        </li>
      </ul>
      <div className="w-full">
        <button
          onClick={()=>setEnviar(true)}
          className="btn w-full">Submit</button>
      </div>
    </div>
    )}
   
    {enviar && (
      <Thank items={item} enviado={setEnviar} />
    )}

    </>
  );
};

export default Card;
