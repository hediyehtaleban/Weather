import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
 
  global.lang = {ff:"vr", ffb:"vb"}

  return (
    <div style={{ 
      direction: "rtl", 
      minHeight: "100vh",
      minWidth: "10vh",
      backgroundImage: "url('/back.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    }}>

    

    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x /><br-x /><br-x /><br-x /><br-x /><br-x />
      <Window  style={{ minHeight: 450, margin: 50, width: "calc(100% - 90px)", direction: "rtl", 
     
    
      backgroundImage: "url('/2.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center", }}>
     


      <div style={{width:"50%", height:50,color: "lab(91.58 2.81 0.99)",float:"left" }}>
     
      </div>
      <div style={{width:"50%", height:50, color: "fff" }}>
     
        </div>

    <div style={{float:"left",textAlign: "center",fontSize: "9.5em",width:"25%",color:"hsl(202.98 40.87% 77.45%) ", height:250}}>
    <br-x /><br-x /><br-x /><br-x /><br-x /><br-x />
    <img width="60"   height="60"   src="/11.png" alt="if the image didnt load this will show"></img>
    {props.W.current_condition[0].temp_C}
    </div>
    <div style={{float:"left",textAlign: "center", fontSize: "9.5em",width:"25%",color:"  hsl(202.98 40.87% 77.45%)", height:250}}>
        
      </div>
  
    
    

  
    

    <div style={{float:"right",textAlign: "center",fontWeight: "bold", fontSize: "1.5em", height:250, color:"hwb(218.51 10.59% 63.14%)"}}>
    <br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x />
    
     
    {props.W.current_condition[0].observation_time}
    
    <br/>
    {props.W.weather[0].date} </div>
    
    <div style={{textAlign: "center",float:"right", fontSize: "3.5em",height:250, color:"hwb(222.31 8.63% 60.78% / 0.81)"}}>
    <br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x /><br-x />
    
    |{props.W.nearest_area[0].areaName[0].value}
   
    
   
    </div>
    
    <div style={{float:"left",textAlign: "center",color:"lab(26.29 -6.5 -18.39)",fontWeight: "bold", fontSize: "2em",width:"25%", height:150,backgroundColor: "rgba(93 129 174 / 0.54)",backdropFilter: "blur(7px)",borderRadius: "4px"}}>
    <br-x /> <br-x /> <br-x />
    <img width="60"   height="50"   src="/0.png" alt="if the image didnt load this will show"></img> <br-x /> 
 
    %
    Humidity 

   <span style={{ marginLeft: "19px" }}></span>


   {props.W.current_condition[0].humidity}  
    

    </div>
    

    <div style={{float:"left",textAlign: "center",color:"lab(26.29 -6.5 -18.39)",fontWeight: "bold", fontSize: "2em",width:"25%", height:150,backgroundColor: "rgba(93 129 174 / 0.54)",backdropFilter: "blur(7px)",borderRadius: "4px"}}>
    <br-x /> <br-x /> <br-x /> <br-x /> 
    <img width="60"   height="40"   src="/000.png" alt="if the image didnt load this will show"></img>
    <br-x /> 
    Cloud Cover
    <span style={{ marginLeft: "15px" }}></span>
     
   
    {props.W.current_condition[0].cloudcover}
    

    </div>
    <div style={{float:"left",textAlign: "center",color:"lab(26.29 -6.5 -18.39)", fontWeight: "bold",fontSize: "2em",width:"25%", height:150,backgroundColor: "rgba(93 129 174 / 0.54)",backdropFilter: "blur(7px)",borderRadius: "4px"}}>
    <br-x /> <br-x /> 
    <img width="60"   height="60"   src="/00.png" alt="if the image didnt load this will show"></img><br-x /> 
    Wind speed
    <span style={{ marginLeft: "15px" }}></span>
    
    {props.W.current_condition[0].windspeedKmph}
    
      
    </div>


  
          

   
       
    <div style={{float:"left",textAlign: "center",color:"lab(26.29 -6.5 -18.39)",fontWeight: "bold", fontSize: "2em",width:"25%", height:150,backgroundColor: "rgba(93 129 174 / 0.54)",backdropFilter: "blur(7px)",borderRadius: "4px"}}>
    <br-x /> <br-x />  <img width="60"   height="60"   src="/rain .png" alt="if the image didnt load this will show"></img><br-x /> 
    Precipitation
    <span style={{ marginLeft: "15px" }}></span>
    
   
    {props.W.current_condition[0].precipInches}
    

    </div>    

   


      </Window>
    </div>
    </div>

    
  )
}




export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://irmapserver.ir/research/api/weather/")
    let data = await res.json()
    let W = data

    console.log("________daaaaaataaaaa________:", W)




  return {
    props: {
      data: global.QSON.stringify({
       W,
        session,
        // nlangs,
      })
    },
  }
}