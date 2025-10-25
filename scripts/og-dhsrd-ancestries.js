// variables
var feature1 = 1;
var feature1value = 1;
var feature2 = 1;
var feature2value = 1;

// data arrays
const ancestryname = [ 
  "<a href='#define-clank'>Clank</a>",
	"<a href='#define-drakona'>Drakona</a>",
	"<a href='#define-dwarf'>Dwarf</a>",
	"<a href='#define-elf'>Elf</a>",
	"<a href='#define-faerie'>Faerie</a>",
	"<a href='#define-faun'>Faun</a>",
	"<a href='#define-firbolg'>Firbolg</a>",
	"<a href='#define-fungril'>Fungril</a>",
	"<a href='#define-galapa'>Galapa</a>",
	"<a href='#define-giant'>Giant</a>",
	"<a href='#define-goblin'>Goblin</a>",
	"<a href='#define-halfling'>Halfling</a>",
	"<a href='#define-human'>Human</a>",
	"<a href='#define-infernis'>Infernis</a>",
	"<a href='#define-katari'>Katari</a>",
	"<a href='#define-orc'>Orc</a>",
	"<a href='#define-ribbet'>Ribbet</a>",
	"<a href='#define-simiah'>Simiah</a>"
 ];

const ancestryfeature1 = [
  "<strong><em>Purposeful Design:</em></strong> Decide who made you and for what purpose. At <a href='#define-character-creation'>character creation</a>, choose one of your <a href='#define-experience'>Experiences</a> that best aligns with this purpose and gain a permanent +1 bonus to it.",
	"<strong><em>Scales:</em></strong> Your scales act as natural protection. When you would take <a href='#define-hit-point'>Severe</a> damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to mark 1 fewer <a href='#define-hit-point'>Hit Points</a>.",
	"<strong><em>Thick Skin:</em></strong> When you take <a href='#define-hit-point'>Minor</a> damage, you can <strong><a href='#define-stress'>mark 2 Stress</a></strong> instead of marking a <a href='#define-hit-point'>Hit Point</a>.",
	"<strong><em>Quick Reactions:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to gain <a href='#define-advantage'>advantage</a> on a <a href='#define-reaction-roll'>reaction roll</a>.",
	"<strong><em>Luckbender:</em></strong> Once per session, after you or a willing ally within <a href='#define-range'>Close</a> range makes an action roll, you can spend 3 Hope to <a href='#define-reroll'>reroll</a> the <a href='#define-action-roll'>Duality Dice</a>.",
	"<strong><em>Caprine Leap:</em></strong> You can leap anywhere within <a href='#define-range'>Close</a> range as though you were using normal movement, allowing you to vault obstacles, jump across gaps, or scale barriers with ease.",
	"<strong><em>Charge:</em></strong> When you succeed on an <a href='#define-trait-roll'>Agility Roll</a> to move from Far or <a href='#define-range'>Very Far</a> range into <a href='#define-range'>Melee</a> range with one or more targets, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to deal <strong>1d12</strong> <a href='#define-damage-type'>physical damage</a> to all targets within <a href='#define-range'>Melee</a> range.",
	"<strong><em>Fungril Network:</em></strong> Make an <strong><a href='#define-trait-roll'>Instinct Roll (12)</a></strong> to use your mycelial array to speak with others of your ancestry. On a success, you can communicate across any distance.",
	"<strong><em>Shell:</em></strong> Gain a bonus to your  <a href='#define-hit-point'>damage thresholds</a> equal to your <a href='#define-damage-roll'>Proficiency</a>.",
	"<strong><em>Endurance:</em></strong> Gain an additional <a href='#define-hit-point'>Hit Point</a> slot at <a href='#define-character-creation'>character creation</a>.",
	"<strong><em>Surefooted:</em></strong> You ignore <a href='#define-advantage'>disadvantage</a> on <a href='#define-trait-roll'>Agility Rolls</a>.",
	"<strong><em>Luckbringer:</em></strong> At the start of each session, everyone in your party gains a <a href='#define-hope'>Hope</a>.",
	"<strong><em>High Stamina:</em></strong> Gain an additional <a href='#define-stress'>Stress</a> slot at <a href='#define-character-creation'>character creation</a>.",
	"<strong><em>Fearless:</em></strong> When you <a href='#define-action-roll'>roll with Fear</a>, you can <strong><a href='#define-stress'>mark 2 Stress</a></strong> to change it into a <a href='#define-action-roll'>roll with Hope</a> instead.",
	"<strong><em>Feline Instincts:</em></strong> When you make an <a href='#define-trait-roll'>Agility Roll</a>, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to <a href='#define-reroll'>reroll</a> your <a href='#define-action-roll'>Hope Die</a>.",
	"<strong><em>Sturdy:</em></strong> When you have 1 <a href='#define-hit-point'>Hit Point</a> remaining, attacks against you have <a href='#define-advantage'>disadvantage</a>.",
	"<strong><em>Amphibious:</em></strong> You can breathe and move naturally underwater.",
	"<strong><em>Natural Climber:</em></strong> You have <a href='#define-advantage'>advantage</a> on <a href='#define-trait-roll'>Agility Rolls</a> that involve balancing and climbing."
];

const ancestryfeature2 = [
	"<strong><em>Efficient:</em></strong> When you take a <a href='#define-downtime'>short rest</a>, you can choose a <a href='#define-downtime'>long rest</a> move instead of a short rest move.",
	"<strong><em>Elemental Breath:</em></strong> Choose an element for your breath (such as electricity, fire, or ice). You can use this breath against a target or group of targets within <a href='#define-range'>Very Close</a> range, treating it as an <a href='#define-instinct'>Instinct</a> <a href='#define-weapon'>weapon</a> that deals <strong>d8</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.",
	"<strong><em>Increased Fortitude:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to halve incoming <a href='#define-damage-type'>physical damage</a>.",
	"<strong><em>Celestial Trance:</em></strong> During a rest, you can drop into a trance to choose an additional <a href='#define-downtime-move'>downtime move</a>.",
	"<strong><em>Wings:</em></strong> You can fly. While flying, you can <strong><a href='#define-stress'>mark a Stress</a></strong> after an <a href='#define-adversary'>adversary</a> makes an attack against you to gain a +2 bonus to your <a href='#define-evasion'>Evasion</a> against that attack.",
	"<strong><em>Kick:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to kick yourself off them, dealing an extra <strong>2d6</strong> damage and knocking back either yourself or the target to <a href='#define-range'>Very Close</a> range.",
  "<strong><em>Unshakable:</em></strong> When you would mark a <a href='#define-stress'>Stress</a>, roll a <strong>d6</strong>. On a result of 6, don't mark it.",
	"<strong><em>Death Connection:</em></strong> While touching a corpse that died recently, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to extract one memory from the corpse related to a specific emotion or sensation of your choice.",
	"<strong><em>Retract:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to retract into your shell. While in your shell, you have <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>, you have <a href='#define-advantage'>disadvantage</a> on <a href='#define-action-roll'>action rolls</a>, and you can't move.",
	"<strong><em>Reach:</em></strong> Treat any <a href='#define-weapon'>weapon</a>, ability, spell, or other feature that has a <a href='#define-range'>Melee</a> range as though it has a <a href='#define-range'>Very Close</a> range instead.",
	"<strong><em>Danger Sense:</em></strong> Once per <a href='#define-downtime'>rest</a>, mark a <a href='#define-stress'>Stress</a> to force an <a href='#define-adversary'>adversary</a> to <a href='#define-reroll'>reroll</a> an attack against you or an ally within <a href='#define-range'>Very Close</a> range.",
	"<strong><em>Internal Compass:</em></strong> When you roll a 1 on your <a href='#define-action-roll'>Hope Die</a>, you can <a href='#define-reroll'>reroll</a> it.",
	"<strong><em>Adaptability:</em></strong> When you fail a roll that <a href='#define-experience'>utilized one of your Experiences</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to <a href='#define-reroll'>reroll</a>.",
	"<strong><em>Dread Visage:</em></strong> You have <a href='#define-advantage'>advantage</a> on rolls to intimidate hostile creatures.",
	"<strong><em>Retracting Claws:</em></strong> Make an <strong><a href='#define-trait-roll'>Agility Roll</a></strong> to scratch a target within <a href='#define-range'>Melee</a> range. On a success, they become <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.",
	"<strong><em>Tusks:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can spend a Hope to gore the target with your tusks, dealing an extra <strong>1d6</strong> damage.",
	"<strong><em>Long Tongue:</em></strong> You can use your long tongue to grab onto things within <a href='#define-range'>Close</a> range. <strong><a href='#define-stress'>Mark a Stress</a></strong> to use your tongue as a <a href='#define-finesse'>Finesse</a> <a href='#define-range'>Close</a> <a href='#define-weapon'>weapon</a> that deals <strong>d12</strong> <a href='#define-damage-type'>physical damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.",
	"<strong><em>Nimble:</em></strong> Gain a permanent +1 bonus to your <a href='#define-evasion'>Evasion</a> at <a href='#define-character-creation'>character creation</a>."
];

// Listen for random selections
document.getElementById("new-random-ancestry-mix").addEventListener("click", function (event) { 
  randomAncestry(1); 
  randomAncestry(2); 
  setAncestryFeatures()
});

document.getElementById("new-random-ancestry-feature-1").addEventListener("click", function (event) { 
  randomAncestry(1);
  setAncestryFeatures()
});
document.getElementById("new-random-ancestry-feature-2").addEventListener("click", function (event) { 
  randomAncestry(2); 
  setAncestryFeatures()
});

// Listen for manual selections
document.querySelector('#mixed-ancestry-select-1').addEventListener("change", function() { setAncestryFeatures(); });
document.querySelector('#mixed-ancestry-select-2').addEventListener("change", function() { setAncestryFeatures(); });

// Randomize selection

function randomAncestry(x) {
  let selection = document.getElementById("mixed-ancestry-select-" + x);
  selection.value = (Math.floor(Math.random() * (ancestryname.length)) + 1);
}

// Confirm selection and populate tables
function setAncestryFeatures() {
  // feature 1
  feature1 = document.getElementById("mixed-ancestry-select-1");
  feature1value = feature1.value - 1;
  document.getElementById("random-ancestry-1").innerHTML = ancestryname[feature1value];
  document.getElementById("random-ancestry-feature-1").innerHTML = ancestryfeature1[feature1value];
  // feature 2
  feature2 = document.getElementById("mixed-ancestry-select-2");
  feature2value = feature2.value - 1;
  document.getElementById("random-ancestry-2").innerHTML = ancestryname[feature2value];
  document.getElementById("random-ancestry-feature-2").innerHTML = ancestryfeature2[feature2value];
  refreshTooltips();
}

// Refresh Tooltips after population
function refreshTooltips() {
  $("a[href^=\\#define-]")
  .tooltip({
    html: true,
    title: function () {
      return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<div></div>').parent()
    }
  })
}

// Initialize
randomAncestry(1); 
randomAncestry(2); 
setAncestryFeatures();