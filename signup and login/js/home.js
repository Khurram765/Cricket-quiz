var questionsArr=[
    {
        question:"1) Who won the first cricket world cup?",
        a:"Australia",
        b:"West Indies",
        c:"Pakistan",
        d:"England",
        correct:"optiontwo"
    },
    {
        question:"2) Which country has played the maximum number of one day matches?",
        a:"Australia",
        b:"West Indies",
        c:"Pakistan",
        d:"England",
        correct:"optionone" 
    },
    {
        question:"3) Who scored most test centuries for Pakistan?",
        a:"Inzamam",
        b:"Yousuf",
        c:"Younus",
        d:"Misbah",
        correct:"optionthree" 
    },
    {
        question:"4) Who was the player of the tournament in 1992 world cup?",
        a:"Wasim Akram",
        b:"Javed Miandad",
        c:"Martin Crowe",
        d:"Peter Kirsten",
        correct:"optionthree" 
    },
    {
        question:"5) Which team played most semi finals in cricket world cups?",
        a:"New zeland",
        b:"Australia",
        c:"Pakistan",
        d:"India",
        correct:"optiontwo" 
    },
    {
        question:"6) Which player hit most sixes in cricket history?",
        a:"Rohit Sharma",
        b:"Afridi",
        c:"Pollard",
        d:"Chris Gayle",
        correct:"optionfour"
    },
    {
        question:"7) Who scored most runs for Pakistan in Cricket World cups?",
        a:"Javed Miandad",
        b:"Inzamam",
        c:"Younis",
        d:"Saeed Anwar",
        correct:"optionone"
    },
    {
        question:"8) Who became the first player to hit test centuries in 11 different countries?",
        a:"Kohli",
        b:"Tendulkar",
        c:"Younis",
        d:"Ponting",
        correct:"optionthree"
    },
    {
        question:"9) Who scored first double century in world cup history?",
        a:"Chris Gayle",
        b:"Rohit ",
        c:"de villiers",
        d:"Guptil",
        correct:"optionone"
    },
    {
        question:"10) Which bowler has most hat tricks in international cricket?",
        a:"Wasim Akram",
        b:"Malinga",
        c:"Boult",
        d:"Starc",
        correct:"optiontwo"
    },
]


var container=document.getElementById("container");
var btn=document.getElementById("next");
var i=0
      


    container.innerHTML=`
    <div class="question-container">
    <h1>${questionsArr[i].question}</h1>
    <div class="options">
        <input type="radio" name="option"  id="optionone">
        <label for="optionone">${questionsArr[i].a}</label>
    </div>
    <div class="options">
        <input type="radio" name="option"  id="optiontwo">
        <label for="optiontwo">${questionsArr[i].b}</label>
    </div>
    <div class="options">
        <input type="radio" name="option"  id="optionthree">
        <label for="optionthree">${questionsArr[i].c}</label>
    </div>
    <div class="options">
        <input type="radio" name="option"  id="optionfour">
        <label for="optionfour">${questionsArr[i].d}</label>
    </div>
    
    </div>
    `
    var result=0
    btn.addEventListener("click",()=>{
        var optionOne=document.getElementById("optionone");
        var optionTwo=document.getElementById("optiontwo");
        var optionThree=document.getElementById("optionthree");
        var optionFour=document.getElementById("optionfour");
        var ID
        
        
        if(optionOne.checked){
           ID=optionOne.id
        }else if(optionTwo.checked){
            ID=optionTwo.id
        }else if(optionThree.checked){
            ID=optionThree.id
        }else if(optionFour.checked){
            ID=optionFour.id
        }
        if(questionsArr[i].correct==ID){
           result+=5
        }else{
            result=result
        }
        console.log(result)
        console.log(ID)
        i=++i
        console.log(i)
        if(i>9){
            alert("quiz complete")
            alert("you got " + result + " out of 50")
            window.location.href="../pages/login.html"
        }
        container.innerHTML=`
    <div class="question-container">
    <h1>${questionsArr[i].question}</h1>
    <div class="options">
        <input type="radio" name="option"  id="optionone">
        <label for="optionone">${questionsArr[i].a}</label>
    </div>
    <div class="options">
        <input type="radio" name="option"  id="optiontwo">
        <label for="optiontwo">${questionsArr[i].b}</label>
    </div>
    <div class="options">
        <input type="radio" name="option"  id="optionthree">
        <label for="optionthree">${questionsArr[i].c}</label>
    </div>
    <div class="options">
        <input type="radio" name="option"  id="optionfour">
        <label for="optionfour">${questionsArr[i].d}</label>
    </div>
    
    </div>
    `
    })






   
    
    


    