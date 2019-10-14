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
christopher.north = Kanga;
christopher.south = Winnie;
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


function move(dir)
    var player = self.head
    if(player = player.next)


