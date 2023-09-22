import init, {
    charge_kamehameha,
    get_power_level,
    fire_kamehameha,
  } from "./rust/dist/dragon_ball.js";

  init().then(() => {
    const chargePowerBtn = document.getElementById("chargeBtn");
    const firePowerBtn = document.getElementById("fireBtn");
    const powerLevelElement = document.getElementById("powerLevel");
    const resultContainer = document.getElementById("result");

    const updatePowerLevel = () => {
      /**================== WASM ======================= */
      const powerLevel = get_power_level();
      /**=============================================== */

      powerLevelElement.textContent = powerLevel;
      const maxWidth = 100;
      const currentWidth = (powerLevel / 100) * maxWidth;
      powerBar.style.width = currentWidth + "%";
    }

    chargePowerBtn.addEventListener("click", () => {
      /**================== WASM ======================= */
      charge_kamehameha();
      /**=============================================== */

      updatePowerLevel();
      resultContainer.textContent = "";
    });

    firePowerBtn.addEventListener("click", () => {
      /**================== WASM ======================= */
      const result = fire_kamehameha();
      /**=============================================== */

      const powerLevel = Number(powerLevelElement.textContent);

      if (powerLevel >= 50) {
        const powerGif = document.getElementById("powerGif");
        powerGif.setAttribute("src", "./goku-kame.gif");
        powerGif.style.display = "block";
        chargePowerBtn.disabled = true;
        firePowerBtn.disabled = true;

        setTimeout(() => {
          powerGif.style.display = "none";
          powerGif.setAttribute("src", "");
          chargePowerBtn.disabled = false;
          firePowerBtn.disabled = false;
          resultContainer.textContent = "";
        }, 2700);
        updatePowerLevel();
      }

      resultContainer.textContent = result;
    });
  });