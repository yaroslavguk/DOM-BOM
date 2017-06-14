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
 
  var c = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  var datef = document.querySelector('input[name=date]').value;
  var result3 = datef.match(c);
  
  if (datef.length === 0 || result3 === null){
  alert('date should contain current date dd/mm/yyyy');
  datef = false;
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