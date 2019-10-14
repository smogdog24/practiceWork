var eeyore = {character: "eeyore"}
var gopher = {character: "gopher"}
var heffalump = {character: "heffalump"}
var kanga = {character: "kanga"}
var christopher = {character: "christopher"}
var owl = {character: "owl"}
var piglet = {character: "piglet"}
var winnie = {character: "winnie"}
var tigger = {character: "tigger"}
var bees = {character: "bees"}
var rabbit = {character: "rabbit"}

heffalump.west = eeyore;
eeyore.south = kanga;
eeyore.east = heffalump;
kanga.north = eeyore;
kanga.south = christopher;
christopher.north = kanga;
christopher.south = winnie;
christopher.east = rabbit;
christopher.west = owl;
owl.south = piglet;
owl.east = christopher;
piglet.north = owl;
piglet.east = winnie;
winnie.north = christopher;
winnie.south = tigger;
winnie.east = bees;
winnie.west = piglet;
tigger.north = winnie;
bees.north = rabbit;
bees.west = winnie;
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = christopher;
gopher.west = rabbit;

var player = {location: tigger}

function move(dir){
    if (player.location[dir] != undefined){
     player.location = player.location[dir];
     //console.log('you are at' + ${player.location.character} +"'s house")
     //console.log('you are at {player.location.character} house ')
     console.log(player.location)
    }
    else{
        console.log("Cant go this way")
    }
}
move("north")
move("west")