document.getElementById('btn').addEventListener('click',
    function(){
        let input = document.getElementById('input');

       

        // Creating the todo list elements
        let elem=document.createElement('li');
        let btn1=document.createElement('button');
        let btn2=document.createElement('button');
        btn1.innerText="Complete";
        btn2.innerText="Delete";
        elem.innerText=input.value;
        let ul=document.querySelector('ul');

        //Appending the created elements to html
        ul.appendChild(elem);
        elem.appendChild(btn1);
        elem.appendChild(btn2);
        //Adding styles to list
        btn1.style.border="none";
        btn1.style.marginLeft="3%";
        btn1.style.borderRadius="8px";
        btn1.style.backgroundColor="white";

        btn2.style.border="none";
        btn2.style.marginLeft="3%";
        btn2.style.borderRadius="8px";
        btn2.style.backgroundColor="white";
       
        //adding button functionality to created buttons
        btn1.addEventListener('click',
            function(){
                elem.style.textDecoration="line-through";
            }
         );
         btn2.addEventListener('click',
            function(){
                elem.remove();
            }
         );
           document.getElementById('input').value="";
    }
);
