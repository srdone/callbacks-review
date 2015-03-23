/* Declare and Define the functions here that will make the function calls below work properly */


var first = function(array, cb) {
  cb(array[0]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
    console.log('The first name in names is ', firstName);
    });


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var last = function (array, cb) {
  cb(array[array.length - 1]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
    console.log('The last name in names is ', lastName);
    });



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.

var contains = function (string, array, cb) {
  if (array.indexOf(string) !== -1) {
    cb(true);
  } else {
    cb(false);
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
    if(yes){
          console.log('Colt is in the array');
            } else {
                  console.log('Colt is not in the list');
                    }
                    });




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var map = function (array, cb) {
  var i;
  var result = [];

  for (i = 0; i < array.length; i += 1) {
    result.push(cb(array[i]));
  }
  return result;
};

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
var newArray = map(numbers, function(num){
    return num * 2; //returns an array of [2,4,6,8,10]
    });

console.log(newArray);




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var uniq = function (array, cb) {
  var i;
  var result = [];

  for (i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }

  cb(result);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
    });




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var each = function (array, cb) {
  var i;

  for (i = 0; i < array.length; i += 1) {
    cb(array[i], i);
  }
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
    console.log('The item in the ' + indice + ' position is ' + item);
    });




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var getUserById = function(id, array, cb) {
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (array[i].id === id) {
      // use return to break loop
      return cb(array[i]);
    }
  }

};


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
     id: '15a',
     email: 'cahlan@gmail.com',
     name: 'Cahlan',
     address: '135 East 320 North'
  },
  {
     id: '16t',
     email: 'ryan@gmail.com',
     name: 'Ryan',
     address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var find = function (array, cb) {
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      return array[i];
    }
  }

};


//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
var foundNum = find(numbers, function(num){ 
  return num % 2 === 0; //should return 2
});

console.log(foundNum);
