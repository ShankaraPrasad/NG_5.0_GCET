let students=[];
function addstudent() {
    let username=document.getElementById("name").value;
    let usermarks=parseInt(document.getElementById("marks").value);
    let student={
        name:username,
        marks:usermarks
    };
    students.push(student);
    console.log(students);
    displaystudents();
}
function displaystudents(){
    let table=document.getElementById("studentTable");
    table.innerHTML="";
    let total=0;
    for(let i=0;i<students.length;i++){
        total=total+students[i].marks;
        let status;
        if(students[i].marks>=35){
            status="pass";
        }else{
            status="fail";
        }
        table.innerHTML += `
        <tr>
        <td>${students[i].name}</td>
        <td>${students[i].marks}</td>
        <td>${status}</td>
        </tr>
        `;
        //console.log(status);
        //console.log(total);
    }
    document.getElementById("total").textContent=total;
    let average=0;
    if(students.length>0){
        average=total/students.length;
    }
    document.getElementById("average").textContent=average;
}


