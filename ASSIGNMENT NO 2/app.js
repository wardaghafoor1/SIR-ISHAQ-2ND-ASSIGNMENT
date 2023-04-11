            // ----------------------------------------------------------------------- 1
            // function closure(num) {
            //     function noToBeAdded(x) {
            //       return x + num;
            //     }
            //     return noToBeAdded;
            //   }
            //   const add5 = closure(5);
            //   console.log(add5(20));  

          
          // ----------------------------------------------------------------------- 2

        //   function searchArray(arr, val) {
        //       if (arr.length === 0) {
        //         return false;
        //       }
        //       if (arr[0] === val) {
        //         return true;
        //       }
        //       return searchArray(arr.slice(1), val);
        //     }
        //     const Array = [10, 11, 100, 102];
        //     console.log(searchArray(Array, 100)); 
        //     console.log(searchArray(Array, 0)); 
    
         // ----------------------------------------------------------------------- 3

        //  function paragraph(text) {
        //     const newParagraph = document.createElement("p");
        //      newParagraph.textContent = text;
        //      document.addEventListener("DOMContentLoaded", function() {
        //         const body = document.querySelector("body");
        //           body.appendChild(newParagraph);
        //     });
        //   }
        //   paragraph("NEW PARAGRAPH HAS BEEN ADDED SUCESSFULLY!");

         // ----------------------------------------------------------------------- 4 

         
// function addListItem(text) {
//     const ul = document.querySelector('ul');
//     const li = document.createElement('li');
//     const textNode = document.createTextNode(text);
//     li.appendChild(textNode);
//     ul.appendChild(li);
//   }
        
         // ----------------------------------------------------------------------- 5 


//         function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
  
//   function changeColor() {
//     const myDiv = document.querySelector('#main');
//     changeBackgroundColor(myDiv, 'yellow');
//   }
        // ----------------------------------------------------------------------- 6

        // function a (key, value) {
        //     localStorage.setItem(key, JSON.stringify(value));
        //   }
        //   const myObject = { warda: "genius", age: 10 };
        //   a ("myKey", myObject);
                    
           // ----------------------------------------------------------------------- 7
        //    function getFromLocalStorage(key) {
        //     const value = localStorage.getItem(key);
        //     return JSON.parse(value);
        //   }
        //   const myObject = getFromLocalStorage("myKey");
        //   console.log(myObject); 

        // ----------------------------------------------------------------------- 8
        // function saveToLocalStorageAndReturn(obj) {
        //      for (const key in obj) {
        //       if (obj.hasOwnProperty(key)) {
        //         localStorage.setItem(key, JSON.stringify(obj[key]));
        //       }
        //     }
        //     const newObj = {};
        //     for (let i = 0; i < localStorage.length; i++) {
        //       const key = localStorage.key(i);
        //       newObj[key] = JSON.parse(localStorage.getItem(key));
        //     }
          
        //     return newObj;
        //    }
       
          
                    
                    
                    
