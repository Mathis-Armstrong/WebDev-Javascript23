"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Mathis Armstrong
      Date: 04/10/2023

      Filename: project09-01b.js
*/

let query = location.search.slice(1);
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);
let cardFields = query.split(/&/g);
let nameValue;
let name;
let value;
for (let x=0; x<cardFields.length; x++){
      nameValue = cardFields[x].split(/=/g);
      name = nameValue[0];
      value = nameValue[1];
      document.getElementById(name).textContent = value;
}