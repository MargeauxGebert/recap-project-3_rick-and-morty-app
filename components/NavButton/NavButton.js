


const nextButton = document. addEventListener("[`data-js=button--next`]");

const prevButton = document. addEventListener("[`data-js=button-prev`]");


if ( === 42) {
          
    nextButton.classList.add("disabled");
  
  }
   else if (pageNumber===1){ 
  
    prevButton.classList.add("disabled");
  
   }
  
   else {
   
    page++;
    return //</pageIndex>;    cannot return and then ++
    // where to add to? 
    
  
  }
  