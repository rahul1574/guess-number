import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <section style={{display:'flex',height:'700px',flexDirection:'column',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}>
    <h1 style={{color:'white'}}>SELECT ONE!!!</h1>
     <div style={{display:'flex',flexDirection:'row',height:'700px',flexWrap:'wrap',justifyContent:'space-evenly'}}>
       <div style={{backgroundColor:'#ffba08',width:'300px',height:'50px',margin:'10px',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level1' style={{textDecoration:'none',color:'black'}}><h3>PLAY:RANGE 1-10</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#faa307',margin:'10px',color:'black',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level2' style={{textDecoration:'none',color:'black'}}><h3>PLAY:RANGE 1-20</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#f48c06',margin:'10px',color:'black',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level3' style={{textDecoration:'none',color:'black'}}><h3>PLAY:RANGE 1-50</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#e85d04',margin:'10px',color:'black',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level4' style={{textDecoration:'none',color:'black'}}><h3>PLAY:RANGE 1-100</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#e85d04',margin:'10px',color:"black",display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level5' style={{textDecoration:'none',color:'black'}}><h3>PLAY:RANGE 1-120</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#dc2f02',margin:'10px',color:'white',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level6' style={{textDecoration:'none',color:'white'}}><h3>PLAY:RANGE 1-150</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#9d0208',margin:'10px',color:'white',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level7' style={{textDecoration:'none',color:'white'}}><h3>PLAY:RANGE 1-200</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#6a040f',margin:'10px',color:'white',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level8' style={{textDecoration:'none',color:'white'}}><h3>PLAY:RANGE 1-500</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#370617',margin:'10px',color:'white',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level9' style={{textDecoration:'none',color:'white'}}><h3>PLAY:RANGE 1-700</h3></Link></div>
       <div style={{height:'50px',width:'300px',backgroundColor:'#03071e',margin:'10px',color:'white',display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-evenly'}}><Link to='/level10' style={{textDecoration:'none',color:'white'}}><h3>PLAY:RANGE 1-1000</h3></Link></div>
     </div>
    </section>
    </>
  )
}

export default Home