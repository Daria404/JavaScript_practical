"use strict";

const personalMovieDB = {
    count:0,
    movies: {},
    actors:{},
    genres:[],
    
    start: function () {
        personalMovieDB.count = +prompt("How many movies have U already seen?","");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many movies have U already seen?","");
        }
    },

    rememberMyMovies: function() {
        for (let i = 0; i < 2;  i++) {
            const lastMovieName = prompt("Which movie have U seen recently?",""),
                  ratelastMovie = +prompt("Rate this movie, please","");
            if (lastMovieName != null && ratelastMovie != null && lastMovieName != "" &&
                ratelastMovie != 0 && lastMovieName.length <50) { 
                personalMovieDB.movies[lastMovieName]= ratelastMovie; 
            } else{
                i--;
                alert("Incorrect name or rate!");
            }
        }
    },

    detectPersonalLvl: function() {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            console.log("Too little movies are watched");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("U R regular audience");
        } else if (personalMovieDB.count > 30) {
            console.log("Wow, there is a movie maniac!");
        } else {
            console.log("smth goes wrong");
        }
    }, 

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log("Access denied");
        }
    },

    writeMyGenres() {
        for (let i = 0; i < 3; i++){
            personalMovieDB.genres[i]= prompt(`Your favorite genre number ${i+1}`,"");
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") { 
                i--;
                alert("Incorrect input!"); 
            } 
        }
        personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Favorite genre number ${i+1} is ${item}.`);
             });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },

    private:false,
   };
personalMovieDB.start();
// personalMovieDB.rememberMyMovies();
// personalMovieDB.detectPersonalLvl();
// personalMovieDB.writeMyGenres();
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.private);
personalMovieDB.showMyDB();