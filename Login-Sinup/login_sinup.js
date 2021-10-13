console.log("welcome in loginsinup");
let num=require("readline-sync");
let fs=require('fs');
const { sign } = require("crypto");
let sum=num.question("if you want to do singnup(1),if you want to do login(2) ");
if (sum=="1"){
    let username=num.question("username");
    console.log("creatpass a to z;")
    let password=num.question("create password");
    let fn=fs.readFileSync("my_name.json","utf8")
    if (fn.includes(username && password)){
        console.log("your account allready creat")
    }else{
        let email=num.question("create email")
        const strong_email= RegExp(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/);
        const strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if (password.match(strong) || email.match(strong_email)){
            pass_word=num.question("confirm your password");
            if (password===pass_word){
                console.log(username,"signup succwssfull")
                console.log()
                console.log("we want information")
                console.log()
                fullname=num.question(" enter full name");
                dob=num.question("date of birth");
                gender=num.question(" enter gendar name");
                console.log("thankyou",fullname)
                object={
                    user:{username:username,pass_word:password,Email:email},profile:{fullname:fullname,dob:dob,gender:gender}
                }
                let file=JSON.stringify(object,null,5)
                fs.appendFileSync("my_name.json",file)
                console.log(object)
            }else{
                console.log("pass_word wrong")
            }
        }else{
            console.log("email is wrong")
        }
    }
}else if(sum=="2"){
    let fn=fs.readFileSync("my_name.json","utf8")
    file1=JSON.parse(fn)
    let user_name=num.question("enter your user name")
    let pass_word=num.question("enter your password")
    if (fn.includes(user_name&&pass_word)){
        console.log("your succesful login",user_name)
        console.log()
        console.log("give yor information")
        console.log("userinformation",file1["user"])
        console.log("profile ",file1["profile"])


    }else{
        console.log("sorry incorrect username amd password")
    }
} 