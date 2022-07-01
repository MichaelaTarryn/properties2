// CREATE
let array = JSON.parse(localStorage.getItem("array")) ?
  JSON.parse(localStorage.getItem("array")) :
  [{
      img: '../images/H1.jpg',
      button: 'For rent',
      title: "new apartment view",
      month: 11000,
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
      month: 12000,
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
      month: 19000,
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
      button: 'For rent',
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
      button: 'For rent',
      title: "comfortable modern apartment",
      month: 50000,
      bed: 5,
      shower: 1,
      car: 1,
      Sqaure:'4300 SQ FT'
    },
  ];
let edit = document.getElementById("tbody");

function LoadArray() {
  console.log('Im being called')
  edit.innerHTML = '';
  array.forEach((item, index) => {
    edit.innerHTML += `
    <div class="tbody">

    <tr>
    <th scope="row">${item.img}</th>
    <td>${item.title}</td>
    <td>${item.month}</td>
    <td>${item.bed}</td>
    <td>${item.shower}</td>
    <td>${item.car}</td>
    <td>${item.Sqaure}</td>

    <!-- icons -->
    <td>
    <!-- Update -->
    <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editProduct${index}"><i class="fa-solid fa-pen-to-square"></i></a>
    
    <!-- Delete -->
    <a type="button" class="btn" onclick="deleteProduct(${index})" ><i class="fa-solid fa-trash-can"></i></button>
    </td>
    </tr>

    <div
    class="modal fade"
    id="editProduct${index}"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Edit ${item.title}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="editTitle${index}" class="form-label">Title</label>
            <input
              class="form-control"
              type="text"
              name="editTitle${index}"
              id="editTitle${index}"
              value="${item.title}"
            />
          </div>
          <div class="mb-3">
            <label for="editbed${index}" class="form-label">Bed</label>
            <select
              class="form-select"
              name="editbed${index}"
              id="editBed${index}"
              value="${item.bed}"
            >
            <option value="1"${ item.bed == 1 ? "selected" : "" }>1</option>
            <option value="2"${ item.bed == 2 ? "selected" : "" }>2</option>
            <option value="3"${ item.bed == 3 ? "selected" : "" }>3</option>
            <option value="4"${ item.bed == 4 ? "selected" : "" }>4</option>
            <option value="5"${ item.bed == 5 ? "selected" : "" }>5</option>
            <option value="6"${ item.bed == 6 ? "selected" : "" }>6</option>
            <option value="7"${ item.bed== 7 ? "selected" : "" }>7</option>
            <option value="8"${ item.bed == 8? "selected" : "" }>8</option>
            <option value="9"${ item.bed == 9? "selected" : "" }>9</option>
            <option value="10"${ item.bed == 10 ? "selected" : "" }>10</option>

            </select>
          </div>
          <div class="mb-3">
            <label for="editshower${index}" class="form-label">shower</label>
            <select
              class="form-select"
              name="editshower${index}"
              id="editshower${index}"
              value="${item.shower}"
            >
            <option value="1" ${ item.shower == 1 ? "selected" : "" }>1</option>
            <option value="2" ${ item.shower == 2 ? "selected" : "" }>2</option>
            <option value="3" ${ item.shower == 3 ? "selected" : "" }>3</option>
            <option value="4" ${ item.shower == 4 ? "selected" : "" }>4</option>
            <option value="4" ${ item.shower == 5 ? "selected" : "" }>5</option>
            <option value="4" ${ item.shower == 6 ? "selected" : "" }>6</option>
            <option value="4" ${ item.shower == 7 ? "selected" : "" }>7</option>
            <option value="4" ${ item.shower == 8 ? "selected" : "" }>8</option>
            <option value="4" ${ item.shower == 9 ? "selected" : "" }>9</option>
            <option value="4" ${ item.shower == 10 ? "selected" : "" }>10</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="editsparking${index}" class="form-label">parking</label>
            <select
              class="form-select"
              name="editparking${index}"
              id="editparking${index}"
              value="${item.car}"
            >
            <option value="1" ${item.car==1?"selected":""}>1</option>
            <option value="2"${item.car==2?"selected":""}>2</option>
            <option value="3"${item.car==3?"selected":""}>3</option>
            <option value="4"${item.car==4?"selected":""}>4</option>
            <option value="5"${item.car==5?"selected":""}>5</option>
            <option value="6"${item.car==6?"selected":""}>6</option>
            <option value="7"${item.car==7?"selected":""}>7</option>
            <option value="8"${item.car==8?"selected":""}>8</option>
            <option value="9"${item.car==9?"selected":""}>9</option>
            <option value="10"${item.car==10?"selected":""}>10</option>
            </select>
          </div>
          <div class="mb-3">
          <label for="editsbutton${index}" class="form-label">For rent</label>
          <select
            class="form-select"
            name="editrent${index}"
            id="editrent${index}"
            value="${item.button}"
          >
          <option value="for rent">ren for</option>
          </select>
        </div>
          <div class="mb-3">
            <label for="editPrice${index}" class="form-label">Monthly Rent</label>
            <input
              class="form-control"
              type="text"
              name="editmonth${index}"
              id="editmonth${index}"
              value="${item.month}"
            />
          </div>
          <div class="mb-3">
            <label for="editImg${index}" class="form-label">Image URL</label>
            <input
              class="form-control"
              type="text"
              name="editImg${index}"
              id="editImg${index}"
              value="${item.img}"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            onclick="updateProduct(${index})"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
  });
}
LoadArray();

//create
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let bed = document.querySelector("#addBed").value;
  let month = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;
  let button = document.querySelector("#addButton").value;
  let shower = document.querySelector("#addShower").value;
  let parking = document.querySelector("#addParking").value;
  try {
    if (!title || !month || !img) throw new Error("Please fill in all fields");
    array.push({
      title,
      bed,
      month,
      img,
      button,
      shower,
      parking,

    });
    localStorage.setItem("array", JSON.stringify(array));
    LoadArray(array);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(index) {
    let confirmation = confirm(
      "Are you sure you want to delete the selected product?"
    );
  console.log("deleted please")
    if (confirmation) {
      array.splice(index, 1);
    }
    localStorage.setItem("array", JSON.stringify(array));
    LoadArray(array);
  }

  // UPDATE
function updateProduct(id) {
  let title = document.querySelector(`#editTitle${id}`).value;
  let bed = document.querySelector(`#editBed${id}`).value;
  let month = document.querySelector(`#editmonth${id}`).value;
  let img = document.querySelector(`#editImg${id}`).value;
  let button = document.querySelector(`#editrent${id}`).value;
  let shower = document.querySelector(`#editshower${id}`).value;
  let parking = document.querySelector(`#editparking${id}`).value;

  try {
    if (!title || !month || !img) throw new Error("Please fill in all fields");
    array[id] = {
      title,
      bed,
      month,
      img,
      shower,
      parking,
      button,
    };
    localStorage.setItem("array", JSON.stringify(array));
    // readProducts(array);
    LoadArray(array);
  } catch (err) {
    alert(err);
  }
}


function sortName() {
  let direction = document.querySelector("#sortName1").value;

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
  LoadArray(array);
}

function sortPrice() {
  let direction = document.querySelector("#sortPrice1").value;

  let sortedarray = array.sort((a, b) => a.month - b.month);
  
  console.table(sortedarray);
  
  if (direction == "descending") {
    sortedarray.reverse();
    return LoadArray(sortedarray);
  }
  return LoadArray(sortedarray);
}