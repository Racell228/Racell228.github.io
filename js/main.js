calc.onclick = function(){
    var myform = this.form;
    myform.result.value = +myform.myname.value + +myform.street.value;
}