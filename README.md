# DayScheduler
In this Homework, 
1. The html page:
   a. contains a header and a sticky footer.
   b. a table with 3 rows and 9 columns(using BootStrap Grid)
   c. the first row holds time, the second row is an input field which changes color according to the current time(        explained in js file) and the third column contains save buttons to  save the user input.
2. The CSS page :
   a. I have changed the colors and styles for each class
3. In the JS file, I have primarily used jQuery and :
   a. created a variable that contains the current day and date and is displayed in the header
   b. initialized todobox elements using ids and put them in an array
   c. defined and called colorChange() function that uses switch-case statements to change the color of the time block indicating past(grey), present (red) and future (green) 
   d. defined and called a retreiveInfo() function that gets stored user input from local storage and displays it in the time blocks
   e. added a onclick function that takes the user input from the time block and stores it in the local storage 