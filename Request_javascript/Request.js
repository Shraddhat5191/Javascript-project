let n=require("readline-sync");
let axios=require("axios")
let fs=require("fs");
axios.get("https://api.merakilearn.org/courses").then(resp=>{
    let DATA=resp.data
    let json=JSON.stringify(DATA,null,5)
    fs.writeFileSync("course.JSON",json)
    let serial=1
    for (i of DATA){
        console.log(serial,i["name"],i["id"])
        serial++
    }
    let input=n.questionInt("enter the course id number:");
    console.log(DATA[input-1]['name'])
    id = DATA[input-1]["id"]
    axios.get("https://api.merakilearn.org/courses/"+id+"/exercises") .then(response=>{
    let courses=response.data
    let json=JSON.stringify(courses,null,5)
    fs.writeFileSync("parents.JSON",json)
    course_name=courses.course.exercises
    let seriol_no= 1
    for(let j=0;j<course_name.length;j++){
        console.log(seriol_no++,course_name[j].name)
    }
    let user=n.questionInt("enter the value")
    let name=course_name
    for (let k=0;k<name[user].content.length;k++){
        console.log(name[user].content[k].value)
    }
}).catch(error=>{
        console.log(error)
    })
}).catch(error=>{
    console.log(error)
}) 