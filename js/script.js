/*************************** 
* List Filter and Pagination
***************************/

const studentList = document.querySelectorAll(".student-item");  
const itemsPerPage = 10;
const page = document.querySelector(".page"); //dynamically insert page class


   const showPage = (list, page) =>{
      let indexStart = (page * itemsPerPage) - itemsPerPage;
      let indexEnd = (page * itemsPerPage) -1;

      
      
      for(let i=0; i<list.length; i++){        //Loop over items in the list parameter 
         if( i >= indexStart && i <=indexEnd){
            list[i].style.display = "";
         } else {
            list[i].style.display = "none";
         }
      }
};

   /*** 
      Create the `appendPageLinks function` This will generate, append, and add 
      functionality to the pagination buttons.
   ***/
      const appendPageLinks = (list)=>{
         //determining how many pages I need per page and store in variable requiredPages
         const requiredPages = Math.ceil(list.length/itemsPerPage); //determine amount of pages that are needed
         const paginationDiv = document.createElement("div"); //new div element
         paginationDiv.className = "pagination";   //assign new div element to the class Pagination
         const ul = document.createElement("ul");
         page.appendChild(paginationDiv);
         paginationDiv.appendChild(ul);

      
      for(let i=1; i<requiredPages+1;i++){  //this loop creates a list for every 10 students
         
         let li = document.createElement("li")   //create list and anchor. Append to li and ul.
         let link = document.createElement("a");
         li.appendChild(link);
         ul.appendChild(li);
         link.href = "#";  //page number text
         link.innerHTML = i; 
      
      if(i === 1) {   // <--set first page as active

         link.className = "active";
      };

         showPage(list, 1);
      
      // the event handler to enable clicking to call the showPAge function, will display the appropriate page
      link.addEventListener("click", (e)=> {
         const pages = document.querySelectorAll("a");
         for(let a = 0; a<pages.length;a++){
            
            pages[a].classList.remove("active");  //remove active class from all links, highlight page number currently in use
         }
      
         showPage(studentList, i);   //Calling showPage function
      
      e.target.className = "active";  //adding active class to link

      }); 
   }
};

//calling the functions
showPage(studentList, 1);
appendPageLinks(studentList);

