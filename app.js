let age;

do{ 
    age= parseInt(prompt("몇 살인가?"));
if(isNaN(age)){
    alert("숫자만 입력해주세요");
}
}

while(isNaN(age));
if(age < 18){
    console.log("미성년자입니다");
}
else if(age >= 18 && age <= 60){
    console.log("성인입니다.");
}
else if(age >= 61){
    console.log("노년입니다.");
}
