const addCounter = document.getElementById('addcounter');
console.log(addCounter);
addCounter.onclick = () => {
    let init = 0;
    let h2 = document.createElement('h2');
    h2.textContent = 0;
    let plus = document.createElement('button');
    plus.textContent = "+";
    let minus = document.createElement('button');
    minus.textContent = "-";
    
    plus.onclick = () => {
        console.log('clicked p');
        init++;
        h2.textContent = init;
    }
    
    minus.onclick = () => {
        console.log('clicked m');
        init--;
        h2.textContent = init;
    }
    
    let counter = document.createElement('div');
    counter.classList.add('counter');

    counter.appendChild(h2);
    counter.appendChild(plus);
    counter.appendChild(minus);
    //console.log(counter,plus,minus);
    
    addCounter.parentNode.appendChild(counter);
    
}

//addCounter.onclick = () => {addCounter.parentNode.appendChild(generateCounters()); }