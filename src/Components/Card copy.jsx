import React,{useState} from "react";

export default function Card(props) {

  let [changes,setChanges]=useState(false);

  function changeState()
  {
    // alert('Working properly');
    setChanges(!changes);
  }
  
  function colorChange(){
    return changes===true?"card-container bg-color":"card-container bg-transparent"; 
  }

  function counterTrigger()
  {
    return changes===true?'counter-container':"counter-container-hidden";
  }


  return (
    <div className={colorChange()} onClick={changeState}>
      <div className="content-container">
        <h1>{props.pDetails.pname}</h1>
        <p>{props.pDetails.pdesc}</p>
      </div>

      <div className={counterTrigger()}>
        <h2>Quantity</h2>
        <p className="count-shower">ZERO</p>
        <button className="btn btn-inc">+</button>
        <button className="btn btn-dec">-</button>
      </div>

    </div>
  );
}
