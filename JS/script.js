let input = document.getElementById('in');
let submit = document.getElementById('submit');
let submit2 = document.getElementById('submit2');
let inContainer = document.getElementById('guess');
let guess = document.getElementById('guessingCont')
let inCont = document.getElementById('inCont')
let mistakes = 0;
let head = document.getElementById('head')
let body = document.getElementById('body')
let arm = document.getElementById('arm')
let leg = document.getElementById('leg')
let nleg = document.getElementById('nleg')
let narm = document.getElementById('narm')
let hint = document.getElementById('hints')
let contHint = document.getElementById('hintCont')
let human = document.getElementById('Human');
let hintstitle = document.getElementById('hintstitle');
let hintsubmit = document.getElementById('hintsubmit')

function ischecked(x){
    const choice = x;
    if (choice.checked){
        chosed = true;
    }
    else{
        chosed = false;
    }
    
    return chosed
}


function defaulting (){
    let word = String(input.value);
    let arrWord = word.split("")
    let len = arrWord.length;
    mistakes = 0;
    for (i = 0; i<len; i++){
        document.getElementById("in"+i).remove();
    }
    for (i = 0; i<len; i++){
        document.getElementById("hint"+i).remove();
    }
    for (i = 0; i<len; i++){
        document.getElementById("htitle"+i).remove();
    }
    edithide();
    leg.classList.replace("bg-red-600","bg-white")
    arm.classList.replace("bg-red-600","bg-white")
    head.classList.replace("bg-red-600","bg-white")
    body.classList.replace("bg-red-600","bg-white")
    nleg.innerHTML = 2;
    narm.innerHTML = 2;
    document.getElementById('tout').classList.toggle('hidden');
    inCont.classList.toggle('hidden');
}

function corrects(){
    let word = String(input.value);
    let arrWord = word.split("")
    let len = arrWord.length;
    let count = 0;
    for(i = 0; i<len; i ++){
        if((String(document.getElementById("in"+i).value)) == arrWord[i]){
            count++;
            if(count===len){
                setTimeout(defaulting,3000);
                document.getElementById('tout').classList.toggle('hidden');
            }
        }
    }



}



function hints(arrW){
    
    let numChar = arrW.length;
    
    for(i = 0; i<numChar;i++){
        let newChar = document.createElement('input');
        let newtitle = document.createElement('label');
        newChar.setAttribute("class","bg-white scale-110 transform duration-1000 hover:scale-125");
        newtitle.setAttribute("class","text-xl")
        newtitle.setAttribute("id","htitle"+i)
        newChar.setAttribute("id","hint"+i)
        newChar.setAttribute("type","checkbox")
        hintstitle.appendChild(newtitle)
        hint.appendChild(newChar)
        newtitle.innerText = arrW[i];
        console.log((i+1)+ "display hints choices done")

    }
    
}

function checkhint(){
    let word = String(input.value);
    let arrW = word.split("")
        for(i=0;i<arrW.length;i++){
            if(ischecked(document.getElementById('hint'+i))){
                document.getElementById('in'+i).value = arrW[i];
                console.log("checked hint num"+i)
            }
            
        }
        edithide()
        
        contHint.classList.toggle("hidden")

}
hintsubmit.addEventListener('click',checkhint);
function addInput (number){

    for ( i = 0; i<number ; i++){
        let newIn = document.createElement('input')
        newIn.setAttribute("class","w-16 rounded-3xl px-2 py-1 text-center transform duration-1000 hover:scale-110")
        newIn.setAttribute("id","in"+i)
        inContainer.appendChild(newIn)
        console.log((i+1) +" is Done")
    }
    
    
}

function edithide(){
    guess.classList.toggle('hidden');
    
    human.classList.toggle('hidden')
}

submit.addEventListener('click', Entering);
function Entering(){
    let word = String(input.value);
    let arrWord = word.split("")
    let len = arrWord.length;
    if(len>1 && len<11){
        addInput(len);
        inCont.classList.toggle('hidden');
        contHint.classList.toggle('hidden')
        hints(arrWord);
        
    }
}

submit2.addEventListener('click',Answers);
function Answers(){
    let word = String(input.value);
    let arrWord = word.split("")
    let len = arrWord.length;
    bolrest = true;
    for(i = 0; i<len; i++){
        let count = -1;
        if((String(document.getElementById("in"+i).value)) === arrWord[i] && !(document.getElementById("in"+i).classList.contains("bg-green-300")) && !(document.getElementById("in"+i).classList.contains("bg-red-300"))){
                document.getElementById("in"+i).classList.add("bg-green-300");
        }
        else if ((String(document.getElementById("in"+i).value)) === arrWord[i] && (document.getElementById("in"+i).classList.contains("bg-red-300"))){
            document.getElementById("in"+i).classList.replace("bg-red-300","bg-green-300");
        
        }
        else if(!(document.getElementById("in"+i).classList.contains("bg-red-300")) && !((String(document.getElementById("in"+i).value)) === arrWord[i])){
            
            document.getElementById("in"+i).classList.add("bg-red-300")
            mistakes = mistakes +1;
        }
        else if (!((String(document.getElementById("in"+i).value)) === arrWord[i])){
            mistakes = mistakes +1;
        }
        

    }
    
    if(mistakes>=1){
        leg.classList.replace("bg-white","bg-orange-600")
        nleg.innerHTML = 1;
    }
    if(mistakes>=2){
        leg.classList.replace("bg-orange-600","bg-red-600")
        nleg.innerHTML = "";
    }
    if(mistakes>=3){
        body.classList.replace("bg-white","bg-red-600")
    }
    if(mistakes>=4){
        arm.classList.replace("bg-white","bg-orange-600")
        narm.innerHTML = 1;
    }
    if(mistakes>=5){
        arm.classList.replace("bg-orange-600","bg-red-600");
        narm.innerHTML = "";
    }
    if(mistakes>=6){
        head.classList.replace("bg-white", "bg-red-600")
        setTimeout(defaulting,3000);
        document.getElementById('tout').classList.toggle('hidden');
    }
    
    // switch(true){
    //     case (1<=mistakes && mistakes<2): 
    //         leg.classList.replace("bg-white","bg-orange-600")
    //         nleg.innerHTML = 1;
    //         break;
    //     case (2<=mistakes && mistakes<3):
    //         leg.classList.replace("bg-orange-600","bg-red-600")
    //         nleg.innerHTML = "";
    //         break;
    //     case (3<=mistakes && mistakes<4):
    //         body.classList.replace("bg-white","bg-red-600")
    //         break;
    //     case (4<=mistakes && mistakes<5):
    //         arm.classList.replace("bg-white","bg-orange-600")
    //         narm.innerHTML = 1;
    //         break;
    //     case (5<=mistakes && mistakes<6): 
    //         arm.classList.replace("bg-orange-600","bg-red-600");
    //         narm.innerHTML = "";
    //         break;
    //     case (6<=mistakes):
    //         head.classList.replace("bg-white", "bg-red-600")
    //         setTimeout(defaulting,3000);
    //         document.getElementById('tout').classList.toggle('hidden');
    //         break;
    //     default:
    //         break;
    // }
    corrects();

}


