let i =0;
let initialVal=[];

initialVal[i] =0; //for the first counter

document.querySelector(".master .wrapper").id=i.toString(); //adds id = 0 in wrapper
document.querySelector('.counterDiv p').innerHTML = "initial value = " + initialVal[i];
//const counter = document.querySelector('.counterDiv ul');
const master = document.getElementsByClassName('master');
const wrapper = document.getElementById('0');
//console.log(counter.children[0].firstChild);
wrapper.addEventListener('click',function(e){
    let targetWrapper = e.target.parentNode.parentNode.parentNode.parentNode;
    let ID=targetWrapper.id; 
    
    i = parseInt(ID);  
    //console.log(i);  
    if (e.target.className=="button"){
            //console.log("clicked");
            
        if(e.target.name =="increment"){
            initialVal[i]+=1;
        }
        else if(e.target.name == "decrement"){
            initialVal[i]-=1;
        }
        document.querySelector('.wrapper .result').innerHTML = "Result = " + initialVal[i];
        // console.log(initialVal);
    }
});
    
let temp =0;
let incCount = 10;
let decCount = 10;
const addCounter = document.querySelector('.addcounter');
addCounter.addEventListener('click',function(e){
        i++;
        incCount++;
        decCount++;
        //create elements
        const wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        wrap.id = i.toString();
       // console.log(wrap);

        const countDiv = document.createElement('div');
        countDiv.classList.add('counterDiv');
        
        const h31 = document.createElement('h3');
        h31.classList.add('counterTitle');
        
        const p = document.createElement('p');
        p.classList.add('initial')
        
        const ul = document.createElement('ul');
        ul.classList.add('counter');
        
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const buttonInc = document.createElement('button');
        buttonInc.classList.add('button');
        buttonInc.type = "button";
        buttonInc.name="increment";
        buttonInc.id= incCount.toString();
        const buttonDec = document.createElement('button');
        buttonDec.classList.add('button');
        buttonDec.type = "button";
        buttonDec.name="decrement";
        buttonDec.id= decCount.toString();
        //console.log(buttonInc);
        //console.log(buttonDec);

        const h32 = document.createElement('h3');
        h32.classList.add('result');
        /*const buttonAdd = document.createElement('button');
        buttonAdd.classList.add('addcounter');
        */

        //appendChilds
        wrap.appendChild(countDiv);
        wrap.appendChild(h32);
        //wrap.appendChild(buttonAdd);
        
        countDiv.appendChild(h31);
        countDiv.appendChild(p);
        countDiv.appendChild(ul);

        ul.appendChild(li1).appendChild(buttonInc);
        ul.appendChild(li2).appendChild(buttonDec);

        //console.log(wrap);

        // assign values
        h31.textContent= "Counter";
        p.textContent = "initial value =";
        buttonInc.textContent= "+increment";
        buttonDec.textContent= "-decrement";
        h32.textContent= "Result = 0";
       // buttonAdd.textContent = "Add Counter";
        const container = e.target.parentNode;
        const mast = container.firstElementChild;
        mast.appendChild(wrap);
        //console.log(mast);
        //console.log(wrap);
        //wrapper with id;
        
        initialVal[i] = 0;

        mast.lastChild.querySelector('.counterDiv p').innerHTML = "initial value = " + initialVal[i];
        temp =i ;
        console.log(temp);
        mast.addEventListener('click',function(e){
            
            //console.log('clicked');
            let targetWrapper = e.target.parentNode.parentNode.parentNode.parentNode;
            let ID = targetWrapper.id;
            if (e.target.className=="button"){
                i = parseInt(ID);
                console.log(i);
                if(i !=0){
                    if(e.target.name == "increment" ){
                        initialVal[i]+=1;
                    }
                    else if(e.target.name == "decrement"){
                        initialVal[i]-=1;
                    }
                    targetWrapper.querySelector('.result').innerHTML = "Result = " + parseInt((initialVal[i])/temp);

                }}
                i = temp;
            });
        
    });


