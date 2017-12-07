angular.module('sortApp', [])

.controller('mainController', function($scope) {

$scope.sortType     = 'Team';// set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchNumber   = '';     // set the default search/filter term

// create the list of sushi rolls 
$scope.players = [
    {
      ID: 1,
      Name: "Cam Newton",
      Number: 1,
      Position: "QB",
      Team: "Carolina Panthers"
    },{
      ID: 2,
      Name: "Luke Kuechly",
      Number: 59,
      Position: "MLB",
      Team: "Carolina Panthers"
    },{
      ID: 3,
      Name: "Aaron Rodgers",
      Number: 12,
      Position: "QB",
      Team: "Green Bay Packers"
    },{
      ID: 4,
      Name: "JJ Watt",
      Number: 99,
      Position: "DE",
      Team: "Houston Texans"
    },
    {
      ID: 5,
      Name: "Josh Norman",
      Number: 24,
      Position: "CB",
      Team: "Washington Redskins"
    }
    ,{
      ID: 6,
      Name: "Jordy Nelson",
      Number: 87,
      Position: "WR",
      Team: "Green Bay Packers"
    },
    {
      ID: 7,
      Name: "Matt Ryan",
      Number: 2,
      Position: "QB",
      Team: "Atlanta Falcons"
    },
    {
      ID: 8,
      Name: "Julio Jones",
      Number: 11,
      Position: "WR",
      Team: "Atlanta Falcons"
    },
    {
      ID: 9,
      Name: "Devonta Freeman",
      Number: 24,
      Position: "RB",
      Team: "Atlanta Falcons"
    },
    {
      ID: 10,
      Name: "Kelvin Benjamin",
      Number: 13,
      Position: "WR",
      Team: "Buffalo Bills"
    },
    {
      ID: 11,
      Name: "Von Miller",
      Number: 58,
      Position: "OLB",
      Team: "Denver Broncos"
    },
    {
      ID: 12,
      Name: "Thomas Davis",
      Number: 58,
      Position: "OLB",
      Team: "Carolina Panthers"
    },{
      ID: 13,
      Name: "Drew Brees",
      Number: 9,
      Position: "QB",
      Team: "New Orleans Saints"
    },{
      ID: 14,
      Name: "Tom Brady",
      Number: 12,
      Position: "QB",
      Team: "New England Patriots"
    },{
      ID: 15,
      Name: "Rob Gronkowski",
      Number: 87,
      Position: "TE",
      Team: "New England Patriots"
    },{
      ID: 16,
      Name: "Greg Olsen",
      Number: 88,
      Position: "TE",
      Team: "Carolina Panthers"
    },{
      ID: 17,
      Name: "Leveon Bell",
      Number: 26,
      Position: "RB",
      Team: "Pittsburgh Steelers"
    },{
      ID: 18,
      Name: "Antonio Brown",
      Number: 84,
      Position: "WR",
      Team: "Pittsburgh Steelers"
    },{
      ID: 19,
      Name: "Dak Prescott",
      Number: 4,
      Position: "QB",
      Team: "Dallas Cowboys"
    },{
      ID: 20,
      Name: "Ezekiel Elliot",
      Number: 21,
      Position: "RB",
      Team: "Dallas Cowboys"
    }
];

});