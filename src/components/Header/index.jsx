import React from "react";
import HeaderStyle from './style';

const Header: React.FC = () => {
	return (
		<HeaderStyle>
			<div className="logo">
				<a href="/">
					<h1>SWFlix</h1>
				</a>
			</div>

			<div className="menu">
				<nav>
					<ul>
						<li><a href="/">Inicio</a></li>
						<li><a href="/">Inicio</a></li>
						<li><a href="/">Inicio</a></li>
						<li><a href="/">Inicio</a></li>
						<li><a href="/">Inicio</a></li>
						<li><a href="/">Inicio</a></li>
					</ul>
				</nav>
			</div>
		</HeaderStyle>
	);
};

export default Header;
