let array = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [{
    img:'../images/H1.jpg',
    button:'For rent',
    title:"new apartment view",
    month:'$11,000',
    bed:2,
    shower:3,
    car:1,
    Sqaure:'4300 SQ FT'

},
//object 2
{
  img:'../images/H2.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$12,000',
  bed:10,
  shower:6,
  car:2,
  Sqaure:'2300 SQ FT'
},
//object3
{
  img:'../images/H3.jpg',
  button:'For rent',
  title:"relaxing apartment",
  month:'$1,000',
  bed:4,
  shower:1,
  car:1,
  Sqaure:'7000 SQ FT'
},
//object 4
{
  img:'../images/H4.jpg',
  button:'For rent',
  title:"complex",
  month:'$5,000',
  bed:7,
  shower:2,
  car:1,
  Sqaure:'1000 SQ FT'
},
//object 5
{
  img:'../images/H5.jpg',
  button:'For rent',
  title:"comfortable modern apartment",
  month:'$6,000',
  bed:9,
  shower:3,
  car:1,
  Sqaure:'4300 SQ FT'
},
//object 6
{
  img:'../images/H6.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$8,000',
  bed:6,
  shower:2,
  car:1,
  Sqaure:'8300 SQ FT'
},
//object 7
{
  img:'../images/H7.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$19,000',
  bed:7,
  shower:1,
  car:1,
  Sqaure:'5300 SQ FT'
},
//object 8
{
  img:'../images/H8.jpg',
  button:'For rent',
  title:"relaxing modern apartment",
  month:'$5,000',
  bed:6,
  shower:1,
  car:1,
  Sqaure:'1600 SQ FT'
},
//object 9
{
  img:'../images/H9.jpg',
  button:'For rent',
  title:"modern modern apartment",
  month:'$7,000',
  bed:5,
  shower:0,
  car:1,
  Sqaure:'1200 SQ FT'
},
//object 10
{
  img:'../images/H10.jpg',
  button:'For rent',
  title:"comfortable modern apartment",
  month:'$50,000',
  bed:5,
  shower:1,
  car:1,
  Sqaure:'4300 SQ FT'
},
];

// READ
let properties = document.getElementById('Properties');
array.forEach((item, index) => {
    properties.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
${item.button}
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> <p style="color:black;">Welcome to </p>${item.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="height:30rem">
        <img src="${item.img}" class="card-img-top" alt="...">
        <h4 style="color:black;">Price:</h4>${item.month}
       <h4 style="color:black;"><i class="fa-solid fa-bed"></i></h4>${item.bed}<h4 style="color:black;"><i class="fa-solid fa-shower"></i></h4>
        ${item.shower} <h4 style="color:black;"><i class="fa-solid fa-car"></i> </h4> ${item.car} <h4 style="color:black;"> <i class="fa-solid fa-ruler-triangle"></i></h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </button></h5>
    <div class="myDIV"><i class="fa-solid fa-bed"> ${item.bed}</i> <i class="fa-solid fa-shower"></i>
     ${item.shower}  <i class="fa-solid fa-car"></i> ${item.car}  <i class="fa-solid fa-ruler-triangle"></i> ${item.Sqaure}
     </div>
     
</div>
`})
;


// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}


function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}




