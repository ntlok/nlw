import { Header } from "../components/Header";

import '../styles/Search-point.scss'

export function SearchPoint() {
  return(
		<div id="search-point">
			<div className="content">
				
				<Header link="/" />

				<main>
					<span className="itens-found">
						<strong>2 ponto(s)</strong> de coleta(s)
					</span>

					<div className="components-wrapper">
					<div className="component">
							<img src="https://images.unsplash.com/photo-1626861379496-35a7cf2ae63a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80" alt="" />

							<h2>Colectoria</h2>
							<h4>
								<span>Resíduos Eletrônicos</span>
								<span>Lâmpadas</span>
							</h4>
							<div className="address">
								<p>Rio do sul, Santa Catarina</p>
								<p>Guilerme Gambola, Jardin America</p>
								<p>Nº 260</p>
							</div>
							
						</div>

						<div className="component">
							<img src="https://images.unsplash.com/photo-1626861379496-35a7cf2ae63a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80" alt="" />

							<h2>Colectoria</h2>
							<h4>
								<span>Resíduos Eletrônicos</span>
								<span>Lâmpadas</span>
							</h4>
							<div className="address">
								<p>Rio do sul, Santa Catarina</p>
								<p>Guilerme Gambola, Jardin America</p>
								<p>Nº 260</p>
							</div>
							
						</div>

						<div className="component">
							<img src="https://images.unsplash.com/photo-1626861379496-35a7cf2ae63a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80" alt="" />

							<h2>Colectoria</h2>
							<h4>
								<span>Resíduos Eletrônicos</span>
								<span>Lâmpadas</span>
							</h4>
							<div className="address">
								<p>Rio do sul, Santa Catarina</p>
								<p>Guilerme Gambola, Jardin America</p>
								<p>Nº 260</p>
							</div>
							
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
