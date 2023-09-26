"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("./export");
let num = 2;
let sqr = (0, export_1.square)(num);
console.log(`Square Root of ${num} = ${sqr}\n`);
const export_2 = __importDefault(require("./export"));
let user1 = (0, export_2.default)("Mudasir", "mudasirirshad47@gmail.com", true);
console.log(user1);
let user2 = (0, export_2.default)("Muzammil", "muzammilshad47@gmail.com");
console.log(user2);
