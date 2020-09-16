var button = document.querySelector('#btn');
var para = document.querySelector('#animal-info');
var counter = 1;
button.addEventListener('click', function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`);
    ourRequest.onload = function () {
        // var ourData = ourRequest.responseText;
        counter++;
        if (counter > 3) button.remove();
        var ourData = JSON.parse(ourRequest.responseText);
        for (var i = 0; i < ourData.length; i++) {
            para.innerHTML += `${ourData[i].name} is a ${ourData[i].species}. Its favourite food is
            ${ourData[i].foods.likes}. It hates ${ourData[i].foods.dislikes}.<br>`;
        }

        // para.innerHTML = `${ourData}`;
        // console.log(ourData[0]);
    }
    ourRequest.onerror = function(){
        alert("Loading Failed! Please try again later");
    }
    ourRequest.send();

})

