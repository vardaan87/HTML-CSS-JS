const favMovie = "avatar";

let guess = prompt("guess my favourite movie");

while (guess != favMovie && guess != "quit") {
  guess = prompt("wrong guess, please try again");
}
