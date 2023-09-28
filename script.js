let outputScreen = document.getElementById('output-screen')

function dispaly(num){
outputScreen.value += num ;
}
   
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err){
        alert('syntaxError')
    }
};

function Clear(){
    outputScreen.value ="";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}