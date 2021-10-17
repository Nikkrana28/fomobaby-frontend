import React, { useState, useEffect } from "react";
import Lottery from './lotterycomponets/web3/LotteryGenerator'
import Lotteryhead from './lotterycomponets/Lotteryhead'
import Web3 from 'web3';
import lotteryGeneratorJson from './lotterycomponets/contract/LotteryGenerator.json';
import Logo from './../assets/lottery-page-header1.png'


const ComingSoon = () => {

  const [currentlottery, setCurrentlottery] = useState([]);
  const [id, setId] = useState();
  var isMetaMaskPresent = false
  var isMetaMaskLoggedin = false
  var web3
  var contractobj
  useEffect(() => {
    get();
   
  }, [])

  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    contractobj = new web3.eth.Contract(lotteryGeneratorJson, "0x3022fa5e88c46860f7BA79b48748A572218e64A6")
  }
  const get = async () => {
    let lotdata = await contractobj.methods.getCurrentLotteryStats().call();
    setCurrentlottery(lotdata)
  }
  console.log(currentlottery)


  
  return (

    <div className="wrapper">
      
      <div className='paraent-grid'>
        <div class="alert lotto-alter" role="alert">
         <img src={Logo}/>
         <br/>
         <br/>
         <br/>
        </div>
        <div class="lotto-com">
          <Lotteryhead lotteryadd={currentlottery[0]} lotterystats={currentlottery[5]} id={currentlottery[1]} />
        </div>
      </div>
    </div>

  )
};

export default ComingSoon;
