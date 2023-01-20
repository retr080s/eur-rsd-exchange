'use strict';

const eurInput = document.getElementById('input--eur--price').value;

const rsdCalculate = eurInput * 117;

const rsdOutput = (document.getElementById('output--rsd--price').value =
  rsdCalculate);
