
//generation of the request
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleName').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = `Фамилия: ${initPerson.surname}`;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('dayOutput').innerText = initPerson.day;
    document.getElementById('monthOutput').innerText = initPerson.month;
    document.getElementById('profession').innerText = initPerson.profession;
};

//clearing the window
document.getElementById('btnClear').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = 'Все поля очищены, сгенерируйте новый запрос';
    document.getElementById('surnameOutput').innerText ='';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('birthmouthOutput').innerText = '';
    document.getElementById('birthdayOutput').innerText = '';
    document.getElementById('PatronymicOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
})



