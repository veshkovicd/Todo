import { Link } from "react-router-dom";

const NavBar = () => {
    return (
		<ul>
			<li>
				<Link to={"/"}>
					Home
				</Link>
			</li>

			<li>
				<Link to={"/todo-list"}>
					Create list
				</Link>
			</li>
		</ul>
	);
}

export default NavBar;