import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [text, setText] = useState('');
    const message = "GGUESS THE RANDOM NUMBER!!!";
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText((prev) => prev + message.charAt(index));
            index++;
            if (index === message.length) {
                clearInterval(intervalId);
            }
        }, 100);
        
        return () => clearInterval(intervalId);
    }, []);
    const handlevisible=()=>{
        document.getElementById('open').style.display='none'

    }
  return (
    <>
    <div style={{backgroundColor:'black',height:'60px',display:'flex',flexDirection:'row',alignItems:'center',alignContent:'center',justifyContent:'space-evenly',position:'sticky',top:'0px'}}>
        <div><Link to="/home"><i class="fa-solid fa-house" onClick={handlevisible}style={{color:'white',fontSize:'30px'}}></i></Link></div>
    </div>
    <div id="open" style={{height:'100px',display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center',justifyContent:'space-evenly'}}>
     <div style={{color:'white'}}>
       <h2><span>{text}</span></h2>
     </div>
     <Link to='/home'><button onClick={handlevisible} style={{height:'50px',width:'100px',backgroundColor:'#ffea00',boxShadow:'0px 0px 20px #ffea00',border:'none',borderRadius:'12px'}}>Play</button></Link>
   </div>
   </>
  )
}

export default Navbar