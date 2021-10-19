import React, { useState, useEffect } from 'react'
import LotteryGenerator from "./web3/LotteryGenerator";
import './lotterystyle.css'
import Playlottery from './Playlottery';
import Web3 from 'web3';
import lotteryGeneratorJson from './contract/LotteryGenerator.json';
import Expiredlottery from './Epiredlottery'

function Lotteryhead({ lotteryadd, id, players, lotterystats, winners, winningamount }) {

  const [expiredlottery, setExpiredlottery] = useState(false);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false)
  const [showexpired, setShowexpired] = useState(false)
  const [expirdid, setExpiredid] = useState([])
  const [showwinner, setShowwinner] = useState(false)
  var web3
  var contractobj

  useEffect(() => {
    // countid();

  }, [])

 

  // const countid = () => {
  //   if (false) {
  //     setExpiredlottery(false)
  //   }
  //   else {
  //     for (let i = 4; i >= 0; i--)
  //       expirdid.push(i)
  //   }
  // }
  console.log("Winner Amount", winningamount)

  return (
    <div>
      {show ? <Playlottery participants={players}/> :
        <div className='paraent'>
          <div className="card" style={{ width: "18rem" }}>
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
        <br/>
      {show ? <button onClick={() => { setShow(!true) }} className="play-btn" >Go Back</button> : null}

      {expiredlottery ?
        <div>
          <br />
          <br />
          <br />
          <br />
          <h2>Expired Lotteries</h2>
          <div className='paraent'>
          {expirdid.map(ids => <div  >
          {showexpired ? <Expiredlottery ids={ids} /> :
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Pot Value: $3000 </h5>
                  <h6 className="card-subtitle mb-2 ">Lottery ID: {ids}</h6>
                  <br />
                  <button onClick={() => { setShowexpired(true) }} class="play-btn">See more</button>
                  <br />
                  <br />
                  <h6 className='lottery-expired'>Lottery Expired</h6>
                </div>
              </div>
            </div>}
            </div>)}
            </div>
          {showexpired ? <button onClick={() => { setShowexpired(!true) }} className="play-btn" >Go Back</button> : null}
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





