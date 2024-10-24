

var typeData=new Typed(".role", {
    strings: [
    "Full Stack Web Developer",
    "Web Developer",
    "UI-UX Developer",
    "Backend Developer",
    "Coder",
    ],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:1000,
  });

  
    var icon=document.getElementById("icon");

    icon.onclick=function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src="light.webp";
        }else{
            icon.src="dark.png";
        }
    }


