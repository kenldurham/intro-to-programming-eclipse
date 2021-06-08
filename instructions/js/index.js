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
  removeButton.style.backgroundColor = "red"
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
