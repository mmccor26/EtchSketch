

function createDivGrid(v){ 
    var total = 1;
    var e = document.getElementById('container');
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      //row.style.height = e.style.height/v;
      for(var x = 1; x <= v; x++){ 
        
          var cell = document.createElement("div");
           
          cell.className = "gridsquare"; 
          cell.innerText = total;
          row.appendChild(cell); 
        total++;   
  } 
    e.appendChild(row); 
        
}
} 
   
var e = document.getElementById('body');
var clearBtn = document.createElement("button");
var container = document.getElementById('container');


clearBtn.innerHTML = "Clear";
clearBtn.addEventListener('click', (e)=>{
  clearGrid(gridElements);
});
e.append(clearBtn);

createDivGrid(32);
const gridElements = document.querySelectorAll(".gridsquare");

gridElements.forEach(gridElement => {
  gridElement.addEventListener('mouseover',(e) =>{
    hovercolor(gridElement);
  });
  
});

function clearGrid(gridElements){
  gridElements.forEach(gridElement =>{
    gridElement.style.backgroundColor = "white";
  });
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  dimensions = prompt("Enter new grid dimensions");

  createDivGrid(dimensions);
}

function hovercolor(element){

  element.style.backgroundColor = "black";
}

