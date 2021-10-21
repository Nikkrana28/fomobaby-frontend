import React, { useState, useEffect } from "react";
import Lottery from './lotterycomponets/web3/LotteryGenerator'
import Lotteryhead from './lotterycomponets/Lotteryhead'
import Web3 from 'web3';
import lotteryGeneratorJson from './lotterycomponets/contract/LotteryGenerator.json';
import Logo from './../assets/lottery-page-header1.png'
import { isDOMComponent } from "react-dom/test-utils";


const ComingSoon = () => {

  const [currentlottery, setCurrentlottery] = useState([]);

  const [winner, setWinner] = useState()
  const [winningamount, setWinningamount] = useState()
  const [idslist, setIdslist] = useState([])
  const [id, setId] = useState()
  var web3
  var contractobj

  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    contractobj = new web3.eth.Contract(lotteryGeneratorJson, "0x5726118dF11A5B51933eF2b822f0B5293d285f1c")
  }

  try {
    useEffect(() => {
      get();

    }, [])
    const get = async () => {
      let lotdata = await contractobj.methods.getCurrentLotteryStats().call();
      setCurrentlottery(lotdata)
      const id = lotdata[1]
      setId(lotdata[1])

      let win = await contractobj.methods.getLotteryStats(id).call();
      setWinner(win[2])
      setWinningamount(win[3] / (10 ** 18))
    }
  }
  catch (erroe) {

  }
 
  if (id > 0) {
    for (let i = id - 1; i >= 0; i--) {
      if (!idslist.includes(i)) {
        idslist.push(i)
      }
    }
  }


  console.log("ids", idslist[0])
  return (

    <div className="wrapper">
      <div className='paraent-grid'>
        <div class="alert lotto-alter" role="alert">
          <img src={Logo} style={{ width: "960px", height: "300px" }} />
          <br />
          <br />
          <br />
        </div>
        <div class="lotto-com">
          <Lotteryhead lotteryadd={currentlottery[0]} id={currentlottery[1]} players={currentlottery[2]} lotterystats={currentlottery[6]} winners={winner} winningamount={winningamount} idslist={idslist} />
        </div>
      </div>
    </div>

  )
};

export default ComingSoon;
