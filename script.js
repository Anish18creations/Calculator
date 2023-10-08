//work pending - whether the input expression is valid or not(6++6-7,++5/6)
//This function clears all the values
function clearscreen() {
    document.getElementById("result").value = "0";
}

// This function displays the values
function display(value) {
    // let b=true;
    let g = document.getElementById("result").value;
    let l = g.length;

    if (l == 1 && g == '0' && value != '/' && value != '*') {
        del()
        document.getElementById("result").value += value;
    }
    else {
        document.getElementById("result").value += value;
    }
}

// This function evaluates the expression and returns the result
function calculate() {
    
    let r = document.getElementById('result').value;
    let p = r.length;
    let m = r;
    let n = r;
    r = r.substring(r.length - 1, r.length)
    let x = n.substring(0, 1)
    
    if (p == 0) {
        document.getElementById('result').value = "No input given! , give input"
    }

    else if (x == "/" || x == "*" || isNaN(r)){
        document.getElementById('result').value = "Invalid input!!! , Try again!"
    }

    else {
    let v=judge()
    let w=validate()
    if (v==1){
        document.getElementById('result').value = "Division by 0 not possible!"
    }
    else if(w==0){
        document.getElementById('result').value = "Invalid Expression!!!"
    }
    else
    {
        let q = eval(m);
        document.getElementById("result").value = q.toFixed(3);
    }
       
    }
}

//6++6-3 , 66++6-3 
let validate = function(){
    let r = document.getElementById('result').value;
    let p = r.length;
    let t=1;
    for(let i=0;i<p-2;i++){
        let c=r.substring(i,i+1)
        let d=r.substring(i+1,i+2)
        let e=r.substring(i+2,i+3)
        let b=1;
        let a=0;
        let b1=1;
        let a1=1;
        if(d=='+' || d=='-' || d=='/' || d=='*'){
            if(isNaN(c)){
                b=0; //b=1 is true condition
            }
            if(isNaN(e)=='false' || e=='.'){
                a=1; //a=0 is true condition
            }
            if(b==0 || a==1){
                t=0;
                //break;
            }
        }
        //6+.6,6.+6
        if(d=='.'){
            if(c=='.'){
                b1=0; //b=1 is true condition
            }
            if(isNaN(e)){
                a1=0; //a=1 is true condition
            }
            if(b1==0 || a1==0){
                t=0;
                //break;
            }
        }

    }
    return t;
}

//This function checks whether the user has tried to perform division by 0 
let judge = function(){

    let r = document.getElementById('result').value;
    let p = r.length;
    let h = 0;
    for(let i=1;i<p-1;i++)
    {
        let c=r.substring(i,i+1)
        let d=r.substring(i+1,i+2)
        if(c==='/' && d==='0'){
            //console.log('Anish')
            h=1;
            break;
        }

    }
    return h;
}

//This function deletes the last entered input
let del = function () {
    let r = document.getElementById('result').value;
    document.getElementById('result').value = r.substring(0, r.length - 1);
}