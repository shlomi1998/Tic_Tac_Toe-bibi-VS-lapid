"use strict";

var btns = document.querySelectorAll('tic_tac_toe__btn'); // X=bibi

var x = document.getElementsByClassName('tic_tac_toe__btn__x'); // O=lapid

var o = document.getElementsByClassName('tic_tac_toe__btn__o');
var turn = 0;
var whoIs = [null, null, null, null, null, null, null, null, null];
var whoIs2 = [null, null, null, null, null, null, null, null, null];

function btn_0() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[0].style.display = 'block';
    whoIs[0] = 'bibi';
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[0].style.display = 'block';
    whoIs[0] = "lapid";
  }
}

function btn_1() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[1].style.display = 'block';
    whoIs[1] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[1].style.display = 'block';
    whoIs[1] = "lapid";
  }
}

function btn_2() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[2].style.display = 'block';
    whoIs[2] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[2].style.display = 'block';
    whoIs[2] = "lapid";
  }
}

function btn_3() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[3].style.display = 'block';
    whoIs[3] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[3].style.display = 'block';
    whoIs[3] = "lapid";
  }
}

function btn_4() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[4].style.display = 'block';
    whoIs[4] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[4].style.display = 'block';
    whoIs[4] = "lapid";
  }
}

function btn_5() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[5].style.display = 'block';
    whoIs[5] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[5].style.display = 'block';
    whoIs[5] = "lapid";
  }
}

function btn_6() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[6].style.display = 'block';
    whoIs[6] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[6].style.display = 'block';
    whoIs[6] = "lapid";
  }
}

function btn_7() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[7].style.display = 'block';
    whoIs[7] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[7].style.display = 'block';
    whoIs[7] = "lapid";
  }
}

function btn_8() {
  if (turn >= 8) {
    turn = 0;
  }

  turn++;

  if (turn === 1 || turn === 3 || turn === 5 || turn === 7 || turn === 9) {
    x[8].style.display = 'block';
    whoIs[8] = "bibi";
  } else if (turn === 2 || turn === 4 || turn === 6 || turn === 8) {
    o[8].style.display = 'block';
    whoIs[8] = "lapid";
  }
}

function btn() {
  var bibi = 0;
  var lapid = 0;

  if (whoIs[0] === 'bibi' && whoIs[1] === 'bibi' && whoIs[2] === 'bibi' || whoIs[0] === 'bibi' && whoIs[3] === 'bibi' && whoIs[6] === 'bibi' || whoIs[6] === 'bibi' && whoIs[7] === 'bibi' && whoIs[8] === 'bibi' || whoIs[2] === 'bibi' && whoIs[5] === 'bibi' && whoIs[8] === 'bibi' || whoIs[1] === 'bibi' && whoIs[4] === 'bibi' && whoIs[7] === 'bibi' || whoIs[0] === 'bibi' && whoIs[4] === 'bibi' && whoIs[8] === 'bibi' || whoIs[2] === 'bibi' && whoIs[4] === 'bibi' && whoIs[6] === 'bibi' || whoIs[3] === 'bibi' && whoIs[4] === 'bibi' && whoIs[5] === 'bibi') {
    bibi++;
  }

  if (whoIs[0] === 'lapid' && whoIs[1] === 'lapid' && whoIs[2] === 'lapid' || whoIs[0] === 'lapid' && whoIs[3] === 'lapid' && whoIs[6] === 'lapid' || whoIs[6] === 'lapid' && whoIs[7] === 'lapid' && whoIs[8] === 'lapid' || whoIs[2] === 'lapid' && whoIs[5] === 'lapid' && whoIs[8] === 'lapid' || whoIs[1] === 'lapid' && whoIs[4] === 'lapid' && whoIs[7] === 'lapid' || whoIs[0] === 'lapid' && whoIs[4] === 'lapid' && whoIs[8] === 'lapid' || whoIs[2] === 'lapid' && whoIs[4] === 'lapid' && whoIs[6] === 'lapid' || whoIs[3] === 'lapid' && whoIs[4] === 'lapid' && whoIs[5] === 'lapid') {
    lapid++;
  }

  if (bibi === 1 && lapid === 1) {
    var lapidiWin = document.getElementById("bibi_vs_lapid__titel");
    lapidiWin.innerHTML = '  😡 Repeat' + " &nbsp " + 'Elections 😡';
  }

  if (bibi === 1 && lapid === 0) {
    var bibiWin = document.getElementById("bibi_vs_lapid__titel");
    bibiWin.innerText = "BIBI is the WINNER";
  }

  if (lapid === 1 && bibi === 0) {
    var _lapidiWin = document.getElementById("bibi_vs_lapid__titel");

    _lapidiWin.innerText = "LAPID is the  WINNER";
  }
}