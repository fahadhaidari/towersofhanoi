var columns  = new Array();
var clmn1    = 0;
var clmn2    = 1;
var clmn3    = 2;
var scenario = [ [clmn1, clmn3], [clmn1, clmn2], [clmn3, clmn2], [clmn3, clmn2], [clmn1, clmn3], [clmn2, clmn1], [clmn2, clmn3], [clmn1, clmn3] ];
var sceIndex = 0;
var interval = null;

// the starting function of the program.
function start() {

  addColumns(numCyl);

  //playScenario();

  interval = setInterval(playScenario, 100);

}

// what is the next move
function playScenario() {

  loading();

  if(sceIndex < scenario.length) {
    
    move(columns[scenario[sceIndex][0]], columns[scenario[sceIndex][1]]);
    sceIndex ++;
    //playScenario();
  }

}

function loading() {
  var loaded = document.body.innerHTML = String(parseInt(sceIndex / (scenario.length - 1) * 100)) + "%";
}

// add columns, and fill the first one with values(from biggest to smallest)
function addColumns() {

  for(var i = 0; i < 3; i ++) {

    columns[i] = [];

    for(var j = 0; j < numCyl; j ++) {

      if(i == 0) {

        columns[i][j] = numCyl - j;

      } 

    }

  }

}

// make a move, remove a cylinder from one column to another one
function move(clmn, toClmn) {

  var popped = null;

  if(clmn.length > 0) {

    popped = clmn.pop();
    addToColumn(toClmn, popped);


  }
}

// adding a new cylinder to a column
function addToColumn(clmn, val) {

  if(clmn.length == 0) {

    clmn.push(val);

  } else {

    if(validateMove(val, clmn)) {

      clmn.push(val);

      if(clmn.length == numCyl) {

        clearInterval(interval);
        alert("You win");
      }

    } else {

      alert("Wrong move!")

    }

  }

}

// check if this move is valid, based on the rules
function validateMove(val, clmn) {

  var decision = (val < clmn[clmn.length - 1]) ? 1: 0;
  return decision;

}