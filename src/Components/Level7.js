import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import ReactConfetti from 'react-confetti'
const Level7 = () => {
    const [value, setCorrectNumber] = useState('');
    const [randomNumber, setRandomNumber] = useState(null);
    const [message, setMessage] = useState('');
    const [attempts,setattempts]=useState(0);
    const maxattempts=4
    // Generate a random number between 1 and 10 when the component mounts
    useEffect(() => {
      const number = Math.floor(Math.random() * 200) + 1;
      setRandomNumber(number);
      console.log('number is',number)
    }, []);
  
    const handleonchange = (event) => {
      setCorrectNumber(event.target.value);
    };
  
    const handledone= () => {
        const userNumber = parseInt(value);
        setattempts(attempts+1)
        setCorrectNumber('')
     
      if (userNumber === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number ${randomNumber}.`);
        document.getElementById('wow').click();
        document.getElementById('reset').style.display='block';
        document.getElementById('gameover').style.display='none'
        document.getElementById('completed').innerHTML='LEVEL-7 COMPLETED'

      } else if (attempts >= maxattempts) {
        alert("GAME OVER")
        document.getElementById('gameover').style.display='none'
        setMessage(`Sorry, you have used all your ${maxattempts} attempts.`);
        document.getElementById('reset').style.display='block';
        
      } else {
        const hint = userNumber< randomNumber ? 'higher' : 'lower';
        setMessage(`Wrong guess. Try a ${hint} number. Attempts left: ${maxattempts- attempts}`);
      }
    };

    const [windowdimension,setdimension]=useState({width:window.innerWidth, height:window.innerHeight});
    const [btn,setbtn]=useState(false)
    const detectsize=()=>{
        setdimension({width:window.innerWidth, height:window.innerHeight})
    }

    useEffect(()=>{
        window.addEventListener('resize',detectsize);
        return()=>{
            window.removeEventListener('resize',detectsize);
        }
    },[windowdimension]);
  return (
    <>
    <button id='wow' onClick={()=>setbtn(!btn)} style={{display:'none'}}></button>
    {btn && <ReactConfetti
       width={windowdimension.width}
       height={windowdimension.height}
       tweenDuration={1000}
       />}
    <section style={{display:'flex',height:'600px',flexDirection:'column',alignContent:'center',alignItems:'center',justifyContent:'flex-start'}}>
      <h1 style={{color:'white'}}>GUESS NUMBER!</h1>
      <h1  id='completed'style={{color:'white'}}>LEVEL-7</h1>
      <div id='gameover' style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <input  style={{height:'50px',width:'300px',textAlign:'center',margin:'10px',boxShadow:'0px 0px 20px #00b4d8',borderRadius:'12px',border:'none'}}placeholder='Enter number here'value={value} type='number' onChange={handleonchange}></input>
        <button style={{backgroundColor:'#ffea00',height:'50px',width:'200px',margin:'20px',boxShadow:'0px 0px 20px #ffea00',border:'none',borderRadius:'12px'}} onClick={handledone}>GUESS</button>
      </div>
      {message && <h1 style={{color:'white',textAlign:'center'}}>{message}</h1>}
      <button id='reset'style={{backgroundColor:'#ffea00',height:'50px',width:'200px',margin:'10px',boxShadow:'0px 0px 20px #ffea00',border:'none',borderRadius:'12px',display:'none'}}><Link to="/home" style={{textDecoration:'none'}}>BACK TO HOME</Link></button>
    </section>
    </>
  )
}
export default Level7
