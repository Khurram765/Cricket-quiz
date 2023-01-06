var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    var userArray = []
    var matchEmail
    var matchPassword
    var obj = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value
    }

    userArray.push(obj)
        if(obj.fname=="" || obj.fname.length<3 ){
            alert("please enter your valid name")
        }
        if(obj.lname=="" || obj.lname.length<3){
            alert("please enter your valid last name")
        }
        if(obj.email==""){
            alert("please enter your valid email")
        }
        if(obj.password=="" || obj.password.length<6){
            alert("please enter valid password (at least 6 characters)")
        }
        if(obj.fname!="" && obj.fname.length>=3 && obj.lname!="" && obj.lname.length>=3 && obj.email!="" && obj.password!="" && obj.password.length>=6){

            if (localStorage.getItem("user")) {
                var allUsers = JSON.parse(localStorage.getItem("user"))
                console.log(allUsers)
                allUsers.forEach((data,index)=>{
                    if(data.email==obj.email){
                        matchEmail=data.email
                    }
                    if(data.password==obj.password){
                        matchPassword=data.password
                    }
                })
                if(matchEmail==obj.email){
                    alert("this email has already exist")
                }else if(matchPassword==obj.password){
                    alert("this password has already exist")
                }else{

                    var data = [...allUsers,obj ]
                    localStorage.setItem("user", JSON.stringify(data))
                    window.location.href = "../pages/login.html"
                }
            } else {
                localStorage.setItem("user", JSON.stringify(userArray))
                window.location.href = "../pages/login.html"
        
            }
        }
})
                
                
                    
                    
                
                    
                    
                
                       
                    
                        
                    
                
            
    


