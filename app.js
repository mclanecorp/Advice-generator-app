const id_advice = document.getElementById("id");
const texte_advice = document.getElementById("texte");
const roll_dice = document.getElementById("btn_dice");

function roll() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const id_resp = data.slip.id;
      const advice = data.slip.advice;
      id_advice.innerText = id_resp;
      texte_advice.innerText = advice;
      console.log("id : " + id_resp + " advice : " + advice);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

roll_dice.addEventListener("click", () => {
  roll();
});

roll();
