//Initialising the dayDate element with the currentday id 
var dateDay = $("#currentDay");
//Initializing a variable d that calls function Date to fetch the current date
var d = new Date();
//Modifying the dateDay variable to display the current date
dateDay.text(d.toDateString());
//Initializing variable hours that fetches the current hour using the getHours() function
var hours = d.getHours();

//Initializing todoBox Elements using ids
var todoBox1 = $("#box1");
var todoBox2 = $("#box2");
var todoBox3 = $("#box3");
var todoBox4 = $("#box4");
var todoBox5 = $("#box5");
var todoBox6 = $("#box6");
var todoBox7 = $("#box7");
var todoBox8 = $("#box8");
var todoBox9 = $("#box9");
//Initializing variables for User Input, Box id and Index to store in the local sstorage array
var inputBoxId;
var inputReceived;
var inputIndex = 0;
var storedObjArr = [];

//Initialising an array of todoBoxes
var todoArray = [todoBox1, todoBox2, todoBox3, todoBox4, todoBox5, todoBox6, todoBox7, todoBox8, todoBox9];

//Defining a function that checks the hour and changes the color of the boxes according to the time
function colorChange() {
    if ((hours >= 9)&&(hours <= 17))
        { 
  switch(hours) {

    case 9 :
        todoArray[0].addClass("present");
          for(var i = 1; i < todoArray.length ; i++)
          {
            todoArray[i].addClass("future");
          }
    break;

    case 10 :
        todoArray[0].addClass("past");
        todoArray[1].addClass("present");
        for(var i = 2; i < todoArray.length; i++)
        {
            todoArray[i].addClass("future");
        }
    break;

    case 11 :
        for(var i = 0; i < 2; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[2].addClass("present");
        for(var i = 3; i < todoArray.length; i++)
        {
            todoArray[i].addClass("future");
        }
    break;

    case 12:
        for(var i = 0; i < 3; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[3].addClass("present");
        for(var i = 4; i < todoArray.length; i++)
        {
            todoArray[i].addClass("future");
        }
    break;

    case 13:
        for(var i = 0; i < 4; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[4].addClass("present");
        for(var i = 5; i < todoArray.length; i++)
        {
            todoArray[i].addClass("future");
        }
    break;

    case 14:
        for(var i = 0; i < 5; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[5].addClass("present");
        for(var i = 6; i < todoArray.length; i++)
        {
            todoArray[i].addClass("future");
        }
    break;

    case 15:
        for(var i = 0; i < 6; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[6].addClass("present");
        for(var i = 7; i < todoArray.length; i++)
        {
            todoArray[i].addClass("future");
        }
    break;

    case 16:
        for(var i = 0; i < 7; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[7].addClass("present");
        todoArray[8].addClass("future");
    break;

    case 17:
        for(var i = 0; i < 8; i++)
        {
            todoArray[i].addClass("past");
        }
        todoArray[8].addClass("present");
    break;
  }
  }
  else{

    for (var i = 0; i < todoArray.length; i++)
    todoArray[i].addClass("past");
  }
 
}


//Calling the colorChange function
// addPlaceholder();
colorChange();
retreiveInfo();

//Takes the user input when the save btn is clicked and stores the input in the local storage
$(".saveBtn").on("click", function(){
    event.preventDefault();
 inputReceived = $(this).prev().find("input").val();
 console.log($(this).attr("id"));
 console.log(inputReceived);
 inputBoxId = $(this).prev().find("input").attr("id");
console.log(inputBoxId);

 if(inputReceived === ""){
     return;
 }
else{
    for(var index =0 ; index < todoArray.length; index++)
    {
        var id = todoArray[index].attr("id");
        if(inputBoxId.valueOf() == id.valueOf())
        {inputIndex= index;
        break;
        }
    }

    var myStoredObj = {
        todoText : inputReceived,
        todoInd : inputIndex
    };

    storedObjArr.push(myStoredObj);
    myStoredObj = "";

     
    localStorage.setItem("storedObjArr", JSON.stringify(storedObjArr));
    retreiveInfo();
}
});

//Function to display todos from the local storage 
function retreiveInfo() {
    storedObjArr = JSON.parse(localStorage.getItem("storedObjArr"));
     if (storedObjArr !== null) 
     {   console.log(storedObjArr.length);
         for( var i = 0; i < storedObjArr.length; i++)
          {var j = storedObjArr[i].todoInd;
          var inputArr = storedObjArr[i].todoText;
          console.log(j);
          var k = j + 1;
          console.log(k);
          console.log(inputArr);
          $("#box" + k).attr("placeholder" , inputArr);
          }    
     } 
     else{
         storedObjArr = []
;     }
}










