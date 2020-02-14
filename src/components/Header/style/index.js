import styled from 'styled-components';

const HeaderStyle = styled.header`
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(35%, 50%));
		object-fit: cover;
		
		.logo {
			padding: 0 0 0 3rem;

			a {
				h1 {
					color: #da1a28;
					font-family: 'Bree Serif',serif;
					letter-spacing: 0.3rem;
					text-transform: uppercase;
					font-size: 2.5rem;
				}
			}
		}

		.menu {
			padding: 2rem 3rem 0 0;

			nav {
				ul {
					display: flex;
					justify-content: space-between;
					align-items: center;

					li {
						list-style: none;

						a {
							color: #ffffff;
							font-family: 'Roboto Slab', serif;
							font-weight: 200;
							font-size: 1.2rem;
							letter-spacing: 0.1rem;
						}
					}
				}
			}
		}
`;

export default HeaderStyle;