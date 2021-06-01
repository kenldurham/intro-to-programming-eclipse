
const education = {
 CodeTenderlion: 'CodeRamp and CodeRamp++',
 CodetheDream: 'RedEclipse'
};
const eduSection = document.getElementById('education');
const eduList = eduSection.querySelector('ul');
for( const key in education){
    const edu = document.createElement('li')
   edu.innerText = `${education[key]}`;
   eduSection.appendChild(edu);

}
console.log(eduSection);
const today = new Date();
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector('footer')
console.log(footer);

const copyright = document.createElement('p');
console.log(copyright);

copyright.innerHTML = `Kenneth Durham ${thisYear}`;
console.log(copyright);

footer.appendChild(copyright);

const skills = [ 'Javascript', 'HTML', '10 key'];

const skillsSection = document.getElementById('skills');
console.log(skillsSection);

const skillsList = skillsSection.querySelector('ul')
for( let i = 0; i < skills.length; i++){
    const skill = document.createElement('li')
   skill.innerText = skills[i];
   skillsSection.appendChild(skill);

}


