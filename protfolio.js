AOS.init({duration:2000},);


var values = document.getElementById("one");        
        console.log(values); 
        var test = false;
        function change() {
            test = !test;
            if(test) {
            values.style.display = "block";
        
            
            console.log(test)
            
            } else {
                values.style.display = "none"; 
                
            
            }
  
        };
