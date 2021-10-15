import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Playlottery.css'

function Playlottery() {
    const [name, setName] = useState("")
    const [bnb, setBnb] = useState()

    const submit = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(bnb)
    };

    return (
        <div className='playlottery'>
            <div className='child-flex'>
                <form onSubmit={submit} className='child-flex'>
                    <div class="form-group">
                        <label for="foroupExampleInputmGr">Enter your Telegram user name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telegrm@name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Amount</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="0.1" value={bnb} onChange={(e) => setBnb(e.target.value)}></input>
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
