import React, { useState, useEffect } from 'react'
import LotteryGenerator from "./web3/LotteryGenerator";
import web3 from './web3/web3';
import Lottery from "./web3/Lottery";
import './lotterystyle.css'
import Playlottery from './Playlottery';
import { BrowserRouter as Router, Route } from "react-router-dom";



function Lotteryhead() {

  // useEffect(() => {
  //   getlotteryaddress();
  //   accountsaddress();
  //   main();
  // }, [])


  // const [lotteryaddress, setLotteryaddress] = useState([]);
  // const [address, setAddress] = useState([]);
  // const [lotteryname, setLotteryname] = useState();
  // const [manageraddress, setManageraddress] = useState();
  const [status, setStatus] = useState(true);
  


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
      {show ? <Playlottery/> :
      <div className='paraent'>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Pot Value: </h5>
            <h6 class="card-subtitle mb-2 text-muted">Lottery ID: </h6>
            <p class="card-text">Lottery Address: ********************</p>
            {status? 
            <button onClick={() =>{setShow(true)} } class="play-btn">Play</button>
            :<h5 className='winner'>Winner Name</h5>}
            <br/>
            <br/>
            {status? <h6 href="#" class="card-link">Live</h6> : <h6 className='lottery-expired'>Lottery Expired</h6>}
          </div>
        </div>
      </div>}

      
      {show?<button onClick={() =>{setShow(!true)}} class="play-btn" >Go Back</button>:null}
    </div>


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





