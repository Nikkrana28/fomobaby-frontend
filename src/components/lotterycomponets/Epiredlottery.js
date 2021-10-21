import React from 'react'


function Epiredlottery({winner, id})  {
  
    return (
        <div>
         
            <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Pot Value: <span className="card-title"> 1 BNB </span> </h5>
                  <h6 className="card-subtitle mb-2 ">Lottery ID: {id}</h6>
                  <br />
                  <h5 className='winner'><span>Winner was: {winner}  </span></h5>
                  {/* <button onClick={() => { setShowexpired(true) }} class="play-btn">See more</button> */}
                  <br />
                  <br />
                  <h6 className='lottery-expired'>Lottery Expired</h6>
                </div>
              </div> 
        </div>
    )
}


export default Epiredlottery
