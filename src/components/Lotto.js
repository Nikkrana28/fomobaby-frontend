import React, { useState } from "react";
import Lottery from './lotterycomponets/web3/Lottery'
import web3 from "./lotterycomponets/web3/web3";
import Lotteryhead from './lotterycomponets/Lotteryhead'

const ComingSoon = () => {

  var isMetaMaskPresent = false
  var isMetaMaskLoggedin = false
  isMetaMaskPresent = web3 ? true : false;

  async function create() {
    if (isMetaMaskPresent) {
      const accounts = await web3.eth.getAccounts();
      isMetaMaskLoggedin = accounts.length ? true : false;
    }
  }

  create();
  return (

    <div className="wrapper">
      <div className='paraent-grid'>
        <div class="alert alert-primary lotto-alter" role="alert">
          To play this lottery please make sure that metamask is connected to Binance Smart chain.
        </div>
        <div class="lotto-com">
          <Lotteryhead />
        </div>
      </div>
    </div>

  )
};

export default ComingSoon;
