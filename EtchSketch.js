

 function createDivGrid(v){ 
    var total = 1;
    var e = document.getElementById('container')
    for(var i = 0; i < v/2; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= 2*v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.innerText = total;
          row.appendChild(cell); 
          total++;
      } 
      e.appendChild(row); 
      
      
    } 
   

  }
createDivGrid(16);