// CREATE
let array = JSON.parse(localStorage.getItem("array")) ?
  JSON.parse(localStorage.getItem("array")) :
  [{
      img: '../images/H1.jpg',
      button: 'For rent',
      title: "new apartment view",
      month: '$11,000',
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
      month: '$12,000',
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
      month: '$1,000',
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
      month: '$5,000',
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
      month: '$6,000',
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
      month: '$8,000',
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
      month: '$19,000',
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
      month: '$5,000',
      bed: 6,
      shower: 1,
      car: 1,
      Sqaure: '1600 SQ FT'
    },
    //object 9
    {
      img: '../images/H9.jpg',
      button: 'For rent',
      title: "modern modern apartment",
      month: '$7,000',
      bed: 5,
      shower: 0,
      car: 1,
      Sqaure: '1200 SQ FT'
    },
    //object 10
    {
      img: '../images/H10.jpg',
      button: 'For rent',
      title: "comfortable modern apartment",
      month: '$50,000',
      bed: 5,
      shower: 1,
      car: 1,
      Sqaure: '4300 SQ FT'
    },
  ];
let edit = document.getElementById("load");

function LoadArray() {
  console.log('Im being called')
  edit.innerHTML = '';
  array.forEach((item, index) => {
    edit.innerHTML += `
    <div class="row">

                <div class="col-sm-6">
                <p> 
                ${item.id}
                </p>
                </div>
                <div class="col-sm-6">
                <p> 
                ${item.title}
                </p>
                </div>
                <div class="col-sm-6">
                <p> 
                IMG
                </p>
                </div>
                <div class="col-sm-6">
                <p> 
                SHOWERS
                </p>
                </div>
                <div class="col-sm-6">
                <p> 
                CARS
                </p>
                </div>
                <div class="col-sm-6">
                <p> 
                SQUARES
                </p>
                </div>
                <div class="col-sm-6">
                <p> 
                BEDS
                </p>
                </div>
                PRICE
              </div> 
    `;
  });
}
LoadArray();


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