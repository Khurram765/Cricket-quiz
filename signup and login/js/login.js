var email=document.getElementById("email");
var password=document.getElementById("password");
var btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    var list=JSON.parse(localStorage.getItem("user")) 
    var emailCont
    var passCont
    var userName
    console.log(list)
    if(localStorage.getItem("user")){

        list.forEach((data,index)=>{
            if(data.email.includes(email.value)){
                emailCont=data.email
                if(list[index].password==password.value){
                    passCont=list[index].password
                    userName=list[index].fname
                }
            }
            
            
        })
        console.log(emailCont)
        console.log(passCont)
        if(emailCont==email.value && passCont!=password.value){
            alert("please enter correct password")
        }else if(emailCont==email.value && passCont==password.value){
            localStorage.setItem("name",userName)
            window.location.href="../pages/home.html"
        }else{
            alert('please enter correct email and password')
        }
    }else{
        alert("Please signup first")
        window.location.href="../index.html"
    }
    
})

