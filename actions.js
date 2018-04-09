
function createStudent(){
    var first = document.getElementById("sfn").value;
    var last = document.getElementById("sln").value;
    var grade = document.getElementById("grd").value;
    if(first==""|| last=="" || grade==""){
        document.getElementById("response").innerHTML= "Can't process student due to a lack of information. Please check information and try again";
    }
    else{
        document.getElementById("response").innerHTML=first+" "+last+" has been added successfully!";
        allStudents[allStudents.length] = new Student(first, last, grade);
        generateStudentList();
    }
}
function createTeacher(){
    var first=document.getElementById("tfn").value;
    var last=document.getElementById("tln").value;
    var subj=document.getElementById("tsub").value;
    if(first==""|| last=="" || subj==""){
        document.getElementById("response2").innerHTML= "Can't process teacher due to a lack of information. Please check information and try again";
    }
    else {
        document.getElementById("response2").innerHTML = first + " " + last + " has been successfully added to teach " + subj + "!";
        allTeachers[allTeachers.length] = new Teacher(first, last, subj);
        generateTeacherList();
    }
}
function createSubj(){
    var name=document.getElementById("subn").value;
    var size=document.getElementById("submax").value;
    if(name==""|| size=="" ){
        document.getElementById("response3").innerHTML= "Can't process teacher due to a lack of information. Please check information and try again";
    }
    else {
        document.getElementById("response3").innerHTML=name+" has been successfully added as a subject!"
    }
    allSections[allSections.length]=new Section(name,size);
    generateSubjList();

}

function generateTeacherList(){
    var gtl="";
    for(var i =0; i<allTeachers.length;i++){
        gtl+="<option value='";
        gtl+=allTeachers[i].id;
        gtl+="'>";
        gtl+=allTeachers[i].firstName + " " + allTeachers[i].lastName;
        gtl+="</option>";
    }
    document.getElementById("possibleTeachers").innerHTML=gtl;
    document.getElementById("addT").innerHTML=gtl;
}
function generateStudentList(){
    var gsl="";
    for(var i=0; i<allStudents.length;i++){
        gsl+="<option value='";
        gsl+=allStudents[i].id;
        gsl+="'>";
        gsl+=allStudents[i].firstName+ " "+allStudents[i].lastName;
        gsl+="</option>"
    }
    document.getElementById("addS").innerHTML+=gsl;
    document.getElementById("studsect").innerHTML+=gsl;
}


function generateSubjList(){
    var subl="";
    for(var i=0; i<allSections.length;i++){
        subl+="<option value='";
        subl+=allSections[i].id;
        subl+="'>";
        subl+=allSections[i].name;
        subl+="</option>";

    }
    document.getElementById("studentsubj").innerHTML=subl;
    document.getElementById("teachsubj").innerHTML=subl;
    document.getElementById("studsect").innerHTML=subl;
}
function listIt(){
    var select= document.getElementById("items").value;
     if(select==1){
         var tl="<table border=1>";
         for(var i =0; i<allTeachers.length;i++){
             tl+="<tr>";
             tl+="<td>"+allTeachers[i].firstName+"</td>";
             tl+="<td>"+allTeachers[i].lastName+"</td>";
             tl+="<td>"+allTeachers[i].subject+"</td>";
             tl+="</tr>";
         }
         tl+="</table>";
         document.getElementById("listOutput").innerHTML=tl;
     }
      if (select==0){
         var sl="<table border=1>";
         for(var j =0; j<allStudents.length;j++){
             sl+="<tr>";
             sl+="<td>"+allStudents[j].firstName+"</td>";
             sl+="<td>"+allStudents[j].lastName+"</td>";
             sl+="<td>"+allStudents[j].grade+"</td>";
             sl+="</tr>";
         }
         sl+="</table>";
         document.getElementById("listOutput").innerHTML=sl;
     }
      if(select==2){
         var subl="<table border=1>";
         for(var k =0; k<allSections.length;k++){
             subl+="<tr>";
             subl+="<td>"+allSections[k].name+"</td>";
             subl+="<td>"+allSections[k].maxSize+"</td>";
             subl+="</tr>";
         }
         subl+="</table>";
         document.getElementById("listOutput").innerHTML=subl;



     }
}

function studentById(studentid){
    for (var i=0; i<allStudents.length; i++){
        if(allStudents[i].id==studentid){
            return allStudents[i];
        }
    }
}
function teacherById(teacherid){
    for (var i=0; i<allTeachers.length; i++){
        if(allTeachers[i].id==teacherid){
            return allTeachers[i];
        }
    }
}
function subjectById(subjectid){
    for (var i=0; i<allSections.length;i++){
        if(allSections[i].id==subjectid){
            return allSections[i];
        }
    }
}
function addStudent(){
    var stud=studentById(document.getElementById("addS").value);
    var sub=subjectById(document.getElementById("studentsubj").value);
    sub.maxSize-=1;
    sub.students.push(stud);
    if(sub.maxSize==0){
       document.getElementById("studclass").value="Sorry! Student cannot be added because this class has reached its limit.";
    }
    else{
        document.getElementById("studclass").value="Student Added!";
    }
}
function addTeacher(){
    var teach=teacherById(document.getElementById("addT").value);
    var sub=subjectById(document.getElementById("teachsubj").value);
    sub.teacher=teach;

}

function listStudentsInSection() {
    var subj=subjectById(document.getElementById("studsect").value);
        var tl = "<table border=1>";
        for (var i=0; i<subj.students.length; i++) {
            tl += "<tr>";
            tl += "<td>" + subj.students[i].firstName + "</td>";
            tl += "<td>" + subj.students[i].lastName + "</td>";
            tl += "<td>" + subj.students[i].grade + "</td>";
            tl += "</tr>";
        }
        tl += "</table>";
        document.getElementById("listed").innerHTML = tl;

}