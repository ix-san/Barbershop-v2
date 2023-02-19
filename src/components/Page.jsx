Page.jsx
import LogoBarbershop from "../images/logo-barbershop.png"
import Linea1B from "../images/Linea1B.png"
import Linea1N from "../images/Linea1N.png"
import Ourwork01 from "../images/ourwork01.png"
import Ourwork20 from "../images/ourwork20.png"
import Ourwork00 from "../images/ourwork00.png"
import Ourwork03 from "../images/ourwork03.png"
import Ourwork10 from "../images/ourwork10.png"
import Ourwork13 from "../images/ourwork13.png"
import Ourwork25 from "../images/ourwork25.png"
import Ourwork23 from "../images/ourwork23.png"
import CuadroAngie from "../images/cuadro-negro_Angie.png"
import Cuadro from "../images/cuadro-negro.png"
import Maps from "../images/maps.png"

function Page() {
	return(
			<>
				<div id="barbershop"className="bg-barbershop-color-black flex items-center justify-center py-9 ">
					<img className="animate-fade-in-down max-w-[70%]" src={LogoBarbershop}/>	
				</div>
			
				<div id="servicios" className="text-justify py-32">
					<p className="font-pt-serif font-bold text-4xl text-barbershop-color text-center">Servicios</p>					
					<div class="flex items-center justify-center">
						<img className="items-center max-w-[40%] md:max-w-[20%]" src={Linea1N}/>
					</div>
					<div className="grid md:grid-cols-2 pt-3 md:pt-5 text-center mx-9">
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">1</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Paquete Vip
							</p>
							<p className="font-pt-serif text-black text-1xl">$350
							</p>
							<p className="font-crimson text-black text-2xl">Corte de pelo, barba, ceja, mascarila, exfoliacion, ritual, facial y matizado de barba.
							</p>
						</div>	
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">2</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Corte de Pelo
							</p>
							<p className="font-pt-serif text-black text-1xl">$100
							</p>
							<p className="font-crimson text-black text-2xl">Corte, secado y peinado con productos premium. Incluye un afeitado de cuello con espuma caliente de cortesía con navaja de afeitar.
							</p>
						</div>
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">3</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Barba
							</p>
							<p className="font-pt-serif text-black text-1xl">$60
							</p>
							<p className="font-crimson text-black text-2xl">Corte con navaja y combinación de toallas frías y calientes. Termine con loción para después del afeitado.
							</p>
						</div>
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">4</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Perfilado de Ceja
							</p>
							<p className="font-pt-serif text-black text-1xl">$25
							</p>
							<p className="font-crimson text-black text-2xl">Corte con navaja, manteniendo la armonia del hombre.
							</p>
						</div>
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">5</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Exfoliacion
							</p>
							<p className="font-pt-serif text-black text-1xl">$60
							</p>
							<p className="font-crimson text-black text-2xl">Eliminacion de las impurezas de la piel con productos profesionales en el area.
							</p>
						</div>	
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">6</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Mascarilla
							</p>
							<p className="font-pt-serif text-black text-1xl">$50
							</p>
							<p className="font-crimson text-black text-2xl">Productos de primera para mantener la piel limpia y luminosa.
							</p>
						</div>
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">7</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Matizador de Barba
							</p>
							<p className="font-pt-serif text-black text-1xl">$40
							</p>
							<p className="font-crimson text-black text-2xl">Armoniza la barba con productos adecuados. Luciendo una barba inigualable.
							</p>
						</div>
						<div className="pt-5 mx-10">
							<div className="flex flex-row justify-center">
								<p className="font-caveat text-5xl text-black">#</p>
								<p className="font-caveat text-7xl text-barbershop-color">8</p>
							</div>
							<p className="font-crimson font-bold text-black text-2xl">Ritual
							</p>
							<p className="font-pt-serif text-black text-1xl">$100
							</p>
							<p className="font-crimson text-black text-2xl">Vive una experiencia con la atencion y aromas adecuados.
							</p>
						</div>
					</div>
					<div className="grid md:grid-cols-1 -hue-rotate-10 brightness-125 flex justify-center text-center mx-10 pt-5">
						<div className="flex flex-row justify-center">
							<p className="font-caveat text-5xl text-black">#</p>
							<p className="font-caveat text-7xl text-barbershop-color">9</p>
						</div>
						<p className="font-crimson font-bold text-black text-2xl">Facial
						</p>
						<p className="font-pt-serif text-black text-1xl">$80
						</p>
						<p className="font-crimson text-black text-2xl">Facial.
						</p>
						<p className="pt-28 font-pt-serif italic font-bold text-3xl text-barbershop-color-brown uppercase">Grecas: con diseño de color
						</p>
					</div>
				</div>

				<div id="nosotros" className="bg-barbershop-color-black pt-40 py-32">
					<div class="flex flex-col items-center md:grid md:grid-cols-6 gap-4 mx-14">
					  <div class="md:col-start-1 text-barbershop-color-blue md:pt-24">
					  	<img className="items-center pt-4" src={Ourwork01}/>
					  </div>
					  <div class="md:col-start-2 md:col-end-4 text-barbershop-color-blue md:pt-16">
					  	<img className="items-center pt-4" src={Ourwork20}/>
					  	<img className="items-center pt-4" src={Ourwork00}/>
					  </div>
					  <div class="md:col-start-4 text-barbershop-color-blue">
					  <img className="items-center pt-4" src={Ourwork03}/>
					  <img className="items-center pt-4" src={Ourwork10}/>
					  </div>
					  <div class="md:col-start-5 text-barbershop-color-blue md:pt-16">
					  <img className="items-center pt-4" src={Ourwork13}/>
					  <img className="items-center pt-4" src={Ourwork25}/>
					  </div>
					  <div class="md:col-start-6 text-barbershop-color-blue md:pt-24">
					  <img className="items-center pt-4" src={Ourwork25}/>
					  </div>
					</div>
				</div>
				<div id="equipo" className="barbershop-color-black text-justify py-32">
					<p className="font-pt-serif font-bold text-4xl text-barbershop-color text-center">Equipo</p>
					<div class="flex items-center justify-center">
						<img className="items-center max-w-[40%] md:max-w-[20%]" src={Linea1N}/>
					</div>
					<div className="text-center">
						<div className="font-dm-serif text-lime-100  text-1xl md:text-2xl my-4 mx-9">
							<p >Los barbers a los que confiarías tu cabello y tu vida.
							</p> 
						</div>
						<div class="flex flex-col items-center md:grid md:grid-cols-3 gap-4 md:pt-10 mx-10 group/item">
							<div class="md:col-start-1 flex items-center justify-center relative overflow-hidden bg-no-repeat bg-cover max-w-xs hover:brightness-90 group/edit group-hover/item:visible">
								<img className=" max-w-xs group-hover/edit:scale-105  transition duration-300 ease-in-out" src={CuadroAngie}/>
								<p className="absolute-ix inset-y-80 bottom-0 invisible group-hover/edit:visible font-pt-serif font-bold text-5xl text-barbershop-color-brown">Angie</p>
							</div>
							<div class="md:col-start-2 flex items-center justify-center relative overflow-hidden bg-no-repeat bg-cover max-w-xs hover:brightness-90 group/edit group-hover/item:visible">
								<img className=" max-w-xs group-hover/edit:scale-105  transition duration-300 ease-in-out" src={Cuadro}/>
							</div>
							<div class="md:col-start-3 flex items-center justify-center relative overflow-hidden bg-no-repeat bg-cover max-w-xs hover:brightness-90 group/edit group-hover/item:visible">
								<img className=" max-w-xs group-hover/edit:scale-105  transition duration-300 ease-in-out" src={Cuadro}/>
							</div>
						</div>
					</div>
				</div>
				<div id="contacto" className="bg-barbershop-color-black text-justify pt-32 pb-10">
					<p className="font-pt-serif font-bold text-4xl text-barbershop-color-brown text-center">Contacto</p>
					<div class="flex items-center justify-center">
						<img className="items-center max-w-[40%] md:max-w-[20%]" src={Linea1B}/>
					</div>
					<div className="lg:grid lg:grid-cols-2 pt-3 md:pt-5 text-center ">
						<div className="lg:grid lg:grid-cols-3 gap-5 pt-3 pt-5 mx-3 md:mx-7 border-solid border-2 border-white">
							<div className="font-pt-serif text-lg text-lime-100">
								<p>San Rafael #26 planta alta, colonia Tecamac de Felipe Villanueva centro , Tecamac, Mexico.
								</p>
								<p className="pt-8 pb-4">Tel: 55 7850 0946</p>		
							</div>
							<div className="col-start-2 col-span-2 font-crimson font-bold text-lime-100 text-lg uppercase">
								<p>lunes: 11am - 8pm</p>
								<p>martes: 11am - 8pm</p>
								<p>miercoles: 11am - 8pm</p>
								<p>jueves: 11am - 8pm</p>
								<p>viernes 11am - 8pm</p>
								<p>sabado: 11am - 8pm</p>
								<p>domingo: 11am - 8pm</p>
							</div>
						</div>	
						<div className="py-9 md:mx-10">
							<div className="flex flex-row justify-center">
						    	<img className="max-w-[30%]" src={Maps}/>
							</div>
						</div>
						<div class="flex justify-start pt-4 pl-8">

							<a href="https://www.facebook.com/profile.php?id=100036470332374">
							 	<svg
					            className="flex w-12 h-12 py-2 pr-3 fill-barbershop-color hover:fill-barbershop-color-blue"
					            xmlns="http://www.w3.org/2000/svg"
					            viewBox="0 0 50 50"
					          	>
						            <path
						            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
						            />
				          		</svg>
							</a>
							<a href="">
								<svg
						            className="flex w-12 h-12 py-2 pr-3 fill-barbershop-color hover:fill-barbershop-color-blue"
						            xmlns="http://www.w3.org/2000/svg"
						            viewBox="0 0 50 50"
						          >
						            <path
						            d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
						            />
				          		</svg>
							</a>
							<a href="">
								<svg
						            className="flex w-12 h-12 py-2 pr-3 fill-barbershop-color hover:fill-barbershop-color-blue"
						            xmlns="http://www.w3.org/2000/svg"
						            viewBox="0 0 50 50"
						          >
						            <path
						            d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
						            />
					          	</svg>
							</a>
						</div>
					</div>	
				</div>
			</>
		)
}

export default Page