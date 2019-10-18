let roster = [{
                firstName:"Zainib",
                lastName:"Ahmed",
                color:"Blue",
                animal:"Giraffe",
                book:"The Book Thief",
                movie:"Amelie",
                game:"none",
                superhero:"The Hulk",
                randomFact:"I love to eat olives"},
               {
                firstName: "Toni",
                lastName: "Anguiano",
                color: "blue",
                animal: "cat",
                book: "The Bell Jar",
                movieGenre: "Horror",
                superHero: "batman",
                fact: "I like to hangout in cemeteries and research dark California history",
             }, {
               firstName: "Camila",
                lastName: "Avina Garcia",
                color: "Green",
                animal:"Dog",
                book:"Match",
                movie:"Lady and the Tramp",
                game:" Guitar Hero",
                superhero:"Spiderman",
                randomFact:"I have a twin",},
                {
                firstName:"Eddson",
                lastName:"Jose",
                color:"midnight blue",
                animal:"pig",
                book:"The Dark Forest",
                movie:"The Fountain",
                game:"Halo Reach",
                superhero:"Superman",
                fact:"I am made up of stardust",},
                {
                firstName: "Lydia",
                lastName: "Lim",
                color: "blue",
                animal : "dog",
                book: "No",
                movie: "me before you",
                game: "No",
                superhero: "Thor",
                randomFact: " birds are tetrapods even though they only walk on two legs",},
                {
                firstName:"Chi",
                lastName:"Nguyen",
                color:"purple",
                animal:"bird",
                book:"Math Curse",
                movie:"Big Hero 6",
                game:"Checkers",
                superhero:"Big Hero 6 (team)",
                randomFact:"Lately this year, monsters have especially been occupying my mind, among other things."},
                {
                firstName: "Leon",
                lastName: "Quach",
                color: "silver",
                animal:"penguins",
                book: "Letters to a Young Poet",
                movie:"Kung fu Hustle",
                game: "Pokemon Crystal Version",
                superhero: "Batman",
                randomFact:"I have two pet guinea pigs"},
                {
                firstName: "Sierra",
                lastName: "Roe",
                color: "purple",
                animal: "dog",
                book: "phantom tollbooth",
                movie: "Naussica of the Valley of the Wind",
                game: "Pokemon heartgold",
                superHero: "Captain Marvel",
                randomFact: "can run 7 minute mile"},
                {
                firstName: "Hao",
                lastName: "Rong",
                favoriteColor: "hex(#4285F4)",
                animal: "otter",
                book: "A Brief History of Time",
                movie: "Angry Birds 2",
                game: "Final Fantasy XIV",
                superhero: "Tony Stark",
                randomFact: "I like cats.",},
                {
                firstname  : "Kaicong",
                lastname: "Tang",
                color: "black",
                animal: "dog",
                movie: "iron man123",
                game: "csgo",
                superhero: "iron man",
                fact: "love gaming"},
                {
                firstName: "Sumedh",
                lastName: "Vedanthi",
                color:"Blue" ,
                animal: "Crow",
                book: "Of Mice and Men",
                movie: "American Psycho",
                game: "Fruit Ninja" ,
                superHero: "Batman" ,
                randomFact: "im a black belt",},
                {
                firstName: "Chris",
                lastName: "Weber",
                color: "green",
                animal: "cat",
                book: "Hitchhiker's Guide to the Galaxy",
                movie: "Spiderman Into The Spiderverse",
                game: "The Legend of Zelda Breath of the Wild",
                superHero: "Iron Man",
                randomFact: "I'm vegetarian"},
                {
                firstName: "Andy",
                lastName: "Wu",
                color: "Red",
                animal:"Kiwi",
                book: "Romance of the Three Kingdoms",
                movie:"Shrek 2",
                game: "Super Mario 64",
                superhero: "Static Shock",
                randomFact:"I've had jaw correction surgery"},
                {
                firstName: "xiaowei",
                lastName: "zheng",
                color:" green",
                animal: "babies",
                book: "the little girl at the window",
                movie: "eat drink man woman",
                game: "none",
                superHero: "none",
                randomFact: "don't drink coke"},
                {
                firstName: "Matteo",
                lastName: "Leva",
                color: "Black",
                animal: "Cat",
                book: "Pillars of the earth",
                movie:"The Godfather",
                game: "Witcher 3",
                superHero: "spider man",
                fact: "I'm disappointed in GOT season 8"},
                {
                firstName: "Hector",
                lastName: "Flores",
                color: "Blue",
                animal: "Dog",
                boook: "Captain Underpants",
                movie: "Ace Ventura pet detective",
                game: "Smash Brothers",
                superhero: "Flash",
                randomFact: "I am a Libra"},
                {
                firstName: "Vanessa",
                lastName: "Blacow-Berggen",
                color: "pink",
                animal:"cat",
                book:"The Heartstriker series",
                movie:"Ace Ventura pet detective",
                game:"Smash Brothers",
                superHero:"Spiderman",
                randomFact:"I really like cats, especially my cat"},
                {
                firstName:"Kevin",
                lastName: "Sagara",
                color:"yellow",
                animal:"cat",
                book:"sherlock holmes",
                movie:"Shaun of the Dead",
                game:"osu!",
                superhero:"batman",
                fact:"learning japanese",}];

                let randomIndex;
                let animating = false;

function setup(){
  createCanvas(600, 600);
  background(200);

console.log(random(roster).firstName);

createButton("randomize");
}

function draw(){
  if(animating == true){

    ellipse(random(width),random(height), random(70, 200));

  }

  }
  function randomizer(){
  animating = false;

    if (roster[0]){

      //this displays random name and splices it out of array

    background(random(200, 255));
      randomIndex = int(random(roster.length));

    text(`${roster[randomIndex].firstName}'s favorite color is
    ${roster[randomIndex].color}`, 50, 50);

      //text(roster[randomIndex].firstName  + "'s favorite color is " + roster[randomIndex].color, 50, 50);

      roster.splice(randomIndex, 1);

    } else {
      background(random(200, 255));
      text("nothing left!", 50, 50);
    }
  }

  function mousePressed() {
  animating = true;
    setTimeout(randomizer, 2000);

  }
