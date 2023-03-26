(function () {
  const fonts = ["cursive", "dan-serif", "serif", "monospace"];
  let captchaValue = "";

  function generateCaptcha() {
    let value = btoa(Math.random() * 1000000);
    value = value.substr(0, 5 + Math.random() * 5);
    captchaValue = value;
  }
  function setCaptcha() {
    console.log(captchaValue);
    let html = captchaValue
      .split("")
      .map((char) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.lenght);
        return `<span
            style="
            transform:rotate(${rotate}deg);
            font-familt:${font[font]}
            "
            >${char}</span>`;
      })
      .join("");
    console.log(html);
    document.querySelector(".login-form .captcha .preview").innerHTML = html;
  }

  function initCaptcha() {
    document
      .querySelector(".login-form .captcha .captcha-refresh")
      .addEventListener("click", () => {
        generateCaptcha();
        setCaptcha();
      });
    generateCaptcha();
    setCaptcha();
  }

  initCaptcha();

  document
    .querySelector(".login-form #login-btn")
    .addEventListener("click", () => {
      let inputCaptchaValue = document.querySelector(
        ".login-form .captcha input"
      ).value;
      if (inputCaptchaValue === captchaValue) {
        alert("login sucessfully");
      } else {
        alert("invalid captcha");
      }
    });
})();
