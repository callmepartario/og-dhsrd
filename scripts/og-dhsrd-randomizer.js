// Fetch data
let fetchData = await fetch("./db/og-dhsrd.json");
let data = await fetchData.json();

//initialize

randomAncestryFeature1();
randomAncestryFeature2();
randomLoot1d12();
randomConsumable1d12();
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

function rolld12 () {
  return Math.random(12);
}

function randomLoot1d12() {
    document.getElementById("random-loot-roll-1d12").innerHTML = "1d12";
    let randomLootResult = rolld12();
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult];
    document.getElementById("random-loot").innerHTML = randomLoot;
}
function randomLoot2d12() {
    document.getElementById("random-loot-roll-2d12").innerHTML = "2d12";
    let randomLootResult = rolld12() + 1 + rolld12();
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult];
    document.getElementById("random-loot").innerHTML = randomLoot;
}
function randomLoot3d12() {
    document.getElementById("random-loot-roll-3d12").innerHTML = "3d12";
    let randomLootResult = rolld12() + 2 + rolld12() + rolld12();
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult];
    document.getElementById("random-loot").innerHTML = randomLoot;
}
function randomLoot4d12() {
    document.getElementById("random-loot-roll-4d12").innerHTML = "4d12";
    let randomLootResult = rolld12() + 3 + rolld12() + rolld12() + rolld12();
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult];
    document.getElementById("random-loot").innerHTML = randomLoot;
}
function randomLoot5d12() {
    document.getElementById("random-loot-roll-5d12").innerHTML = "5d12";
    let randomLootResult = rolld12() + 4 + rolld12() + rolld12() + rolld12() + rolld12();
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult];
    document.getElementById("random-loot").innerHTML = randomLoot;
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

document.getElementById("new-random-loot-1d12").addEventListener("click", function (event) {
  randomLoot1d12();
  refreshTooltips();
});

document.getElementById("new-random-loot-2d12").addEventListener("click", function (event) {
  randomLoot2d12();
  refreshTooltips();
});

document.getElementById("new-random-loot-3d12").addEventListener("click", function (event) {
  randomLoot3d12();
  refreshTooltips();
});

document.getElementById("new-random-loot-4d12").addEventListener("click", function (event) {
  randomLoot4d12();
  refreshTooltips();
});

document.getElementById("new-random-loot-5d12").addEventListener("click", function (event) {
  randomLoot5d12();
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
