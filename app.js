

var outPutDiv = document.querySelectorAll('#output-div');
var inputText = document.querySelector('#input input').value;
const  enterTask  = document.getElementById('enter');
const deleteBTN = document.querySelectorAll('#del');


    


enterTask.addEventListener('click',()=>{

    let outPutDiv = document.getElementById('output-div');
    let inputText = document.querySelector('#input input').value;
    // let deleteBTN = document.querySelectorAll('#del');


    if(inputText === ""){
        alert('Please enter a task');

    }else{

        let inputText = document.querySelector('#input input').value;

        if(inputText.length > 20){
            alert('Maximum character Exceeded');
    
           
        }else{
            outPutDiv.innerHTML += 

         `
         <div class=" new flex flex-row justify-between  bg-white mb-5 p-5 rounded-xl h-20 w-2/3 shadow-md" >

         <p id="output-p" class=" mb-10 text-2xl" >${inputText} </p>

         <div class="flex  space-x-5">

             
             <button id="del" class="flex flex-row text-white font-bold mb-5 py-5 px-7 justify-center  w-36 items-center bg-body rounded-xl ">Delete</button>

         </div>
         

        </div> `;
    
         
    
         document.querySelector('#input input').value = "";
        };
    };

    // <button id="edit" class="flex flex-row text-white font-bold mb-5 py-5 px-7 justify-center  w-36 items-center bg-theme rounded-xl ">Edit</button>
    
    
    

   

    let deleteBTN = document.querySelectorAll('#del');
    for(let i = 0; i < deleteBTN.length; i++){

         deleteBTN[i].onclick = function (){
            this.parentNode.parentNode.remove();
                            
                                

          };


      };


      let editBTN = document.querySelectorAll('#edit');
      for(let i = 0; i < editBTN.length; i++){
  
           editBTN[i].onclick = function (){

            let taskINFO = this.inputText;
            console.log(taskINFO);

            // let taskINFO =  this.parentNode.previousSibling.textContent;
            // console.log(taskINFO);


            // let taskINFO = document.querySelectorAll('#output-p').textContent;

            // for(let i = 0; i < taskINFO.length; i++){
            //     console.log(taskINFO);

            // }

        
              
                              
                                  
  
            };
  
  
        };  

                                  

});



// outPutDiv.innerHTML += `<div class="flex flex-col justify-center bg-white mb-5 p-5 rounded-xl h-60 w-2/3 shadow-md" >
//                             <p id="output-p" class="h-16 mb-10" >${inputText}</p>

//                             <div class="flex justify-center space-x-5">

//                                 <button id="edit" class="flex flex-row text-white mb-5 py-5 px-7 justify-center h-10 w-36 items-center bg-green-900 rounded-md ">Edit</button>
//                                 <button id="del" class="flex flex-row text-white mb-5 py-5 px-7 justify-center h-10 w-36 items-center bg-red-800 rounded-md ">Delete</button>

//                             </div>
//                         </div>`;

// console.log(inputText);
