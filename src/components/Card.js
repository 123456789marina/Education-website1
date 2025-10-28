function Card({id, img, title, description, color, bgColor}){
	return(
		<div className="card">
			<span className="icon" style={{color:color, backgroundColor:bgColor}}>{img}</span>
			<h2 >{title}</h2>
			<span className="line"></span>
			<p>{description}</p>
		</div>
	
		); 
}
export default Card;