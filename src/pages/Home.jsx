import { Link } from 'react-router-dom';
import logoImg from '../images/logo.svg';
import logIn from '../images/log-in.svg'
import search from '../images/search.svg';
import background from '../images/home-background.svg'

import '../styles/Home.scss';

export function Home() {

	function modal() {
		const modal = document.getElementById('modal');

		modal.classList.toggle('active');
	}

	return (
		<>
			<div id="page-home">
				<div className="content">
					<header>
						<img src={logoImg} alt="" />
						<Link to='/create-point'>
							<img src={logIn} alt="" />
							<span>Cadastre um ponto de coleta</span>
						</Link>
					</header>
					<main>
						<h1>
							Seu marketplace de coleta de resíduos
						</h1>
						<p>
							Ajudando pessoas a encontrarem pontos de coleta de forma eficiente
						</p>
						<Link to="/" onClick={modal}>
								<span>
									<img src={search} alt="" />
								</span>
								<strong>Pesquisar pontos de coleta</strong>
						</Link>
					</main>

					{/* <img className="background-img" src={background} alt="" /> */}
				</div>
			</div>

			<div id="modal">
				<div className="modal-content">
					<header>
						<h1>Pontos de Coleta</h1>
						<Link to="/" onClick={modal}>
							Fechar
						</Link>
					</header>
					<form action="">
						<label htmlFor="search">Cidade</label>
						<div className="search-field">
							<input type="text" name="search" />
							<button>
								<img src={search} alt="buscar" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
  )
}