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
    
    // calcul price
    let obj = [{
        name : 'GOAT',
        price : 500,
        img : './images/goat.jpg'
    },{
        name: "Johnny Hallyday's hairs",
        price : 1800,
        img : './images/Johnny_hairs.jpg'
    },
    {
        name : "will smith house",
        price : 42000000,
        img: './images/smithHouse.jpg'
    },
    {
        name : 'crankshaft',
        price : 108,
        img : './images/vilebrequin.jpg'
    },
    {
        name : 'Colonel reyel album',
        price : 1,
        img: './images/colonel.jpg'
    },
    {
        name : 'Test PCR positif',
        price : 46,
        img :'./images/testpcr.jpg'
    },
    {
        name : 'Thumb ring',
        price : 12,
        img: './images/thumbring.jpg'
    }
    ]
    //random choix de l'objet
    const randomObj = obj[Math.floor(Math.random()*obj.length)];
    console.log(randomObj);
    // comparaison du prix de l'objet avec la valeur de l'input
    const parsed = parseInt(input.value)
    if(randomObj.price <= parsed){
       let nbObj= parsed / randomObj.price
       console.log(Math.round(nbObj));
       answer.innerText="For : "+ input.value +"€ you can buy "+'X'+' '+ Math.round(nbObj) + ' ' + randomObj.name +' '+ randomObj.price+'€' + '/u';
       result.innerHTML= `<div><img src='${randomObj.img}'></div>`;
       

    }else if(randomObj.price > parsed){
        
        answer.innerText="For : "+ input.value +"€ you can't buy "+ ' ' + randomObj.name + ' ' +'not enough money for this sorry !'+' '+  'it cost: ' + randomObj.price+'€';
        result.innerHTML= `<div><img src='${randomObj.img}'></div>`;
        }
    else{
        console.log('rien pour le moment');
    }
    
    //
    //answer.innerText="For : "+ input.value +"€ you can buy "+ result.value;
    result.appendChild(answer);
    setTimeout(()=>{
        answer.remove();
        document.getElementById('replay').className = "hey";
        
    },6000);

}
replay.addEventListener("click", ()=>{
    document.location.reload();
})
