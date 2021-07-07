const education = {
  CodeTenderlion: "CodeRamp and CodeRamp++",
  CodetheDream: "RedEclipse",
};
const eduSection = document.getElementById("education");
const eduList = eduSection.querySelector("ul");
for (const key in education) {
  const edu = document.createElement("li");
  edu.innerText = `${education[key]}`;
  eduSection.appendChild(edu);
}
const companies = [
  'Motivate LLC', 
  'TW Services', 
  'California Freight', 
  'Nitelife ENT'
];
const experience = document.getElementById('companies');
const expList = experience.querySelector('ul');
for(let i = 0; i < companies.length;i++){
  const exp = document.createElement('li');
  exp.innerText = `${companies[i]}`;
  experience.appendChild(exp);
  console.log(companies[i])
}
console.log(eduSection);
const today = new Date();
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");
console.log(footer);

const copyright = document.createElement("p");
console.log(copyright);

copyright.innerHTML = `Kenneth Durham ${thisYear}`;
console.log(copyright);

footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "10 key"];

const skillsSection = document.getElementById("skills");
console.log(skillsSection);

const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsSection.appendChild(skill);
}
const messageSection = document.getElementById("messages");
const messageList = messageSection.getElementsByTagName("ul")[0];
const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  console.log(`Name:${name} Email:${email} Message:${message}`);
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>: ${message}</span>`;

  messageList.appendChild(newMessage);

  const removeButton = document.createElement("button");
  removeButton.innerText ="remove"
  removeButton.type = "button";
  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });
  
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

const iframe = document.querySelector('#our-video');
console.log(iframe);
window.addEventListener('resize', event => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    if(newWidth < 400) {
        iframe.width = newWidth;
        iframe.height = newHeight;
    } else {
        iframe.width = newWidth/2;
        iframe.height = newHeight/2;
    }
});

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/kenldurham/repos");
githubRequest.send();
githubRequest.addEventListener("load" , function (event){
  let repositories = JSON.parse(githubRequest.response);
  console.log(repositories);
  let projectSection = document.getElementById("projects");
  let projectList = projectSection.querySelector('ul');
  for(let i = 0; i < repositories.length ; i++){
    let project = document.createElement("li");
   project.innerText = repositories[i].name;
   projectList.appendChild(project); 
  };
});



  