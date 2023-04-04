 // get selected row
 // display selected row data in text input
 const firebaseConfig = {
    apiKey: "AIzaSyCesjOlnPPYe0cnIfU68ZQe0Ac1iHfFoGM",
    authDomain: "xcellence-fe739.firebaseapp.com",
    databaseURL: "https://xcellence-fe739-default-rtdb.firebaseio.com",
    projectId: "xcellence-fe739",
    storageBucket: "xcellence-fe739.appspot.com",
    messagingSenderId: "1028944422105",
    appId: "1:1028944422105:web:042979c50ebe8bf7d00ac8"
  };
      
 var table = document.getElementById("table"),rIndex;
 var table = document.getElementsByTagName('table')[0];
 for(var i = 1; i < table.rows.length; i++){
     table.rows[i].onclick = function(){
         rIndex = this.rowIndex;
         console.log(rIndex);
 
         document.getElementById("fname").value = this.cells[0].innerHTML;
         document.getElementById("lname").value = this.cells[1].innerHTML;
         document.getElementById("country").value = this.cells[2].innerHTML;
         document.getElementById("mNumber").value = this.cells[3].innerHTML;
         document.getElementById("sold").value = this.cells[4].innerHTML;
     };
 }
             
             
 // edit the row
 function editRow(){
     table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
     table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
     table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
     table.rows[rIndex].cells[4].innerHTML = document.getElementById("mNumber").value;
     table.rows[rIndex].cells[5].innerHTML = document.getElementById("soldout").value;
 }
 
 // Data Update Table Here
 function editTableDisplay(){
     document.querySelector('.editTable').setAttribute('style', 'display: block;')
 }
 

 function addRow()
            {
                // get input values
                var date = document.getElementById('date').value;
                 var nom = document.getElementById('nom').value;
                  var pays = document.getElementById('pays').value;
                  var lieu = document.getElementById('lieu').value;
                  var soldout = document.getElementById('soldout').value;

                  var table = document.getElementsByTagName('table')[0];
            
            
                  var newRow = table.insertRow(table.rows.length/2+1);
            
                  var cel1 = newRow.insertCell(0);
                  var cel2 = newRow.insertCell(1);
                  var cel3 = newRow.insertCell(2);
                  var cel4 = newRow.insertCell(3);
                  var cel5 = newRow.insertCell(4);
                  
                  cel1.innerHTML = date;
                  cel2.innerHTML = nom;
                  cel3.innerHTML = pays;
                  cel4.innerHTML = lieu;
                  cel5.innerHTML = soldout;
            
            
                }