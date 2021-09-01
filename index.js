let spend = document.querySelector(".raise");
let input = document.querySelector('input');
let result = document.querySelector('#result');
let row = document.querySelector('#row');
let replay = document.querySelector('#replay');
spend.addEventListener("click", ()=>{
    if(input.value !== '' && input.value !==null && input.value !== undefined && isNaN(input.value)==false){
        generateAnswer();
    }
    else{
        row.innerHTML='<p>Veuillez rentrer un nombre entier svp !</p>';
        setTimeout(()=>{
            document.location.reload();
        },2000);
        
    }
    
} );
function generateAnswer(){
    let answer = document.createElement
    ("div");
    answer.classList.add("toast");
    spend.classList.add("disabled");
    row.classList.add("disabled");
    
    
    answer.innerText="For : "+ input.value +"€ you can buy "+ result.value;
    result.appendChild(answer);
    setTimeout(()=>{
        answer.remove();
        document.getElementById('replay').className = "hey";
        
    },4000);

}
replay.addEventListener("click", ()=>{
    document.location.reload();
})
