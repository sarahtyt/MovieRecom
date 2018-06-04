const APIkey = "c954061d6d74001c5745b4c7717784c2";

function parseAsJSON(response) {
    // Return the JSON from the response
    return response.json();
}

function handleError(err) {
    // Show the error to the user
    console.error(err);
    alert(err.message);
}

function renderSlide(data) {
    // console.log(data['results']);
    var slideImage = document.querySelectorAll('img');
    var slideTitle = document.querySelectorAll('h4');
    var slideDate = document.querySelectorAll('h5');
    var slideOverview = document.querySelectorAll('.carousel-item p')
    var idx;
    for (idx = 0; idx < slideImage.length; idx++) {
        slideImage[idx].src = 'https://image.tmdb.org/t/p/w500' + data['results'][idx]['poster_path'];
        slideTitle[idx].textContent = data['results'][idx]['title'];
        slideDate[idx].textContent = data['results'][idx]['release_date'];
        slideOverview[idx].textContent = data['results'][idx]['overview'];
    }
}

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key="+APIkey+"&language=en-US&page=1")
    .then(parseAsJSON)
    .then(renderSlide)
    .catch(handleError)


var criteriaSelect = document.getElementById("criteria-select"); 
criteriaSelect.addEventListener("change", function(){
    // console.log(criteriaSelect.value);
    fetch("https://api.themoviedb.org/3/movie/"+criteriaSelect.value+"?api_key="+APIkey+"&language=en-US&page=1")
        .then(parseAsJSON)
        .then(renderSlide)
        .catch(handleError)
})