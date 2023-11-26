
var firebaseConfig = {
  apiKey: "AIzaSyC6iNfDkBZIou8yfhciNVq1qdi45NE9xvM",
  authDomain: "todo-project-4d35e.firebaseapp.com",
  databaseURL: "https://todo-project-4d35e-default-rtdb.firebaseio.com",
  projectId: "todo-project-4d35e",
  storageBucket: "todo-project-4d35e.appspot.com",
  messagingSenderId: "120129689734",
  appId: "1:120129689734:web:dd1e518e91e3ebeb0dd907"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

function addtodo(){
  var name = document.getElementById("inputField");


  var detailsObj = {
    name: name.value,
  }
  var key = Math.random() * 325136136;

  firebase
    .database()
    .ref("faraz/users/" + Math.round(key))
    .set(detailsObj);
}



function addtodo() {
    var input = document.getElementById("inputField");
    //   console.log(input.value);
  
    // ***************************Create list*********************************
  
    var liElement = document.createElement("li");
  
    var liText = document.createTextNode(input.value);
  
    liElement.appendChild(liText);
  
    // ***********************Delete button**********************************
  
    var delbtn = document.createElement("button");
  
    var delbtnText = document.createTextNode("Delete");
  
    delbtn.appendChild(delbtnText);
  
    delbtn.setAttribute("onclick", "deleteItem(this)");
  
    liElement.appendChild(delbtn);
  
    // ***********************Edit button**********************************
  
    var editbtn = document.createElement("button");
  
    var editbtnText = document.createTextNode("Edit");
  
    editbtn.appendChild(editbtnText);
  
    liElement.appendChild(editbtn);
  
    editbtn.setAttribute("onclick", "editItem(this)");
  
    var list = document.getElementById("list");
  
    list.appendChild(liElement);
  
    console.log(liElement);
  
    input.value = "";
  }
  
  function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
  }
  
  function deleteItem(x) {
    console.log(x.parentNode.remove());
  }
  
  function editItem(e) {
    var input = prompt("Enter updated value...");
  
    e.parentNode.firstChild.nodeValue = input;
  }