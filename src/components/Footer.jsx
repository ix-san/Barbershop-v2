Footer.jsx
import LogoBarbershop from "../images/logo-barbershop.png"

function Footer() {

	return(
		<>
				<div className="flex flex-row items-center justify-center p-2 font-pt-serif text-xs md:text-lg text-lime-100">
					<img className="pr-3 max-w-[12%] md:max-w-[8%]" src={LogoBarbershop}/>
					<p>BarberShop 1985, 2023. Todos los derechos reservados.</p>
				</div>
	    </>
		)
}

export default Footer