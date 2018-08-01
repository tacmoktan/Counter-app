let i =0;
let initialVal=[];
initialVal[i] =0; //for the first counter
    document.querySelector('.counterDiv p').innerHTML = "initial value = " + initialVal[i];
    const counter = document.querySelector('.counterDiv ul');
    //console.log(counter.children[0].firstChild);
    counter.addEventListener('click',function(e){
        if (e.target.className=="button"){
            //console.log(e.target);
            if(e.target == counter.children[0].firstElementChild){
                initialVal[i]+=1;
            }
            else if(e.target == counter.children[1].firstElementChild){
                initialVal[i]-=1;
            }
            document.querySelector('.wrapper .result').innerHTML = "Result = " + initialVal[i];
        // console.log(initialVal);
        }
});
    

    //console.log('inside second operation')
    const master = document.getElementsByClassName('master');
    const addCounter = document.querySelector('.wrapper .addcounter');
    const wrapper = document.getElementsByClassName('wrapper');
    addCounter.addEventListener('click',function(e){
        i++;
        //create elements
        const wrap = document.createElement('div');
        wrap.classList.add('wrapper');

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
        const buttonDec = document.createElement('button');
        buttonDec.classList.add('button');
        buttonDec.type = "button";
        buttonDec.name="decrement";
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
        const mast = e.target.parentNode.parentNode;
        console.log(mast);
        mast.appendChild(wrap);
        //wrapper with id;
        
        initialVal[i] = 0;
        console.log(initialVal[i]);
        mast.lastChild.querySelector('.counterDiv p').innerHTML = "initial value = " + initialVal[i];
        const counter = mast.lastChild.querySelector('.counterDiv ul');
        //console.log(counter.children[0].firstChild);
        counter.addEventListener('click',function(e){
            //console.log(e.target);
            if (e.target.className=="button"){
            //console.log(e.target);
                if(e.target == counter.children[0].firstElementChild){
                initialVal[i]+=1;
                }
                else if(e.target == counter.children[1].firstElementChild){
                    initialVal[i]-=1;
                }
                mast.lastChild.querySelector('.result').innerHTML = "Result = " + initialVal[i];
            // console.log(initialVal);
            }
        });
        
    });


