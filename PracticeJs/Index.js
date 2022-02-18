console.log('We exceuted console from seperate file');



let student={
    studentFistName:'Benjamin',
    studentLastName:'Landry',
    studentAge:22,
    isGraduated:false,
    majorSubject: 'Chemistry',
    GPA: 4.5
};

console.log(student);
console.log(student.studentFistName);

student.studentFistName='Trex';
console.log(student);
console.log(student.studentFistName);

student['studentFistName']='Kahasim';
console.log(student);
console.log(student.studentFistName);

let subjects=['Physics','Chemistry','Maths'];
console.log(subjects);
console.log(subjects[1]);
console.log('Length of Array: '+subjects.length);

subjects[3]='English';
console.log(subjects);
console.log('Length of Array: '+subjects.length);

subjects[4]=5;
console.log(subjects);
console.log('Length of Array: '+subjects.length);

const sub=subjects;
function welcome(comapnyName){
    console.log('Welcome to '+ comapnyName);
}
welcome('Cognizant');
welcome('Genspark');
document.getElementById("testid").innerHTML=subjects; 
document.getElementById("test").innerHTML=subjects;
window.alert('Welcome');

