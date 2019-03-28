const chapterOneMain = () => {
  checkTypes();
  countFuncLength();
  checkTypeofOperator();
  checkUndefined();
  checkTypeofSafetyGuard();
}

/**
 * typeof 가 반환하는 문자열들은 다음과 같다. 
 * undefined, boolean, number, string, object(host object, null, array는 'object' 문자열을 반환), symbol, function 
 */
const checkTypes = () => {
  console.log(`typeof 가 반환하는 문자열들은 다음과 같다.`);
  console.log(`undefined, boolean, number, string, object(일반 object, null, array는 'object' 문자열을 반환), symbol, function `);
  console.log(`typeof undefined: ${typeof undefined}`);  
  console.log(`typeof true: ${typeof true}`);   
  console.log(`typeof 42: ${typeof 42}`);    
  console.log(`typeof "42": ${typeof "42"}`);    
  console.log(`typeof {life: 42}: ${typeof {life: 42}}`);
 
  console.log(`typeof Symbol(): ${typeof Symbol()}`);  
  console.log(`typeof null: ${typeof null}`);    

  var a = null;
  console.log(`!a && typeof a: ${!a && typeof a}`);
  console.log(`typeof function a(){/* */}: ${typeof function a(){/* */}}`);  

  console.log(`typeof [1,2,3]: ${typeof [1,2,3]}`)
  console.log(`--------------------------------------------------------------------------------`);
}

/**
 * 함수의 길이(length)는 매개변수의 갯수이다. countFuncLength.length --> 2 
 */
const countFuncLength = (b,c) => { 
  console.log(`함수의 길이(length)는 매개변수의 갯수이다. countFuncLength.length --> 2 `);  
  console.log(`countFuncLength.length: ${countFuncLength.length}`);
  console.log(`--------------------------------------------------------------------------------`);
}

/**
 * typeof 연산자의 반환 값은 언제나 문자열이다.
 */
const checkTypeofOperator = () => {
  console.log(`typeof 연산자의 반환 값은 언제나 문자열이다.`);
  console.log(`typeof typeof 42: ${typeof typeof 42}`);
  console.log(`--------------------------------------------------------------------------------`);
}

/**
 * 값이 없는 변수의 값은 undefined이며, typeof 결과는 "undefined"다.
 */
const checkUndefined = () => { 
  console.log(`값이 없는 변수의 값은 undefined이며, typeof 결과는 "undefined"다.`);
  var a;
  console.log(`typeof a: ${typeof a}`);

  var b = 42;
  var c;

  b = c;

  console.log(`typeof b: ${typeof b}`);
  console.log(`typeof c: ${typeof c}`);
  console.log(`--------------------------------------------------------------------------------`);
}

/**
 * typeof만의 안전가드(safety guard)때문에 브라우저는 선언되지 않은 변수에 에러를 던지지 않는다.
 */
const checkTypeofSafetyGuard = () => {
  console.log(`typeof만의 안전가드(safety guard)때문에 브라우저는 선언되지 않은 변수에 에러를 던지지 않는다.`);
  var a;
  console.log(`typeof a: ${typeof a}`);
  console.log(`typeof b: ${typeof b}`);
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`--------------------------------------------------------------------------------`);
}

export default chapterOneMain;