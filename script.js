  var wrap = document.getElementById('validation');
  var forms = document.createElement('form');
  var inputFir= document.createElement('input');
  var inputSec = document.createElement('input');
  var inputThr = document.createElement('input');
  var inputFour = document.createElement('input');

  wrap.appendChild(forms);
  forms.appendChild(inputFir);
  forms.appendChild(inputSec);
  forms.appendChild(inputThr);
  forms.appendChild(inputFour);

  forms.setAttribute('name','login');
  forms.setAttribute('action','text');
  inputFir.setAttribute('type','text');
  inputSec.setAttribute('type','text');
  inputThr.setAttribute('type','text');
  inputFour.setAttribute('type','submit');
  inputFir.setAttribute('name','age');
  inputSec.setAttribute('name','username');
  inputThr.setAttribute('name','date');
  inputFour.setAttribute('value','Validation');

  inputFir.setAttribute('placeholder','age');
  inputSec.setAttribute('placeholder','name');
  inputThr.setAttribute('placeholder','date');

  function validation(){

  var a = /^\d+$/g;
  var agef = document.querySelector('input[name=age]').value;
  var result = agef.match(a);
  
  if (agef.length === 0 || agef == 0 || Math.sign(agef)== -1 || result === null){
    alert('age should contains only numbers');
    agef = false;
  }else if (isNaN(agef)){
    alert('age should contains only numbers');
    agef = false;
  }
 
  var b = /^user_/;
  var namef = document.querySelector('input[name=username]').value;
  var result2 = namef.match(b);
  
  if (namef.length === 0 || result2 == null ){
    alert('name should start from "user_"');
    namef = false;
  }
 
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = '0' + (d.getMonth()+1);
  var curr_year = d.getFullYear();
  var dateNow = curr_date + "/" + curr_month + "/" + curr_year;
  var dateField = document.querySelector('input[name=date]').value;
  if (dateField != dateNow ){
    alert('date should contain current date dd/mm/yyyy');
    dateField = false;
  }
  return datef && namef && agef;
}
  
  function res(event){
  
  document.querySelector('form').onsubmit= function (event){
  event.preventDefault();

  if (!validation()){}
  else {
  alert('validation for form is ok');
    }
  }
}
res();
