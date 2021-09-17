import { useEffect, useState } from 'react';
import { api } from '../services/api';

import { Header } from '../components/Header';

import lampada from '../images/lampadas.svg';
import bateria from '../images/baterias.svg';
import eletronico from '../images/eletronicos.svg';
import oleo from '../images/oleo.svg';
import organico from '../images/organicos.svg';
import papel from '../images/papeis-papelao.svg';


import '../styles/Create-point.scss'



export function CreatePoint() {

	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [itemsSelected, setItemsSelected] = useState([]);


	useEffect(() => {
		async function takeStates() {
			const { data } = await api.get('');
	
			setStates(data)
		}

		

		takeStates()
	},[])

	async function getCities(event) {
		const city = document.querySelector('[name=city]');
		const ufInput = document.querySelector('input[name=uf]')
		city.disabled = true;

		const state = event.target.value;

		const stateIndex = event.target.selectedIndex;
		ufInput.value = event.target.options[stateIndex]

		console.log(ufInput.value)

		const { data } = await api.get(`/${state}/municipios`);	

		city.disabled = false;
		setCities(data);
			
	}

	function getItem(event) {
		const selecionado = event.target.id
		
		let elemente = document.getElementById(`${selecionado}`)

		elemente.classList.toggle('active')

		const itemExist = itemsSelected.findIndex( item => {
			return item == selecionado
		})

		if(itemExist >= 0){
			const newArray = itemsSelected.filter( item => {
				return item !== selecionado;
			})

			setItemsSelected([...newArray])
		} else {
			setItemsSelected([...itemsSelected, selecionado])
		}

		console.log(itemsSelected)
	}

	function takeDados(event) {
		event.preventDefault();

		const nome = document.getElementById("name")

		

		console.log(nome.value)
	}

	


	return (
		<div id="create-point">
			<div className="content">
				
				<Header link="/" />

				<main>
					<form action="" onSubmit={takeDados}>
						<h1>Cadastro do ponto de coleta</h1>
						<fieldset>
							<legend >
								<h2 className="active">Dados da Entidade</h2>
							</legend>

							<div className="field-group">
								<div className="field">
									<label htmlFor="name">Nome da entidade</label>
									<input type="text" id="name" />
								</div>
								<div className="field">
									<label htmlFor="image">Imagem da entidade</label>
									<input type="text" id="image" placeholder="https://" />
								</div>
							</div>

							<div className="field-group">
								<div className="field double">
									<label htmlFor="adress">Endereço</label>
									<input type="text" id="adress" />
								</div>
								<div className="field">
									<label htmlFor="number">Número</label>
									<input type="text" id="number"  />
								</div>
							</div>

							<div className="field-group">
								<div className="field">
									<label htmlFor="state">Estado</label>
									<select 
										name="state" 
										id="state" 
										onChange={getCities}
									>
										
										{states.map( state => {
											return(
												<option key={state.id} value={state.id}>{state.nome}</option>
											)
										})}
									</select>

									<input type="hidden" name="uf" />
								</div>
								<div className="field">
									<label htmlFor="city">Cidade</label>
									<select name="city" id="city" disabled>
										<option value="">estamos</option>
										{cities.map( city => {
											return(
												<option key={city.id} value={city.id}>{city.nome}</option>
											)
										})}
									</select>
								</div>
							</div>

							
						</fieldset>

						<fieldset>
							<legend>
								<h2>Itens de coleta</h2>
								<span>Selecione um ou mais itens abaixo</span>
							</legend>

							<div className="itens-coleta">
								<li 
									id="lampada"
									className=""
									onClick={ getItem }
								>
									<img src={lampada} alt="" />
									<p>Lâmpada</p>
								</li>
								<li  
									id="bateria"
									className=""
									onClick={ getItem }
								>
									<img src={bateria} alt="" />
									<p>Pilhas e Baterias</p>
								</li>
								<li
									id="papel"
									className=""
									onClick={ getItem }
								>
									<img src={papel} alt="" />
									<p>Papel e Papelão</p>
								</li>
								<li
									id="eletronico"
									className=""
									onClick={ getItem }
								>
									<img src={eletronico} alt="" />
									<p>Eletronicos</p>
								</li>
								<li
									id="organico"
									className=""
									onClick={ getItem }
								>
									<img src={organico} alt="" />
									<p>Resíduos Organicos</p>
								</li>
								<li
									id="oleo"
									className=""
									onClick={ getItem }
								>
									<img src={oleo} alt="" />
									<p>Óleo</p>
								</li>
							</div>
						</fieldset>

						<div className="button-content">
							<button type="submit">Cadastrar ponto de coleta</button>
						</div>

					</form>

										
				</main>
			</div>
		</div>
  );
}