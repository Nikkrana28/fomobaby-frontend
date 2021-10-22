import React, { useState, useEffect } from 'react'
import LotteryGenerator from "./web3/LotteryGenerator";
import './lotterystyle.css'
import Playlottery from './Playlottery';
import Web3 from 'web3';
import lotteryGeneratorJson from './contract/LotteryGenerator.json';
import Expiredlottery from './Epiredlottery'

function Lotteryhead({ lotteryadd, id, players, lotterystats, winners, winningamount, idslist }) {

  const [expiredlottery, setExpiredlottery] = useState(true);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false)
  const [lastwinner, setLastwinner] = useState()
  const [account, setAccount] = useState(false)
  const [expirdid, setExpiredid] = useState([])
  const [showwinner, setShowwinner] = useState(false)
  var web3
  var contractobj

  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    contractobj = new web3.eth.Contract(lotteryGeneratorJson, "0xa2D52E6F7c4488680FFb62397913be9718724eA2")
  }


  const getlastwinner = async (value) => {
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    return await contractobj.methods.getLotteryStats(value).call();
  }

  
  function get(value) {
    (async () => {
      let win = await getlastwinner(value)
      setLastwinner(win[2])
    })()
    return lastwinner
  }

  console.log('winner', players)


  return (
    <div>
      {show ? <Playlottery participants={players}  accounts={account}/> :
        <div className='paraent'>
          <div className="card" style={{ width: "22rem" }}>
            <div className="card-body">
              <h5 className="card-title">Pot Value: <span className="card-title"> {winningamount} BNB </span></h5>
              <h6 className="card-subtitle mb-2 ">Lottery ID: {id}</h6>
              <p className="card-text">Lottery Address: {lotteryadd}</p>
              <br />
              {lotterystats ? <button onClick={() => { setShow(true) }} class="play-btn">Play</button> : <h5 className='winner'><span>Our winner is:  </span>{winners}</h5>}
              <br />
              <br />
              {lotterystats ? <h6 href="#" class="card-link">Live</h6> : <h6 className='lottery-expired'>This Lottery is not Live</h6>}
            </div>
          </div>

        </div>}
      <br />
      {show ? <button onClick={() => { setShow(!true) }} className="play-btn" >Go Back</button> : null}

      {expiredlottery ?
        <div>
          <br />
          <br />
          <br />

          <h2>Expired Lotteries</h2>
          <div className='paraent mt-3'>
            {idslist.map(item =>
              <Expiredlottery winner={get(item)} id={idslist.indexOf(item)} />)}
          </div>
          {/* {showexpired ? <button onClick={() => { setShowexpired(!true) }} className="play-btn" >Go Back</button> : null} */}
        </div> : null}
      <br />
      <br />
      <br />
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



  )
}

export default Lotteryhead





