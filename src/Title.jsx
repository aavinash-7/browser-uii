
import Bbn from './Bbn.jsx';
function ComponentTitle({ title,para,logo,id,status,onToggle,theme}) {
  const isDark=theme==="dark";
  return (
    <div style={{ }}>
  
   <div
  className="div1-title"
  style={{
    width: "22rem",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: isDark ? "#252638" : "#EDEDED",
    color: isDark ? "white" : "black"
  }}
>


      <div style={{display:"flex",margin:"0px 0px 30px 0px"}}>

        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>

        <div className="text" style={{padding:"0px 10px"}}>
            <h4 style={{fontSize:"20px"}}>{title}</h4>

              <p  style={{fontSize:"12px",padding:"5px 0px" }}>
        {para}</p>
              </div>
        </div>
        <Bbn id={id} status={status} onToggle={onToggle}/>
      
    </div>
   
    </div>
  );
}

export default ComponentTitle;
