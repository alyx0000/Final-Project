'use strict';


let currentPage = 1;

function getUserInfo(page){
    fetch('https://reqres.in/api/users?page=' + page, {
     method: 'GET'
    })
    .then (function(response) {
        if(response.status !== 200) {
            throw response.status;
        }
        return response.json();
    })
    .then(function(responseData) {

    responseData.data.forEach(element => {

        let li = document.createElement('li');

        let guideName = document.createElement('span');
        guideName.textContent = element.first_name;
        li.classList.add('guide-list');

        
        let guideImg = document.createElement('img');
        guideImg.src = element.avatar;
        guideImg.classList.add('guide-img');
        
        li.appendChild(guideImg);
        document.getElementById('guide-ul').appendChild(li);
    })

    // document.getElementById('guide-ul').appendChild(fragment);

    })
    .catch(function(error) { 
        if(error == 404){
            let spanError = document.createElement('span');
            spanError.textContent = 'Page Not Found';
            document.getElementById('guide-wrapper').appendChild(spanError)
        } else {
        console.log('Server Error');
        }
    })
}

document.getElementById('loadMore').addEventListener('click', function() {
    currentPage += 1;

    getUserInfo(currentPage);
});

getUserInfo(currentPage);