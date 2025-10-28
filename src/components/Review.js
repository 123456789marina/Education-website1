 function Review({ id, stars, name, description, job, img }) {
  return (
    <div className="rating">
      <span className="stars">{stars}</span>
      <p className="description">{description}</p>

      <div className="person">
        <img src={img} alt={name} className="person-img" />
        <div className="person-info">
          <h3 className="text-primary">{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
