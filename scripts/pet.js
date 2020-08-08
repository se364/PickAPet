// 
//
// Author : Shah Emran
// Date : 10/22/2019
// Pick A Pet  
// URL :  
// File name : pet.js


 
const button = document.getElementById("button"); // set the button to find the pet
 
 button.onclick = findPet;
 
 function findPet()
 {
        let age = document.getElementById("age").value;  // retrieve the age 
		let gender = document.getElementById("gender").value; //retrieve the gender 
        let pic = document.getElementById("imgguess"); // get image element
        let header = document.getElementById("label"); // get header element
        
        // 
		
        if((age<10) && (gender==='M')){
			
                
				pic.src = "images/goldfish.jpg"; // set image
				pic.alt = "Gold Fish"; // set alt attribute for image
				header.innerHTML = "Your pet is Gold Fish"; // set header in header text
		}
			
		else if ((age<10) && (gender==='F')) {
				pic.src = "images/python.jpg"; // set image
				pic.alt = "Python"; // set alt attribute for image
				header.innerHTML = "Python"; // set header in header text
			
        }
        else if ((age>=10 && age<=30) && (gender==='M')) {
			
        
				pic.src = "images/iguana.jpg"; // set image
				pic.alt = "Iguana"; // set alt attribute for image
				header.innerHTML = "Iguana"; // set header in header text
		}
		else if ((age>=10 && age<=30) && (gender==='F')) {
				pic.src = "images/cat.jpg"; // set image
				pic.alt = "Cat"; // set alt attribute for image
				header.innerHTML = "Cat"; // set header in header text
			
        }
        else if ((age>=30) && (gender==='M')){
			
				
				pic.src = "images/dog.jpg"; // set image
				pic.alt = "Dog"; // set alt attribute for image
				header.innerHTML = "Dog"; // set header in header text
		}
		else if ((age>=30) && (gender==='F')){
				pic.src = "images/horse.jpg"; // set image
				pic.alt = "Horse"; // set alt attribute for image
				header.innerHTML = "Horse"; // set header in header text
			
        
			
		}
        else
        {
            alert("Please enter the correct information");
         
        }   
    
 }

 
 