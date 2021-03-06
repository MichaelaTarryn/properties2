let array = JSON.parse(localStorage.getItem("array")) ?
  JSON.parse(localStorage.getItem("array")) :
  [{
      img: '../images/H1.jpg',
      button: 'For rent',
      title: "new apartment view",
      month: 3000,
      bed: 2,
      shower: 3,
      car: 1,
      Sqaure: '4300 SQ FT'

    },
    //object 2
    {
      img: '../images/H2.jpg',
      button: 'For rent',
      title: "light modern apartment",
      month: 1000,
      bed: 10,
      shower: 6,
      car: 2,
      Sqaure: '2300 SQ FT'
    },
    //object3
    {
      img: '../images/H3.jpg',
      button: 'For rent',
      title: "relaxing apartment",
      month: 1000,
      bed: 4,
      shower: 1,
      car: 1,
      Sqaure: '7000 SQ FT'
    },
    //object 4
    {
      img: '../images/H4.jpg',
      button: 'For rent',
      title: "complex",
      month: 5000,
      bed: 7,
      shower: 2,
      car: 1,
      Sqaure: '1000 SQ FT'
    },
    //object 5
    {
      img: '../images/H5.jpg',
      button: 'For rent',
      title: "comfortable modern apartment",
      month: 6000,
      bed: 9,
      shower: 3,
      car: 1,
      Sqaure: '4300 SQ FT'
    },
    //object 6
    {
      img: '../images/H6.jpg',
      button: 'For rent',
      title: "light modern apartment",
      month: 8000,
      bed: 6,
      shower: 2,
      car: 1,
      Sqaure: '8300 SQ FT'
    },
    //object 7
    {
      img: '../images/H7.jpg',
      button: 'For rent',
      title: "light modern apartment",
      month: 9000,
      bed: 7,
      shower: 1,
      car: 1,
      Sqaure: '5300 SQ FT'
    },
    //object 8
    {
      img: '../images/H8.jpg',
      button: 'For rent',
      title: "relaxing modern apartment",
      month: 5000,
      bed: 6,
      shower: 1,
      car: 1,
      Sqaure: '1600 SQ FT'
    },
    //object 9
    {
      img: '../images/H9.jpg',
      button: 'for rent',
      title: "modern modern apartment",
      month: 7000,
      bed: 5,
      shower: 0,
      car: 1,
      Sqaure: '1200 SQ FT'
    },
    //object 10
    {
      img: '../images/H10.jpg',
      button: 'for rent',
      title: "comfortable modern apartment",
      month: 5000,
      bed: 5,
      shower: 1,
      car: 1,
      Sqaure: '4300 SQ FT'
    },
  ];

//READ
function readProducts(array) {
  let properties = document.getElementById('Properties');
  array.forEach((item, index) => {
    properties.innerHTML += `

    <div id="card" class="card" style="width: 18rem;">
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
`;
  });
}
readProducts(array);

function loadSearch(n) {
  document.getElementById('new').innerHTML = ''
  n.forEach((item, index) => {
    document.getElementById('new').innerHTML += `
  <div id="card2" class="card" style="width: 18rem;">
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
        <button type="button" class="btn bg-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </button></h5>
    <div class="myDIV"><i class="fa-solid fa-bed"> ${item.bed}</i> <i class="fa-solid fa-shower"></i>
     ${item.shower}  <i class="fa-solid fa-car"></i> ${item.car}  <i class="fa-solid fa-ruler-triangle"></i> ${item.Sqaure}
     </div>
     
</div>
  `

  })
}
document.querySelector('#new').style.display = 'none';

// SORT BY CATEGORY bed
function sortCategory(bed) {
  // let bed = document.querySelector("#sortCategory").value;
  if (bed.target.value === "All") {
    document.querySelector('#new').style.display = 'none';
     readProducts(array);
  }else {
    document.querySelector('#new').style.display = 'flex';
  }
  let foundarray = array.filter((x) => {
    return x.bed == bed.target.value ;
  });

  console.table(foundarray);
  if(foundarray.length){
    loadSearch(foundarray);

  } else {
    document.getElementById('new').innerHTML = "No matches"
  }
}

document.getElementById('sortCategory').addEventListener('change', sortCategory)


function sortPrice1(y) {
  // let bed = document.querySelector("#sortCategory").value;

  if (y.target.value === "All") {
    return readProducts(array);
  }
  let foundarray1 = array.filter((x) => {
    return x.month <= y.target.value;
  });

  console.table(foundarray1);
  loadSearch(foundarray1);
}

document.getElementById('sortPrice1').addEventListener('change', sortPrice1)


function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedarray = array.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedarray.reverse();
  console.log(sortedarray);
  loadSearch(array);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedarray = array.sort((a, b) => a.month - b.month);
  
  console.table(sortedarray);
  
  if (direction == "descending") {
    sortedarray.reverse();
    return loadSearch(sortedarray);
  }
  return loadSearch(sortedarray);
}

// // CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let bed = document.querySelector("#addBed").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;
  let button = document.querySelector("#addButton").value;
  let shower = document.querySelector("#addShower").value;
  let parking = document.querySelector("#addParking").value;
  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    array.push({
      title,
      bed,
      price,
      img,
      button,
      shower,
      parking,

    });
    localStorage.setItem("array", JSON.stringify(array));
    readProducts(array);
  } catch (err) {
    alert(err);
  }
}


console.log(array);




let edit = document.getElementById("load")

function LoadArray() {
  edit.innerHTML = '';
  array.forEach((item, index) => {
    edit.innerHTML += `
    <div class="row">

                <div class="col-sm">
                </div>
                <div class="col-sm">
                  ${item.title}
                </div>
                <div class="col-sm">
                  IMG
                </div>
                <div class="col-sm">
                  SHOWERS
                </div>
                <div class="col-sm">
                  CARS
                </div>
                <div class="col-sm">
                  SQUARES
                </div>
                <div class="col-sm">
                  BEDS
                </div>
                PRICE
              </div> 
    `
  })

}