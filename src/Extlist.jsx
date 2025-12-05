function Extension({ setFilter ,filter,theme}) {
  const isDark=theme==="Dark";
  return (
    <div className="ext">
      <><h2 style={{color: theme === "dark"?"white":"black",alignItems:"center" }}>Extensions List</h2> </>
      <div className="aii">
        <button className="btnn" onClick={() => setFilter("all") } style={{background:filter === "all"? "red":"#34324C",cursor:"pointer"}}>All</button>
        <button className="btnn" onClick={() => setFilter("active")} style={{background:filter === "active"? "red":"#34324C",cursor:"pointer"}}>Active</button>
        <button className="btnn" onClick={() => setFilter("inactive")} style={{background:filter === "inactive"? "red":"#34324C",cursor:"pointer"}}>Inactive</button>
      </div>
    </div>
  );
}

export default Extension;
