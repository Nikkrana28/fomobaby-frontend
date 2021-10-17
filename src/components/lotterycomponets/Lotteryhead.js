import React, { useState, useEffect } from 'react'
import LotteryGenerator from "./web3/LotteryGenerator";
import './lotterystyle.css'
import Playlottery from './Playlottery';
import Web3 from 'web3';
import lotteryGeneratorJson from './contract/LotteryGenerator.json';
import Expiredlottery from './Epiredlottery'

function Lotteryhead({lotteryadd, lotterystats, id}) {

  const [expiredlottery, setExpiredlottery] = useState(true);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false)
  const [showexpired, setShowexpired] = useState(false)
  var web3
  var contractobj

  console.log("id is",lotterystats)
  
  if(id > 0){
    setExpiredlottery(true)
  }

  return (
    <div>
    {show ? <Playlottery/>:
         <div className='paraent'>
           <div className="card" style={{ width: "18rem" }}>
             <div className="card-body">
               <h5 className="card-title">Pot Value: $3000 </h5>
               <h6 className="card-subtitle mb-2 ">Lottery ID: {id}</h6>
               <p className="card-text">Lottery Address: {lotteryadd}</p>
               <br/>
               {lotterystats ? <button onClick={() =>{setShow(true)} } class="play-btn">Play</button> : <h5 className='winner'>Winner Name</h5>}
               <br/>
               <br/>
               {lotterystats? <h6 href="#" class="card-link">Live</h6> : <h6 className='lottery-expired'>Lottery Expired</h6>}
             </div>
           </div>

         </div>}
         {show?<button onClick={() =>{setShow(!true)}} className="play-btn" >Go Back</button>:null}
         
         {expiredlottery?
         <div>
           <br/>
           <br/>
           <br/>
           <br/>
           <h2>Expired Lotteries</h2>

        {showexpired?<Expiredlottery/>: 
        <div className='paraent'>
           <div className="card" style={{ width: "18rem" }}>
             <div className="card-body">
               <h5 className="card-title">Pot Value: $3000 </h5>
               <h6 className="card-subtitle mb-2 ">Lottery ID: {id}</h6>
               <br/>
               <button onClick={() =>{setShowexpired(true)} } class="play-btn">See more</button>
               <br/>
               <br/>
               <h6 className='lottery-expired'>Lottery Expired</h6>
             </div>
           </div>
         </div>}
         {showexpired?<button onClick={() =>{setShowexpired(!true)}} className="play-btn" >Go Back</button>:null}
         </div>:null}
    <br/>
    <br/>
    <br/>
    </div>
     
//     <div>
//  {show ? <Playlottery/>:
//       <div className='paraent'>
//         <div class="card" style={{ width: "18rem" }}>
//           <div class="card-body">
//             <h5 class="card-title">Pot Value: ***** </h5>
//             <h6 class="card-subtitle mb-2 ">Lottery ID: 0</h6>
//             <p class="card-text">Lottery Address:  </p>
//             <br/>
//             {status? 
//             <button onClick={() =>{setShow(true)} } class="play-btn">Play</button>
//             :<h5 className='winner'>Winner Name</h5>}
//             <br/>
//             <br/>
//             {status? <h6 href="#" class="card-link">Live</h6> : <h6 className='lottery-expired'>Lottery Expired</h6>}
//           </div>
//         </div>
//       </div>}

//       {show?<button onClick={() =>{setShow(!true)}} class="play-btn" >Go Back</button>:null}
//     </div>


    // <div>
    //   <div class="col-md-4" style={{paddingTop:"15px",paddingBottom: "15px"}}>
    //     <div class="card" style={{boxShadow: "5px 5px rgba(0, 171, 24, 0.05"}}>
    //       <h5 class={isMyLottery() ? 'my-lottery-color' : ''}>
    //         {"Pot Value : " + lotteryname}</h5>
    //       <div class="card-body">
    //         <h6 class="card-title">{"Lottery Address  : " + lotteryaddress[0]}</h6>
    //         <hr />
    //         <div class="row">
    //           <div class="col-md-6">
    //             <button className="btn-success"> Play</button>
    //           </div>
    //           <div class="col-md-6 lottery-status">

    //             <span class="lottery-status-icon" class={status ? 'lottery-status-icon-green' : 'lottery-status-icon-red'}></span>
    //             {status? "Live" : "Closed"}

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Lotteryhead





