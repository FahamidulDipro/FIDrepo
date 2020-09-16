const para = document.querySelector('.paragraph');
const button = document.querySelector('.btn');
var i = 0;

button.addEventListener('click', function () {
    var peopleId = new XMLHttpRequest();
    peopleId.open('GET', 'https://www.filltext.com/?rows=5&pretty=true&id={index}&name={firstName}&lastname={lastName}&city={city}&business={business}&email={email}&phone={phone|format}')
    peopleId.onload = function () {
        var data = JSON.parse(peopleId.responseText);
        clear();
        i++;
        if (i >= data.length) {
            i = 0;

        }

        para.innerHTML += `${data[i].name} lives at <b>${data[i].city}</b>.<br><br> This person works at <b>${data[i].business}</b>. <br><br>${data[i].name}'s id number is <b>${data[i].id}</b>.<br><br> Email id is <b>${data[i].email}</b> <br><br> Phone number is <b>${data[i].phone}</b>. <br> `;



    }
    peopleId.send();
})

//to clear the previous id sentence
function clear() {
    para.innerHTML = '';
}
