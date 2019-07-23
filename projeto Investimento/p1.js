var selectedRow = null

function ativar(){
    if(validar()){
    var formData = formulario();
  if(selectedRow == null)
         inserir(formData);
else
    update(formData);
    resetar();    
   }
}
function formulario(){
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["sobrenome"] = document.getElementById("sobrenome").value;
    formData["numero"] = document.getElementById("numero").value;
    formData["cpf"] = document.getElementById("cpf").value;
    formData["agencia"] = document.getElementById("agencia").value;
    formData["conta"] = document.getElementById("conta").value;
    return formData;
}

function inserir(data){
    var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sobrenome;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.numero;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cpf;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.agencia;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.conta;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML =`<input type="button" value="Editar" class="" onclick="editar(this)"></input> 
                       <input type="button"onclick="deletar(this)" value="deletar"></input>`;

}
function resetar(){
document.getElementById("nome").value = " ";
document.getElementById("sobrenome").value = " ";
document.getElementById("numero").value = " ";
document.getElementById("cpf").value = " ";
document.getElementById("agencia").value = " ";
document.getElementById("conta").value = " ";
selectedRow = null;
}
function editar(td){
     selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sobrenome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("numero").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cpf").value = selectedRow.cells[3].innerHTML;
    document.getElementById("agencia").value = selectedRow.cells[4].innerHTML;
    document.getElementById("conta").value = selectedRow.cells[5].innerHTML;
}
function update(formData){
  selectedRow.cells[0].innerHTML = formData.nome;
  selectedRow.cells[1].innerHTML = formData.sobrenome;
  selectedRow.cells[2].innerHTML = formData.numero;
  selectedRow.cells[3].innerHTML = formData.cpf;
  selectedRow.cells[4].innerHTML = formData.agencia;
  selectedRow.cells[5].innerHTML = formData.conta;

}
function deletar(td){
    if(confirm('deseja mesmo deletar este investidor')){
        row = td.parentElement.parentElement;
        document.getElementById("lista").deleteRow(row.rowIndex);
        resetar();
    }
}
function validar(){
isValid = true;
if(document.getElementById("nome").value == ""){
    isValid = false;
    document.getElementById("validate").classList.remove("hide");
}else {
    isValid = true;
    if(!document.getElementById("validate").classList.contains("hide"))
    document.getElementById("validate").classList.add("hide");
}
return isValid;
}

/*modal*/
let modalbtn = document.querySelector('.modal-btn');
let modalbg = document.querySelector('.f1');
let modalclose = document.querySelector('.modal-close');

modalbtn.addEventListener('click', function(){
    modalbg.classList.add('bg-active');
});

modalclose.addEventListener('click', function(){
    modalbg.classList.remove('bg-active');
});