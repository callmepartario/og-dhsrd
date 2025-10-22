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

function rollDice(pool, sides) {
  let rollTotal = 0;
  for (let i = 0; i < pool; i++) {
    let roll = Math.floor(Math.random() * sides) + 1;
    rollTotal = rollTotal + roll;
  }
  return rollTotal;
}

function randomLoot1d12() {
    document.getElementById("random-loot-roll").innerHTML = "1d12";
    let randomLootResult = rollDice(1, 12);
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult - 1];
    document.getElementById("random-loot").innerHTML = randomLoot;
    let randomLootChance = data.chance1d12[RandomLoot];
    document.getElementById("random-loot-chance").innerHTML = randomLootChance;
}
function randomLoot2d12() {
    document.getElementById("random-loot-roll").innerHTML = "2d12";
    let randomLootResult = rollDice(2, 12);
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult - 1];
    document.getElementById("random-loot").innerHTML = randomLoot;
    let randomLootChance = data.chance2d12[RandomLoot];
    document.getElementById("random-loot-chance").innerHTML = randomLootChance;
}
function randomLoot3d12() {
    document.getElementById("random-loot-roll").innerHTML = "3d12";
    let randomLootResult = rollDice(3, 12);
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult - 1];
    document.getElementById("random-loot").innerHTML = randomLoot;
    let randomLootChance = data.chance3d12[RandomLoot];
    document.getElementById("random-loot-chance").innerHTML = randomLootChance;
}
function randomLoot4d12() {
    document.getElementById("random-loot-roll").innerHTML = "4d12";
    let randomLootResult = rollDice(4, 12);
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult - 1];
    document.getElementById("random-loot").innerHTML = randomLoot;
    let randomLootChance = data.chance4d12[RandomLoot];
    document.getElementById("random-loot-chance").innerHTML = randomLootChance;
}
function randomLoot5d12() {
    document.getElementById("random-loot-roll").innerHTML = "5d12";
    let randomLootResult = rollDice(5, 12);
    document.getElementById("random-loot-result").innerHTML = randomLootResult;
    let randomLoot = data.loot[randomLootResult - 1];
    document.getElementById("random-loot").innerHTML = randomLoot;
    let randomLootChance = data.chance5d12[RandomLoot];
    document.getElementById("random-loot-chance").innerHTML = randomLootChance;
}

function randomConsumable1d12() {
    document.getElementById("random-consumable-roll").innerHTML = "1d12";
    let randomConsumableResult = rollDice(1, 12);
    document.getElementById("random-consumable-result").innerHTML = randomConsumableResult;
    let randomConsumable = data.consumables[randomConsumableResult - 1];
    document.getElementById("random-consumable").innerHTML = randomConsumable;
    let randomConsumableChance = data.chance1d12[RandomConsumable];
    document.getElementById("random-consumable-chance").innerHTML = randomConsumableChance;
}
function randomConsumable2d12() {
    document.getElementById("random-consumable-roll").innerHTML = "2d12";
    let randomConsumableResult = rollDice(2, 12);
    document.getElementById("random-consumable-result").innerHTML = randomConsumableResult;
    let randomConsumable = data.consumables[randomConsumableResult - 1];
    document.getElementById("random-consumable").innerHTML = randomConsumable;
    let randomConsumableChance = data.chance2d12[RandomConsumable];
    document.getElementById("random-consumable-chance").innerHTML = randomConsumableChance;
}
function randomConsumable3d12() {
    document.getElementById("random-consumable-roll").innerHTML = "3d12";
    let randomConsumableResult = rollDice(3, 12);
    document.getElementById("random-consumable-result").innerHTML = randomConsumableResult;
    let randomConsumable = data.consumables[randomConsumableResult - 1];
    document.getElementById("random-consumable").innerHTML = randomConsumable;
    let randomConsumableChance = data.chance3d12[RandomConsumable];
    document.getElementById("random-consumable-chance").innerHTML = randomConsumableChance;
}
function randomConsumable4d12() {
    document.getElementById("random-consumable-roll").innerHTML = "4d12";
    let randomConsumableResult = rollDice(4, 12);
    document.getElementById("random-consumable-result").innerHTML = randomConsumableResult;
    let randomConsumable = data.consumables[randomConsumableResult - 1];
    document.getElementById("random-consumable").innerHTML = randomConsumable;
    let randomConsumableChance = data.chance4d12[RandomConsumable];
    document.getElementById("random-consumable-chance").innerHTML = randomConsumableChance;
}
function randomConsumable5d12() {
    document.getElementById("random-consumable-roll").innerHTML = "5d12";
    let randomConsumableResult = rollDice(5, 12);
    document.getElementById("random-consumable-result").innerHTML = randomConsumableResult;
    let randomConsumable = data.consumables[randomConsumableResult - 1];
    document.getElementById("random-consumable").innerHTML = randomConsumable;
    let randomConsumableChance = data.chance5d12[RandomConsumable];
    document.getElementById("random-consumable-chance").innerHTML = randomConsumableChance;
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

document.getElementById("new-random-consumable-1d12").addEventListener("click", function (event) {
  randomConsumable1d12();
  refreshTooltips();
});

document.getElementById("new-random-consumable-2d12").addEventListener("click", function (event) {
  randomConsumable2d12();
  refreshTooltips();
});

document.getElementById("new-random-consumable-3d12").addEventListener("click", function (event) {
  randomConsumable3d12();
  refreshTooltips();
});

document.getElementById("new-random-consumable-4d12").addEventListener("click", function (event) {
  randomConsumable4d12();
  refreshTooltips();
});

document.getElementById("new-random-consumable-5d12").addEventListener("click", function (event) {
  randomConsumable5d12();
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
