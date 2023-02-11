document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", function() {
    let currentUrl = window.location.href;
    let jumpPaywall = "https://12ft.io/proxy?q=" + currentUrl;
    window.location.replace(jumpPaywall);
  });
});
