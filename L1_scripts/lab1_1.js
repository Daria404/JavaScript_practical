"use strict";

let numberOfFilms;



const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    start: function () {
        numberOfFilms = +prompt("How many movies have U already seen?","");
        
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("How many movies have U already seen?","");
        }
    },

    private:false
   };

function rememberMyMovies(){
    for (let i = 0; i < 2;  i++) {
        const lastMovieName = prompt("Which movie have U seen recently?",""),
              ratelastMovie = +prompt("Rate this movie, please","");
        if (lastMovieName != null && ratelastMovie != null && lastMovieName != "" && ratelastMovie != 0 && lastMovieName.length <50) { 
            personalMovieDB.movies[lastMovieName]= ratelastMovie; 
        } else{
            i--;
            alert("Incorrect name or rate!");
        }
    }
}
rememberMyMovies();

function detectPersonalLvl(){
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log("Too little movies are watched");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("U R regular audience");
    } else if (personalMovieDB.count > 30) {
        console.log("Wow, there is a movie maniac!");
    } else {
        console.log("smth goes wrong");
    }
}
detectPersonalLvl();

// function showMyDB(DB){
//     if (DB.private == false){
//         console.log(DB);
//     } 
// }
function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeMyGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i]= prompt(`Your favorite genre number ${i+1}`,"");
    }
}
writeMyGenres(); 