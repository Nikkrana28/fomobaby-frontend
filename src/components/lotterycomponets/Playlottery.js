import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Playlottery.css'
import LotteryGeneratorJson from './contract/LotteryGenerator.json'
import Web3 from 'web3'

function Playlottery({participants}) {
    const [name, setName] = useState("")
    const [eth, setEth] = useState()
    var web3
    var contractobj

    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contractobj = new web3.eth.Contract(LotteryGeneratorJson, "0x5726118dF11A5B51933eF2b822f0B5293d285f1c")
      }
    
    const submit = (event) => {
        event.preventDefault();
        if(eth > 25){
            window.alert("Max Tickests Purches 25 only")
        }
    
        else{  
        try{
        let tickets = contractobj.methods.enterLottery({
            from: '0xd1Ffbe730B63F482959b8535543A84eB268Df53c',
            gas: "1000000",
            value: web3.utils.toWei(0.01, "ether")
          }).call();
        console.log('tickets',tickets)
        }
        catch(error){
            console.log(error)
        }
    }
    };

    return (
        <div className='playlottery '>
            <div className='child-flex'>
                <form onSubmit={submit} className='child-flex'>
                    <div class="form-group">
                        <label for="foroupExampleInputmGr">Enter your Wallet Address</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Wallet Address" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Number of Tickets</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Max amount 0.25" value={eth} onChange={(e) => setEth(e.target.value)}></input>
                    </div>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            </div>

            <div>
                <table class="table table-bordered table-striped mb-0 table-responsive text-center">
                    <thead>
                        <tr>
                            <th scope="col">----------- All Participants ({participants.length})----------- </th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map(items =>
                        <tr>
                            
                            <td>{items}</td>
                        </tr>
                        )}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Playlottery
