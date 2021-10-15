import React, { useState, useEffect } from 'react'
import LotteryGenerator from "./web3/LotteryGenerator";
import web3 from './web3/web3';
import Lottery from "./web3/Lottery";
import './lotterystyle.css'


function Lotteryhead() {

  useEffect(() => {
    getlotteryaddress();
    accountsaddress();
    main();
  }, [])


  const [lotteryaddress, setLotteryaddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [lotteryname, setLotteryname] = useState();
  const [manageraddress, setManageraddress] = useState();
  const [status, setStatus] = useState(true);

  // var lotteryName = " ";
  // var lotteryManager = " ";
  // var isLotteryLive = false;

  async function getlotteryaddress() {
    var lotterie = await LotteryGenerator.methods.getLotteries().call();
    setLotteryaddress(lotterie)
    console.log()
  }

  async function accountsaddress() {
    web3.eth.getAccounts().then(metaMaskAccounts => {
      var accounts = metaMaskAccounts;
      setAddress(accounts)
    });
  }

  function isMyLottery() {
    return address[0] === manageraddress;
  }

  Lottery.options.address = lotteryaddress[0];

  function main() {
    Lottery.methods.lotteryName().call().then(name => {
      setLotteryname(name);
    });
    

    Lottery.methods.manager().call().then(managerAddress => {
      setManageraddress(managerAddress)
    });

    Lottery.methods.isLotteryLive().call().then(status => {
      setStatus(status)
    });
  }

  return (
    <div>
      <div class="col-md-4" style={{paddingTop:"15px",paddingBottom: "15px"}}>
        <div class="card" style={{boxShadow: "5px 5px rgba(0, 171, 24, 0.05"}}>
          <h5 class={isMyLottery() ? 'my-lottery-color' : ''}>
            {"Pot Value : " + lotteryname}</h5>
          <div class="card-body">
            <h6 class="card-title">{"Lottery Address  : " + lotteryaddress[0]}</h6>
            <hr />
            <div class="row">
              <div class="col-md-6">
                <button className="btn-success"> Play</button>
              </div>
              <div class="col-md-6 lottery-status">

                <span class="lottery-status-icon" class={status ? 'lottery-status-icon-green' : 'lottery-status-icon-red'}></span>
                {status? "Live" : "Closed"}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lotteryhead





