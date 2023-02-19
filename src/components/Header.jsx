Header.jsx
import CirculoBarber from "../images/Circulo-Barbershop1985.svg"

function Header() {

	return(
		<>
			<div className="flex flex-row items-center justify-center pb-2">
			  <div className="flex flex-auto h-full items-center justify-center md:w-1/5">
			  	<div className="md:col-span-2 md:pl-4 max-w-[2%] md:max-w-[50%]">
			  		<a href="#barbershop">
		  				<img src={CirculoBarber}/>
		  			</a>
			  	</div>
			  </div>
			  <div className="flex-auto md:w-3/5">
			  	<div className="flex flex-row md:grid md:grid-cols-4 md:gap-x-6 align-middle text-center">
			  		<div className="font-pt-serif font-bold text-lg">
			  			<a href="#servicios">
			  				Servicios
			  			</a>
			  		</div>
				  	<div className="font-pt-serif font-bold text-lg">
				  		<a href="#nosotros">
			  				Nosotros
			  			</a>
				  	</div>
				  	<div className="font-pt-serif font-bold text-lg">
				  		<a href="#equipo">
			  				Equipo
			  			</a>
				  	</div>
				  	<div className="font-pt-serif font-bold text-lg">
				  		<a href="#contacto">
			  				Contacto
			  			</a>
				  	</div>
			  	</div>
			  </div>
			  <div className="flex-auto md:w-1/5"></div>
			</div>    
	    </>
		)
}

export default Header