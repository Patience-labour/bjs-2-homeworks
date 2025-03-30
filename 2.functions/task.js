"use strict"

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element > max) {
      max = Math.max();
    }

    if (element < min) {
      min = Math.min();
    }
    sum += element;
  }

  const avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

getArrayParams(1, 2, 3, 4, 5, 6, 7, 8, 90)

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr, 0)
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    let elemnts = arr[i];
    if (elemnts % 2 === 0) {
      sumEvenElement += elemnts;
    } else {
      sumOddElement += elemnts;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el % 2 === 0) {
      sumEvenElement += el;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let elem = arrOfArr[i];
    let result = func(...elem);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
