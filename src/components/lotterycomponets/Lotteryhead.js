import React, { useState, useEffect } from 'react'
import LotteryGenerator from "./web3/LotteryGenerator";
import web3 from './web3/web3';
import Lottery from "./web3/Lottery";
import './lotterystyle.css'
import Playlottery from './Playlottery';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { logDOM } from '@testing-library/dom';



function Lotteryhead() {

  


  const [currentlottery, setCurrentlottery] = useState([]);
  const [id, setId] = useState();
  // const currentlottery = []
  // const [lotteryname, setLotteryname] = useState();
  // const [manageraddress, setManageraddress] = useState();
  const [status, setStatus] = useState(false);


  useEffect(() => {
    const enable = () =>{
      get();
    }
    enable();
    // getlotteryaddress();
    // accountsaddress();
    // main();
  }, []);


  // async function getlotteryaddress() {
  //   var lotterie = await LotteryGenerator.methods.getLotteries().call();
  //   setLotteryaddress(lotterie)
  //   console.log()
  // }

  // async function accountsaddress() {
  //   web3.eth.getAccounts().then(metaMaskAccounts => {
  //     var accounts = metaMaskAccounts;
  //     setAddress(accounts)
  //   });
  // }

  // function isMyLottery() {
  //   return address[0] === manageraddress;
  // }

  // Lottery.options.address = lotteryaddress[0];

  // function main() {
  //   Lottery.methods.lotteryName().call().then(name => {
  //     setLotteryname(name);
  //   });

  //  async function get(){
  //     console.log("1")
  //       let data = await LotteryGenerator.methods.getCurrentLotteryStats().call();
  //       setId(data[1])
  //       for(let i = id; i >= 0; i--){
  //         console.log("run")
  //         var lottodata = await LotteryGenerator.methods.getLotteryStats(i).call();
  //           console.log('data',lottodata)
  //           currentlottery.push(lottodata)
  //       }
  //     }
      console.log("run1")
      const get = () => {
        console.log("run2")
        let lotid =  LotteryGenerator.methods.getCurrentLotteryStats().call();
        console.log("id is",lotid)
        console.log("run3")
      }

   


  //   Lottery.methods.manager().call().then(managerAddress => {
  //     setManageraddress(managerAddress)
  //   });

  //   Lottery.methods.isLotteryLive().call().then(status => {
  //     setStatus(status)
  //   });
  //}

  const [show, setShow] = useState(false)

  

  return (
    <div>
    {show ? <Playlottery/>:
         <div className='paraent'>

          {currentlottery.map(item => 
           <div className="card" style={{ width: "18rem" }}>
             <div className="card-body">
               <h5 className="card-title">Pot Value: $3000 </h5>
               <h6 className="card-subtitle mb-2 ">Lottery ID: {item[2]}</h6>
               <p className="card-text">Lottery Address: {item[0]} </p>
               <br/>
               {item[5] ? <button onClick={() =>{setShow(true)} } class="play-btn">Play</button> : <h5 className='winner'>Winner Name</h5>}
               <br/>
               <br/>
               {item[5]? <h6 href="#" class="card-link">Live</h6> : <h6 className='lottery-expired'>Lottery Expired</h6>}
             </div>
           </div>)}

         </div>}
  
         {show?<button onClick={() =>{setShow(!true)}} className="play-btn" >Go Back</button>:null}
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





