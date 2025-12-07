function Bbn({ id, status, onToggle, onRemove }) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"9px"}}>
      <button
        className="b1"
        style={{ padding: "10px", cursor: "pointer" }}
        onClick={() => onRemove(id)}
      >Remove</button>

      <div>
        <input
        id={id}
          type="checkbox"
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
