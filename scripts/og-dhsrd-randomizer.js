// Fetch data
let fetchData = await fetch("./db/og-dhsrd.json");
let data = await fetchData.json();

//initialize

randomAncestryFeature1();
randomAncestryFeature2();
refreshTooltips();

// Randomize

function randomAncestryFeature1() {
  let firstfeature = data.ancestryfeature1[Math.floor(Math.random() * data.ancestryfeature1.length)];
  document.getElementById("random-ancestry-feature-1").innerHTML = firstfeature;
}

function randomAncestryFeature2() {
  let secondfeature = data.ancestryfeature2[Math.floor(Math.random() * data.ancestryfeature2.length)];
  document.getElementById("random-ancestry-feature-2").innerHTML = secondfeature;
}

// Listen

document.getElementById("new-random-ancestry-feature-1").addEventListener("click", function (event) {
  randomAncestryFeature1();
  refreshTooltips();
});

document.getElementById("new-random-ancestry-feature-2").addEventListener("click", function (event) {
  randomAncestryFeature2();
  refreshTooltips();
});

document.getElementById("new-random-ancestry-mix").addEventListener("click", function (event) {
  randomAncestryFeature1();
  randomAncestryFeature2();
  refreshTooltips();
});

function refreshTooltips() {
    $("a[href^=\\#define-]")
        .tooltip({
            html: true,
            title: function () {
                return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<div></div>').parent()
            }
        })
}