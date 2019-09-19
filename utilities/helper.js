/**
  *
  * This source code is the confidential, proprietary information of
  * Cafeto Software S.A.S., you may not disclose such Information,
  * and may only use it in accordance with the terms of the license
  * agreement you entered into with Cafeto Software S.A.S.
  *
  * 2019: Cafeto Software S.A.S.
  * All Rights Reserved.
  *
*/

/**
 * @author Jeffry García Perea
 * @file helper.js
 * @description file to use general functions
*/

exports.sumar=(variableA, variableB)=>{
    return variableA + variableB;
};

exports.NumberMonth=(TextMonth)=>{
  let month_
  switch (TextMonth) {
    case 'Jan':
      month_ = 'Ene'; 
      break;
    case 'Feb':
      month_ = 'Feb'; 
      break;
    case 'Mar':
      month_ = 'Mar'; 
      break;
    case 'Apr':
      month_ = 'Abr'; 
      break;
    case 'May':
      month_ = 'May'; 
      break;
    case 'Jun':
      month_ = 'Jun'; 
      break;
    case 'Jul':
      month_ = 'Jul'; 
      break;
    case 'Aug':
      month_ = 'Ago'; 
      break;
    case 'Sep':
      month_ = 'Sep'; 
      break;
    case 'Oct':
      month_ = 'Oct'; 
      break;
    case 'Nov':
      month_ = 'Nov'; 
      break;
    case 'Dec':
      month_ = 'Dec'; 
      break;
  }
  return month_;
};