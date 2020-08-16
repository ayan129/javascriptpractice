// chapter # 1 practice
// alert("thank you for your input !!");

// alert("my mobile number is 03042973356");

// chapter no 2 practice variable for string
// var name = "ayan"
// alert(name) 
//  var countary = "pakistan"
//  alert( countary)

// chapter no 3  4  and 5 practice variable for number

// var a = 2;
// var b = 3;
//  var c = a + b
// alert(c)

// var a = 2;
// var b = "ayan";
//  var c = a + b //so here contination applied !!
// alert(c) 


// chapter no 6 practice maths experssion increment and decrement  operators

//  var a = 5
//  var b =a++ //abhe a++ ka mtlb he ke 1 num add hugaya he but show wo phele  a ke value karaiga qk a++ haina uske bdd ++ lekin jab uske bd usk print kraige to wo usme 1 add huwa huga
// // alert(a) //ab jese humne yaha a print krwaya to usme 1 add huwawa tha
// // alert(b) //ab jese humne ise print krwaya to b me phele a he ayega qk yeh a++ tha
//  var c= ++a 
//  alert(c)   // ab jese yaha phele ++ huwa he to yaha simple 1 add hukr ayega
// NOTE : bilkul aise trha decrment kelye kam krega which is called decrement operators

// chapter no 7 practice maths experssion algebric experssion (bodmas rule) operators


// var a = 2 + 3 * 5 // js me hamesha bodmas rule chlta he iska mtlb phely mutliply huga yaha phr addition
// alert(a)
//  var b = 6 * 4 + 12
//  var c = b
//  alert(c)
//  var x = (2 * 4) * 4 + 2;
//  alert(x) 
// chapter no 8  practice maths experssion algebric experssion Concatenating text strings
//   var a = 2
//   var b = 4
//   var c = 6
//   var d = 2 + 4 + 6
//   alert(d)

// chapter no 9  prompts  practice


//   var a = prompt("Enter your name","your name is ")
//   var b = a + 10 //prompt hamesha string value leta he .
//   alert(b)


//   var a = +prompt("Enter your number","your num is ")
//   var b = a + 10 //prompt ko number pr krnekelye hume usme + ka sign lagana huga .
//   alert(b)
//    var a = "enter you mobile number"
//    var b = "you mobile number is"
//    var c = +prompt(a,b)
// console.log(c)


// chapter no 10  if statements  practice

//  var a = 32 
//  if (a > 10) { 
//      alert("your number is greater then 10");

//  }
//  else{
//      alert("your number is less then 10")
//  }
//  var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }
//  else{
//      alert("incorrect !!")
//  }

// var name = prompt("enter your name")
// if (name === "ayan") //jab bhe srf aik chz compare krani huge to === equal dalna huga
//{
//     alert("your name is coreect !!")
//     }

//     else   {
//         alert("incorrect !!")
//     }

// var age = +prompt("ENTER YOUR AGE")

// if (age >= 19)
// {
//     alert("your are teenager")

// } else {
// alert("you are not teenager")    
// }

// chapter no 11  comparison operators  practice

// //&& and operator ka mtlb huta he ke  jo condition hune if me de he wo 2unu true huna lazmi hai.

//  var entrytest = prompt("ENTRY TEST RESULT")

// var interper = +prompt("ENTER INTER PERCENTAGE")

//  if (interper > 70  &&  entrytest == "pass")  // do dafa == dalega ya === ql neche else bhe he


//   { 
//      alert("you are able to take admission in this uni")
// }
// else{
//     alert("you are not able to take admission in this uni")
// }

// || operators not operators khelate he isme 2 conditions hute he usmese aik true huna zrori hute he


// var entrytestnum = +prompt("entry test number")
// var interpercentage = +prompt("inter percentage")
// var grade = prompt("enter your grade")
// if (entrytestnum > 80 || interpercentage == 70 && grade == A ) {
//     document.write("you are able to take admission in this uni")

// } else {
// document.write("you are not able to take admission in this uni")    
// }

// chapter no 12 AND 13  else if statemnets  practice

// var grade = prompt("ENTER YOUR PERCENTAGE")
// if (grade > 80 && grade < 100 ) {
//     alert("A+")

// } 
// else if(grade > 70 && grade < 80 )
//  {
//     alert("A")
// }
// else if(grade > 60 && grade < 70 ) {
//     alert("B")
// }
// else if(grade > 45 && grade < 60 ) {
//     alert("C")
// }
// else if(grade > 33 && grade < 45 ) 
// {
//     alert("C")
// }
// else if(grade > 0 && grade < 33 ) {
//     alert("FAIL")
// }
// else{
// alert("YOU ENTER A WRONG PERCENTAGE")
// }

// chapter no 14   if statemnets nested  practice


//   if (c === d) {
//      if (x === y) {
//      g = h;
//      }
//      else if (a === b) {
//      g = h;
//      }
//      else {
//      e = f;
//      }
//      }
//      else {
//      e = f;
//      }

// chapter no 15   Array  practice

// var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"] //aray ke counting 0 se start hute he jese yaha 0 print krwaige to ayan hujaiga is hisab se 2 pr hira .
// alert(groupnames[4])


//  chapter no 16   Array  names adding and removing from rhs practice




//  var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"]  

//  groupnames.push("khadija") //push kuch bhe add karskta he right hand se

//  alert(groupnames)

// var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"]  

// groupnames.pop("remove") //pop kuch bhe remove karskta he right hand se

// alert(groupnames)

//  chapter no 17   Array  names adding and removing from lhs practice


//  var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"]  

//  groupnames.shift("khadija") //shift first wale ko remove krdeta he

//  alert(groupnames)

//  var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"]  

//  groupnames.unshift("khadija") //unshift kuch bhe add karskta he right hand se

//  alert(groupnames)

//  var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"]  

//  groupnames.splice(2,2,"khadija","mufs") //splice kuch bhe add karskta he jo hume usko num dege
//  alert(groupnames)

//  var groupnames = ["ayan", "hassan", "hira", "aliza", "malaika"]  

//  groupnames.slice(2,2,"khadija","mufs") //slice kuch bhe remove karskta he jo hume usko num dege

//  alert(groupnames)


// ch 18 for loop pratice

// for (i = 0 ; i <=10; i++ ){

//     document.write("ayan" + "<br>"); //yeh simple for loop ka scene he

// }
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

//  if (cityToCheck === cleanestCities[0]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[1]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[2]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[3]) {
//      alert("It's one of the cleanest cities");
//      }
//      else if (cityToCheck === cleanestCities[4]) {
//      alert("It's one of the cleanest cities");
//      }
//           else {
//      alert("It's not on the list");
//      }


// for (i = 1 ; i<5 ; i++)
// var i;
// for(i = 0 ; i < 10 ; i= i+2 ) { //isme humne even number print krwai log me
// console.log(i)
// }


// ab hum odd number print krwaige looop ke zariya


// for (i = 1 ; i<5 ; i++)
// var i;
// for(i = 1 ; i < 10 ; i= i+2 ) { 
// console.log(i)
// }

// table jaisa kuxh banaya humne

// var table = +prompt("enter number for multiplication table")

// var i;
// for (i = 1; i < 11; i++){

// document.write(table + " " + "x" + " " + i + " " + "=" + " " + table * i + "<br>") //kbhe bhe document.write me hum var ko double quotes me n h rkhege
// }

// array ke length pata krnekelye .length use krte he hum

// var names = ["ayan","hassan","hira"]

// alert(names.length)



// var names = ["ayan","hassan","hira"]
// var i;
// for (i = 0 ; i <names.length; i++){
//     document.write(names[i] + "<br>") //names krenge srf to uski length ayege jab hum array ke value dege to specific name aygea uske number ke hisaab se names[2] duga to hira ka name ayega

// }


// jab hum array me loop me if condition dena chaeh to yeh huga


// var cities = ["karachi", "islamabad", "faisalbad", "lahore"];
// var i;
// for (i = 0; i < cities.length; i++) {
//     if (cities[i] === "lahore") {

//         alert(cities[i] + "is a cleanist city") // yaha loop break hujata hai

//     }
// }



// var cities = ["karachi", "islamabad", "faisalbad", "lahore"];
// var i;
// for (i = 0; i < cities.length; i++) {
//     if (cities[i] === "islamabad") {

//         alert(cities[i] + " " + "is the capital of pakistan") // yaha loop break hujata hai

//     }
// }

// break loop example

// var i;
// for(i=1;i>0;i++){
//     console.log("its a infinite loop")
// }

// var i;
// for(i=1;i>0;i++){
//     if(i === 32){
//         break
//     }
//     console.log("its a infinite loop")
// }

// yaha humne break krdeya

// var cities = ["karachi", "islamabad", "faisalbad", "lahore"];
// var i;
// for (i = 0; i < cities.length; i++) {
//     if (cities[i] === "karachi") {

//         alert(cities[i] + " " + "is the capital of pakistan") // yaha loop break hujata hai
// break
//     }
// }

// ch number 20 for nested loop practice

// var i;
// var j;
// for(i = 1 ; i < 4 ; i++){
//     for(j=1 ; j<4 ; j++){  //isme hum log ka phela for ka loop chlega phr jouske andar haina wo utne time phele chlega phr dubara uper jakar phr wo uske andar wala utne time chlega is trha loop chlta rhega jab tk he


//         document.write("AYAN SHABBIR" + "<br>")
//     }
// }


// ab hum nested loop ke zariye first name ko last name ke sath bnaige

// var fn = ["ayan","hassan","hira"];
// var ln = ["shabbir"];
// var i;
// var j; 
// for(i = 0 ; i < fn.length ; i++){
//      for(j = 0 ; j < ln.length ; j++){
//          console.log(fn[i] + " " +  ln[j])
//      }  


// }

// 1 se 100 tk krwaige nested lop ke zriye


// var i;
// var j;

// for (i=1 ; i <= 100 ; i=i+10){
//     for(j=i ; j < i+10; j++){

//         document.write(j + " " );
//     }
//     document.write("<br>")
// }


// we design triangle through nested loop

// var i;
// var j;
// for(i = 0 ; i<10 ;i ++){

//     for(j = 0 ; j < i ; j++){
//         document.write("*" )
//     }
//     document.write("<br>")
// }

// revrse word krege ab hum

// var word = prompt("enter any word");
// var check  = "";
// var i;
// for (i = word.length - 1 ; i>=0 ; i--){

// check += word[i]
// }
//  if (word == check) {
//      alert(word + " is a reverse word")
//  }
//  else {
//      alert( "its not a reverse word")
//  }

// var word = prompt("enter any word");
// // var check  = "";                                 
// var i;
// for (i = word.length - 1 ; i>=0 ; i--){

//                 document.write(word[i])
// }

// var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];    //iska scene yeh he ke iske andar 7 array he jab hum arraylenth -1 krenge to wo reverse se 6 array lega -2 krege to 5 array chelga to yeh scene he

// for (i = array1.length - 1 ; i>=0 ;i-- ){

//     console.log(array1[i])
// }

// var word = prompt("enter any word");
// var check = "";                                // word = oppo  
// var i;
// for (i = word.length - 1 ; i>=0 ; i--){

//               check += word[i]            // word[i] = oppo

//             }                             // check = oppo

//             if (word   === check  ){
//                 alert(word + " " +  "is a polindrnam word")
//             }
//             else{
//                 alert(word + " " + "is  not a polindrnam word")
//             }



// calculator

// var value1 = +prompt('ENTER YOUR FIRST VALUE')
// var sign =  prompt('ENTER YOUR SIGN')
// var value2 = +prompt('ENTER YOUR SECOND VALUE')

// if (sign === '+'){

//     alert((value1+value2))
// }
// else if (sign === '-'){

//     alert(value1-value2)
// }
// else if (sign === '*'){

//     alert(value1*value2)
// }
// else if (sign === '/'){

//     alert(value1/value2)
// }
// else if(sign === '%'){
//     alert(value1/value2*100)
// }
// else if(sign === '&'){
//     alert(value1%value2)
// }
// else {
//     alert("syntax error")
// }


// ch no 21 and 22  for practice :


// upper case me dale name ya lower case me name dalna chiye is bre me bat hugi





// var entrcity = prompt("ENTER CITY")

// // entrcity = entrcity.toUpperCase()


// var city = ['KARACHI', 'LAHORE', 'ISLAMABAD', 'QUETTA'] // AGAR HUM UPPER TO UPPER CASE LERHE HE TO NECHE SAB LOWER ME LIKHENGE


//     if (city === entrcity) {


//         alert('city has found')

//     } 
//     else
//      { 
//          alert('city has not found')
//          }

// double spaces pata krnekleye aik application banarhe he



// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") 
//     {
//         alert("double space found !!");


//     }
// }

// ch no 23 and 25  for practice :


// koi bhe para me word change krane hu to  
// var text = 'The New Yorker magazine doesnt allow the phrase World War II  They say it should'
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0,i) + "ayan" + text.slice(i + 12); // ab jo  text.slice(0,i) he ab yeh text ke andar jo para he usko zero se i tk lejaygea ab i me he world war || aur itne hisse ko chur kr wo text.slice(i + 12) ab yeh he ke jo uski jaga add krwarhe he usko i se lekr kitne tk he uski range
//         alert(text)
//     }
// }


// var para = 'hye !! my name is ayan and my age is 20 and i am studying in smi university'
// for (var i = 0;i<para.length; i++){
//         if(para.slice(i,i+4) === 'ayan'){
// para = para.slice(0,i) + 'hassan' + para.slice(i + 8)
// alert(para)
//         }

//         else if(para.slice(i,i+2) === '20'){
//     para = para.slice(0,i) + '21' + para.slice(i + 4)
//     alert(para)
//         }


// ab simple index ke method ko use krek chezo ko search krenge

// var para = 'hye !! my name is ayan and my age is 20 and i am studying in smi university'
// var indexnum = para.indexOf('name')

// var firsttext = para.slice(0,indexnum)
// var replacingtext = ('class')
// var thirdtext = para.slice(indexnum+5)
// alert(firsttext+replacingtext+thirdtext) 

// ab simple emthod replace ke hum yeh sab krskte hai

// var para = 'hye !! my name is ayan and my age is 20 and i am studying in smi university'
// var repl =  para.replace('name','class')
// alert(repl)



// ab agar aik para buhat se jagah likhawa hai  aik word usko humne replace krana he to hum us word ko ase likhenge for example ayan k karana he to /ayan/g to is trha jaha jaha ayan huga waha replace hjaiga

// var para = 'hye !! my name is ayan and my age is ayan and i am studying  ayan in smi university'
// var repl =  para.replace(/ayan/g,'hira')
// alert(repl)

// ch no 24 for practice


// var entrcity = prompt("ENTER CITY")

// var firstch = entrcity.slice(0,1)
// firstch = firstch.toUpperCase()
// var secndchr = entrcity.slice(1)
// secndchr = secndchr.toLowerCase()
// entrcity =firstch+secndchr;

// var city = ['Karachi', 'Lahore', 'Islamabad', 'Quetta'] // AGAR HUM UPPER TO UPPER CASE LERHE HE TO NECHE SAB UPPER ME LIKHENGE TO WO LOWER ME BHE CHLEGA

// console.log(entrcity)

// for (var i = 0; i < city.length; i++) {

//     if (city[i] === entrcity) {


//         alert('city has found')

//     } else { alert('city has not found') }
// }



// ch no 26 for practice :


// rouding ka scene he

// var scoreAvg = Math.round(1.5);
// alert(scoreAvg)

// var scoreAvg = Math.ceil(.000001); // ceil me age ke traf num rounda of huta hai
// alert(scoreAvg)

// var scoreAvg = Math.floor(23.23); // floor me peche ke traf num round of huta hai.
// alert(scoreAvg)

// random number seekhenge

// ch no 27 for practice :

// var randomNumber = Math.random();
// alert(randomNumber) * 2




// var firstname = prompt('enter 1st player name')
// var secndname = prompt('enter second player name')
// var toss=Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 0){
//     alert ('1st player won the toss')
// }
// else {
//     alert('2nd player won the toss')
// }



// ch no 28 for pratice :

//  var currentAge = prompt("Enter your age."); 
//  var yearsEligibleToVote = currentAge - 18;
//  alert(yearsEligibleToVote)

//  var profit = "200" - "150";
//  alert(profit)

//   var currentAge = prompt("Enter your age."); 
//   var qualifyingAge = parseInt(currentAge) + 1;
//   alert(qualifyingAge)

// ch no 29 for practice Converting strings to numbers, numbers to strings 

// conversion of string in to number

//  var integerString = "24" 
//  var num = Number(integerString);
//  alert(num)

//  var floatingNumString = "24.9876"; 
//  var num = Number(floatingNumString);
//  alert(num)

// conversion of number in to string

//  var numberAsNumber = 1234; 
//  var numberAsString = numberAsNumber.toString();
//  alert(numberAsString)


// ch no 30 for practice Controlling the length of decimals


// var price = prompt("price")
// var taxrate = prompt("taxrate")
// var total = price + (price * taxrate);
// var prettyTotal = total.toFixed(2);
// alert(prettyTotal)


// ch no 31 for practice Getting the current date and time

// var rightNow = new Date(); // jab hume date pata krni hun to hum use krt he var etc = new date() is trha hume current date pata chlti hai

// alert(rightNow)


// var rightNow = new Date();

// var theday = rightNow.getDay(); // ab us dtae se hume day btadega to ajj hemonday to is hisab se wo array ka num dega qk 1 qk monday se start huta haina

// alert(theday)


// var rightNow = new Date();

// var theday = rightNow.getMonth(); // ab us month dalege se hume month btadega to ajj 6 mahina  to is hisab se wo array ka num dega apko 6


// alert(theday)


// var rightNow = new Date();

// var theday = rightNow.getHours(); // ab us dtae se hume day btadega to ajj hemonday to is hisab se wo array ka num dega qk 1 qk monday se start huta haina

// alert(theday)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday)

// ch no 32  Extracting parts of the date and time for practice




//  var d = new Date(); 
// var currentMonth = d.getMonth();
// alert(currentMonth)


//  var d = new Date(); 
//  var currentMonth = d.getMinutes();
//  alert(currentMonth)

//  var d = new Date(); 
//  var currentMonth = d.getSeconds();
//  alert(currentMonth)

// ch no 33  Specifying a date and time for practice

// var dob = new Date(prompt("enter your birth date","jan 1,1970"))
// var dobmili = dob.getTime
// var today = new Date()
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accurage = Math.floor(diff/(1000*60*60*24*30*12))
// alert(accurage)


// ch no 34  Changing elements of a date and time for practice

// var date = new Date()
// var newdate = date.setFullYear(2000) // set of date se hum koi bhe date dal skte hai

// alert(date)

// var date = new Date()
// var newdate = date.setHours(3) // set of date se hum koi bhe date dal skte hai

// alert(date)

// var date = new Date()
// var newdate = date.setMinutes(05) // set of date se hum koi bhe date dal skte hai

// alert(date)


// ch no 35 ch no 36 and ch no 37 and ch no 38  Functions for practice,Functions: Passing them data,Functions: Passing data back from them,Local vs. global variables

// function add(a,b,c){     // add(a,b,c) yeh perimeter me humne deya ke is pr kam krna he
//     alert(a+b+c)    // (a+b+c) aur is perimeter me hum yeh dete he ke kia kam krna he
// }
// add(4,3,6)    //add(4,3,6) aur is perimeter me hun yeh dete he ke kiske accordingly kam krna hai



// function add(a,b,c){
//     // alert(a+b+c)
//     var y = 23;       // ab humne yaha var declare to krwayawa hai lekin yeh return hukr nh aya qk local me he
// }
// // add(4,3,6)
// alert(y)


// var y = 23;       // ab humne yaha var declare hugya qk yeh global he out side the pheritnses hai.


// function add(a,b,c){
//     // alert(a+b+c)

// // add(4,3,6)
// }
// alert(y)

// function calculator(){

// var value1 = +prompt('ENTER YOUR FIRST VALUE')
// var sign =  prompt('ENTER YOUR SIGN')
// var value2 = +prompt('ENTER YOUR SECOND VALUE')

// if (sign === '+'){

//     alert((value1+value2))
// }
// else if (sign === '-'){

//     alert(value1-value2)
// }
// else if (sign === '*'){

//     alert(value1*value2)
// }
// else if (sign === '/'){

//     alert(value1/value2)
// }
// else if(sign === '%'){
//     alert(value1/value2*100)
// }
// else if(sign === '&'){
//     alert(value1%value2)
// }
// else {
//     alert("syntax error")
// }

// }

// calculator();

// function multiply(a,b){

//     return a * b
// }
// alert(multiply(6,2))




// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     } 
//     else if(opr === "*"){
//         return num1 * num2
//     }else{
//         return "Incorrect Operator!"
//     }
// }

// var result = calc(5,"-",5);
// var result1 = calc(4,"*",6);
// var result2 = calc(4,"$",9)
// console.log(result)
// console.log(result1)
// console.log(result2)

// ch no 39 and ch 40 switch statements for practice switch statements: How to complete them

// var age = prompt("enter your age")

// switch(age){
//     case "20" :
//                alert("its ayan's age")
//                break;
//     case "14" :
//                alert("its your cousin <3 age")
//                break; 
//     default :
//                alert("neither your nor her !!")                     
// }

// var dayOfWk = prompt("enter day","Mon")
// switch(dayOfWk){
//     case "Sat" :
//                 alert("Whoopee");
//                 break;
//     case "Sun" :
//                 alert("Whoopee");
//                 break;
//     case "Fri" :
//                 alert("TGIF!");
//                 break;
//     default:

//                alert("Shoot me now!");
// }

// ch no 41  while loops for pratice

// var entertblnum = prompt("enter table number")
// var i = 1
// while(i < 11){
//     alert(entertblnum + "x" + i + "=" + entertblnum*i)
//     i++;
// }


// ch no 42 do  while loops practice

// var entertblnum = prompt("enter table number")
// var i = 1
// do{
//     alert(entertblnum + "x" + i + "=" + entertblnum*i)
//     i++;
// }while(i < 11);

// ch  no 43 practice Placing scripts

// already done in html 

// ch no 44  Commenting 

// already done 

// ch no 45 with practice Events: link

// <a href="#" onclick="var a = 'ayan'; alert(a)">click here for alert name ayan</a>

//  <a href="#" onclick="calculator()">click here for table number</a> 

// ch no 46 with practice  Events: button

// function clickBtn(){
//     alert("Click")
// // }

// <button onclick="clickBtn()">Click</button>

// ch no 47  Events: mouse practice

// {/* <img onmouseout="alert('Out')"   onmouseover="alert('Over')" width="100" src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img> */}
// hum mouse ko uper lejaige to alert hujaiga on mouse out se wo out dedega


// ch no 48 Events: fields practice



// {/* <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"> */} //ke jab hum input pr click kren to iska colour change hujai

// {/* <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';" onBlur="this.style.backgroundColor='yellow';"></input> */}

// ch no 49  Reading field values with practice


// function  getage(){
//       var age = document.getElementById("age")   //yeh 2sra process he ke jo getelementby id krke uski id lege 
//       alert(age.value)             
//     //   age.value = ""         // jab hum chahey ke jo num he wo hat jai
// }



// function getname(){
// var ayan = document.getElementById("ayan")
// alert(ayan.value)


// }

// function getage(age){
//       var ayan = document.getElementById("ayan")
//       ayan.value += age;

// versatitile calculator js coding


// function getvalue(value){
//        var a = document.getElementById("val")
//        a.value += value;

// }
// function clearresult(){
//  var b = document.getElementById("val")
//  b.value = " "

// }
// function getresult(){
// var c = document.getElementById("val")
// c.value = eval(c.value)

// }















// ch no 50 setting feild values for practice

// function  getage(){
//       var age = document.getElementById('age');
//       // alert(age.value)
//       age.value = "ayan"       // jo hum chahey wo num leskte hai
// }
// getage()


// versatile calculator





// ch no 51 Reading and setting paragraph text


// function readmore(){         // ab isme var text ke andar hum kuxh bhe likh sakte he hum chahe pori html ke coding krkst ehe

//   var text = "Sindh Madressatul Islam University (SMIU) is a chartered University duly  recognized by the Higher Education Commission of Pakistan. It is one of the oldest institutions in South Asia, which started as a school in 1885, became a college in 1943 and a university in February 2012." 
//   var paragraph = document.getElementById('oppo')
//   paragraph.innerHTML = text

// }

//  ch no 52  Manipulating images and text practice

// function none(){
//        var img = document.getElementById('nothing')
//        img.className   += "  ayan"

// }

// ch no 53  Swapping images 


// function change(){
//     var omo = document.getElementById('ayan')
//      omo.src = 'data:image/jpeg;base64,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'
// }
// function againchange(){
//     var omo = document.getElementById('ayan')
//     omo.src = 'data:image/jpeg;base64,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'


// }

//ch no 54 Swapping images and setting classes

// already done

// ch no 55 setting styles  

// function change(){
//     var omo = document.getElementById('ayan') mouse lejana me image badi hujati hai
//      omo.style.width = '100%'
// }

//  

// ch no 56 Target all elements by tag name


// var pera = document.getElementsByTagName('p')
// pera[2].style.color = 'red'

//ch no 57  Target some elements by tag name

//  var t = document.getElementById("table9"); 
//  var cells = t.getElementsByTagName("td"); 
//   for (var i = 0; i < cells.length; i++) { 
//      cells[i].style.backgroundColor = "pink"; 
//      }


// function timer(){
//     console.log('running..')
// }

// setInterval(timer,1000)


// function timer(){
//     console.log('running..')
// }

// setTimeout(timer,2000)


// var count = 0
// var interval;
// function timer(){       // timer kelye phele aik function bnana prta hai
//     count++
//     console.log(count)
// }

// interval = setInterval(timer,1000)   // phir set interval ke andar perimeter me 2 cheze dete h aik to wo jis function ka name aur aik wo ke kis speed se wo chalen


// // setTimeout(timer,5000)


// setTimeout(function(){
//  clearInterval(interval)   // jaha apko rukna he to hum time out ke andar set time out lgadete he aik permimietr me pora function dalte he aur aik me utne secons jaha tk wo stop hujai mtlb 5 dege to 5 pe jakar rukjaiga


// },2000)


// var prop = 0 ;
// var propHeading = document.getElementById('exam')
// var interval;

// function time(){
//      prop++
//      propHeading.innerHTML = prop ;
//      console.log(prop)


// }

// interval = setInterval(time,1)

// function stop(){
//     clearInterval(interval)

// }

// setTimeout(stop,1000)

// introduction to Dom !!


// console.log(document.childNodes[1].childNodes[0].childNodes[1])

// var a = document.getElementById('2')
// console.log(a.nodeName)


// var a = document.getElementById('no1')
// console.log(a.childNodes)

// pratice of todo app


// function addtodo(value){
//     var todoitems = document.getElementById('todo-item')
//     // console.log(todoitems.value)
//     todoitems.value += value;


// }

// var list  = document.getElementById('list')

// function addtodo(){
//     var todoitems = document.getElementById('todo-item')
//     console.log(todoitems.value)
// }





// // var li = document.createElement('li')
// // var text = document.createTextNode('ayan')
// // li.appendChild(text)

// console.log(li)


// var list = document.getElementById('list')

// function addtodo() {
//     var todoitems = document.getElementById('todo-item')
//     var li = document.createElement('li')
//     var text = document.createTextNode(todoitems.value)
//     li.appendChild(text)   //ab humne upper list target keyawa he jo html me he ab hum usko append krdege

//     var dltbtn = document.createElement('button')
//     var dlttext = document.createTextNode('Delete')

//     var editbtn = document.createElement('button')
//     var edittext = document.createTextNode('edit')

// editbtn.appendChild(edittext)
// li.appendChild(editbtn)
// list.appendChild(li)


//     dltbtn.appendChild(dlttext)
//     dltbtn.setAttribute("onclick","deleteitem(this)") // aur isme hum  'iske andar ase jo bhe likhenge wo vge jaiga' // this krneke ke bd line no 1204 me hum aik koi sa bhe perimiter pass krdeege joke neche bhe wuhe name se krna huga isse wo pora khud uth kr ajaiga\


// editbtn.setAttribute("onclick","edititem(this)")

//     li.appendChild(dltbtn)

//     list.appendChild(li)



//     todoitems.value = " "

// }
// function deleteitem(ops){

// // console.log(ayan)
// ops.parentNode.remove()
// }


// function deltall(){

// list.innerHTML = "  "         // inner html use krengey jab bhe hune waha se kuxh nikalna huga


// }

// function edititem(ed){
// console.log(ed.parentNode.firstChild.nodeValue)

// var val = prompt("ENTER EDIT VALUE",ed.parentNode.firstChild.nodeValue)
   
// ed.parentNode.firstChild.nodeValue = val


// }

// var ol = document.getElementById('listtitems')

// function addtodo(){
//  var todooitems = document.getElementById('todo-items')
// // alert(todooitems.value)

// var lii = document.createElement('li')
// var liitext = document.createTextNode(todooitems.value)
// lii.appendChild(liitext)
// ol.appendChild(lii)

// todooitems.value = " "
// var dltbtn = document.createElement('button')
// var dltbtntext = document.createTextNode('Delete')
// dltbtn.appendChild(dltbtntext)
// lii.appendChild(dltbtn)
// ol.appendChild(lii)


// var editbtn = document.createElement('button')
// var editbtntext = document.createTextNode('Edit')
// editbtn.appendChild(editbtntext)
// lii.appendChild(editbtn)
// ol.appendChild(lii)



// dltbtn.setAttribute("onclick","fundltbtn(this)")

// editbtn.setAttribute("onclick","funeditbtn(this)")
// }

// function  fundltbtn(fdb){
  
//   fdb.parentNode.remove()

// }

// function  funeditbtn(feb){
// var editval = prompt("Enter Your New Task",feb.parentNode.firstChild.nodeValue)
// feb.parentNode.firstChild.nodeValue = editval
// }
// function deltall(){

// ol.innerHTML = "  "

// }


//objects in  javascript

// var Weeks = {
//   one : "monday",
//   second : "Tuesday",
//   third  : "wednesday",
//   fourth : "thursday",
//   fifth : "friday",
//   sixth : "Saturday",
//   seven : "Sunday"
// }

// Weeks.eight = "month"  // . ke bd jo derehe he wo iski property he aur uske bd wo uski value he

// console.log(Weeks)

// var myQuestions = [
//   {
//       question : "what is your name",
//       answer : {
//           a : "ali",
//           b : "ghous",
//           c : "basit"
//       },
//       correctAnswer : "c"
//   },
//   {
//       question : "what is your age",
//       answer : {
//           a : 15,
//           b : 12,
//           c : 16
//       },
//       correctAnswer : "b"
//   },
// ]

// console.log(myQuestions)

// var nameobject = {
//    name : 'ayan' ,
//    name1 : 'hassan' ,
//    name2 : 'hira'

// }

// console.log(nameobject.name2)  // ab hum yaha ase dal kr specific value bhe pata krskte he

// object constructor

// function Students(name,rollnum){
//      this.name = name 
//      this.rollnum = rollnum
// }

// var student1 = new Students("ayan",292)
// var student2 = new Students("hassan",232)
// var student3 = new Students("hira",282)
// var student4 = new Students("aliza",262)
// var student5 = new Students("malaika",222)


// object prototypes

// function Students(name,rollnum){
//      this.name = name 
//      this.rollnum = rollnum
//      this.getname = function (){  // ab agar humne use return krana he to ase krna pdega aur wo name us variable ke sath ajaiaga

//          return this.name;
//      }
// }

// var student1 = new Students("ayan",292)
// var student2 = new Students("hassan",232)
// var student3 = new Students("hira",282)
// var student4 = new Students("aliza",262)
// var student5 = new Students("malaika",222)


// // alert(student3.getname())

// console.log("roll" in student3)   // yeh hum ase check krte he ke yeh property user ne dali he ya nh console me agar true agya to smjhege han agye he wrna nh false aya t nh


 























