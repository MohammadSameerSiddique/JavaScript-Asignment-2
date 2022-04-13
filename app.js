          //Assignment # 13-15
           // Arrays

// 1. Declare an empty array using JS literal notation to store student names in future.
// var studentName = [];

// 2. Declare an empty array using JS object notation to store student names in future.

// var studentName = [
//     { },
//     { },
//     { },
// ];

// 3. Declare and initialize a strings array.
// var string = ["cat","dog","duck","hen"];

// 4.  Declare and initialize a numbers array. 
// var number = [1,2,3,4,5,6];

// 5.  Declare and initialize a boolean array. 
// var boolean = [true,false];

// 6. Declare and initialize a mixed array.
// var mixed = ["Sameer",18,"HSC-II",false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

// document.write("<h2>"+ "Qualification"+ "</h2>");
// var qual = ["SSC","HSC","BCS","BS","BCOM", "MS", "M. Phil.", "PhD"];

// for(var i=0 ; i<qual.length ; i++){
//     document.write(qual[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.
// Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, 
// display the scores & percentages of student.

// var stuName = ["Sameer","Shahmeer","Siraj"];
// var score = [350,450,400];
// var totalMark = 500;
// var percentage1 = score [0] /totalMark*100;
// var percentage2 = score [1] /totalMark*100;
// var percentage3 = score [2] /totalMark*100;

// document.write("Score of"+" "+stuName[0]+" "+"is"+" "+score[0]+" "+ ". Percentage is :"+" "+percentage1+"%"+"<br>");
// document.write("Score of" +" "+stuName[1]+" "+"is"+" "+score[1]+" "+". Percentage is :"+" "+percentage2+"%"+"<br>");
// document.write("Score of" +" "+stuName[2]+" "+"is"+" "+score[2]+" "+". Percentage is :"+" "+percentage3+"%"+"<br>");

// 9. Initialize an array with color names. 
// Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & 
// add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. 
// Display the updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. 
// Display the updated array in your browser. 
// e. Delete the last color in the array. 
// Display the updated array in your browser. 
// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index.  
// Display the updated array in your browser. 
// g. Ask the user at which index he/she wants to delete color(s) & 
// how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. 
// Display the updated array in your browser.

// var color = ["red","green","blue","yellow"];
// document.write("Colors name :"+color);

// var color =prompt ("Enter the color name");
// var color1 = ["red","green","blue","yellow"];
// color1.unshift(color);
// document.write(color1)

// var color =prompt ("Enter the color name");
// var color1 = ["red","green","blue","yellow"];
// color1.push(color);
// document.write(color1)

// var color = ["red","green","blue","yellow"];
// color.shift();
// document.write(color);

// var color = ["red","green","blue","yellow"];
// color.pop();
// document.write(color);

// var color =prompt ("Enter the color name");
// var color = ["red","green","blue","yellow"];

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort method.

// var score = [320,230,140,480];
// document.write("Score of Students :"+score+"<br>");
// score.sort();
// document.write("Ordered Score of Students :"+score);

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.

// var cities =["Karachi","Islamabad","Quetta","Multan"];
// document.write("Cities list:"+"<br>"+"<br>"+cities+"<br>"+"<br>");

// var selectedCities = cities.slice(1,3);
// document.write("Selected Cities Name :"+"<br>"+"<br>"+selectedCities+"<br>");

// 12.  Write a program to create 
// a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];

// var a =["This","is","a","dog"];
// document.write("ARRAY :"+"<br><br>"+a +"<br><br>");
// var b = a.join(" ");
// document.write("STRING :"+"<br><br>"+b);

          //Assignment # 17-20
          //Array and Loop 
 

// 1. Declare and initialize an empty
//    multidimensional array.
//    (Array of arrays)

// var arr = [
//     [   ],
//     [   ],
//     [   ],
// ];

// 2. Declare and initialize a multidimensional 
//    array representing the following matrix:

// var matrix =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(var i=0; i<3; i++){
//     for(var a=0; a<4; a++){
//    document.write(matrix[i][a] +" ");    
//     }
//    document.write("<br>");    
// }
// 3. Write a program to print numeric counting from 1 to 10.

// for (var a = 1; a <= 10; a++){
//   document.write(a + "</br>");
// }
 
// 4.  Write a program to print multiplication table 
//     of any number using for loop. Table number & 
//     length should be taken as an input from user.

// var tabNumber = +prompt("Enter Table Number");
// var tabLength = +prompt("Enter Table Length");

// document.write("Multiplication table of " +"  "+  tabNumber  +"  "+ "Length" +"  "+  tabLength + "<br>");

// for (var a = 1; a <= tabLength; a++) {
//   document.write( tabNumber + " " + "x" + " " + a + " = " + tabNumber * a + "<br />" );
// }

// 5. Write a program to print items of the following array using for loop: 
//    fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple","banana"," mango","orange","strawberry"];
// for(var a=0 ; a<=4 ; a++){
//    document.write(fruits [a] + "<br>");
// }
// document.write("<br>");

// document.write("Element at index is 0 apple" + "<br>");
// document.write("Element at index is 1 banana" + "<br>");
// document.write("Element at index is 2 mango" + "<br>");
// document.write("Element at index is 3 orange" + "<br>");
// document.write("Element at index is 4 strawbrrey" + "<br>");

// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("Counting :" + "<br>" + "<br>" );
// for(var a=1 ; a<=15 ; a++){
//     document.write( a +","  +" ");
// } 
// document.write("<br>"+"<br>");

// document.write("Reverse :" + "<br>" + "<br>" );
// for(var b=10 ; b>=1 ; b--){
//     document.write(b +","  +" ");   
// }
// document.write("<br>"+"<br>");


// document.write("Even :" + "<br>" + "<br>" );
// for(var c=0 ; c<=20 ; c++){
//     if(c % 2==0){
//     document.write(c +","  +" ");        
//     }
// }
// document.write("<br>"+"<br>");


// document.write("Odd :" + "<br>" + "<br>");
// for(var d=1 ; d<=20 ; d++){
//     if(d % 2!=0){
//     document.write(d +","  +" ");        
//     }
// }
// document.write("<br>"+"<br>");


// document.write("Series :" + "<br>" + "<br>");
// for(var e=1 ; e<=20 ; e++){
//     if(e % 2==0){
//     document.write(e +"k" +","  +" ");        
//     }
// }

// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array.

// var search = prompt ("Welcom to Our Bakery");
// var items = ["Cake","Apple pie","Cookie","Chips","Patties"];

// var isMatch = false;

// for (var i = 0; i < items.length; i++) {
//   if (search === items[i]) {
//     document.write(search +" "+ "is available in our bakery");
//     isMatch = true;
//     break;
//   }
// }
// if (isMatch === false) {
//     document.write("We are sorry." + search +" "+ "is not available in our bakery");
// }

// 8. Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12]
 
// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];

// for(var i=0; i<arr.length ;i++){
//     if (arr[i]>=largest) {
//       largest=arr[i];
//     }
// }
// document.write("Array items:" + arr + "<br>");
// document.write("The largest number is"+" "+largest);

// 8. Write a program to identify the smallest number in the given array. 
// // A = [24, 53, 78, 91, 12]

// var a = [24, 53, 78, 91, 12];
// var smallest = a[0];

// for(var i=0; i<a.length ;i++){
//     if (smallest > a[i]) {
//       smallest=a[i];
//     }
// }
// document.write("Array items:" + a + "<br>");
// document.write("The smallest number is"+" "+smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(var c=5 ; c<=100 ; c++){
//      if(c % 5==0){
//      document.write(c +","  +" ");        
//      }
// }

