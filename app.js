// Immidiate invoked function express

(function(){
    function Start(){
        console.log("Application started....");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/bookslist');
                }
            });
        }
    }
    window.addEventListener("load",Start);

   
})();