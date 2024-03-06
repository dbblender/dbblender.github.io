document.addEventListener("DOMContentLoaded", function () {
  const sites = [
    "https://forms.office.com/r/PsEEBz1hhD",
    "https://forms.office.com/r/9d7gBQvWG5",
    "https://forms.office.com/r/KVbzMPm0hh",
    "https://forms.office.com/r/akH3vjB963",
  ];

  function pickRandomSite() {
    var site = Math.floor(Math.random() * sites.length);
    var selectedLink = sites[site];

    window.location.href = selectedLink;
  }

  pickRandomSite();
});
