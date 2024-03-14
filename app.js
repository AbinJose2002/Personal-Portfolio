const typeWriter = document.getElementById('typewriter-text');
const text = "I'm a Web Developer";
typeWriter.style.color = "700B97"
typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);


