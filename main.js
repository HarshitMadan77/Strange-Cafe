function TableSearch(){
  let name = document.getElementById('myInput')
  let filter = name.value.toUpperCase();
  let mytable = document.getElementById('mytable');
  let tr = mytable.getElementsByTagName('tr');

  for(var i=0; i<tr.length; i++){
  
  let td = tr[i].getElementsByTagName('td')[1];
  if(td){
     textvalue = td.textContent || td.innerText;
     if(textvalue.toUpperCase().indexOf(filter) > -1){
     tr[i].style.display = "";
    }
    else {
     tr[i].style.display = 'none';
    }
  }
}
}