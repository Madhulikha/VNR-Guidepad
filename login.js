$('input:radio[name=userTypeButton]').click(function() {
    var userTypeList = document.getElementsByName('userTypeButton');
    var userType;
    if(userTypeList[0].checked)
        document.querySelector('.id-or-rollnumber').innerHTML = "Roll Number";
    else
        document.querySelector('.id-or-rollnumber').innerHTML = "Enter ID";
});