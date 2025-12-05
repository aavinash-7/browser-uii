function Bbn({ id, status, onToggle }) {
  return (
    <div className="button" style={{display:"flex", justifyContent:"space-between",alignItems:"center",margin:"9px 0px 0px 0px"}}>
      <div>
        <button className="b1" style={{padding:"10px",cursor:"pointer"}}>Remove</button>
      </div>

      <div>
        <input 
          type="checkbox" 
          id={id} 
          className="check" 
          checked={status} 
          onChange={onToggle} 
        />
        <label htmlFor={id} className="cbtn"></label>
      </div>
    </div>
  );
}

export default Bbn;
