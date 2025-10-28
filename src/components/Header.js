import { FaArrowRight } from "react-icons/fa";
function Header(){

	return(
		 <header id="header">
		 <nav className="navbar">
		 <a href="#" className="logo">EduMarina</a>
		 <ul>
		 <li>
		 <a href="#">Home</a>
		 </li>
		 <li>
		 <a href="#">product</a>
		</li>
		 <li>
		 <a href="#">pricing</a>
		</li>
		<li>
		<a href="#">contact</a>
	    </li>
		</ul>
		<div className="account">
		<a href="#">Login</a>
		<a href="#" className="btn-join">Join us<FaArrowRight /></a>
		</div>
		 </nav>
		 </header>
		);
	

}
export default Header;