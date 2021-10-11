import React,{useState} from "react";
import { rollIn } from "react-animations";
import Image3 from "../assets/Image3.png";

const ComingSoon = () => {
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [show, setShow] = useState(true)
    const [runtime, setRuntime] = useState(true)
    var x
    

  function countdownTimeStart(){

    var countDownDate = new Date("Oct 15, 2021 17:53:00").getTime();
     x = setInterval(function() {
        var now = new Date().getTime();

        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24) * (1000 * 60 * 60));
        setDay(days)

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setHour(hours)
        
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setMin(minutes)
        
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setSec(seconds)
        
       
    }, 1000);}

    countdownTimeStart()
    
   
    return (
    <div className="wrapper">
        <div className='parent-lotto'>

          <div class='child-lotto'>
            <h1 style={{color:'#0c7538', fontSize:'70px'}}>  FOMOBABY LOTTO  </h1>
          </div>

          <div class='child-lotto'>$ 2000</div>
          <div class='child-lotto-timer'>{day}d : {hour}h : {min}m : {sec}s </div>

          <div class={show?'child-lotto':'child-lotto-notshow'}>
          <button className='connect-button-lotto'> Connect Wallet </button>
          </div>



        </div>
    </div>
  );
};

export default ComingSoon;
