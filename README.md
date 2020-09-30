# listPaginationFiltering

list_pagination_and_filtering
Take a list of 54 students and create page links to display 10 students at a time.

For this project I used DOM manipulation, or Document Object Model manipulation to dynamically hide and show HTML elements.

My HTML list contains 54 "div"s of students, containing information about their Name, e-mail, date starter the program, and a link to their avatar picture.

The main focus of this project is with using the javaScript to manipulate the DOM.

Two global variables are created: studentList, and itemsPerPage. The former selects all the elements in the student-item class. The latter stores the number of items specified per page, in this project it is 10 student items.

I create an arrow function "showPage" that defines the start and end index's of the pages required. Then we loop through the function displaying students items on the page if greater than the previous index or less than the last index per page. i.e. 1-10. 11-20, etc.

The appendPageLinks arrow function is then created. This generates, appends, and adds functionality to the pagination buttons. Set the variable requiredPages to the formula that calculates the number of items per page. List.length (54) divided by itemsPerPage (10).

We should end up with 6 pages.

The next for loop iterates through the required number of pages, I create List and Anchor tag elements and append the list and anchors to the list and unordered list of the HTML.

I set the first page as active.

Next I created an event handler using the click method. This will allow users to select the appropriate page with the page links at the bottom of the page.

I call the showPage function in the Event Handler which passes in the studentList function, and assign the page index variable to the function.

Outside of the program I call the 2 functions showPage, and appendPageLinks and pass in the studentList argument.
