import logo from "./assets/logo.svg";
import iconSun from "./assets/icon-sun.svg";
import iconmoon from "./assets/icon-moon.svg";
import { useState } from "react";
function Header({toggleTheme,theme}){

 return(
    <div className="head" style={{borderRadius:"20px", display:"flex", justifyContent:"space-between", alignItems:"center",padding:"6px", margin:"35px 0", backgroundColor: theme === "dark" ? "#34324C" : "#EDEDED",}}>
        <img style={{color:"white"}} src={logo}  className="himg" />

        <div className="sun" style={{padding:"5px",borderRadius:"20px"}}>
              <button
          onClick={toggleTheme}
          style={{
            padding: "8px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: theme === "dark" ? "#34324C" : "#EDEDED", 
            transition: "0.3s",
            cursor:"pointer"
          }}
        ><img src={theme==="dark"? iconSun:iconmoon}  /></button>
        </div>
       
    </div> 
 );
}export default Header; 