let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
});

typewriter
  .pauseFor(1000)
  .typeString('Alison Castillo')
  .pauseFor(300)
  .deleteChars(20)
  .start();