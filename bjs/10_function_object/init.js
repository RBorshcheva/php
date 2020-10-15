
//generation of the request
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleName').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = `Фамилия: ${initPerson.surname}`;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('profession').innerText = initPerson.profession;
};

document.getElementById('btnGen').addEventListener('click', function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleName').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = `Фамилия: ${initPerson.surname}`;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('profession').innerText = initPerson.profession;
});

//clearing the window
document.getElementById('btnClear').addEventListener('click', function () {
    document.getElementById('surnameOutput').innerText = "Все поля очищены, сгенерируйте новый запрос";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('middleName').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('profession').innerText = "";
    document.getElementById('middleName').innerText = "";
});



