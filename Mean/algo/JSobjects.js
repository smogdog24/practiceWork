
//Challenge 1
//Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

function printStudents(obj){

    for(var i =0; i<6; i++){
        var thing = 'Name: ' + obj[i]['name'] +', '+ 'Cohort: ' + obj[i]['cohort']
        console.log(thing)

    }
}
var student = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

printStudents(student)

//Challenge 2
//Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.
var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function empMan(staff){
    for(var i = 0; i<staff.length; i++){
        var employees = staff[i]
        var keyCount = staff[i][0] + staff[i][1]
        console.log(employees)
    }
    return employees, keyCount
}

 empMan(users)