import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Playlottery.css'
import LotteryGeneratorJson from './contract/LotteryGenerator.json'
import Web3 from 'web3'

function Playlottery() {
    const [name, setName] = useState("")
    const [eth, setEth] = useState()
    var web3
    var contractobj

    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contractobj = new web3.eth.Contract(LotteryGeneratorJson, "0x3022fa5e88c46860f7BA79b48748A572218e64A6")
      }




    const submit = (event) => {
        event.preventDefault();
        if(eth > 25){
            window.alert("Max Tickests Purches 25 only")
        }
        else{
            const buytickets = async() =>{
            let tickets = await contractobj.methods.currentLottery().buyTickets().call();
            console.log('tickets',tickets)
        }
        buytickets();
    }
    };

    return (
        <div className='playlottery'>
            <div className='child-flex'>
                <form onSubmit={submit} className='child-flex'>
                    <div class="form-group">
                        <label for="foroupExampleInputmGr">Enter your Telegram user name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telegram@name" value={name} onChange={(e) => setName(e.target.value)}></input>
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
                <table class="table table-bordered table-striped mb-0 table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">----------- All Players ----------- </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>@mdo</td>
                        </tr>
                        <tr>
                        
                            <td>@fat</td>
                        </tr>
                        <tr>
                          
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Playlottery
