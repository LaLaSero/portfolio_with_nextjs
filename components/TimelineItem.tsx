const TimelineItem = ({ date, description }) => {
	return (
	  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", padding: "8px 0" }}>
		<span style={{ fontWeight: "bold" }}>{date}</span>
		<span>{description}</span>
	  </div>
	);
  };
  
  export default TimelineItem;