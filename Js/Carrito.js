const container	= document.querySelector(".items-container")
const fragment = document.createDocumentFragment();
const totalContainer = document.querySelector(".total-container");
const item = document.querySelector(".item")

objetos = [
	{
		img : "Image/Carrito1.png",
		name : "Sara Lee Premium Ham Lunch",
		price : 7.96
	} ,{
		img : "Image/Carrito2.png",
		name :"Great Value Finely Cheddar Cheese pito",
		price : 2.77
	},
	{
		img : "Image/Carrito1.png",
		name : "Sara Lee Premium Ham Lunch",
		price : 7.96
	} ,{
		img : "Image/Carrito2.png",
		name :"Great Value Finely Cheddar Cheese pito",
		price : 2.77
	},
	{
		img : "Image/Carrito1.png",
		name : "Sara Lee Premium Ham Lunch",
		price : 7.96
	} ,{
		img : "Image/Carrito2.png",
		name :"Great Value Finely Cheddar Cheese pito",
		price : 2.77
	}
	,{
		img : "Image/Carrito2.png",
		name :"Great Value Finely Cheddar Cheese pito",
		price : 2.77
	},
	{
		img : "Image/Carrito1.png",
		name : "Sara Lee Premium Ham Lunch",
		price : 7.96
	} ,{
		img : "Image/Carrito2.png",
		name :"Great Value Finely Cheddar Cheese pito",
		price : 2.77
	},
	{
		img : "Image/Carrito1.png",
		name : "Sara Lee Premium Ham Lunch",
		price : 7.96
	} ,{
		img : "Image/Carrito2.png",
		name :"Great Value Finely Cheddar Cheese pito",
		price : 2.77
	}
]

const totalContainerHtml = (html)=>{
	const gridContainer = document.createElement("div");
	gridContainer.classList.add("total-grid-container");
	for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <= 2; k++) {
			const hik = document.createElement("h2");
			hik.setAttribute("id",`h2-${i}`);
			hik.classList.add(`price-${i}-${k}`,`h${i}${k}`)
			hik.textContent=""
			gridContainer.appendChild(hik);
		}
	}
	html.appendChild(gridContainer)
	;
	gridContainer.childNodes[0].textContent="Subtotal";
	gridContainer.childNodes[2].textContent="Iva";
	gridContainer.childNodes[4].textContent="Total";
	
}

totalContainerHtml(totalContainer);
let subtotalP = totalContainer.childNodes[3].childNodes[1]; //.textContent="Pito?"
let ivaP = totalContainer.childNodes[3].childNodes[3];
let totalP= totalContainer.childNodes[3].childNodes[5];
let sumP=0;
let ivaNumber=0;




for (let i = 0; i < objetos.length; i++) {
	
	const itemHtml = document.createElement("div");
		itemHtml.classList.add("item",`el-${i}`);
	const imgHtml = document.createElement("IMG");
		imgHtml.setAttribute("src",objetos[i].img)
	const descHtml = document.createElement("DIV");
		descHtml.classList.add("description-container");
	const itemIconHtml = document.createElement("DIV");
		itemIconHtml.classList.add("item-icon");
	const h2I = document.createElement("H2");
		h2I.textContent=`${objetos[i].name}`;
		
	const itemminus = document.createElement("DIV");
		itemIconHtml.classList.add("item-icon");
	const iconHtml = document.createElement("I");
		iconHtml.classList.add("fa-regular","fa-circle-xmark","cart");
	
	const itemplus= document.createElement("DIV");
		itemplus.classList.add("item-icon","cant")
	const h2I2 = document.createElement("H2");
		h2I2.textContent=`Cantidad: 1`
	const minus = document.createElement("I");
		minus.classList.add("fa-solid","fa-circle-minus","cart");
	const plus = document.createElement("I");
		plus.classList.add("fa-solid","fa-circle-plus","cart");
	const itemprice = document.createElement("DIV");
		itemprice.classList.add("item-icon","price");
	const h2I3 = document.createElement("H2");
		h2I3.textContent=`$${objetos[i].price}`

	itemHtml.appendChild(imgHtml);
	itemHtml.appendChild(descHtml);
	descHtml.appendChild(itemIconHtml);
	itemIconHtml.appendChild(h2I);
	descHtml.appendChild(itemminus);
	itemminus.appendChild(iconHtml)
	descHtml.appendChild(itemplus);
	itemplus.appendChild(h2I2);
	itemplus.appendChild(minus);
	itemplus.appendChild(plus);
	descHtml.appendChild(itemprice);
	itemprice.appendChild(h2I3);

	fragment.appendChild(itemHtml)
	container.appendChild(fragment)

	
	
	
	


	iconHtml.addEventListener("click",()=> {
		
		console.log("Sum"+sumP)
		let value = itemHtml.lastElementChild.lastElementChild.children[0].innerHTML
		let match = value.match(/([\d\.]+)/);
		
		//Checkout Sumatoria
		sumP-=match[0]
		
		subtotalP.textContent=sumP.toFixed(2)
		ivaNumber = sumP*0.12
		ivaP.textContent = ivaNumber.toFixed(2)
		totalP.textContent = (sumP+ivaNumber).toFixed(2)
		container.removeChild(itemHtml)

	})

	plus.addEventListener("click",()=>{
		const childCantNew = document.createElement("H2");
		const childPriceNew = document.createElement("H2");
		let value = itemplus.firstElementChild.innerHTML;
		let match = value.match(/([\d\.]+)/);//Regular expresion para escojer solo los numeros 
		childCantNew.innerHTML = "Cantidad: "+(parseInt(match[0])+1)
		itemplus.replaceChild(childCantNew,itemplus.firstElementChild);//Remplazar la cantidad 

		//Obtener la cantidad actualizada
		value= itemplus.firstElementChild.innerHTML;
		match = value.match(/([\d\.]+)/);
		const value2 = itemprice.firstElementChild.innerHTML;
		//Remplazar el precio
		let priceN=objetos[i].price*parseInt(match[0])
		childPriceNew.innerHTML = "$"+(priceN).toFixed(2);
		itemprice.replaceChild(childPriceNew,itemprice.firstElementChild);

		//Checkout Sumatoria
		sumP+=objetos[i].price
		subtotalP.textContent=sumP.toFixed(2)
		ivaNumber = sumP*0.12
		ivaP.textContent = ivaNumber.toFixed(2)
		totalP.textContent = (sumP+ivaNumber).toFixed(2)
	})

	minus.addEventListener("click",()=>{
		const childCantNew = document.createElement("H2");
		const childPriceNew = document.createElement("H2");
		let value=itemplus.firstElementChild.innerHTML
		let match=value.match(/([\d\.]+)/);

		let matchInt = parseInt(match[0]);
		let value2 = itemprice.firstElementChild.innerHTML;
		let match2 = value2.match(/([\d\.]+)/);
		let matchFloat = parseFloat(match2[0]);
		// price = getPrice(matchFloat)
		if( matchInt!=1){ // cuando el valor sea 1 no se puede restar
			childCantNew.innerHTML = "Cantidad: "+(matchInt-1)
			itemplus.replaceChild(childCantNew,itemplus.firstElementChild)
			//Modificar el precio
			childPriceNew.innerHTML = "$"+(matchFloat-objetos[i].price).toFixed(2)
			itemprice.replaceChild(childPriceNew,itemprice.firstElementChild);

			//Checkout Sumatoria
			sumP-=objetos[i].price
			subtotalP.textContent=sumP.toFixed(2)
			ivaNumber = sumP*0.12
			ivaP.textContent = ivaNumber.toFixed(2)
			totalP.textContent = (sumP+ivaNumber).toFixed(2)
		}
	})

	//Total-Subtotal
	sumP+=objetos[i].price
	subtotalP.textContent=sumP.toFixed(2)
	ivaNumber = sumP*0.12
	ivaP.textContent = ivaNumber.toFixed(2)
	totalP.textContent = (sumP+ivaNumber).toFixed(2)

}


