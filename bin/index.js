#!/usr/bin/env node
import { getSymbol } from "../../src/functions";
import { removeDigit } from "../../src/functions";
import { isSquare } from "../../src/functions";
import { numberLength } from "../../src/functions";
import { flipOver } from "../../src/functions";

//№1
console.log(getSymbol('The members', 4));
console.log(getSymbol('type can in', 1));
console.log(getSymbol('an error', 20));
//№2
console.log(removeDigit(208));
console.log(removeDigit(109));
console.log(removeDigit(940));
//№3
console.log(isSquare(2, 4));
console.log(isSquare(81, 9));
console.log(isSquare(25, 125));
//№4
console.log(numberLength(123));
console.log(numberLength(3));
console.log(numberLength(19283));
//№5
console.log(flipOver('hello'));
console.log(flipOver('swap'));
console.log(flipOver('John Doe'));