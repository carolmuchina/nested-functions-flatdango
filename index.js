console.log("Welcome to flatdango!");
// Stores the available movie titles
const movieTitles = ["The Giant Gila Monster",
    "Manos: The hands of Fate",
    "Time Chasers"
];
// Gets the details of the selected movie
function getMovieDetails(movieTitle){
    // Creates a movie object using the selected movie title
    const movie = {
        title: movieTitle
    };
    // existing if/else if code
    // Creates a message containing the movie's details
    if(movie.title === "The Giant Gila Monster"){
        movie.runtime = "180 minutes";
        movie.showtime = "04:00PM";
        movie.description = "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.";
    }
    else if(movie.title === "manos: The Hands of Fate"){
        movie.runtime = "118 minutes";
        movie.showtime = "06:45PM";
        movie.description = "A family gets lost on the road and stumbles upon a hidden,        underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.";
    }
    else if(movie.title === "Time Chasers"){
        movie.runtime = "93 minutes";
        movie.showtime = "09:30PM";
        movie.description = "An inventor comes up with a time machine,but must prevent its abuse at the hands of an evil C.E.O";
     }
     function getMovieMessage(){
        return `${movie.title} is ${movie.runtime} long and starts at ${movie.showtime}. Here is the movie description: ${movie.description}`;}
     }
    //  
// Returns the message created by the nested function
     return getMovieMessage();
// Gets the details for the first movie in the movieTitles array
const movieMessage = getMovieDetails(movieTitles[0]);
// Displays the movie details in the terminal
console.log(movieMessage);