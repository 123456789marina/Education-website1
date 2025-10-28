import SectionHeader from "./SectionHeader"
import Review from "./Review"
import {ratingData} from "./data"
function Reviews()
{
	return (
		<section id="reviews">
		<div className="container">
		<SectionHeader title={"Each and every client is important"} description={"Discover what our students are saying in the reviews section! real feedback from our learners who have experienced and benefited form our courses."}/>
		<div className="ratings">
		{ratingData.map(rating => {
			const{id,description,img,stars,job,name}=rating;
			return <Review key={id} description={description} img={img} stars={stars} job={job} name={name}/>;
		})}
		</div>

		</div>
		</section>
		);

}
export default Reviews;