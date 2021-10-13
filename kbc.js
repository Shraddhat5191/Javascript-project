question_list = [
    "How many continents are there?",
    "What is the capital of India?",
    "NG mei kaun se course padhaya jaata hai?"
]
options_list = [
    // #pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    // #second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    // #third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
solution_list = [3, 4, 1]
answer_list = [
    ["1 four", "3 seven"],
    ["2 Bhopal", "4 Delhi"],
    ["1 software engineering", "4 agriculture"]
]
console.log("KAUN BANAYGA CODEPATI (KBC)")
i = 0
s = 0
count = 0
while (i < question_list.length) {
    console.log(question_list[i])
    a = 0
    b = i
    while (a < options_list.length) {
        k = options_list[b][a]
        console.log(a + 1, k)
        a = a + 1
    }
    if (count < 1) {
        let readlineSync = require("readline-sync");
        var num1 = readlineSync.question("do you want to use lifeline:-");
        // num1=input("do you want 5050 lifeline")
        if (num1 == "yes") {
            k = 0
            while (k < answer_list.length) {
                console.log(answer_list[b][k])
                k += 1
            }
            // # print(answers_new[b])
            // num2 = int(input("enter your answer"))
            // let readlineSync = require("readline-sync");
            let num2 = readlineSync.question("enter your answer");
            if (num2 == solution_list[i]) {
                s += 10000
                console.log("your answer is correct")
                console.log("you win Rs/", s)
            } else {
                console.log("incorrect answer")
                console.log("you can't play again")
                console.log("you win Rs/", s)
                break
            }
            count += 1


        } else {
            // let readlineSync = require("readline-sync");
            let m = readlineSync.question("enter your answer");
            if (m == solution_list[i]) {
                console.log("congrats your answer is right")
                s += 10000
                console.log("you win Rs/", s)
            } else {
                console.log("No chance")
                console.log("your answer is wrong")
                console.log("you win", s)
                break
            }
        }

    } else {
        // let readlineSync = require("readline-sync");
        let k = readlineSync.question("enter your answer");
        // k = int(input("enter your answer"))
        if (k == solution_list[i]) {
            console.log("right answer")
            s += 10000
            console.log("you win Rs/", s)
        } else {
            console.log("no chance")
            console.log("your answer is wrong")
            console.log("you win Rs/", s)
            break
        }
    }
 
    i = i + 1
console.log("_congrulation you are a part of KON BANAYGA CODEPATI")
console.log("you win Rs/", s)
console.log("THANKYOU BEING PART OF KBC")
}