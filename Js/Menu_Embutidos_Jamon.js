//Conexiones 
//PIZZAS
// const options = {
//   method: 'GET',
//   url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
//   headers: {
//     'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
//     'X-RapidAPI-Key': '200bb0225amshf3909df0c66b06dp1d290cjsn3671b32e0037'
//   }
// };

// // BURGERS
// const options3 = {
//   method: 'GET',
//   url: 'https://burgers1.p.rapidapi.com/burgers',
//   headers: {
//     'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
//     'X-RapidAPI-Key': '601a8b4f96msh4e30b25b33ef0b4p156756jsnd075b75a7b71'
//   }
// };

// axios.request(options3).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
objectCategory=[{
	cat:"JAMON"
},{
	cat:"SALCHICHAS"
},{
	cat:"SALAMI"
},{
	cat:"CHORIZO"
},{
	cat:"MOSTRAR TODO"
}
]
object=[{
	Img: "Image/Embutidos/Jamon/1.png",
	Name:"Sara Lee Premium Ham Lunch",
	Price: 7.96
},{
	Img: "Image/Embutidos/Jamon/2.png",
	Name:"Hillshire Farm Honey Ham",
	Price: 6.50
},{
	Img: "Image/Embutidos/Jamon/3.png",
	Name:"Land O’Frost Premium Ham",
	Price: 4.92
},{
	Img: "Image/Embutidos/Jamon/4.png",
	Name:"Sam’s Choice Spiral Ham",
	Price: 22.66
},{
	Img: "Image/Embutidos/Jamon/5.png",
	Name:"Sam’s Choice Spiral Ham",
	Price: 18.48
},{
	Img: "Image/Embutidos/Jamon/6.png",
	Name:"Farmaland Fully Cooked Ham",
	Price: 3.82
},{
	Img: "Image/Embutidos/Jamon/7.png",
	Name:"Prima Della Black Forest Ham",
	Price: 7.97
},{
	Img: "Image/Embutidos/Jamon/8.png",
	Name:"Great Value 97% Far-Free Cooked Ham",
	Price: 6.82
}]

const codeHtml = (imgLink,name,price) =>{
	let html=`
 			<div class="item el-1">
 				<img src="${imgLink}">
 				<h2 id="description">${name}</h2>
 				<h2 id="price">$${price}</h2>
 			</div>
	`;
	return html;
}
const codeCategoryHtml = (i,cat)=>{
	let html=`
	<div class="container-options">
 			<div class="option c${i}">
 				<h2>${cat}</h2>
 			</div>
 			
 	</div>`
 	return html;
}


// const getData = ()=>{
// 	let Html="";
// 	axios(options)
// 	.then((res)=> {
// 		// let img = res.data[0].price
// 		// let img2 = res.data[0].name
// 		for (var i = 0; i < res.data.length; i++) {
// 			Html+= codeHtml(res.data[i].img,res.data[i].name,res.data[i].price)
// 		}
// 		console.log(res)
// 		// console.log(img)
// 		// console.log(img2)
// 		containerItems.innerHTML=Html;
// 	})
// }

const getData = ()=>{
	let html = "";
	let html2=""
	for (var i = 0; i < object.length; i++) {
		html+=codeHtml(object[i].Img,object[i].Name,object[i].Price)
	}
	for (var i = 0; i < objectCategory.length; i++) {
		html2+=codeCategoryHtml(i,objectCategory[i].cat)
	}
	containerCat.innerHTML=html2
	containerItems.innerHTML=html
}





const container = document.querySelector(".container");
const containerItems = document.createElement("DIV");
containerItems.classList.add("container-items")
const containerCat = document.createElement("div");
containerCat.classList.add("container-options");

container.appendChild(containerCat);
container.appendChild(containerItems);




getData();























//DESSERTS
// const options2 = {
//   method: 'GET',
//   url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
//   headers: {
//     'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
//     'X-RapidAPI-Key': '601a8b4f96msh4e30b25b33ef0b4p156756jsnd075b75a7b71'
//   }
// };

// axios(options2).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });




// Restaurant
// const options4 = {
//   method: 'GET',
//   url: 'https://mealme.p.rapidapi.com/restaurants/search/store',
//   params: {
//     latitude: '37.7786357',
//     longitude: '-122.3918135',
//     open: 'true',
//     budget: '20',
//     sort: 'relevance',
//     user_street_name: 'King Street',
//     user_street_num: '188',
//     user_city: 'San Francisco',
//     user_state: 'CA',
//     user_country: 'US',
//     user_zipcode: '94107',
//     default_quote: 'false',
//     maximum_miles: '3',
//     pickup: 'false'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'mealme.p.rapidapi.com',
//     'X-RapidAPI-Key': '601a8b4f96msh4e30b25b33ef0b4p156756jsnd075b75a7b71'
//   }
// };

// axios.request(options4).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

