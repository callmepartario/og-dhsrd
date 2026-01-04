// character creation settings
var ccUserClass = 0;
var ccUserSubclass = 0;
var ccUserAncestry = 0;
var ccUserCommunity = 0;
var ccUserWeaponPrimary = 0;
var ccUserWeaponSecondary = 0;
var ccUserArmor = 0;
var ccUserConsumable = 0;
var ccUserClassItem = 0;
var ccUserDomainCard1 = 0;
var ccUserDomainCard2 = 0;
var ccUserDomainCard3 = 0;
var ccUserExperienceList = 0;
const ccUserClassDeck = [0,1,2,3,4,5];

var readerPreference = localStorage.getItem('readerMode');

// benchmark settings
let Hdie = 0;
let Fdie = 0;
let Adie = 0;
let Ddie = 0;

/* DATA */
// classes
const classesList = [
{ label: "Bard", name: "bard", pages: ["Page 28"], summarybrief: "<strong><a href='#define-bard'>Bards</a></strong> are the most charismatic people in all the realms.", summary: "Bards are the most charismatic people in all the realms. Members of this class are masters of captivation and specialize in a variety of performance types, including singing, playing musical instruments, weaving tales, or telling jokes. Whether performing for an audience or speaking to an individual, bards thrive in social situations. Members of this profession bond and train at schools or guilds, but a current of egotism runs through those of the bardic persuasion. While they may be the most likely class to bring people together, a bard of ill temper can just as easily tear a party apart.", domains: ["Grace", "Codex"], evasion: 10, hp: 5, items: ["romance novel", "letter never opened"], hopefeature: "<strong><em>Make a Scene:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to <a href='#define-temporary'>temporarily</a> <em>Distract</em> a target within <a href='#define-range'>Close</a> range, giving them a &minus;2 penalty to their <a href='#define-difficulty'>Difficulty</a>.", features: ["<strong><em>Rally:</em></strong> Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a <strong>d6</strong>. A PC can spend their Rally Die to roll it, adding the result to their <a href='#define-action-roll'>action roll</a>, <a href='#define-reaction-roll'>reaction roll</a>, <a href='#define-damage-roll'>damage roll</a>, or to clear a number of <a href='#define-stress'>Stress</a> equal to the result. At the end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a <strong>d8</strong>."], sidebar: "", subclasses: ["Troubadour", "Wordsmith"], traitarray: [0, 1, 1, 0, 2, 1], weaponprimary: "Rapier", weaponsecondary: "Small Dagger", armor: "Gambeson Armor", questions: ["Who from your community taught you to have such confidence in yourself?", "You were in love once. Who did you adore, and how did they hurt you?", "You've always looked up to another bard. Who are they, and why do you idolize them?"], connections: ["What made you realize we were going to be such good friends?", "What do I do that annoys you?", "Why do you grab my hand at night?"], qualities: "As a <a href='#define-bard'>Bard</a>, you know how to get people to talk, bring attention to yourself, and use words or music to influence the world around you.",  clothes: ["extravagant", "fancy", "loud", "oversized", "ragged", "sleek", "wild"],attitudes: ["barkeep", "magician", "ringmaster", "rock star", "swashbuckler"] },
{ label: "Druid", name: "druid", pages:["Page 30"], summarybrief: "Becoming a <strong><a href='#define-druid'>Druid</a></strong> is more than an occupation; it's a calling for those who wish to learn from and protect the magic of the wilderness.", summary: "Becoming a duird is more than an occupation; it's a calling for those who wish to learn from and protect the magic of the wilderness. While one might underestimate a gentle druid who practices the often-quiet work of cultivating flora, druids who channel the untamed forces of nature are terrifying to behold. Druids cultivate their abilities in small groups, often connected by a specific ethos or locale, but some choose to work alone. Through years of study and dedication, druids can learn to transform into beasts and shape nature itself.", domains: ["Sage", "Arcana"], evasion: 10, hp: 6, items: ["small bag of rocks and bones", "strange pendant found in the dirt"], hopefeature: "<p><strong><em>Evolution:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to transform into a <strong><em>Beastform</em></strong> without marking a <a href='#define-stress'>Stress</a>. When you do, choose one <a href='#define-trait'>trait</a> to raise by +1 until you drop out of that Beastform.</p>", features: ["<p><strong><em>Beastform:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to magically transform into a creature of your <a href='#define-tier'>tier</a> or lower from the <a href='#define-druid-beastform-options'>Beastform list</a>. You can drop out of this form at any time. While transformed, you can't use weapons or cast spells from <a href='#define-domain-card'>domain cards</a>, but you can still use other features or abilities you have access to. Spells you cast before you transform stay active and last for their normal duration, and you can talk and communicate as normal. Additionally, you gain the Beastform's features, add their <a href='#define-evasion'>Evasion</a> bonus to your Evasion, and use the <a href='#define-trait'>trait</a> specified in their statistics for your <a href='#define-attack-roll'>attack</a>. While you're in a Beastform, your armor becomes part of your body and you mark <a href='#define-armor'>Armor Slots</a> as usual; when you drop out of a Beastform, those marked <a href='#define-armor'>Armor Slots</a> remain marked. If you mark your last <a href='#define-hit-point'>Hit Point</a>, you automatically drop out of this form.</p>", "<p><strong><em>Wildtouch:</em></strong> You can perform harmless, subtle effects that involve nature&mdash;such as causing a flower to rapidly grow, summoning a slight gust of wind, or starting a campfire&mdash;at will.</p>"], sidebar: "", subclasses: ["Warden of the Elements", "Warden of Renewal"], traitarray: [1, 0, 1, 2, -1, 0], weaponprimary: "Shortstaff", weaponsecondary: "Round Shield", armor: "Leather Armor", questions: ["Why was the community you grew up in so reliant on nature and its creatures?", "Who was the first wild animal you bonded with? Why did your bond end?", "Who has been trying to hunt you down? What do they want from you?"], connections: ["What did you confide in me that makes me leap into danger for you every time?", "What animal do I say you remind me of?", "What affectionate nickname have you given me?"], qualities: "As a <a href='#define-druid'>Druid</a>, you are a force of nature, preserving the balance of life and death by channeling the wilds themselves through you.",  clothes: ["camouflaged", "grown", "loose", "natural", "patchwork", "regal", "scraps"], attitudes: ["firecracker", "fox", "guide", "hippie", "witch"] },
{ label: "Guardian", name: "guardian", pages: ["Page 36"], summarybrief: "The title of <strong><a href='#define-guardian'>Guardian</a></strong> represents an array of martial professions, speaking more to their moral compass and unshakeable fortitude than the means by which they fight.", summary: "The title of guardian represents an array of martial professions, speaking more to their moral compass and unshakeable fortitude than the means by which they fight. While many guardians join groups of militants for either a country or cause, they're more likely to follow those few they truly care for, majority be damned. Guardians are known for fighting with remarkable ferocity even against overwhelming odds, defending their cohort above all else. Woe betide those who harm the ally of a guardian, as the guardian will answer this injury in kind.", domains: ["Valor", "Blade"], evasion: 9, hp: 7, items: ["totem from your mentor", "secret key"], hopefeature: "<p><strong><em>Frontline Tank:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to clear 2 <a href='#define-armor'>Armor Slots</a>.</p>", features: ["<p><strong><em>Unstoppable:</em></strong> Once per <a href='#define-downtime'>long rest</a>, you can become <em>Unstoppable</em>. You gain an Unstoppable Die. At level 1, your Unstoppable Die is a <strong>d4</strong>. Place it on your character sheet in the space provided, starting with the 1 value facing up. After you make a <a href='#define-damage-roll'>damage roll</a> that deals 1 or more <a href='#define-hit-point'>Hit Points</a> to a target, increase the Unstoppable Die value by one. When the die's value would exceed its maximum value or when the scene ends, remove the die and drop out of <em>Unstoppable</em>. At level 5, your Unstoppable Die increases to a <strong>d6</strong>.</p><p>While <em>Unstoppable</em>, you gain the following benefits:</p><ul class='og-list-disc'><li>You reduce the severity of <a href='#define-damage-type'>physical damage</a> by one <a href='#define-hit-point'>threshold</a> (Severe to Major, Major to Minor, Minor to None).</li><li>You add the current value of the Unstoppable Die to your damage roll.</li><li>You can't be <a href='#define-condition'><em>Restrained</em></a> or <a href='#define-condition'><em>Vulnerable</em></a>.</li></ul>"], sidebar: "<p>If your Unstoppable Die is a <strong>d4</strong> and the 4 is currently facing up, the next time you would increase it, you remove the die instead. If your Unstoppable Die increases to a <strong>d6</strong> and the 4 is currently facing up, you'll turn it to 5, and remove it after it would exceed its maximum of 6.</p>", subclasses: ["Stalwart", "Vengeance"], traitarray: [1, 2, -1, 0, 1, 0], weaponprimary: "Battleaxe", weaponsecondary: "", armor: "Chainmail Armor", questions: ["Who from your community did you fail to protect, and why do you still think of them?", "You've been tasked with protecting something important and delivering it somewhere dangerous. What is it, and where does it need to go?", "You consider an aspect of yourself to be a weakness. What is it, and how has it affected you?"], connections: ["How did I save your life the first time we met?", "What small gift did you give me that you notice I always carry with me?", "What lie have you told me about yourself that I absolutely believe?"], qualities: "As a <a href='#define-guardian'>Guardian</a>, you run into danger to protect your party, keeping watch over those who might not survive without you there.",  clothes: ["casual", "intricate", "loose", "padded", "royal", "tactical", "weathered"], attitudes: ["captain", "caretaker", "elephant", "general", "wrestler"] },
{ label: "Ranger", name: "ranger", pages: ["Page 38"], summarybrief: "<strong><a href='#define-ranger'>Rangers</a></strong> are highly skilled hunters who, despite their martial abilities, rarely lend their skills to an army.", summary: "Rangers are highly skilled hunters who, despite their martial abilities, rarely lend their skills to an army. Through mastery of the body and a deep understanding of the wilderness, rangers become sly tacticians, pursuing their quarry with cunning and patience. Many rangers track and fight alongside an animal companion with whom they've forged a powerful spiritual bond. By honing their skills in the wild, rangers become expert trackers, as likely to ensnare their foes in a trap as they are to assail them head-on.", domains: ["Bone", "Sage"], evasion: 12, hp: 6, items: ["trophy from your first kill", "seemingly broken compass"], hopefeature: "<p><strong><em>Hold Them Off:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> when you succeed on an <a href='#define-attack-roll'>attack</a> with a <a href='#define-weapon'>weapon</a> to use that same roll against two additional adversaries within <a href='#define-range'>range</a> of the attack.</p>", features: ["<p><strong><em>Ranger's Focus:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> and make an attack against a target. On a success, deal your attack's normal damage and <a href='#define-temporary'>temporarily</a> make the attack's target your <em>Focus</em>. Until this feature ends or you make a different creature your <em>Focus</em>, you gain the following benefits against your <em>Focus</em>:</p><ul class='og-list-disc'><li>You know precisely what direction they are in.</li><li>When you deal damage to them, they must mark a <a href='#define-stress'>Stress</a>.</li><li>When you fail an attack against them, you can end your <strong><em>Ranger's Focus</em></strong> feature to <a href='#define-reroll'>reroll</a> your <a href='#define-action-roll'>Duality Dice</a>.</li></ul>"], sidebar: "", subclasses: ["Beastbound", "Wayfinder"], traitarray: [2, 0, 1, 1, -1, 0], weaponprimary: "Shortbow", weaponsecondary: "", armor: "Leather Armor", questions: ["A terrible creature hurt your community, and you've vowed to hunt them down. What are they, and what unique trail or sign do they leave behind?", "Your first kill almost killed you, too. What was it, and what part of you was never the same after that event?", "You've traveled many dangerous lands, but what is the one place you refuse to go?"], connections: ["What friendly competition do we have?", "Why do you act differently when we're alone than when others are around?", "What threat have you asked me to watch for, and why are you worried about it?"], qualities: "As a <a href='#define-range'>Ranger</a>, your keen eyes and graceful haste make you indespensible when tracking down enemies and navigating the wilds.",  clothes: ["flowing", "muted", "natural", "stained", "tactical", "tight", "woven"], attitudes: ["child", "ghost", "survivalist", "teacher", "watchdog"] },
{ label: "Rogue", name: "rogue", pages: ["Page 42", "Errata"], summarybrief: "<strong><a href='#define-rogue'>Rogues</a></strong> are scoundrels, often in both attitude and practice. Broadly known as liars and thieves, the best among this class move through the world anonymously.", summary: "Rogues are scoundrels, often in both attitude and practice. Broadly known as liars and thieves, the best among this class move through the world anonymously. Utilizing their sharp wits and blades, rogues trick their foes through social manipulation as easily as breaking locks, climbing through windows, or dealing underhanded blows. These masters of magical craft manipulate shadow and movement, adding an array of useful and deadly tools to their repertoire. Rogues frequently establish guilds to meet future accomplices, hire out jobs, and hone secret skills, proving that there's honor among thieves for those who know where to look.", domains: ["Midnight", "Grace"], evasion: 12, hp: 6, items: ["set of forgery tools", "grappling hook"], hopefeature: "<p><strong><em>Rogue's Dodge:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to gain a +2 bonus to your <a href='#define-evasion'>Evasion</a> until the next time an attack succeeds against you. Otherwise, this bonus lasts until your next <a href='#define-downtime'>rest</a>.</p>", features: ["<p><strong><em>Cloaked:</em></strong> Any time you would be <a href='#define-condition'><em>Hidden</em></a>, you are instead <em>Cloaked</em>. In addition to the benefits of the <a href='#define-condition'><em>Hidden</em></a> condition, while <em>Cloaked</em> you remain unseen if you are stationary when an <a href='#define-adversary'>adversary</a> moves to where they would normally see you. After you make an <a href='#define-attack-roll'>attack</a> or end a move within line of sight of an adversary, you are no longer <em>Cloaked</em>. Otherwise, this bonus lasts until your next rest.</p>", "<p><strong><em>Sneak Attack:</em></strong> When you succeed on an attack while <em>Cloaked</em> or while an ally is within <a href='#define-range'>Melee</a> range of your target, add a number of <strong>d6s</strong> equal to your <a href='#define-tier'>tier</a> to your <a href='#define-damage-roll'>damage roll</a>.</p>"], sidebar: "",   subclasses: ["Nightwalker", "Syndicate"], traitarray: [1, -1, 2, 0, 1, 0], weaponprimary: "Dagger", weaponsecondary: "Small Dagger", armor: "Gambeson Armor", questions: ["What did you get caught doing that got you exiled from your home community?", "You used to have a different life, but you've tried to leave it behind. Who from your past is still chasing you?", "Who from your past were you most sad to say goodbye to?"], connections: ["What did I recently convince you to do that got us both in trouble?", "What have I discovered about your past that I hold secret from the others?", "Who do you know from my past, and how have they influenced your feelings about me?"], qualities: "As a <a href='#define-Rogue'>rogue</a>, you have experience fighting with your blade as well as your wit, preferring to move quickly and fight quietly.",  clothes: ["clean", "dark", "inconspicuous", "leather", "scary", "tactical", "tight"], attitudes: ["bandit", "con artist", "gambler", "mob boss", "pirate"] },
{ label: "Seraph", name: "seraph", pages: ["Page 44"], summarybrief: "<strong><a href='#define-seraph'>Seraphs</a></strong> are divine fighters and healers imbued with sacred purpose. A wide array of deities exist within the realms, and thus numerous kinds of seraphs are appointed by these gods.", summary: "Seraphs are divine fighters and healers imbued with sacred purpose. A wide array of deities exist within the realms, and thus numerous kinds of seraphs are appointed by these gods. Their ethos traditionally aligns with the domain or goals of their god, such as defending the weak, exacting vengeance, protecting a land or artifact, or upholding a particular faith. Some seraphs ally themselves with an army or locale, much to the satisfaction of their rulers, but other crusaders fight in opposition to the follies of the Mortal Realm. It is better to be a seraph's ally than their enemy, as they are terrifying foes to those who defy their purpose.", domains: ["Splendor", "Valor"], evasion: 9, hp: 7, items: ["bundle of offerings", "sigil of your god"], hopefeature: "<p><strong><em>Life Support:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to clear a <a href='#define-hit-point'>Hit Point</a> on an ally within <a href='#define-range'>Close</a> range.</p>", features: ["<p><strong><em>Prayer Dice:</em></strong> At the beginning of each session, roll a number of <strong>d4s</strong> equal to your <a href='#define-subclass'>subclass</a>'s Spellcast trait and place them on your character sheet in the space provided. These are your Prayer Dice. You can spend any number of Prayer Dice to aid yourself or an ally within <a href='#define-range'>Far</a> range. You can use a spent die's value to reduce incoming damage, add to a roll's result after the roll is made, or gain <a href='#define-hope'>Hope</a> equal to the result. At the end of each session, clear all unspent Prayer Dice.</p>"], sidebar: "", subclasses: ["Divine Wielder", "Winged Sentinel"], traitarray: [0, 2, 0, 1, 1, -1], weaponprimary: "Hallowed Axe", weaponsecondary: "Round Shield", armor: "Chainmail Armor", questions: ["Which god did you devote yourself to? What incredible feat did they perform for you in a moment of desperation?", "How did your appearance change after taking your oath?", "In what strange or unique way do you communicate with your god?"], connections: ["What promise did you make me agree to, should you die on the battlefield?", "Why do you ask me so many questions about my god?", "You've told me to protect one member of our party above all others, even yourself. Who are they and why?"], qualities: "As a <a href='#define-seraph'>Seraph</a>, you've taken a vow to a god who helps you channel sacred arcane power to keep your party on their feet.",  clothes: ["glowing", "rippling", "ornate", "tight", "modest", "strange", "natural"], attitudes: ["angel", "doctor", "evangelist", "monk", "priest"] },
{ label: "Sorcerer", name: "sorcerer", pages: ["Page 46"], summarybrief: "Not all innate magic users choose to hone their craft, but those who do can become powerful <strong><a href='#define-sorcerer'>Sorcerers</a></strong>.", summary: "Not all innate magic users choose to hone their craft, but those who do can become powerful sorcerers. The gifts of these wielders are passed down through families, even if the family is unaware of or reluctant to practice them. A sorcerer's abilities can range from the elemental to the illusionary and beyond, and many practitioners band together into collectives based on their talents. The act of becoming a formidable sorcerer is not the practice of acquiring power, but learning to cultivate and control the power one already possesses. The magic of a misguided or undisciplined sorcerer is a dangerous force indeed.", domains: ["Arcana", "Midnight"], evasion: 10, hp: 6, items: ["whispering orb", "family heirloom"], hopefeature: "<p><strong><em>Volatile Magic:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to <a href='#define-reroll'>reroll</a> any number of your damage dice on an attack that deals <a href='#define-damage-type'>magic damage</a>.</p>",features: ["<p><strong><em>Arcane Sense:</em></strong> You can sense the presence of magical people and objects within <a href='#range'>Close</a> range.</p>", "<p><strong><em>Minor Illusion:</em></strong> Make a <strong><a href='#spellcast-roll'>Spellcast Roll (10)</a></strong>. On a success, you create a minor visual illusion no larger than yourself within <a href='#range'>Close</a> range. This illusion is convincing to anyone at <a href='#range'>Close</a> range or farther.</p>", "<p><strong><em>Channel Raw Power:</em></strong> Once per <a href='#downtime'>long rest</a>, you can place a <a href='#domain-card'>domain card</a> from your <a href='#loadout'>loadout</a> into your <a href='#loadout'>vault</a> and choose to either:</p><ul class='og-list-disc'><li>Gain <a href='#hope'>Hope</a> equal to the level of the card.</li><li>Enhance a <a href='#define-domain-card'>spell</a> that deals damage, gaining a bonus to your <a href='#damage-roll'>damage roll</a> equal to twice the level of the card.</li></ul></li>"], sidebar: "", subclasses: ["Elemental Origin", "Primal Origin"], traitarray: [0, -1, 1, 2, 1, 0], weaponprimary: "Dualstaff", weaponsecondary: "", armor: "Gambeson Armor", questions: ["What did you do that made the people in your community wary of you?", "What mentor taught you to control your untamed magic, and why are they no longer able to guide you?", "You have a deep fear you hide from everyone. What is it, and why does it scare you?"], connections: ["Why do you trust me so deeply?", "What did I do that makes you cautious around me?", "Why do we keep our shared past a secret?"], qualities: "As a <a href='#define-sorcerer'>Sorcerer</a>, you were born with innate magical power, and you've learned how to wield that power to get what you want.",  clothes: ["always moving", "flamboyant", "inconspicuous", "layered", "ornate", "tight"], attitudes: ["celebrity", "commander", "politician", "prankster", "wolf in sheep's clothing"] },
{ label: "Warrior", name: "warrior", pages: ["Page 48"], summarybrief: "Becoming a <strong><a href='#define-warrior'>Warrior</a></strong> requires years, often a lifetime, of training and dedication to the mastery of weapons and violence.", summary: "Becoming a warrior requires years, often a lifetime, of training and dedication to the mastery of weapons and violence. While many who seek to fight hone only their strength, warriors understand the importance of an agile body and mind, making them some of the most sought-after fighters across the realms. Frequently, warriors find employment within an army, a band of mercenaries, or even a royal guard, but their potential is wasted in any position where they cannot continue to improve and expand their skills. Warriors are known to have a favored weapon; to come between them and their blade would be a grievous mistake.", domains: ["Blade", "Bone"],evasion: 11, hp: 6, items: ["drawing of a lover", "sharpening stone"], hopefeature: "<p><strong><em>No Mercy:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to gain a +1 bonus to your <a href='#define-attack-roll'>attack rolls</a> until your next <a href='#define-downtime'>rest</a>.</p>",features: ["<p><strong><em>Attack of Opportunity:</em></strong> If an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Melee</a> range attempts to leave that range, make a <a href='#define-reaction-roll'>reaction roll</a> using a <a href='#define-trait'>trait</a> of your choice against their <a href='#define-difficulty'>Difficulty</a>. Choose one effect on a success, or two if you critically succeed:</p><ul class='og-list-disc'><li>They can't move from where they are.</li><li>You deal damage to them equal to your primary weapon's damage.</li><li>You move with them.</li></ul>", "<p><strong><em>Combat Training:</em></strong> You ignore burden when equipping <a href='#define-weapon'>weapons</a>. When you deal <a href='#define-damage-type'>physical damage</a>, you gain a bonus to your <a href='#define-damage-roll'>damage roll</a> equal to your <a href='#define-level'>level</a>.</p>"], sidebar: "", subclasses: ["Call of the Brave", "Call of the Slayer"], traitarray: [2, 1, 0, 1, -1, 0], weaponprimary: "Longsword", weaponsecondary: "", armor: "Chainmail Armor", questions: ["Who taught you to fight, and why did they stay behind when you left home?", "Somebody defeated you in battle years ago and left you to die. Who was it, and how did they betray you?", "What legendary place have you always wanted to visit, and why is it so special?"], connections: ["We knew each other long before this party came together. How?", "What mundane task do you usually help me with off the battlefield?", "What fear am I helping you overcome?"], qualities: "As a <a href='#define-warrior'>Warrior</a>, you run into battle without hestation or caution, knowing you can strike down whatever enemy stands in your path.",  clothes: ["bold", "patched", "reinforced", "royal", "sleek", "sparing", "weathered"], attitudes: ["bull", "dedicated soldier", "gladiator", "hero", "hired hand"] },
{ label: "Wizard", name: "wizard", pages: ["Page 50"], summarybrief: "Whether through an institution or individual study, those known as <strong><a href='#define-wizard'>Wizards</a></strong> acquire and hone immense magical power over years of learning using a variety of tools, including books, stones, potions, and herbs.", summary: "Whether through an institution or individual study, those known as wizards acquire and hone immense magical power over years of learning using a variety of tools, including books, stones, potions, and herbs. Some wizards dedicate their lives to mastering a particular school of magic, while others learn from a wide variety of disciplines. Many wizards become wise and powerful figures in their communities, advising rulers, providing medicines and healing, and even leading war councils. While these mages all work toward the common goal of collecting magical knowledge, wizards often have the most conflict within their own ranks, as the acquisition, keeping, and sharing of powerful secrets is a topic of intense debate that has resulted in innumerable deaths.", domains: ["Codex", "Splendor"], evasion: 11, hp: 5, items: ["book you're trying to translate", "tiny, harmless elemental"], hopefeature: "<p><strong><em>Not This Time:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to force an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Far</a> range to <a href='#define-reroll'>reroll</a> an <a href='#define-attack-roll'>attack</a> or <a href='#define-damage-roll'>damage roll</a>.</p>",features: ["<p><strong><em>Prestidigitation:</em></strong> You can perform harmless, subtle magical effects at will. For example, you can change an object's color, create a smell, light a candle, cause a tiny object to float, illuminate a room, or repair a small object.</p>", "<p><strong><em>Strange Patterns:</em></strong> Choose a number between 1 and 12. When you roll that number on a Duality Die, gain a <a href='#define-hope'>Hope</a> or clear a <a href='#define-stress'>Stress</a>.</p><p>You can change this number when you take a <a href='#define-downtime'>long rest</a>.</p>"], sidebar: "", subclasses: ["School of Knowledge", "School of War"], traitarray: [-1, 0, 0, 1, 1, 2], weaponprimary: "Greatstaff", weaponsecondary: "", armor: "Leather Armor", questions: ["What responsibilities did your community once count on you for? How did you let them down?", "You've spent your life searching for a book or object of great significance. What is it, and why is it so important to you?", "You have a powerful rival. Who are they, and why are you so determined to defeat them?"], connections: ["What favor have I asked of you that you're not sure you can fulfill?", "What weird hobby or strange fascination do we both share?", "What secret about yourself have you entrusted only to me?"], qualities: "As a <a href='#define-wizard'>Wizard</a>, you've become familiar with the arcane through the relentless study of grimoires and other tools of magic",  clothes: ["beautiful", "clean", "common", "flowing", "layered", "patchwork", "tight"], attitudes: ["eccentric", "librarian", "lit fuse", "philosopher", "professor"] }
];
// subclasses
const subclassList = [
{ label: "Troubadour", name: "troubadour", pages: ["Page 28"], summarybrief: "Play the <strong><a href='#define-troubadour'>Troubadour</a></strong> if you want to play music to bolster your allies.", summary: "Play the Troubadour if you want to play music to bolster your allies.", spellcast: "Presence", foundationcard: ["DH Core 001/270"], foundation: ["<p><strong><em>Gifted Performer:</em></strong> You can play three different types of songs, once each per <a href='#define-downtime'>long rest</a>; describe how you perform for others to gain the listed benefit:</p><ul class='og-list-disc'><li><strong><em>Relaxing Song:</em></strong> You and all allies within <a href='#define-range'>Close</a> range clear a <a href='#define-hit-point'>Hit Point</a>.</li><li><strong><em>Epic Song:</em></strong> Make a target within <a href='#define-range'>Close</a> range <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</li><li><strong><em>Heartbreaking Song:</em></strong> You and all allies within <a href='#define-range'>Close</a> range gain a <a href='#define-hope'>Hope</a>.</li></ul>"], specializationcard: ["DH Core 002/270"], specialization: ["<p><strong><em>Maestro:</em></strong> Your rallying songs steel the courage of those who listen. When you give a Rally Die to an ally, they can gain a <a href='#define-hope'>Hope</a> or clear a <a href='#define-stress'>Stress</a>.</p>"], masterycard: ["DH Core 003/270"], mastery: ["<p><strong><em>Virtuoso:</em></strong> You are among the greatest of your craft and your skill is boundless. You can perform each of your <strong><em>Gifted Performer</em></strong> feature's songs twice per <a href='#define-downtime'>long rest</a>.</p>"] },
{ label: "Wordsmith", name: "wordsmith", pages: ["Page 29"], summarybrief: "Play the <strong><a href='#define-wordsmith'>Wordsmith</a></strong> if you want to use clever wordplay and captivate crowds.", summary: "Play the Wordsmith if you want to use clever wordplay and captivate crowds.", spellcast: "Presence", foundationcard: ["DH Core 004/270"], foundation: ["<p><strong><em>Rousing Speech:</em></strong> Once per <a href='#define-downtime'>long rest</a>, you can give a heartfelt, inspiring speech. All allies within <a href='#define-range'>Far</a> range clear 2 <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Heart of a Poet:</em></strong> After you make an <a href='#define-action-roll'>action roll</a> to impress, persuade, or offend someone, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to add a <strong>d4</strong> to the roll.</p>"], specializationcard: ["DH Core 005/270"], specialization: ["<p><strong><em>Eloquent:</em></strong> Your moving words boost morale. Once per session, when you encourage an ally, you can do one of the following:</p><ul class='og-list-disc'><li>Allow them to find a mundane object or tool they need.</li><li><a href='#define-hope'>Help an Ally</a> without spending <a href='#define-hope'>Hope</a>.</li><li>Give them an additional <a href='#define-downtime-move'>downtime move</a>  during their next <a href='#define-downtime'>rest</a>.</li></ul>"], masterycard: ["DH Core 006/270"], mastery: ["<p><strong><em>Epic Poetry:</em></strong> Your Rally Die increases to a <strong>d10</strong>. Additionally, when you <a href='#define-hope'>Help an Ally</a>, you can narrate the moment as if you were writing the tale of their heroism in a memoir. When you do, roll a <strong>d10</strong> as your <a href='#define-advantage'>advantage</a> die.</p>"] },
{ label: "Warden of the Elements", name: "warden-of-the-elements", pages: ["Page 30"], summarybrief: "Play the <strong><a href='#define-warden-of-the-elements'>Warden of the Elements</a></strong> if you want to embody the natural elements of the wild.", summary: "Play the Warden of the Elements if you want to embody the natural elements of the wild.", spellcast: "Instinct", foundationcard: ["DH Core 007/270"], foundation: ["<p><strong><em>Elemental Incarnation:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <em>Channel</em> one of the following elements until you take <a href='#define-hit-point'>Severe</a> damage or until your next <a href='#define-downtime'>rest</a>:</p><ul class='og-list-disc'><li><strong><em>Fire:</em></strong> When an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Melee</a> range deals damage to you, they take <strong>1d10</strong> <a href='#define-damage-type'>magic damage</a>.</li><li><strong><em>Earth:</em></strong> Gain a bonus to your <a href='#define-hit-point'>damage thresholds</a> equal to your <a href='#define-damage-roll'>Proficiency</a>.</li><li><strong><em>Water:</em></strong> When you deal damage to an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Melee</a> range, all other adversaries within <a href='#define-range'>Very Close</a> range must mark a <a href='#define-stress'>Stress</a>.</li><li><strong><em>Air:</em></strong> You can hover, gaining <a href='#define-advantage'>advantage</a> on <a href='#define-trait-roll'>Agility Rolls</a>.</li></ul>"], specializationcard: ["DH Core 008/270"], specialization: ["<p><strong><em>Elemental Aura:</em></strong> Once per <a href='#define-downtime'>rest</a> while <em>Channeling</em>, you can assume an aura matching your element. The aura affects targets within <a href='#define-range'>Close</a> range until your <em>Channeling</em> ends.</p><ul class='og-list-disc'><li><strong><em>Fire:</em></strong> When an <a href='#define-adversary'>adversary</a> marks 1 or more <a href='#define-hit-point'>Hit Points</a>, they must also mark a <a href='#define-stress'>Stress</a>.</li><li><strong><em>Earth:</em></strong> Your allies gain a +1 bonus to <a href='#define-strength'>Strength</a>.</li><li><strong><em>Water:</em></strong> When an <a href='#define-adversary'>adversary</a> deals damage to you, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to move them anywhere within <a href='#define-range'>Very Close</a> range of where they are.</li><li><strong><em>Air:</em></strong> When you or an ally takes damage from an attack beyond <a href='#define-range'>Melee</a> range, reduce the damage by <strong>1d8</strong>.</li></ul>"], masterycard: ["DH Core 009/270"], mastery: ["<p><strong><em>Elemental Dominion:</em></strong> You further embody your element. While <em>Channeling</em>, you gain the following benefit:</p><ul class='og-list-disc'><li><strong><em>Fire:</em></strong> You gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> for attacks and spells that deal damage.</li><li><strong><em>Earth:</em></strong> When you would mark <a href='#define-hit-point'>Hit Points</a>, roll a <strong>d6</strong> per Hit Point marked. For each result of 6, reduce the number of Hit Points you mark by 1.</li><li><strong><em>Water:</em></strong> When an attack against you succeeds, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to make the attacker <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</li><li><strong><em>Air:</em></strong> You gain a +1 bonus to your <a href='#define-evasion'>Evasion</a> and can fly.</li></ul>"]},
{ label: "Warden of Renewal", name: "warden-of-renewal", pages: ["Page 31"], summarybrief: "Play the <strong><a href='#define-warden-of-renewal'>Warden of Renewal</a></strong> if you want to use powerful magic to heal your party.", summary: "Play the Warden of Renewal if you want to use powerful magic to heal your party.", spellcast: "Instinct", foundationcard: ["DH Core 010/270"], foundation: ["<p><strong><em>Clarity of Nature:</em></strong> Once per <a href='#define-downtime'>long rest</a>, you can create a space of natural serenity within <a href='#define-range'>Close</a> range. When you spend a few minutes resting within the space, clear <a href='#define-stress'>Stress</a> equal to your <a href='#define-instinct'>Instinct</a>, distributed as you choose between you and your allies.</p>", "<p><strong><em>Regeneration:</em></strong> Touch a creature and <strong><a href='#define-hope'>spend 3 Hope</a></strong>. That creature clears <strong>1d4</strong> <a href='#define-hit-point'>Hit Points</a>.</p>"], specializationcard: ["DH Core 011/270"], specialization: ["<p><strong><em>Regenerative Reach:</em></strong> You can target creatures within <a href='#define-range'>Very Close</a> range with your <strong><em>Regeneration</em></strong> feature.</p>", "<p><strong><em>Warden's Protection:</em></strong> Once per <a href='#define-downtime'>long rest</a>, <strong><a href='#define-hope'>spend 2 Hope</a></strong> to clear 2 Hit Points on <strong>1d4</strong> allies within <a href='#define-range'>Close</a> range.</p>"], masterycard: ["DH Core 012/270"], mastery: ["<p><strong><em>Defender:</em></strong> Your animal transformation embodies a healing guardian spirit. When you're in Beastform and an ally within <a href='#define-range'>Close</a> range marks 2 or more <a href='#define-hit-point'>Hit Points</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to reduce the number of Hit Points they mark by 1.</p>"] },
{ label: "Stalwart", name: "stalwart", pages: ["Page 36"], summarybrief: "Play the <strong><a href='#define-stalwart'>Stalwart</a></strong> if you want to take heavy blows and keep fighting.", summary: "Play the Stalwart if you want to take heavy blows and keep fighting.", spellcast: "", foundationcard: ["DH Core 013/270"], foundation: ["<p><strong><em>Unwavering:</em></strong> Gain a permanent +1 bonus to your <a href='#define-hit-point'>damage thresholds</a>.</p>", "<p><strong><em>Iron Will:</em></strong> When you take <a href='#define-damage-type'>physical damage</a>, you can <strong><a href='#define-armor'>mark an additional Armor Slot</a></strong> to reduce the severity.</p>"], specializationcard: ["DH Core 014/270"], specialization: ["<p><strong><em>Unrelenting:</em></strong> Gain a permanent +2 bonus to your <a href='#define-hit-point'>damage thresholds</a>.</p>", "<p><strong><em>Partners-in-Arms:</em></strong> When an ally within <a href='#define-range'>Very Close</a> range takes damage, you can <strong><a href='#define-armor'>mark an Armor Slot</a></strong> to reduce the severity by one threshold.</p>"], masterycard: ["DH Core 015/270"], mastery: ["<p><strong><em>Undaunted:</em></strong> Gain a permanent +3 bonus to your <a href='#define-hit-point'>damage thresholds</a>.</p>", "<p><strong><em>Loyal Protector:</em></strong> When an ally within <a href='#define-range'>Close</a> range has 2 or fewer <a href='#define-hit-point'>Hit Points</a> and would take damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to sprint to their side and take the damage instead.</p>"] },
{ label: "Vengeance", name: "vengeance", pages: ["Page 36"], summarybrief: "Play the <strong><a href='#define-vengeance'>Vengeance</a></strong> if you want to strike down enemies who harm you or your allies.", summary: "Play the Vengeance if you want to strike down enemies who harm you or your allies.", spellcast: "", foundationcard: ["DH Core 016/270"], foundation: ["<p><strong><em>At Ease:</em></strong> Gain an additional <a href='#define-stress'>Stress</a> slot.</p>", "<p><strong><em>Revenge:</em></strong> When an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Melee</a> range succeeds on an attack against you, you can <strong><a href='#define-stress'>mark 2 Stress</a></strong> to force the attacker to mark a <a href='#define-hit-point'>Hit Point</a>.</p>"], specializationcard: ["DH Core 017/270"], specialization: ["<p><strong><em>Act of Reprisal:</em></strong> When an <a href='#define-adversary'>adversary</a> damages an ally within <a href='#define-range'>Melee</a> range, you gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> for the next successful attack you make against that adversary.</p>"], masterycard: ["DH Core 018/270"], mastery: ["<p><strong><em>Nemesis:</em></strong> <strong><a href='#define-hope'>Spend 2 Hope</a></strong> to <em>Prioritize</em> an <a href='#define-adversary'>adversary</a> until your next <a href='#define-downtime'>rest</a>. When you make an attack against your <em>Prioritized</em> adversary, you can swap the results of your <a href='#define-action-roll'>Hope and Fear Dice</a>. You can only Prioritize one adversary at a time.</p>"]},
{ label: "Beastbound", name: "beastbound", pages: ["Page 38"], summarybrief: "Play the <strong><a href='#define-beastbound'>Beastbound</a></strong> if you want to form a deep bond with an animal ally.", summary: "Play the Beastbound if you want to form a deep bond with an animal ally.", spellcast: "Agility", foundationcard: ["DH Core 019/270"], foundation: ["<p><strong><em>Companion:</em></strong> You have an animal <a href='#define-beastbound-companion'>companion</a> of your choice (at the GM's discretion). They stay by your side unless you tell them otherwise.</p><p>Take the <a href='https://www.daggerheart.com/downloads/'>Ranger Companion sheet</a>. When you <a href='#define-level'>level up</a>, choose a <a href='#define-beastbound-companion-advancement'>level up option</a> for your companion as well.</p>"], specializationcard: ["DH Core 020/270"], specialization: ["<p><strong><em>Expert Training:</em></strong> Choose an additional level-up option for your companion.</p>"], masterycard: ["DH Core 021/270"], mastery: ["<p><strong><em>Advanced Training:</em></strong> Choose two additional level-up options for your companion.</p>", "<p><strong><em>Loyal Friend:</em></strong> Once per <a href='#define-downtime'>long rest</a>, when the damage from an attack would mark your companion's last <a href='#define-stress'>Stress</a> or your last <a href='#define-hit-point'>Hit Point</a> and you're within <a href='#define-range'>Close</a> range of each other, you or your companion can rush to the other's side and take that damage instead.</p>"] },
{ label: "Wayfinder", name: "wayfinder", pages: ["Page 39"], summarybrief: "Play the <strong><a href='#define-wayfinder'>Wayfinder</a></strong> if you want to hunt your prey and strike with deadly force.", summary: "Play the Wayfinder if you want to hunt your prey and strike with deadly force.", spellcast: "Agility", foundationcard: ["DH Core 022/270"], foundation: ["<p><strong><em>Ruthless Predator:</em></strong> When you make a <a href='#define-damage-roll'>damage roll</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a>. Additionally, when you deal <a href='#define-hit-point'>Severe</a> damage to an <a href='#define-adversary'>adversary</a>, they must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Path Forward:</em></strong> When you're traveling to a place you've previously visited or you carry an object that has been at the location before, you can identify the shortest, most direct path to your destination.</p>"], specializationcard: ["DH Core 023/270"], specialization: ["<p><strong><em>Elusive Predator:</em></strong> When your <em>Focus</em> makes an attack against you, you gain a +2 bonus to your <a href='#define-evasion'>Evasion</a> against the attack.</p>"], masterycard: ["DH Core 024/270"], mastery: ["<p><strong><em>Apex Predator:</em></strong> Before you make an <a href='#define-attack-roll'>attack roll</a> against your <em>Focus</em>, you can <strong><a href='#define-hope'>spend a Hope</a></strong>. On a successful <a href='#define-attack-roll'>attack</a>, you remove a <a href='#define-fear'>Fear</a> from the GM's Fear pool.</p>"]},
{ label: "Nightwalker", name: "nightwalker", pages: ["Page 42"], summarybrief: "Play the <strong><a href='#define-nightwalker'>Nightwalker</a></strong> if you want to manipulate shadows to maneuver through the environment.", summary: "Play the Nightwalker if you want to manipulate shadows to maneuver through the environment.", spellcast: "Finesse", foundationcard: ["DH Core 025/270"], foundation: ["<p><strong><em>Shadow Stepper:</em></strong> You can move from shadow to shadow. When you move into an area of darkness or a shadow cast by another creature or object, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to disappear from where you are and reappear inside another shadow within <a href='#define-range'>Far</a> range. When you reappear, you are <em>Cloaked</em>.</p></li>"], specializationcard: ["DH Core 026/270"], specialization: ["<p><strong><em>Dark Cloud:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. On a success, create a <a href='#define-temporary'>temporary</a> dark cloud that covers any area within <a href='#define-range'>Close</a> range. Anyone in this cloud can't see outside of it, and anyone outside of it can't see in. You're considered <em>Cloaked</em> from any <a href='#define-adversary'>adversary</a> for whom the cloud blocks line of sight.</p></li><li><p><strong><em>Adrenaline:</em></strong> While you're <a href='#define-condition'>Vulnerable</a>, add your level to your <a href='#define-damage-roll'>damage rolls</a>.</p></li>"], masterycard: ["DH Core 027/270"], mastery: ["<p><strong><em>Shadow Stepper:</em></strong> Gain a permanent +1 bonus to your <a href='#define-evasion'>Evasion</a>. You can use your <strong><em>Shadow Stepper</em></strong> feature to move within <a href='#define-range'>Very Far</a> range.</p></li><li><p><strong><em>Vanishing Act:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to become <em>Cloaked</em> at any time. When <em>Cloaked</em> from this feature, you automatically clear the <a href='#define-condition'><em>Restrained</em></a> condition if you have it. You remain <em>Cloaked</em> in this way until you roll with Fear or until your next <a href='#define-downtime'>rest</a>.</p></li>"] },
{ label: "Syndicate", name: "syndicate", pages: ["Page 43"], summarybrief: "Play the <strong><a href='#define-syndicate'>Syndicate</a></strong> if you want to have a web of contacts everywhere you go.", summary: "Play the Syndicate if you want to have a web of contacts everywhere you go.", spellcast: "Finesse", foundationcard: ["DH Core 028/270"], foundation: ["<p><strong><em>Well-Connected:</em></strong> When you arrive in a prominent town or environment, you know somebody who calls this place home. Give them a name, note how you think they could be useful, and choose one fact from the following list:</p><ul class='og-list-disc'><li>They owe me a favor, but they'll be hard to find.</li><li>They're going to ask for something in exchange.</li><li>They're always in a great deal of trouble.</li><li>We used to be together. It's a long story.</li><li>We didn't part on great terms.</li></ul>"], specializationcard: ["DH Core 029/270"], specialization: ["<p><strong><em>Contacts Everywhere:</em></strong> Once per session, you can briefly call on a shady contact. Choose one of the following benefits and describe what brought them here to help you in this moment:</p><ul class='og-list-disc'><li>They provide 1 handful of <a href='#define-gold'>gold</a>, a unique tool, or a mundane object that the situation requires.</li><li>On your next <a href='#define-action-roll'>action roll</a>, their help provides a +3 bonus to the result of your <a href='#define-action-roll'>Hope or Fear Die</a>.</li><li>The next time you deal damage, they snipe from the shadows, adding <strong>2d8</strong> to your <a href='#define-damage-roll'>damage roll</a>.</li></ul>"], masterycard: ["DH Core 030/270"], mastery: ["<p><strong><em>Reliable Backup:</em></strong> You can use your <strong><em>Contacts Everywhere</em></strong> feature three times per session. The following options are added to the list of benefits you can choose from when you use that feature:</p><ul class='og-list-disc'><li>When you mark 1 or more <a href='#define-hit-point'>Hit Points</a>, they can rush out to shield you, reducing the Hit Points marked by 1.</li><li>When you make a <a href='#define-trait-roll'>Presence Roll</a> in conversation, they back you up. You can roll a <strong>d20</strong> as your <a href='#define-action-roll'>Hope Die</a>.</li></ul>"] },
{ label: "Divine Wielder", name: "divine-wielder", pages: ["Page 44"], summarybrief: "Play the <strong><a href='#define-divine-wielder'>Divine Wielder</a></strong> if you want to dominate the battlefield with a legendary weapon.", summary: "Play the Divine Wielder if you want to dominate the battlefield with a legendary weapon.", spellcast: "Strength", foundationcard: ["DH Core 031/270"], foundation: ["<p><strong><em>Spirit Weapon:</em></strong> When you have an equipped <a href='#define-weapon'>weapon</a> with a range of Melee or Very Close, it can fly from your hand to attack an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Close</a> range and then return to you. You can <strong><a href='#define-stress'>mark a Stress</a></strong> to target an additional adversary within <a href='#define-range'>range</a> with the same <a href='#define-attack-roll'>attack roll</a>.</p>", "<p><strong><em>Sparing Touch:</em></strong> Once per <a href='#define-downtime'>long rest</a>, touch a creature and clear 2 <a href='#define-hit-point'>Hit Points</a> or 2 <a href='#stress'>Stress</a> from them.</p>"], specializationcard: ["DH Core 032/270"], specialization: ["<p><strong><em>Devout:</em></strong> When you roll your Prayer Dice, you can roll an additional die and discard the lowest result. Additionally, you can use your <strong><em>Sparing Touch</em></strong> feature twice instead of once per <a href='#define-downtime'>long rest</a>.</p>"], masterycard: ["DH Core 033/270"], mastery: ["<p><strong><em>Sacred Resonance:</em></strong> When you roll damage for your <strong><em>Spirit Weapon</em></strong> feature, if any of the die results match, double the value of each matching die. For example, if you roll two 5s, they count as two 10s.</p>"] },
{ label: "Winged Sentinel", name: "winged-sentinel", pages: ["Page 45"], summarybrief: "Play the <strong><a href='#define-winged-sentinel'>Winged Sentinel</a></strong> if you want to take flight and strike crushing blows from the sky.", summary: "Play the Winged Sentinel if you want to take flight and strike crushing blows from the sky.", spellcast: "Strength", foundationcard: ["DH Core 034/270"], foundation: ["<p><strong><em>Wings of Light:</em></strong> You can fly. While flying, you can do the following:</p><ul class='og-list-disc'><li><strong><a href='#define-stress'>Mark a Stress</a></strong> to pick up and carry another willing creature approximately your size or smaller.</li><li><strong><a href='#define-hope'>Spend a Hope</a></strong> to deal an extra <strong>1d8</strong> damage on a successful attack.</li></ul>"], specializationcard: ["DH Core 035/270"], specialization: ["<p><strong><em>Ethereal Visage:</em></strong> Your supernatural visage strikes awe and fear. While flying, you have <a href='#define-advantage'>advantage</a> on <a href='#define-trait-roll'>Presence Rolls</a>. When you succeed with <a href='#define-hope'>Hope</a> on a <a href='#define-trait-roll'>Presence Roll</a>, you can remove a <a href='#define-fear'>Fear</a> from the GM's Fear pool instead of gaining <a href='#define-hope'>Hope</a>.</p>"], masterycard: ["DH Core 036/270"], mastery: ["<p><strong><em>Ascendant:</em></strong> Gain a permanent +4 bonus to your Severe <a href='#define-hit-point'>damage threshold</a>.</p>", "<p><strong><em>Power of the Gods:</em></strong> While flying, you deal an extra <strong>1d12</strong> damage instead of 1d8 from your <strong><em>Wings of Light</em></strong> feature.</p>"] },
{ label: "Elemental Origin", name: "elemental-origin", pages: ["Page 46"], summarybrief: "Play the <strong><a href='#define-elemental-origin'>Elemental Origin</a></strong> if you want to channel raw magic to take the shape of a particular element.", summary: "Play the Elemental Origin if you want to channel raw magic to take the shape of a particular element.", spellcast: "Instinct", foundationcard: ["DH Core 037/270"], foundation: ["<p><strong><em>Elementalist:</em></strong> Choose one of the following elements at <a href='#define-character-creation'>character creation</a>: air, earth, fire, lightning, water. You can shape this element into harmless effects.</p><p>Additionally, <strong><a href='#define-hope'>spend a Hope</a></strong> and describe how your control over this element helps an <a href='#define-action-roll'>action roll</a> you're about to make, then either gain a +2 bonus to the roll or a +3 bonus to the roll's damage.</p>"], specializationcard: ["DH Core 038/270"], specialization: ["<p><strong><em>Natural Evasion:</em></strong> You can call forth your element to protect you from harm. When an <a href='#define-attack-roll'>attack roll</a> against you succeeds, you can <strong><a href='#define-stress'>mark a Stress</a></strong> and describe how you use your element to defend you. When you do, roll a <strong>d6</strong> and add its result to your <a href='#define-evasion'>Evasion</a> against the attack.</p>"], masterycard: ["DH Core 039/270"], mastery: ["<p><strong><em>Transcendence:</em></strong> Once per <a href='#define-downtime'>long rest</a>, you can transform into a physical manifestation of your element. When you do, describe your transformation and choose two of the following benefits to gain until your next <a href='#define-downtime'>rest</a>:</p><ul class='og-list-disc'><li>+4 bonus to your Severe <a href='#define-hit-point'>threshold</a></li><li>+1 bonus to a character trait of your choice</li><li>+1 bonus to your <a href='#define-damage-roll'>Proficiency</a></li><li>+2 bonus to your <a href='#define-evasion'>Evasion</a></li></ul>"] },
{ label: "Primal Origin", name: "primal-origin", pages: ["Page 47"], summarybrief: "Play the <strong><a href='#define-primal-origin'>Primal Origin</a></strong> if you want to extend the versatility of your spells in powerful ways.", summary: "Play the Primal Origin if you want to extend the versatility of your spells in powerful ways.", spellcast: "Instinct", foundationcard: ["DH Core 040/270"], foundation: ["<p><strong><em>Manipulate Magic:</em></strong> Your primal origin allows you to modify the essence of magic itself. After you cast a spell or make an attack using a <a href='#define-weapon'>weapon</a> that deals <a href='#define-damage-type'>magic damage</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to do one of the following:</p><ul class='og-list-disc'><li>Extend the spell or attack's reach by one range</li><li>Gain a +2 bonus to the <a href='#define-action-roll'>action roll</a>'s result</li><li>Double a damage die of your choice</li><li>Hit an additional target within <a href='#define-range'>range</a></li></ul>"], specializationcard: ["DH Core 041/270"], specialization: ["<p><strong><em>Enchanted Aid:</em></strong> You can enhance the magic of others with your essence. When you <a href='#define-hope'>Help an Ally</a> with a <a href='#define-spellcast-roll'>Spellcast Roll</a>, you can roll a <strong>d8</strong> as your <a href='#define-advantage'>advantage</a> die. Once per <a href='#define-downtime'>long rest</a>, after an ally has made a Spellcast Roll with your help, you can swap the results of their <a href='#define-action-roll'>Duality Dice</a>.</p>"], masterycard: ["DH Core 042/270"], mastery: ["<p><strong><em>Arcane Charge:</em></strong> You can gather magical energy to enhance your capabilities. When you take <a href='#define-damage-type'>magic damage</a>, you become <em>Charged</em>. Alternatively, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to become <em>Charged</em>. When you successfully make an attack that deals <a href='#define-damage-type'>magic damage</a> while <em>Charged</em>, you can clear your Charge to either gain a +10 bonus to the <a href='#define-damage-roll'>damage roll</a> or gain a +3 bonus to the <a href='#define-difficulty'>Difficulty</a> of a <a href='#define-reaction-roll'>reaction roll</a> the spell causes the target to make. You stop being <em>Charged</em> at your next <a href='#define-downtime'>long rest</a>.</p>"] },
{ label: "Call of the Brave", name: "call-of-the-brave", pages: ["Page 48"], summarybrief: "Play the <strong><a href='#define-call-of-the-brave'>Call of the Brave</a></strong> if you want to use the might of your enemies to fuel your own power.", summary: "Play the Call of the Brave if you want to use the might of your enemies to fuel your own power.", spellcast: "", foundationcard: ["DH Core 043/270"], foundation: ["<p><strong><em>Courage:</em></strong> When you fail a <a href='#define-action-roll'>roll with Fear</a>, you gain a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Battle Ritual:</em></strong> Once per <a href='#define-downtime'>long rest</a>, before you attempt something incredibly dangerous or face off against a foe who clearly outmatches you, describe what ritual you perform or preparations you make. When you do, clear 2 <a href='#define-stress'>Stress</a> and gain 2 <a href='#define-hope'>Hope</a>.</p>"], specializationcard: ["DH Core 044/270"], specialization: ["<p><strong><em>Rise to the Challenge:</em></strong> You are vigilant in the face of mounting danger. While you have 2 or fewer <a href='#define-hit-point'>Hit Points</a> unmarked, you can roll a <strong>d20</strong> as your <a href='#define-action-roll'>Hope Die</a>.</p>"], masterycard: ["DH Core 045/270"], mastery: ["<p><strong><em>Camaraderie:</em></strong> Your unwavering bravery is a rallying point for your allies. You can initiate a <a href='#define-tag-team-roll'>Tag Team Roll</a> one additional time per session. Additionally, when an ally initiates a <a href='#define-tag-team-roll'>Tag Team Roll</a> with you, they only need to spend 2 <a href='#define-hope'>Hope</a> to do so.</p>"] },
{ label: "Call of the Slayer", name: "call-of-the-slayer", pages: ["Page 49"], summarybrief: "Play the <strong><a href='#define-call-of-the-slayer'>Call of the Slayer</a></strong> if you want to strike down adversaries with immense force.", summary: "Play the Call of the Slayer if you want to strike down adversaries with immense force.", spellcast: "", foundationcard: ["DH Core 046/270"], foundation: ["<p><strong><em>Slayer:</em></strong> You gain a pool of dice called Slayer Dice. On a roll with <a href='#define-hope'>Hope</a>, you can place a <strong>d6</strong> on this card instead of gaining a <a href='#define-hope'>Hope</a>, adding the die to the pool. You can store a number of Slayer Dice equal to your <a href='#define-damage-roll'>Proficiency</a>. When you make an <a href='#define-attack-roll'>attack roll</a> or <a href='#define-damage-roll'>damage roll</a>, you can spend any number of these Slayer Dice, rolling them and adding their result to the roll. At the end of each session, clear any unspent Slayer Dice on this card and gain a <a href='#define-hope'>Hope</a> per die cleared.</p>"], specializationcard: ["DH Core 047/270"], specialization: ["<p><strong><em>Weapon Specialist:</em></strong> You can wield multiple <a href='#define-weapon'>weapons</a> with dangerous ease. When you succeed on an attack, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to add one of the damage dice from your secondary weapon to the <a href='#define-damage-roll'>damage roll</a>. Additionally, once per <a href='#define-downtime'>long rest</a> when you roll your Slayer Dice, <a href='#define-reroll'>reroll</a> any 1s.</p>"], masterycard: ["DH Core 048/270"], mastery: ["<p><strong><em>Martial Preparation:</em></strong> You're an inspirational warrior to all who travel with you. Your party gains access to the Martial Preparation <a href='#define-downtime-move'>downtime move</a>. To use this move during a rest, describe how you instruct and train with your party. You and each ally who chooses this downtime move gain a <strong>d6</strong> Slayer Die. A PC with a Slayer Die can spend it to roll the die and add the result to an attack or <a href='#define-damage-roll'>damage roll</a> of their choice.</p>"] },
{ label: "School of Knowledge", name: "school-of-knowledge", pages: ["Page 50"], summarybrief: "Play the <strong><a href='#define-school-of-knowledge'>School of Knowledge</a></strong> if you want a keen understanding of the world around you.", summary: "Play the School of Knowledge if you want a keen understanding of the world around you.", spellcast: "Knowledge", foundationcard: ["DH Core 049/270"], foundation: ["<p><strong><em>Prepared:</em></strong> Take an additional <a href='#define-domain-card'>domain card</a> of your level or lower from a domain you have access to.</p>", "<p><strong><em>Adept:</em></strong> When you <a href='#define-experience'>Utilize an Experience</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> instead of spending a <a href='#define-hope'>Hope</a>. If you do, double your Experience <a href='#define-procedure'>modifier</a> for that roll.</p>"], specializationcard: ["DH Core 050/270"], specialization: ["<p><strong><em>Accomplished:</em></strong> Take an additional <a href='#define-domain-card'>domain card</a> of your level or lower from a <a href='#define-domain'>domain</a> you have access to.</p>", "<p><strong><em>Perfect Recall:</em></strong> Once per <a href='#define-downtime'>rest</a>, when you recall a <a href='#define-domain-card'>domain card</a> in your <a href='#define-loadout'>vault</a>, you can reduce its <a href='#define-domain-card'>Recall Cost</a> by 1.</p>"], masterycard: ["DH Core 051/270"], mastery: ["<p><strong><em>Brilliant:</em></strong> Take an additional <a href='#define-domain-card'>domain card</a> of your level or lower from a domain you have access to.</p>", "<p><strong><em>Honed Expertise:</em></strong> When you use an <a href='#define-experience'>Experience</a>, roll a <strong>d6</strong>. On a result of 5 or higher, you can use it without spending <a href='#define-hope'>Hope</a>.</p>"] },
{ label: "School of War", name: "school-of-war", pages: ["Page 51"], summarybrief: "Play the <strong><a href='#define-school-of-war'>School of War</a></strong> if you want to utilize trained magic for violence.", summary: "Play the School of War if you want to utilize trained magic for violence.", spellcast: "Knowledge", foundationcard: ["DH Core 052/270"], foundation: ["<p><strong><em>Battlemage:</em></strong> You've focused your studies on becoming an unconquerable force on the battlefield. Gain an additional <a href='#define-hit-point'>Hit Point</a> slot.</p>", "<p><strong><em>Face Your Fear:</em></strong> When you succeed with <a href='#define-fear'>Fear</a> on an <a href='#define-attack-roll'>attack roll</a>, you deal an extra <strong>1d10</strong> <a href='#define-damage-type'>magic damage</a>.</p>"], specializationcard: ["DH Core 053/270"], specialization: ["<p><strong><em>Conjure Shield:</em></strong> You can maintain a protective barrier of magic. While you have at least 2 Hope, you add your <a href='#define-damage-roll'>Proficiency</a> to your <a href='#define-evasion'>Evasion</a>.</p>", "<p><strong><em>Fueled by Fear:</em></strong> The extra <a href='#define-damage-type'>magic damage</a> from your <strong><em>Face Your Fear</em></strong> feature increases to <strong>2d10</strong>.</p>"], masterycard: ["DH Core 054/270"], mastery: ["<p><strong><em>Thrive in Chaos:</em></strong> When you succeed on an attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> after rolling damage to force the target to mark an additional <a href='#define-hit-point'>Hit Point</a>.</p>", "<p><strong><em>Have No Fear:</em></strong> The extra <a href='#define-damage-type'>magic damage</a> from your <strong><em>Face Your Fear</em></strong> feature increases to <strong>3d10</strong>.</p>"] }
];
// druid beastforms
const beastformList = [
{ label: "Agile Scout", name: "agile-scout", tier: 1, pages: ["Page 32"], examples: "(Fox, Mouse, Weasel, etc.)", stat: "Agility", statbonus: 1, evasionbonus: "2", attackrange: "Melee", attacktrait: "Agility", attackdamage: "d4", attackdamagetype: "phy", advantage: "deceive, locate, sneak", features: ["<p><strong><em>Agile:</em></strong> Your movement is silent, and you can <strong><a href='#define-hope'>spend a Hope</a></strong> to move up to <a href='#define-range'>Far</a> range without rolling.</p>", "<p><strong><em>Fragile:</em></strong> When you take Major or greater damage, you drop out of Beastform.</p>"] },
{ label: "Aquatic Scout", name: "aquatic-scout", tier: 1, pages: ["Page 32"], examples: "(Eel, Fish, Octopus, etc.)", stat: "Agility", statbonus: 1, evasionbonus: "2", attackrange: "Melee", attacktrait: "Agility", attackdamage: "d4 ", attackdamagetype: "phy", advantage: "navigate, sneak, swim", features: ["<p><strong><em>Aquatic:</em></strong> You can breathe and move naturally underwater.</p>", "<p><strong><em>Fragile:</em></strong> When you take Major or greater damage, you drop out of Beastform.</p>"] },
{ label: "Household Friend", name: "household-friend", tier: 1, pages: ["Page 32"], examples: "(Cat, Dog, Rabbit, etc.),", stat: "Instinct", statbonus: 1, evasionbonus: "2", attackrange: "Melee", attacktrait: "Instinct", attackdamage: "d6", attackdamagetype: "phy", advantage: "climb, locate, protect", features: ["<p><strong><em>Companion:</em></strong> When you <a href='#define-hope'>Help an Ally</a>, you can roll a <strong>d8</strong> as your <a href='#define-advantage'>advantage</a> die.</p>", "<p><strong><em>Fragile:</em></strong> When you take Major or greater damage, you drop out of Beastform.</p>"] },
{ label: "Nimble Grazer", name: "nimble-grazer", tier: 1, pages: ["Page 32"], examples: "(Deer, Gazelle, Goat, etc.)", stat: "Agility", statbonus: 1, evasionbonus: "3", attackrange: "Melee", attacktrait: "Agility", attackdamage: "d6", attackdamagetype: "phy", advantage: "leap, sneak, sprint", features: ["<p><strong><em>Elusive Prey:</em></strong> When an <a href='#define-attack-roll'>attack roll</a> against you would succeed, you can <strong><a href='#define-stress'>mark a Stress</a></strong> and roll a <strong>d4</strong>. Add the result to your <a href='#define-evasion'>Evasion</a> against this attack.</p>", "<p><strong><em>Fragile:</em></strong> When you take Major or greater damage, you drop out of Beastform.</p>"] },
{ label: "Pack Predator", name: "pack-predator", tier: 1, pages: ["Page 32"], examples: "(Coyote, Hyena, Wolf, etc.),", stat: "Strength", statbonus: 2, evasionbonus: "1", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d8+2", attackdamagetype: "phy", advantage: "attack, sprint, track", features: ["<p><strong><em>Hobbling Strike:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to make the target <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</p>", "<p><strong><em>Pack Hunting:</em></strong> When you succeed on an attack against the same target as an ally who acts immediately before you, add a <strong>d8</strong> to your <a href='#define-damage-roll'>damage roll</a>.</p>"] },
{ label: "Stalking Arachnid", name: "stalking-arachnid", tier: 1, pages: ["Page 32"], examples: "(Tarantula, Wolf Spider, etc.),", stat: "Finesse", statbonus: 1, evasionbonus: "2", attackrange: "Melee", attacktrait: "Finesse", attackdamage: "d6+1", attackdamagetype: "phy", advantage: "attack, climb, sneak", features: ["<p><strong><em>Venomous Bite:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, the target becomes <a href='#define-temporary'>temporarily</a> <em>Poisoned</em>. A <em>Poisoned</em> creature takes <strong>1d10</strong> <a href='#define-damage-type'>direct physical damage</a> each time they act.</p>", "<p><strong><em>Webslinger:</em></strong> You can create a strong web material useful for both adventuring and battle. The web is resilient enough to support one creature. You can <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Restrain</em></a> a target within <a href='#define-range'>Close</a> range by succeeding on a <a href='#define-trait-roll'>Finesse Roll</a> against them.</p>"] },
{ label: "Armored Sentry", name: "armored-sentry", tier: 2, pages: ["Page 33"], examples: "(Armadillo, Pangolin, Turtle, etc.),", stat: "Strength", statbonus: 1, evasionbonus: "1", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d8+2", attackdamagetype: "phy", advantage: "dig, locate, protect", features: ["<p><strong><em>Armored Shell:</em></strong> Your hardened exterior gives you <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>. Additionally, <strong><a href='#define-armor'>mark an Armor Slot</a></strong> to retract into your shell. While in your shell, <a href='#define-damage-type'>physical damage</a> is reduced by a number equal to your <a href='#define-armor'>Armor Score</a> (after applying resistance), but you can't perform other <a href='#define-action'>actions</a> without leaving this form.</p>", "<p><strong><em>Cannonball:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to allow an ally to throw or launch you at an <a href='#define-adversary'>adversary</a>. To do so, the ally makes an <a href='#define-attack-roll'>attack roll</a> using <a href='#define-agility'>Agility</a> or <a href='#define-strength'>Strength</a> (their choice) against a target within <a href='#define-range'>Close</a> range. On a success, the <a href='#define-adversary'>adversary</a> takes <strong>d12+2</strong> <a href='#define-damage-type'>physical damage</a> using the thrower's <a href='#define-damage-roll'>Proficiency</a>. You can <strong><a href='#define-hope'>spend a Hope</a></strong> to target an additional adversary within <a href='#define-range'>Very Close</a> range of the first. The second target takes half the damage dealt to the first target.</p>"] },
{ label: "Mighty Strider", name: "mighty-strider", tier: 2, pages: ["Page 33"], examples: "(Camel, Horse, Zebra, etc.)", stat: "Agility", statbonus: 1, evasionbonus: "2", attackrange: "Melee", attacktrait: "Agility", attackdamage: "d8+1", attackdamagetype: "phy", advantage: "leap, navigate, sprint", features: ["<p><strong><em>Carrier:</em></strong> You can carry up to two willing allies with you when you move.</p>", "<p><strong><em>Trample:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to move up to <a href='#define-range'>Close</a> range in a straight line and make an attack against all targets within <a href='#define-range'>Melee</a> range of the line. Targets you succeed against take <strong>d8+1</strong> <a href='#define-damage-type'>physical damage</a> using your <a href='#define-damage-roll'>Proficiency</a> and are <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</p>"] },
{ label: "Pouncing Predator", name: "pouncing-predator", tier: 2, pages: ["Page 33"], examples: "(Cheetah, Lion, Panther, etc.),", stat: "Instinct", statbonus: 1, evasionbonus: "3", attackrange: "Melee", attacktrait: "Instinct", attackdamage: "d8+6", attackdamagetype: "phy", advantage: "attack, climb, sneak", features: ["<p><strong><em>Fleet:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> to move up to <a href='#define-range'>Far</a> range without rolling.</p>", "<p><strong><em>Takedown:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to move into <a href='#define-range'>Melee</a> range of a target and make an <a href='#define-attack-roll'>attack roll</a> against them. On a success, you gain a +2 bonus to your <a href='#define-damage-roll'>Proficiency</a> for this attack and the target must mark a <a href='#define-stress'>Stress</a>.</p>"] },
{ label: "Powerful Beast", name: "powerful-beast", tier: 2, pages: ["Page 33", "Errata"], examples: "(Bear, Bull, Moose, etc.),", stat: "Strength", statbonus: 3, evasionbonus: "1", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d10+4", attackdamagetype: "phy", advantage: "navigate, protect, scare", features: ["<p><strong><em>Rampage:</em></strong> When you roll a 1 on a <a href='#define-damage-roll'>damage die</a>, you can roll a <strong>d10</strong> and add the result to the <a href='#define-damage-roll'>damage roll</a>. Additionally, before you make an <a href='#define-attack-roll'>attack roll</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> for that attack.</p>", "<p><strong><em>Thick Hide:</em></strong> You gain a +2 bonus to your <a href='#define-hit-point'>damage thresholds</a>.</p>"] },
{ label: "Striking Serpent", name: "striking-serpent", tier: 2, pages: ["Page 33"], examples: "(Cobra, Rattlesnake, Viper, etc.),", stat: "Finesse", statbonus: 1, evasionbonus: "2", attackrange: "Very Close", attacktrait: "Finesse", attackdamage: "d8+4", attackdamagetype: "phy", advantage: "climb, deceive, sprint", features: ["<p><strong><em>Venomous Strike:</em></strong> Make an attack against any number of targets within <a href='#define-range'>Very Close</a> range. On a success, a target is <a href='#define-temporary'>temporarily</a> <em>Poisoned</em>. A <em>Poisoned</em> creature takes <strong>1d10</strong> <a href='#define-damage-type'>direct physical damage</a> each time they act.</p>", "<p><strong><em>Warning Hiss:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to force any number of targets within <a href='#define-range'>Melee</a> range to move back to <a href='#define-range'>Very Close</a> range.</p>"] },
{ label: "Winged Beast", name: "winged-beast", tier: 2, pages: ["Page 33"], examples: "(Hawk, Owl, Raven, etc.),", stat: "Finesse", statbonus: 1, evasionbonus: "3", attackrange: "Melee", attacktrait: "Finesse", attackdamage: "d4+2", attackdamagetype: "phy", advantage: "deceive, locate, scare", features: ["<p><strong><em>Bird's-Eye View:</em></strong> You can fly at will. Once per <a href='#define-downtime'>rest</a> while you are airborne, you can ask the GM a question about the scene below you without needing to roll. The first time a character makes a roll to act on this information, they gain <a href='#define-advantage'>advantage</a> on the roll.</p>", "<p><strong><em>Hollow Bones:</em></strong> You gain a &minus;2 penalty to your <a href='#define-hit-point'>damage thresholds</a>.</p>"] },
{ label: "Aquatic Predator", name: "aquatic-predator", tier: 3, pages: ["Page 34"], examples: "(Dolphin, Orca, Shark, etc.)", stat: "Agility", statbonus: 2, evasionbonus: "4", attackrange: "Melee", attacktrait: "Agility", attackdamage: "d10+6", attackdamagetype: "phy", advantage: "attack, swim, track", features: ["<p><strong><em>Aquatic:</em></strong> You can breathe and move naturally underwater.</p>", "<p><strong><em>Vicious Maul:</em></strong> When you succeed on an attack against a target, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to make them <a href='#define-condition'><em>Vulnerable</em></a> and gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> for this attack.</p>"] },
{ label: "Great Predator", name: "great-predator", tier: 3, pages: ["Page 34"], examples: "(Dire Wolf, Velociraptor, Sabertooth Tiger, etc.),", stat: "Strength", statbonus: 2, evasionbonus: "2", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d12+8", attackdamagetype: "phy", advantage: "attack, sneak, sprint", features: ["<p><strong><em>Carrier:</em></strong> You can carry up to two willing allies with you when you move.</p>", "<p><strong><em>Vicious Maul:</em></strong> When you succeed on an attack against a target, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to make them <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a> and gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> for this attack.</p>"] },
{ label: "Great Winged Beast", name: "great-winged-beast", tier: 3, pages: ["Page 34"], examples: "(Giant Eagle, Falcon, etc.),", stat: "Finesse", statbonus: 2, evasionbonus: "3", attackrange: "Melee", attacktrait: "Finesse", attackdamage: "d8+6", attackdamagetype: "phy", advantage: "deceive, distract, locate", features: ["<p><strong><em>Bird's-Eye View:</em></strong> You can fly at will. Once per <a href='#define-downtime'>rest</a> while you are airborne, you can ask the GM a question about the scene below you without needing to roll. The first time a character makes a roll to act on this information, they gain <a href='#define-advantage'>advantage</a> on the roll.</p>", "<p><strong><em>Carrier:</em></strong> You can carry up to two willing allies with you when you move.</p>"] },
{ label: "Legendary Beast", name: "legendary-beast", tier: 3, pages: ["Page 34"], examples: "(Upgraded <a href='#druid-beastform-tier-1'>Tier 1</a> Options)", stat: "Strength", statbonus: 2, evasionbonus: "3", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d10+8", attackdamagetype: "phy", features: ["<p><strong><em>Evolved:</em></strong> Pick a Tier 1 <a href='#druid-beastform-options'>Beastform option</a> and become a larger, more powerful version of that creature. While you're in this form, you retain all traits and features from the original form and gain the following bonuses:</p><ul class='og-list-disc'><li>A +6 bonus to <a href='#define-damage-roll'>damage rolls</a></li><li>A +1 bonus to the <a href='#define-trait'>trait</a> used by this form</li><li>A +2 bonus to <a href='#define-evasion'>Evasion</a></li></ul>"] }, { label: "Legendary Hybrid", name: "legendary-hybrid", tier: 3, pages: ["Page 34"], examples: "(Griffon, Sphinx, etc.),", stat: "Strength", statbonus: 2, evasionbonus: "3", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d10+8", attackdamagetype: "phy", advantage: "hybrid features", features: ["<p><strong><em>Hybrid Features:</em></strong> To transform into this creature, <strong><a href='#define-stress'>mark an additional Stress</a></strong>. Choose any two <a href='#druid-beastform-options'>Beastform options</a> from Tiers 1&ndash;2. Choose a total of four advantages and two features from those options.</p>"] },
{ label: "Mighty Lizard", name: "mighty-lizard", tier: 3, pages: ["Page 34"], examples: "(Alligator, Crocodile, Gila Monster, etc.),", stat: "Instinct", statbonus: 2, evasionbonus: "1", attackrange: "Melee", attacktrait: "Instinct", attackdamage: "d10+7", attackdamagetype: "phy", advantage: "attack, sneak, track", features: ["<p><strong><em>Physical Defense:</em></strong> You gain a +3 bonus to your <a href='#define-hit-point'>damage thresholds</a>.</p>", "<p><strong><em>Snapping Strike:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to clamp that opponent in your jaws, making them <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a>.</p>"] },
{ label: "Epic Aquatic Beast", name: "epic-aquatic-beast", tier: 4, pages: ["Page 35"], examples: "(Giant Squid, Whale, etc.)", stat: "Agility", statbonus: 3, evasionbonus: "3", attackrange: "Melee", attacktrait: "Agility", attackdamage: "d10+10", attackdamagetype: "phy", advantage: "locate, protect, scare, track", features: ["<p><strong><em>Ocean Master:</em></strong> You can breathe and move naturally underwater. When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Restrain</em></a> them.</p>", "<p><strong><em>Unyielding:</em></strong> When you would mark an <a href='#define-armor'>Armor Slot</a>, roll a <strong>d6</strong>. On a result of 5 or higher, reduce the severity by one <a href='#define-hit-point'>threshold</a> without marking an Armor Slot.</p>"] },
{ label: "Massive Behemoth", name: "massive-behemoth", tier: 4, pages: ["Page 35"], examples: "(Elephant, Mammoth, Rhinoceros, etc.),", stat: "Strength", statbonus: 3, evasionbonus: "1", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d12+12", attackdamagetype: "phy", advantage: "locate, protect, scare, sprint", features: ["<p><strong><em>Carrier:</em></strong> You can carry up to four willing allies with you when you move.</p>", "<p><strong><em>Demolish:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> to move up to <a href='#define-range'>Far</a> range in a straight line and make an attack against all targets within <a href='#define-range'>Melee</a> range of the line. Targets you succeed against take <strong>d8+10</strong> <a href='#define-damage-type'>physical damage</a> using your <a href='#define-damage-roll'>Proficiency</a> and are <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</p>", "<p><strong><em>Undaunted:</em></strong> You gain a +2 bonus to all your <a href='#define-hit-point'>damage thresholds</a>.</p>"] },
{ label: "Mythic Aerial Hunter", name: "mythic-aerial-hunter", tier: 4, pages: ["Page 35"], examples: "(Dragon, Pterodactyl, Roc, Wyvern, etc.),", stat: "Finesse", statbonus: 3, evasionbonus: "4", attackrange: "Melee", attacktrait: "Finesse", attackdamage: "d10+11", attackdamagetype: "phy", advantage: "attack, deceive, locate, navigate", features: ["<p><strong><em>Carrier:</em></strong> You can carry up to three willing allies with you when you move.</p>", "<p><strong><em>Deadly Raptor:</em></strong> You can fly at will and move up to <a href='#define-range'>Far</a> range as part of your <a href='#define-action'>action</a>. When you move in a straight line into <a href='#define-range'>Melee</a> range of a target from at least <a href='#define-range'>Close</a> range and make an attack against that target in the same action, you can <a href='#define-reroll'>reroll</a> all damage dice that rolled a result lower than your <a href='#define-damage-roll'>Proficiency</a>.</p>"] },
{ label: "Mythic Beast", name: "mythic-beast", tier: 4, pages: ["Page 35"], examples: "(Upgraded <a href='#druid-beastform-tier-1'>Tier 1</a> or <a href='#druid-beastform-tier-2'>Tier 2</a> Options)", stat: "", statbonus: "", evasionbonus: "", attackrange: "", attacktrait: "", attackdamage: "", attackdamagetype: "", advantage: "", features: ["<p><strong><em>Evolved:</em></strong> Pick a Tier 1 or Tier 2 <a href='#druid-beastform-options'>Beastform option</a> and become a larger, more powerful version of that creature. While you're in this form, you retain all traits and features from the original form and gain the following bonuses:</p><ul class='og-list-disc'><li>A +9 bonus to <a href='#define-damage-roll'>damage rolls</a></li><li>A +2 bonus to the <a href='#define-trait'>trait</a> used by this form</li><li>Your damage die increases by one size (<strong>d6</strong> becomes <strong>d8</strong>, <strong>d8</strong> becomes <strong>d10</strong>, <em>etc.</em>)</li></ul>"] },
{ label: "Mythic Hybrid", name: "mythic-hybrid", tier: 4, pages: ["Page 35"], examples: "(Chimera, Cockatrice, Manticore.),", stat: "Strength", statbonus: 3, evasionbonus: "2", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d12+10", attackdamagetype: "phy", advantage: "", features: ["<p><strong><em>Hybrid Features:</em></strong> To transform into this creature, mark 2 additional <a href='#define-stress'>Stress</a>. Choose any three <a href='#druid-beastform-options'>Beastform options</a> from Tiers 1&ndash;3. Choose a total of five advantages and three features from those options.</p>"] },
{ label: "Terrible Lizard", name: "terrible-lizard", tier: 4, pages: ["Page 35"], examples: "(Brachiosaurus, Tyrannosaurus, etc.),", stat: "Strength", statbonus: 3, evasionbonus: "2", attackrange: "Melee", attacktrait: "Strength", attackdamage: "d12+10", attackdamagetype: "phy", advantage: "attack, deceive, scare, track", features: ["<p><strong><em>Devastating Strikes:</em></strong> When you deal <a href='#define-hit-point'>Severe</a> damage to a target within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to force them to mark an additional <a href='#define-hit-point'>Hit Point</a>.</p>", "<p><strong><em>Massive Stride:</em></strong> You can move up to <a href='#define-range'>Far</a> range without rolling. You ignore rough terrain (at the GM's discretion) due to your size.</p>"], }
];
// domains
const domainList = [
{ label: "Arcana", name: "arcana", pages: ["Page 24", "Page 328"], theme: "Innate and Instinctual magic", summarybrief: "<strong><a href='#define-arcana'>Arcana</a></strong> offers wielders a volatile power, but it is incredibly potent when correctly channeled.", summary: "<p>Those who choose this path tap into the raw, enigmatic forces of the realms to manipulate both their own energy and the elements. Arcana offers wielders a volatile power, but it is incredibly potent when correctly channeled.</p>" },
{ label: "Blade", name: "blade", pages: ["Page 24", "Page 329"], theme: "Weapon mastery", summarybrief: "Wielders of <strong><a href='#define-blade'>Blade</a></strong> dedicate themselves to achieving inexorable power over death.", summary: "<p>Whether by steel, bow, or perhaps a more specialized arm, those who follow this path have the skill to cut short the lives of others. Wielders of Blade dedicate themselves to achieving inexorable power over death.</p>" },
{ label: "Bone", name: "bone", pages: ["Page 24", "Page 331"], theme: "Tactics and the body", summarybrief: "Adherents to <strong><a href='#define-bone'>Bone</a></strong> gain an unparalleled understanding of bodies and their movements.", summary: "<p>Practitioners of this domain have an uncanny control over their own physical abilities and an eye for predicting the behaviors of others in combat. Adherents to Bone gain an unparalleled understanding of bodies and their movements.</p>" },
{ label: "Codex", name: "codex", pages: ["Page 24", "Page "], theme: "Intensive magical study", summarybrief: "<strong><a href='#define-codex'>Codex</a></strong> offers a commanding and versatile understanding of magic to devotees who pursue knowledge beyond the boundaries of common wisdom.", summary: "<p>Those who seek magical knowledge turn to the equations of power recorded in books, written on scrolls, etched into walls, or tattooed on bodies. Codex offers a commanding and versatile understanding of magic to devotees who pursue knowledge beyond the boundaries of common wisdom.</p>" },
{ label: "Grace", name: "grace", pages: ["Page 24", "Page 334"], theme: "Charisma", summarybrief: "<strong><a href='#define-grace'>Grace</a></strong> offers its wielders raw magnetism and mastery over language.", summary: "<p>Through rapturous storytelling, charming spells, or a shroud of lies, those who channel this power define the realities of their adversaries, bending perception to their will. Grace offers its wielders raw magnetism and mastery over language.</p>" },
{ label: "Midnight", name: "midnight", pages: ["Page 24", "Page 336"], theme: "Shadows and secrecy", summarybrief: "<strong><a href='#define-midnight'>Midnight</a></strong> offers practitioners the power to control and create enigmas.", summary: "<p>Whether by clever tricks, deft magic, or the cloak of night, those who channel these forces practice the art of obscurity and can uncover sequestered treasures. Midnight offers practitioners the power to control and create enigmas.</p>" },
{ label: "Sage", name: "sage", pages: ["Page 24", "Page 338"], theme: "The natural world", summarybrief: "<strong><a href='#define-sage'>Sage</a></strong> grants its adherents the vitality of a blooming flower and the ferocity of a ravenous predator.", summary: "<p>Those who walk this path tap into the unfettered power of the earth and its creatures to unleash raw magic. Sage grants its adherents the vitality of a blooming flower and the ferocity of a ravenous predator.</p>" },
{ label: "Splendor", name: "splendor", pages: ["Page 24", "Page 340", "Errata"], theme: "Life", summarybrief: "<strong><a href='#define-splendor'>Splendor</a></strong> is the domain of life. Through this magic, followers gain the ability to heal and, to an extent, control death.", summary: "<p>Splendor is the domain of life. Through this magic, followers gain the ability to heal and, to an extent, control death.</p>" },
{ label: "Valor", name: "valor", pages: ["Page 24", "Page 341"], theme: "Protection", summarybrief: "<strong><a href='#define-valor'>Valor</a></strong> offers great power to those who raise their shields in defense of others.", summary: "<p>Whether through attack or defense, those who choose this discipline channel formidable strength to protect their allies in battle. Valor offers great power to those who raise their shields in defense of others.</p>" }
];
// domain cards
const domaincardList = [
{ label: "Rune Ward", name: "rune-ward", domain: "Arcana", level: 1, type: "Spell", recall: 0, pages: ["Page 328", "DH Core 082/270"], effects: "<p>You have a deeply personal trinket that can be infused with protective magic and held as a ward by you or an ally. Describe what it is and why it's important to you. The ward's holder can <strong><a href='#define-hope'>spend a Hope</a></strong> to reduce incoming damage by <strong>1d8</strong>.</p><p>If the Ward Die result is 8, the ward's power ends after it reduces damage this turn. It can be recharged for free on your next <a href='#define-downtime'>rest</a>.</p>" },
{ label: "Unleash Chaos", name: "unleash-chaos", domain: "Arcana", level: 1, type: "Spell", recall: 1, pages: ["Page 328", "DH Core 083/270"], effects: "<p>At the beginning of a session, place a number of tokens equal to your <a href='#define-subclass'>Spellcast trait</a> on this card.</p><p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range and spend any number of tokens to channel raw energy from within yourself to unleash against them. On a success, roll a number of <strong>d10s</strong> equal to the tokens you spent and deal that much <a href='#define-damage-type'>magic damage</a> to the target. <strong><a href='#define-stress'>Mark a Stress</a></strong> to replenish this card with tokens (up to your <a href='#define-subclass'>Spellcast trait</a>).</p><p>At the end of each session, clear all unspent tokens.</p>" },
{ label: "Wall Walk", name: "wall-walk", domain: "Arcana", level: 1, type: "Spell", recall: 1, pages: ["Page 328", "DH Core 084/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to allow a creature you can touch to climb on walls and ceilings as easily as walking on the ground. This lasts until the end of the scene or you cast Wall Walk again.</p>" },
{ label: "Cinder Grasp", name: "cinder-grasp", domain: "Arcana", level: 2, type: "Spell", recall: 1, pages: ["Page 328", "DH Core 085/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Melee</a> range. On a success, the target instantly bursts into flames, takes <strong>1d20+3</strong> <a href='#define-damage-type'>magic damage</a>, and is <a href='#define-condition'>temporarily</a> lit <em>On Fire</em>. When a creature acts while <em>On Fire</em>, they must take an extra <strong>2d6</strong> <a href='#define-damage-type'>magic damage</a> if they are still <em>On Fire</em> at the end of their action.</p>" },
{ label: "Floating Eye", name: "floating-eye", domain: "Arcana", level: 2, type: "Spell", recall: 0, pages: ["Page 328", "DH Core 086/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to create a single, small floating orb that you can move anywhere within <a href='#define-range'>Very Far</a> range. While this spell is active, you can see through the orb as though you're looking out from its position. You can transition between using your own senses and seeing through the orb freely. If the orb takes damage or moves out of range, the spell ends.</p>" },
{ label: "Counterspell", name: "counterspell", domain: "Arcana", level: 3, type: "Spell", recall: 2, pages: ["Page 328", "DH Core 087/270"], effects: "<p>You can interrupt a magical effect taking place by making a <a href='#define-reaction-roll'>reaction roll</a> using your <a href='#define-subclass'>Spellcast trait</a>. On a success, the effect stops and any consequences are avoided, and this card is placed in your vault.</p>" },
{ label: "Flight", name: "flight", domain: "Arcana", level: 3, type: "Spell", recall: 1, pages: ["Page 328", "DH Core 088/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. On a success, place a number of tokens equal to your <a href='#define-agility'>Agility</a> on this card (minimum 1). When you make an <a href='#define-action-roll'>action roll</a> while flying, spend a token from this card. After the <a href='#define-action'>action</a> that spends the last token is resolved, you descend to the ground directly below you.</p>" },
{ label: "Blink Out", name: "blink-out", domain: "Arcana", level: 4, type: "Spell", recall: 1, pages: ["Page 328", "DH Core 089/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (12)</a></strong>. On a success, <strong><a href='#define-hope'>spend a Hope</a></strong> to teleport to another point you can see within <a href='#define-range'>Far</a> range. If any willing creatures are within <a href='#define-range'>Very Close</a> range, <strong><a href='#define-hope'>spend an additional Hope</a></strong> for each creature to bring them with you.</p>" },
{ label: "Preservation Blast", name: "preservation-blast", domain: "Arcana", level: 4, type: "Spell", recall: 2, pages: ["Page 328", "DH Core 090/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all targets within <a href='#define-range'>Melee</a> range. Targets you succeed against are forced back to <a href='#define-range'>Far</a> range and take <strong>d8+3</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-subclass'>Spellcast trait</a>.</p>" },
{ label: "Chain Lightning", name: "chain-lightning", domain: "Arcana", level: 5, type: "Spell", recall: 1, pages: ["Page 328", "DH Core 091/270"], effects: "<p>Mark 2 <a href='#define-stress'>Stress</a> to make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong>, unleashing lightning on all targets within <a href='#define-range'>Close</a> range. Targets you succeed against must make a <a href='#define-reaction-roll'>reaction roll</a> with a <a href='#define-difficulty'>Difficulty</a> equal to the result of your <a href='#define-spellcast-roll'>Spellcast Roll</a>. Targets who fail take <strong>2d8+4</strong> <a href='#define-damage-type'>magic damage</a>. Additional adversaries not already targeted by Chain Lightning and within <a href='#define-range'>Close</a> range of previous targets who took damage must also make the <a href='#define-reaction-roll'>reaction roll</a>. Targets who fail take <strong>2d8+4</strong> <a href='#define-damage-type'>magic damage</a>. This chain continues until there are no more adversaries within <a href='#define-range'>range</a>.</p>" },
{ label: "Premonition", name: "premonition", domain: "Arcana", level: 5, type: "Spell", recall: 2, pages: ["Page 328", "DH Core 092/270"], effects: "<p>You can channel arcane energy to have visions of the future. Once per <a href='#define-downtime'>long rest</a>, immediately after the GM conveys the consequences of a roll you made, you can rescind the move and consequences like they never happened and make another move instead.</p>" },
{ label: "Rift Walker", name: "rift-walker", domain: "Arcana", level: 6, type: "Spell", recall: 2, pages: ["Page 329", "DH Core 093/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. On a success, you place an arcane marking on the ground where you currently stand. The next time you successfully cast Rift Walker, a rift in space opens up, providing safe passage back to the exact spot where the marking was placed. This rift stays open until you choose to close it or you cast another spell.</p><p>You can drop the spell at any time to cast Rift Walker again and place the marking somewhere new.</p>" },
{ label: "Telekinesis", name: "telekinesis", domain: "Arcana", level: 6, type: "Spell", recall: 0, pages: ["Page 329", "DH Core 094/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range. On a success, you can use your mind to move them anywhere within <a href='#define-range'>Far</a> range of their original position. You can throw the lifted target as an attack by making an additional <a href='#define-spellcast-roll'>Spellcast Roll</a> against the second target you're trying to attack. On a success, deal <strong>d12+4</strong> <a href='#define-damage-type'>physical damage</a> to the second target using your <a href='#define-damage-roll'>Proficiency</a>. This spell then ends.</p>" },
{ label: "Arcana-Touched", name: "arcana-touched", domain: "Arcana", level: 7, type: "Ability", recall: 2, pages: ["Page 329", "DH Core 095/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-arcana'>Arcana</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>+1 bonus to your <a href='#define-spellcast-roll'>Spellcast Rolls</a></li><li>Once per <a href='#define-downtime'>rest</a>, you can switch the results of your <a href='#define-action-roll'>Hope and Fear Dice</a>.</li></ul>" },
{ label: "Cloaking Blast", name: "cloaking-blast", domain: "Arcana", level: 7, type: "Spell", recall: 2, pages: ["Page 329", "DH Core 096/270"], effects: "<p>When you make a successful <a href='#define-spellcast-roll'>Spellcast Roll</a> to cast a different spell, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to become <em>Cloaked</em>. While <em>Cloaked</em>, you remain unseen if you are stationary when an <a href='#define-adversary'>adversary</a> moves to where they would normally see you. When you move into or within an adversary's line of sight or make an attack, you are no longer <em>Cloaked</em>.</p>" },
{ label: "Arcane Reflection", name: "arcane-reflection", domain: "Arcana", level: 8, type: "Spell", recall: 1, pages: ["Page 329", "DH Core 097/270"], effects: "<p>When you would take <a href='#define-damage-type'>magic damage</a>, you can <strong><a href='#define-hope'>spend any number of Hope</a></strong> to roll that many <strong>d6s</strong>. If any roll a 6, the attack is reflected back to the caster, dealing the damage to them instead.</p>" },
{ label: "Confusing Aura", name: "confusing-aura", domain: "Arcana", level: 8, type: "Spell", recall: 2, pages: ["Page 329", "DH Core 098/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (14)</a></strong>. Once per <a href='#define-downtime'>long rest</a> on a success, you create a layer of illusion over your body that makes it hard to tell exactly where you are. <strong><a href='#define-stress'>Mark any number of Stress</a></strong> to make that many additional layers. When an <a href='#define-adversary'>adversary</a> makes an attack against you, roll a number of <strong>d6s</strong> equal to the number of layers currently active. If any roll a 5 or higher, one layer of the aura is destroyed and the attack fails. If all the results are 4 or lower, you take the damage and this spell ends.</p>" },
{ label: "Earthquake", name: "earthquake", domain: "Arcana", level: 9, type: "Spell", recall: 2, pages: ["Page 329", "DH Core 099/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (16)</a></strong>. Once per <a href='#define-downtime'>rest</a> on a success, all targets within <a href='#define-range'>Very Far</a> range who aren't flying must make a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(18)</strong>. Targets who fail take <strong>3d10+8</strong> <a href='#define-damage-type'>physical damage</a> and are <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>. Targets who succeed take half damage.</p><p>Additionally, when you succeed on the <a href='#define-spellcast-roll'>Spellcast Roll</a>, all terrain within <a href='#define-range'>Very Far</a> range becomes difficult to move through and structures within this range might sustain damage or crumble.</p>" },
{ label: "Sensory Projection", name: "sensory-projection", domain: "Arcana", level: 9, type: "Spell", recall: 0, pages: ["Page 329", "DH Core 100/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. On a success, drop into a vision that lets you clearly see and hear any place you have been before as though you are standing there in this moment. You can move freely in this vision and are not constrained by the physics or impediments of a physical body. This spell cannot be detected by mundane or magical means. You drop out of this vision upon taking damage or casting another spell.</p>" },
{ label: "Adjust Reality", name: "adjust-reality", domain: "Arcana", level: 10, type: "Spell", recall: 1, pages: ["Page 329", "DH Core 101/270"], effects: "<p>After you or a willing ally make any roll, you can <strong><a href='#define-hope'>spend 5 Hope</a></strong> to change the numerical result of that roll to a result of your choice instead. The result must be plausible within the range of the dice.</p>" },
{ label: "Falling Sky", name: "falling-sky", domain: "Arcana", level: 10, type: "Spell", recall: 1, pages: ["Page 329", "DH Core 102/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all adversaries within <a href='#define-range'>Far</a> range. <strong><a href='#define-stress'>Mark any number of Stress</a></strong> to make shards of arcana rain down from above. Targets you succeed against take <strong>1d20+2</strong> <a href='#define-damage-type'>magic damage</a> for each <a href='#define-stress'>Stress</a> marked.</p>" },
{ label: "Get Back Up", name: "get-back-up", domain: "Blade", level: 1, type: "Ability", recall: 1, pages: ["Page 329", "DH Core 103/270"], effects: "<p>When you take <a href='#define-hit-point'>Severe</a> damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to reduce the severity by one threshold." },
{ label: "Not Good Enough", name: "not-good-enough", domain: "Blade", level: 1, type: "Ability", recall: 1, pages: ["Page 329", "DH Core 104/270"], effects: "<p>When you roll your <a href='#define-damage-roll'>damage dice</a>, you can <a href='#define-reroll'>reroll</a> any 1s or 2s.</p>" },
{ label: "Whirlwind", name: "whirlwind", domain: "Blade", level: 1, type: "Ability", recall: 0, pages: ["Page 329", "DH Core 105/270", "Errata"], effects: "<p>When you make a successful attack against a target within <a href='#define-range'>Very Close</a> range, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to use the attack against all other targets within <a href='#define-range'>Very Close</a> range. All additional adversaries you succeed against with this ability take half damage.</p>" },
{ label: "A Soldier's Bond", name: "a-soldiers-bond", domain: "Blade", level: 2, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 106/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, when you compliment someone or ask them about something they're good at, you can both gain 3 <a href='#define-hope'>Hope</a>.</p>" },
{ label: "Reckless", name: "reckless", domain: "Blade", level: 2, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 107/270"], effects: "<p><strong><a href='#define-stress'>Mark a Stress</a></strong> to gain <a href='#define-advantage'>advantage</a> on an attack.</p>" },
{ label: "Scramble", name: "scramble", domain: "Blade", level: 3, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 108/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, when a creature within <a href='#define-range'>Melee</a> range would deal damage to you, you can avoid the attack and safely move out of <a href='#define-range'>Melee</a> range of the enemy.</p>" },
{ label: "Versatile Fighter", name: "versatile-fighter", domain: "Blade", level: 3, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 109/270"], effects: "<p>You can use a different character trait for an equipped <a href='#define-weapon'>weapon</a>, rather than the trait the weapon calls for. When you deal damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to use the maximum result of one of your damage dice instead of rolling it.</p>" },
{ label: "Deadly Focus", name: "deadly-focus", domain: "Blade", level: 4, type: "Ability", recall: 2, pages: ["Page 330", "DH Core 110/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, you can apply all your focus toward a target of your choice. Until you attack another creature, you defeat the target, or the battle ends, gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a>.</p>" },
{ label: "Fortified Armor", name: "fortified-armor", domain: "Blade", level: 4, type: "Ability", recall: 0, pages: ["Page 330", "DH Core 111/270"], effects: "<p>While you are wearing armor, gain a +2 bonus to your <a href='#define-hit-point'>damage thresholds</a>.</p>" },
{ label: "Champion's Edge", name: "champions-edge", domain: "Blade", level: 5, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 112/270"], effects: "<p>When you critically succeed on an attack, you can <strong><a href='#define-hope'>spend up to 3 Hope</a></strong> and choose one of the following options for each <a href='#define-hope'>Hope</a> spent:</p><ul class='og-list-disc'><li>You clear a <a href='#define-hit-point'>Hit Point</a>.</li><li>You clear an <a href='#define-armor'>Armor Slot</a>.</li><li>The target must mark an additional <a href='#define-hit-point'>Hit Point</a>.</li></ul><p>You can't choose the same option more than once.</p>" },
{ label: "Vitality", name: "vitality", domain: "Blade", level: 5, type: "Ability", recall: 0, pages: ["Page 330", "DH Core 113/270"], effects: "<p>When you choose this card, permanently gain two of the following benefits:</p><ul class='og-list-disc'><li>One <a href='#define-stress'>Stress</a> slot</li><li>One <a href='#define-hit-point'>Hit Point</a> slot</li><li>+2 bonus to your <a href='#define-hit-point'>damage thresholds</a></li></ul><p>Then place this card in your <a href='#define-loadout'>vault</a> permanently.</p>" },
{ label: "Battle-Hardened", name: "battle-hardened", domain: "Blade", level: 6, type: "Ability", recall: 2, pages: ["Page 330", "DH Core 114/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a> when you would make a <a href='#define-death'>death move</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to clear a <a href='#define-hit-point'>Hit Point</a> instead.</p>" },
{ label: "Rage Up", name: "rage-up", domain: "Blade", level: 6, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 115/270"], effects: "<p>Before you make an attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a bonus to your <a href='#define-damage-roll'>damage roll</a> equal to twice your <a href='#define-strength'>Strength</a>. You can Rage Up twice per attack.</p>" },
{ label: "Blade-Touched", name: "blade-touched", domain: "Blade", level: 7, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 116/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-blade'>Blade</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>+2 bonus to your <a href='#define-attack-roll'>attack rolls</a></li><li>+4 bonus to your Severe <a href='#define-hit-point'>damage threshold</a></li></ul>" },
{ label: "Glancing Blow", name: "glancing-blow", domain: "Blade", level: 7, type: "Ability", recall: 1, pages: ["Page 330", "DH Core 117/270"], effects: "<p>When you fail an attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to deal <a href='#define-weapon'>weapon</a> damage using half your <a href='#define-damage-roll'>Proficiency</a>.</p>" },
{ label: "Battle Cry", name: "battle-cry", domain: "Blade", level: 8, type: "Ability", recall: 2, pages: ["Page 330", "DH Core 118/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, while you're charging into danger, you can muster a rousing call that inspires your allies. All allies who can hear you each clear a <a href='#define-stress'>Stress</a> and gain a <a href='#define-hope'>Hope</a>. Additionally, your allies gain <a href='#define-advantage'>advantage</a> on <a href='#define-attack-roll'>attack rolls</a> until you or an ally rolls a <a href='#define-action-roll'>Failure with Fear</a>.</p>" },
{ label: "Frenzy", name: "frenzy", domain: "Blade", level: 8, type: "Ability", recall: 3, pages: ["Page 330", "DH Core 119/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, you can go into a <em>Frenzy</em> until there are no more adversaries within sight.</p><p>While <em>Frenzied</em>, you can't use <a href='#define-armor'>Armor Slots</a>, and you gain a +10 bonus to your <a href='#define-damage-roll'>damage rolls</a> and a +8 bonus to your Severe <a href='#define-hit-point'>damage threshold</a>.</p>" },
{ label: "Gore and Glory", name: "gore-and-glory", domain: "Blade", level: 9, type: "Ability", recall: 2, pages: ["Page 330", "DH Core 120/270"], effects: "<p>When you critically succeed on a <a href='#define-weapon'>weapon</a> attack, gain an additional <a href='#define-hope'>Hope</a> or clear an additional <a href='#define-stress'>Stress</a>.</p><p>Additionally, when you deal enough damage to defeat an enemy, gain a <a href='#define-hope'>Hope</a> or clear a <a href='#define-stress'>Stress</a>.</p>" },
{ label: "Reaper's Strike", name: "reapers-strike", domain: "Blade", level: 9, type: "Ability", recall: 3, pages: ["Page 330", "DH Core 121/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, <strong><a href='#define-hope'>spend a Hope</a></strong> to make an <a href='#define-attack-roll'>attack roll</a>. The GM tells you which targets within <a href='#define-range'>range</a> it would succeed against. Choose one of these targets and force them to mark 5 <a href='#define-hit-point'>Hit Points</a>.</p>" },
{ label: "Battle Monster", name: "battle-monster", domain: "Blade", level: 10, type: "Ability", recall: 0, pages: ["Page 330", "DH Core 122/270"], effects: "<p>When you make a successful attack against an <a href='#define-adversary'>adversary</a>, you can <strong><a href='#define-stress'>mark 4 Stress</a></strong> to force the target to mark a number of <a href='#define-hit-point'>Hit Points</a> equal to the number of <a href='#define-hit-point'>Hit Points</a> you currently have marked instead of rolling for damage.</p>" },
{ label: "Onslaught", name: "onslaught", domain: "Blade", level: 10, type: "Ability", recall: 3, pages: ["Page 330", "DH Core 123/270"], effects: "<p>When you successfully make an attack with your <a href='#define-weapon'>weapon</a>, you never deal damage beneath a target's Major <a href='#define-hit-point'>damage threshold</a> (the target always marks a minimum of 2 <a href='#define-hit-point'>Hit Points</a>).</p><p>Additionally, when a creature within your weapon's range deals damage to an ally with an attack that doesn't include you, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to force them to make a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(15)</strong>. On a failure, the target must mark a <a href='#define-hit-point'>Hit Point</a>.</p>" },
{ label: "Deft Maneuvers", name: "deft-maneuvers", domain: "Bone", level: 1, type: "Ability", recall: 0, pages: ["Page 331", "DH Core 124/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, mark a <a href='#define-stress'>Stress</a> to sprint anywhere within <a href='#define-range'>Far</a> range without making an <a href='#define-trait-roll'>Agility Roll</a> to get there.</p><p>If you end this movement within <a href='#define-range'>Melee</a> range of an <a href='#define-adversary'>adversary</a> and immediately make an attack against them, gain a +1 bonus to the <a href='#define-attack-roll'>attack roll</a>.</p>" },
{ label: "I See It Coming", name: "i-see-it-coming", domain: "Bone", level: 1, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 125/270", "Errata"], effects: "<p>When you're targeted by an attack made from beyond <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to roll a <strong>d4</strong> and gain a bonus to your <a href='#define-evasion'>Evasion</a> equal to the result against the attack.</p>" },
{ label: "Untouchable", name: "untouchable", domain: "Bone", level: 1, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 126/270"], effects: "<p>Gain a bonus to your <a href='#define-evasion'>Evasion</a> equal to half your <a href='#define-agility'>Agility</a>.</p>" },
{ label: "Ferocity", name: "ferocity", domain: "Bone", level: 2, type: "Ability", recall: 2, pages: ["Page 331", "DH Core 127/270"], effects: "<p>When you cause an <a href='#define-adversary'>adversary</a> to mark 1 or more <a href='#define-hit-point'>Hit Points</a>, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to increase your <a href='#define-evasion'>Evasion</a> by the number of <a href='#define-hit-point'>Hit Points</a> they marked. This bonus lasts until after the next attack made against you.</p>" },
{ label: "Strategic Approach", name: "strategic-approach", domain: "Bone", level: 2, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 128/270"], effects: "<p>After a <a href='#define-downtime'>long rest</a>, place a number of tokens equal to your <a href='#define-knowledge'>Knowledge</a> on this card (minimum 1). The first time you move within <a href='#define-range'>Close</a> range of an <a href='#define-adversary'>adversary</a> and make an attack against them, you can spend one token to choose one of the following options:</p><ul class='og-list-disc'><li>You make the attack with <a href='#define-advantage'>advantage</a>.</li><li>You clear a <a href='#define-stress'>Stress</a> on an ally within <a href='#define-range'>Melee</a> range of the <a href='#define-adversary'>adversary</a>.</li><li>You add a <strong>d8</strong> to your <a href='#define-damage-roll'>damage roll</a>.</li></ul><p>When you take a <a href='#define-downtime'>long rest</a>, clear all unspent tokens.</p>" },
{ label: "Brace", name: "brace", domain: "Bone", level: 3, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 129/270"], effects: "<p>When you mark an <a href='#define-armor'>Armor Slot</a> to reduce incoming damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to mark an additional Armor Slot.</p>" },
{ label: "Tactician", name: "tactician", domain: "Bone", level: 3, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 130/270"], effects: "<p>When you <a href='#define-hope'>Help an Ally</a>, they can <strong><a href='#define-hope'>spend a Hope</a></strong> to add one of your <a href='#define-experience'>Experiences</a> to their roll alongside your <a href='#define-advantage'>advantage</a> die. When making a <a href='#define-tag-team-roll'>Tag Team Roll</a>, you can roll a <strong>d20</strong> as your <a href='#define-action-roll'>Hope Die</a>.</p>" },
{ label: "Boost", name: "boost", domain: "Bone", level: 4, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 131/270"], effects: "<p><a href='#define-stress'><strong>Mark a Stress</strong></a> to boost off a willing ally within <a href='#define-range'>Close</a> range, fling yourself into the air, and perform an aerial attack against a target within <a href='#define-range'>Far</a> range. You have <a href='#define-advantage'>advantage</a> on the attack, add a <strong>d10</strong> to the <a href='#define-damage-roll'>damage roll</a>, and end your move within <a href='#define-range'>Melee</a> range of the target.</p>" },
{ label: "Redirect", name: "redirect", domain: "Bone", level: 4, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 132/270"], effects: "<p>When an attack made against you from beyond <a href='#define-range'>Melee</a> range fails, roll a number of <strong>d6s</strong> equal to your <a href='#define-damage-roll'>Proficiency</a>. If any roll a 6, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to redirect the attack to damage an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Very Close</a> range instead.</p>" },
{ label: "Know Thy Enemy", name: "know-thy-enemy", domain: "Bone", level: 5, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 133/270"], effects: "<p>When observing a creature, you can make an <strong><a href='#define-trait-roll'>Instinct Roll</a></strong> against them. On a success, <strong><a href='#define-hope'>spend a Hope</a></strong> and ask the GM for one set of information about the target from the following options:</p><ul class='og-list-disc'><li>Their unmarked <a href='#define-hit-point'>Hit Points</a> and <a href='#define-stress'>Stress</a>.</li><li>Their <a href='#define-difficulty'>Difficulty</a> and <a href='#define-hit-point'>damage thresholds</a>.</li><li>Their tactics and standard attack damage dice.</li><li>Their features and <a href='#define-experience'>Experiences</a>.</li></ul><p>Additionally on a success, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to remove a <a href='#define-fear'>Fear</a> from the GM's Fear Pool.</p>" },
{ label: "Signature Move", name: "signature-move", domain: "Bone", level: 5, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 134/270"], effects: "<p>Name and describe your signature combat move. Once per <a href='#define-downtime'>rest</a>, when you perform this signature move as part of an <a href='#define-action'>action</a> you're taking, you can roll a <strong>d20</strong> as your <a href='#define-action-roll'>Hope Die</a>. On a success, clear a <a href='#define-stress'>Stress</a>.</p>" },
{ label: "Rapid Riposte", name: "rapid-riposte", domain: "Bone", level: 6, type: "Ability", recall: 0, pages: ["Page 331", "DH Core 135/270"], effects: "<p>When an attack made against you from within <a href='#define-range'>Melee</a> range fails, you can <strong><a href='#define-stress'>mark a Stress</a></strong> and seize the opportunity to deal the <a href='#define-weapon'>weapon</a> damage of one of your active weapons to the attacker.</p>" },
{ label: "Recovery", name: "recovery", domain: "Bone", level: 6, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 136/270"], effects: "<p>During a <a href='#define-downtime'>short rest</a>, you can choose a <a href='#define-downtime'>long rest</a> <a href='#define-downtime-move'>downtime move</a> instead. You can <strong><a href='#define-hope'>spend a Hope</a></strong> to let an ally do the same.</p>" },
{ label: "Bone-Touched", name: "bone-touched", domain: "Bone", level: 7, type: "Ability", recall: 2, pages: ["Page 331", "DH Core 137/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-bone'>Bone</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>+1 bonus to <a href='#define-agility'>Agility</a></li><li>Once per <a href='#define-downtime'>rest</a>, you can <strong><a href='#define-hope'>spend 3 Hope</a></strong> to cause an attack that succeeded against you to fail instead.</li></ul>" },
{ label: "Cruel Precision", name: "cruel-precision", domain: "Bone", level: 7, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 138/270"], effects: "<p>When you make a successful attack with a <a href='#define-weapon'>weapon</a>, gain a bonus to your <a href='#define-damage-roll'>damage roll</a> equal to either your <a href='#define-finesse'>Finesse</a> or <a href='#define-agility'>Agility</a>.</p>" },
{ label: "Breaking Blow", name: "breaking-blow", domain: "Bone", level: 8, type: "Ability", recall: 3, pages: ["Page 331", "DH Core 139/270"], effects: "<p>When you make a successful attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to make the next successful attack against that same target deal an extra <strong>2d12</strong> damage.</p>" },
{ label: "Wrangle", name: "wrangle", domain: "Bone", level: 8, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 140/270"], effects: "<p>Make an <strong><a href='#define-trait-roll'>Agility Roll</a></strong> against all targets within <a href='#define-range'>Close</a> range. <strong><a href='#define-hope'>Spend a Hope</a></strong> to move targets you succeed against, and any willing allies within <a href='#define-range'>Close</a> range, to another point within <a href='#define-range'>Close</a> range.</p>" },
{ label: "On the Brink", name: "on-the-brink", domain: "Bone", level: 9, type: "Ability", recall: 1, pages: ["Page 331", "DH Core 141/270"], effects: "<p>When you have 2 or fewer <a href='#define-hit-point'>Hit Points</a> unmarked, you don't take <a href='#define-hit-point'>Minor</a> damage.</p>" },
{ label: "Splintering Strike", name: "splintering-strike", domain: "Bone", level: 9, type: "Ability", recall: 3, pages: ["Page 332", "DH Core 142/270", "Errata"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> and make an <a href='#define-attack-roll'>attack</a> against all adversaries within your weapon's <a href='#define-range'>range</a>. Once per <a href='#define-downtime'>long rest</a>, on a success against any targets, roll your weapon's <a href='#define-damage-roll'>damage</a> and distribute that damage however you wish between the targets you succeeded against. Before you deal damage to each target, roll an additional <a href='#define-damage-roll'>damage die</a> and add its result to the damage you deal to them.</p>" },
{ label: "Deathrun", name: "deathrun", domain: "Bone", level: 10, type: "Ability", recall: 1, pages: ["Page 332", "DH Core 143/270"], effects: "<p><strong><a href='#define-hope'>Spend 3 Hope</a></strong> to run a straight path through the battlefield to a point within <a href='#define-range'>Far</a> range, making an attack against all adversaries within your <a href='#define-weapon'>weapon</a>'s range along that path. Choose the order in which you deal damage to the targets you succeeded against. For the first, roll your weapon damage with a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a>. Then remove a die from your <a href='#define-damage-roll'>damage roll</a> and deal the remaining damage to the next target. Continue to remove a die for each subsequent target until you have no more damage dice or adversaries.</p><p>You can't target the same <a href='#define-adversary'>adversary</a> more than once per attack.</p>" },
{ label: "Swift Step", name: "swift-step", domain: "Bone", level: 10, type: "Ability", recall: 2, pages: ["Page 332", "DH Core 144/270"], effects: "<p>When an attack made against you fails, clear a <a href='#define-stress'>Stress</a>. If you can't clear a <a href='#define-stress'>Stress</a>, gain a <a href='#define-hope'>Hope</a>.</p>" },
{ label: "Book of Ava", name: "book-of-ava", domain: "Codex", level: 1, type: "Grimoire", recall: 2, pages: ["Page 332", "DH Core 145/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Power Push:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Melee</a> range.</p><p>On a success, they're knocked back to <a href='#define-range'>Far</a> range and take <strong>d10+2</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.</p></li><li><p><strong><em>Tava's Armor:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> to give a target you can touch a +1 bonus to their <a href='#define-armor'>Armor Score</a> until their next <a href='#define-downtime'>rest</a> or you cast Tava's Armor again.</p></li><li><p><strong><em>Ice Spike:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (12)</a></strong> to summon a large ice spike within <a href='#define-range'>Far</a> range. If you use it as a <a href='#define-weapon'>weapon</a>, make the <a href='#define-spellcast-roll'>Spellcast Roll</a> against the target's <a href='#define-difficulty'>Difficulty</a> instead. On a success, deal <strong>d6</strong> <a href='#define-damage-type'>physical damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.</p></li></ul>" },
{ label: "Book of Illiat", name: "book-of-illiat", domain: "Codex", level: 1, type: "Grimoire", recall: 2, pages: ["Page 332", "DH Core 146/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Slumber:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Very Close</a> range. On a success, they're <em>Asleep</em> until they take damage or the GM spends a <a href='#define-fear'>Fear</a> on their turn to clear this <a href='#define-condition'>condition</a>.</p></li><li><p><strong><em>Arcane Barrage:</em></strong> Once per <a href='#define-downtime'>rest</a>, <strong><a href='#define-hope'>spend any number of Hope</a></strong> and shoot magical projectiles that strike a target of your choice within <a href='#define-range'>Close</a> range. Roll a number of <strong>d6s</strong> equal to the <a href='#define-hope'>Hope</a> spent and deal that much <a href='#define-damage-type'>magic damage</a> to the target.</p></li><li><p><strong><em>Telepathy:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> to open a line of mental communication with one target you can see. This connection lasts until your next <a href='#define-downtime'>rest</a> or you cast Telepathy again.</p></li></ul>" },
{ label: "Book of Tyfar", name: "book-of-tyfar", domain: "Codex", level: 1, type: "Grimoire", recall: 2, pages: ["Page 332", "DH Core 147/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Wild Flame:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against up to three adversaries within <a href='#define-range'>Melee</a> range. Targets you succeed against take <strong>2d6</strong> <a href='#define-damage-type'>magic damage</a> and must mark a <a href='#define-stress'>Stress</a> as flames erupt from your hand.</p></li><li><p><strong><em>Magic Hand:</em></strong> You conjure a magical hand with the same size and strength as your own within <a href='#define-range'>Far</a> range.</p></li><li><p><strong><em>Mysterious Mist:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong> to cast a <a href='#define-temporary'>temporary</a> thick fog that gathers in a stationary area within <a href='#define-range'>Very Close</a> range. The fog heavily obscures this area and everything in it.</p></li></ul>" },
{ label: "Book of Sitil", name: "book-of-sitil", domain: "Codex", level: 2, type: "Grimoire", recall: 2, pages: ["Page 332", "DH Core 148/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Adjust Appearance:</em></strong> You magically shift your appearance and clothing to avoid recognition.</p></li><li><p><strong><em>Parallela:</em></strong> <strong><a href='#define-hope'>Spend 2 Hope</a></strong> to cast this spell on yourself or an ally within <a href='#define-range'>Close</a> range. The next time the target makes an attack, they can hit an additional target within <a href='#define-range'>range</a> that their <a href='#define-attack-roll'>attack roll</a> would succeed against. You can only hold this spell on one creature at a time.</p></li><li><p><strong><em>Illusion:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (14)</a></strong>. On a success, create a <a href='#define-temporary'>temporary</a> visual illusion no larger than you within <a href='#define-range'>Close</a> range that lasts for as long as you look at it. It holds up to scrutiny until an observer is within <a href='#define-range'>Melee</a> range.</p></li></ul>" },
{ label: "Book of Vagras", name: "book-of-vagras", domain: "Codex", level: 2, type: "Grimoire", recall: 2, pages: ["Page 332", "DH Core 149/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Runic Lock:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong> on an object you're touching that can close (such as a lock, chest, or box). Once per <a href='#define-downtime'>rest</a> on a success, you can lock the object so it can only be opened by creatures of your choice. Someone with access to magic and an hour of time to study the spell can break it.</p></li><li><p><strong><em>Arcane Door:</em></strong> When you have no adversaries within <a href='#define-range'>Melee</a> range, make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. On a success, <strong><a href='#define-hope'>spend a Hope</a></strong> to create a portal from where you are to a point within <a href='#define-range'>Far</a> range you can see. It closes once a creature has passed through it.</p></li><li><p><strong><em>Reveal:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong>. If there is anything magically hidden within <a href='#define-range'>Close</a> range, it is revealed.</p></li></ul>" },
{ label: "Book of Korvax", name: "book-of-korvax", domain: "Codex", level: 3, type: "Grimoire", recall: 2, pages: ["Page 332", "DH Core 150/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Levitation:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> to <a href='#define-condition'>temporarily</a> lift a target you can see up into the air and move them within <a href='#define-range'>Close</a> range of their original position.</p></li><li><p><strong><em>Recant:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> to force a target within <a href='#define-range'>Melee</a> range to make a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(15)</strong>. On a failure, they forget the last minute of your conversation.</p></li><li><p><strong><em>Rune Circle:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to create a <a href='#define-temporary'>temporary</a> magical circle on the ground where you stand. All adversaries within <a href='#define-range'>Melee</a> range, or who enter <a href='#define-range'>Melee</a> range, take <strong>2d12+4</strong> <a href='#define-damage-type'>magic damage</a> and are knocked back to <a href='#define-range'>Very Close</a> range.</p></li></ul>" },
{ label: "Book of Norai", name: "book-of-norai", domain: "Codex", level: 3, type: "Grimoire", recall: 2, pages: ["Page 333", "DH Core 151/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Mystic Tether:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range. On a success, they're <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Restrained</em></a> and must mark a <a href='#define-stress'>Stress</a>. If you target a flying creature, this spell grounds and <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Restrains</em></a> them.</p></li><li><p><strong><em>Fireball:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Very Far</a> range. On a success, hurl a sphere of fire toward them that explodes on impact. The target and all creatures within <a href='#define-range'>Very Close</a> range of them must make a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(13)</strong>. Targets who fail take <strong>d20+5</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>. Targets who succeed take half damage.</p></li></ul>" },
{ label: "Book of Exota", name: "book-of-exota", domain: "Codex", level: 4, type: "Grimoire", recall: 3, pages: ["Page 333", "DH Core 152/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Repudiate:</em></strong> You can interrupt a magical effect taking place. Make a <a href='#define-reaction-roll'>reaction roll</a> using your <a href='#define-subclass'>Spellcast trait</a>. Once per <a href='#define-downtime'>rest</a> on a success, the effect stops and any consequences are avoided.</p></li><li><p><strong><em>Create Construct:</em></strong> <strong><a href='#define-hope'>Spend a Hope</a></strong> to choose a group of objects around you and create an animated construct from them that obeys basic commands. Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> to command them to take <a href='#define-action'>action</a>. When necessary, they share your <a href='#define-evasion'>Evasion</a> and traits and their attacks deal <strong>2d10+3</strong> <a href='#define-damage-type'>physical damage</a>. You can only maintain one construct at a time, and they fall apart when they take any amount of damage.</p></li></ul>" },
{ label: "Book of Grynn", name: "book-of-grynn", domain: "Codex", level: 4, type: "Grimoire", recall: 2, pages: ["Page 333", "DH Core 153/270", "Errata"], effects: "<ul class='list-unstyled'><li><p><strong><em>Arcane Deflection:</em></strong> Once per <a href='#define-downtime'>long rest</a>, <strong><a href='#define-hope'>spend a Hope</a></strong> to negate the damage of an attack targeting you or an ally within <a href='#define-range'>Very Close</a> range.</p></li><li><p><strong><em>Time Lock:</em></strong> Target an object within <a href='#define-range'>Far</a> range. That object stops in time and space exactly where it is until your next <a href='#define-downtime'>rest</a>. If a creature tries to move it, make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against them to maintain this spell.</p></li><li><p><strong><em>Wall of Flame:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. On a success, create a <a href='#define-temporary'>temporary</a> wall of magical flame between two points within <a href='#define-range'>Far</a> range. All creatures in its path must choose a side to be on, and anything that subsequently passes through the wall takes <strong>4d10+3</strong> <a href='#define-damage-type'>magic damage</a>.</p></li></ul>" },
{ label: "Manifest Wall", name: "manifest-wall", domain: "Codex", level: 5, type: "Spell", recall: 2, pages: ["Page 333", "DH Core 154/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. Once per <a href='#define-downtime'>rest</a> on a success, <strong><a href='#define-hope'>spend a Hope</a></strong> to create a <a href='#define-temporary'>temporary</a> magical wall between two points within <a href='#define-range'>Far</a> range. It can be up to 50 feet (15 m) high and form at any angle. Creatures or objects in its path are shunted to a side of your choice. The wall stays up until your next <a href='#define-downtime'>rest</a> or you cast Manifest Wall again.</p>" },
{ label: "Teleport", name: "teleport", domain: "Codex", level: 5, type: "Spell", recall: 2, pages: ["Page 333", "DH Core 155/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, you can instantly teleport yourself and any number of willing targets within <a href='#define-range'>Close</a> range to a place you've been before. Choose one of the following options, then make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (16)</a></strong>:</p><ul class='og-list-disc'><li>If you know the place very well, gain a +3 bonus.</li><li>If you've visited the place frequently, gain a +1 bonus.</li><li>If you've visited the place infrequently, gain no <a href='#define-procedure'>modifier</a>.</li><li>If you've only been there once, gain a &minus;2 penalty.</li></ul><p>On a success, you appear where you were intending to go.</p><p>On a failure, you appear off course, with the range of failure determining how far off course.</p>" },
{ label: "Banish", name: "banish", domain: "Codex", level: 6, type: "Spell", recall: 0, pages: ["Page 333", "DH Core 156/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Close</a> range. On a success, roll a number of <strong>d20s</strong> equal to your <a href='#define-subclass'>Spellcast trait</a>. The target must make a <a href='#define-reaction-roll'>reaction roll</a> with a <a href='#define-difficulty'>Difficulty</a> equal to your highest result. On a success, the target must mark a <a href='#define-stress'>Stress</a> but isn't banished. Once per <a href='#define-downtime'>rest</a> on a failure, they are banished from this realm.</p><p>When the PCs <a href='#define-action-roll'>roll with Fear</a>, the <a href='#define-difficulty'>Difficulty</a> gains a &minus;1 penalty and the target makes another <a href='#define-reaction-roll'>reaction roll</a>. On a success, they return from banishment.</p>" },
{ label: "Sigil of Retribution", name: "sigil-of-retribution", domain: "Codex", level: 6, type: "Spell", recall: 2, pages: ["Page 333", "DH Core 157/270"], effects: "<p>Mark an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Close</a> range with a sigil of retribution. The GM gains a <a href='#define-fear'>Fear</a>. When the marked adversary deals damage to you or your allies, place a <strong>d8</strong> on this card. You can hold a number of <strong>d8s</strong> equal to your <a href='#define-level'>level</a>. When you successfully attack the marked adversary, roll the dice on this card and add the total to your <a href='#define-damage-roll'>damage roll</a>, then clear the dice. This effect ends when the marked adversary is defeated or you cast Sigil of Retribution again.</p>" },
{ label: "Book of Homet", name: "book-of-homet", domain: "Codex", level: 7, type: "Grimoire", recall: 0, pages: ["Page 333", "DH Core 158/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Pass Through:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. Once per <a href='#define-downtime'>rest</a> on a success, you and all creatures touching you can pass through a wall or door within <a href='#define-range'>Close</a> range. The effect ends once everyone is on the other side.</p></li><li><p><strong><em>Plane Gate:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (14)</a></strong>. Once per <a href='#define-downtime'>long rest</a> on a success, open a gateway to a location in another dimension or plane of existence you've been to before. This gateway lasts until your next <a href='#define-downtime'>rest</a>.</p></li></ul>" },
{ label: "Codex-Touched", name: "codex-touched", domain: "Codex", level: 7, type: "Ability", recall: 2, pages: ["Page 333", "DH Core 159/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-codex'>Codex</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>You can <strong><a href='#define-stress'>mark a Stress</a></strong> to add your <a href='#define-damage-roll'>Proficiency</a> to a <a href='#define-spellcast-roll'>Spellcast Roll</a>.</li><li>Once per <a href='#define-downtime'>rest</a>, replace this card with any card from your <a href='#define-loadout'>vault</a> without paying its <a href='#define-domain-card'>Recall Cost</a>.</li></ul>" },
{ label: "Book of Vyola", name: "book-of-vyola", domain: "Codex", level: 8, type: "Grimoire", recall: 2, pages: ["Page 333", "DH Core 160/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Memory Delve:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range. On a success, peer into the target's mind and ask the GM a question. The GM describes any memories the target has pertaining to the answer.</p></li><li><p><strong><em>Shared Clarity:</em></strong> Once per <a href='#define-downtime'>long rest</a>, <strong><a href='#define-hope'>spend a Hope</a></strong> to choose two willing creatures. When one of them would mark <a href='#define-stress'>Stress</a>, they can choose between the two of them who marks it. This spell lasts until their next <a href='#define-downtime'>rest</a>.</p></li></ul>" },
{ label: "Safe Haven", name: "safe-haven", domain: "Codex", level: 8, type: "Spell", recall: 3, pages: ["Page 334", "DH Core 161/270"], effects: "<p>When you have a few minutes of calm to focus, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to summon your <strong>Safe Haven</strong>, a large interdimensional home where you and your allies can take shelter. When you do, a magical door appears somewhere within <a href='#define-range'>Close</a> range. Only creatures of your choice can enter. Once inside, you can make the entrance invisible. You and anyone else inside can always exit. Once you leave, the doorway must be summoned again.</p><p>When you take a <a href='#define-downtime'>rest</a> within your own Safe Haven, you can choose an additional <a href='#define-downtime-move'>downtime move</a>.</p>" },
{ label: "Book of Ronin", name: "book-of-ronin", domain: "Codex", level: 9, type: "Grimoire", recall: 4, pages: ["Page 334", "DH Core 162/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Transform:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. On a success, transform into an inanimate object no larger than twice your normal size. You can remain in this shape until you take damage.</p></li><li><p><strong><em>Eternal Enervation:</em></strong> Once per <a href='#define-downtime'>long rest</a>, make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Close</a> range. On a success, they become permanently <a href='#define-condition'><em>Vulnerable</em></a>. They can't clear this <a href='#define-condition'>condition</a> by any means.</p></li></ul>" },
{ label: "Disintegration Wave", name: "disintegration-wave", domain: "Codex", level: 9, type: "Spell", recall: 4, pages: ["Page 334", "DH Core 163/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (18)</a></strong>. Once per <a href='#define-downtime'>long rest</a> on a success, the GM tells you which adversaries within <a href='#define-range'>Far</a> range have a <a href='#define-difficulty'>Difficulty</a> of 18 or lower. <strong><a href='#define-stress'>Mark a Stress</a></strong> for each one you wish to hit with this spell. They are killed and can't come back to life by any means.</p>" },
{ label: "Book of Yarrow", name: "book-of-yarrow", domain: "Codex", level: 10, type: "Grimoire", recall: 2, pages: ["Page 334", "DH Core 164/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Timejammer:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (18)</a></strong>. On a success, time <a href='#define-condition'>temporarily</a> slows to a halt for everyone within <a href='#define-range'>Far</a> range except for you. It resumes the next time you make an <a href='#define-action-roll'>action roll</a> that targets another creature.</p></li><li><p><strong><em>Magic Immunity:</em></strong> <strong><a href='#define-hope'>Spend 5 Hope</a></strong> to become <a href='#define-damage-type'>immune</a> to <a href='#define-damage-type'>magic damage</a> until your next <a href='#define-downtime'>rest</a>.</p></li></ul>" },
{ label: "Transcendent Union", name: "transcendent-union", domain: "Codex", level: 10, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 165/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, <strong><a href='#define-hope'>spend 5 Hope</a></strong> to cast this spell on two or more willing creatures. Until your next <a href='#define-downtime'>rest</a>, when a creature connected by this union would mark <a href='#define-stress'>Stress</a> or <a href='#define-hit-point'>Hit Points</a>, the connected creatures can choose who marks it.</p>" },
{ label: "Deft Deceiver", name: "deft-deceiver", domain: "Grace", level: 1, type: "Ability", recall: 0, pages: ["Page 334", "DH Core 166/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to gain <a href='#define-advantage'>advantage</a> on a roll to deceive or trick someone into believing a lie you tell them.</p>" },
{ label: "Enrapture", name: "enrapture", domain: "Grace", level: 1, type: "Spell", recall: 0, pages: ["Page 334", "DH Core 167/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Close</a> range. On a success, they become <a href='#define-condition'>temporarily</a> <em>Enraptured</em>. While <em>Enraptured</em>, a target's attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. Once per <a href='#define-downtime'>rest</a> on a success, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to force the <em>Enraptured</em> target to mark a <a href='#define-stress'>Stress</a> as well.</p>" },
{ label: "Inspirational Words", name: "inspirational-words", domain: "Grace", level: 1, type: "Ability", recall: 1, pages: ["Page 334", "DH Core 168/270"], effects: "<p>Your speech is imbued with power. After a <a href='#define-downtime'>long rest</a>, place a number of tokens on this card equal to your <a href='#define-presence'>Presence</a>. When you speak with an ally, you can spend a token from this card to give them one benefit from the following options:</p><ul class='og-list-disc'><li>Your ally clears a <a href='#define-stress'>Stress</a>.</li><li>Your ally clears a <a href='#define-hit-point'>Hit Point</a>.</li><li>Your ally gains a <a href='#define-hope'>Hope</a>.</li></ul><p>When you take a <a href='#define-downtime'>long rest</a>, clear all unspent tokens.</p>" },
{ label: "Tell No Lies", name: "tell-no-lies", domain: "Grace", level: 2, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 169/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Very Close</a> range. On a success, they can't lie to you while they remain within <a href='#define-range'>Close</a> range, but they are not compelled to speak. If you ask them a question and they refuse to answer, they must mark a <a href='#define-stress'>Stress</a> and the effect ends. The target is typically unaware this spell has been cast on them until it causes them to utter the truth.</p>" },
{ label: "Troublemaker", name: "troublemaker", domain: "Grace", level: 2, type: "Ability", recall: 2, pages: ["Page 334", "DH Core 170/270"], effects: "<p>When you taunt or provoke a target within <a href='#define-range'>Far</a> range, make a <a href='#define-trait-roll'>Presence Roll</a> against them. Once per <a href='#define-downtime'>rest</a> on a success, roll a number of <strong>d4s</strong> equal to your <a href='#define-damage-roll'>Proficiency</a>. The target must mark <a href='#define-stress'>Stress</a> equal to the highest result rolled.</p>" },
{ label: "Hypnotic Shimmer", name: "hypnotic-shimmer", domain: "Grace", level: 3, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 171/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all adversaries in front of you within <a href='#define-range'>Close</a> range. Once per <a href='#define-downtime'>rest</a> on a success, create an illusion of flashing colors and lights that <a href='#define-condition'>temporarily</a> <em>Stuns</em> targets you succeed against and forces them to mark a <a href='#define-stress'>Stress</a>. While <em>Stunned</em>, they can't use reactions and can't take any other <a href='#define-action'>actions</a> until they clear this <a href='#define-condition'>condition</a>.</p>" },
{ label: "Invisibility", name: "invisibility", domain: "Grace", level: 3, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 172/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (10)</a></strong>. On a success, mark a <a href='#define-stress'>Stress</a> and choose yourself or an ally within <a href='#define-range'>Melee</a> range to become <em>Invisible</em>. An <em>Invisible</em> creature can't be seen except through magical means and <a href='#define-attack-roll'>attack rolls</a> against them are made with <a href='#define-advantage'>disadvantage</a>. Place a number of tokens on this card equal to your <a href='#define-subclass'>Spellcast trait</a>. When the <em>Invisible</em> creature takes an action, spend a token from this card. After the action that spends the last token is resolved, the effect ends.</p><p>You can only hold Invisibility on one creature at a time.</p>" },
{ label: "Soothing Speech", name: "soothing-speech", domain: "Grace", level: 4, type: "Ability", recall: 1, pages: ["Page 334", "DH Core 173/270"], effects: "<p>During a <a href='#define-downtime'>short rest</a>, when you take the time to comfort another character while using the Tend to Wounds <a href='#define-downtime-move'>downtime move</a> on them, clear an additional <a href='#define-hit-point'>Hit Point</a> on that character. When you do, you also clear 2 <a href='#define-hit-point'>Hit Points</a>.</p>" },
{ label: "Through Your Eyes", name: "through-your-eyes", domain: "Grace", level: 4, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 174/270"], effects: "<p>Choose a target within <a href='#define-range'>Very Far</a> range. You can see through their eyes and hear through their ears. You can transition between using your own senses or the target's freely until you cast another spell or until your next <a href='#define-downtime'>rest</a>.</p>" },
{ label: "Thought Delver", name: "tought-delver", domain: "Grace", level: 5, type: "Spell", recall: 2, pages: ["Page 334", "DH Core 175/270"], effects: "<p>You can peek into the minds of others. <strong><a href='#define-hope'>Spend a Hope</a></strong> to read the vague surface thoughts of a target within <a href='#define-range'>Far</a> range. Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against the target to delve for deeper, more hidden thoughts.</p><p>On a <a href='#define-action-roll'>roll with Fear</a>, the target might, at the GM's discretion, become aware that you're reading their thoughts.</p>" },
{ label: "Words of Discord", name: "words-of-discord", domain: "Grace", level: 5, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 176/270"], effects: "<p>Whisper words of discord to an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Melee</a> range and make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. On a success, the target must mark a <a href='#define-stress'>Stress</a> and make an attack against another adversary instead of against you or your allies.</p><p>Once this attack is over, the target realizes what happened. The next time you cast Words of Discord on them, gain a &minus;5 penalty to the <a href='#define-spellcast-roll'>Spellcast Roll</a>.</p>" },
{ label: "Never Upstaged", name: "never-upstaged", domain: "Grace", level: 6, type: "Ability", recall: 2, pages: ["Page 334", "DH Core 177/270"], effects: "<p>When you mark 1 or more <a href='#define-hit-point'>Hit Points</a> from an attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to place a number of tokens equal to the number of <a href='#define-hit-point'>Hit Points</a> you marked on this card. On your next successful attack, gain a +5 bonus to your <a href='#define-damage-roll'>damage roll</a> for each token on this card, then clear all tokens.</p>" },
{ label: "Share the Burden", name: "share-the-burden", domain: "Grace", level: 6, type: "Spell", recall: 0, pages: ["Page 334", "DH Core 178/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, take on the <a href='#define-stress'>Stress</a> from a willing creature within <a href='#define-range'>Melee</a> range. The target describes what intimate knowledge or emotions telepathically leak from their mind in this moment between you. Transfer any number of their marked <a href='#define-stress'>Stress</a> to you, then gain a <a href='#define-hope'>Hope</a> for each <a href='#define-stress'>Stress</a> transferred.</p>" },
{ label: "Endless Charisma", name: "endless-charisma", domain: "Grace", level: 7, type: "Ability", recall: 1, pages: ["Page 334", "DH Core 179/270"], effects: "<p>After you make an <a href='#define-action-roll'>action roll</a> to persuade, lie, or garner favor, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to <a href='#define-reroll'>reroll</a> the <a href='#define-action-roll'>Hope or Fear Die</a>.</p>" },
{ label: "Grace-Touched", name: "grace-touched", domain: "Grace", level: 7, type: "Ability", recall: 2, pages: ["Page 334", "DH Core 180/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-grace'>Grace</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>You can <strong><a href='#define-armor'>mark an Armor Slot</a></strong> instead of marking a <a href='#define-stress'>Stress</a>.</li><li>When you would force a target to mark a number of <a href='#define-hit-point'>Hit Points</a>, you can choose instead to force them to mark that number of <a href='#define-stress'>Stress</a>.</li></ul>" },
{ label: "Astral Projection", name: "astral-projection", domain: "Grace", level: 8, type: "Spell", recall: 0, pages: ["Page 334", "DH Core 181/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, mark a <a href='#define-stress'>Stress</a> to create a projected copy of yourself that can appear anywhere you've been before.</p><p>You can see and hear through the projection as though it were you and affect the world as though you were there. A creature investigating the projection can tell it's of magical origin. This effect lasts until your next <a href='#define-downtime'>rest</a> or your projection takes any damage.</p>" },
{ label: "Mass Enrapture", name: "mass-enrapture", domain: "Grace", level: 8, type: "Spell", recall: 3, pages: ["Page 334", "DH Core 182/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all targets within <a href='#define-range'>Far</a> range. Targets you succeed against become <a href='#define-condition'>temporarily</a> <em>Enraptured</em>. While <em>Enraptured</em>, a target's attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. <strong><a href='#define-stress'>Mark a Stress</a></strong> to force all <em>Enraptured</em> targets to mark a <a href='#define-stress'>Stress</a>, ending this spell.</p>" },
{ label: "Copycat", name: "copycat", domain: "Grace", level: 9, type: "Spell", recall: 3, pages: ["Page 334", "DH Core 183/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, this card can mimic the features of another <a href='#define-domain-card'>domain card</a> of level 8 or lower in another player's <a href='#define-loadout'>loadout</a>. <strong><a href='#define-hope'>Spend Hope equal to half the card's level</a></strong> to gain access to the feature. It lasts until your next <a href='#define-downtime'>rest</a> or they place the card in their <a href='#define-loadout'>vault</a>.</p>" },
{ label: "Master of the Craft", name: "master-of-the-craft", domain: "Grace", level: 9, type: "Ability", recall: 0, pages: ["Page 334", "DH Core 184/270"], effects: "<p>Gain a permanent +2 bonus to two of your <a href='#define-experience'>Experiences</a> or a permanent +3 bonus to one of your <a href='#define-experience'>Experiences</a>. Then place this card in your <a href='#define-loadout'>vault</a> permanently.</p>" },
{ label: "Encore", name: "encore", domain: "Grace", level: 10, type: "Spell", recall: 1, pages: ["Page 334", "DH Core 185/270"], effects: "<p>When an ally within <a href='#define-range'>Close</a> range deals damage to an <a href='#define-adversary'>adversary</a>, you can make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against that same target. On a success, you deal the same damage to the target that your ally dealt. If your <a href='#define-spellcast-roll'>Spellcast Roll</a> <a href='#define-action-roll'>succeeds with Fear</a>, place this card in your <a href='#define-loadout'>vault</a>.</p>" },
{ label: "Notorious", name: "notorious", domain: "Grace", level: 10, type: "Ability", recall: 0, pages: ["Page 334", "DH Core 186/270"], effects: "<p>People know who you are and what you've done, and they treat you differently because of it. When you leverage your notoriety to get what you want, you can <strong><a href='#define-stress'>mark a Stress</a></strong> before you roll to gain a +10 bonus to the result. Your food and drinks are always free wherever you go, and everything else you buy is reduced in price by one bag of gold (to a minimum of one handful). This card doesn't count against your <a href='#define-loadout'>loadout</a>'s <a href='#define-domain-card'>domain card</a> maximum of 5 and can't be placed in your <a href='#define-loadout'>vault</a>.</p>" },
{ label: "Pick and Pull", name: "pick-and-pull", domain: "Midnight", level: 1, type: "Ability", recall: 0, pages: ["Page 336", "DH Core 187/270"], effects: "<p>You have <a href='#define-advantage'>advantage</a> on <a href='#define-action-roll'>action rolls</a> to pick nonmagical locks, disarm nonmagical traps, or steal items from a target (either through stealth or by force).</p>" },
{ label: "Rain of Blades", name: "rain-of-blades", domain: "Midnight", level: 1, type: "Spell", recall: 1, pages: ["Page 336", "DH Core 188/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> and conjure throwing blades that strike out at all targets within <a href='#define-range'>Very Close</a> range. Targets you succeed against take <strong>d8+2</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.</p><p>If a target you hit is <a href='#define-condition'><em>Vulnerable</em></a>, they take an extra <strong>1d8</strong> damage.</p>" },
{ label: "Uncanny Disguise", name: "uncanny-disguise", domain: "Midnight", level: 1, type: "Spell", recall: 0, pages: ["Page 336", "DH Core 189/270"], effects: "<p>When you have a few minutes to prepare, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to don the facade of any humanoid you can picture clearly in your mind. While disguised, you have <a href='#define-advantage'>advantage</a> on <a href='#define-trait-roll'>Presence Rolls</a> to avoid scrutiny.</p><p>Place a number of tokens equal to your <a href='#define-subclass'>Spellcast trait</a> on this card. When you take an action while disguised, spend a token from this card. After the action that spends the last token is resolved, the disguise drops.</p>" },
{ label: "Midnight Spirit", name: "midnight-spirit", domain: "Midnight", level: 2, type: "Spell", recall: 1, pages: ["Page 336", "DH Core 190/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to summon a humanoid-sized spirit that can move or carry things for you until your next <a href='#define-downtime'>rest</a>.</p><p>You can also send it to attack an <a href='#define-adversary'>adversary</a>. When you do, make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Very Far</a> range. On a success, the spirit moves into <a href='#define-range'>Melee</a> range with that target. Roll a number of <strong>d6s</strong> equal to your <a href='#define-subclass'>Spellcast trait</a> and deal that much <a href='#define-damage-type'>magic damage</a> to the target. The spirit then dissipates. You can only have one spirit at a time.</p>" },
{ label: "Shadowbind", name: "shadowbind", domain: "Midnight", level: 2, type: "Spell", recall: 0, pages: ["Page 336", "DH Core 191/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all adversaries within <a href='#define-range'>Very Close</a> range. Targets you succeed against are <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Restrained</em></a> as their shadow binds them in place." },
{ label: "Chokehold", name: "chokehold", domain: "Midnight", level: 3, type: "Ability", recall: 1, pages: ["Page 336", "DH Core 192/270"], effects: "<p>When you position yourself behind a creature who's about your size, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to pull them into a chokehold, making them <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</p><p>When a creature attacks a target who is <a href='#define-condition'><em>Vulnerable</em></a> in this way, they deal an extra <strong>2d6</strong> damage.</p>" },
{ label: "Veil of Night", name: "veil-of-night", domain: "Midnight", level: 3, type: "Spell", recall: 1, pages: ["Page 336", "DH Core 193/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. On a success, you can create a <a href='#define-temporary'>temporary</a> curtain of darkness between two points within <a href='#define-range'>Far</a> range. Only you can see through this darkness. You're considered <a href='#define-condition'><em>Hidden</em></a> to adversaries on the other side of the veil, and you have <a href='#define-advantage'>advantage</a> on attacks you make through the darkness. The veil remains until you cast another spell.</p>" },
{ label: "Glyph of Nightfall", name: "glyph-of-nightfall", domain: "Midnight", level: 4, type: "Spell", recall: 1, pages: ["Page 336", "DH Core 194/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Very Close</a> range. On a success, <strong><a href='#define-hope'>spend a Hope</a></strong> to conjure a dark glyph upon their body that exposes their weak points, <a href='#define-condition'>temporarily</a> reducing the target's <a href='#define-difficulty'>Difficulty</a> by a value equal to your <a href='#define-knowledge'>Knowledge</a> (minimum 1).</p>" },
{ label: "Stealth Expertise", name: "stealth-expertise", domain: "Midnight", level: 4, type: "Ability", recall: 0, pages: ["Page 336", "DH Core 195/270"], effects: "<p>When you <a href='#define-action-roll'>roll with Fear</a> while attempting to move unnoticed through a dangerous area, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to <a href='#define-action-roll'>Roll with Hope</a> instead.</p><p>If an ally within <a href='#define-range'>Close</a> range is also attempting to move unnoticed and <a href='#define-action-roll'>rolls with Fear</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to change their result to a <a href='#define-action-roll'>Roll with Hope</a>.</p>" },
{ label: "Hush", name: "hush", domain: "Midnight", level: 5, type: "Spell", recall: 1, pages: ["Page 336", "DH Core 196/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Close</a> range. On a success, <strong><a href='#define-hope'>spend a Hope</a></strong> to conjure suppressive magic around the target that encompasses everything within <a href='#define-range'>Very Close</a> range of them and follows them as they move.</p><p>The target and anything within the area is <em>Silenced</em> until the GM spends a <a href='#define-fear'>Fear</a> on their turn to clear this <a href='#define-condition'>condition</a>, you cast Hush again, or you take <a href='#define-hit-point'>Major</a> damage. While <em>Silenced</em>, they can't make noise and can't cast spells.</p>" },
{ label: "Phantom Retreat", name: "phantom-retreat", domain: "Midnight", level: 5, type: "Spell", recall: 2, pages: ["Page 336", "DH Core 197/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to activate Phantom Retreat where you're currently standing. <strong><a href='#define-hope'>Spend another Hope</a></strong> at any time before your next <a href='#define-downtime'>rest</a> to disappear from where you are and reappear where you were standing when you activated Phantom Retreat. This spell ends after you reappear.</p>" },
{ label: "Dark Whispers", name: "dark-whispers", domain: "Midnight", level: 6, type: "Spell", recall: 0, pages: ["Page 336", "DH Core 198/270"], effects: "<p>You can speak into the mind of any person with whom you've made physical contact. Once you've opened a channel with them, they can speak back into your mind. Additionally, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against them. On a success, you can ask the GM one of the following questions and receive an answer:</p><ul class='og-list-disc'><li>Where are they?</li><li>What are they doing?</li><li>What are they afraid of?</li><li>What do they cherish most in the world?</li></ul>" },
{ label: "Mass Disguise", name: "mass-disguise", domain: "Midnight", level: 6, type: "Spell", recall: 0, pages: ["Page 336", "DH Core 199/270"], effects: "<p>When you have a few minutes of silence to focus, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to change the appearance of all willing creatures within <a href='#define-range'>Close</a> range. Their new forms must share a general body structure and size, and can be somebody or something you've seen before or entirely fabricated. A disguised creature has <a href='#define-advantage'>advantage</a> on <a href='#define-trait-roll'>Presences Roll</a> to avoid scrutiny.</p><p>Activate a <a href='#define-countdown'>Countdown (8)</a>. It ticks down as a consequence the GM chooses. When it triggers, the disguise drops.</p>" },
{ label: "Midnight-Touched", name: "midnight-touched", domain: "Midnight", level: 7, type: "Ability", recall: 2, pages: ["Page 337", "DH Core 200/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-midnight'>Midnight</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>Once per <a href='#define-downtime'>rest</a>, when you have 0 <a href='#define-hope'>Hope</a> and the GM would gain a <a href='#define-fear'>Fear</a>, you can gain a <a href='#define-hope'>Hope</a> instead.</li><li>When you make a successful attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to add the result of your <a href='#define-action-roll'>Fear Die</a> to your <a href='#define-damage-roll'>damage roll</a>.</li></ul>" },
{ label: "Vanishing Dodge", name: "vanishing-dodge", domain: "Midnight", level: 7, type: "Spell", recall: 1, pages: ["Page 337", "DH Core 201/270"], effects: "<p>When an attack made against you that would deal <a href='#define-damage-type'>physical damage</a> fails, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to envelop yourself in shadow, becoming <a href='#define-condition'><em>Hidden</em></a> and teleporting to a point within <a href='#define-range'>Close</a> range of the attacker. You remain <a href='#define-condition'><em>Hidden</em></a> until the next time you make an <a href='#define-action-roll'>action roll</a>.</p>" },
{ label: "Shadowhunter", name: "shadowhunter", domain: "Midnight", level: 8, type: "Ability", recall: 2, pages: ["Page 337", "DH Core 202/270"], effects: "<p>Your prowess is enhanced under the cover of shadow. While you're shrouded in low light or darkness, you gain a +1 bonus to your <a href='#define-evasion'>Evasion</a> and make <a href='#define-attack-roll'>attack rolls</a> with <a href='#define-advantage'>advantage</a>.</p>" },
{ label: "Spellcharge", name: "spellcharge", domain: "Midnight", level: 8, type: "Spell", recall: 1, pages: ["Page 337", "DH Core 203/270"], effects: "<p>When you take <a href='#define-damage-type'>magic damage</a>, place tokens equal to the number of <a href='#define-hit-point'>Hit Points</a> you marked on this card. You can store a number of tokens equal to your <a href='#define-subclass'>Spellcast trait</a>.</p><p>When you make a successful attack against a target, you can spend any number of tokens to add a <strong>d6</strong> for each token spent to your <a href='#define-damage-roll'>damage roll</a>.</p>" },
{ label: "Night Terror", name: "night-terror", domain: "Midnight", level: 9, type: "Spell", recall: 2, pages: ["Page 337", "DH Core 204/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, choose any targets within <a href='#define-range'>Very Close</a> range to perceive you as a nightmarish horror. The targets must succeed on a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(16)</strong> or become <a href='#define-condition'>temporarily</a> <em>Horrified</em>. While <em>Horrified</em>, they're <a href='#define-condition'><em>Vulnerable</em></a>. Steal a number of <a href='#define-fear'>Fear</a> from the GM equal to the number of targets that are <em>Horrified</em> (up to the number of <a href='#define-fear'>Fear</a> in the GM's pool). Roll a number of <strong>d6s</strong> equal to the number of stolen <a href='#define-fear'>Fear</a> and deal the total damage to each <em>Horrified</em> target. Discard the stolen <a href='#define-fear'>Fear</a>.</p>" },
{ label: "Twilight Toll", name: "twilight-toll", domain: "Midnight", level: 9, type: "Ability", recall: 1, pages: ["Page 337", "DH Core 205/270"], effects: "<p>Choose a target within <a href='#define-range'>Far</a> range. When you succeed on an <a href='#define-action-roll'>action roll</a> against them that doesn't result in making a <a href='#define-damage-roll'>damage roll</a>, place a token on this card. When you deal damage to this target, spend any number of tokens to add a <strong>d12</strong> for each token spent to your <a href='#define-damage-roll'>damage roll</a>. You can only hold Twilight Toll on one creature at a time.</p><p>When you choose a new target or take a <a href='#define-downtime'>rest</a>, clear all unspent tokens.</p>" },
{ label: "Eclipse", name: "eclipse", domain: "Midnight", level: 10, type: "Spell", recall: 2, pages: ["Page 337", "DH Core 206/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (16)</a></strong>. Once per <a href='#define-downtime'>long rest</a> on a success, plunge the entire area within <a href='#define-range'>Far</a> range into complete darkness only you and your allies can see through. Attack rolls have <a href='#define-advantage'>disadvantage</a> when targeting you or an ally within this shadow. Additionally, when you or an ally succeeds with <a href='#define-hope'>Hope</a> against an <a href='#define-adversary'>adversary</a> within this shadow, the target must mark a <a href='#define-stress'>Stress</a>.</p><p>This spell lasts until the GM spends a <a href='#define-fear'>Fear</a> on their turn to clear this effect or you take <a href='#define-hit-point'>Severe</a> damage.</p>" },
{ label: "Specter Of The Dark", name: "specter-of-the-dark", domain: "Midnight", level: 10, type: "Spell", recall: 1, pages: ["Page 337", "DH Core 207/270"], effects: "<p><a href='#define-stress'><strong>Mark a Stress</strong></a> to become Spectral until you make an <a href='#define-action-roll'>action roll</a> targeting another creature. While Spectral, you're <a href='#define-damage-type'>immune</a> to <a href='#define-damage-type'>physical damage</a> and can float and pass through solid objects. Other creatures can still see you while you're in this form.</p>" },
{ label: "Gifted Tracker", name: "gifted-tracker", domain: "Sage", level: 1, type: "Ability", recall: 0, pages: ["Page 338", "DH Core 208/270"], effects: "<p>When you're tracking a specific creature or group of creatures based on signs of their passage, you can <strong><a href='#define-hope'>spend any number of Hope</a></strong> and ask the GM that many questions from the following list.</p><ul class='og-list-disc'><li>What direction did they go?</li><li>How long ago did they pass through?</li><li>What were they doing in this location?</li><li>How many of them were here?</li></ul><p>When you encounter creatures you've tracked in this way, gain a +1 bonus to your <a href='#define-evasion'>Evasion</a> against them.</p>" },
{ label: "Nature's Tongue", name: "natures-tongue", domain: "Sage", level: 1, type: "Ability", recall: 0, pages: ["Page 338", "DH Core 209/270"], effects: "<p>You can speak the language of the natural world. When you want to speak to the plants and animals around you, make an <strong><a href='#define-trait-roll'>Instinct Roll (12)</a></strong>. On a success, they'll give you the information they know. On a <a href='#define-action-roll'>roll with Fear</a>, their knowledge might be limited or come at a cost.</p><p>Additionally, before you make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> while within a natural environment, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to gain a +2 bonus to the roll.</p>" },
{ label: "Vicious Entangle", name: "vicious-entangle", domain: "Sage", level: 1, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 210/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range. On a success, roots and vines reach out from the ground, dealing <strong>1d8+1</strong> <a href='#define-damage-type'>physical damage</a> and <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Restraining</em></a> the target. Additionally on a success, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Restrain</em></a> another <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Very Close</a> range of your target.</p>" },
{ label: "Conjure Swarm", name: "conjure-swarm", domain: "Sage", level: 2, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 211/270"], effects: "<ul class='list-unstyled'><li><p><strong><em>Tekaira Armored Beetles:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to conjure armored beetles that encircle you. When you next take damage, reduce the severity by one threshold. You can <strong><a href='#define-hope'>spend a Hope</a></strong> to keep the beetles conjured after taking damage.</p></li><li><p><strong><em>Fire Flies:</em></strong> Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all adversaries within <a href='#define-range'>Close</a> range. <strong><a href='#define-hope'>Spend a Hope</a></strong> to deal <strong>2d8+3</strong> <a href='#define-damage-type'>magic damage</a> to targets you succeeded against.</p></li></ul>" },
{ label: "Natural Familiar", name: "natural-familiar", domain: "Sage", level: 2, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 212/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to summon a small nature spirit or forest critter to your side until your next <a href='#define-downtime'>rest</a>, you cast Natural Familiar again, or the familiar is targeted by an attack. If you <strong><a href='#define-hope'>spend an additional Hope</a></strong>, you can summon a familiar that flies. You can communicate with them, make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> to command them to perform simple tasks, and mark a <a href='#define-stress'>Stress</a> to see through their eyes.</p><p>When you deal damage to an <a href='#define-adversary'>adversary</a> within <a href='#define-range'>Melee</a> range of your familiar, you add a <strong>d6</strong> to your <a href='#define-damage-roll'>damage roll</a>.</p>" },
{ label: "Corrosive Projectile", name: "corrosive-projectile", domain: "Sage", level: 3, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 213/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range. On a success, deal <strong>d6+4</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>. Additionally, <strong><a href='#define-stress'>mark 2 or more Stress</a></strong> to make them permanently <em>Corroded</em>. While a target is <em>Corroded</em>, they gain a &minus;1 penalty to their <a href='#define-difficulty'>Difficulty</a> for every 2 <a href='#define-stress'>Stress</a> you spent. This <a href='#define-condition'>condition</a> can <a href='#define-temporary'>stack</a>.</p>" },
{ label: "Towering Stalk", name: "towering-stalk", domain: "Sage", level: 3, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 214/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, you can conjure a thick, twisting stalk within <a href='#define-range'>Close</a> range that can be easily climbed. Its height can grow up to <a href='#define-range'>Far</a> range.</p><p><a href='#define-stress'><strong>Mark a Stress</strong></a> to use this spell as an attack. Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against an <a href='#define-adversary'>adversary</a> or group of adversaries within <a href='#define-range'>Close</a> range. The erupting stalk lifts targets you succeed against into the air and drops them, dealing <strong>d8</strong> <a href='#define-damage-type'>physical damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.</p>" },
{ label: "Death Grip", name: "death-grip", domain: "Sage", level: 4, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 215/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Close</a> range and choose one of the following options:</p><ul class='og-list-disc'><li>You pull the target into <a href='#define-range'>Melee</a> range or pull yourself into <a href='#define-range'>Melee</a> range of them.</li><li>You constrict the target and force them to mark 2 <a href='#define-stress'>Stress</a>.</li><li>All adversaries between you and the target must succeed on a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(13)</strong> or be hit by vines, taking <strong>3d6+2</strong> <a href='#define-damage-type'>physical damage</a>.</li></ul><p>On a success, vines reach out from your hands, causing the chosen effect and <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Restraining</em></a> the target.</p>" },
{ label: "Healing Field", name: "healing-field", domain: "Sage", level: 4, type: "Spell", recall: 2, pages: ["Page 338", "DH Core 216/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, you can conjure a field of healing plants around you. Everywhere within <a href='#define-range'>Close</a> range of you bursts to life with vibrant nature, allowing you and all allies in the area to clear a <a href='#define-hit-point'>Hit Point</a>.</p><p><strong><a href='#define-hope'>Spend 2 Hope</a></strong> to allow you and all allies to clear 2 <a href='#define-hit-point'>Hit Points</a> instead.</p>" },
{ label: "Thorn Skin", name: "thorn-skin", domain: "Sage", level: 5, type: "Spell", recall: 1, pages: ["Page 338", "DH Core 217/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, <strong><a href='#define-hope'>spend a Hope</a></strong> to sprout thorns all over your body. When you do, place a number of tokens equal to your <a href='#define-subclass'>Spellcast trait</a> on this card. When you take damage, you can spend any number of tokens to roll that number of <strong>d6s</strong>. Add the results together and reduce the incoming damage by that amount. If you're within <a href='#define-range'>Melee</a> range of the attacker, deal that amount of damage back to them.</p><p>When you take a <a href='#define-downtime'>rest</a>, clear all unspent tokens.</p>" },
{ label: "Wild Fortress", name: "wild-fortress", domain: "Sage", level: 5, type: "Spell", recall: 1, pages: ["Page 339", "DH Core 218/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. On a success, <strong><a href='#define-hope'>spend 2 Hope</a></strong> to grow a natural barricade in the shape of a dome that you and one ally can take cover within. While inside the dome, a creature can't be targeted by attacks and can't make attacks. Attacks made against the dome automatically succeed. The dome has the following <a href='#define-hit-point'>damage thresholds</a> and lasts until it marks 3 <a href='#define-hit-point'>Hit Points</a>. Place tokens on this card to represent marking <a href='#define-hit-point'>Hit Points</a>.</p><ul class='og-list-inline'><li><strong>Thresholds:</strong> 15/30</li></ul>" },
{ label: "Conjured Steeds", name: "conjured-steeds", domain: "Sage", level: 6, type: "Spell", recall: 0, pages: ["Page 339", "DH Core 219/270"], effects: "<p><strong><a href='#define-hope'>Spend any number of Hope</a></strong> to conjure that many magical steeds (such as horses, camels, or elephants) that you and your allies can ride until your next <a href='#define-downtime'>long rest</a> or the steeds take any damage. The steeds double your land speed while traveling and, when in danger, allow you to move within <a href='#define-range'>Far</a> range without having to roll. Creatures riding a steed gain a &minus;2 penalty to <a href='#define-attack-roll'>attack rolls</a> and a +2 bonus to <a href='#define-damage-roll'>damage rolls</a>.</p>" },
{ label: "Forager", name: "forager", domain: "Sage", level: 6, type: "Ability", recall: 1, pages: ["Page 339", "DH Core 220/270"], effects: "<p>As an additional <a href='#define-downtime'>downtime</a> move you can choose, roll a <strong>d6</strong> to see what you forage. Work with the GM to describe it and add it to your inventory as a consumable. Your party can carry up to five foraged consumables at a time.</p><ol><li>A unique food (Clear 2 <a href='#define-stress'>Stress</a>)</li><li>A beautiful relic (Gain 2 <a href='#define-hope'>Hope</a>)</li><li>An arcane rune (+2 to a <a href='#define-spellcast-roll'>Spellcast Roll</a>)</li><li>A healing vial (Clear 2 <a href='#define-hit-point'>Hit Points</a>)</li><li>A luck charm (Reroll any die)</li><li>Choose one of the options above.</li></ol>" },
{ label: "Sage-Touched", name: "sage-touched", domain: "Sage", level: 7, type: "Ability", recall: 2, pages: ["Page 339", "DH Core 221/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-sage'>Sage</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>While you're in a natural environment, you gain a +2 bonus to your <a href='#define-spellcast-roll'>Spellcast Rolls</a>.</li><li>Once per <a href='#define-downtime'>rest</a>, you can double your <a href='#define-agility'>Agility</a> or <a href='#define-instinct'>Instinct</a> when making a roll that uses that trait. You must choose to do this before you roll.</li></ul>" },
{ label: "Wild Surge", name: "wild-surge", domain: "Sage", level: 7, type: "Spell", recall: 2, pages: ["Page 339", "DH Core 222/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, mark a <a href='#define-stress'>Stress</a> to channel the natural world around you and enhance yourself. Describe how your appearance changes, then place a <strong>d6</strong> on this card with the 1 value facing up.</p><p>While the Wild Surge Die is active, you add its value to every <a href='#define-action-roll'>action roll</a> you make. After you add its value to a roll, increase the Wild Surge Die's value by one. When the die's value would exceed 6 or you take a <a href='#define-downtime'>rest</a>, this form drops and you must <strong><a href='#define-stress'>mark an additional Stress</a></strong>.</p>" },
{ label: "Forest Sprites", name: "forest-sprites", domain: "Sage", level: 8, type: "Spell", recall: 2, pages: ["Page 339", "DH Core 223/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. On a success, <strong><a href='#define-hope'>spend any number of Hope</a></strong> to create an equal number of small forest sprites who appear at points you choose within <a href='#define-range'>Far</a> range, providing the following benefits:</p><ul class='og-list-disc'><li>Your allies gain a +3 bonus to <a href='#define-attack-roll'>attack rolls</a> against adversaries within <a href='#define-range'>Melee</a> range of a sprite.</li><li>An ally who marks an <a href='#define-armor'>Armor Slot</a> while within <a href='#define-range'>Melee</a> range of a sprite can mark an additional Armor Slot.</li></ul><p>A sprite vanishes after granting a benefit or taking any damage.</p>" },
{ label: "Rejuvenation Barrier", name: "rejuvenation-barrier", domain: "Sage", level: 8, type: "Spell", recall: 1, pages: ["Page 339", "DH Core 224/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong>. Once per <a href='#define-downtime'>rest</a> on a success, create a <a href='#define-temporary'>temporary</a> barrier of protective energy around you at <a href='#define-range'>Very Close</a> range. You and all allies within the barrier when this spell is cast clear <strong>1d4</strong> <a href='#define-hit-point'>Hit Points</a>. While the barrier is up, you and all allies within have <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a> from outside the barrier.</p><p>When you move, the barrier follows you.</p>" },
{ label: "Fane of the Wilds", name: "fane-of-the-wilds", domain: "Sage", level: 9, type: "Ability", recall: 2, pages: ["Page 339", "DH Core 225/270"], effects: "<p>After a <a href='#define-downtime'>long rest</a>, place a number of tokens equal to the number of <a href='#define-sage'>Sage</a> <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout and vault</a> on this card.</p><p>When you would make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong>, you can spend any number of tokens after the roll to gain a +1 bonus for each token spent.</p><p>When you critically succeed on a <a href='#define-spellcast-roll'>Spellcast Roll</a> for a Sage domain spell, gain a token.</p><p>When you take a <a href='#define-downtime'>long rest</a>, clear all unspent tokens.</p>" },
{ label: "Plant Dominion", name: "plant-dominion", domain: "Sage", level: 9, type: "Spell", recall: 1, pages: ["Page 339", "DH Core 226/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (18)</a></strong>. Once per <a href='#define-downtime'>long rest</a> on a success, you reshape the natural world, changing the surrounding plant life anywhere within <a href='#define-range'>Far</a> range of you. For example, you can grow trees instantly, clear a path through dense vines, or create a wall of roots.</p>" },
{ label: "Force of Nature", name: "force-of-nature", domain: "Sage", level: 10, type: "Spell", recall: 2, pages: ["Page 339", "DH Core 227/270"], effects: "<p><a href='#define-stress'><strong>Mark a Stress</strong></a> to transform into a hulking nature spirit, gaining the following benefits:</p><ul class='og-list-disc'><li>When you succeed on an attack or <a href='#define-spellcast-roll'>Spellcast Roll</a>, gain a +10 bonus to the <a href='#define-damage-roll'>damage roll</a>.</li><li>When you deal enough damage to defeat a creature within <a href='#define-range'>Close</a> range, you absorb them and clear an <a href='#define-armor'>Armor Slot</a>.</li><li>You can't be <a href='#define-condition'><em>Restrained</em></a>.</li></ul><p>Before you make an <a href='#define-action-roll'>action roll</a>, you must <strong><a href='#define-hope'>spend a Hope</a></strong>. If you can't, you revert to your normal form.</p>" },
{ label: "Tempest", name: "tempest", domain: "Sage", level: 10, type: "Spell", recall: 2, pages: ["Page 339", "DH Core 228/270"], effects: "<p>Choose one of the following tempests and make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against all targets within <a href='#define-range'>Far</a> range. Targets you succeed against experience its effects until the GM spends a <a href='#define-fear'>Fear</a> on their turn to end this spell.</p><ul class='og-list-disc'><li><strong><em>Blizzard:</em></strong> Deal <strong>2d20+8</strong> <a href='#define-damage-type'>magic damage</a> and targets are <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</li><li><strong><em>Hurricane:</em></strong> Deal <strong>3d10+10</strong> <a href='#define-damage-type'>magic damage</a> and choose a direction the wind is blowing. Targets can't move against the wind.</li><li><strong><em>Sandstorm:</em></strong> Deal <strong>5d6+9</strong> <a href='#define-damage-type'>magic damage</a>. Attacks made from beyond <a href='#define-range'>Melee</a> range have <a href='#define-advantage'>disadvantage</a>.</li></ul>" },
{ label: "Bolt Beacon", name: "bolt-beacon", domain: "Splendor", level: 1, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 229/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> against a target within <a href='#define-range'>Far</a> range. On a success, <strong><a href='#define-hope'>spend a Hope</a></strong> to send a bolt of shimmering light toward them, dealing <strong>d8+2</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>. The target becomes <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a> and glows brightly until this <a href='#define-condition'>condition</a> is cleared.</p>" },
{ label: "Mending Touch", name: "mending-touch", domain: "Splendor", level: 1, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 230/270"], effects: "<p>You lay your hands upon a creature and channel healing magic to close their wounds. When you can take a few minutes to focus on the target you're helping, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to clear a <a href='#define-hit-point'>Hit Point</a> or a <a href='#define-stress'>Stress</a> on them.</p><p>Once per <a href='#define-downtime'>long rest</a>, when you spend this healing time learning something new about them or revealing something about yourself, you can clear 2 <a href='#define-hit-point'>Hit Points</a> or 2 <a href='#define-stress'>Stress</a> on them instead.</p>" },
{ label: "Reassurance", name: "reassurance", domain: "Splendor", level: 1, type: "Ability", recall: 0, pages: ["Page 340", "DH Core 231/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, after an ally attempts an <a href='#define-action-roll'>action roll</a> but before the consequences take place, you can offer assistance or words of support. When you do, your ally can <a href='#define-reroll'>reroll</a> their dice.</p>" },
{ label: "Final Words", name: "final-words", domain: "Splendor", level: 2, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 232/270"], effects: "<p>You can infuse a corpse with a moment of life to speak with it. Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong>. On a success with <a href='#define-hope'>Hope</a>, the corpse answers up to three questions. On a <a href='#define-action-roll'>success with Fear</a>, the corpse answers one question. The corpse answers truthfully, but it can't impart information it didn't know in life. On a failure, or once the corpse has finished answering your questions, the body turns to dust.</p>" },
{ label: "Healing Hands", name: "healing-hands", domain: "Splendor", level: 2, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 233/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (13)</a></strong> and target a creature other than yourself within <a href='#define-range'>Melee</a> range. On a success, mark a <a href='#define-stress'>Stress</a> to clear 2 <a href='#define-hit-point'>Hit Points</a> or 2 <a href='#define-stress'>Stress</a> on the target. On a failure, mark a <a href='#define-stress'>Stress</a> to clear a <a href='#define-hit-point'>Hit Point</a> or a <a href='#define-stress'>Stress</a> on the target. You can't heal the same target again until your next <a href='#define-downtime'>long rest</a>.</p>" },
{ label: "Second Wind", name: "second-wind", domain: "Splendor", level: 3, type: "Ability", recall: 2, pages: ["Page 340", "DH Core 234/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, when you succeed on an attack against an <a href='#define-adversary'>adversary</a>, you can clear 3 <a href='#define-stress'>Stress</a> or a <a href='#define-hit-point'>Hit Point</a>. On a success with <a href='#define-hope'>Hope</a>, you also clear 3 <a href='#define-stress'>Stress</a> or a <a href='#define-hit-point'>Hit Point</a> on an ally within <a href='#define-range'>Close</a> range of you.</p>" },
{ label: "Voice of Reason", name: "voice-of-reason", domain: "Splendor", level: 3, type: "Ability", recall: 1, pages: ["Page 340", "DH Core 235/270"], effects: "<p>You speak with an unmatched power and authority. You have <a href='#define-advantage'>advantage</a> on <a href='#define-action-roll'>action rolls</a> to de-escalate violent situations or convince someone to follow your lead.</p><p>Additionally, you're emboldened in moments of duress. When all of your <a href='#define-stress'>Stress</a> slots are marked, you gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> for <a href='#define-damage-roll'>damage rolls</a>.</p>" },
{ label: "Divination", name: "divination", domain: "Splendor", level: 4, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 236/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, <strong><a href='#define-hope'>spend 3 Hope</a></strong> to reach out to the forces beyond and ask one 'yes or no' question about an event, person, place, or situation in the near future. For a moment, the present falls away and you see the answer before you.</p>" },
{ label: "Life Ward", name: "life-ward", domain: "Splendor", level: 4, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 237/270"], effects: "<p><strong><a href='#define-hope'>Spend 3 Hope</a></strong> and choose an ally within <a href='#define-range'>Close</a> range. They are marked with a glowing sigil of protection. When this ally would make a <a href='#define-death'>death move</a>, they clear a <a href='#define-hit-point'>Hit Point</a> instead.</p><p>This effect ends when it saves the target from a <a href='#define-death'>death move</a>, you cast Life Ward on another target, or you take a <a href='#define-downtime'>long rest</a>.</p>" },
{ label: "Shape Material", name: "shape-material", domain: "Splendor", level: 5, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 238/270"], effects: "<p><strong><a href='#define-hope'>Spend a Hope</a></strong> to shape a section of natural material you're touching (such as stone, ice, or wood) to suit your purpose. The area of the material can be no larger than you. For example, you can form a rudimentary tool or create a door.</p><p>You can only affect the material within <a href='#define-range'>Close</a> range of where you're touching it." },
{ label: "Smite", name: "smite", domain: "Splendor", level: 5, type: "Spell", recall: 2, pages: ["Page 340", "DH Core 239/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, <strong><a href='#define-hope'>spend 3 Hope</a></strong> to charge your powerful smite. When you next successfully attack with a <a href='#define-weapon'>weapon</a>, double the result of your <a href='#define-damage-roll'>damage roll</a>. This attack deals <a href='#define-damage-type'>magic damage</a> regardless of the weapon's <a href='#define-damage-type'>damage type</a>.</p>" },
{ label: "Restoration", name: "restoration", domain: "Splendor", level: 6, type: "Spell", recall: 2, pages: ["Page 340", "DH Core 240/270"], effects: "<p>After a <a href='#define-downtime'>long rest</a>, place a number of tokens equal to your <a href='#define-subclass'>Spellcast trait</a> on this card. Touch a creature and spend any number of tokens to clear 2 <a href='#define-hit-point'>Hit Points</a> or 2 <a href='#define-stress'>Stress</a> for each token spent.</p><p>You can also spend a token from this card when touching a creature to clear the <a href='#define-condition'><em>Vulnerable</em></a> <a href='#define-condition'>condition</a> or heal a physical or magical ailment (the GM might require additional tokens depending on the strength of the ailment). When you take a <a href='#define-downtime'>long rest</a>, clear all unspent tokens.</p>" },
{ label: "Zone of Protection", name: "zone-of-protection", domain: "Splendor", level: 6, type: "Spell", recall: 2, pages: ["Page 340", "DH Core 241/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (16)</a></strong>. Once per <a href='#define-downtime'>long rest</a> on a success, choose a point within <a href='#define-range'>Far</a> range and create a visible zone of protection there for all allies within <a href='#define-range'>Very Close</a> range of that point. When you do, place a <strong>d6</strong> on this card with the 1 value facing up. When an ally in this zone takes damage, they reduce it by the die's value. You then increase the die's value by one. When the die's value would exceed 6, this effect ends.</p>" },
{ label: "Healing Strike", name: "healing-strike", domain: "Splendor", level: 7, type: "Spell", recall: 1, pages: ["Page 340", "DH Core 242/270"], effects: "<p>When you deal damage to an <a href='#define-adversary'>adversary</a>, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to clear a <a href='#define-hit-point'>Hit Point</a> on an ally within <a href='#define-range'>Close</a> range.</p>" },
{ label: "Splendor-Touched", name: "splendor-touched", domain: "Splendor", level: 7, type: "Ability", recall: 2, pages: ["Page 340", "DH Core 243/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-splendor'>Splendor</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>+3 bonus to your Severe <a href='#define-hit-point'>damage threshold</a></li><li>Once per <a href='#define-downtime'>long rest</a>, when incoming damage would require you to mark a number of <a href='#define-hit-point'>Hit Points</a>, you can choose to mark that much <a href='#define-stress'>Stress</a> or spend that much <a href='#define-hope'>Hope</a> instead.</li></ul>" },
{ label: "Shield Aura", name: "shield-aura", domain: "Splendor", level: 8, type: "Spell", recall: 2, pages: ["Page 341", "DH Core 244/270"], effects: "<p><a href='#define-stress'><strong>Mark a Stress</strong></a> to cast a protective aura on a target within <a href='#define-range'>Very Close</a> range. When the target marks an <a href='#define-armor'>Armor Slot</a>, they reduce the severity of the attack by an additional threshold. If this spell causes a creature who would be damaged to instead mark no <a href='#define-hit-point'>Hit Points</a>, the effect ends.</p><p>You can only hold Shield Aura on one creature at a time.</p>" },
{ label: "Stunning Sunlight", name: "stunning-sunlight", domain: "Splendor", level: 8, type: "Spell", recall: 2, pages: ["Page 341", "DH Core 245/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> to unleash powerful rays of burning sunlight against all adversaries in front of you within <a href='#define-range'>Far</a> range. On a success, <strong><a href='#define-hope'>spend any number of Hope</a></strong> and force that many targets you succeeded against to make a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(14)</strong>. Targets who succeed take <strong>3d20+3</strong> <a href='#define-damage-type'>magic damage</a>. Targets who fail take <strong>4d20+5</strong> <a href='#define-damage-type'>magic damage</a> and are <a href='#define-condition'>temporarily</a> <em>Stunned</em>. While <em>Stunned</em>, they can't use reactions and can't take any other actions until they clear this <a href='#define-condition'>condition</a>.</p>" },
{ label: "Overwhelming Aura", name: "overwhelming-aura", domain: "Splendor", level: 9, type: "Spell", recall: 2, pages: ["Page 341", "DH Core 246/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (15)</a></strong> to magically empower your aura. On a success, <strong><a href='#define-hope'>spend 2 Hope</a></strong> to make your <a href='#define-presence'>Presence</a> equal to your <a href='#define-subclass'>Spellcast trait</a> until your next <a href='#define-downtime'>long rest</a>.</p><p>While this spell is active, an <a href='#define-adversary'>adversary</a> must mark a <a href='#define-stress'>Stress</a> when they target you with an attack.</p>" },
{ label: "Salvation Beam", name: "salvation-beam", domain: "Splendor", level: 9, type: "Spell", recall: 2, pages: ["Page 341", "DH Core 247/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (16)</a></strong>. On a success, <strong><a href='#define-stress'>mark any number of Stress</a></strong> to target a line of allies within <a href='#define-range'>Far</a> range. You can clear <a href='#define-hit-point'>Hit Points</a> on the targets equal to the number of <a href='#define-stress'>Stress</a> marked, divided among them however you'd like.</p>" },
{ label: "Invigoration", name: "invigoration", domain: "Splendor", level: 10, type: "Spell", recall: 3, pages: ["Page 341", "DH Core 248/270"], effects: "<p>When you or an ally within <a href='#define-range'>Close</a> range has used a feature that has an exhaustion limit (such as once per <a href='#define-downtime'>rest</a> or once per session), you can <strong><a href='#define-hope'>spend any number of Hope</a></strong> and roll that many <strong>d6s</strong>. If any roll a 6, the feature can be used again.</p>" },
{ label: "Resurrection", name: "resurrection", domain: "Splendor", level: 10, type: "Spell", recall: 2, pages: ["Page 341", "DH Core 249/270"], effects: "<p>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll (20)</a></strong>. On a success, restore one creature who has been dead no longer than 100 years to full strength. Then roll a <strong>d6</strong>. On a result of 5 or lower, place this card in your <a href='#define-loadout'>vault</a> permanently.</p><p>On a failure, you can't cast Resurrection again for a week.</p>" },
{ label: "Bare Bones", name: "bare-bones", domain: "Valor", level: 1, type: "Ability", recall: 0, pages: ["Page 341", "DH Core 250/270"], effects: "<p>When you choose not to equip armor, you have a base <a href='#define-armor'>Armor Score</a> of 3 + your <a href='#define-strength'>Strength</a> and use the following as your base <a href='#define-hit-point'>damage thresholds</a>:</p><ul class='og-list-disc'><li><strong><em>Tier 1:</em></strong> 9/19</li><li><strong><em>Tier 2:</em></strong> 11/24</li><li><strong><em>Tier 3:</em></strong> 13/31</li><li><strong><em>Tier 4:</em></strong> 15/38</li></ul>" },
{ label: "Forceful Push", name: "forceful-push", domain: "Valor", level: 1, type: "Ability", recall: 0, pages: ["Page 341", "DH Core 251/270"], effects: "<p>Make an attack with your primary <a href='#define-weapon'>weapon</a> against a target within <a href='#define-range'>Melee</a> range. On a success, you deal damage and knock them back to <a href='#define-range'>Close</a> range. On a success with <a href='#define-hope'>Hope</a>, add a <strong>d6</strong> to your <a href='#define-damage-roll'>damage roll</a>.</p><p>Additionally, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to make them <a href='#define-condition'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</p>" },
{ label: "I Am Your Shield", name: "i-am-your-shield", domain: "Valor", level: 1, type: "Ability", recall: 1, pages: ["Page 341", "DH Core 252/270"], effects: "<p>When an ally within <a href='#define-range'>Very Close</a> range would take damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to stand in the way and make yourself the target of the attack instead. When you take damage from this attack, you can mark any number of <a href='#define-armor'>Armor Slots</a>.</p>" },
{ label: "Body Basher", name: "body-basher", domain: "Valor", level: 2, type: "Ability", recall: 1, pages: ["Page 341", "DH Core 253/270"], effects: "<p>You use the full force of your body in a fight. On a successful attack using a <a href='#define-weapon'>weapon</a> with a <a href='#define-range'>Melee</a> range, gain a bonus to your <a href='#define-damage-roll'>damage roll</a> equal to your <a href='#define-strength'>Strength</a>.</p>" },
{ label: "Bold Presence", name: "bold-presence", domain: "Valor", level: 2, type: "Ability", recall: 0, pages: ["Page 341", "DH Core 254/270"], effects: "<p>When you make a <a href='#define-trait-roll'>Presence Roll</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to add your <a href='#define-strength'>Strength</a> to the roll.</p><p>Additionally, once per <a href='#define-downtime'>rest</a> when you would gain a <a href='#define-condition'>condition</a>, you can describe how your bold presence aids you in the situation and avoid gaining the <a href='#define-condition'>condition</a>.</p>" },
{ label: "Critical Inspiration", name: "critical-inspiration", domain: "Valor", level: 3, type: "Ability", recall: 1, pages: ["Page 341", "DH Core 255/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, when you critically succeed on an attack, all allies within <a href='#define-range'>Very Close</a> range can clear a <a href='#define-stress'>Stress</a> or gain a <a href='#define-hope'>Hope</a>.</p>" },
{ label: "Lean On Me", name: "lean-on-me", domain: "Valor", level: 3, type: "Ability", recall: 1, pages: ["Page 341", "DH Core 256/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, when you console or inspire an ally who failed an <a href='#define-action-roll'>action roll</a>, you can both clear 2 <a href='#define-stress'>Stress</a>.</p>" },
{ label: "Goad Them On", name: "goad-them-on", domain: "Valor", level: 4, type: "Ability", recall: 1, pages: ["Page 341", "DH Core 257/270"], effects: "<p>Describe how you taunt a target within <a href='#define-range'>Close</a> range, then make a <a href='#define-trait-roll'>Presence Roll</a> against them. On a success, the target must mark a <a href='#define-stress'>Stress</a>, and the next time the GM <a href='#define-spotlight'>spotlights</a> them, they must target you with an attack, which they make with <a href='#define-advantage'>disadvantage</a>.</p>" },
{ label: "Support Tank", name: "support-tank", domain: "Valor", level: 4, type: "Ability", recall: 2, pages: ["Page 342", "DH Core 258/270"], effects: "<p>When an ally within <a href='#define-range'>Close</a> range fails a roll, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to allow them to <a href='#define-reroll'>reroll</a> either their <a href='#define-hope'>Hope</a> or <a href='#define-action-roll'>Fear Die</a>.</p>" },
{ label: "Armorer", name: "armorer", domain: "Valor", level: 5, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 259/270"], effects: "<p>While you're wearing armor, gain a +1 bonus to your <a href='#define-armor'>Armor Score</a>.</p><p>During a <a href='#define-downtime'>rest</a>, when you choose to repair your armor as a <a href='#define-downtime-move'>downtime move</a>, your allies also clear an <a href='#define-armor'>Armor Slot</a>.</p>" },
{ label: "Rousing Strike", name: "rousing-strike", domain: "Valor", level: 5, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 260/270"], effects: "<p>Once per <a href='#define-downtime'>rest</a>, when you critically succeed on an attack, you and all allies who can see or hear you can clear a <a href='#define-hit-point'>Hit Point</a> or <strong>1d4</strong> <a href='#define-stress'>Stress</a>.</p>" },
{ label: "Inevitable", name: "inevitable", domain: "Valor", level: 6, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 261/270"], effects: "<p>When you fail an <a href='#define-action-roll'>action roll</a>, your next <a href='#define-action-roll'>action roll</a> has <a href='#define-advantage'>advantage</a>.</p>" },
{ label: "Rise Up", name: "rise-up", domain: "Valor", level: 6, type: "Ability", recall: 2, pages: ["Page 342", "DH Core 262/270"], effects: "<p>Gain a bonus to your Severe <a href='#define-hit-point'>threshold</a> equal to your <a href='#define-damage-roll'>Proficiency</a>.</p><p>When you mark 1 or more <a href='#define-hit-point'>Hit Points</a> from an attack, clear a <a href='#define-stress'>Stress</a>.</p>" },
{ label: "Shrug It Off", name: "shrug-it-off", domain: "Valor", level: 7, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 263/270"], effects: "<p>When you would take damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to reduce the severity of the damage by one threshold. When you do, roll a <strong>d6</strong>. On a result of 3 or lower, place this card in your <a href='#define-loadout'>vault</a>.</p>" },
{ label: "Valor-Touched", name: "valor-touched", domain: "Valor", level: 7, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 264/270"], effects: "<p>When 4 or more of the <a href='#define-domain-card'>domain cards</a> in your <a href='#define-loadout'>loadout</a> are from the <a href='#define-valor'>Valor</a> domain, gain the following benefits:</p><ul class='og-list-disc'><li>+1 bonus to your <a href='#define-armor'>Armor Score</a></li><li>When you mark 1 or more <a href='#define-hit-point'>Hit Points</a> without marking an <a href='#define-armor'>Armor Slot</a>, clear an Armor Slot.</li></ul>" },
{ label: "Full Surge", name: "full-surge", domain: "Valor", level: 8, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 265/270"], effects: "<p>Once per <a href='#define-downtime'>long rest</a>, mark 3 <a href='#define-stress'>Stress</a> to push your body to its limits. Gain a +2 bonus to all of your character <a href='#define-trait'>traits</a> until your next <a href='#define-downtime'>rest</a>.</p>" },
{ label: "Ground Pound", name: "ground-pound", domain: "Valor", level: 8, type: "Ability", recall: 2, pages: ["Page 342", "DH Core 266/270"], effects: "<p><strong><a href='#define-hope'>Spend 2 Hope</a></strong> to strike the ground where you stand and make a <a href='#define-trait-roll'>Strength Roll</a> against all targets within <a href='#define-range'>Very Close</a> range. Targets you succeed against are thrown back to <a href='#define-range'>Far</a> range and must make a <a href='#define-reaction-roll'>Reaction Roll</a> <strong>(17)</strong>. Targets who fail take <strong>4d10+8</strong> damage. Targets who succeed take half damage.</p>" },
{ label: "Hold The Line", name: "hold-the-line", domain: "Valor", level: 9, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 267/270"], effects: "<p>Describe the defensive stance you take and <strong><a href='#define-hope'>spend a Hope</a></strong>. If an <a href='#define-adversary'>adversary</a> moves within <a href='#define-range'>Very Close</a> range, they're pulled into <a href='#define-range'>Melee</a> range and <a href='#define-condition'><em>Restrained</em></a>.</p><p>This <a href='#define-condition'>condition</a> lasts until you move or fail a <a href='#define-action-roll'>roll with Fear</a>, or the GM spends 2 <a href='#define-fear'>Fear</a> on their turn to clear it.</p>" },
{ label: "Lead By Example", name: "lead-by-example", domain: "Valor", level: 9, type: "Ability", recall: 3, pages: ["Page 342", "DH Core 268/270"], effects: "<p>When you deal damage to an <a href='#define-adversary'>adversary</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> and describe how you encourage your allies. The next PC to make an attack against that adversary can clear a <a href='#define-stress'>Stress</a> or gain a <a href='#define-hope'>Hope</a>.</p>" },
{ label: "Unbreakable", name: "unbreakable", domain: "Valor", level: 10, type: "Ability", recall: 4, pages: ["Page 342", "DH Core 269/270"], effects: "<p>When you mark your last <a href='#define-hit-point'>Hit Point</a>, instead of making a <a href='#define-death'>death move</a>, you can roll a <strong>d6</strong> and clear a number of <a href='#define-hit-point'>Hit Points</a> equal to the result. Then place this card in your <a href='#define-loadout'>vault</a>.</p>" },
{ label: "Unyielding Armor", name: "unyielding-armor", domain: "Valor", level: 10, type: "Ability", recall: 1, pages: ["Page 342", "DH Core 270/270"], effects: "<p>When you would mark an <a href='#define-armor'>Armor Slot</a>, roll a number of <strong>d6s</strong> equal to your <a href='#define-damage-roll'>Proficiency</a>. If any roll a 6, reduce the severity by one <a href='#define-hit-point'>threshold</a> without marking an Armor Slot.</p>" }
];
// ancestries
const ancestryList = [
{ label: "Clank", name: "clank", pages: ["Page 53"], summarybrief: "<strong><a href='#define-clank'>Clanks</a></strong> are sentient mechanical beings built from a variety of materials, including metal, wood, and stone.", summary: "<p>Clanks are sentient mechanical beings built from a variety of materials, including metal, wood, and stone. <span class='og-omit'>They can resemble humanoids, animals, or even inanimate objects. Like organic beings, their bodies come in a wide array of sizes. Because of their bespoke construction, many clanks have highly specialized physical configurations. Examples include clawed hands for grasping, wheels for movement, or built-in weaponry.</span></p><p class='og-omit'>Many clanks embrace body modifications for style as well as function, and members of other ancestries often turn to clank artisans to construct customized mobility aids and physical adornments. Other ancestries can create clanks, even using their own physical characteristics as inspiration, but it's also common for clanks to build one another. A clank's lifespan extends as long as they're able to acquire or craft new parts, making their physical form effectively immortal. That said, their minds are subject to the effects of time, and deteriorate as the magic that powers them loses potency.</p>", featurecard: ["DH Core 056/270"], featurelabel: ["Purposeful Design", "Efficient"], features: ["<p><strong><em>Purposeful Design:</em></strong> Decide who made you and for what purpose. At <a href='#define-character-creation'>character creation</a>, choose one of your <a href='#define-experience'>Experiences</a> that best aligns with this purpose and gain a permanent +1 bonus to it.</p>", "<p><strong><em>Efficient:</em></strong> When you take a <a href='#define-downtime'>short rest</a>, you can choose a <a href='#define-downtime'>long rest</a> move instead of a short rest move.</p>"] },
{ label: "Drakona", name: "drakona", pages: ["Page 54"], summarybrief: "<strong><a href='#define-drakona'>Drakona</a></strong> resemble wingless dragons in humanoid form and possess a powerful elemental breath.", summary: "<p>Drakona resemble wingless dragons in humanoid form and possess a powerful elemental breath. <span class='og-omit'>All drakona have thick scales that provide excellent natural armor against both attacks and the forces of nature. They are large in size, ranging from 5&ndash;7 feet (1.5&ndash;2.1m) on average, with long sharp teeth. New teeth grow throughout a drakona's approximately 350-year lifespan, so they are never in danger of permanently losing an incisor. Unlike their dragon ancestors, drakona don't have wings and can't fly without magical aid. Members of this ancestry pass down the element of their breath through generations, though in rare cases, a drakona's elemental power will differ from the rest of their family's.</span></p>", featurecard: ["DH Core 057/270"], featurelabel: ["Scales", "Elemental Breath"], features: ["<p><strong><em>Scales:</em></strong> Your scales act as natural protection. When you would take <a href='#define-hit-point'>Severe</a> damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to mark 1 fewer <a href='#define-hit-point'>Hit Points</a>.</p>", "<p><strong><em>Elemental Breath:</em></strong> Choose an element for your breath (such as electricity, fire, or ice). You can use this breath against a target or group of targets within <a href='#define-range'>Very Close</a> range, treating it as an <a href='#define-instinct'>Instinct</a> <a href='#define-weapon'>weapon</a> that deals <strong>d8</strong> <a href='#define-damage-type'>magic damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.</p>"] },
{ label: "Dwarf", name: "dwarf", pages: ["Page 55"], summarybrief: "<strong><a href='#define-dwarf'>Dwarves</a></strong> are most easily recognized as short humanoids with square frames, dense musculature, and thick hair.", summary: "<p>Dwarves are most easily recognized as short humanoids with square frames, dense musculature, and thick hair. <span class='og-omit'>Their average height ranges from 4&ndash;5&half; feet (1.2&ndash;1.7 m), and they are often broad in proportion to their stature. Their skin and nails contain a high amount of keratin, making them naturally resilient. This allows dwarves to embed gemstones into their bodies and decorate themselves with tattoos or piercings.</span></p><p class='og-omit'>Their hair grows thickly&mdash;usually on their heads, but some dwarves have thick hair across their bodies as well. Dwarves of all genders can grow facial hair, which they often style in elaborate arrangements. Typically, dwarves live up to 250 years of age, maintaining their muscle mass well into later life.</p>", featurecard: ["DH Core 058/270"], featurelabel: ["Thick Skin", "Increased Fortitude"], features: ["<p><strong><em>Thick Skin:</em></strong> When you take <a href='#define-hit-point'>Minor</a> damage, you can <strong><a href='#define-stress'>mark 2 Stress</a></strong> instead of marking a <a href='#define-hit-point'>Hit Point</a>.</p>", "<p><strong><em>Increased Fortitude:</em></strong> <strong><a href='#define-hope'>Spend 3 Hope</a></strong> to halve incoming <a href='#define-damage-type'>physical damage</a>.</p>"] },
{ label: "Elf", name: "elf", pages: ["Page 56"], summarybrief: "<strong><a href='#define-elf'>Elves</a></strong> are typically tall humanoids with pointed ears and acutely attuned senses.", summary: "<p>Elves are typically tall humanoids with pointed ears and acutely attuned senses. <span class='og-omit'>Their ears vary in size and pointed shape, and as they age, the tips begin to droop. While elves come in a wide range of body types, they are all fairly tall, with heights ranging from about 6&ndash;6&half; feet (1.8&ndash;2.0 m). All elves have the ability to drop into a celestial trance, rather than sleep. This allows them to <a href='#define-downtime'>rest</a> effectively in a short amount of time. Some elves possess what is known as a <strong>mystic form</strong>, which occurs when an elf has dedicated themself to the study or protection of the natural world so deeply that their physical form changes. These characteristics can include celestial freckles, the presence of leaves, vines, or flowers in their hair, eyes that flicker like fire, and more. Sometimes these traits are inherited from parents, but if an elf changes their environment or magical focus, their appearance changes over time. Because elves live for about 350 years, these traits can shift more than once throughout their lifespan.</span></p>", featurecard: ["DH Core 059/270"], featurelabel: ["Quick Reactions", "Celestial Trance"], features: ["<p><strong><em>Quick Reactions:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to gain <a href='#define-advantage'>advantage</a> on a <a href='#define-reaction-roll'>reaction roll</a>.</p>", "<p><strong><em>Celestial Trance:</em></strong> During a rest, you can drop into a trance to choose an additional <a href='#define-downtime-move'>downtime move</a>.</p>"] },
{ label: "Faerie", name: "faerie", pages: ["Page 57"], summarybrief: "<strong><a href='#define-faerie'>Faeries</a></strong> are winged humanoid creatures with insectile features.", summary: "<p>Faeries are winged humanoid creatures with insectile features.</p><p class='og-omit'>These characteristics cover a broad spectrum from humanoid to insectoid&mdash;some possess additional arms, compound eyes, lantern organs, chitinous exoskeletons, or stingers.</p><p class='og-omit'>Because of their close ties to the natural world, they also frequently possess attributes that allow them to blend in with various plants. The average height of a faerie ranges from about 2&ndash;5 feet (0.6&ndash;1.5 m), but some faeries grow up to 7 feet (2.1 m) tall. All faeries possess membranous wings and they each go through a process of metamorphosis. The process and changes differ from faerie to faerie, but during this transformation each individual manifests the unique appearance they will carry throughout the rest of their approximately 50-year lifespan.</p>", featurecard: ["DH Core 060/270"], featurelabel: ["Luckbender", "Wings"], features: ["<p><strong><em>Luckbender:</em></strong> Once per session, after you or a willing ally within <a href='#define-range'>Close</a> range makes an action roll, you can spend 3 Hope to <a href='#define-reroll'>reroll</a> the <a href='#define-action-roll'>Duality Dice</a>.</p>", "<p><strong><em>Wings:</em></strong> You can fly. While flying, you can <strong><a href='#define-stress'>mark a Stress</a></strong> after an <a href='#define-adversary'>adversary</a> makes an attack against you to gain a +2 bonus to your <a href='#define-evasion'>Evasion</a> against that attack.</p>"] },
{ label: "Faun", name: "faun", pages: ["Page 58"], summarybrief: "<strong><a href='#define-faun'>Fauns</a></strong> resemble humanoid goats with curving horns, square pupils, and cloven hooves.", summary: "<p>Fauns resemble humanoid goats with curving horns, square pupils, and cloven hooves. <span class='og-omit'>Though their appearances may vary, most fauns have a humanoid torso and a goatlike lower body covered in dense fur.</span></p><p class='og-omit'>Faun faces can be more caprine or more humanlike, and they have a wide variety of ear and horn shapes. Faun horns range from short with minimal curvature to much larger with a distinct curl. The average faun ranges from 4&ndash;6&half; feet (1.2&ndash;2.0 m) tall, but their height can change dramatically from one moment to the next based on their stance. The majority of fauns have proportionately long limbs, no matter their size or shape, and are known for their ability to deliver powerful blows with their split hooves. Fauns live for roughly 225 years, and as they age, their appearance can become increasingly goatlike.</p>", featurecard: ["DH Core 063/270"], featurelabel: ["Caprine Leap", "Kick"], features: ["<p><strong><em>Caprine Leap:</em></strong> You can leap anywhere within <a href='#define-range'>Close</a> range as though you were using normal movement, allowing you to vault obstacles, jump across gaps, or scale barriers with ease.</p>", "<p><strong><em>Kick:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to kick yourself off them, dealing an extra <strong>2d6</strong> damage and knocking back either yourself or the target to <a href='#define-range'>Very Close</a> range.</p>"] },
{ label: "Firbolg", name: "firbolg", pages: ["Page 59"], summarybrief: "<strong><a href='#define-firbolg'>Firbolgs</a></strong> are bovine humanoids typically recognized by their broad noses and long, drooping ears.", summary: "<p>Firbolgs are bovine humanoids typically recognized by their broad noses and long, drooping ears. <span class='og-omit'>Some have faces that are a blend of humanoid and bison, ox, cow, or other bovine creatures. Others, often referred to as minotaurs, have heads that entirely resemble cattle. They are tall and muscular creatures, with heights ranging from around 5&ndash;7 feet (1.5&ndash;2.1 m), and possess remarkable strength no matter their age. Some firbolgs are known to use this strength to charge their adversaries, an action that is particularly effective for those who have one of the many varieties of horn styles commonly found in this ancestry. Though their unique characteristics can vary, all firbolgs are covered in fur, which can be muted and earth-toned in color, or come in a variety of pastels, such as soft pinks and blues. On average, firbolgs live for about 150 years.</span></p>", featurecard: ["DH Core 061/270"], featurelabel: ["Charge", "Unshakable"], features: ["<p><strong><em>Charge:</em></strong> When you succeed on an <a href='#define-trait-roll'>Agility Roll</a> to move from Far or <a href='#define-range'>Very Far</a> range into <a href='#define-range'>Melee</a> range with one or more targets, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to deal <strong>1d12</strong> <a href='#define-damage-type'>physical damage</a> to all targets within <a href='#define-range'>Melee</a> range.</p>", "<p><strong><em>Unshakable:</em></strong> When you would mark a <a href='#define-stress'>Stress</a>, roll a <strong>d6</strong>. On a result of 6, don't mark it.</p>"] },
{ label: "Fungril", name: "fungril", pages: ["Page 60"], summarybrief: "<strong><a href='#define-fungril'>Fungril</a></strong> resemble humanoid mushrooms.", summary: "<p>Fungril resemble humanoid mushrooms. <span class='og-omit'>They can be either more humanoid or more fungal in appearance, and they come in an assortment of colors, from earth tones to bright reds, yellows, purples, and blues. Fungril display an incredible variety of bodies, faces, and limbs, as there's no single common shape among them. Even their heights range from a tiny 2 feet tall to a staggering 7 feet (0.6&ndash;2.1 m) tall. While the common lifespan of a fungril is about 300 years, some have been reported to live much longer. They can communicate nonverbally, and many members of this ancestry use a mycelial array to chemically exchange information with other fungril across long distances.</span></p>", featurecard: ["DH Core 062/270"], featurelabel: ["Fungril Network", "Death Connection"], features: ["<p><strong><em>Fungril Network:</em></strong> Make an <strong><a href='#define-trait-roll'>Instinct Roll (12)</a></strong> to use your mycelial array to speak with others of your ancestry. On a success, you can communicate across any distance.</p>", "<p><strong><em>Death Connection:</em></strong> While touching a corpse that died recently, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to extract one memory from the corpse related to a specific emotion or sensation of your choice.</p>"] },
{ label: "Galapa", name: "galapa", pages: ["Page 61"], summarybrief: "<strong><a href='#define-galapa'>Galapa</a></strong> resemble anthropomorphic turtles with large, domed shells into which they can retract.", summary: "<p>Galapa resemble anthropomorphic turtles with large, domed shells into which they can retract. <span class='og-omit'>On average, they range from 4&ndash;6 feet (1.2&ndash;1.8 m) in height, and their head and body shapes can resemble any type of turtle.</span></p><p class='og-omit'>Galapa come in a variety of earth tones&mdash;most often shades of green and brown&mdash; and possess unique patterns on their shells. Members of this ancestry can draw their head, arms, and legs into their shell for protection to use it as a natural shield when defensive measures are needed. Some supplement their shell's strength or appearance by attaching armor or carving unique designs, but the process is exceedingly painful. Most galapa move slowly no matter their age, and they can live approximately 150 years.</p>", featurecard: ["DH Core 064/270"], featurelabel: ["Shell", "Retract"], features: ["<p><strong><em>Shell:</em></strong> Gain a bonus to your  <a href='#define-hit-point'>damage thresholds</a> equal to your <a href='#define-damage-roll'>Proficiency</a>.</p>", "<p><strong><em>Retract:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to retract into your shell. While in your shell, you have <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>, you have <a href='#define-advantage'>disadvantage</a> on <a href='#define-action-roll'>action rolls</a>, and you can't move.</p>"] },
{ label: "Giant", name: "giant", pages: ["Page 62"], summarybrief: "<strong><a href='#define-giant'>Giants</a></strong> are towering humanoids with broad shoulders, long arms, and one to three eyes.", summary: "<p>Giants are towering humanoids with broad shoulders, long arms, and one to three eyes. <span class='og-omit'>Adult giants range from 6&half;&ndash;8&half; feet (2&ndash;2.6 m) tall and are naturally muscular, regardless of body type. They are easily recognized by their wide frames and elongated arms and necks. Though they can have up to three eyes, all giants are born with none and remain sightless for their first year of life. Until a giant reaches the age of 10 and their features fully develop, the formation of their eyes may fluctuate. Those with a single eye are commonly known as cyclops. The average giant lifespan is about 75 years.</span></p>", featurecard: ["DH Core 065/270"], featurelabel: ["Endurance", "Reach"], features: ["<p><strong><em>Endurance:</em></strong> Gain an additional <a href='#define-hit-point'>Hit Point</a> slot at <a href='#define-character-creation'>character creation</a>.</p>", "<p><strong><em>Reach:</em></strong> Treat any <a href='#define-weapon'>weapon</a>, ability, spell, or other feature that has a <a href='#define-range'>Melee</a> range as though it has a <a href='#define-range'>Very Close</a> range instead.</p>"] },
{ label: "Goblin", name: "goblin", pages: ["Page 63"], summarybrief: "<strong><a href='#define-goblin'>Goblins</a></strong> are small humanoids easily recognizable by their large eyes and massive membranous ears.", summary: "<p>Goblins are small humanoids easily recognizable by their large eyes and massive membranous ears. <span class='og-omit'>With keen hearing and sharp eyesight, they perceive details both at great distances and in darkness, allowing them to move through less-optimal environments with ease. Their skin and eye colors are incredibly varied, with no one hue, either vibrant or subdued, more dominant than another. A typical goblin stands between 3&ndash;4 feet (0.9&ndash;1.2 m) tall, and each of their ears is about the size of their head. Goblins are known to use ear positions to very specific effect when communicating nonverbally. A goblin's lifespan is roughly 100 years, and many maintain their keen hearing and sight well into advanced age.</span></p>", featurecard: ["DH Core 066/270"], featurelabel: ["Surefooted", "Danger Sense"], features: ["<p><strong><em>Surefooted:</em></strong> You ignore <a href='#define-advantage'>disadvantage</a> on <a href='#define-trait-roll'>Agility Rolls</a>.</p>", "<p><strong><em>Danger Sense:</em></strong> Once per <a href='#define-downtime'>rest</a>, mark a <a href='#define-stress'>Stress</a> to force an <a href='#define-adversary'>adversary</a> to <a href='#define-reroll'>reroll</a> an attack against you or an ally within <a href='#define-range'>Very Close</a> range.</p>"] },
{ label: "Halfling", name: "halfling", pages: ["Page 64"], summarybrief: "<strong><a href='#define-halfling'>Halflings</a></strong> are small humanoids with large hairy feet and prominent rounded ears.", summary: "<p>Halflings are small humanoids with large hairy feet and prominent rounded ears. <span class='og-omit'>On average, halflings are 3&ndash;4 feet (0.9&ndash;1.2 m) in height, and their ears, nose, and feet are larger in proportion to the rest of their body. Members of this ancestry live for around 150 years, and a halfling's appearance is likely to remain youthful even as they progress from adulthood into old age. Halflings are naturally attuned to the magnetic fields of the Mortal Realm, granting them a strong internal compass. They also possess acute senses of hearing and smell, and can often detect those who are familiar to them by the sound of their movements.</span></p>", featurecard: ["DH Core 067/270"], featurelabel: ["Luckbringer", "Internal Compass"], features: ["<p><strong><em>Luckbringer:</em></strong> At the start of each session, everyone in your party gains a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Internal Compass:</em></strong> When you roll a 1 on your <a href='#define-action-roll'>Hope Die</a>, you can <a href='#define-reroll'>reroll</a> it.</p>"] },
{ label: "Human", name: "human", pages: ["Page 65"], summarybrief: "<strong><a href='#define-human'>Humans</a></strong> are most easily recognized by their dexterous hands, rounded ears, and bodies built for endurance.", summary: "<p>Humans are most easily recognized by their dexterous hands, rounded ears, and bodies built for endurance. <span class='og-omit'>Their average height ranges from just under 5&ndash;6&half; feet (1.5&ndash;2.0 m). They have a wide variety of builds, with some being quite broad, others lithe, and many inhabiting the spectrum in between.</span></p><p class='og-omit'>Humans are physically adaptable and adjust to harsh climates with relative ease. In general, humans live to an age of about 100, with their bodies changing dramatically between their youngest and oldest years.</p>", featurecard: ["DH Core 068/270"], featurelabel: ["High Stamina", "Adaptability"], features: ["<p><strong><em>High Stamina:</em></strong> Gain an additional <a href='#define-stress'>Stress</a> slot at <a href='#define-character-creation'>character creation</a>.</p>", "<p><strong><em>Adaptability:</em></strong> When you fail a roll that <a href='#define-experience'>utilized one of your Experiences</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to <a href='#define-reroll'>reroll</a>.</p>"] },
{ label: "Infernis", name: "infernis", pages: ["Page 66"], summarybrief: "<strong><a href='#define-infernis'>Infernis</a></strong> are humanoids who possess sharp canine teeth, pointed ears, and horns.", summary: "<p>Infernis are humanoids who possess sharp canine teeth, pointed ears, and horns. <span class='og-omit'>They are the descendants of demons from the Circles Below. On average, infernis range in height from 5&ndash;7 feet (1.5&ndash;2.1 m) and are known to have long fingers and pointed nails. Some have long, thin, and smooth tails that end in points, forks, or arrowheads. It's common for infernis to have two or four horns&mdash;though some have crowns of many horns, or only one. These horns can also grow asymmetrically, forming unique, often curving, shapes that infernis enhance with carving and ornamentation. Their skin, hair, and horns come in an assortment of colors that can include soft pastels, stark tones, or vibrant hues, such as rosy scarlet, deep purple, and pitch black.</span></p><p class='og-omit'>Infernis possess a <strong><em>dread visage</em></strong> that manifests both involuntarily, such as when they experience fear or other strong emotions, or purposefully, such as when they wish to intimidate an <a href='#define-adversary'>adversary</a>. This visage can briefly modify their appearance in a variety of ways, including lengthening their teeth and nails, changing the colors of their eyes, twisting their horns, or enhancing their height. On average, infernis live up to 350 years, with some attributing this lifespan to their demonic lineage.</p>", featurecard: ["DH Core 069/270"], featurelabel: ["Fearless", "Dread Visage"], features: ["<p><strong><em>Fearless:</em></strong> When you <a href='#define-action-roll'>roll with Fear</a>, you can <strong><a href='#define-stress'>mark 2 Stress</a></strong> to change it into a <a href='#define-action-roll'>roll with Hope</a> instead.</p>", "<p><strong><em>Dread Visage:</em></strong> You have <a href='#define-advantage'>advantage</a> on rolls to intimidate hostile creatures.</p>"] },
{ label: "Katari", name: "katari", pages: ["Page 67"], summarybrief: "<strong><a href='#define-katari'>Katari</a></strong> are feline humanoids with retractable claws, vertically slit pupils, and high, triangular ears.", summary: "<p>Katari are feline humanoids with retractable claws, vertically slit pupils, and high, triangular ears. <span class='og-omit'>They can also have small, pointed canine teeth, soft fur, and long whiskers that assist their perception and navigation. Their ears can swivel nearly 180 degrees to detect sound, adding to their heightened senses. Katari may look more or less feline or humanoid, with catlike attributes in the form of hair, whiskers, and a muzzle.</span></p><p class='og-omit'>About half of the katari population have tails. Their skin and fur come in a wide range of hues and patterns, including solid colors, calico tones, tabby stripes, and an array of spots, patches, marbling, or bands. Their height ranges from about 3&ndash;6&half; feet (0.9&ndash;2.0 m), and they live to around 150 years.</p>", featurecard: ["DH Core 070/270"], featurelabel: ["Feline Instincts", "Retracting Claws"], features: ["<p><strong><em>Feline Instincts:</em></strong> When you make an <a href='#define-trait-roll'>Agility Roll</a>, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to <a href='#define-reroll'>reroll</a> your <a href='#define-action-roll'>Hope Die</a>.</p>", "<p><strong><em>Retracting Claws:</em></strong> Make an <strong><a href='#define-trait-roll'>Agility Roll</a></strong> to scratch a target within <a href='#define-range'>Melee</a> range. On a success, they become <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>.</p>"] },
{ label: "Orc", name: "orc", pages: ["Page 68"], summarybrief: "<strong><a href='#define-orc'>Orcs</a></strong> are humanoids most easily recognized by their square features and boar-like tusks that protrude from their lower jaw.", summary: "<p>Orcs are humanoids most easily recognized by their square features and boar-like tusks that protrude from their lower jaw.</p><p class='og-omit'>Tusks come in various sizes, and though they extend from the mouth, they aren't used for consuming food. Instead, many orcs choose to decorate their tusks with significant ornamentation. Orcs typically live for 125 years, and unless altered, their tusks continue to grow throughout the course of their lives. Their ears are pointed, and their hair and skin typically have green, blue, pink, or gray tones. Orcs tend toward a muscular build, and their average height ranges from 5&ndash;6&half; feet (1.5&ndash;2.0 m).</p>", featurecard: ["DH Core 071/270"], featurelabel: ["Sturdy", "Tusks"], features: ["<p><strong><em>Sturdy:</em></strong> When you have 1 <a href='#define-hit-point'>Hit Point</a> remaining, attacks against you have <a href='#define-advantage'>disadvantage</a>.</p>", "<p><strong><em>Tusks:</em></strong> When you succeed on an attack against a target within <a href='#define-range'>Melee</a> range, you can spend a Hope to gore the target with your tusks, dealing an extra <strong>1d6</strong> damage.</p>"] },
{ label: "Ribbet", name: "ribbet", pages: ["Page 69"], summarybrief: "<strong><a href='#define-ribbet'>Ribbets</a></strong> resemble anthropomorphic frogs with protruding eyes and webbed hands and feet.", summary: "<p>Ribbets resemble anthropomorphic frogs with protruding eyes and webbed hands and feet. <span class='og-omit'>They have smooth (though sometimes warty) moist skin and eyes positioned on either side of their head. Some ribbets have hind legs more than twice the length of their torso, while others have short limbs. No matter their size (which ranges from about 3&ndash;4&half; feet (0.9&ndash;1.4 m)), ribbets primarily move by hopping. All ribbets have webbed appendages, allowing them to swim with ease. Some ribbets possess a natural green-and-brown camouflage, while others are vibrantly colored with bold patterns. No matter their appearance, all ribbets are born from eggs laid in the water, hatch into tadpoles, and after about 6 to 7 years, grow into amphibians that can move around on land. Ribbets live for approximately 100 years.</span></p>", featurecard: ["DH Core 072/270"], featurelabel: ["Amphibious", "Long Tongue"], features: ["<p><strong><em>Amphibious:</em></strong> You can breathe and move naturally underwater.</p>", "<p><strong><em>Long Tongue:</em></strong> You can use your long tongue to grab onto things within <a href='#define-range'>Close</a> range. <strong><a href='#define-stress'>Mark a Stress</a></strong> to use your tongue as a <a href='#define-finesse'>Finesse</a> <a href='#define-range'>Close</a> <a href='#define-weapon'>weapon</a> that deals <strong>d12</strong> <a href='#define-damage-type'>physical damage</a> using your <a href='#define-damage-roll'>Proficiency</a>.</p>"] },
{ label: "Simiah", name: "simiah", pages: ["Page 70"], summarybrief: "<strong><a href='#define-simiah'>Simiah</a></strong> resemble anthropomorphic monkeys and apes with long limbs and prehensile feet.", summary: "<p>Simiah resemble anthropomorphic monkeys and apes with long limbs and prehensile feet. <span class='og-omit'>While their appearance reflects all simian creatures, from the largest gorilla to the smallest marmoset, their size does not align with their animal counterparts, and they can be anywhere from 2&ndash;6 feet (0.6&ndash;1.8 m) tall. All simiah can use their dexterous feet for nonverbal communication, work, and combat. Additionally, some also have prehensile tails that can grasp objects or help with balance during difficult maneuvers. These traits grant members of this ancestry unique agility that aids them in a variety of physical tasks. In particular, simiah are skilled climbers and can easily transition from bipedal movement to knuckle-walking and climbing, and back again. On average, simiah live for about 100 years.</span></p>", featurecard: ["DH Core 073/270"], featurelabel: ["Natural Climber", "Nimble"], features: ["<p><strong><em>Natural Climber:</em></strong> You have <a href='#define-advantage'>advantage</a> on <a href='#define-trait-roll'>Agility Rolls</a> that involve balancing and climbing.</p>", "<p><strong><em>Nimble:</em></strong> Gain a permanent +1 bonus to your <a href='#define-evasion'>Evasion</a> at <a href='#define-character-creation'>character creation</a>.</p>"] }
];
// communities
const communityList = [
{ label: "Highborne", name: 'highborne', pages: ["Page 73"], summarybrief: "Being part of a <strong><a href='#define-highborne'>Highborne</a></strong> community means you're accustomed to a life of elegance, opulence, and prestige within the upper echelons of society.", summary: "<p>Being part of a highborne community means you're accustomed to a life of elegance, opulence, and prestige within the upper echelons of society. <span class='og-omit'>Traditionally, members of a highborne community possess incredible material wealth. While this can take a variety of forms depending on the community&mdash;including gold and other minerals, land, or controlling the means of production&mdash;this status always comes with power and influence. Highborne place great value on titles and possessions, and there is little social mobility within their ranks. Members of a highborne community often control the political and economic status of the areas in which they live due to their ability to influence people and the economy with their substantial wealth. The health and safety of the less affluent people who live in these locations often hinges on the ability of this highborne ruling class to prioritize the well-being of their subjects over profit.</span></p>", roleplay: "Highborne are often amiable, candid, conniving, enterprising, ostentatious, and unflappable.", featurecard: ["DH Core 073/270"], feature: "<p><strong><em>Privilege:</em></strong> You have <a href='#define-advantage'>advantage</a> on rolls to consort with nobles, negotiate prices, or leverage your reputation to get what you want.</p></li>" },
{ label: "Loreborne", name: 'loreborne', pages: ["Page 74"], summarybrief: "Being part of a <strong><a href='#define-loreborne'>Loreborne</a></strong> community means you're from a society that favors strong academic or political prowess.", summary: "<p>Being part of a lore</a> means you're from a society that favors strong academic or political prowess. <span class='og-omit'>Loreborne communities highly value knowledge, frequently in the form of historical preservation, political advancement, scientific study, skill development, or lore and mythology compilation. Most members of these communities research in institutions built in bastions of civilization, while some eclectic few thrive in gathering information from the natural world. Some may be isolationists, operating in smaller enclaves, schools, or guilds and following their own unique ethos. Others still wield their knowledge on a larger scale, making deft political maneuvers across governmental landscapes.</span></p>", roleplay: "Loreborne are often direct, eloquent, inquisitive, patient, rhapsodic, and witty.", featurecard: ["DH Core 074/270"], feature: "<p><strong><em>Well-Read:</em></strong> You have <a href='#define-advantage'>advantage</a> on rolls that involve the history, culture, or politics of a prominent person or place.</p></li>" },
{ label: "Orderborne", name: 'orderborne', pages: ["Page 75"], summarybrief: "Being part of an <strong><a href='#define-orderborne'>Orderborne</a></strong> community means you're from a collective that focuses on discipline or faith, and you uphold a set of principles that reflect your experience there.", summary: "<p>Being part of an orderborne community means you're from a collective that focuses on discipline or faith, and you uphold a set of principles that reflect your experience there. <span class='og-omit'>Orderborne are frequently some of the most powerful among the surrounding communities. By aligning the members of their society around a common value or goal, such as a god, doctrine, ethos, or even a shared business or trade, the ruling bodies of these enclaves can mobilize larger populations with less effort. While orderborne communities take a variety of forms&mdash;some even profoundly pacifistic&mdash;perhaps the most feared are those that structure themselves around military prowess. In such a case, it's not uncommon for orderborne to provide soldiers for hire to other cities or countries.</span></p>", roleplay: "Orderborne are often ambitious, benevolent, pensive, prudent, sardonic, and stoic.", featurecard: ["DH Core 075/270"], feature: "<p><strong><em>Dedicated:</em></strong> Record three sayings or values your upbringing instilled in you. Once per <a href='#define-downtime'>rest</a>, when you describe how you're embodying one of these principles through your current action, you can roll a <strong>d20</strong> as your <a href='#define-action-roll'>Hope Die</a>.</p></li>" },
{ label: "Ridgeborne", name: 'ridgeborne', pages: ["Page 76"], summarybrief: "Being part of a <strong><a href='#define-ridgeborne'>Ridgeborne</a></strong> community means you've called the rocky peaks and sharp cliffs of the mountainside home.", summary: "<p>Being part of a ridgeborne community means you've called the rocky peaks and sharp cliffs of the mountainside home. <span class='og-omit'>Those who've lived in the mountains often consider themselves hardier than most because they've thrived among the most dangerous terrain many continents have to offer. These groups are adept at adaptation, developing unique technologies and equipment to move both people and products across difficult terrain. As such, ridgeborne grow up scrambling and climbing, making them sturdy and strong-willed. Ridgeborne localities appear in a variety of forms&mdash;some cities carve out entire cliff faces, others construct castles of stone, and still more live in small homes on windblown peaks. Outside forces often struggle to attack ridgeborne groups, as the small militias and large military forces of the mountains are adept at utilizing their high-ground advantage.</span></p>", roleplay: "Ridgeborne are often bold, hardy, indomitable, loyal, reserved, and stubborn.", featurecard: ["DH Core 076/270"], feature: "<p><strong><em>Steady:</em></strong> You have <a href='#define-advantage'>advantage</a> on rolls to traverse dangerous cliffs and ledges, navigate harsh environments, and use your survival knowledge.</p></li>" },
{ label: "Seaborne", name: 'seaborne', pages: ["Page 77"], summarybrief: "Being part of a <strong><a href='#define-seaborne'>Seaborne</a></strong> community means you lived on or near a large body of water.", summary: "<p>Being part of a seaborne community means you lived on or near a large body of water. <span class='og-omit'>Seaborne communities are built, both physically and culturally, around the specific waters they call home. Some of these groups live along the shore, constructing ports for locals and travelers alike. These harbors function as centers of commerce, tourist attractions, or even just a safe place to lay down one's head after weeks of travel. Other seaborne live on the water in small boats or large ships, with the idea of 'home' comprising a ship and its crew, rather than any one landmass. No matter their exact location, seaborne communities are closely tied to the ocean tides and the creatures who inhabit them. Seaborne learn to fish at a young age, and train from birth to hold their breath and swim in even the most tumultuous waters. Individuals from these groups are highly sought after for their sailing skills, and many become captains of vessels, whether within their own community, working for another, or even at the helm of a powerful naval operation.</span></p>", roleplay: "Seaborne are often candid, cooperative, exuberant, fierce, resolute, and weathered.", featurecard: ["DH Core 077/270"], feature: "<p><strong><em>Know the Tide:</em></strong> You can sense the ebb and flow of life. When you <a href='#define-action-roll'>roll with Fear</a>, place a token on your community card. You can hold a number of tokens equal to your <a href='#define-level'>level</a>. Before you make an <a href='#define-action-roll'>action roll</a>, you can spend any number of these tokens to gain a +1 bonus to the roll for each token spent. At the end of each session, clear all unspent tokens.</p></li>" },
{ label: "Slyborne", name: 'slyborne', pages: ["Page 78"], summarybrief: "Being part of a <strong><a href='#define-slyborne'>Slyborne</a></strong> community means you come from a group that operates outside the law, including all manner of criminals, grifters, and con artists.", summary: "<p>Being part of a slyborne community means you come from a group that operates outside the law, including all manner of criminals, grifters, and con artists. <span class='og-omit'>Members of slyborne communities are brought together by their disreputable goals and their clever means of achieving them. Many people in these communities have an array of unscrupulous skills: forging, thievery, smuggling, and violence. People of any social class can be slyborne, from those who have garnered vast wealth and influence to those without a coin to their name. To the outside eye, slyborne might appear to be ruffians with no loyalty, but these communities possess some of the strictest codes of honor which, when broken, can result in a terrifying end for the transgressor.</span></p>", roleplay: "Slyborne are often calculating, clever, formidable, perceptive, shrewd, and tenacious.", featurecard: ["DH Core 078/270"], feature: "<p><strong><em>Scoundrel:</em></strong> You have <a href='#define-advantage'>advantage</a> on rolls to negotiate with criminals, detect lies, or find a safe place to hide.</p></li>" },
{ label: "Underborne", name: 'underborne', pages: ["Page 79"], summarybrief: "Being part of an <strong><a href='#define-underborne'>Underborne</a></strong> community means you're from a subterranean society.", summary: "<p>Being part of an underborne community means you're from a subterranean society. Many underborne live right beneath the cities and villages of other collectives, while some live much deeper. <span class='og-omit'>These communities range from small family groups in burrows to massive metropolises in caverns of stone. In many locales, underborne are recognized for their incredible boldness and skill that enable great feats of architecture and engineering. Underborne are regularly hired for their bravery, as even the least daring among them has likely encountered formidable belowground beasts, and learning to dispatch such creatures is common practice amongst these societies. Because of the dangers of their environment, many underborne communities develop unique nonverbal languages that prove equally useful on the surface.</span></p>", roleplay: "Underborne are often composed, elusive, indomitable, innovative, resourceful, and unpretentious.", featurecard: ["DH Core 079/270"], feature: "<p><strong><em>Low-Light Living:</em></strong> When you're in an area with low light or heavy shadow, you have <a href='#define-advantage'>advantage</a> on rolls to hide, investigate, or perceive details within that area.</p></li>" },
{ label: "Wanderborne", name: 'wanderborne', pages: ["Page 80"], summarybrief: "Being part of a <strong><a href='#define-wanderborne'>Wanderborne</a></strong> community means you've lived as a nomad, forgoing a permanent home and experiencing a wide variety of cultures.", summary: "<p>Being part of a wanderborne community means you've lived as a nomad, forgoing a permanent home and experiencing a wide variety of cultures. <span class='og-omit'>Unlike many communities that are defined by their locale, wanderborne are defined by their traveling lifestyle. Because of their frequent migration, wanderborne put less value on the accumulation of material possessions in favor of acquiring information, skills, and connections. While some wanderborne are allied by a common ethos, such as a religion or a set of political or economic values, others come together after shared tragedy, such as the loss of their home or land. No matter the reason, the dangers posed by life on the road and the choice to continue down that road together mean that wanderborne are known for their unwavering loyalty.</span></p>", roleplay: "Wanderborne are often inscrutable, magnanimous, mirthful, reliable, savvy, and unorthodox.", featurecard: ["DH Core 080/270"], feature: "<p><strong><em>Nomadic Pack:</em></strong> Add a <strong><em>Nomadic Pack</em></strong> to your inventory. Once per session, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to reach into this pack and pull out a mundane item that's useful to your situation. Work with the GM to figure out what item you take out.</p></li>" },
{ label: "Wildborne", name: 'wildborne', pages: ["Page 81"], summarybrief: "Being part of a <strong><a href='#define-wildborne'>Wildborne</a></strong> community means you lived deep within the forest.", summary: "<p>Being part of a wildborne community means you lived deep within the forest. <span class='og-omit'>Wildborne communities are defined by their dedication to the conservation of their homelands, and many have strong religious or cultural ties to the fauna they live among. This results in unique architectural and technological advancements that favor sustainability over short-term, high-yield results. It is a hallmark of wildborne societies to integrate their villages and cities with the natural environment and avoid disturbing the lives of the plants and animals. While some construct their lodgings high in the branches of trees, others establish their homes on the ground beneath the forest canopy. It's not uncommon for wildborne to remain reclusive and hidden within their woodland homes.</span></p>", roleplay: "Wildborne are often hardy, loyal, nurturing, reclusive, sagacious, and vibrant.", featurecard: ["DH Core 081/270"], feature: "<p><strong><em>Lightfoot:</em></strong> Your movement is naturally silent. You have <a href='#define-advantage'>advantage</a> on rolls to move without being heard.</p></li>" }
];
// traits
const traitList = [ 
{ label: "Agility", name: "agility", pages: ["Page 17", "Page 158"], summary: "<p>A high <strong>Agility</strong> means you're fast on your feet, nimble on difficult terrain, and quick to react to danger. You'll make an <a href='#define-trait-roll'>Agility Roll</a> to scurry up a rope, sprint to cover, or bound from rooftop to rooftop.</p>", action: ["Sprint", "Leap", "Maneuver"], roll5: ["Sprint within <a href='#define-range'>Close</a> range across an open field with an enemy present.", "Make a running jump of half your height<span class='og-omit'> (about 3 feet (0.9 m) for a human)</span>.", "Walk slowly across a narrow beam."], roll10: ["Sprint within <a href='#define-range'>Far</a> range across an open field with an enemy present.", "Make a running jump of your height<span class='og-omit'> (about 6 feet (1.8 m) for a human)</span>.", "Walk quickly across a narrow beam."], roll15: ["Sprint within <a href='#define-range'>Close</a> range across rough terrain with an enemy present.", "Make a running jump of double your height<span class='og-omit'> (about 12 feet (3.6 m) for a human)</span>.", "Run across a narrow beam."], roll20: ["Sprint within <a href='#define-range'>Close</a> range through an active battle of multiple enemies.", "Make a running jump of three times your height<span class='og-omit'> (about 18 feet (5.5 m) for a human)</span>.", "Run across a narrow beam in heavy wind."], roll25: ["Sprint within <a href='#define-range'>Far</a> range through a <a href='#define-environment-pitched-battle'>pitched battle</a> in rough terrain.", "Make a running jump of five times your height<span class='og-omit'> (about 30 feet (9.1 m) for a human)</span>.", "Run across a very narrow beam in an active rainstorm."], roll30: ["Sprint across the heads of your enemies in a <a href='#define-environment-pitched-battle'>pitched battle</a>.", "Make a running jump of ten times your height<span class='og-omit'> (about 60 feet (18.3 m) for a human)</span>.", "Run across an inch-wide, oil-slicked beam in an active rainstorm."] },
{ label: "Strength", name: "strength", pages: ["Page 17", "Page 158"], summary: "<p>A high <strong>Strength</strong> means you're better at feats that test your physical prowess and stamina. You'll make a <a href='#define-trait-roll'>Strength Roll</a> to break through a door, lift heavy objects, or hold your ground against a charging foe.</p>", action: ["Lift", "Smash", "Grapple"], roll5: ["Lift a chair.", "Destroy a glass cup.", "Subdue a child."], roll10: ["Lift a table or small chest.", "Destroy a small wooden table.", "Subdue a weak adult."], roll15: ["Lift a grown person or large chest.", "Break through a wooden door.", "Subdue an average adult."], roll20: ["Lift the side of a laden cart or carry a large chest up stairs.", "Break through a stone wall.", "Subdue a skilled wrestler."], roll25: ["Lift a horse, an ox, or a large monster.", "Break through a dragon's teeth.", "Subdue a large beast."], roll30: ["Lift a falling portcullis gate.", "Break a god's grip.", "Subdue a legendary beast."] },
{ label: "Finesse", name: "finesse", pages: ["Page 17", "Page 158"], summary: "<p>A high <strong>Finesse</strong> means you're skilled at tasks that require accuracy, stealth, or the utmost control. You'll make a <a href='#define-trait-roll'>Finesse Roll</a> to use fine tools, escape notice, or strike with precision.</p>", action: ["Control", "Hide", "Tinker"], roll5: ["Ride a horse through easy terrain.", "Evade notice under full cover on a moonless night.", "Open a sticky lock with the appropriate key."], roll10: ["Drive an ox-pulled cart.", "Evade notice in limited cover on a moonless night.", "Open a simple puzzle box."], roll15: ["Ride a horse through rough terrain.", "Evade notice in limited cover on an average night.", "Disable a standard trap."], roll20: ["Drive a cart through rough terrain.", "Evade notice in the shadows on an average night.", "Disable a complicated trap."], roll25: ["Ride a wild horse through dangerous terrain.", "Evade notice with minimal cover in ample light.", "Open a door secured by a sequence of elaborate locks."], roll30: ["Ride an enraged beast through dangerous terrain.", "Evade notice with no cover in full daylight.", "Disable an incredibly sensitive and deadly trap."] },
{ label: "Instinct", name: "instinct", pages: ["Page 17", "Page 159"], summary: "<p>A high <strong>Instinct</strong> means you have a keen sense of your surroundings and a natural intuition. You'll make an <a href='#define-trait-roll'>Instinct Roll</a> to sense danger, notice details in the world around you, or track an elusive foe.</p>", action: ["Perceive", "Sense", "Navigate"], roll5: ["Hear a loud noise twenty paces away.", "Detect an obvious ambush or notice an obvious deception.", "Follow a well-trod path in good lighting and weather."], roll10: ["Hear a speaking voice fifty paces away.", "Detect a looming threat or notice an average person's lies.", "Follow an average path in good lighting and weather."], roll15: ["Hear someone walking in the woods fifty paces away.", "Detect hostile intent from a foe or see through a merchant's lies.", "Follow a subtle path through rough conditions."], roll20: ["Hear someone sneaking through the woods fifty paces away.", "Detect a politician's veiled hostility or detect a nearby assassin.", "Follow a subtle path through harsh conditions."], roll25: ["Hear a prowling animal fifty paces away.", "Identify a spymaster's plot or read a politician's true intentions.", "Find your way with no path through dangerous conditions."], roll30: ["Hear a diving bird a hundred paces away.", "Sense a shred of doubt within a god's pronouncement.", "Find your way through a trickery god's maze."] },
{ label: "Presence", name: "presence", pages: ["Page 17", "Page 159"], summary: "<p>A high <strong>Presence</strong> means you have a strong force of personality and a facility for social situations. You'll make a <a href='#define-trait-roll'>Presence Roll</a> to plead your case, intimidate a foe, or capture the attention of a crowd.</p>", action: ["Charm", "Perform", "Deceive"], roll5: ["Win the trust of a friendly neighbor.", "Earn a meal from a friendly crowd.", "Trick a trusting acquaintance."], roll10: ["Win the trust of a friendly stranger.", "Earn room and board in a small town or impress a small crowd.", "Trick an average stranger."], roll15: ["Win the trust of a cautious stranger or talk your way into a noble's party.", "Earn room and board in a low-end tavern or impress a large crowd.", "Trick an average merchant."], roll20: ["Win the trust of a sympathetic foe or talk your way into an enemy's party.", "Earn lodging in a high-end tavern or impress a full theater.", "Trick a trained courtier."], roll25: ["Turn an enemy against their ruler or talk your way into a fae court.", "Earn your keep in a royal court or impress a full colosseum.", "Trick a spymaster."], roll30: ["Talk a hostile god into granting you a boon.", "Save yourself from execution after offending the queen.", "Trick a god."] },
{ label: "Knowledge", name: "knowledge", pages: ["Page 17", "Page 159"], summary: "<p>A high <strong>Knowledge</strong> means you know information others don't and understand how to apply your mind through deduction and inference. You'll make a <a href='#define-trait-roll'>Knowledge Roll</a> to interpret facts, see the patterns clearly, or remember important information.</p>", action: ["Recall", "Analyze", "Comprehend"], roll5: ["Recall uncommon facts about your community.", "Unpack an obvious metaphor in a simple text.", "Learn simple skills from an excellent teacher."], roll10: ["Recall uncommon facts about a neighboring community.", "Identify obvious subtext in a conversation.", "Learn simple skills from an average teacher."], roll15: ["Recall uncommon facts about a distant community.", "Break an average cipher in a coded message.", "Learn complicated skills from an excellent teacher."], roll20: ["Recall specialized facts about a distant community.", "Identify a weakness in a complicated battle plan.", "Learn complicated skills under poor conditions."], roll25: ["Recall specialized facts about a fallen kingdom.", "Predict the downfall of a nation based on concealed misdeeds.", "Learn complicated skills quickly under dangerous conditions."], roll30: ["Recall secret information about an obscure historical group.", "Identify the weakness in a divine champion's fighting form.", "Learn complicated skills quickly from incomplete information."] }
];
// ranges
const rangesList = [
{ label: "Melee", summary: "Touch", move: "&mdash;", feet: "&lt; 5", meters: "&lt; 1.5", ruler: "&mdash;", squares: "1", inches: "1", cm: "2.5" },
{ label: "Very Close", summary: "See fine details", move: "Move and take an <a href='#define-action'>action</a>", feet: "5&ndash;10", meters: "1.5&ndash;3", ruler: "Short length of a game card", squares: "3", inches: "2&ndash;3", cm: "5&ndash;7.6" },
{ label: "Close", summary: "See prominent details", move: "Move and take an <a href='#define-action'>action</a>", feet: "10&ndash;30", meters: "3&ndash;9.1", ruler: "Pencil", squares: "6", inches: "5&ndash;6", cm: "12.7&ndash;15.2" },
{ label: "Far", summary: "See few details", move: "Succeed an <a href='#define-trait-roll'>Agility Roll</a>", feet: "30&ndash;100", meters: "9.1&ndash;30.5", ruler: "Long edge of a piece of copy paper", squares: "12", inches: "11&ndash;12", cm: "28.0&ndash;30.5" },
{ label: "Very Far", summary: "No details", move: "Succeed an <a href='#define-trait-roll'>Agility Roll</a>", feet: "100&ndash;300", meters: "30.5&ndash;91", ruler: "Within the bounds of the conflict or scene", squares: "13+", inches: "&mdash;", cm: "&mdash;" },
{ label: "Out of Range", summary: "Can't target", move: "&mdash;", feet: "&gt; 300", meters: "&gt; 91", ruler: "&mdash;", squares: "Off map", inches: "&mdash;", cm: "&mdash;" }
];
// weapons, primary
const weaponprimaryList = [
{ label: "Broadsword", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Agility", range: "Melee", damage: "d8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Longsword", tier: 1, magic: false, pages: ["Page 115"], errata: true, trait: "Agility", range: "Melee", damage: "d10+3", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Battleaxe", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Strength", range: "Melee", damage: "d10+3", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Greatsword", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Strength", range: "Melee", damage: "d10+3", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Massive:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>; on a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Mace", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Strength", range: "Melee", damage: "d8+1", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Warhammer", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Strength", range: "Melee", damage: "d12+3", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Dagger", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+1", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Quarterstaff", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Instinct", range: "Melee", damage: "d10+3", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Cutlass", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Presence", range: "Melee", damage: "d8+1", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Rapier", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Presence", range: "Melee", damage: "d8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Halberd", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Strength", range: "Very Close", damage: "d10+2", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Spear", tier: 1, magic: false, pages: ["Page 115"], errata: true, trait: "Finesse", range: "Very Close", damage: "d8+3", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Shortbow", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Agility", range: "Far", damage: "d6+3", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Crossbow", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Finesse", range: "Far", damage: "d6+1", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Longbow", tier: 1, magic: false, pages: ["Page 115"], errata: false, trait: "Agility", range: "Very Far", damage: "d8+3", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Arcane Gauntlets", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Strength", range: "Melee", damage: "d10+3", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Hallowed Axe", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Strength", range: "Melee", damage: "d8+1", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Glowing Rings", tier: 1, magic: true, pages: ["Page 115"], errata: true, trait: "Agility", range: "Very Close", damage: "d10+2", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Hand Runes", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Instinct", range: "Very Close", damage: "d10", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Returning Blade", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Finesse", range: "Close", damage: "d8", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Returning:</em></strong> When this <a href='#define-weapon'>weapon</a> is <a href='#define-weapon'>thrown</a> within its <a href='#define-range'>range</a>, it appears in your hand immediately after the attack." },
{ label: "Shortstaff", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Instinct", range: "Close", damage: "d8+1", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Dualstaff", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Instinct", range: "Far", damage: "d6+3", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Scepter", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Presence", range: "Far", damage: "d6", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Presence, Melee, d8." },
{ label: "Wand", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Knowledge", range: "Far", damage: "d6+1", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Greatstaff", tier: 1, magic: true, pages: ["Page 115"], errata: false, trait: "Knowledge", range: "Very Far", damage: "d6", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Improved Broadsword", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Agility", range: "Melee", damage: "d8+3", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Improved Longsword", tier: 2, magic: false, pages: ["Page 116"], errata: true, trait: "Agility", range: "Melee", damage: "d10+6", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Improved Battleaxe", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Melee", damage: "d10+6", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Improved Greatsword", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Melee", damage: "d10+6", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Massive:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>; on a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Improved Mace", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Melee", damage: "d8+4", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Improved Warhammer", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Melee", damage: "d12+6", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Improved Dagger", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+4", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Improved Quarterstaff", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Instinct", range: "Melee", damage: "d10+6", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Improved Cutlass", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Presence", range: "Melee", damage: "d8+4", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Improved Rapier", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Presence", range: "Melee", damage: "d8+3", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Improved Halberd", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Very Close", damage: "d10+5", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Improved Spear", tier: 2, magic: false, pages: ["Page 116"], errata: true, trait: "Finesse", range: "Very Close", damage: "d8+6", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Improved Shortbow", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Agility", range: "Far", damage: "d6+6", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Improved Crossbow", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Finesse", range: "Far", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Improved Longbow", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Agility", range: "Very Far", damage: "d8+6", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Gilded Falchion", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Melee", damage: "d10+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Knuckle Blades", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Melee", damage: "d10+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Brutal:</em></strong> When you roll the maximum value on a <a href='#define-damage-roll'>damage die</a>, roll an additional <a href='#define-damage-roll'>damage die</a>." },
{ label: "Urok Broadsword", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+3", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Deadly:</em></strong> When you deal <a href='#define-hit-point'>Severe</a> damage, the target must mark an additional <a href='#define-hit-point'>Hit Point</a>." },
{ label: "Bladed Whip", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Agility", range: "Very Close", damage: "d8+3", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Steelforged Halberd", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Very Close", damage: "d8+4", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Scary:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, the target must mark a <a href='#define-stress'>Stress</a>." },
{ label: "War Scythe", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Finesse", range: "Very Close", damage: "d8+5", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Blunderbuss", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Finesse", range: "Close", damage: "d8+6", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Reloading:</em></strong> After you make an <a href='#define-attack-roll'>attack</a>, roll a <strong>d6</strong>. On a result of 1, you must mark a <a href='#define-stress'>Stress</a> to reload this <a href='#define-weapon'>weapon</a> before you can fire it again." },
{ label: "Greatbow", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Strength", range: "Far", damage: "d6+6", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Finehair Bow", tier: 2, magic: false, pages: ["Page 116"], errata: false, trait: "Agility", range: "Very Far", damage: "d6+5", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Improved Arcane Gauntlets", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Strength", range: "Melee", damage: "d10+6", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Improved Hallowed Axe", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Strength", range: "Melee", damage: "d8+4", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Improved Glowing Rings", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Agility", range: "Very Close", damage: "d10+5", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Improved Hand Runes", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Instinct", range: "Very Close", damage: "d10+3", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Improved Returning Blade", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Finesse", range: "Close", damage: "d8+3", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Returning:</em></strong> When this <a href='#define-weapon'>weapon</a> is <a href='#define-weapon'>thrown</a> within its <a href='#define-range'>range</a>, it appears in your hand immediately after the attack." },
{ label: "Improved Shortstaff", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Instinct", range: "Close", damage: "d8+4", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Improved Dualstaff", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Instinct", range: "Far", damage: "d6+6", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Improved Scepter", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Presence", range: "Far", damage: "d6+3", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Presence, Melee, d8+3." },
{ label: "Improved Wand", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Knowledge", range: "Far", damage: "d6+4", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Improved Greatstaff", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Knowledge", range: "Very Far", damage: "d6+3", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Ego Blade", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Agility", range: "Melee", damage: "d12+4", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Pompous:</em></strong> You must have a <a href='#define-presence'>Presence</a> of 0 or lower to use this <a href='#define-weapon'>weapon</a>." },
{ label: "Casting Sword", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Strength", range: "Melee", damage: "d10+4", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Knowledge, Far, d6+3." },
{ label: "Devouring Dagger", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+4", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Scary:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, the target must mark a <a href='#define-stress'>Stress</a>." },
{ label: "Hammer of Exota", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Instinct", range: "Melee", damage: "d8+6", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Eruptive:</em></strong> On a successful attack against a target within <a href='#define-range'>Melee</a> range, all other adversaries within <a href='#define-range'>Very Close</a> range must succeed on a <a href='#define-reaction-roll'>Reaction Roll</a> (14) or take half damage." },
{ label: "Yutari Bloodbow", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Finesse", range: "Far", damage: "d6+4", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Brutal:</em></strong> When you roll the maximum value on a <a href='#define-damage-roll'>damage die</a>, roll an additional <a href='#define-damage-roll'>damage die</a>." },
{ label: "Elder Bow", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Instinct", range: "Far", damage: "d6+4", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Scepter of Elias", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Presence", range: "Far", damage: "d6+3", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Invigorating:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll a <strong>d4</strong>. On a result of 4, clear a <a href='#define-stress'>Stress</a>." },
{ label: "Wand of Enthrallment", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Presence", range: "Far", damage: "d6+4", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Persuasive:</em></strong> Before you make a <a href='#define-trait-roll'>Presence Roll</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a +2 bonus to the result." },
{ label: "Keeper's Staff", tier: 2, magic: true, pages: ["Page 117"], errata: false, trait: "Knowledge", range: "Far", damage: "d6+4", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Advanced Broadsword", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Agility", range: "Melee", damage: "d8+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Advanced Longsword", tier: 3, magic: false, pages: ["Page 118"], errata: true, trait: "Agility", range: "Melee", damage: "d10+9", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Advanced Battleaxe", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d10+9", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Advanced Greatsword", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d10+9", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Massive:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>; on a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Advanced Mace", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d8+7", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Advanced Warhammer", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d12+9", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Advanced Dagger", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+7", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Advanced Quarterstaff", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Instinct", range: "Melee", damage: "d10+9", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Advanced Cutlass", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Presence", range: "Melee", damage: "d8+7", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Advanced Rapier", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Presence", range: "Melee", damage: "d8+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Advanced Halberd", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Very Close", damage: "d10+8", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Advanced Spear", tier: 3, magic: false, pages: ["Page 118"], errata: true, trait: "Finesse", range: "Very Close", damage: "d8+9", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Advanced Shortbow", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Agility", range: "Far", damage: "d6+9", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Advanced Crossbow", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Finesse", range: "Far", damage: "d6+7", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Advanced Longbow", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Agility", range: "Very Far", damage: "d8+9", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Flickerfly Blade", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Agility", range: "Melee", damage: "d8+5", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Sharpening:</em></strong> Gain a bonus to your <a href='#define-damage-roll'>damage rolls</a> equal to your <a href='#define-agility'>Agility</a>." },
{ label: "Bravesword", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d12+7", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Brave:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>; +3 to Severe <a href='#define-hit-point'>damage threshold</a>" },
{ label: "Hammer of Wrath", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d10+7", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Devastating:</em></strong> Before you make an <a href='#define-attack-roll'>attack roll</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to use a <strong>d20</strong> as your <a href='#define-damage-roll'>damage die</a>." },
{ label: "Labrys Axe", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Strength", range: "Melee", damage: "d10+7", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Protective:</em></strong> +1 to <a href='#define-armor'>Armor Score</a>" },
{ label: "Meridian Cutlass", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Presence", range: "Melee", damage: "d10+5", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Dueling:</em></strong> When there are no other creatures within <a href='#define-range'>Close</a> range of the target, gain advantage on your <a href='#define-attack-roll'>attack roll</a> against them." },
{ label: "Retractable Saber", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Presence", range: "Melee", damage: "d10+7", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Retractable:</em></strong> The blade can be hidden in the hilt to avoid detection." },
{ label: "Double Flail", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Agility", range: "Very Close", damage: "d10+8", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Talon Blades", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Finesse", range: "Close", damage: "d10+7", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Brutal:</em></strong> When you roll the maximum value on a <a href='#define-damage-roll'>damage die</a>, roll an additional <a href='#define-damage-roll'>damage die</a>." },
{ label: "Black Powder Revolver", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Finesse", range: "Far", damage: "d6+8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Reloading:</em></strong> After you make an <a href='#define-attack-roll'>attack</a>, roll a <strong>d6</strong>. On a result of 1, you must mark a <a href='#define-stress'>Stress</a> to reload this <a href='#define-weapon'>weapon</a> before you can fire it again." },
{ label: "Spiked Bow", tier: 3, magic: false, pages: ["Page 118"], errata: false, trait: "Agility", range: "Very Far", damage: "d6+7", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Agility, Melee, d10+5." },
{ label: "Advanced Arcane Gauntlets", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Strength", range: "Melee", damage: "d10+9", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Advanced Hallowed Axe", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Strength", range: "Melee", damage: "d8+7", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Advanced Glowing Rings", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Agility", range: "Very Close", damage: "d10+8", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Advanced Hand Runes", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Instinct", range: "Very Close", damage: "d10+6", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Advanced Returning Blade", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Finesse", range: "Close", damage: "d8+6", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Returning:</em></strong> When this <a href='#define-weapon'>weapon</a> is <a href='#define-weapon'>thrown</a> within its <a href='#define-range'>range</a>, it appears in your hand immediately after the attack." },
{ label: "Advanced Shortstaff", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Instinct", range: "Close", damage: "d8+7", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Advanced Dualstaff", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Instinct", range: "Far", damage: "d6+9", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Advanced Scepter", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Presence", range: "Far", damage: "d6+6", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Presence, Melee, d8+4." },
{ label: "Advanced Wand", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Knowledge", range: "Far", damage: "d6+7", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Advanced Greatstaff", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Knowledge", range: "Very Far", damage: "d6+6", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Axe of Fortunis", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Strength", range: "Melee", damage: "d10+8", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Lucky:</em></strong> On a failed <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to <a href='#define-reroll'>reroll</a> your attack." },
{ label: "Blessed Anlace", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Instinct", range: "Melee", damage: "d10+6", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Healing:</em></strong> During <a href='#define-downtime'>downtime</a>, automatically clear a <a href='#define-hit-point'>Hit Point</a>." },
{ label: "Ghostblade", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Presence", range: "Melee", damage: "d10+7 phy or", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Otherworldly:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can deal <a href='#define-damage-type'>physical or magic damage</a>." },
{ label: "Runes of Ruination", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Knowledge", range: "Very Close", damage: "d20+4", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Painful:</em></strong> Each time you make a successful <a href='#define-attack-roll'>attack</a>, you must mark a <a href='#define-stress'>Stress</a>." },
{ label: "Widogast Pendant", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Knowledge", range: "Close", damage: "d10+5", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Timebending:</em></strong> You choose the target of your attack after making your <a href='#define-attack-roll'>attack roll</a>." },
{ label: "Gilded Bow", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Finesse", range: "Far", damage: "d6+7", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Self-Correcting:</em></strong> When you roll a 1 on a <a href='#define-damage-roll'>damage die</a>, it deals 6 damage instead." },
{ label: "Firestaff", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Instinct", range: "Far", damage: "d6+7", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Burning:</em></strong> When you roll a 6 on a <a href='#define-damage-roll'>damage die</a>, the target must mark a <a href='#define-stress'>Stress</a>." },
{ label: "Mage Orb", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Knowledge", range: "Far", damage: "d6+7", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Ilmari's Rifle", tier: 3, magic: true, pages: ["Page 119"], errata: false, trait: "Finesse", range: "Very Far", damage: "d6+6", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Reloading:</em></strong> After you make an <a href='#define-attack-roll'>attack</a>, roll a d6. On a result of 1, you must mark a <a href='#define-stress'>Stress</a> to reload this weapon before you can fire it again." },
{ label: "Legendary Broadsword", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Agility", range: "Melee", damage: "d8+9", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Legendary Longsword", tier: 4, magic: false, pages: ["Page 120"], errata: true, trait: "Agility", range: "Melee", damage: "d10+12", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Legendary Battleaxe", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Melee", damage: "d10+12", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Legendary Greatsword", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Melee", damage: "d10+12", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Massive:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>; on a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Legendary Mace", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Melee", damage: "d8+10", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Legendary Warhammer", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Melee", damage: "d12+12", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Legendary Dagger", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+10", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Legendary Quarterstaff", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Instinct", range: "Melee", damage: "d10+12", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Legendary Cutlass", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Presence", range: "Melee", damage: "d8+10", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Legendary Rapier", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Presence", range: "Melee", damage: "d8+9", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Legendary Halberd", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Very Close", damage: "d10+11", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Legendary Spear", tier: 4, magic: false, pages: ["Page 120"], errata: true, trait: "Finesse", range: "Very Close", damage: "d8+12", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Legendary Shortbow", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Agility", range: "Far", damage: "d6+12", damagetype: "phy", burden: "Two-Handed", feature: "" },
{ label: "Legendary Crossbow", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Finesse", range: "Far", damage: "d6+10", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Legendary Longbow", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Agility", range: "Very Far", damage: "d8+12", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Cumbersome:</em></strong> &minus;1 to <a href='#define-finesse'>Finesse</a>" },
{ label: "Dual-Ended Sword", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Agility", range: "Melee", damage: "d10+9", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Impact Gauntlet", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Melee", damage: "d10+11", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Concussive:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to knock the target back to <a href='#define-range'>Far</a> range." },
{ label: "Sledge Axe", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Strength", range: "Melee", damage: "d12+13", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Destructive:</em></strong> &minus;1 to <a href='#define-agility'>Agility</a>; on a successful <a href='#define-attack-roll'>attack</a>, all adversaries within <a href='#define-range'>Very Close</a> range must mark a <a href='#define-stress'>Stress</a>." },
{ label: "Curved Dagger", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+9", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Serrated:</em></strong> When you roll a 1 on a <a href='#define-damage-roll'>damage die</a>, it deals 8 damage instead." },
{ label: "Extended Polearm", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Finesse", range: "Very Close", damage: "d8+10", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Long:</em></strong> This weapon's <a href='#define-attack-roll'>attack</a> targets all <a href='#define-adversary'>adversaries</a> in a line within <a href='#define-range'>range</a>." },
{ label: "Swinging Ropeblade", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Presence", range: "Close", damage: "d8+9", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Grappling:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to <a href='#define-condition'><em>Restrain</em></a> the target or pull them into <a href='#define-range'>Melee</a> range with you." },
{ label: "Ricochet Axes", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Agility", range: "Far", damage: "d6+11", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Bouncing:</em></strong> Mark 1 or more <a href='#define-stress'>Stress</a> to hit that many targets in <a href='#define-range'>range</a> of the <a href='#define-attack-roll'>attack</a>." },
{ label: "Aantari Bow", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Finesse", range: "Far", damage: "d6+11", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Hand Cannon", tier: 4, magic: false, pages: ["Page 120"], errata: false, trait: "Finesse", range: "Very Far", damage: "d6+12", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Reloading:</em></strong> After you make an <a href='#define-attack-roll'>attack</a>, roll a <strong>d6</strong>. On a 1, you must mark <a href='#define-stress'>Stress</a> to reload this <a href='#define-weapon'>weapon</a> before you can fire it again." },
{ label: "Legendary Arcane Gauntlets", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Strength", range: "Melee", damage: "d10+12", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Legendary Hallowed Axe", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Strength", range: "Melee", damage: "d8+10", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Legendary Glowing Rings", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Agility", range: "Very Close", damage: "d10+11", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Legendary Hand Runes", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Instinct", range: "Very Close", damage: "d10+9", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Legendary Returning Blade", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Finesse", range: "Close", damage: "d8+9", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Returning:</em></strong> When this <a href='#define-weapon'>weapon</a> is <a href='#define-weapon'>thrown</a> within its <a href='#define-range'>range</a>, it appears in your hand immediately after the attack." },
{ label: "Legendary Shortstaff", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Instinct", range: "Close", damage: "d8+10", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Legendary Dualstaff", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Instinct", range: "Far", damage: "d8+12", damagetype: "mag", burden: "Two-Handed", feature: "" },
{ label: "Legendary Scepter", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Presence", range: "Far", damage: "d6+9", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Presence, Melee, d8+6." },
{ label: "Legendary Wand", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Knowledge", range: "Far", damage: "d6+10", damagetype: "mag", burden: "One-Handed", feature: "" },
{ label: "Legendary Greatstaff", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Knowledge", range: "Very Far", damage: "d6+9", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Sword of Light and Flame", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Strength", range: "Melee", damage: "d10+11", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Hot:</em></strong> This <a href='#define-weapon'>weapon</a> cuts through solid material." },
{ label: "Siphoning Gauntlets", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Presence", range: "Melee", damage: "d10+9", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Lifestealing:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll a <strong>d6</strong>. On a result of 6, clear a <a href='#define-hit-point'>Hit Point</a> or clear a <a href='#define-stress'>Stress</a>." },
{ label: "Midas Scythe", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Knowledge", range: "Melee", damage: "d10+9", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Greedy:</em></strong> Spend a handful of <a href='#define-gold'>gold</a> to gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> on a <a href='#define-damage-roll'>damage roll</a>." },
{ label: "Floating Bladeshards", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Instinct", range: "Close", damage: "d8+9", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Bloodstaff", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Instinct", range: "Far", damage: "d20+7", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Painful:</em></strong> Each time you make a successful attack, you must mark a <a href='#define-stress'>Stress</a>." },
{ label: "Thistlebow", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Instinct", range: "Far", damage: "d6+13", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Wand of Essek", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Knowledge", range: "Far", damage: "d8+13", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Timebending:</em></strong> You can choose the target of your attack after making your attack roll." },
{ label: "Magus Revolver", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Finesse", range: "Very Far", damage: "d6+13", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Reloading:</em></strong> After you make an <a href='#define-attack-roll'>attack</a>, roll a <strong>d6</strong>. On a result of 1, you must mark a <a href='#define-stress'>Stress</a> to reload this <a href='#define-weapon'>weapon</a> before you can fire it again." },
{ label: "Fusion Gloves", tier: 4, magic: true, pages: ["Page 121"], errata: false, trait: "Knowledge", range: "Very Far", damage: "d6+9", damagetype: "mag", burden: "Two-Handed", feature: "<strong><em>Bonded:</em></strong> Gain a bonus to your <a href='#define-damage-roll'>damage rolls</a> equal to your <a href='#define-level'>level</a>." },
{ label: "Light-Frame Wheelchair", tier: 1, magic: false, pages: ["Page 123"], errata: false, trait: "Agility", range: "Melee", damage: "d8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Improved Light-Frame Wheelchair", tier: 2, magic: false, pages: ["Page 123"], errata: false, trait: "Agility", range: "Melee", damage: "d8+3", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Advanced Light-Frame Wheelchair", tier: 3, magic: false, pages: ["Page 123"], errata: false, trait: "Agility", range: "Melee", damage: "d8+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Legendary Light-Frame Wheelchair", tier: 4, magic: false, pages: ["Page 123"], errata: false, trait: "Agility", range: "Melee", damage: "d8+9", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Quick:</em></strong> When you make an <a href='#define-attack-roll'>attack</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to target another creature within <a href='#define-range'>range</a>." },
{ label: "Heavy-Frame Wheelchair", tier: 1, magic: false, pages: ["Page 123"], errata: false, trait: "Strength", range: "Melee", damage: "d12+3", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Improved Heavy-Frame Wheelchair", tier: 2, magic: false, pages: ["Page 123"], errata: false, trait: "Strength", range: "Melee", damage: "d12+6", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Advanced Heavy-Frame Wheelchair", tier: 3, magic: false, pages: ["Page 123"], errata: false, trait: "Strength", range: "Melee", damage: "d12+9", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Legendary Heavy-Frame Wheelchair", tier: 4, magic: false, pages: ["Page 123"], errata: false, trait: "Strength", range: "Melee", damage: "d12+12", damagetype: "phy", burden: "Two-Handed", feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Arcane-Frame Wheelchair", tier: 1, magic: true, pages: ["Page 123"], errata: false, trait: "Spellcast", range: "Far", damage: "d6", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Improved Arcane-Frame Wheelchair", tier: 2, magic: true, pages: ["Page 123"], errata: false, trait: "Spellcast", range: "Far", damage: "d6+3", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Advanced Arcane-Frame Wheelchair", tier: 3, magic: true, pages: ["Page 123"], errata: false, trait: "Spellcast", range: "Far", damage: "d6+6", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" },
{ label: "Legendary Arcane-Frame Wheelchair", tier: 4, magic: true, pages: ["Page 123"], errata: false, trait: "Spellcast", range: "Far", damage: "d6+9", damagetype: "mag", burden: "One-Handed", feature: "<strong><em>Reliable:</em></strong> +1 to <a href='#define-attack-roll'>attack rolls</a>" }
];
// weapons, secondary
const weaponsecondaryList = [
{ label: "Shortsword", tier: 1, pages: ["Page 124"], errata: false, trait: "Agility", range: "Melee", damage: "d8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +2 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Round Shield", tier: 1, pages: ["Page 124"], errata: false, trait: "Strength", range: "Melee", damage: "d4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Protective:</em></strong> +1 to <a href='#define-armor'>Armor Score</a>" },
{ label: "Tower Shield", tier: 1, pages: ["Page 124"], errata: false, trait: "Strength", range: "Melee", damage: "d6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Barrier:</em></strong> +2 to <a href='#define-armor'>Armor Score</a>; &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Small Dagger", tier: 1, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Melee", damage: "d8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +2 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Whip", tier: 1, pages: ["Page 124"], errata: false, trait: "Presence", range: "Very Close", damage: "d6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Startling:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to crack the whip and force all <a href='#define-adversary'>adversaries</a> within <a href='#define-range'>Melee</a> range back to <a href='#define-range'>Close</a> range." },
{ label: "Grappler", tier: 1, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Close", damage: "d6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Hooked:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can pull the target into <a href='#define-range'>Melee</a> range." },
{ label: "Hand Crossbow", tier: 1, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Far", damage: "d6+1", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Improved Shortsword", tier: 2, pages: ["Page 124"], errata: false, trait: "Agility", range: "Melee", damage: "d8+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +3 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Improved Round Shield", tier: 2, pages: ["Page 124"], errata: false, trait: "Strength", range: "Melee", damage: "d4+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Protective:</em></strong> +2 to <a href='#define-armor'>Armor Score</a>" },
{ label: "Improved Tower Shield", tier: 2, pages: ["Page 124"], errata: false, trait: "Strength", range: "Melee", damage: "d6+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Barrier:</em></strong> +3 to <a href='#define-armor'>Armor Score</a>; &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Improved Small Dagger", tier: 2, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +3 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Improved Whip", tier: 2, pages: ["Page 124"], errata: false, trait: "Presence", range: "Very Close", damage: "d6+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Startling:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to crack the whip and force all <a href='#define-adversary'>adversaries</a> within <a href='#define-range'>Melee</a> range back to <a href='#define-range'>Close</a> range." },
{ label: "Improved Grappler", tier: 2, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Close", damage: "d6+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Hooked:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can pull the target into <a href='#define-range'>Melee</a> range." },
{ label: "Improved Hand Crossbow", tier: 2, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Far", damage: "d6+3", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Spiked Shield", tier: 2, pages: ["Page 124"], errata: false, trait: "Strength", range: "Melee", damage: "d6+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Double Duty:</em></strong> +1 to <a href='#define-armor'>Armor Score</a>; +1 to <a href='#define-weapon'>primary weapon</a> damage within <a href='#define-range'>Melee</a> range" },
{ label: "Parrying Dagger", tier: 2, pages: ["Page 124"], errata: false, trait: "Finesse", range: "Melee", damage: "d6+2", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Parry:</em></strong> When you are attacked, roll this weapon's <a href='#define-damage-roll'>damage dice</a>. If any of the attacker's damage dice rolled the same value as your dice, the matching results are discarded from the attacker's damage dice before the damage you take is totaled." },
{ label: "Returning Axe", tier: 2, pages: ["Page 124"], errata: false, trait: "Agility", range: "Close", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Returning:</em></strong> When this <a href='#define-weapon'>weapon</a> is <a href='#define-weapon'>thrown</a> within its <a href='#define-range'>range</a>, it appears in your hand immediately after the attack." },
{ label: "Advanced Shortsword", tier: 3, pages: ["Page 125"], errata: false, trait: "Agility", range: "Melee", damage: "d8+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +4 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Advanced Round Shield", tier: 3, pages: ["Page 125"], errata: false, trait: "Strength", range: "Melee", damage: "d4+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Protective:</em></strong> +3 to <a href='#define-armor'>Armor Score</a>" },
{ label: "Advanced Tower Shield", tier: 3, pages: ["Page 125"], errata: false, trait: "Strength", range: "Melee", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Barrier:</em></strong> +4 to <a href='#define-armor'>Armor Score</a>; &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Advanced Small Dagger", tier: 3, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +4 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Advanced Whip", tier: 3, pages: ["Page 125"], errata: false, trait: "Presence", range: "Very Close", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Startling:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to crack the whip and force all <a href='#define-adversary'>adversaries</a> within <a href='#define-range'>Melee</a> range back to <a href='#define-range'>Close</a> range." },
{ label: "Advanced Grappler", tier: 3, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Close", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Hooked:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can pull the target into <a href='#define-range'>Melee</a> range." },
{ label: "Advanced Hand Crossbow", tier: 3, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Far", damage: "d6+5", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Buckler", tier: 3, pages: ["Page 125"], errata: true, trait: "Agility", range: "Melee", damage: "d4+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Deflecting:</em></strong> When you are attacked, you can <strong><a href='#define-armor'>mark an Armor Slot</a></strong> to gain a bonus to your <a href='#define-evasion'>Evasion</a> equal to your available <a href='#define-armor'>Armor Slots</a> against the attack." },
{ label: "Powered Gauntlet", tier: 3, pages: ["Page 125"], errata: false, trait: "Knowledge", range: "Close", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Charged:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to gain a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a> on a <a href='#define-weapon'>primary weapon</a> attack." },
{ label: "Hand Sling", tier: 3, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Very Close", damage: "d6+4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Versatile:</em></strong> This <a href='#define-weapon'>weapon</a> can also be used with these statistics&mdash;Finesse, Close, d8+4." },
{ label: "Legendary Shortsword", tier: 4, pages: ["Page 125"], errata: false, trait: "Agility", range: "Melee", damage: "d8+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +5 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Legendary Round Shield", tier: 4, pages: ["Page 125"], errata: false, trait: "Strength", range: "Melee", damage: "d4+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Protective:</em></strong> +4 to <a href='#define-armor'>Armor Score</a>" },
{ label: "Legendary Tower Shield", tier: 4, pages: ["Page 125"], errata: false, trait: "Strength", range: "Melee", damage: "d6+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Barrier:</em></strong> +5 to <a href='#define-armor'>Armor Score</a>; &minus;1 to Evasion." },
{ label: "Legendary Small Dagger", tier: 4, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Melee", damage: "d8+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Paired:</em></strong> +5 to <a href='#define-weapon'>primary weapon</a> damage to targets within <a href='#define-range'>Melee</a> range" },
{ label: "Legendary Whip", tier: 4, pages: ["Page 125"], errata: false, trait: "Presence", range: "Very Close", damage: "d6+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Startling:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to crack the whip and force all <a href='#define-adversary'>adversaries</a> within <a href='#define-range'>Melee</a> range back to <a href='#define-range'>Close</a> range." },
{ label: "Legendary Grappler", tier: 4, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Close", damage: "d6+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Hooked:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, you can pull the target into <a href='#define-range'>Melee</a> range." },
{ label: "Legendary Hand Crossbow", tier: 4, pages: ["Page 125"], errata: false, trait: "Finesse", range: "Far", damage: "d6+7", damagetype: "phy", burden: "One-Handed", feature: "" },
{ label: "Braveshield", tier: 4, pages: ["Page 125"], errata: false, trait: "Agility", range: "Melee", damage: "d4+6", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Sheltering:</em></strong> When you mark an <a href='#define-armor'>Armor Slot</a>, it reduces damage for you and all allies within <a href='#define-range'>Melee</a> range of you who took the same damage." },
{ label: "Knuckle Claws", tier: 4, pages: ["Page 125"], errata: false, trait: "Strength", range: "Melee", damage: "d6+8", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Doubled Up:</em></strong> When you make an attack with your <a href='#define-weapon'>primary weapon</a>, you can deal damage to another target within <a href='#define-range'>Melee</a> range." },
{ label: "Primer Shard", tier: 4, pages: ["Page 125"], errata: false, trait: "Instinct", range: "Very Close", damage: "d4", damagetype: "phy", burden: "One-Handed", feature: "<strong><em>Locked On:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, your next attack against the same target with your <a href='#define-weapon'>primary weapon</a> automatically succeeds." },
];
// armor
const armorList = [
{ label: "Gambeson Armor", tier: 1, pages: ["Page 126"], errata: false, thresholdmajor: 5, thresholdsevere: 11, score: 3, feature: "<strong><em>Flexible:</em></strong> +1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Leather Armor", tier: 1, pages: ["Page 126"], errata: false, thresholdmajor: 6, thresholdsevere: 13, score: 3, feature: "" },
{ label: "Chainmail Armor", tier: 1, pages: ["Page 126"], errata: false, thresholdmajor: 7, thresholdsevere: 15, score: 4, feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Full Plate Armor", tier: 1, pages: ["Page 126"], errata: false, thresholdmajor: 8, thresholdsevere: 17, score: 4, feature: "<strong><em>Very Heavy:</em></strong> &minus;2 to <a href='#define-evasion'>Evasion</a>; &minus;1 to <a href='#define-agility'>Agility</a>" },
{ label: "Improved Gambeson Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 7, thresholdsevere: 16, score: 4, feature: "<strong><em>Flexible:</em></strong> +1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Improved Leather Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 9, thresholdsevere: 20, score: 4, feature: "" },
{ label: "Improved Chainmail Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 11, thresholdsevere: 24, score: 5, feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Improved Full Plate Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 13, thresholdsevere: 28, score: 5, feature: "<strong><em>Very Heavy:</em></strong> &minus;2 to <a href='#define-evasion'>Evasion</a>; &minus;1 to <a href='#define-agility'>Agility</a>" },
{ label: "Elundrian Chain Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 9, thresholdsevere: 21, score: 4, feature: "<strong><em>Warded:</em></strong> You reduce incoming <a href='#define-damage-type'>magic damage</a> by your <a href='#define-armor'>Armor Score</a> before applying it to your <a href='#define-hit-point'>damage thresholds</a>." },
{ label: "Harrowbone Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 9, thresholdsevere: 21, score: 4, feature: "<strong><em>Resilient:</em></strong> Before you mark your last <a href='#define-armor'>Armor Slot</a>, roll a <strong>d6</strong>. On a result of 6, reduce the severity by one <a href='#define-hit-point'>threshold</a> without marking an Armor Slot." },
{ label: "Irontree Breastplate Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 9, thresholdsevere: 20, score: 4, feature: "<strong><em>Reinforced:</em></strong> When you mark your last <a href='#define-armor'>Armor Slot</a>, increase your <a href='#define-hit-point'>damage thresholds</a> by +2 until you clear at least 1 Armor Slot." },
{ label: "Runetan Floating Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 9, thresholdsevere: 20, score: 4, feature: "<strong><em>Shifting:</em></strong> When you are targeted for an attack, you can <strong><a href='#define-armor'>mark an Armor Slot</a></strong> to give the attack roll against you <a href='#define-advantage'>disadvantage</a>." },
{ label: "Tyris Soft Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 8, thresholdsevere: 18, score: 5, feature: "<strong><em>Quiet:</em></strong> You gain a +2 bonus to rolls you make to move silently." },
{ label: "Rosewild Armor", tier: 2, pages: ["Page 126"], errata: false, thresholdmajor: 11, thresholdsevere: 23, score: 5, feature: "<strong><em>Hopeful:</em></strong> When you would spend a <a href='#define-hope'>Hope</a>, you can <strong><a href='#define-armor'>mark an Armor Slot</a></strong> instead." },
{ label: "Advanced Gambeson Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 9, thresholdsevere: 23, score: 5, feature: "<strong><em>Flexible:</em></strong> +1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Advanced Leather Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 11, thresholdsevere: 27, score: 5, feature: "" },
{ label: "Advanced Chainmail Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 13, thresholdsevere: 31, score: 6, feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Advanced Full Plate Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 15, thresholdsevere: 35, score: 6, feature: "<strong><em>Very Heavy:</em></strong> &minus;2 to <a href='#define-evasion'>Evasion</a>; &minus;1 to <a href='#define-agility'>Agility</a>" },
{ label: "Bellamoi Fine Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 11, thresholdsevere: 27, score: 5, feature: "<strong><em>Gilded:</em></strong> +1 to <a href='#define-presence'>Presence</a>" },
{ label: "Dragonscale Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 11, thresholdsevere: 27, score: 5, feature: "<strong><em>Impenetrable:</em></strong> Once per <a href='#define-downtime'>short rest</a>, when you would mark your last <a href='#define-hit-point'>Hit Point</a>, you can instead mark a <a href='#define-stress'>Stress</a>." },
{ label: "Spiked Plate Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 10, thresholdsevere: 25, score: 5, feature: "<strong><em>Sharp:</em></strong> On a successful attack against a target within <a href='#define-range'>Melee</a> range, add a <strong>d4</strong> to the damage roll." },
{ label: "Bladefare Armor", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 16, thresholdsevere: 39, score: 6, feature: "<strong><em>Physical:</em></strong> You can't mark an <a href='#define-armor'>Armor Slot</a> to reduce <a href='#define-damage-type'>magic damage</a>." },
{ label: "Monett's Cloak", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 16, thresholdsevere: 39, score: 6, feature: "<strong><em>Magic:</em></strong> You can't mark an <a href='#define-armor'>Armor Slot</a> to reduce <a href='#define-damage-type'>physical damage</a>." },
{ label: "Runes of Fortification", tier: 3, pages: ["Page 127"], errata: false, thresholdmajor: 17, thresholdsevere: 43, score: 6, feature: "<strong><em>Painful:</em></strong> Each time you mark an <a href='#define-armor'>Armor Slot</a>, you must mark a <a href='#define-stress'>Stress</a>." },
{ label: "Legendary Gambeson Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 11, thresholdsevere: 32, score: 6, feature: "<strong><em>Flexible:</em></strong> +1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Legendary Leather Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 13, thresholdsevere: 36, score: 6, feature: "" },
{ label: "Legendary Chainmail Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 15, thresholdsevere: 40, score: 7, feature: "<strong><em>Heavy:</em></strong> &minus;1 to <a href='#define-evasion'>Evasion</a>" },
{ label: "Legendary Full Plate Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 17, thresholdsevere: 44, score: 7, feature: "<strong><em>Very Heavy:</em></strong> &minus;2 to <a href='#define-evasion'>Evasion</a>; &minus;1 to <a href='#define-agility'>Agility</a>" },
{ label: "Dunamis Silkchain", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 13, thresholdsevere: 36, score: 7, feature: "<strong><em>Timeslowing:</em></strong> <strong><a href='#define-armor'>mark an Armor Slot</a></strong> to roll a <strong>d4</strong> and add its result as a bonus to your <a href='#define-evasion'>Evasion</a> against an incoming attack." },
{ label: "Channeling Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 13, thresholdsevere: 36, score: 5, feature: "<strong><em>Channeling:</em></strong> +1 to <a href='#define-spellcast-roll'>Spellcast Rolls</a>" },
{ label: "Emberwoven Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 13, thresholdsevere: 36, score: 6, feature: "<strong><em>Burning:</em></strong> When an <a href='#define-adversary'>adversary</a> attacks you within <a href='#define-range'>Melee</a> range, they mark a <a href='#define-stress'>Stress</a>." },
{ label: "Full Fortified Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 15, thresholdsevere: 40, score: 4, feature: "<strong><em>Fortified:</em></strong> When you mark an <a href='#define-armor'>Armor Slot</a>, you reduce the severity of an attack by two <a href='#define-hit-point'>thresholds</a> instead of one." },
{ label: "Veritas Opal Armor", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 13, thresholdsevere: 36, score: 6, feature: "<strong><em>Truthseeking:</em></strong> This <a href='#define-armor'>armor</a> glows when another creature within <a href='#define-range'>Close</a> range tells a lie." },
{ label: "Savior Chainmail", tier: 4, pages: ["Page 127"], errata: false, thresholdmajor: 18, thresholdsevere: 48, score: 8, feature: "<strong><em>Difficult:</em></strong> &minus;1 to all character <a href='#define-trait'>traits</a> and <a href='#define-evasion'>Evasion</a>" }
];
// loot
const lootList = [
{ label: "Premium Bedroll", name: "premium-bedroll", pages: ["Page 129"], errata: false, feature: "During <a href='#define-downtime'>downtime</a>, you automatically clear a <a href='#define-stress'>Stress</a>." },
{ label: "Piper Whistle", name: "piper-whistle", pages: ["Page 129"], errata: false, feature: "This handcrafted whistle has a distinctive sound. When you blow this whistle, its piercing tone can be heard within a 1-mile (1.6 km) radius." },
{ label: "Charging Quiver", name: "charging-quiver", pages: ["Page 129"], errata: false, feature: "When you succeed on an attack with an arrow stored in this quiver, gain a bonus to the <a href='#define-damage-roll'>damage roll</a> equal to your current <a href='#define-tier'>tier</a>." },
{ label: "Alistair's Torch", name: "alistairs-torch", pages: ["Page 129"], errata: false, feature: "You can light this magic torch at will. The flame's light fills a much larger space than it should, enough to illuminate a cave bright as day." },
{ label: "Speaking Orbs", name: "speaking-orbs", pages: ["Page 129"], errata: false, feature: "This pair of orbs allows any creatures holding them to communicate with each other across any distance." },
{ label: "Manacles", name: "manacles", pages: ["Page 129"], errata: false, feature: "This pair of locking cuffs comes with a key." },
{ label: "Arcane Cloak", name: "arcane-cloak", pages: ["Page 129"], errata: false, feature: "A creature with a <a href='#define-subclass'>Spellcast trait</a> wearing this cloak can adjust its color, texture, and size at will." },
{ label: "Woven Net", name: "woven-net", pages: ["Page 129"], errata: false, feature: "You can make a <a href='#define-trait-roll'>Finesse Roll</a> using this net to trap a small creature. A trapped target can break free with a successful <a href='#define-attack-roll'>Attack Roll</a> <strong>(16)</strong>." },
{ label: "Fire Jar", name: "fire-jar", pages: ["Page 129"], errata: false, feature: "You can pour out the strange liquid contents of this jar to instantly produce fire. The contents regenerate when you take a <a href='#define-downtime'>long rest</a>." },
{ label: "Suspended Rod", name: "suspended-rod", pages: ["Page 129"], errata: false, feature: "This flat rod is inscribed with runes. When you activate the rod, it is immediately suspended in place. Until the rod is deactivated, it can't move, doesn't abide by the rules of gravity, and remains in place." },
{ label: "Glamour Stone", name: "glamour-stone", pages: ["Page 129"], errata: false, feature: "Activate this pebble-sized stone to memorize the appearance of someone you can see. <strong><a href='#define-hope'>Spend a Hope</a></strong> to magically recreate this guise on yourself as an illusion." },
{ label: "Empty Chest", name: "empty-chest", pages: ["Page 129"], errata: false, feature: "This magical chest appears empty. When you speak a specific trigger word or action and open the chest, you can see the items stored within it." },
{ label: "Companion Case", name: "companion-case", pages: ["Page 129"], errata: false, feature: "This case can fit a small animal companion. While the companion is inside, the animal and case are <a href='#define-damage-type'>immune</a> to all damage and harmful effects." },
{ label: "Piercing Arrows", name: "piercing-arrows", pages: ["Page 129"], errata: false, feature: "Three times per <a href='#define-downtime'>rest</a> when you succeed on an attack with one of these arrows, you can add your <a href='#define-damage-roll'>Proficiency</a> to the <a href='#define-damage-roll'>damage roll</a>." },
{ label: "Valorstone", name: "valorstone", pages: ["Page 129"], errata: false, feature: "You can attach this stone to <a href='#define-armor'>armor</a> that doesn't already have a feature. The armor gains the following feature.<br><strong><em>Resilient:</em></strong> Before you mark your last <a href='#define-armor'>Armor Slot</a>, roll a <strong>d6</strong>. On a result of 6,reduce the severity by one threshold without marking an Armor Slot." },
{ label: "Skeleton Key", name: "skeleton-key", pages: ["Page 129"], errata: false, feature: "When you use this key to open a locked door, you gain advantage on the <a href='#define-trait-roll'>Finesse Roll</a>." },
{ label: "Arcane Prism", name: "arcane-prism", pages: ["Page 129"], errata: false, feature: "Position this prism in a location of your choosing and activate it. All allies within <a href='#define-range'>Close</a> range of it gain a +1 bonus to their <a href='#define-spellcast-roll'>Spellcast Rolls</a>. While activated, the prism can't be moved. Once the prism is deactivated, it can't be activated again until your next <a href='#define-downtime'>long rest</a>." },
{ label: "Minor Stamina Potion Recipe", name: "minor-stamina-potion-recipe", pages: ["Page 129"], errata: false, feature: "As a <a href='#define-downtime-move'>downtime move</a>, you can use the bone of a creature to craft a <a href='#define-consumable-minor-stamina-potion'>Minor Stamina Potion</a>." },
{ label: "Minor Health Potion Recipe", name: "minor-heath-potion-recipe", pages: ["Page 129"], errata: false, feature: "As a <a href='#define-downtime-move'>downtime move</a>, you can use a vial of blood to craft a <a href='#define-consumable-minor-health-potion'>Minor Health Potion</a>." },
{ label: "Homing Compasses", name: "homing-compasses", pages: ["Page 130"], errata: false, feature: "These two compasses point toward each other no matter how far apart they are." },
{ label: "Corrector Sprite", name: "corrector-sprite", pages: ["Page 130"], errata: false, feature: "This tiny sprite sits in the curve of your ear canal and whispers helpful advice during combat. Once per <a href='#define-downtime'>short rest</a>, you can gain <a href='#define-advantage'>advantage</a> on an <a href='#define-attack-roll'>attack roll</a>." },
{ label: "Gecko Gloves", name: "gecko-gloves", pages: ["Page 130"], errata: false, feature: "You can climb up vertical surfaces and across ceilings." },
{ label: "Lorekeeper", name: "lorekeeper", pages: ["Page 130"], errata: false, feature: "You can store the name and details of up to three hostile creatures inside this book. You gain a +1 bonus to <a href='#define-action-roll'>action rolls</a> against those creatures." },
{ label: "Vial of Darksmoke Recipe", name: "vial-of-darksmoke-recipe", pages: ["Page 130"], errata: false, feature: "As a <a href='#define-downtime-move'>downtime move</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to craft a <a href='#define-consumable-vial-of-darksmoke'>Vial of Darksmoke</a>." },
{ label: "Bloodstone", name: "bloodstone", pages: ["Page 130"], errata: false, feature: "You can attach this stone to a <a href='#define-weapon'>weapon</a> that doesn't already have a feature. The weapon gains the following feature.<br><strong><em>Brutal:</em><strong> When you roll the maximum value on a <a href='#define-damage-roll'>damage die</a>, roll an additional <a href='#define-damage-roll'>damage die</a>." },
{ label: "Greatstone", name: "greatstone", pages: ["Page 130"], errata: false, feature: "You can attach this stone to a <a href='#define-weapon'>weapon</a> that doesn't already have a feature. The weapon gains the following feature.<br><strong><em>Powerful:</em></strong> On a successful <a href='#define-attack-roll'>attack</a>, roll an additional <a href='#define-damage-roll'>damage die</a> and discard the lowest result." },
{ label: "Glider", name: "glider", pages: ["Page 130"], errata: false, feature: "While falling, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to deploy this small parachute and glide safely to the ground." },
{ label: "Ring of Silence", name: "ring-of-silence", pages: ["Page 130"], errata: false, feature: "<strong><a href='#define-hope'>Spend a Hope</a></strong> to activate this ring. Your footsteps are silent until your next <a href='#define-downtime'>rest</a>." },
{ label: "Calming Pendant", name: "calming-pendant", pages: ["Page 130"], errata: false, feature: "When you would mark your last <a href='#define-stress'>Stress</a>, roll a <strong>d6</strong>. On a result of 5 or higher, don't mark it." },
{ label: "Dual Flask", name: "dual-flask", pages: ["Page 130"], errata: false, feature: "This flask can hold two different liquids. You can swap between them by flipping a small switch on the flask's side." },
{ label: "Bag of Ficklesand", name: "bag-of-ficklesand", pages: ["Page 130"], errata: false, feature: "You can convince this small bag of sand to be much heavier or lighter with a successful <strong><a href='#define-trait-roll'>Presence Roll (10)</a></strong>. Additionally, on a successful <strong><a href='#define-trait-roll'>Finesse Roll (10)</a></strong>, you can blow a bit of sand into a target's face to make them <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>." },
{ label: "Ring of Resistance", name: "ring-of-resistance", pages: ["Page 130"], errata: false, feature: "Once per <a href='#define-downtime'>long rest</a>, you can activate this ring after a successful attack against you to halve the damage." },
{ label: "Phoenix Feather", name: "phoenix-feather", pages: ["Page 130"], errata: false, feature: "If you have at least one Phoenix Feather on you when you fall unconscious, you gain a +1 bonus to the roll you make to determine whether you gain a <a href='#define-death'>scar</a>." },
{ label: "Box of Many Goods", name: "box-of-many-goods", pages: ["Page 130"], errata: false, feature: "Once per <a href='#define-downtime'>long rest</a>, you can open this small box and roll a d12. On a result of 1&ndash;6, it's empty. On a result of 7&ndash;10, it contains one random common consumable. On a result of 11&ndash;12, it contains two random common <a href='#define-consumable'>consumables</a>." },
{ label: "Airblade Charm", name: "airblade-charm", pages: ["Page 130"], errata: false, feature: "You can attach this charm to a <a href='#define-weapon'>weapon</a> with a <a href='#define-range'>Melee</a> range. Three times per <a href='#define-downtime'>rest</a>, you can activate the charm and attack a target within <a href='#define-range'>Close</a> range." },
{ label: "Portal Seed", name: "portal-seed", pages: ["Page 130"], errata: false, feature: "You can plant this seed in the ground to grow a portal in that spot. The portal is ready to use in 24 hours. You can use this portal to travel to any other location where you planted a portal seed. A portal can be destroyed by dealing any amount of <a href='#define-damage-type'>magic damage</a> to it." },
{ label: "Paragon's Chain", name: "paragons-chain", pages: ["Page 130"], errata: false, feature: "As a <a href='#define-downtime-move'>downtime move</a>, you can meditate on an ideal or principle you hold dear and focus your will into this chain. Once per <a href='#define-downtime'>long rest</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to roll a <strong>d20</strong> as your <a href='#define-action-roll'>Hope Die</a> for rolls that directly align with that principle." },
{ label: "Elusive Amulet", name: "elusive-amulet", pages: ["Page 130"], errata: false, feature: "Once per <a href='#define-downtime'>long rest</a>, you can activate this amulet to become <a href='#define-condition'><em>Hidden</em></a> until you move. While <em>Hidden</em> in this way, you remain unseen even if an <a href='#define-adversary'>adversary</a> moves to where they would normally see you." },
{ label: "Hopekeeper Locket", name: "hopekeeper-locket", pages: ["Page 130"], errata: false, feature: "During a <a href='#define-downtime'>long rest</a>, if you have 6 <a href='#define-hope'>Hope</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to imbue this locket with your bountiful resolve. When you have 0 <a href='#define-hope'>Hope</a>, you can use the locket to immediately gain a <a href='#define-hope'>Hope</a>. The locket must be re-imbued before it can be used this way again." },
{ label: "Infinite Bag", name: "infinite-bag", pages: ["Page 130"], errata: false, feature: "When you store items in this bag, they are kept in a pocket dimension that never runs out of space. You can retrieve an item at any time." },
{ label: "Stride Relic", name: "stride-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-agility'>Agility</a>. You can only carry one relic." },
{ label: "Bolster Relic", name: "bolster-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-strength'>Strength</a>. You can only carry one relic." },
{ label: "Control Relic", name: "control-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to your  <a href='#define-finesse'>Finesse</a>. You can only carry one relic." },
{ label: "Attune Relic", name: "attune-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to your  <a href='#define-instinct'>Instinct</a>. You can only carry one relic." },
{ label: "Charm Relic", name: "charm-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to your  <a href='#define-presence'>Presence</a>. You can only carry one relic." },
{ label: "Enlighten Relic", name: "enlighten-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to your  <a href='#define-knowledge'>Knowledge</a>. You can only carry one relic." },
{ label: "Honing Relic", name: "honing-relic", pages: ["Page 130"], errata: false, feature: "You gain a +1 bonus to an <a href='#define-experience'>Experience</a> of your choice. You can only carry one relic." },
{ label: "Flickerfly Pendant", name: "flickerfly-pendant", pages: ["Page 130"], errata: false, feature: "While you carry this pendant, your <a href='#define-weapon'>weapons</a> with a <a href='#define-range'>Melee</a> range that deal <a href='#define-damage-type'>physical damage</a> have a gossamer sheen and can attack targets within <a href='#define-range'>Very Close</a> range." },
{ label: "Lakestrider Boots", name: "laskestrider-boots", pages: ["Page 130"], errata: false, feature: "You can walk on the surface of water as if it were soft ground.</span></td>" },
{ label: "Clay Companion", name: "clay-companion", pages: ["Page 131"], errata: false, feature: "When you sculpt this ball of clay into a clay animal companion, it behaves as that animal. For example, a clay spider can spin clay webs, while a clay bird can fly. The clay companion retains memory and identity across different shapes, but they can adopt new mannerisms with each form." },
{ label: "Mythic Dust Recipe", name: "mythic-dust-recipe", pages: ["Page 131"], errata: false, feature: "As a <a href='#define-downtime-move'>downtime move</a>, you can use a handful of fine gold dust to craft <a href='#define-consumable-mythic-dust'>Mythic Dust</a>." },
{ label: "Shard of Memory", name: "shard-of-memory", pages: ["Page 131"], errata: false, feature: "Once per <a href='#define-downtime'>long rest</a>, you can <strong><a href='#define-hope'>spend 2 Hope</a></strong> to recall a <a href='#define-domain-card'>domain card</a> from your <a href='#define-loadout'>vault</a> instead of paying its <a href='#define-domain-card'>Recall Cost</a>." },
{ label: "Gem of Alacrity", name: "gem-of-alacrity", pages: ["Page 131"], errata: false, feature: "You can attach this gem to a <a href='#define-weapon'>weapon</a>, allowing you to use your <a href='#define-agility'>Agility</a> when making an <a href='#define-attack-roll'>attack</a> with that weapon." },
{ label: "Gem of Might", name: "gem-of-might", pages: ["Page 131"], errata: false, feature: "You can attach this gem to a <a href='#define-weapon'>weapon</a>, allowing you to use your <a href='#define-strength'>Strength</a> when making an <a href='#define-attack-roll'>attack</a> with that weapon." },
{ label: "Gem of Precision", name: "gem-of-precision", pages: ["Page 131"], errata: false, feature: "You can attach this gem to a <a href='#define-weapon'>weapon</a>, allowing you to use your <a href='#define-finesse'>Finesse</a> when making an <a href='#define-attack-roll'>attack</a> with that weapon." },
{ label: "Gem of Insight", name: "gem-of-insight", pages: ["Page 131"], errata: false, feature: "You can attach this gem to a <a href='#define-weapon'>weapon</a>, allowing you to use your <a href='#define-instinct'>Instinct</a> when making an <a href='#define-attack-roll'>attack</a> with that weapon." },
{ label: "Gem of Audacity", name: "gem-of-audacity", pages: ["Page 131"], errata: false, feature: "You can attach this gem to a <a href='#define-weapon'>weapon</a>, allowing you to use your <a href='#define-presence'>Presence</a> when making an <a href='#define-attack-roll'>attack</a> with that weapon." },
{ label: "Gem of Sagacity", name: "gem-of-sagacity", pages: ["Page 131"], errata: false, feature: "You can attach this gem to a <a href='#define-weapon'>weapon</a>, allowing you to use your <a href='#define-knowledge'>Knowledge</a> when making an <a href='#define-attack-roll'>attack</a> with that weapon." },
{ label: "Ring of Unbreakable Resolve", name: "ring-of-unbreakable-resolve", pages: ["Page 131"], errata: false, feature: "Once per session, when the GM spends a <a href='#define-fear'>Fear</a>, you can spend 4 <a href='#define-hope'>Hope</a> to cancel the effects of that spent <a href='#define-fear'>Fear</a>." },
{ label: "Belt of Unity", name: "belt-of-unity", pages: ["Page 131"], errata: false, feature: "Once per session, you can <strong><a href='#define-hope'>spend 5 Hope</a></strong> to lead a <a href='#define-tag-team-roll'>Tag Team Roll</a> with three PCs instead of two." }
];
// consumables
const consumableList = [
{ label: "Stride Potion", name: "stride-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your next <a href='#define-trait-roll'>Agility Roll</a>." },
{ label: "Bolster Potion", name: "bolster-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your next <a href='#define-trait-roll'>Strength Roll</a>." },
{ label: "Control Potion", name: "control-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your next <a href='#define-trait-roll'>Finesse Roll</a>." },
{ label: "Attune Potion", name: "attune-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your next <a href='#define-trait-roll'>Instinct Roll</a>." },
{ label: "Charm Potion", name: "charm-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your next <a href='#define-trait-roll'>Presence Roll</a>." },
{ label: "Enlighten Potion", name: "enlighten-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your next <a href='#define-trait-roll'>Knowledge Roll</a>." },
{ label: "Minor Health Potion", name: "minor-health-potion", pages: ["Page 132"], errata: false, feature: "Clear 1d4 <a href='#define-hit-point'>Hit Points</a>." },
{ label: "Minor Stamina Potion", name: "minor-stamina-potion", pages: ["Page 132"], errata: false, feature: "Clear 1d4 <a href='#define-stress'>Stress</a>." },
{ label: "Grindletooth Venom", name: "grindletooth-venom", pages: ["Page 132"], errata: false, feature: "You can apply this venom to a <a href='#define-weapon'>weapon</a> that deals <a href='#define-damage-type'>physical damage</a> to add a <strong>d6</strong> to your next <a href='#define-damage-roll'>damage roll</a> with that weapon." },
{ label: "Varik Leaves", name: "varik-leaves", pages: ["Page 132"], errata: false, feature: "You can eat these paired leaves to immediately gain 2 <a href='#define-hope'>Hope</a>." },
{ label: "Vial of Moondrip", name: "vial-of-moondrop", pages: ["Page 132"], errata: false, feature: "When you drink the contents of this vial, you can see in total darkness until your next <a href='#define-downtime'>rest</a>." },
{ label: "Unstable Arcane Shard", name: "unstable-arcane-shard", pages: ["Page 132"], errata: false, feature: "You can make a <a href='#define-trait-roll'>Finesse Roll</a> to throw this shard at a group of adversaries within <a href='#define-range'>Far</a> range. Targets you succeed against take <strong>1d20</strong> <a href='#define-damage-type'>magic damage</a>." },
{ label: "Potion of Stability", name: "potion-of-stability", pages: ["Page 132"], errata: false, feature: "You can drink this potion to choose one additional <a href='#define-downtime-move'>downtime move</a>." },
{ label: "Improved Grindletooth Venom", name: "improved-grindletooth-venom", pages: ["Page 132"], errata: false, feature: "You can apply this venom to a <a href='#define-weapon'>weapon</a> that deals <a href='#define-damage-type'>physical damage</a> to add a <strong>d8</strong> to your next <a href='#define-damage-roll'>damage roll</a> with that weapon." },
{ label: "Morphing Clay", name: "morphing-clay", pages: ["Page 132"], errata: false, feature: "You can spend 4 <a href='#define-hope'>Hope</a> to use this clay, altering your face enough to make you unrecognizable until your next <a href='#define-downtime'>rest</a>." },
{ label: "Vial of Darksmoke", name: "vial-of-darksmoke", pages: ["Page 132"], errata: false, feature: "When an <a href='#define-adversary'>adversary</a> attacks you, use this vial and roll a number of <strong>d6</strong> equal to your <a href='#define-agility'>Agility</a>. Add the highest result to your <a href='#define-evasion'>Evasion</a> against the attack." },
{ label: "Jumping Root", name: "jumping-root", pages: ["Page 132"], errata: false, feature: "Eat this root to leap up to <a href='#define-range'>Far</a> range once without needing to roll." },
{ label: "Snap Powder", name: "snap-powder", pages: ["Page 132"], errata: false, feature: "<strong><a href='#define-stress'>Mark a Stress</a></strong> and clear a <a href='#define-hit-point'>Hit Point</a>." },
{ label: "Health Potion", name: "health-potion", pages: ["Page 132"], errata: false, feature: "Clear 1d4+1 <a href='#define-hit-point'>Hit Points</a>." },
{ label: "Stamina Potion", name: "stamina-potion", pages: ["Page 132"], errata: false, feature: "Clear 1d4+1 <a href='#define-stress'>Stress</a>." },
{ label: "Armor Stitcher", name: "armor-stitcher", pages: ["Page 132"], errata: false, feature: "You can use this stitcher to spend any number of Hope and clear that many <a href='#define-armor'>Armor Slots</a>." },
{ label: "Gill Salve", name: "gill-salve", pages: ["Page 132"], errata: false, feature: "You can apply this salve to your neck to breathe underwater for a number of minutes equal to your <a href='#define-level'>level" },
{ label: "Replication Parchment", name: "replication-parchment", pages: ["Page 132"], errata: false, feature: "By touching this piece of parchment to another, you can perfectly copy the second parchment's contents. Once used, this parchment becomes mundane paper." },
{ label: "Improved Arcane Shard", name: "improved-arcane-shard", pages: ["Page 132"], errata: false, feature: "You can make a <a href='#define-trait-roll'>Finesse Roll</a> to throw this shard at a group of adversaries within <a href='#define-range'>Far</a> range. Targets you succeed against take <strong>2d20</strong> <a href='#define-damage-type'>magic damage</a>." },
{ label: "Major Stride Potion", name: "major-stride-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-agility'>Agility</a> until your next <a href='#define-downtime'>rest</a>." },
{ label: "Major Bolster Potion", name: "major-bolster-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-strength'>Strength</a> until your next <a href='#define-downtime'>rest</a>." },
{ label: "Major Control Potion", name: "major-control-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-finesse'>Finesse</a> until your next <a href='#define-downtime'>rest</a>." },
{ label: "Major Attune Potion", name: "major-attune-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-instinct'>Instinct</a> until your next <a href='#define-downtime'>rest</a>." },
{ label: "Major Charm Potion", name: "major-charm-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-presence'>Presence</a> until your next <a href='#define-downtime'>rest</a>." },
{ label: "Major Enlighten Potion", name: "major-enlighten-potion", pages: ["Page 132"], errata: false, feature: "You gain a +1 bonus to your <a href='#define-knowledge'>Knowledge</a> until your next <a href='#define-downtime'>rest</a>." },
{ label: "Blood of the Yorgi", name: "blood-of-the-yorgi", pages: ["Page 132"], errata: false, feature: "You can drink this blood to disappear from where you are and immediately reappear at a point you can see within <a href='#define-range'>Very Far</a> range." },
{ label: "Homet's Secret Potion", name: "homets-secret-potion", pages: ["Page 132"], errata: false, feature: "After drinking this potion, the next successful <a href='#define-attack-roll'>attack</a> you make <a href='#define-damage-roll'>critically succeeds</a>." },
{ label: "Redthorn Saliva", name: "redthorn-saliva", pages: ["Page 132"], errata: false, feature: "You can apply this saliva to a <a href='#define-weapon'>weapon</a> that deals <a href='#define-damage-type'>physical damage</a> to add a <strong>d12</strong> to your next <a href='#define-damage-roll'>damage roll</a> with that weapon." },
{ label: "Channelstone", name: "channelstone", pages: ["Page 132"], errata: false, feature: "You can use this stone to take a spell or grimoire from your <a href='#define-loadout'>vault</a>, use it once, and return it to your <a href='#define-loadout'>vault</a>." },
{ label: "Mythic Dust", name: "mythic-dust", pages: ["Page 133"], errata: false, feature: "You can apply this dust to a <a href='#define-weapon'>weapon</a> that deals <a href='#define-damage-type'>magic damage</a> to add a <strong>d12</strong> to your next <a href='#define-damage-roll'>damage roll</a> with that weapon." },
{ label: "Acidpaste", name: "acidpaste", pages: ["Page 133"], errata: false, feature: "This paste eats away walls and other surfaces in bright flashes." },
{ label: "Hopehold Flare", name: "hopehold-flare", pages: ["Page 133"], errata: false, feature: "When you use this flare, allies within <a href='#define-range'>Close</a> range roll a <strong>d6</strong> when they <strong><a href='#define-hope'>spend a Hope</a></strong>. On a result of 6, they gain the effect of that <a href='#define-hope'>Hope</a> without spending it. The flare lasts until the end of the scene." },
{ label: "Major Arcane Shard", name: "major-arcane-shard", pages: ["Page 133"], errata: false, feature: "You can make a <a href='#define-trait-roll'>Finesse Roll</a> to throw this shard at a group of adversaries within <a href='#define-range'>Far</a> range. Targets you succeed against take <strong>4d20</strong> <a href='#define-damage-type'>magic damage</a>." },
{ label: "Featherbone", name: "featherbone", pages: ["Page 133"], errata: false, feature: "You can use this bone to control your falling speed for a number of minutes equal to your <a href='#define-level'>level</a>." },
{ label: "Circle of the Void", name: "circle-of-the-void", pages: ["Page 133"], errata: false, feature: "<strong><a href='#define-stress'>Mark a Stress</a></strong> to create a void that extends up to <a href='#define-range'>Far</a> range. No magic can be cast inside the void, and creatures within the void are <a href='#define-damage-type'>immune</a> to <a href='#define-damage-type'>magic damage</a>." },
{ label: "Sun Tree Sap", name: "sun-tree-sap", pages: ["Page 133"], errata: false, feature: "Consume this sap to roll a <strong>d6</strong>. On a result of 5&ndash;6, clear 2 <a href='#define-hit-point'>Hit Points</a>. On a result of 2&ndash;4, clear 3 <a href='#define-stress'>Stress</a>. On a result of 1, see through the veil of death and return unscathed, gaining one scar." },
{ label: "Dripfang Poison", name: "dripfang-poison", pages: ["Page 133"], errata: false, feature: "A creature who consumes this poison takes <strong>2d10</strong> <a href='#define-damage-type'>direct magic damage</a>." },
{ label: "Major Health Potion", name: "major-health-potion", pages: ["Page 133"], errata: false, feature: "Clear <strong>1d4+2</strong> <a href='#define-hit-point'>Hit Points</a>." },
{ label: "Major Stamina Potion", name: "major-stamina-potion", pages: ["Page 133"], errata: false, feature: "Clear <strong>1d4+2</strong> <a href='#define-stress'>Stress</a>." },
{ label: "Ogre Musk", name: "ogre-musk", pages: ["Page 133"], errata: false, feature: "You can use this musk to prevent anyone from tracking you by mundane or magical means until your next <a href='#define-downtime'>rest</a>." },
{ label: "Wingsprout", name: "wingsprout", pages: ["Page 133"], errata: false, feature: "You gain magic wings that allow you to fly for a number of minutes equal to your <a href='#define-level'>level</a>." },
{ label: "Jar of Lost Voices", name: "jar-of-lost-voices", pages: ["Page 133"], errata: false, feature: "You can open this jar to release a deafening echo of voices for a number of minutes equal to your <a href='#define-instinct'>Instinct</a>. Creatures within <a href='#define-range'>Far</a> range unprepared for the sound take <strong>6d8</strong> <a href='#define-damage-type'>magic damage</a>." },
{ label: "Dragonbloom Tea", name: "dragonbloom-tea", pages: ["Page 133"], errata: false, feature: "You can drink this tea to unleash a fiery breath attack. Make an <strong><a href='#define-trait-roll'>Instinct Roll</a></strong> against all adversaries in front of you within <a href='#define-range'>Close</a> range. Targets you succeed against take <strong>2d20</strong> <a href='#define-damage-type'>physical damage</a> using your Proficiency." },
{ label: "Bridge Seed", name: "bridge-seed", pages: ["Page 133"], errata: false, feature: "Thick vines grow from your location to a point of your choice within <a href='#define-range'>Far</a> range, allowing you to climb up or across them. The vines dissipate on your next <a href='#define-downtime'>short rest</a>." },
{ label: "Sleeping Sap", name: "sleeping-sap", pages: ["Page 133"], errata: false, feature: "You can drink this potion to fall asleep for a full night's rest. You clear all <a href='#define-stress'>Stress</a> upon waking." },
{ label: "Feast of Xuria", name: "feast-of-xuria", pages: ["Page 133"], errata: false, feature: "You can eat this meal to clear all <a href='#define-hit-point'>Hit Points</a> and <a href='#define-stress'>Stress</a> and gain <strong>1d4</strong> <a href='#define-hope'>Hope</a>." },
{ label: "Bonding Honey", name: "bonding-honey", pages: ["Page 133"], errata: false, feature: "This honey can be used to glue two objects together permanently." },
{ label: "Shrinking Potion", name: "shrinking-potion", pages: ["Page 133"], errata: false, feature: "You can drink this potion to halve your size until you choose to drop this form or your next <a href='#define-downtime'>rest</a>. While in this form, you have a +2 bonus to <a href='#define-agility'>Agility</a> and a &ndash;1 penalty to your Proficiency." },
{ label: "Growing Potion", name: "growing-potion", pages: ["Page 133"], errata: false, feature: "You can drink this potion to double your size until you choose to drop this form or your next <a href='#define-downtime'>rest</a>. While in this form, you have a +2 bonus to <a href='#define-strength'>Strength</a> and a +1 bonus to your <a href='#define-damage-roll'>Proficiency</a>." },
{ label: "Knowledge Stone", name: "knowledge-stone", pages: ["Page 133"], errata: false, feature: "If you die while holding this stone, an ally can take a card from your loadout to place in their <a href='#define-loadout'>loadout or vault</a>. After they take this knowledge, the stone crumbles." },
{ label: "Sweet Moss", name: "sweet-moss", pages: ["Page 133"], errata: true, feature: "You can consume this moss during a rest to clear <strong>1d10</strong> <a href='#define-hit-point'>Hit Points</a> or <strong>1d10</strong> <a href='#define-stress'>Stress</a>." },
{ label: "Blinding Orb", name: "blinding-orb", pages: ["Page 133"], errata: false, feature: "You can activate this orb to create a flash of bright light. All targets within <a href='#define-range'>Close</a> range become <a href='#define-condition'><em>Vulnerable</em></a> until they mark <a href='#define-hit-point'>Hit Points</a>." },
{ label: "Death Tea", name: "death-tea", pages: ["Page 133"], errata: false, feature: "After you drink this tea, you instantly kill your target when you <a href='#define-damage-roll'>critically succeed</a> on an <a href='#define-attack-roll'>attack</a>. If you don't critically succeed on an attack before your next <a href='#define-downtime'>long rest</a>, you die." },
{ label: "Mirror of Marigold", name: "mirror-of-marigold", pages: ["Page 133"], errata: false, feature: "When you take <a href='#define-hit-point'>damage</a>, you can <strong><a href='#define-hope'>spend a Hope</a></strong> to negate that damage, after which the mirror shatters." },
{ label: "Stardrop", name: "stardrop", pages: ["Page 133"], errata: false, feature: "You can use this stardrop to summon a hailstorm of comets that deals <strong>8d20</strong> <a href='#define-damage-type'>physical damage</a> to all targets within <a href='#define-range'>Very Far</a> range." }
];
const goldList = [
{ label: "Meals for a party of adventurers per night", gold: "1 Handful", coins: "10" },
{ label: "Standard inn room per night", gold: "1 Handful", coins: "10" },
{ label: "Luxury inn room per night", gold: "1 Bag", coins: "100" },
{ label: "Carriage ride", gold: "2 Handfuls", coins: "20" },
{ label: "Mount (horse, mule, etc.)", gold: "3 Bags", coins: "300" },
{ label: "Specialized tools", gold: "3 Handfuls", coins: "30" },
{ label: "Fine clothing", gold: "3 Handfuls", coins: "30" },
{ label: "Luxury clothing", gold: "1 Bag", coins: "100" },
{ label: "Tier 1 weapon or armor", gold: "1&ndash;5 Handfuls", coins: "10&ndash;50" },
{ label: "Tier 2 weapon or armor", gold: "1&ndash;2 Bags", coins: "100&ndash;200" },
{ label: "Tier 3 weapon or armor", gold: "5&ndash;10 Bags", coins: "500&ndash;1000" },
{ label: "Tier 4 weapon or armor", gold: "1&ndash;2 Chests", coins: "1000&ndash;2000" },
];
// die sizes
const diceList = ["d1", "d2", "d4", "d6", "d8", "d10", "d12", "d20"];
// loot percentages 1d12 to 5d12, 2d20 to 3d20
const chance1d12 = ["8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","8.33%","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;"]
const chance2d12 = ["&mdash;","0.69%","1.39%","2.08%","2.78%","3.47%","4.17%","4.86%","5.56%","6.25%","6.94%","7.64%","8.33%","7.64%","6.94%","6.25%","5.56%","4.86%","4.17%","3.47%","2.78%","2.08%","1.39%","0.69%","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;"]
const chance3d12 = ["&mdash;","&mdash;","0.06%","0.17%","0.35%","0.58%","0.87%","1.22%","1.62%","2.08%","2.60%","3.18%","3.82%","4.51%","5.09%","5.56%","5.90%","6.13%","6.25%","6.25%","6.13%","5.90%","5.56%","5.09%","4.51%","3.82%","3.18%","2.60%","2.08%","1.62%","1.22%","0.87%","0.58%","0.35%","0.17%","0.06%","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;"]
const chance4d12 = ["&mdash;","&mdash;","&mdash;","0.00%","0.02%","0.05%","0.10%","0.17%","0.27%","0.41%","0.58%","0.80%","1.06%","1.38%","1.76%","2.17%","2.62%","3.09%","3.55%","4.00%","4.42%","4.79%","5.11%","5.36%","5.52%","5.57%","5.52%","5.36%","5.11%","4.79%","4.42%","4.00%","3.55%","3.09%","2.62%","2.17%","1.76%","1.38%","1.06%","0.80%","0.58%","0.41%","0.27%","0.17%","0.10%","0.05%","0.02%","0.00%","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;","&mdash;"]
const chance5d12 = ["&mdash;","&mdash;","&mdash;","&mdash;","0.00%","0.00%","0.01%","0.01%","0.03%","0.05%","0.08%","0.13%","0.20%","0.29%","0.40%","0.55%","0.73%","0.95%","1.20%","1.49%","1.81%","2.15%","2.52%","2.90%","3.28%","3.65%","4.00%","4.31%","4.58%","4.78%","4.93%","5.00%","5.00%","4.93%","4.78%","4.58%","4.31%","4.00%","3.65%","3.28%","2.90%","2.52%","2.15%","1.81%","1.49%","1.20%","0.95%","0.73%","0.55%","0.40%","0.29%","0.20%","0.13%","0.08%","0.05%","0.03%","0.01%","0.01%","0.00%","0.00%"]
const chance2d20 = ["&mdash;","0.25%","0.50%","0.75%","1.00%","1.25%","1.50%","1.75%","2.00%","2.25%","2.50%","2.75%","3.00%","3.25%","3.50%","3.75%","4.00%","4.25%","4.50%","4.75%","5.00%","4.75%","4.50%","4.25%","4.00%","3.75%","3.50%","3.25%","3.00%","2.75%","2.50%","2.25%","2.00%","1.75%","1.50%","1.25%","1.00%","0.75%","0.50%","0.25%"]
const chance3d20 = ["&mdash;%","&mdash;%","0.01%","0.04%","0.07%","0.13%","0.19%","0.26%","0.35%","0.45%","0.56%","0.69%","0.82%","0.97%","1.14%","1.31%","1.50%","1.70%","1.91%","2.14%","2.38%","2.63%","2.85%","3.05%","3.23%","3.38%","3.50%","3.60%","3.67%","3.73%","3.75%","3.75%","3.73%","3.67%","3.60%","3.50%","3.38%","3.23%","3.05%","2.85%","2.63%","2.38%","2.14%","1.91%","1.70%","1.50%","1.31%","1.14%","0.97%","0.82%","0.69%","0.56%","0.45%","0.35%","0.26%","0.19%","0.13%","0.07%","0.04%","0.01%"]
// difficulty benchmark dice combinations
const d8d8 = [100.00,100.00,98.44,95.31,90.63,84.38,76.56,67.19,56.25,43.75,32.81,23.44,15.63,9.38,4.69,1.56,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d8d8d6 = [100.00,100.00,100.00,99.74,98.96,97.40,94.79,90.89,85.42,78.39,69.79,60.16,50.00,39.84,30.21,21.61,14.58,9.11,5.21,2.60,1.04,0.26,0,0,0,0,0,0,0,0];
const d8d8d8 = [100.00,100.00,100.00,99.80,99.22,98.05,96.09,93.16,89.06,83.59,76.56,68.36,59.38,50.00,40.63,31.64,23.44,16.41,10.94,6.84,3.91,1.95,0.78,0.20,0,0,0,0,0,0];
const d8d8dadvd6 = [90.89,85.42,78.39,69.79,60.16,50.00,39.84,30.21,21.61,14.58,9.11,5.21,2.60,1.04,0.26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d8d8dadvd8 = [83.59,76.56,68.36,59.38,50.00,40.63,31.64,23.44,16.41,10.94,6.84,3.91,1.95,0.78,0.20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d8d8dadvd10 = [74.53,66.88,58.59,50.00,41.41,33.13,25.47,18.75,13.13,8.75,5.47,3.13,1.56,0.63,0.16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8 = [100.00,100.00,98.75,96.25,92.50,87.50,81.25,73.75,65.00,55.00,45.00,35.00,26.25,18.75,12.50,7.50,3.75,1.25,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8d6 = [100.00,100.00,100.00,99.79,99.17,97.92,95.83,92.71,88.33,82.71,75.83,67.92,59.17,50.00,40.83,32.08,24.17,17.29,11.67,7.29,4.17,2.08,0.83,0.21,0,0,0,0,0,0];
const d10d8d8 = [100.00,100.00,100.00,99.84,99.38,98.44,96.88,94.53,91.25,86.88,81.25,74.53,66.88,58.59,50.00,41.41,33.13,25.47,18.75,13.13,8.75,5.47,3.13,1.56,0.63,0.16,0,0,0,0];
const d10d8dadvd6 = [92.71,88.33,82.71,75.83,67.92,59.17,50.00,40.83,32.08,24.17,17.29,11.67,7.29,4.17,2.08,0.83,0.21,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8dadvd8 = [86.88,81.25,74.53,66.88,58.59,50.00,41.41,33.13,25.47,18.75,13.13,8.75,5.47,3.13,1.56,0.63,0.16,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d8dadvd10 = [79.50,73.00,65.75,58.00,50.00,42.00,34.25,27.00,20.50,15.00,10.50,7.00,4.38,2.50,1.25,0.50,0.13,0,0,0,0,0,0,0,0,0,0,0,0,0];
const d10d10 = [100.00,100.00,99.00,97.00,94.00,90.00,85.00,79.00,72.00,64.00,55.00,45.00,36.00,28.00,21.00,15.00,10.00,6.00,3.00,1.00,0,0,0,0,0,0,0,0,0,0];
const d10d10d6 = [100.00,100.00,100.00,99.83,99.33,98.33,96.67,94.17,90.67,86.17,80.67,74.17,66.67,58.50,50.00,41.50,33.33,25.83,19.33,13.83,9.33,5.83,3.33,1.67,0.67,0.17,0,0,0,0];
const d10d10d8 = [100.00,100.00,100.00,99.88,99.50,98.75,97.50,95.63,93.00,89.50,85.00,79.50,73.00,65.75,58.00,50.00,42.00,34.25,27.00,20.50,15.00,10.50,7.00,4.38,2.50,1.25,0.50,0.13,0,0];
const d10d10d10 = [100.00,100.00,100.00,99.90,99.60,99.00,98.00,96.50,94.40,91.60,88.00,83.50,78.00,71.70,64.80,57.50,50.00,42.50,35.20,28.30,22.00,16.50,12.00,8.40,5.60,3.50,2.00,1.00,0.40,0.10];
const d10d10dadvd6 = [94.17,90.67,86.17,80.67,74.17,66.67,58.50,50.00,41.50,33.33,25.83,19.33,13.83,9.33,5.83,3.33,1.67,0.67,0.17,0,0,0,0,0,0,0,0,0,0,0];
const d10d10dadvd8 = [89.50,85.00,79.50,73.00,65.75,58.00,50.00,42.00,34.25,27.00,20.50,15.00,10.50,7.00,4.38,2.50,1.25,0.50,0.13,0,0,0,0,0,0,0,0,0,0,0];
const d10d10dadvd10 = [83.50,78.00,71.70,64.80,57.50,50.00,42.50,35.20,28.30,22.00,16.50,12.00,8.40,5.60,3.50,2.00,1.00,0.40,0.10,0,0,0,0,0,0,0,0,0,0,0];
const d12d8 = [100.00,100.00,98.96,96.88,93.75,89.58,84.38,78.13,70.83,62.50,54.17,45.83,37.50,29.17,21.88,15.63,10.42,6.25,3.13,1.04,0,0,0,0,0,0,0,0,0,0];
const d12d8d6 = [100.00,100.00,100.00,99.83,99.31,98.26,96.53,93.92,90.28,85.59,79.86,73.26,65.97,58.16,50.00,41.84,34.03,26.74,20.14,14.41,9.72,6.08,3.47,1.74,0.69,0.17,0,0,0,0];
const d12d8d8 = [100.00,100.00,100.00,99.87,99.48,98.70,97.40,95.44,92.71,89.06,84.38,78.78,72.40,65.36,57.81,50.00,42.19,34.64,27.60,21.22,15.63,10.94,7.29,4.56,2.60,1.30,0.52,0.13,0,0];
const d12d8dadvd6 = [93.92,90.28,85.59,79.86,73.26,65.97,58.16,50.00,41.84,34.03,26.74,20.14,14.41,9.72,6.08,3.47,1.74,0.69,0.17,0,0,0,0,0,0,0,0,0,0,0];
const d12d8dadvd8 = [89.06,84.38,78.78,72.40,65.36,57.81,50.00,42.19,34.64,27.60,21.22,15.63,10.94,7.29,4.56,2.60,1.30,0.52,0.13,0,0,0,0,0,0,0,0,0,0,0];
const d12d8dadvd10 = [82.92,77.50,71.35,64.58,57.40,50.00,42.60,35.42,28.65,22.50,17.08,12.50,8.75,5.83,3.65,2.08,1.04,0.42,0.10,0,0,0,0,0,0,0,0,0,0,0];
const d12d10 = [100.00,100.00,99.17,97.50,95.00,91.67,87.50,82.50,76.67,70.00,62.50,54.17,45.83,37.50,30.00,23.33,17.50,12.50,8.33,5.00,2.50,0.83,0,0,0,0,0,0,0,0];
const d12d10d6 = [100.00,100.00,100.00,99.86,99.44,98.61,97.22,95.14,92.22,88.47,83.89,78.47,72.22,65.28,57.78,50.00,42.22,34.72,27.78,21.53,16.11,11.53,7.78,4.86,2.78,1.39,0.56,0.14,0,0];
const d12d10d8 = [100.00,100.00,100.00,99.90,99.58,98.96,97.92,96.35,94.17,91.25,87.50,82.92,77.50,71.35,64.58,57.40,50.00,42.60,35.42,28.65,22.50,17.08,12.50,8.75,5.83,3.65,2.08,1.04,0.42,0.10];
const d12d10d10 = [100.00,100.00,100.00,99.92,99.67,99.17,98.33,97.08,95.33,93.00,90.00,86.25,81.67,76.33,70.33,63.83,57.00,50.00,43.00,36.17,29.67,23.67,18.33,13.75,10.00,7.00,4.67,2.92,1.67,0.83];
const d12d10dadvd6 = [95.14,92.22,88.47,83.89,78.47,72.22,65.28,57.78,50.00,42.22,34.72,27.78,21.53,16.11,11.53,7.78,4.86,2.78,1.39,0.56,0.14,0,0,0,0,0,0,0,0,0];
const d12d10dadvd8 = [91.25,87.50,82.92,77.50,71.35,64.58,57.40,50.00,42.60,35.42,28.65,22.50,17.08,12.50,8.75,5.83,3.65,2.08,1.04,0.42,0.10,0,0,0,0,0,0,0,0,0];
const d12d10dadvd10 = [86.25,81.67,76.33,70.33,63.83,57.00,50.00,43.00,36.17,29.67,23.67,18.33,13.75,10.00,7.00,4.67,2.92,1.67,0.83,0.33,0.08,0,0,0,0,0,0,0,0,0];
const d12d12 = [100.00,100.00,99.31,97.92,95.83,93.06,89.58,85.42,80.56,75.00,68.75,61.81,54.17,45.83,38.19,31.25,25.00,19.44,14.58,10.42,6.94,4.17,2.08,0.69,0,0,0,0,0,0];
const d12d12d6 = [100.00,100.00,100.00,99.88,99.54,98.84,97.69,95.95,93.52,90.39,86.57,82.06,76.85,70.95,64.35,57.29,50.00,42.71,35.65,29.05,23.15,17.94,13.43,9.61,6.48,4.05,2.31,1.16,0.46,0.12];
const d12d12d8 = [100.00,100.00,100.00,99.91,99.65,99.13,98.26,96.96,95.14,92.71,89.58,85.76,81.25,76.04,70.14,63.72,56.94,50.00,43.06,36.28,29.86,23.96,18.75,14.24,10.42,7.29,4.86,3.04,1.74,0.87];
const d12d12d10 = [100.00,100.00,100.00,99.93,99.72,99.31,98.61,97.57,96.11,94.17,91.67,88.54,84.72,80.21,75.00,69.24,63.06,56.60,50.00,43.40,36.94,30.76,25.00,19.79,15.28,11.46,8.33,5.83,3.89,2.43];
const d12d12dadvd6 = [95.95,93.52,90.39,86.57,82.06,76.85,70.95,64.35,57.29,50.00,42.71,35.65,29.05,23.15,17.94,13.43,9.61,6.48,4.05,2.31,1.16,0.46,0.12,0,0,0,0,0,0,0];
const d12d12dadvd8 = [92.71,89.58,85.76,81.25,76.04,70.14,63.72,56.94,50.00,43.06,36.28,29.86,23.96,18.75,14.24,10.42,7.29,4.86,3.04,1.74,0.87,0.35,0.09,0,0,0,0,0,0,0];
const d12d12dadvd10 = [88.54,84.72,80.21,75.00,69.24,63.06,56.60,50.00,43.40,36.94,30.76,25.00,19.79,15.28,11.46,8.33,5.83,3.89,2.43,1.39,0.69,0.28,0.07,0,0,0,0,0,0,0];
const d20d8 = [100.00,100.00,99.38,98.13,96.25,93.75,90.63,86.88,82.50,77.50,72.50,67.50,62.50,57.50,52.50,47.50,42.50,37.50,32.50,27.50,22.50,17.50,13.13,9.38,6.25,3.75,1.88,0.63,0,0];
const d20d8d6 = [100.00,100.00,100.00,99.90,99.58,98.96,97.92,96.35,94.17,91.35,87.92,83.96,79.58,74.90,70.00,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.00,25.10,20.42,16.04,12.08,8.65,5.83,3.65];
const d20d8d8 = [100.00,100.00,100.00,99.92,99.69,99.22,98.44,97.27,95.63,93.44,90.63,87.27,83.44,79.22,74.69,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.31,20.78,16.56,12.73,9.38,6.56];
const d20d8dadvd6 = [96.35,94.17,91.35,87.92,83.96,79.58,74.90,70.00,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.00,25.10,20.42,16.04,12.08,8.65,5.83,3.65,2.08,1.04,0.42,0.10,0,0,0];
const d20d8dadvd8 = [93.44,90.63,87.27,83.44,79.22,74.69,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.31,20.78,16.56,12.73,9.38,6.56,4.38,2.73,1.56,0.78,0.31,0.08,0,0,0];
const d20d8dadvd10 = [89.75,86.50,82.81,78.75,74.38,69.75,64.94,60.00,55.00,50.00,45.00,40.00,35.06,30.25,25.63,21.25,17.19,13.50,10.25,7.50,5.25,3.50,2.19,1.25,0.63,0.25,0.06,0,0,0];
const d20d10 = [100.00,100.00,99.50,98.50,97.00,95.00,92.50,89.50,86.00,82.00,77.50,72.50,67.50,62.50,57.50,52.50,47.50,42.50,37.50,32.50,27.50,22.50,18.00,14.00,10.50,7.50,5.00,3.00,1.50,0.50];
const d20d10d6 = [100.00,100.00,100.00,99.92,99.67,99.17,98.33,97.08,95.33,93.08,90.33,87.08,83.33,79.17,74.67,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.33,20.83,16.67,12.92,9.67,6.92];
const d20d10d8 = [100.00,100.00,100.00,99.94,99.75,99.38,98.75,97.81,96.50,94.75,92.50,89.75,86.50,82.81,78.75,74.38,69.75,64.94,60.00,55.00,50.00,45.00,40.00,35.06,30.25,25.63,21.25,17.19,13.50,10.25];
const d20d10d10 = [100.00,100.00,100.00,99.95,99.80,99.50,99.00,98.25,97.20,95.80,94.00,91.75,89.00,85.80,82.20,78.25,74.00,69.50,64.80,59.95,55.00,50.00,45.00,40.05,35.20,30.50,26.00,21.75,17.80,14.20];
const d20d10dadvd6 = [97.08,95.33,93.08,90.33,87.08,83.33,79.17,74.67,69.92,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.08,25.33,20.83,16.67,12.92,9.67,6.92,4.67,2.92,1.67,0.83,0.33,0.08,0];
const d20d10dadvd8 = [94.75,92.50,89.75,86.50,82.81,78.75,74.38,69.75,64.94,60.00,55.00,50.00,45.00,40.00,35.06,30.25,25.63,21.25,17.19,13.50,10.25,7.50,5.25,3.50,2.19,1.25,0.63,0.25,0.06,0];
const d20d10dadvd10 = [91.75,89.00,85.80,82.20,78.25,74.00,69.50,64.80,59.95,55.00,50.00,45.00,40.05,35.20,30.50,26.00,21.75,17.80,14.20,11.00,8.25,6.00,4.20,2.80,1.75,1.00,0.50,0.20,0.05,0];
const d20d12 = [100.00,100.00,99.58,98.75,97.50,95.83,93.75,91.25,88.33,85.00,81.25,77.08,72.50,67.50,62.50,57.50,52.50,47.50,42.50,37.50,32.50,27.50,22.92,18.75,15.00,11.67,8.75,6.25,4.17,2.50];
const d20d12d6 = [100.00,100.00,100.00,99.93,99.72,99.31,98.61,97.57,96.11,94.24,91.94,89.24,86.11,82.57,78.61,74.31,69.72,64.93,60.00,55.00,50.00,45.00,40.00,35.07,30.28,25.69,21.39,17.43,13.89,10.76];
const d20d12d8 = [100.00,100.00,100.00,99.95,99.79,99.48,98.96,98.18,97.08,95.63,93.75,91.46,88.75,85.63,82.08,78.18,73.96,69.48,64.79,59.95,55.00,50.00,45.00,40.05,35.21,30.52,26.04,21.82,17.92,14.37];
const d20d12d10 = [100.00,100.00,100.00,99.96,99.83,99.58,99.17,98.54,97.67,96.50,95.00,93.12,90.83,88.12,85.00,81.50,77.67,73.54,69.17,64.58,59.83,54.96,50.00,45.04,40.17,35.42,30.83,26.46,22.33,18.50];
const d20d12dadvd6 = [97.57,96.11,94.24,91.94,89.24,86.11,82.57,78.61,74.31,69.72,64.93,60.00,55.00,50.00,45.00,40.00,35.07,30.28,25.69,21.39,17.43,13.89,10.76,8.06,5.76,3.89,2.43,1.39,0.69,0.28];
const d20d12dadvd8 = [95.63,93.75,91.46,88.75,85.63,82.08,78.18,73.96,69.48,64.79,59.95,55.00,50.00,45.00,40.05,35.21,30.52,26.04,21.82,17.92,14.37,11.25,8.54,6.25,4.37,2.92,1.82,1.04,0.52,0.21];
const d20d12dadvd10 = [93.12,90.83,88.12,85.00,81.50,77.67,73.54,69.17,64.58,59.83,54.96,50.00,45.04,40.17,35.42,30.83,26.46,22.33,18.50,15.00,11.88,9.17,6.88,5.00,3.50,2.33,1.46,0.83,0.42,0.17];
const d20d20 = [100.00,100.00,99.75,99.25,98.50,97.50,96.25,94.75,93.00,91.00,88.75,86.25,83.50,80.50,77.25,73.75,70.00,66.00,61.75,57.25,52.50,47.50,42.75,38.25,34.00,30.00,26.25,22.75,19.50,16.50];
const d20d20d6 = [100.00,100.00,100.00,99.96,99.83,99.58,99.17,98.54,97.67,96.54,95.17,93.54,91.67,89.54,87.17,84.54,81.67,78.54,75.17,71.54,67.67,63.54,59.17,54.62,50.00,45.37,40.83,36.46,32.33,28.46];
const d20d20d8 = [100.00,100.00,100.00,99.97,99.88,99.69,99.38,98.91,98.25,97.38,96.25,94.88,93.25,91.38,89.25,86.88,84.25,81.38,78.25,74.88,71.25,67.38,63.25,58.94,54.50,50.00,45.50,41.06,36.75,32.63];
const d20d20d10 = [100.00,100.00,100.00,99.97,99.90,99.75,99.50,99.12,98.60,97.90,97.00,95.87,94.50,92.87,91.00,88.87,86.50,83.87,81.00,77.87,74.50,70.87,67.00,62.92,58.70,54.37,50.00,45.62,41.30,37.07];
const d20d20dadvd6 = [98.54,97.67,96.54,95.17,93.54,91.67,89.54,87.17,84.54,81.67,78.54,75.17,71.54,67.67,63.54,59.17,54.62,50.00,45.37,40.83,36.46,32.33,28.46,24.83,21.46,18.33,15.46,12.83,10.46,8.33];
const d20d20dadvd8 = [97.38,96.25,94.88,93.25,91.38,89.25,86.88,84.25,81.38,78.25,74.88,71.25,67.38,63.25,58.94,54.50,50.00,45.50,41.06,36.75,32.63,28.75,25.13,21.75,18.63,15.75,13.13,10.75,8.63,6.75];
const d20d20dadvd10 = [95.87,94.50,92.87,91.00,88.87,86.50,83.87,81.00,77.87,74.50,70.87,67.00,62.92,58.70,54.37,50.00,45.62,41.30,37.07,33.00,29.12,25.50,22.12,19.00,16.12,13.50,11.12,9.00,7.12,5.50];
// gm's die benchmarks
const d20dadv = [100.00,90.25,81.00,72.25,64.00,56.25,49.00,42.25,36.00,30.25,25.00,20.25,16.00,12.25,9.00,6.25,4.00,2.25,1.00,0.25];
const d20 = [100.00,95.00,90.00,85.00,80.00,75.00,70.00,65.00,60.00,55.00,50.00,45.00,40.00,35.00,30.00,25.00,20.00,15.00,10.00,5.00];
const d20adv = [100.00,99.75,99.00,97.75,96.00,93.75,91.00,87.75,84.00,79.75,75.00,69.75,64.00,57.75,51.00,43.75,36.00,27.75,19.00,9.75];
// other cc lists
const descriptionList = [
	{
		eyes: ["carnations", "earth", "endless ocean", "fire", "ivy", "lilacs", "night", "seafoam", "winter" ],
		body: ["broad", "carved", "curvy", "lanky", "rotund", "short", "stocky", "tall", "thin", "tiny", "toned" ],
		skin: ["ashes", "clover", "falling snow", "fine sand", "obsidian", "rose", "sapphire", "wisteria" ]
	}
];
const experiencesList = [ 
	{ 
		backgrounds: [ "Assassin", "Blacksmith", "Bodyguard", "Bounty Hunter", "Chef to the Royal Family", "Circus Performer", "Con Artist", "Fallen Monarch", "Field Medic", "High Priestess", "Merchant", "Noble", "Pirate", "Politician", "Runaway", "Scholar", "Sellsword", "Soldier", "Storyteller", "Thief", "World Traveler" ], 
		characteristics: [ "Affable", "Battle-Hardened", "Bookworm", "Charming", "Cowardly", "Friend to All", "Helpful", "Intimidating Presence", "Leader", "Lone Wolf", "Loyal", "Observant", "Prankster", "Silver Tongue", "Sticky Fingers", "Stubborn to a Fault", "Survivor", "Young and Naive" ], 
		specialties: [ "Acrobat", "Gambler", "Healer", "Inventor", "Magical Historian", "Mapmaker", "Master of Disguise", "Navigator", "Sharpshooter", "Survivalist", "Swashbuckler", "Tactician" ], 
		skills: [ "Animal Whisperer", "Barter", "Deadly Aim", "Fast Learner", "Incredible Strength", "Liar", "Light Feet", "Negotiator", "Photographic Memory", "Quick Hands", "Repair", "Scavenger", "Tracker" ], 
		phrases: [ "Catch Me If You Can", "Fake It Till You Make It", "First Time's the Charm", "Hold the Line", "I Won't Let You Down", "I'll Catch You", "I've Got Your Back", "Knowledge Is Power", "Nature's Friend", "Never Again", "No One Left Behind", "Pick on Someone Your Own Size", "The Show Must Go On", "This Is Not a Negotiation", "Wolf in Sheep's Clothing"] 
	}
];

// adversaries
const adversaryList = [
{ label: "Acid Burrower", name: "acid-burrower", tier: 1, type: "Solo", pages: ["Page 210"], summary: "A horse-sized insect with digging claws and acidic blood.", motive: "Burrow, drag away, feed, reposition", difficulty: 14, thresholdmajor: 8, thresholdsevere: 15, hp: 8, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Claws", attackrange: "Very Close", attackdamage: "1d12+2", attackdamagetype: "phy", experiences: ["Tremor Sense +2"], features: ["<p><strong><em>Relentless (3)&mdash;Passive:</em></strong> The Burrower can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Earth Eruption&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to have the Burrower burst out of the ground. All creatures within <a href='#define-range'>Very Close</a> range must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or be knocked over, making them <a href='#define-condition'><em>Vulnerable</em></a> until they next act.</p>", "<p><strong><em>Spit Acid&mdash;Action:</em></strong> Make an attack against all targets in front of the Burrower within <a href='#define-range'>Close</a> range. Targets the Burrower succeeds against take <strong>2d6</strong> <a href='#define-damage-type'>physical damage</a> and must mark an <a href='#define-armor'>Armor Slot</a> without receiving its benefits (they can still use <a href='#define-armor'>armor</a> to reduce the damage). If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an additional <a href='#define-hit-point'>HP</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Acid Bath&mdash;Reaction:</em></strong> When the Burrower takes <a href='#define-hit-point'>Severe</a> damage, all creatures within <a href='#define-range'>Close</a> range are bathed in their acidic blood, taking <strong>1d10</strong> <a href='#define-damage-type'>physical damage</a>. This splash covers the ground within <a href='#define-range'>Very Close</a> range with blood, and all creatures other than the Burrower who move through it take <strong>1d6</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Adult Flickerfly", name: "adult-flickerfly", tier: 3, type: "Solo", pages: ["Page 228", "Errata"], summary: "A winged insect the size of a large house with iridescent scales and wings that move too fast to track.", motive: "Collect shiny things, hunt, nest, swoop", difficulty: 17, thresholdmajor: 20, thresholdsevere: 35, hp: 12, hphorde: 0, stress: 6, attackbonus: 3, attacklabel: "Wing Slash", attackrange: "Very Close", attackdamage: "3d20", attackdamagetype: "phy", features: ["<p><strong><em>Relentless (4)&mdash;Passive:</em></strong> The Flickerfly can be <a href='#define-spotlight'>spotlighted</a> up to four times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Never Misses&mdash;Passive:</em></strong> When the Flickerfly makes an attack, the target's <a href='#define-evasion'>Evasion</a> is halved against the attack.</p>", "<p><strong><em>Deadly Flight&mdash;Passive:</em></strong> While flying, the Flickerfly can move up to <a href='#define-range'>Far</a> range instead of <a href='#define-range'>Close</a> range before taking an action.</p>", "<p><strong><em>Whirlwind&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to whirl, making an attack against all targets within <a href='#define-range'>Very Close</a> range. Targets the Flickerfly succeeds against take <strong>3d8</strong> <a href='#define-damage-type'>direct physical damage</a>.</p>", "<p><strong><em>Mind Dance&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to create a magically dazzling display that grapples the minds of nearby foes. All targets within <a href='#define-range'>Close</a> range must make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. For each target who failed, you gain a <a href='#define-fear'>Fear</a> and the Flickerfly learns one of the target's fears.</p>", "<p><strong><em>Hallucinatory Breath&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 1d6)</a></em>. When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to <a href='#define-range'>Far</a> range. Targets must make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> or become overwhelmed by fearful hallucinations. Targets whose fears are known to the Flickerfly have <a href='#define-advantage'>disadvantage</a> on this roll. Targets who fail lose 2 <a href='#define-hope'>Hope</a> and take <strong>3d8+3</strong> <a href='#define-damage-type'>direct magic damage</a>.</p>", "<p><strong><em>Uncanny Reflexes&mdash;Reaction:</em></strong> When the Flickerfly takes damage from an attack within <a href='#define-range'>Close</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to take half damage.</p>"], category: "Monster", ednote: "" },
{ label: "Apprentice Assassin", name: "apprentice-assassin", tier: 2, type: "Minion", pages: ["Page 220"], summary: "A young trainee eager to prove themselves.", motive: "Act reckless, kill, prove their worth, show off", difficulty: 13, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -1, attacklabel: "Thrown Dagger", attackrange: "Very Close", attackdamage: "4", attackdamagetype: "phy", experiences: ["Intrusion +2"], features: ["<p><strong><em>Minion (6)&mdash;Passive:</em></strong> The Assassin is defeated when they take any damage. For every 6 damage a PC deals to the Assassin, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Apprentice Assassins within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 4 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Person", ednote: "" },
{ label: "Arch-Necromancer", name: "arch-necromancer", tier: 4, type: "Leader", pages: ["Page 234"], summary: "A decaying mage adorned in dark, tattered robes.", motive: "Corrupt, decay, flee to fight another day, resurrect", difficulty: 21, thresholdmajor: 33, thresholdsevere: 66, hp: 9, hphorde: 0, stress: 8, attackbonus: 6, attacklabel: "Necrotic Blast", attackrange: "Far", attackdamage: "4d12+8", attackdamagetype: "mag", experiences: ["Forbidden Knowledge +3", "Wisdom of Centuries +3"], features: ["<p><strong><em>Dance of Death&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <a href='#define-spotlight'>spotlight</a> <strong>1d4</strong> allies. Attacks they make while <a href='#define-spotlight'>spotlighted</a> in this way deal half damage, or full damage if you <strong><a href='#define-fear'>spend a Fear</a></strong>.</p>", "<p><strong><em>Beam of Decay&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark 2 Stress</a></strong> to cause all targets within <a href='#define-range'>Far</a> range to make a <a href='#define-strength'>Strength</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>2d20+12</strong> <a href='#define-damage-type'>magic damage</a> and you gain a <a href='#define-fear'>Fear</a>. Targets who succeed take half damage. A target who marks 2 or more <a href='#define-hit-point'>HP</a> must also mark 2 <a href='#define-stress'>Stress</a> and becomes <a href='#define-condition'><em>Vulnerable</em></a> until they roll with <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Open the Gates of Death&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to summon a <a href='#define-adversary-zombie-legion'>Zombie Legion</a>, which appears at <a href='#define-range'>Close</a> range and immediately takes the <a href='#define-spotlight'>spotlight</a>.</p>", "<p><strong><em>Not Today, My Dears&mdash;Reaction:</em></strong> When the Necromancer has marked 7 or more of their <a href='#define-hit-point'>HP</a>, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to have them teleport away to a safe location to recover. A PC who succeeds on an <a href='#define-trait-roll'>Instinct Roll</a> can trace the teleportation magic to their destination.</p>", "<p><strong><em>Your Life is Mine&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 2d6)</a></em>. When the Necromancer has marked 6 or more of their <a href='#define-hit-point'>HP</a>, activate the countdown. When it triggers, deal <strong>2d10+6</strong> <a href='#define-damage-type'>direct magic damage</a> to a target within <a href='#define-range'>Close</a> range. The Necromancer then clears a number of <a href='#define-stress'>Stress</a> or <a href='#define-hit-point'>HP</a> equal to the number of <a href='#define-hit-point'>HP</a> marked by the target from this attack.</p>"], category: "Supernatural", ednote: "" },
{ label: "Archer Guard", name: "archer-guard", tier: 1, type: "Ranged", pages: ["Page 212"], summary: "A tall guard bearing a longbow and quiver with arrows fletched in the settlement's colors.", motive: "Arrest, close gates, make it through the day, pin down", difficulty: 10, thresholdmajor: 4, thresholdsevere: 8, hp: 3, hphorde: 0, stress: 2, attackbonus: 1, attacklabel: "Longbow", attackrange: "Far", attackdamage: "1d8+3", attackdamagetype: "phy", experiences: ["Local Knowledge +3"], features: ["<p><strong><em>Hobbling Shot&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Far</a> range. On a success, mark a <a href='#define-stress'>Stress</a> to deal <strong>1d12+3</strong> <a href='#define-damage-type'>physical damage</a>. If the target marks <a href='#define-hit-point'>HP</a> from this attack, they have <a href='#define-advantage'>disadvantage</a> on <a href='#define-trait-roll'>Agility Rolls</a> until they clear at least 1 <a href='#define-hit-point'>HP</a>.</p>"], category: "Person", ednote: "" },
{ label: "Archer Squadron", name: "archer-squadron", tier: 2, type: "Horde", pages: ["Page 220"], summary: "A group of trained archers bearing massive bows.", motive: "Stick together, survive, volley fire", difficulty: 13, thresholdmajor: 8, thresholdsevere: 16, hp: 4, hphorde: 2, stress: 3, attackbonus: 0, attacklabel: "Longbow", attackrange: "Far", attackdamage: "2d6+3", attackdamagetype: "phy", features: ["<p><strong><em>Horde (1d6+3)&mdash;Passive:</em></strong> When the Squadron has marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>1d6+3</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Focused Volley&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to target a point within <a href='#define-range'>Far</a> range. Make an attack with <a href='#define-advantage'>advantage</a> against all targets within <a href='#define-range'>Close</a> range of that point. Targets the Squadron succeeds against take <strong>1d10+4</strong> <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Suppressing Fire&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to target a point within <a href='#define-range'>Far</a> range. Until the next roll with <a href='#define-fear'>Fear</a>, a creature who moves within <a href='#define-range'>Close</a> range of that point must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, they take <strong>2d6+3</strong> <a href='#define-damage-type'>physical damage</a>. On a success, they take half damage.</p>"], category: "Person", ednote: "" },
{ label: "Assassin Poisoner", name: "assassin-poisoner", tier: 2, type: "Skulk", pages: ["Page 220"], summary: "A cunning scoundrel skilled in both poisons and ambushing.", motive: "Anticipate, get paid, kill, taint food and water", difficulty: 14, thresholdmajor: 8, thresholdsevere: 16, hp: 4, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Poisoned Throwing Dagger", attackrange: "Close", attackdamage: "2d8+1", attackdamagetype: "phy", experiences: ["Intrusion +2"], features: ["<p><strong><em>Grindeloth Venom&mdash;Passive:</em></strong> Targets who mark <a href='#define-hit-point'>HP</a> from the Assassin's attacks are <a href='#define-condition'><em>Vulnerable</em></a> until they clear a <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Out of Nowhere&mdash;Passive:</em></strong> The Assassin has <a href='#define-advantage'>advantage</a> on attacks if they are <a href='#define-condition'><em>Hidden</em></a>.</p>", "<p><strong><em>Fumigation&mdash;Action:</em></strong> Drop a smoke bomb that fills the air within <a href='#define-range'>Close</a> range with smoke, <em>Dizzying</em> all targets in this area. <em>Dizzied</em> targets have <a href='#define-advantage'>disadvantage</a> on their next <a href='#define-action-roll'>action roll</a>, then clear the condition.</p>"], category: "Person", ednote: "" },
{ label: "Battle Box", name: "battle-box", tier: 2, type: "Solo", pages: ["Page 221"], summary: "A cube-shaped construct with a different rune on each of their six sides.", motive: "Change tactics, trample foes, wait in disguise", difficulty: 15, thresholdmajor: 10, thresholdsevere: 20, hp: 8, hphorde: 0, stress: 6, attackbonus: 2, attacklabel: "Slam", attackrange: "Melee", attackdamage: "2d6+3", attackdamagetype: "phy", experiences: ["Camouflage +2"], features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Box can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Randomized Tactics&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> and roll a <strong>d6</strong>. The Box uses the corresponding move:</p><ol><li><strong><em>Mana Beam:</em></strong> The Box fires a searing beam. Make an attack against a target within <a href='#define-range'>Far</a> range. On a success, deal <strong>2d10+2</strong> <a href='#define-damage-type'>magic damage</a>.</li><li><strong><em>Fire Jets:</em></strong> The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within <a href='#define-range'>Close</a> range. Targets the Box succeeds against take <strong>2d8</strong> <a href='#define-damage-type'>physical damage</a>.</li><li><strong><em>Trample:</em></strong> The Box rockets around erratically. Make an attack against all PCs within <a href='#define-range'>Close</a> range. Targets the Box succeeds against take <strong>1d6+5</strong> <a href='#define-damage-type'>physical damage</a> and are <a href='#define-condition'><em>Vulnerable</em></a> until their next roll with <a href='#define-hope'>Hope</a>.</li><li><strong><em>Shocking Gas:</em></strong> The Box sprays out a silver gas sparking with lightning. All targets within <a href='#define-range'>Close</a> range must succeed on a <a href='#define-finesse'>Finesse</a> <a href='#define-reaction-roll'>Reaction Roll</a> or mark 3 <a href='#define-stress'>Stress</a>.</li><li><strong><em>Stunning Clap:</em></strong> The Box leaps and their sides clap, creating a concussive boom. All targets within <a href='#define-range'>Very Close</a> range must succeed on a <a href='#define-strength'>Strength</a> <a href='#define-reaction-roll'>Reaction Roll</a> or become <a href='#define-condition'><em>Vulnerable</em></a> until the cube is defeated.</li><li><strong><em>Psionic Whine:</em></strong> The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within <a href='#define-range'>Close</a> range must succeed on a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>2d4+9</strong> <a href='#define-damage-type'>direct magic damage</a>.</li></ol>", "<p><strong><em>Overcharge&mdash;Reaction:</em></strong> Before rolling damage for the Box's attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to add a <strong>d6</strong> to the <a href='#define-damage-roll'>damage roll</a>. Additionally, you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Death Quake&mdash;Reaction:</em></strong> When the Box marks their last <a href='#define-hit-point'>HP</a>, the magic powering them ruptures in an explosion of force. All targets within <a href='#define-range'>Close</a> range must succeed on an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>2d8+1</strong> <a href='#define-damage-type'>magic damage</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Bear", name: "bear", tier: 1, type: "Bruiser", pages: ["Page 210"], summary: "A large bear with thick fur and powerful claws.", motive: "Climb, defend territory, pummel, track", difficulty: 14, thresholdmajor: 9, thresholdsevere: 17, hp: 7, hphorde: 0, stress: 2, attackbonus: 1, attacklabel: "Claws", attackrange: "Melee", attackdamage: "1d8+3", attackdamagetype: "phy", experiences: ["Ambusher +3", "Keen Senses +2"], features: ["<p><strong><em>Overwhelming Force&mdash;Passive:</em></strong> Targets who mark <a href='#define-hit-point'>HP</a> from the Bear's standard attack are knocked back to <a href='#define-range'>Very Close</a> range.</p>", "<p><strong><em>Bite&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against a target within <a href='#define-range'>Melee</a> range. On a success, deal <strong>3d4+10</strong> <a href='#define-damage-type'>physical damage</a> and the target is <a href='#define-condition'><em>Restrained</em></a> until they break free with a successful <a href='#define-trait-roll'>Strength Roll</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Bear makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Bladed Guard", name: "bladed-guard", tier: 1, type: "Standard", pages: ["Page 212"], summary: "An armored guard bearing a sword and shield painted in the settlement's colors.", motive: "Arrest, close gates, make it through the day, pin down", difficulty: 12, thresholdmajor: 5, thresholdsevere: 9, hp: 5, hphorde: 0, stress: 2, attackbonus: 1, attacklabel: "Longsword", attackrange: "Melee", attackdamage: "1d6+1", attackdamagetype: "phy", experiences: ["Local Knowledge +3"], features: ["<p><strong><em>Shield Wall&mdash;Passive:</em></strong> A creature who tries to move within <a href='#define-range'>Very Close</a> range of the Guard must succeed on an <a href='#define-trait-roll'>Agility Roll</a>. If additional Bladed Guards are standing in a line alongside the first, and each is within <a href='#define-range'>Melee</a> range of another guard in the line, the <a href='#define-difficulty'>Difficulty</a> increases by the total number of guards in the line.</p>", "<p><strong><em>Detain&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, <strong><a href='#define-stress'>mark a Stress</a></strong> to <a href='#define-condition'><em>Restrain</em></a> the target until they break free with a successful attack, <a href='#define-trait-roll'>Finesse Roll</a>, or <a href='#define-trait-roll'>Strength Roll</a>.</p>"], category: "Person", ednote: "" },
{ label: "Brawny Zombie", name: "brawny-zombie", tier: 1, type: "Bruiser", pages: ["Page 219"], summary: "A large corpse, decay-bloated and angry.", motive: "Crush, destroy, hurl debris, slam", difficulty: 10, thresholdmajor: 8, thresholdsevere: 15, hp: 7, hphorde: 0, stress: 4, attackbonus: 2, attacklabel: "Slam", attackrange: "Very Close", attackdamage: "1d12+3", attackdamagetype: "phy", experiences: ["Collateral Damage +2", "Throw +4"], features: ["<p><strong><em>Slow&mdash;Passive:</em></strong> When you <a href='#define-spotlight'>spotlight</a> the Zombie and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you <a href='#define-spotlight'>spotlight</a> the Zombie and they have a token on their stat block, clear the token and they can act.</p>", "<p><strong><em>Rend Asunder&mdash;Action:</em></strong> Make a standard attack with <a href='#define-advantage'>advantage</a> against a target the Zombie has <a href='#define-condition'><em>Restrained</em></a>. On a success, the attack deals <a href='#define-damage-type'>direct damage</a>.</p>", "<p><strong><em>Rip and Tear&mdash;Reaction:</em></strong> When the Zombies makes a successful standard attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Restrain</em></a> the target and force them to mark 2 <a href='#define-stress'>Stress</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Cave Ogre", name: "cave-ogre", tier: 1, type: "Solo", pages: ["Page 210"], summary: "A massive humanoid who sees all sapient life as food.", motive: "Bite off heads, feast, rip limbs, stomp, throw enemies", difficulty: 13, thresholdmajor: 8, thresholdsevere: 15, hp: 8, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Club", attackrange: "Very Close", attackdamage: "1d10+2", attackdamagetype: "phy", experiences: ["Throw +2"], features: ["<p><strong><em>Ramp Up&mdash;Passive:</em></strong> You must <strong><a href='#define-fear'>spend a Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> the Ogre. While <a href='#define-spotlight'>spotlighted</a>, they can make their standard attack against all targets within range.</p>", "<p><strong><em>Bone Breaker&mdash;Passive:</em></strong> The Ogre's attacks deal <a href='#define-damage-type'>direct damage</a>.</p>", "<p><strong><em>Hail of Boulders&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to pick up heavy objects and throw them at all targets in front of the Ogre within <a href='#define-range'>Far</a> range. Make an attack against these targets. Targets the Ogre succeeds against take <strong>1d10+2</strong> <a href='#define-damage-type'>physical damage</a>. If they succeed against more than one target, you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Rampaging Fury&mdash;Reaction:</em></strong> When the Ogre marks 2 or more <a href='#define-hit-point'>HP</a>, they can rampage. Move the Ogre to a point within <a href='#define-range'>Close</a> range and deal <strong>2d6+3</strong> <a href='#define-damage-type'>direct physical damage</a> to all targets in their path.</p>"], category: "Person", ednote: "" },
{ label: "Chaos Skull", name: "chaos-skull", tier: 2, type: "Ranged", pages: ["Page 221"], summary: "A floating humanoid skull animated by scintillating magic.", motive: "Cackle, consume magic, serve creator", difficulty: 15, thresholdmajor: 8, thresholdsevere: 16, hp: 5, hphorde: 0, stress: 4, attackbonus: 2, attacklabel: "Energy Blast", attackrange: "Close", attackdamage: "2d8+3", attackdamagetype: "mag", features: ["<p><strong><em>Levitation&mdash;Passive:</em></strong> The Skull levitates several feet off the ground and can't be <a href='#define-condition'><em>Restrained</em></a>.</p>", "<p><strong><em>Wards&mdash;Passive:</em></strong> The Skull is <a href='#define-damage-type'>resistant</a> to <a href='#define-damage-type'>magic damage</a>.</p>", "<p><strong><em>Magic Burst&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against all targets within <a href='#define-range'>Close</a> range. Targets the Skull succeeds against take <strong>2d6+4</strong> <a href='#define-damage-type'>magic damage</a>.</p>", "<p><strong><em>Siphon Magic&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make an attack against a PC with a <a href='#define-subclass'>Spellcast trait</a> within <a href='#define-range'>Very Close</a> range. On a success, the target marks <strong>1d4</strong> <a href='#define-stress'>Stress</a> and the Skull clears that many <a href='#define-stress'>Stress</a>. Additionally, on a success, the Skull can immediately be <a href='#define-spotlight'>spotlighted</a> again.</p>"], category: "Supernatural", ednote: "" },
{ label: "Conscript", name: "conscript", tier: 2, type: "Minion", pages: ["Page 221"], summary: "A poorly trained civilian pressed into war.", motive: "Follow orders, gang up, survive", difficulty: 12, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 0, attacklabel: "Spears", attackrange: "Very Close", attackdamage: "6", attackdamagetype: "phy", features: ["<p><strong><em>Minion (6)&mdash;Passive:</em></strong> The Conscript is defeated when they take any damage. For every 6 damage a PC deals to the Conscript, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Conscripts within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 6 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Person", ednote: "" },
{ label: "Construct", name: "construct", tier: 1, type: "Solo", pages: ["Page 210"], summary: "A roughly humanoid being of stone and steel, assembled and animated by magic.", motive: "Destroy environment, serve creator, smash target, trample groups", difficulty: 13, thresholdmajor: 7, thresholdsevere: 15, hp: 9, hphorde: 0, stress: 4, attackbonus: 4, attacklabel: "Fist Slam", attackrange: "Melee", attackdamage: "1d20", attackdamagetype: "phy", features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Construct can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Weak Structure&mdash;Passive:</em></strong> When the Construct marks <a href='#define-hit-point'>HP</a> from <a href='#define-damage-type'>physical damage</a>, they must mark an additional <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Trample&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against all targets in the Construct's path when they move. Targets the Construct succeeds against take <strong>1d8</strong> <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Overload&mdash;Reaction:</em></strong> Before rolling damage for the Construct's attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a +10 bonus to the <a href='#define-damage-roll'>damage roll</a>. The Construct can then take the <a href='#define-spotlight'>spotlight</a> again.</p>", "<p><strong><em>Death Quake&mdash;Reaction:</em></strong> When the Construct marks their last <a href='#define-hit-point'>HP</a>, the magic powering them ruptures in an explosion of force. Make an attack with <a href='#define-advantage'>advantage</a> against all targets within <a href='#define-range'>Very Close</a> range. Targets the Construct succeeds against take <strong>1d12+2</strong> <a href='#define-damage-type'>magic damage</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Courtesan", name: "courtesan", tier: 2, type: "Social", pages: ["Page 221"], summary: "An accomplished manipulator and master of the social arts.", motive: "Entice, maneuver, secure patrons", difficulty: 13, thresholdmajor: 7, thresholdsevere: 13, hp: 3, hphorde: 0, stress: 4, attackbonus: -3, attacklabel: "Dagger", attackrange: "Melee", attackdamage: "1d4+3", attackdamagetype: "phy", experiences: ["Manipulation +3", "Socialite +3"], features: ["<p><strong><em>Searing Glance&mdash;Reaction:</em></strong> When a PC within <a href='#define-range'>Close</a> range makes a <a href='#define-trait-roll'>Presence Roll</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to cast a gaze toward the aftermath. On the target's failure, they must mark 2 <a href='#define-stress'>Stress</a> and are <a href='#define-condition'><em>Vulnerable</em></a> until the scene ends or they succeed on a social action against the Courtesan. On the target's success, they must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Person", ednote: "" },
{ label: "Courtier", name: "courtier", tier: 1, type: "Social", pages: ["Page 211", "Errata"], summary: "An accomplished manipulator and master of the social arts.", motive: "Discredit, gain favor, maneuver, scheme", difficulty: 12, thresholdmajor: 4, thresholdsevere: 8, hp: 3, hphorde: 0, stress: 4, attackbonus: -4, attacklabel: "Daggers", attackrange: "Melee", attackdamage: "1d4+2", attackdamagetype: "phy", experiences: ["Socialite +3"], features: ["<p><strong><em>Mockery&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to say something mocking and force a target within <a href='#define-range'>Close</a> range to make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a> (14) to see if they can save face. On a failure, the target must mark 2 <a href='#define-stress'>Stress</a> and is <a href='#define-condition'><em>Vulnerable</em></a> until the scene ends.</p>", "<p><strong><em>Scapegoat&mdash;Action:</em></strong> Spend a <a href='#define-fear'>Fear</a> and target a PC. The Courtier convinces a crowd or prominent individual that the target is the cause of their current conflict or misfortune.</p>"], category: "Person", ednote: "" },
{ label: "Cult Adept", name: "cult-adept", tier: 2, type: "Support", pages: ["Page 222"], summary: "An experienced mage wielding shadow and fear.", motive: "Curry favor, hinder foes, uncover knowledge", difficulty: 14, thresholdmajor: 9, thresholdsevere: 18, hp: 4, hphorde: 0, stress: 6, attackbonus: 2, attacklabel: "Rune-Covered Rod", attackrange: "Far", attackdamage: "2d4+3", attackdamagetype: "mag", experiences: ["Fallen Lore +2", "Rituals +2"], features: ["<p><strong><em>Enervating Blast&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make a standard attack against a target within range. On a success, the target must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Shroud of the Fallen&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to wrap an ally within <a href='#define-range'>Close</a> range in a shroud of <em>Protection</em> until the Adept marks their last <a href='#define-hit-point'>HP</a>. While <em>Protected</em>, the target has <a href='#define-damage-type'>resistance</a> to all damage.</p>", "<p><strong><em>Shadow Shackles&mdash;Action:</em></strong> Spend a <a href='#define-fear'>Fear</a> and choose a point within <a href='#define-range'>Far</a> range. All targets within <a href='#define-range'>Close</a> range of that point are <a href='#define-condition'><em>Restrained</em></a> in smoky chains until they break free with a successful <a href='#define-strength'>Strength</a> or <a href='#define-trait-roll'>Instinct Roll</a>. A target <a href='#define-condition'><em>Restrained</em></a> by this feature must <strong><a href='#define-hope'>spend a Hope</a></strong> to make an <a href='#define-action-roll'>action roll</a>.</p>", "<p><strong><em>Fear Is Fuel&mdash;Reaction:</em></strong> Twice per scene, when a PC rolls a failure with <a href='#define-fear'>Fear</a>, clear a <a href='#define-stress'>Stress</a>.</p>"], category: "Person", ednote: "" },
{ label: "Cult Fang", name: "cult-fang", tier: 2, type: "Skulk", pages: ["Page 222"], summary: "A professional killer-turned-cultist.", motive: "Capture sacrifices, isolate prey, rise in the ranks", difficulty: 15, thresholdmajor: 9, thresholdsevere: 17, hp: 4, hphorde: 0, stress: 4, attackbonus: 2, attacklabel: "Long Knife", attackrange: "Melee", attackdamage: "2d8+4", attackdamagetype: "phy", features: ["<p><strong><em>Shadow's Embrace&mdash;Passive:</em></strong> The Fang can climb and walk on vertical surfaces. <strong><a href='#define-stress'>Mark a Stress</a></strong> to move from one shadow to another within <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Pick Off the Straggler&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to cause a target within <a href='#define-range'>Melee</a> range to make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, the target must mark 2 <a href='#define-stress'>Stress</a> and is teleported with the Fang to a shadow within <a href='#define-range'>Far</a> range, making them <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Vulnerable</em></a>. On a success, the target must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Person", ednote: "" },
{ label: "Cult Initiate", name: "cult-initiate", tier: 2, type: "Minion", pages: ["Page 222"], summary: "A low-ranking cultist in simple robes, eager to gain power.", motive: "Follow orders, gain power, seek forbidden knowledge", difficulty: 13, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 0, attacklabel: "Ritual Dagger", attackrange: "Melee", attackdamage: "5", attackdamagetype: "phy", features: ["<p><strong><em>Minion (6)&mdash;Passive:</em></strong> The Initiate is defeated when they take any damage. For every 6 damage a PC deals to the Initiate, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Cult Initiates within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 5 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Person", ednote: "" },
{ label: "Deeproot Defender", name: "deeproot-defender", tier: 1, type: "Bruiser", pages: ["Page 211"], summary: "A burly vegetable-person with grasping vines.", motive: "Ambush, grab, protect, pummel", difficulty: 10, thresholdmajor: 8, thresholdsevere: 14, hp: 7, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Vines", attackrange: "Close", attackdamage: "1d8+3", attackdamagetype: "phy", experiences: ["Huge +3"], features: ["<p><strong><em>Ground Slam&mdash;Action:</em></strong> Slam the ground, knocking all targets within <a href='#define-range'>Very Close</a> range back to <a href='#define-range'>Far</a> range. Each target knocked back by this must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Grab and Drag&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Close</a> range. On a success, <strong><a href='#define-fear'>spend a Fear</a></strong> to pull them into <a href='#define-range'>Melee</a> range, deal <strong>1d6+2</strong> <a href='#define-damage-type'>physical damage</a>, and <a href='#define-condition'><em>Restrain</em></a> them until the Defender takes <a href='#define-hit-point'>Severe</a> damage.</p>"], category: "Monster", ednote: "" },
{ label: "Demon of Avarice", name: "demon-of-avarice", tier: 3, type: "Support", pages: ["Page 228"], summary: "A regal cloaked monstrosity with circular horns adorned with treasure.", motive: "Consume, fuel greed, sow dissent", difficulty: 17, thresholdmajor: 1, thresholdsevere: 29, hp: 6, hphorde: 0, stress: 5, attackbonus: 2, attacklabel: "Hungry Maw", attackrange: "Melee", attackdamage: "3d6+5", attackdamagetype: "mag", experiences: ["Manipulation +3"], features: ["<p><strong><em>Money Talks&mdash;Passive:</em></strong> Attacks against the Demon are made with <a href='#define-advantage'>disadvantage</a> unless the attacker spends a handful of <a href='#define-gold'>gold</a>. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks <a href='#define-hit-point'>HP</a> from the Demon's standard attack, they can spend a handful of <a href='#define-gold'>gold</a> instead of marking <a href='#define-hit-point'>HP</a> (1 handful per <a href='#define-hit-point'>HP</a>). Add a handful of <a href='#define-gold'>gold</a> to the Demon for each handful of <a href='#define-gold'>gold</a> spent by PCs on this feature.</p>", "<p><strong><em>Numbers Must Go Up&mdash;Passive:</em></strong> Add a bonus to the Demon's <a href='#define-attack-roll'>attack rolls</a> equal to the number of handfuls of <a href='#define-gold'>gold</a> they have.</p>", "<p><strong><em>Money is Time&mdash;Action:</em></strong> <strong>Spend <a href='#define-gold'>3 handfuls of gold</a> (or a <a href='#define-fear'>Fear</a>)</strong> to <a href='#define-spotlight'>spotlight</a> <strong>1d4+1</strong> allies.</p>"], category: "Supernatural", ednote: "" },
{ label: "Demon of Despair", name: "demon-of-despair", tier: 3, type: "Skulk", pages: ["Page 228"], summary: "A cloaked one-creature with long limbs, seeping shadows.", motive: "Make fear contagious, stick to the shadows, undermine resolve", difficulty: 17, thresholdmajor: 18, thresholdsevere: 35, hp: 6, hphorde: 0, stress: 5, attackbonus: 3, attacklabel: "Miasma Bolt", attackrange: "Far", attackdamage: "3d6+4", attackdamagetype: "mag", experiences: ["Manipulation +3"], features: ["<p><strong><em>Depths of Despair&mdash;Passive:</em></strong> The Demon deals double damage to PCs with 0 <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Your Struggle Is Pointless&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to weigh down the spirits of all PCs within <a href='#define-range'>Far</a> range. All targets affected replace their <a href='#define-action-roll'>Hope Die</a> with a <strong>d8</strong> until they roll a success with <a href='#define-hope'>Hope</a> or their next rest.</p>", "<p><strong><em>Your Friends Will Fail You&mdash;Reaction:</em></strong> When a PC fails with <a href='#define-fear'>Fear</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to cause all other PCs within <a href='#define-range'>Close</a> range to lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Demon makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Demon of Hubris", name: "demon-of-hubris", tier: 3, type: "Leader", pages: ["Page 229"], summary: "A perfectly beautiful and infinitely cruel demon with a gleaming spear and elegant robes.", motive: "Condescend, declare premature victory, prove superiority", difficulty: 19, thresholdmajor: 20, thresholdsevere: 36, hp: 7, hphorde: 0, stress: 5, attackbonus: 4, attacklabel: "Perfect Spear", attackrange: "Very Close", attackdamage: "3d10", attackdamagetype: "phy", experiences: ["Manipulation +2"], features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> When the Demon makes a successful attack, all PCs within <a href='#define-range'>Far</a> range must lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Double or Nothing&mdash;Passive:</em></strong> When a PC within <a href='#define-range'>Far</a> range fails a roll, they can choose to <a href='#define-reroll'>reroll</a> their <a href='#define-action-roll'>Fear Die</a> and take the new result. If they still fail, they mark 2 <a href='#define-stress'>Stress</a> and the Demon clears a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Unparalleled Skill&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to deal the Demon's standard attack damage to a target within <a href='#define-range'>Close</a> range.</p>", "<p><strong><em>The Root of Villainy&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> two other Demons within <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>You Pale in Comparison&mdash;Reaction:</em></strong> When a PC fails a roll within <a href='#define-range'>Close</a> range of the Demon, they must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Demon of Jealousy", name: "demon-of-jealousy", tier: 3, type: "Ranged", pages: ["Page 229"], summary: "A fickle creature of spindly limbs and insatiable desires.", motive: "Join in on others' success, take what belongs to others, hold grudges", difficulty: 17, thresholdmajor: 17, thresholdsevere: 30, hp: 6, hphorde: 0, stress: 6, attackbonus: 4, attacklabel: "Psychic Assault", attackrange: "Far", attackdamage: "3d8+3", attackdamagetype: "mag", experiences: ["Manipulation +3"], features: ["<p><strong><em>Unprotected Mind&mdash;Passive:</em></strong> The Demon's standard attack deals <a href='#define-damage-type'>direct damage</a>.</p>", "<p><strong><em>My Turn&mdash;Reaction:</em></strong> When the Demon marks <a href='#define-hit-point'>HP</a> from an attack, <strong><a href='#define-fear'>spend a number of Fear equal to the HP marked by the Demon</a></strong> to cause the attacker to mark the same number of <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Rivalry&mdash;Reaction:</em></strong> When a creature within <a href='#define-range'>Close</a> range takes damage from a different adversary, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to add a <strong>d4</strong> to the <a href='#define-damage-roll'>damage roll</a>.</p>", "<p><strong><em>What's Yours Is Mine&mdash;Reaction:</em></strong> When a PC takes severe damage within <a href='#define-range'>Very Close</a> range of the Demon, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to cause the target to make a <a href='#define-finesse'>Finesse</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, the Demon seizes one item or consumable of their choice from the target's inventory.</p>"], category: "Supernatural", ednote: "" },
{ label: "Demon of Wrath", name: "demon-of-wrath", tier: 3, type: "Bruiser", pages: ["Page 229"], summary: "A hulking demon with boulder-sized fists, driven by endless rage.", motive: "Fuel anger, impress rivals, wreak havoc", difficulty: 17, thresholdmajor: 2, thresholdsevere: 40, hp: 7, hphorde: 0, stress: 5, attackbonus: 3, attacklabel: "Fists", attackrange: "Very Close", attackdamage: "3d8+1", attackdamagetype: "mag", experiences: ["Intimidation +2"], features: ["<p><strong><em>Anger Unrelenting&mdash;Passive:</em></strong> The Demon's attacks deal <a href='#define-damage-type'>direct damage</a>.</p>", "<p><strong><em>Battle Lust&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to boil the blood of all PCs within <a href='#define-range'>Far</a> range. They use a <strong>d20</strong> as their <a href='#define-action-roll'>Fear Die</a> until the end of the scene.</p>", "<p><strong><em>Retaliation&mdash;Reaction:</em></strong> When the Demon takes damage from an attack within <a href='#define-range'>Close</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to make a standard attack against the attacker.</p>", "<p><strong><em>Blood and Souls&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 6)</a></em>. Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon <strong>1d4</strong> <a href='#define-adversary-minor-demon'>Minor Demons</a>, who appear at <a href='#define-range'>Close</a> range.</p>"], category: "Supernatural", ednote: "" },
{ label: "Demonic Hound Pack", name: "demonic-hound-pack", tier: 2, type: "Horde", pages: ["Page 222"], summary: "Unnatural hounds lit from within by hellfire.", motive: "Cause fear, consume flesh, please masters", difficulty: 15, thresholdmajor: 11, thresholdsevere: 23, hp: 6, hphorde: 1, stress: 3, attackbonus: 0, attacklabel: "Claws and Fangs", attackrange: "Melee", attackdamage: "2d8+2", attackdamagetype: "phy", experiences: ["Scent Tracking +3"], features: ["<p><strong><em>Horde (2d4+1)&mdash;Passive:</em></strong> When the Pack has marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>2d4+1</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Dreadhowl&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make all targets within <a href='#define-range'>Very Close</a> range lose a <a href='#define-hope'>Hope</a>. If a target is not able to lose a <a href='#define-hope'>Hope</a>, they must instead mark 2 <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Pack makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Dire Bat", name: "dire-bat", tier: 3, type: "Skulk", pages: ["Page 230"], summary: "A winged pet endlessly loyal to their vampire owner.", motive: "Dive-bomb, hide, protect leader", difficulty: 14, thresholdmajor: 16, thresholdsevere: 30, hp: 5, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Claws and Teeth", attackrange: "Melee", attackdamage: "2d6+7", attackdamagetype: "phy", experiences: ["Bloodthirsty +3"], features: ["<p><strong><em>Flying&mdash;Passive:</em></strong> While flying, the Bat gains a +3 bonus to their <a href='#define-difficulty'>Difficulty</a>.</p>", "<p><strong><em>Screech&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to send a high-pitch screech out toward all targets in front of the Bat within <a href='#define-range'>Far</a> range. Those targets must mark <strong>1d4</strong> <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Guardian&mdash;Reaction:</em></strong> When an allied Vampire marks <a href='#define-hit-point'>HP</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to fly into <a href='#define-range'>Melee</a> range of the attacker and make an attack with <a href='#define-advantage'>advantage</a> against them. On a success, deal <strong>2d6+2</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Dire Wolf", name: "dire-wolf", tier: 1, type: "Skulk", pages: ["Page 211"], summary: "A large wolf with menacing teeth, seldom encountered alone.", motive: "Defend territory, harry, protect pack, surround, trail", difficulty: 12, thresholdmajor: 5, thresholdsevere: 9, hp: 4, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Claws", attackrange: "Melee", attackdamage: "1d6+2", attackdamagetype: "phy", experiences: ["Keen Senses +3"], features: ["<p><strong><em>Pack Tactics&mdash;Passive:</em></strong> If the Wolf makes a successful standard attack and another Dire Wolf is within <a href='#define-range'>Melee</a> range of the target, deal <strong>1d6+5</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Hobbling Strike&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against a target within <a href='#define-range'>Melee</a> range. On a success, deal <strong>3d4+10</strong> <a href='#define-damage-type'>direct physical damage</a> and make them <a href='#define-condition'><em>Vulnerable</em></a> until they clear at least 1 <a href='#define-hit-point'>HP</a>.</p>"], category: "Monster", ednote: "The Dire Wolf's <strong><em>Hobbling Strike</em></strong> damage is a suspected misprint. If the GM agrees, change the damage to <strong>3d4+1</strong> instead." },
{ label: "Dryad", name: "dryad", tier: 3, type: "Leader", pages: ["Page 230"], summary: "A nature spirit in the form of a humanoid tree.", motive: "Camouflage, drive out, preserve the forest", difficulty: 16, thresholdmajor: 24, thresholdsevere: 38, hp: 8, hphorde: 0, stress: 5, attackbonus: 4, attacklabel: "Deadfall Shortbow", attackrange: "Far", attackdamage: "3d10+1", attackdamagetype: "phy", experiences: ["Forest Knowledge +4"], features: ["<p><strong><em>Bramble Patch&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to target a point within <a href='#define-range'>Far</a> range. Create a patch of thorns that covers an area within <a href='#define-range'>Close</a> range of that point. All targets within that area take <strong>2d6+2</strong> <a href='#define-damage-type'>physical damage</a> when they act. A target must succeed on a <a href='#define-trait-roll'>Finesse Roll</a> or take more than 20 damage to the Dryad with an attack to leave the area.</p>", "<p><strong><em>Grow Saplings&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to grow three Treant Sapling Minions, who appear at <a href='#define-range'>Close</a> range and immediately take the <a href='#define-spotlight'>spotlight</a>.</p>", "<p><strong><em>We Are All One&mdash;Reaction:</em></strong> When an ally dies within <a href='#define-range'>Close</a> range, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to clear 2 <a href='#define-hit-point'>HP</a> and 2 <a href='#define-stress'>Stress</a> as the fallen ally's life force is returned to the forest.</p>"], category: "Supernatural", ednote: "" },
{ label: "Electric Eels", name: "electric-eels", tier: 2, type: "Horde", pages: ["Page 222"], summary: "A swarm of eels that encircle and electrocute.", motive: "Avoid larger predators, shock prey, tear apart", difficulty: 14, thresholdmajor: 10, thresholdsevere: 20, hp: 5, hphorde: 2, stress: 3, attackbonus: 0, attacklabel: "Shocking Bite", attackrange: "Melee", attackdamage: "2d6+4", attackdamagetype: "phy", features: ["<p><strong><em>Horde (2d4+1)&mdash;Passive:</em></strong> When the Eels have marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>2d4+1</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Paralyzing Shock&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make a standard attack against all targets within <a href='#define-range'>Very Close</a> range. You gain a <a href='#define-fear'>Fear</a> for each target that marks <a href='#define-hit-point'>HP</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Elemental Spark", name: "elemental-spark", tier: 3, type: "Minion", pages: ["Page 230"], summary: "A blazing mote of elemental fire.", motive: "Blast, consume, gain mass", difficulty: 15, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 0, attacklabel: "Burst of Fire", attackrange: "Close", attackdamage: "5", attackdamagetype: "mag", features: ["<p><strong><em>Minion (9)&mdash;Passive:</em></strong> The Elemental is defeated when they take any damage. For every 9 damage a PC deals to the Elemental, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Elemental Sparks within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 5 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Elite Soldier", name: "elite-soldier", tier: 2, type: "Standard", pages: ["Page 222"], summary: "An armored squire or experienced commoner looking to advance.", motive: "Gain glory, keep order, make alliances", difficulty: 15, thresholdmajor: 9, thresholdsevere: 18, hp: 4, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Spear", attackrange: "Very Close", attackdamage: "2d8+4", attackdamagetype: "phy", features: ["<p><strong><em>Reinforce&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to move into <a href='#define-range'>Melee</a> range of an ally and make a standard attack against a target within <a href='#define-range'>Very Close</a> range. On a success, deal <strong>2d10+2</strong> <a href='#define-damage-type'>physical damage</a> and the ally can clear a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Vassal's Loyalty&mdash;Reaction:</em></strong> When the Soldier is within <a href='#define-range'>Very Close</a> range of a knight or other noble who would take damage, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to move into <a href='#define-range'>Melee</a> range of them and take the damage instead.</p>"], category: "Person", ednote: "" },
{ label: "Failed Experiment", name: "failed-experiment", tier: 2, type: "Standard", pages: ["Page 223"], summary: "A magical necromantic experiment gone wrong, leaving them warped and ungainly.", motive: "Devour, hunt, track", difficulty: 13, thresholdmajor: 1, thresholdsevere: 23, hp: 3, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Bite and Claw", attackrange: "Melee", attackdamage: "2d6+5", attackdamagetype: "phy", experiences: ["Copycat +3"], features: ["<p><strong><em>Warped Fortitude&mdash;Passive:</em></strong> The Experiment is <a href='#define-damage-type'>resistant</a> to <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Overwhelm&mdash;Passive:</em></strong> When a target the Experiment attacks has other adversaries within <a href='#define-range'>Very Close</a> range, the Experiment deals double damage.</p>", "<p><strong><em>Lurching Lunge&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <a href='#define-spotlight'>spotlight</a> the Experiment as an additional GM move instead of spending <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Fallen Shock Troop", name: "fallen-shock-troop", tier: 4, type: "Minion", pages: ["Page 234"], summary: "A cursed soul bound to the Fallen's will.", motive: "Crush, dominate, earn relief, punish", difficulty: 18, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 2, attacklabel: "Cursed Axe", attackrange: "Very Close", attackdamage: "12", attackdamagetype: "phy", features: ["<p><strong><em>Minion (12)&mdash;Passive:</em></strong> The Shock Troop is defeated when they take any damage. For every 12 damage a PC deals to the Shock Troop, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Aura of Doom&mdash;Passive:</em></strong> When a PC marks <a href='#define-hit-point'>HP</a> from an attack by the Shock Troop, they lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Fallen Shock Troops within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 12 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Fallen Sorcerer", name: "fallen-sorcerer", tier: 4, type: "Support", pages: ["Page 234"], summary: "Warped mage bound by the bargains they made in life.", motive: "Acquire, dishearten, dominate, torment", difficulty: 19, thresholdmajor: 26, thresholdsevere: 42, hp: 6, hphorde: 0, stress: 5, attackbonus: 4, attacklabel: "Corrupted Staff", attackrange: "Far", attackdamage: "4d6+10", attackdamagetype: "mag", experiences: ["Ancient Knowledge +2"], features: ["<p><strong><em>Conflagration&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to unleash an all-consuming firestorm and make an attack against all targets within <a href='#define-range'>Close</a> range. Targets the Sorcerer succeeds against take <strong>2d10+6</strong> <a href='#define-damage-type'>direct magic damage</a>.</p>", "<p><strong><em>Nightmare Tableau&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to trap a target within <a href='#define-range'>Far</a> range in a powerful illusion of their worst fears. While trapped, the target is <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a> until they break free, ending both conditions, with a successful <a href='#define-trait-roll'>Instinct Roll</a>.</p>", "<p><strong><em>Slippery&mdash;Reaction:</em></strong> When the Sorcerer takes damage from an attack, they can teleport up to <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Shackles of Guilt&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 2d6)</a></em>. When the Sorcerer is in the <a href='#define-spotlight'>spotlight</a> for the first time, activate the countdown. When it triggers, all targets within <a href='#define-range'>Far</a> range become <a href='#define-condition'><em>Vulnerable</em></a> and must mark a <a href='#define-stress'>Stress</a> as they relive their greatest regrets. A target can break free from their regret with a successful <a href='#define-presence'>Presence</a> or <a href='#define-trait-roll'>Strength Roll</a>. When a PC fails to break free, they lose a <a href='#define-hope'>Hope</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Fallen Warlord: Realm-Breaker", name: "fallen-warlord-realm-breaker", tier: 4, type: "Solo", pages: ["Page 235"], summary: "A fallen God, wreathed in rage and resentment, bearing millennia of experience in breaking heroes' spirits.", motive: "Corrupt, dominate, punish, break the weak", difficulty: 20, thresholdmajor: 36, thresholdsevere: 66, hp: 8, hphorde: 0, stress: 5, attackbonus: 7, attacklabel: "Barbed Whip", attackrange: "Close", attackdamage: "4d8+7", attackdamagetype: "phy", experiences: ["Conquest +3", "History +2", "Intimidation +3"], features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Realm-Breaker can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Firespite Plate Armor&mdash;Passive:</em></strong> When the Realm-Breaker takes damage, reduce it by <strong>2d10</strong>.</p>", "<p><strong><em>Tormenting Lash&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make a standard attack against all targets within <a href='#define-range'>Very Close</a> range. When a target uses armor to reduce damage from this attack, they must mark 2 <a href='#define-armor'>Armor Slots</a>.</p>", "<p><strong><em>All-Consuming Rage&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown(Decreasing 8)</a></em>. When the Realm-Breaker is in the <a href='#define-spotlight'>spotlight</a> for the first time, activate the countdown. When it triggers, create a torrent of incarnate rage that rends flesh from bone. All targets within <a href='#define-range'>Far</a> range must make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>2d6+10</strong> <a href='#define-damage-type'>direct magic damage</a>. Targets who succeed take half damage. For each <a href='#define-hit-point'>HP</a> marked from this damage, summon a <a href='#define-adversary-fallen-shock-troop'>Fallen Shock Troop</a> within <a href='#define-range'>Very Close</a> range of the target who marked that <a href='#define-hit-point'>HP</a>. If the countdown ever decreases its maximum value to 0, the Realm-Breaker marks their remaining <a href='#define-hit-point'>HP</a> and all targets within <a href='#define-range'>Far</a> range must mark all remaining <a href='#define-hit-point'>HP</a> and make a <a href='#define-death'>death move</a>.</p>", "<p><strong><em>Doombringer&mdash;Reaction:</em></strong> When a target marks <a href='#define-hit-point'>HP</a> from an attack by the Realm-Breaker, all PCs within <a href='#define-range'>Far</a> range of the target must lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>I Have Never Known Defeat (Phase Change)&mdash;Reaction:</em></strong> When the Realm-Breaker marks their last <a href='#define-hit-point'>HP</a>, replace them with the <a href='#define-adversary-fallen-warlord-undefeated-champion'>Undefeated Champion</a> and immediately <a href='#define-spotlight'>spotlight</a> them.</p>"], category: "Supernatural", ednote: "" },
{ label: "Fallen Warlord: Undefeated Champion", name: "fallen-warlord-undefeated-champion", tier: 4, type: "Solo", pages: ["Page 235"], summary: "That which only the most feared have a chance to fear.", motive: "Dispatch merciless death, punish the defiant, secure victory at any cost", difficulty: 18, thresholdmajor: 3, thresholdsevere: 58, hp: 11, hphorde: 0, stress: 5, attackbonus: 8, attacklabel: "Heart-Shattering Sword", attackrange: "Very Close", attackdamage: "4d12+13", attackdamagetype: "phy", experiences: ["Conquest +3", "History +2", "Intimidation +3"], features: ["<p><strong><em>Relentless (3)&mdash;Passive:</em></strong> The Undefeated Champion can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Faltering Armor&mdash;Passive:</em></strong> When the Undefeated Champion takes damage, reduce it by <strong>1d10</strong>.</p>", "<p><strong><em>Shattering Strike&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make a standard attack against all targets within <a href='#define-range'>Very Close</a> range. PCs the Champion succeeds against lose a number of <a href='#define-hope'>Hope</a> equal to the <a href='#define-hit-point'>HP</a> they marked from this attack.</p>", "<p><strong><em>Endless Legions&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to summon a number of <a href='#define-adversary-fallen-shock-troop'>Fallen Shock Troops</a> equal to twice the number of PCs. The Shock Troops appear at <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Circle of Defilement&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (1d8)</a></em>. When the Undefeated Champion is in the <a href='#define-spotlight'>spotlight</a> for the first time, activate the countdown. When it triggers, activate a magical circle covering an area within <a href='#define-range'>Far</a> range of the Champion. A target within that area is <a href='#define-condition'><em>Vulnerable</em></a> until they leave the circle. The circle can be removed by dealing <a href='#define-hit-point'>Severe</a> damage to the Undefeated Champion.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Undefeated Champion makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Doombringer&mdash;Reaction:</em></strong> When a target marks <a href='#define-hit-point'>HP</a> from an attack by the Undefeated Champion, all PCs within <a href='#define-range'>Far</a> range of the target lose a <a href='#define-hope'>Hope</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Giant Beastmaster", name: "giant-beastmaster", tier: 2, type: "Leader", pages: ["Page 223"], summary: "A leather-clad warrior bearing a whip and massive bow.", motive: "Command, make a living, maneuver, pin down, protect companion animals", difficulty: 16, thresholdmajor: 1, thresholdsevere: 24, hp: 6, hphorde: 0, stress: 5, attackbonus: 2, attacklabel: "Longbow", attackrange: "Far", attackdamage: "2d8+4", attackdamagetype: "phy", experiences: ["Animal Handling +3"], features: ["<p><strong><em>Two as One&mdash;Passive:</em></strong> When the Beastmaster is <a href='#define-spotlight'>spotlighted</a>, you can also <a href='#define-spotlight'>spotlight</a> a Tier 1 animal adversary currently under their control.</p>", "<p><strong><em>Pinning Strike&mdash;Action:</em></strong> Make a standard attack against a target. On a success, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to pin them to a nearby surface. The pinned target is <a href='#define-condition'><em>Restrained</em></a> until they break free with a successful <a href='#define-finesse'>Finesse</a> or <a href='#define-trait-roll'>Strength Roll</a>.</p>", "<p><strong><em>Deadly Companion&mdash;Action:</em></strong> Twice per scene, summon a <a href='#define-adversary-bear'>Bear</a>, <a href='#define-adversary-dire-wolf'>Dire Wolf</a>, or similar Tier 1 animal adversary under the Beastmaster's control. The adversary appears at <a href='#define-range'>Close</a> range and is immediately <a href='#define-spotlight'>spotlighted</a>.</p>"], category: "Person", ednote: "" },
{ label: "Giant Brawler", name: "giant-brawler", tier: 2, type: "Bruiser", pages: ["Page 223"], summary: "An especially muscular giant wielding a warhammer larger than a human.", motive: "Make a living, overwhelm, slam, topple", difficulty: 15, thresholdmajor: 1, thresholdsevere: 28, hp: 7, hphorde: 0, stress: 4, attackbonus: 2, attacklabel: "Warhammer", attackrange: "Very Close", attackdamage: "2d12+3", attackdamagetype: "phy", experiences: ["Intrusion +2"], features: ["<p><strong><em>Battering Ram&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to have the Brawler charge at an inanimate object within <a href='#define-range'>Close</a> range they could feasibly smash (such as a wall, cart, or market stand) and destroy it. All targets within <a href='#define-range'>Very Close</a> range of the object must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>2d4+3</strong> <a href='#define-damage-type'>physical damage</a> from the shrapnel.</p>", "<p><strong><em>Bloody Reprisal&mdash;Reaction:</em></strong> When the Brawler marks 2 or more <a href='#define-hit-point'>HP</a> from an attack within <a href='#define-range'>Very Close</a> range, you can make a standard attack against the attacker. On a success, the Brawler deals <strong>2d6+15</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Brawler makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Giant Eagle", name: "giant-eagle", tier: 2, type: "Skulk", pages: ["Page 223"], summary: "A giant bird of prey with blood-stained talons.", motive: "Hunt prey, stay mobile, strike decisively", difficulty: 14, thresholdmajor: 8, thresholdsevere: 19, hp: 4, hphorde: 0, stress: 4, attackbonus: 1, attacklabel: "Claws and Beak", attackrange: "Very Close", attackdamage: "2d6+3", attackdamagetype: "phy", features: ["<p><strong><em>Flight&mdash;Passive:</em></strong> While flying, the Eagle gains a +3 bonus to their <a href='#define-difficulty'>Difficulty</a>.</p>", "<p><strong><em>Deadly Dive&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to attack a target within <a href='#define-range'>Far</a> range. On a success, deal <strong>2d10+2</strong> <a href='#define-damage-type'>physical damage</a> and knock the target over, making them <a href='#define-condition'><em>Vulnerable</em></a> until they next act.</p>", "<p><strong><em>Take Off&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, deal <strong>2d4+3</strong> <a href='#define-damage-type'>physical damage</a> and the target must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or become <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Restrained</em></a> within the Eagle's massive talons. If the target is <a href='#define-condition'><em>Restrained</em></a>, the Eagle immediately lifts them to the air to Very <a href='#define-range'>Far</a> range above the battlefield while holding them.</p>", "<p><strong><em>Deadly Drop&mdash;Action:</em></strong> While flying, the Eagle can drop a <a href='#define-condition'><em>Restrained</em></a> target they are holding. When dropped, the target is no longer <a href='#define-condition'><em>Restrained</em></a> but starts falling. If their fall isn't prevented during the PCs' next action, the target takes <strong>2d20</strong> <a href='#define-damage-type'>physical damage</a> when they land.</p>"], category: "Monster", ednote: "" },
{ label: "Giant Mosquitoes", name: "giant-mosquitoes", tier: 1, type: "Horde", pages: ["Page 211"], summary: "Dozens of fist-sized mosquitoes, flying together for protection.", motive: "Fly away, harass, steal blood", difficulty: 10, thresholdmajor: 5, thresholdsevere: 9, hp: 6, hphorde: 5, stress: 3, attackbonus: -2, attacklabel: "Proboscis", attackrange: "Melee", attackdamage: "1d8+3", attackdamagetype: "phy", experiences: ["Camouflage +2"], features: ["<p><strong><em>Horde (1d4+1)&mdash;Passive:</em></strong> When the Mosquitoes have marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>1d4+1</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Flying&mdash;Passive:</em></strong> While flying, the Mosquitoes have a +2 bonus to their <a href='#define-difficulty'>Difficulty</a>.</p>", "<p><strong><em>Bloodseeker&mdash;Reaction:</em></strong> When the Mosquitoes' attack causes a target to mark <a href='#define-hit-point'>HP</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to force the target to mark an additional <a href='#define-hit-point'>HP</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Giant Rat", name: "giant-rat", tier: 1, type: "Minion", pages: ["Page 211"], summary: "A cat-sized rodent skilled at scavenging and survival.", motive: "Burrow, hunger, scavenge, wear down", difficulty: 10, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -4, attacklabel: "Claws", attackrange: "Melee", attackdamage: "1", attackdamagetype: "phy", experiences: ["Keen Senses +3"], features: ["<p><strong><em>Minion (3)&mdash;Passive:</em></strong> The Rat is defeated when they take any damage. For every 3 damage a PC deals to the Rat, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Giant Rats within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 1 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Monster", ednote: "" },
{ label: "Giant Recruit", name: "giant-recruit", tier: 2, type: "Minion", pages: ["Page 223"], summary: "A giant fighter undergoing borrowed armor.", motive: "Batter, make a living, overwhelm, terrify", difficulty: 13, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 2, attackbonus: 1, attacklabel: "Warhammer", attackrange: "Very Close", attackdamage: "5", attackdamagetype: "phy", features: ["<p><strong><em>Minion (7)&mdash;Passive:</em></strong> The Recruit is defeated when they take any damage. For every 7 damage a PC deals to the Recruit, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Giant Recruits within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 5 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Person", ednote: "" },
{ label: "Giant Scorpion", name: "giant-scorpion", tier: 1, type: "Bruiser", pages: ["Page 211"], summary: "A human-sized arachnid with tearing claws and a stinging tail.", motive: "Ambush, feed, grapple, poison", difficulty: 13, thresholdmajor: 7, thresholdsevere: 13, hp: 6, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Pincers", attackrange: "Melee", attackdamage: "1d12+2", attackdamagetype: "phy", experiences: ["Camouflage +2"], features: ["<p><strong><em>Double Strike&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make a standard attack against two targets within <a href='#define-range'>Melee</a> range.</p>", "<p><strong><em>Venomous Stinger&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, <strong><a href='#define-fear'>spend a Fear</a></strong> to deal <strong>1d4+4</strong> <a href='#define-damage-type'>physical damage</a> and <em>Poison</em> them until their next rest or they succeed on a <a href='#define-trait-roll'>Knowledge Roll</a> (16). While <em>Poisoned</em>, the target must roll a <strong>d6</strong> before they make an <a href='#define-action-roll'>action roll</a>. On a result of 4 or lower, they must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Scorpion makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Glass Snake", name: "glass-snake", tier: 1, type: "Standard", pages: ["Page 212", "Errata"], summary: "A clear serpent with a massive head that leaves behind a glass shard trail wherever they go.", motive: "Climb, feed, keep distance, scare", difficulty: 14, thresholdmajor: 6, thresholdsevere: 10, hp: 5, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Glass Fangs", attackrange: "Very Close", attackdamage: "1d8+2", attackdamagetype: "phy", features: ["<p><strong><em>Armor-Shredding Shards&mdash;Passive:</em></strong> After a successful attack against the Snake within <a href='#define-range'>Melee</a> range, the attacker must mark an <a href='#define-armor'>Armor Slot</a>. If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Spinning Serpent&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against all targets within <a href='#define-range'>Very Close</a> range. Targets the Snake succeeds against take <strong>1d6+1</strong> <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Spitter&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to introduce a 6 Spitter Die. When the Snake is in the <a href='#define-spotlight'>spotlight</a>, roll this die. On a result of 5 or higher, all targets in front of the Snake within <a href='#define-range'>Far</a> range must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>1d4</strong> <a href='#define-damage-type'>physical damage</a>. The Snake can take the <a href='#define-spotlight'>spotlight</a> a second time this <a href='#define-spotlight'>GM turn</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Gorgon", name: "gorgon", tier: 2, type: "Solo", pages: ["Page 224"], summary: "A snake-headed, scaled humanoid with a gilded bow, enraged that their peace has been disturbed.", motive: "Corner, hit-and-run, petrify, seek vengeance", difficulty: 15, thresholdmajor: 13, thresholdsevere: 25, hp: 9, hphorde: 0, stress: 3, attackbonus: 4, attacklabel: "Sinew Shortbow", attackrange: "Far", attackdamage: "2d20+3", attackdamagetype: "mag", experiences: ["Instinct +3"], features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Gorgon can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Suneater Arrows&mdash;Passive:</em></strong> When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can't become <a href='#define-condition'><em>Hidden</em></a>. Attack rolls made against a Glowing target have advantage.</p>", "<p><strong><em>Crown of Serpents&mdash;Action:</em></strong> Make an <a href='#define-attack-roll'>attack roll</a> against a target within <a href='#define-range'>Melee</a> range using the Gorgon's protective snakes. On a success, mark <a href='#define-stress'>Stress</a> to deal <strong>2d10+4</strong> <a href='#define-damage-type'>physical damage</a> and the target must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Petrifying Gaze&mdash;Reaction:</em></strong> When the Gorgon takes damage from an attack within <a href='#define-range'>Close</a> range, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to force the attacker to make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, they begin to turn to stone, marking a <a href='#define-hit-point'>HP</a> and starting a <a href='#define-countdown'>Petrification Countdown (4)</a>. This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a <a href='#define-death'>death move</a>. If the Gorgon is defeated, all petrification countdowns end.</p>", "<p><strong><em>Death Glare&mdash;Reaction:</em></strong> When the Gorgon makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Greater Earth Elemental", name: "greater-earth-elemental", tier: 3, type: "Bruiser", pages: ["Page 230"], summary: "A living landslide of boulders and dust, as large as a house.", motive: "Avalanche, knock over, pummel", difficulty: 17, thresholdmajor: 2, thresholdsevere: 40, hp: 10, hphorde: 0, stress: 4, attackbonus: 7, attacklabel: "Boulder Fist", attackrange: "Very Close", attackdamage: "3d10+1", attackdamagetype: "phy", features: ["<p><strong><em>Slow&mdash;Passive:</em></strong> When you <a href='#define-spotlight'>spotlight</a> the Elemental and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you <a href='#define-spotlight'>spotlight</a> the Elemental and they have a token on their stat block, clear the token and they can act.</p>", "<p><strong><em>Crushing Blows&mdash;Passive:</em></strong> When the Elemental makes a successful attack, the target must mark an <a href='#define-armor'>Armor Slot</a> without receiving its benefits (they can still use <a href='#define-armor'>armor</a> to reduce the damage). If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an additional <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Immovable Object&mdash;Passive:</em></strong> An attack that would move the Elemental moves them two fewer ranges (for example, <a href='#define-range'>Far</a> becomes <a href='#define-range'>Very Close</a>). When the Elemental takes <a href='#define-damage-type'>physical damage</a>, reduce it by 7.</p>", "<p><strong><em>Rockslide&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to create a rockslide that buries all the land in front of Elemental within <a href='#define-range'>Close</a> range with rockfall. All targets in this area must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> (19). Targets who fail take <strong>2d12+5</strong> <a href='#define-damage-type'>physical damage</a> and become <a href='#define-condition'><em>Vulnerable</em></a> until their next roll with <a href='#define-hope'>Hope</a>. Targets who succeed take half damage.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Elemental makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Greater Water Elemental", name: "greater-water-elemental", tier: 3, type: "Support", pages: ["Page 230"], summary: "A huge living wave that crashes down upon enemies.", motive: "Deluge, disperse, drown", difficulty: 17, thresholdmajor: 17, thresholdsevere: 34, hp: 5, hphorde: 0, stress: 5, attackbonus: 3, attacklabel: "Crashing Wave", attackrange: "Very Close", attackdamage: "3d4+1", attackdamagetype: "mag", features: ["<p><strong><em>Water Jet&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to attack a target within <a href='#define-range'>Very Close</a> range. On a success, deal <strong>2d4+7</strong> <a href='#define-damage-type'>physical damage</a> and the target's next action has <a href='#define-advantage'>disadvantage</a>. On a failure, the target must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Drowning Embrace&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make an attack against all targets within <a href='#define-range'>Very Close</a> range. Targets the Elemental succeeds against become <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a> as they begin drowning. A target can break free, ending both conditions, with a successful <a href='#define-strength'>Strength</a> or <a href='#define-trait-roll'>Instinct Roll</a>.</p>", "<p><strong><em>High Tide&mdash;Reaction:</em></strong> When the Elemental makes a successful standard attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to knock the target back to <a href='#define-range'>Close</a> range.</p>"], category: "Supernatural", ednote: "" },
{ label: "Green Ooze", name: "green-ooze", tier: 1, type: "Skulk", pages: ["Page 215"], summary: "A moving mound of translucent green slime.", motive: "Camouflage, consume and multiply, creep up, envelop", difficulty: 8, thresholdmajor: 5, thresholdsevere: 10, hp: 5, hphorde: 0, stress: 2, attackbonus: 1, attacklabel: "Ooze Appendage", attackrange: "Melee", attackdamage: "1d6+1", attackdamagetype: "mag", experiences: ["Camouflage +3"], features: ["<p><strong><em>Slow&mdash;Passive:</em></strong> When you <a href='#define-spotlight'>spotlight</a> the Ooze and they don't have a token on their stat block, they can't act. Place a token on their stat block and describe what they're preparing to do. When you <a href='#define-spotlight'>spotlight</a> the Ooze and they have a token on their stat block, clear the token and they can act.</p>", "<p><strong><em>Acidic Form&mdash;Passive:</em></strong> When the Ooze makes a successful attack, the target must mark an <a href='#define-armor'>Armor Slot</a> without receiving its benefits (they can still use <a href='#define-armor'>armor</a> to reduce the damage). If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an additional <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Envelop&mdash;Action:</em></strong> Make a standard attack against a target within <a href='#define-range'>Melee</a> range. On a success, the Ooze envelops them and the target must mark 2 <a href='#define-stress'>Stress</a>. The target must mark an additional <a href='#define-stress'>Stress</a> when they make an <a href='#define-action-roll'>action roll</a>. If the Ooze takes <a href='#define-hit-point'>Severe</a> damage, the target is freed.</p>", "<p><strong><em>Split&mdash;Reaction:</em></strong> When the Ooze has 3 or more <a href='#define-hit-point'>HP</a> marked, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to split them into two <a href='#define-adversary-tiny-green-ooze'>Tiny Green Oozes</a> (with no marked <a href='#define-hit-point'>HP</a> or <a href='#define-stress'>Stress</a>). Immediately <a href='#define-spotlight'>spotlight</a> both of them.</p>"], category: "Monster", ednote: "" },
{ label: "Tiny Green Ooze", name: "tiny-green-ooze", tier: 1, type: "Skulk", pages: ["Page 215"], summary: "A small moving mound of translucent green slime.", motive: "Camouflage, creep up", difficulty: 14, thresholdmajor: 4, thresholdsevere: 0, hp: 2, hphorde: 0, stress: 1, attackbonus: -1, attacklabel: "Ooze Appendage", attackrange: "Melee", attackdamage: "1d4+1", attackdamagetype: "mag", features: ["<p><strong><em>Acidic Form&mdash;Passive:</em></strong> When the Ooze makes a successful attack, the target must mark an <a href='#define-armor'>Armor Slot</a> without receiving its benefits (they can still use <a href='#define-armor'>armor</a> to reduce the damage). If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an additional <a href='#define-hit-point'>HP</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Hallowed Archer", name: "hallowed-archer", tier: 4, type: "Ranged", pages: ["Page 236"], summary: "Spirit soldiers with sanctified bows.", motive: "Focus fire, obey, retribution, volley", difficulty: 19, thresholdmajor: 2, thresholdsevere: 45, hp: 3, hphorde: 0, stress: 2, attackbonus: 4, attacklabel: "Sanctified Longbow", attackrange: "Far", attackdamage: "4d8+8", attackdamagetype: "phy", features: ["<p><strong><em>Punish the Guilty&mdash;Passive:</em></strong> The Archer deals double damage to targets marked <em>Guilty</em> by a <a href='#define-adversary-high-seraph'>High Seraph</a>.</p>", "<p><strong><em>Divine Volley&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make a standard attack against up to three targets.</p>"], category: "Supernatural", ednote: "" },
{ label: "Hallowed Soldier", name: "hallowed-soldier", tier: 4, type: "Minion", pages: ["Page 236"], summary: "Souls of the faithful, lifted up with divine weaponry.", motive: "Obey, outmaneuver, punish, swarm", difficulty: 18, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 2, attackbonus: 2, attacklabel: "Sword and Shield", attackrange: "Melee", attackdamage: "10", attackdamagetype: "phy", features: ["<p><strong><em>Minion (13)&mdash;Passive:</em></strong> The Soldier is defeated when they take any damage. For every 13 damage a PC deals to the Soldier, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Divine Flight&mdash;Passive:</em></strong> While the Soldier is flying, <strong><a href='#define-fear'>spend a Fear</a></strong> to move up to <a href='#define-range'>Far</a> range instead of <a href='#define-range'>Close</a> range before taking an action.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Hallowed Soldiers within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 10 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Harrier", name: "harrier", tier: 1, type: "Standard", pages: ["Page 212"], summary: "A nimble fighter armed with javelins.", motive: "Flank, harry, kite, profit", difficulty: 12, thresholdmajor: 5, thresholdsevere: 9, hp: 3, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Javelin", attackrange: "Close", attackdamage: "1d6+2", attackdamagetype: "phy", experiences: ["Camouflage +2"], features: ["<p><strong><em>Maintain Distance&mdash;Passive:</em></strong> After making a standard attack, the Harrier can move anywhere within <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Fall Back&mdash;Reaction:</em></strong> When a creature moves into <a href='#define-range'>Melee</a> range to make an attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> before the <a href='#define-attack-roll'>attack roll</a> to move anywhere within <a href='#define-range'>Close</a> range and make an attack against that creature. On a success, deal <strong>1d10+2</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Person", ednote: "" },
{ label: "Head Guard", name: "head-guard", tier: 1, type: "Leader", pages: ["Page 212"], summary: "A seasoned guard with a mace, a whistle, and a bellowing voice.", motive: "Arrest, close gates, pin down, seek glory", difficulty: 15, thresholdmajor: 7, thresholdsevere: 13, hp: 7, hphorde: 0, stress: 3, attackbonus: 4, attacklabel: "Mace", attackrange: "Melee", attackdamage: "1d10+4", attackdamagetype: "phy", experiences: ["Commander +2", "Local Knowledge +2"], features: ["<p><strong><em>Rally Guards&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> the Head Guard and up to <strong>2d4</strong> allies within <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>On My Signal&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (5)</a></em>. When the Head Guard is in the <a href='#define-spotlight'>spotlight</a> for the first time, activate the countdown. It ticks down when a PC makes an <a href='#define-attack-roll'>attack roll</a>. When it triggers, all <a href='#define-adversary-archer-guard'>Archer Guards</a> within <a href='#define-range'>Far</a> range make a standard attack with <a href='#define-advantage'>advantage</a> against the nearest target within their range. If any attacks succeed on the same target, combine their damage.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Head Guard makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Head Vampire", name: "head-vampire", tier: 3, type: "Leader", pages: ["Page 232"], summary: "A captivating undead dressed in aristocratic finery.", motive: "Create thralls, charm, command, fly, intimidate", difficulty: 17, thresholdmajor: 2, thresholdsevere: 42, hp: 6, hphorde: 0, stress: 6, attackbonus: 5, attacklabel: "Rapier", attackrange: "Melee", attackdamage: "2d20+4", attackdamagetype: "phy", experiences: ["Aristocrat +3"], features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> When the Vampire makes a successful attack, all PCs within <a href='#define-range'>Far</a> range lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Look Into My Eyes&mdash;Passive:</em></strong> A creature who moves into <a href='#define-range'>Melee</a> range of the Vampire must make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, you gain <strong>1d4</strong> <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Feed on Followers&mdash;Action:</em></strong> When the Vampire is within <a href='#define-range'>Melee</a> range of an ally, they can cause the ally to mark a <a href='#define-hit-point'>HP</a>. The Vampire then clears a <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>The Hunt Is On&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to summon <strong>1d4</strong> <a href='#define-adversary-vampire'>Vampires</a>, who appear at <a href='#define-range'>Far</a> range and immediately take the <a href='#define-spotlight'>spotlight</a>.</p>", "<p><strong><em>Lifesuck&mdash;Reaction:</em></strong> When the Vampire is <a href='#define-spotlight'>spotlighted</a>, roll a <strong>d8</strong>. On a result of 6 or higher, all targets within <a href='#define-range'>Very Close</a> range must mark a <a href='#define-hit-point'>HP</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "High Seraph", name: "high-seraph", tier: 4, type: "Leader", pages: ["Page 236"], summary: "A divine champion, head of a hallowed host of warriors who enforce their god's will.", motive: "Enforce dogma, fly, pronounce judgment, smite", difficulty: 20, thresholdmajor: 37, thresholdsevere: 70, hp: 7, hphorde: 0, stress: 5, attackbonus: 8, attacklabel: "Holy Sword", attackrange: "Very Close", attackdamage: "4d10+10", attackdamagetype: "phy", experiences: ["Divine Knowledge +3"], features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Seraph can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Divine Flight&mdash;Passive:</em></strong> While the Seraph is flying, <strong><a href='#define-fear'>spend a Fear</a></strong> to move up to <a href='#define-range'>Far</a> range instead of <a href='#define-range'>Close</a> range before taking an action.</p>", "<p><strong><em>Judgment&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make a target <em>Guilty</em> in the eyes of the Seraph's god until the Seraph is defeated. While <em>Guilty</em>, the target doesn't gain <a href='#define-hope'>Hope</a> on a result with <a href='#define-hope'>Hope</a>. When the Seraph succeeds on a standard attack against a <em>Guilty</em> target, they deal <a href='#define-hit-point'>Severe</a> damage instead of their standard damage. The Seraph can only mark one target at a time.</p>", "<p><strong><em>God Rays&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to reflect a sliver of divinity as a searing beam of light that hits up to twenty targets within Very <a href='#define-range'>Far</a> range. Targets must make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a>, with <a href='#define-advantage'>disadvantage</a> if they are marked <em>Guilty</em>. Targets who fail take <strong>4d6+12</strong> <a href='#define-damage-type'>magic damage</a>. Targets who succeed take half damage.</p>", "<p><strong><em>We Are One&mdash;Action:</em></strong> Once per scene, <strong><a href='#define-fear'>spend a Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> all other adversaries within <a href='#define-range'>Far</a> range. Attacks they make while <a href='#define-spotlight'>spotlighted</a> in this way deal half damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Huge Green Ooze", name: "huge-green-ooze", tier: 3, type: "Skulk", pages: ["Page 231"], summary: "A translucent green mound of acid taller than most humans.", motive: "Camouflage, creep up, envelop, multiply", difficulty: 15, thresholdmajor: 1, thresholdsevere: 30, hp: 7, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Ooze Appendage", attackrange: "Melee", attackdamage: "3d8+1", attackdamagetype: "mag", experiences: ["Blend In +3"], features: ["<p><strong><em>Slow&mdash;Passive:</em></strong> When you <a href='#define-spotlight'>spotlight</a> the Ooze and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you <a href='#define-spotlight'>spotlight</a> the Ooze and they have a token on their stat block, clear the token and they can act.</p>", "<p><strong><em>Acidic Form&mdash;Passive:</em></strong> When the Ooze makes a successful attack, the target must mark an <a href='#define-armor'>Armor Slot</a> without receiving its benefits (they can still use <a href='#define-armor'>armor</a> to reduce the damage). If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an additional <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Envelop&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Melee</a> range. On a success, the Ooze <em>Envelops</em> them and the target must mark 2 <a href='#define-stress'>Stress</a>. While <em>Enveloped</em>, the target must mark an additional <a href='#define-stress'>Stress</a> every time they make an <a href='#define-action-roll'>action roll</a>. When the Ooze takes <a href='#define-hit-point'>Severe</a> damage, all <em>Enveloped</em> targets are freed and the condition is cleared.</p>", "<p><strong><em>Split&mdash;Reaction:</em></strong> When the Ooze has 4 or more <a href='#define-hit-point'>HP</a> marked, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to split them into two <a href='#define-adversary-green-ooze'>Green Oozes</a> (with no marked <a href='#define-hit-point'>HP</a> or <a href='#define-stress'>Stress</a>). Immediately <a href='#define-spotlight'>spotlight</a> both of them.</p>"], category: "Monster", ednote: "" },
{ label: "Hydra", name: "hydra", tier: 3, type: "Solo", pages: ["Page 231"], summary: "A quadrupedal scaled beast with multiple long-necked heads, each filled with menacing fangs.", motive: "Devour, regenerate, terrify", difficulty: 18, thresholdmajor: 19, thresholdsevere: 35, hp: 10, hphorde: 0, stress: 5, attackbonus: 3, attacklabel: "Bite", attackrange: "Close", attackdamage: "2d12+2", attackdamagetype: "phy", features: ["<p><strong><em>Many-Headed Menace&mdash;Passive:</em></strong> The Hydra begins with three heads and can have up to five. When the Hydra takes <a href='#define-hit-point'>Major</a> or greater damage, they lose a head.</p>", "<p><strong><em>Relentless (X)&mdash;Passive:</em></strong> The Hydra can be <a href='#define-spotlight'>spotlighted</a> X times per <a href='#define-spotlight'>GM turn</a>, where X is the Hydra's number of heads. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Regeneration&mdash;Action:</em></strong> If the Hydra has any marked <a href='#define-hit-point'>HP</a>, <strong><a href='#define-fear'>spend a Fear</a></strong> to clear a <a href='#define-hit-point'>HP</a> and grow two heads.</p>", "<p><strong><em>Terrifying Chorus&mdash;Action:</em></strong> All PCs within <a href='#define-range'>Far</a> range lose 2 <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Magical Weakness&mdash;Reaction:</em></strong> When the Hydra takes <a href='#define-damage-type'>magic damage</a>, they become <em>Dazed</em> until the next roll with <a href='#define-fear'>Fear</a>. While <em>Dazed</em>, they can't use their Regeneration action but are <a href='#define-damage-type'>immune</a> to <a href='#define-damage-type'>magic damage</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Jagged Knife Bandit", name: "jagged-knife-bandit", tier: 1, type: "Standard", pages: ["Page 193", "Page 213"], summary: "A cunning criminal in a cloak bearing one of the gang's iconic knives.", motive: "Escape, profit, steal, throw smoke", difficulty: 12, thresholdmajor: 8, thresholdsevere: 14, hp: 5, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Daggers", attackrange: "Melee", attackdamage: "1d8+1", attackdamagetype: "phy", experiences: ["Thief +2"], features: ["<p><strong><em>Climber&mdash;Passive:</em></strong> The Bandit climbs just as easily as they run.</p>", "<p><strong><em>From Above&mdash;Passive:</em></strong> When the Bandit succeeds on a standard attack from above a target, they deal <strong>1d10+1</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage.</p>"], category: "Person", ednote: "" },
{ label: "Jagged Knife Hexer", name: "jagged-knife-hexer", tier: 1, type: "Support", pages: ["Page 213"], summary: "A staff-wielding bandit in a cloak adorned with magical paraphernalia, using curses to vex their foes.", motive: "Command, hex, profit", difficulty: 13, thresholdmajor: 5, thresholdsevere: 9, hp: 4, hphorde: 0, stress: 4, attackbonus: 2, attacklabel: "Staff", attackrange: "Far", attackdamage: "1d6+2", attackdamagetype: "mag", experiences: ["Magical Knowledge +2"], features: ["<p><strong><em>Curse&mdash;Action:</em></strong> Choose a target within <a href='#define-range'>Far</a> range and <a href='#define-temporary'>temporarily</a> <em>Curse</em> them. While the target is <em>Cursed</em>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> so that target rolls with <a href='#define-hope'>Hope</a> to make the roll be with <a href='#define-fear'>Fear</a> instead.</p>", "<p><strong><em>Chaotic Flux&mdash;Action:</em></strong> Make an attack against up to three targets within <a href='#define-range'>Very Close</a> range. <strong><a href='#define-stress'>Mark a Stress</a></strong> to deal <strong>2d6+3</strong> <a href='#define-damage-type'>magic damage</a> to targets the Hexer succeeded against.</p>"], category: "Person", ednote: "" },
{ label: "Jagged Knife Kneebreaker", name: "jagged-knife-kneebreaker", tier: 1, type: "Bruiser", pages: ["Page 213"], summary: "An imposing brawler carrying a large club.", motive: "Grapple, intimidate, profit, steal", difficulty: 12, thresholdmajor: 7, thresholdsevere: 14, hp: 7, hphorde: 0, stress: 4, attackbonus: -3, attacklabel: "Club", attackrange: "Melee", attackdamage: "1d4+6", attackdamagetype: "phy", experiences: ["Thief +2", "Unveiled Threats +3"], features: ["<p><strong><em>I've Got 'Em&mdash;Passive:</em></strong> Creatures <a href='#define-condition'><em>Restrained</em></a> by the Kneebreaker take double damage from attacks by other adversaries.</p>", "<p><strong><em>Hold Them Down&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Melee</a> range. On a success, the target takes no damage but is <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a>. The target can break free, clearing both conditions, with a successful <a href='#define-trait-roll'>Strength Roll</a> or is freed automatically if the Kneebreaker takes <a href='#define-hit-point'>Major</a> or greater damage.</p>"], category: "Person", ednote: "" },
{ label: "Jagged Knife Lackey", name: "jagged-knife-lackey", tier: 1, type: "Minion", pages: ["Page 213"], summary: "A thief with simple clothes and small daggers, eager to prove themselves.", motive: "Escape, profit, throw smoke", difficulty: 9, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -2, attacklabel: "Daggers", attackrange: "Melee", attackdamage: "2", attackdamagetype: "phy", experiences: ["Thief +2"], features: ["<p><strong><em>Minion (3)&mdash;Passive:</em></strong> The Lackey is defeated when they take any damage. For every 3 damage a PC deals to the Lackey, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Jagged Knife Lackeys within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 2 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Person", ednote: "" },
{ label: "Jagged Knife Lieutenant", name: "jagged-knife-lieutenant", tier: 1, type: "Leader", pages: ["Page 213"], summary: "A seasoned bandit in quality leathers with a strong voice and cunning eyes.", motive: "Bully, command, profit, reinforce", difficulty: 13, thresholdmajor: 7, thresholdsevere: 14, hp: 6, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Javelin", attackrange: "Close", attackdamage: "1d8+3", attackdamagetype: "phy", experiences: ["Local Knowledge +2"], features: ["<p><strong><em>Tactician&mdash;Action:</em></strong> When you spotlight the Lieutenant, <strong><a href='#define-stress'>mark a Stress</a></strong> to also <a href='#define-spotlight'>spotlight</a> two allies within <a href='#define-range'>Close</a> range.<p>", "<p><strong><em>More Where That Came From&mdash;Action:</em></strong> Summon three <a href='#define-adversary-jagged-knife-lackey'>Jagged Knife Lackeys</a>, who appear at <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Coup de Grace&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make an attack against a <a href='#define-condition'><em>Vulnerable</em></a> target within <a href='#define-range'>Close</a> range. On a success, deal <strong>2d6+12</strong> <a href='#define-damage-type'>physical damage</a> and the target must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Lieutenant makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Jagged Knife Shadow", name: "jagged-knife-shadow", tier: 1, type: "Skulk", pages: ["Page 214"], summary: "A nimble scoundrel bearing a wicked knife and utilizing shadow magic to isolate targets.", motive: "Ambush, conceal, divide, profit", difficulty: 12, thresholdmajor: 4, thresholdsevere: 8, hp: 3, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Daggers", attackrange: "Melee", attackdamage: "1d4+4", attackdamagetype: "phy", experiences: ["Intrusion +3"], features: ["<p><strong><em>Backstab&mdash;Passive:</em></strong> When the Shadow succeeds on a standard attack that has advantage, they deal <strong>1d6+6</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage.</p>", "<p><strong><em>Cloaked&mdash;Action:</em></strong> Become <a href='#define-condition'><em>Hidden</em></a> until after the Shadow's next attack. Attacks made while <a href='#define-condition'><em>Hidden</em></a> from this feature have advantage.</p>"], category: "Person", ednote: "" },
{ label: "Jagged Knife Sniper", name: "jagged-knife-sniper", tier: 1, type: "Ranged", pages: ["Page 214"], summary: "A lanky bandit striking from cover with a shortbow.", motive: "Ambush, hide, profit, reposition", difficulty: 13, thresholdmajor: 4, thresholdsevere: 7, hp: 3, hphorde: 0, stress: 2, attackbonus: -1, attacklabel: "Shortbow", attackrange: "Far", attackdamage: "1d10+2", attackdamagetype: "phy", experiences: ["Stealth +2"], features: ["<p><strong><em>Unseen Strike&mdash;Passive:</em></strong> If the Sniper is <a href='#define-condition'><em>Hidden</em></a> when they make a successful standard attack against a target, they deal <strong>1d10+4</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage.</p>"], category: "Person", ednote: "" },
{ label: "Juvenile Flickerfly", name: "juvenile-flickerfly", tier: 2, type: "Solo", pages: ["Page 214"], summary: "A horse-sized insect with iridescent scales and crystalline wings moving faster than the eye can see.", motive: "Collect shiny things, hunt, swoop", difficulty: 14, thresholdmajor: 13, thresholdsevere: 26, hp: 10, hphorde: 0, stress: 5, attackbonus: -1, attacklabel: "Wing Slash", attackrange: "Very Close", attackdamage: "2d10+4", attackdamagetype: "phy", features: ["<p><strong><em>Relentless (3)&mdash;Passive:</em></strong> The Flickerfly can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to spotlight them.</p>", "<p><strong><em>Peerless Accuracy&mdash;Passive:</em></strong> Before the Flickerfly makes an attack, roll a <strong>d6</strong>. On a result of 4 or higher, the target's <a href='#define-evasion'>Evasion</a> is halved against this attack.</p>", "<p><strong><em>Mind Dance&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to create a magically dazzling display that grapples the minds of nearby foes. All targets within <a href='#define-range'>Close</a> range must make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. For each target who failed, you gain a <a href='#define-fear'>Fear</a> and the Flickerfly learns one of the target's fears.</p>", "<p><strong><em>Hallucinatory Breath&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 1d6)</a></em>. When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must succeed on an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have <a href='#define-advantage'>disadvantage</a> on this roll. Targets who fail must mark a <a href='#define-stress'>Stress</a> and lose a <a href='#define-hope'>Hope</a>.</p>"], category: "Person", ednote: "" },
{ label: "Knight of the Realm", name: "knight-of-the-realm", tier: 2, type: "Leader", pages: ["Page 224"], summary: "A decorated soldier with heavy armor and a powerful steed.", motive: "Run down, seek glory, show dominance", difficulty: 15, thresholdmajor: 13, thresholdsevere: 26, hp: 6, hphorde: 0, stress: 4, attackbonus: 4, attacklabel: "Longsword", attackrange: "Melee", attackdamage: "2d10+4", attackdamagetype: "phy", experiences: ["Ancient Knowledge +3", "High Society +2", "Tactics +2"], features: ["<p><strong><em>Chevalier&mdash;Passive:</em></strong> While the Knight is on a mount, they gain a +2 bonus to their <a href='#define-difficulty'>Difficulty</a>. When they take <a href='#define-hit-point'>Severe</a> damage, they're knocked from their mount and lose this benefit until they're next <a href='#define-spotlight'>spotlighted</a>.</p>", "<p><strong><em>Heavily Armored&mdash;Passive:</em></strong> When the Knight takes <a href='#define-damage-type'>physical damage</a>, reduce it by 3.</p>", "<p><strong><em>Cavalry Charge&mdash;Action:</em></strong> If the Knight is mounted, move up to <a href='#define-range'>Far</a> range and make a standard attack against a target. On a success, deal <strong>2d8+4</strong> <a href='#define-damage-type'>physical damage</a> and the target must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>For the Realm!&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <a href='#define-spotlight'>spotlight</a> <strong>1d4+1</strong> allies. Attacks they make while <a href='#define-spotlight'>spotlighted</a> in this way deal half damage.</p>"], category: "Person", ednote: "" },
{ label: "Kraken", name: "kraken", tier: 4, type: "Solo", pages: ["Page 236"], summary: "A legendary beast of the sea, bigger than the largest galleon, with sucker-laden tentacles and a terrifying maw.", motive: "Consume, crush, drown, grapple", difficulty: 20, thresholdmajor: 3, thresholdsevere: 70, hp: 11, hphorde: 0, stress: 8, attackbonus: 7, attacklabel: "Tentacles", attackrange: "Close", attackdamage: "4d12+10", attackdamagetype: "phy", experiences: ["Swimming +3"], features: ["<p><strong><em>Relentless (3)&mdash;Passive:</em></strong> The Kraken can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Many Tentacles&mdash;Passive:</em></strong> While the Kraken has 7 or fewer marked <a href='#define-hit-point'>HP</a>, they can make their standard attack against two targets within range.</p>", "<p><strong><em>Grapple and Drown&mdash;Action:</em></strong> Make an <a href='#define-attack-roll'>attack roll</a> against a target within <a href='#define-range'>Close</a> range. On a success, <strong><a href='#define-stress'>mark a Stress</a></strong> to grab them with a tentacle and drag them beneath the water. The target is <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a> until they break free with a successful <a href='#define-trait-roll'>Strength Roll</a> or the Kraken takes <a href='#define-hit-point'>Major</a> or greater damage. While <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a> in this way, a target must mark a <a href='#define-stress'>Stress</a> when they make an <a href='#define-action-roll'>action roll</a>.</p>", "<p><strong><em>Boiling Blast&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to spew a line of boiling water at any number of targets in a line up to <a href='#define-range'>Far</a> range. All targets must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>4d6+9</strong> <a href='#define-damage-type'>physical damage</a>. If a target marks an <a href='#define-armor'>Armor Slot</a> to reduce the damage, they must also mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Kraken makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Masked Thief", name: "masked-thief", tier: 2, type: "Skulk", pages: ["Page 225"], summary: "A cunning thief with acrobatic skill and a flair for the dramatic.", motive: "Evade, hide, pilfer, profit", difficulty: 14, thresholdmajor: 8, thresholdsevere: 17, hp: 4, hphorde: 0, stress: 5, attackbonus: 3, attacklabel: "Backsword", attackrange: "Melee", attackdamage: "2d8+3", attackdamagetype: "phy", experiences: ["Acrobatics +3"], features: ["<p><strong><em>Quick Hands&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Melee</a> range. On a success, deal <strong>1d8+2</strong> <a href='#define-damage-type'>physical damage</a> and the Thief steals one item or consumable from the target's inventory.</p>", "<p><strong><em>Escape Plan&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within <a href='#define-range'>Very Close</a> range of the trap must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> (13) or be pulled off their feet and suspended upside down. The target is <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a> until they break free, ending both conditions, with a successful <a href='#define-finesse'>Finesse</a> or <a href='#define-trait-roll'>Strength Roll</a> (13).</p>"], category: "Person", ednote: "" },
{ label: "Master Assassin", name: "master-assassin", tier: 2, type: "Leader", pages: ["Page 220"], summary: "A seasoned killer with a threatening voice and a deadly blade.", motive: "Ambush, get out alive, kill, prepare for all scenarios", difficulty: 15, thresholdmajor: 1, thresholdsevere: 25, hp: 7, hphorde: 0, stress: 5, attackbonus: 5, attacklabel: "Serrated Dagger", attackrange: "Close", attackdamage: "2d10+2", attackdamagetype: "phy", experiences: ["Command +3", "Intrusion +3"], features: ["<p><strong><em>Won't See It Coming&mdash;Passive:</em></strong> The Assassin deals <a href='#define-damage-type'>direct damage</a> while they're <a href='#define-condition'><em>Hidden</em></a>.</p>", "<p><strong><em>Strike as One&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <a href='#define-spotlight'>spotlight</a> a number of other Assassins equal to the Assassin's unmarked <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>The Subtle Blade&mdash;Reaction:</em></strong> When the Assassin successfully makes a standard attack against a <a href='#define-condition'><em>Vulnerable</em></a> target, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to deal <a href='#define-hit-point'>Severe</a> damage instead of their standard damage.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Assassin makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Merchant", name: "merchant", tier: 1, type: "Social", pages: ["Page 204"], summary: "A finely dressed trader with a keen eye for financial gain.", motive: "Buy low and sell high, create demand, inflate prices, seek profit", difficulty: 12, thresholdmajor: 4, thresholdsevere: 8, hp: 3, hphorde: 0, stress: 3, attackbonus: -4, attacklabel: "Club", attackrange: "Melee", attackdamage: "1d4+1", attackdamagetype: "phy", experiences: ["Shrewd Negotiator +3"], features: ["<p><strong><em>Preferential Treatment&mdash;Passive:</em></strong> A PC who succeeds on a <a href='#define-trait-roll'>Presence Roll</a> against the Merchant gains a discount on purchases. A PC who fails on a <a href='#define-trait-roll'>Presence Roll</a> against the Merchant must pay more and has <a href='#define-advantage'>disadvantage</a> on future <a href='#define-trait-roll'>Presence Rolls</a> against the Merchant.</p>", "<p><strong><em>The Runaround&mdash;Passive:</em></strong> When a PC rolls a 14 or lower on a <a href='#define-trait-roll'>Presence Roll</a> made against the Merchant, they must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Person", ednote: "" },
{ label: "Merchant Baron", name: "merchant-baron", tier: 2, type: "Social", pages: ["Page 225"], summary: "An accomplished merchant with a large operation under their command.", motive: "Abusive power, gather resources, mobilize minions", difficulty: 15, thresholdmajor: 9, thresholdsevere: 19, hp: 5, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Rapier", attackrange: "Melee", attackdamage: "1d6+2", attackdamagetype: "phy", experiences: ["Nobility +2", "Trade +2"], features: ["<p><strong><em>Everyone Has a Price&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to offer a target a dangerous bargain for something they want or need. If used on a PC, they must make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a> (17). On a failure, they must mark 2 <a href='#define-stress'>Stress</a> or take the deal.</p>", "<p><strong><em>The Best Muscle Money Can Buy&mdash;Action:</em></strong> Once per scene, <strong><a href='#define-stress'>mark a Stress</a></strong> to summon <strong>1d4+1</strong> Tier 1 <a href='#define-adversary'>adversaries</a>, who appear at <a href='#define-range'>Far</a> range, to enforce the Baron's will.</p>"], category: "Person", ednote: "" },
{ label: "Minor Chaos Elemental", name: "minor-chaos-elemental", tier: 1, type: "Solo", pages: ["Page 214"], summary: "A coruscating mass of uncontrollable magic.", motive: "Confound, destabilize, transmogrify", difficulty: 14, thresholdmajor: 7, thresholdsevere: 14, hp: 7, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Warp Blast", attackrange: "Close", attackdamage: "1d12+6", attackdamagetype: "mag", features: ["<p><strong><em>Arcane Master&mdash;Passive:</em></strong> The Elemental is <a href='#define-damage-type'>resistant</a> to <a href='#define-damage-type'>magic damage</a>.</p>", "<p><strong><em>Sickening Flux&mdash;Action:</em></strong> Mark a <a href='#define-hit-point'>HP</a> to force all targets within <a href='#define-range'>Close</a> range to mark a <a href='#define-stress'>Stress</a> and become <a href='#define-condition'><em>Vulnerable</em></a> until their next rest or they clear a <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Remake Reality&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to transform the area within <a href='#define-range'>Very Close</a> range into a different biome. All targets within this area take <strong>2d6+3</strong> <a href='#define-damage-type'>direct magic damage</a>.</p>", "<p><strong><em>Magical Reflection&mdash;Reaction:</em></strong> When the Elemental takes damage from an attack within <a href='#define-range'>Close</a> range, deal an amount of damage to the attacker equal to half of the damage they dealt.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Elemental makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Minor Demon", name: "minor-demon", tier: 1, type: "Solo", pages: ["Page 215"], summary: "A crimson-hued creature from the Circles Below, consumed by rage against all mortals.", motive: "Act erratically, corral targets, relish pain, torment", difficulty: 14, thresholdmajor: 8, thresholdsevere: 15, hp: 8, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Claws", attackrange: "Melee", attackdamage: "1d8+6", attackdamagetype: "phy", features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Demon can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>All Must Fall&mdash;Passive:</em></strong> When a PC rolls a failure with <a href='#define-fear'>Fear</a> while within <a href='#define-range'>Close</a> range of the Demon, they lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Hellfire&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to rain down hellfire within <a href='#define-range'>Far</a> range. All targets within the area must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>1d20+3</strong> <a href='#define-damage-type'>magic damage</a>. Targets who succeed take half damage.</p>", "<p><strong><em>Reaper&mdash;Reaction:</em></strong> Before rolling damage for the Demon's attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a bonus to the <a href='#define-damage-roll'>damage roll</a> equal to the Demon's current number of marked <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Demon makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Minor Fire Elemental", name: "minor-fire-elemental", tier: 1, type: "Solo", pages: ["Page 214"], summary: "A living flame the size of a large bonfire.", motive: "Encircle enemies, grow in size, intimidate, start fires", difficulty: 13, thresholdmajor: 7, thresholdsevere: 15, hp: 9, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Elemental Blast", attackrange: "Far", attackdamage: "1d10+4", attackdamagetype: "mag", features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Elemental can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Scorched Earth&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to choose a point within <a href='#define-range'>Far</a> range. The ground within <a href='#define-range'>Very Close</a> range of that point immediately bursts into flames. All creatures within this area must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>2d8</strong> <a href='#define-damage-type'>magic damage</a> from the flames. Targets who succeed take half damage.</p>", "<p><strong><em>Explosion&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to erupt in a fiery explosion. Make an attack against all targets within <a href='#define-range'>Close</a> range. Targets the Elemental succeeds against take <strong>1d8</strong> <a href='#define-damage-type'>magic damage</a> and are knocked back to <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Consume Kindling&mdash;Reaction:</em></strong> Three times per scene, when the Elemental moves on objects that are highly flammable, consume them to clear a <a href='#define-hit-point'>HP</a> or a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Elemental makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Minor Treant", name: "minor-treant", tier: 1, type: "Minion", pages: ["Page 215"], summary: "An ambulatory sapling rising up to defend their forest.", motive: "Crush, overwhelm, protect", difficulty: 10, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -2, attacklabel: "Cleaved Branch", attackrange: "Melee", attackdamage: "4", attackdamagetype: "phy", features: ["<p><strong><em>Minion (5)&mdash;Passive:</em></strong> The Treant is defeated when they take any damage. For every 5 damage a PC deals to the Treant, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Minor Treants within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 4 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Monster", ednote: "" },
{ label: "Minotaur Wrecker", name: "minotaur-wrecker", tier: 2, type: "Bruiser", pages: ["Page 225"], summary: "A massive bull-headed hybrid with a quick temper.", motive: "Consume, gore, navigate, overpower, pursue", difficulty: 16, thresholdmajor: 14, thresholdsevere: 27, hp: 7, hphorde: 0, stress: 5, attackbonus: 2, attacklabel: "Battleaxe", attackrange: "Very Close", attackdamage: "2d8+5", attackdamagetype: "phy", experiences: ["Navigation +2"], features: ["<p><strong><em>Ramp Up&mdash;Passive:</em></strong> You must <strong><a href='#define-fear'>spend a Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> the Minotaur. While <a href='#define-spotlight'>spotlighted</a>, they can make their standard attack against all targets within range.</p>", "<p><strong><em>Charging Bull&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to charge through a group within <a href='#define-range'>Close</a> range and make an attack against all targets in the Minotaur's path. Targets the Minotaur succeeds against take <strong>2d6+8</strong> <a href='#define-damage-type'>physical damage</a> and are knocked back to Very <a href='#define-range'>Far</a> range. If a target is knocked into a solid object or another creature, they take an extra <strong>1d6</strong> damage (combine their damage).</p>", "<p><strong><em>Gore&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Very Close</a> range, moving the Minotaur into <a href='#define-range'>Melee</a> range of them. On a success, deal <strong>2d8</strong> <a href='#define-damage-type'>direct physical damage</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Monarch", name: "monarch", tier: 3, type: "Social", pages: ["Page 231"], summary: "The sovereign ruler of a nation, unearthed in the privilege of tradition and wielding unmatched power in their domain.", motive: "Control vassals, destroy rivals, forge a legacy", difficulty: 16, thresholdmajor: 16, thresholdsevere: 32, hp: 6, hphorde: 0, stress: 5, attackbonus: 0, attacklabel: "Warhammer", attackrange: "Melee", attackdamage: "3d6+3", attackdamagetype: "phy", experiences: ["History +3", "Nobility +3"], features: ["<p><strong><em>Execute Them!&mdash;Action:</em></strong> Spend a <a href='#define-fear'>Fear</a> per PC in the party to have the group condemned for crimes real or imagined. A PC who succeeds on a <a href='#define-trait-roll'>Presence Roll</a> can demand trial by combat or another special form of trial.</p>", "<p><strong><em>Crossguard&mdash;Action:</em></strong> Once per scene, <strong><a href='#define-stress'>mark a Stress</a></strong> to summon six Tier 3 <a href='#define-adversary-type'>Minions</a>, who appear at <a href='#define-range'>Close</a> range to enforce the Monarch's will.</p>", "<p><strong><em>Casus Bell&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Long-Term Countdown (8)</a></em>. <strong><a href='#define-fear'>Spend a Fear</a></strong> to activate after the Monarch's desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain <strong>1d4</strong> <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Mortal Hunter", name: "mortal-hunter", tier: 2, type: "Leader", pages: ["Page 225"], summary: "An undead figure wearing a heavy leather coat, with searching eyes and a cruelly cut demeanor.", motive: "Devour, hunt, track", difficulty: 16, thresholdmajor: 1, thresholdsevere: 27, hp: 6, hphorde: 0, stress: 4, attackbonus: 5, attacklabel: "Tear at Flesh", attackrange: "Very Close", attackdamage: "2d12+1", attackdamagetype: "phy", experiences: ["Bloodhound +3"], features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> When the Hunter makes a successful attack, all PCs within <a href='#define-range'>Far</a> range lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Deathlock&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to curse a target within <a href='#define-range'>Very Close</a> range with a necrotic <em>Deathlock</em> until the end of the scene. Attacks made by the Hunter against a <em>Deathlocked</em> target deal <a href='#define-damage-type'>direct damage</a>. The Hunter can only maintain one <em>Deathlock</em> at a time.</p>", "<p><strong><em>Inevitable Death&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <a href='#define-spotlight'>spotlight</a> <strong>1d4</strong> allies. Attacks they make while <a href='#define-spotlight'>spotlighted</a> in this way deal half damage.</p>", "<p><strong><em>Rampage&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 1d6)</a></em>. When the Hunter is in the <a href='#define-spotlight'>spotlight</a> for the first time, activate the countdown. When it triggers, move the Hunter in a straight line to a point within <a href='#define-range'>Far</a> range and make an attack against all targets in their path. Targets the Hunter succeeds against take <strong>2d8+2</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Oak Treant", name: "oak-treant", tier: 3, type: "Bruiser", pages: ["Page 232"], summary: "A sturdy animated old-growth tree.", motive: "Hide in plain sight, preserve the forest, root down, swing branches", difficulty: 17, thresholdmajor: 22, thresholdsevere: 40, hp: 7, hphorde: 0, stress: 4, attackbonus: 2, attacklabel: "Branch", attackrange: "Very Close", attackdamage: "3d8+2", attackdamagetype: "phy", experiences: ["Forest Knowledge +3"], features: ["<p><strong><em>Just a Tree&mdash;Passive:</em></strong> Before they make their first attack in a fight or after they become <a href='#define-condition'><em>Hidden</em></a>, the Treant is indistinguishable from other trees until they next act or a PC succeeds on an <a href='#define-trait-roll'>Instinct Roll</a> to identify them.</p>", "<p><strong><em>Seed Barrage&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> and make an attack against up to three targets within <a href='#define-range'>Close</a> range, pummeling them with giant acorns. Targets the Treant succeeds against take <strong>2d10+5</strong> <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Take Root&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <em>Root</em> the Treant in place. The Treant is <a href='#define-condition'><em>Restrained</em></a> while <em>Rooted</em>, and can end this effect instead of moving while they are <a href='#define-spotlight'>spotlighted</a>. While <em>Rooted</em>, the Treant has <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Oracle of Doom", name: "oracle-of-doom", tier: 4, type: "Solo", pages: ["Page 237"], summary: "A towering immortal and incarnation of fate, cursed to only see bad outcomes.", motive: "Change environment, condemn, dishearten, toss aside", difficulty: 20, thresholdmajor: 38, thresholdsevere: 68, hp: 11, hphorde: 0, stress: 10, attackbonus: 8, attacklabel: "Psychic Attack", attackrange: "Far", attackdamage: "4d8+9", attackdamagetype: "mag", experiences: ["Boundless Knowledge +4"], features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> When the Oracle makes a successful attack, all PCs within <a href='#define-range'>Far</a> range lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Walls Closing In&mdash;Passive:</em></strong> When a creature rolls a failure while within Very <a href='#define-range'>Far</a> range of the Oracle, they must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Pronounce Fate&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to present a target within <a href='#define-range'>Far</a> range with a vision of their personal nightmare. The target must make a <a href='#define-knowledge'>Knowledge</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, they lose all <a href='#define-hope'>Hope</a> and take <strong>2d10+4</strong> <a href='#define-damage-type'>direct magic damage</a>. On a success, they take half damage and lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Summon Tormentors&mdash;Action:</em></strong> Once per day, <strong><a href='#define-fear'>spend 2 Fear</a></strong> to summon <strong>2d4</strong> Tier 2 or below <a href='#define-adversary-type'>Minions</a> relevant to one of the PC's personal nightmares. They appear at <a href='#define-range'>Close</a> range relative to that PC.</p>", "<p><strong><em>Ominous Knowledge&mdash;Reaction:</em></strong> When the Oracle sees a mortal creature, they instantly know one of their personal nightmares.</p>", "<p><strong><em>Vengeful Fate&mdash;Reaction:</em></strong> When the Oracle marks <a href='#define-hit-point'>HP</a> from an attack within <a href='#define-range'>Very Close</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to knock the attacker back to <a href='#define-range'>Far</a> range and deal <strong>2d10+4</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Outer Realms Abomination", name: "outer-realms-abomination", tier: 4, type: "Bruiser", pages: ["Page 237"], summary: "A chaotic mockery of life, constantly in flux.", motive: "Confuse, demolish, devour, undermine", difficulty: 19, thresholdmajor: 3, thresholdsevere: 71, hp: 7, hphorde: 0, stress: 5, attackbonus: 2.4, attacklabel: "Massive Pseudopod", attackrange: "Very Close", attackdamage: "4d6+13", attackdamagetype: "mag", features: ["<p><strong><em>Chaotic Form&mdash;Passive:</em></strong> When the Abomination attacks, roll <strong>2d4</strong> and use the result as their attack <a href='#define-procedure'>modifier</a>.</p>", "<p><strong><em>Disorienting Presence&mdash;Passive:</em></strong> When a target takes damage from the Abomination, they must make an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, they gain <a href='#define-advantage'>disadvantage</a> on their next <a href='#define-action-roll'>action roll</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Reality Quake&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to rattle the edges of reality within <a href='#define-range'>Far</a> range of the Abomination. All targets within that area must succeed on a <a href='#define-knowledge'>Knowledge</a> <a href='#define-reaction-roll'>Reaction Roll</a> or become <em>Unstuck</em> from reality until the end of the scene. When an <em>Unstuck</em> target spends <a href='#define-hope'>Hope</a> or marks <a href='#define-armor'>Armor Slots</a>, <a href='#define-hit-point'>HP</a>, or <a href='#define-stress'>Stress</a>, they must double the amount spent or marked.</p>", "<p><strong><em>Fungal Form&mdash;Reaction:</em></strong> When the Abomination takes damage, reduce it by <strong>1d20</strong>. If the Abomination marks 1 or fewer <a href='#define-hit-point'>Hit Points</a> from a successful attack against them, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Outer Realms Corruptor", name: "outer-realms-corruptor", tier: 4, type: "Support", pages: ["Page 237"], summary: "A shifting, formless mass seemingly made of chromatic light.", motive: "Confuse, distract, overwhelm", difficulty: 19, thresholdmajor: 27, thresholdsevere: 47, hp: 4, hphorde: 0, stress: 3, attackbonus: 7, attacklabel: "Corroding Pseudopod", attackrange: "Very Close", attackdamage: "4d8+5", attackdamagetype: "mag", features: ["<p><strong><em>Will-Shattering Touch&mdash;Passive:</em></strong> When a PC takes damage from the Corrupter, they lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Disgorge Reality Flotsam&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to spew partially digested portions of consumed realities at all targets within <a href='#define-range'>Close</a> range. Targets must succeed on a <a href='#define-knowledge'>Knowledge</a> <a href='#define-reaction-roll'>Reaction Roll</a> or mark 2 <a href='#define-stress'>Stress</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Outer Realms Thrall", name: "outer-realms-thrall", tier: 4, type: "Minion", pages: ["Page 237"], summary: "A vaguely humanoid form stripped of memory and identity.", motive: "Destroy, disgust, disorient, intimidate", difficulty: 17, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 3, attacklabel: "Claws and Teeth", attackrange: "Very Close", attackdamage: "11", attackdamagetype: "phy", features: ["<p><strong><em>Minion (13)&mdash;Passive:</em></strong> The Thrall is defeated when they take any damage. For every 13 damage a PC deals to the Thrall, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Outer Realm Thralls within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 11 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Patchwork Zombie Hulk", name: "patchwork-zombie-hulk", tier: 1, type: "Solo", pages: ["Page 219"], summary: "A towering gestalt of corpses moving as one, with torso-sized limbs and fists as large as a grown halfling.", motive: "Absorb corpses, flail, hunger, terrify", difficulty: 13, thresholdmajor: 8, thresholdsevere: 15, hp: 10, hphorde: 0, stress: 3, attackbonus: 4, attacklabel: "Too Many Arms", attackrange: "Very Close", attackdamage: "1d20", attackdamagetype: "phy", experiences: ["Intimidation +2", "Tear Things Apart +2"], features: ["<p><strong><em>Destructive&mdash;Passive:</em></strong> When the Zombie takes <a href='#define-hit-point'>Major</a> or greater damage, they mark an additional <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Flailing Limbs&mdash;Passive:</em></strong> When the Zombie makes a standard attack, they can attack all targets within <a href='#define-range'>Very Close</a> range.</p>", "<p><strong><em>Another for the Pile&mdash;Action:</em></strong> When the Zombie is within <a href='#define-range'>Very Close</a> range of a corpse, they can incorporate it into themselves, clearing a <a href='#define-hit-point'>HP</a> and a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Tormented Screams&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to cause all PCs within <a href='#define-range'>Far</a> range to make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a> (13). Targets who fail lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a> for each. Targets who succeed must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Perfected Zombie", name: "perfected-zombie", tier: 4, type: "Bruiser", pages: ["Page 239"], summary: "A towering, muscular zombie with magically infused strength and skill.", motive: "Consume, hound, maim, terrify", difficulty: 20, thresholdmajor: 40, thresholdsevere: 70, hp: 9, hphorde: 0, stress: 4, attackbonus: 4, attacklabel: "Greataxe", attackrange: "Very Close", attackdamage: "4d12+15", attackdamagetype: "phy", features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> On successful attack, all PCs in <a href='#define-range'>Far</a> range lose <a href='#define-hope'>Hope</a> and you gain <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Fearsome Presence&mdash;Passive:</em></strong> PCs can't spend <a href='#define-hope'>Hope</a> to use features against the Zombie.</p>", "<p><strong><em>Perfect Strike&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to attack all targets within <a href='#define-range'>Very Close</a> range; on success, targets are <a href='#define-condition'><em>Vulnerable</em></a> until next rest.</p>", "<p><strong><em>Skilled Opportunist&mdash;Reaction:</em></strong> When another adversary deals damage to target within <a href='#define-range'>Very Close</a> range of Zombie, <strong><a href='#define-fear'>spend a Fear</a></strong> to add Zombie's standard attack damage to the <a href='#define-damage-roll'>damage roll</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Petty Noble", name: "petty-noble", tier: 1, type: "Social", pages: ["Page 216"], summary: "A richly dressed and adorned aristocrat brimming with hubris.", motive: "Abuse power, gather resources, mobilize minions", difficulty: 14, thresholdmajor: 6, thresholdsevere: 10, hp: 3, hphorde: 0, stress: 5, attackbonus: -3, attacklabel: "Rapier", attackrange: "Melee", attackdamage: "1d6+1", attackdamagetype: "phy", experiences: ["Aristocrat +3"], features: ["<p><strong><em>My Land, My Rules&mdash;Passive:</em></strong> All social actions made against the Noble on their land have <a href='#define-advantage'>disadvantage</a>.</p>", "<p><strong><em>Guards, Seize Them!&mdash;Action:</em></strong> Once per scene, <strong><a href='#define-stress'>mark a Stress</a></strong> to summon <strong>1d4</strong> <a href='#define-adversary-bladed-guard'>Bladed Guards</a>, who appear at <a href='#define-range'>Far</a> range to enforce the Noble's will.</p>", "<p><strong><em>Exile&mdash;Action:</em></strong> Spend a <a href='#define-fear'>Fear</a> and target a PC. The Noble proclaims that the target and their allies are exiled from the noble's territory. While exiled, the target and their allies have <a href='#define-advantage'>disadvantage</a> during social situations within the Noble's domain.</p>"], category: "Person", ednote: "" },
{ label: "Pirate Captain", name: "pirate-captain", tier: 1, type: "Leader", pages: ["Page 216"], summary: "A charismatic sea dog with an impressive hat, eager to raid and plunder.", motive: "Command, make 'em walk the plank, plunder, raid", difficulty: 14, thresholdmajor: 7, thresholdsevere: 14, hp: 7, hphorde: 0, stress: 5, attackbonus: 1, attacklabel: "Cutlass", attackrange: "Melee", attackdamage: "1d12+2", attackdamagetype: "phy", experiences: ["Commander +2", "Sailor +3"], features: ["<p><strong><em>Swashbuckler&mdash;Passive:</em></strong> When the Captain marks 2 or fewer <a href='#define-hit-point'>HP</a> from an attack within <a href='#define-range'>Melee</a> range, the attacker must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Reinforcements&mdash;Action:</em></strong> Once per scene, <strong><a href='#define-stress'>mark a Stress</a></strong> to summon a <a href='#define-adversary-pirate-raiders'>Pirate Raiders</a> <a href='#define-adversary-type'>Horde</a>, which appears at <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>No Quarter&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target who has three or more Pirates within <a href='#define-range'>Melee</a> range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, the target marks <strong>1d4+1</strong> <a href='#define-stress'>Stress</a>. On a success, they must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Captain makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Pirate Raiders", name: "pirate-raiders", tier: 1, type: "Horde", pages: ["Page 216"], summary: "Seafaring scoundrels moving in a ravaging pack.", motive: "Gang up, plunder, overwhelm", difficulty: 12, thresholdmajor: 5, thresholdsevere: 11, hp: 4, hphorde: 3, stress: 3, attackbonus: 1, attacklabel: "Cutlass", attackrange: "Melee", attackdamage: "1d8+2", attackdamagetype: "phy", experiences: ["Sailor +3"], features: ["<p><strong><em>Horde (1d4+1)&mdash;Passive:</em></strong> When the Raiders have marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>1d4+1</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Swashbuckler&mdash;Passive:</em></strong> When the Raiders mark 2 or fewer <a href='#define-hit-point'>HP</a> from an attack within <a href='#define-range'>Melee</a> range, the attacker must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Person", ednote: "" },
{ label: "Pirate Tough", name: "pirate-tough", tier: 1, type: "Bruiser", pages: ["Page 216"], summary: "A thickly muscled and tattooed pirate with melon-sized fists.", motive: "Plunder, raid, smash, terrorize", difficulty: 13, thresholdmajor: 8, thresholdsevere: 15, hp: 5, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Massive Fists", attackrange: "Melee", attackdamage: "2d6", attackdamagetype: "phy", experiences: ["Sailor +2"], features: ["<p><strong><em>Swashbuckler&mdash;Passive:</em></strong> When the Tough marks 2 or fewer <a href='#define-hit-point'>HP</a> from an attack within <a href='#define-range'>Melee</a> range, the attacker must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Clear the Decks&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, <strong><a href='#define-stress'>mark a Stress</a></strong> to move into <a href='#define-range'>Melee</a> range of the target, dealing <strong>3d4</strong> <a href='#define-damage-type'>physical damage</a> and knocking the target back to <a href='#define-range'>Close</a> range.</p>"], category: "Person", ednote: "" },
{ label: "Red Ooze", name: "red-ooze", tier: 1, type: "Skulk", pages: ["Page 216"], summary: "A moving mound of translucent flaming red slime.", motive: "Camouflage, consume and multiply, ignite, start fires", difficulty: 10, thresholdmajor: 6, thresholdsevere: 11, hp: 5, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Ooze Appendage", attackrange: "Melee", attackdamage: "1d8+3", attackdamagetype: "mag", experiences: ["Camouflage +3"], features: ["<p><strong><em>Creeping Fire&mdash;Passive:</em></strong> The Ooze can only move within <a href='#define-range'>Very Close</a> range as their normal movement. They light any flammable object they touch on fire.</p>", "<p><strong><em>Ignite&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, the target takes <strong>1d8</strong> <a href='#define-damage-type'>magic damage</a> and is ignited until they're extinguished with a successful <a href='#define-trait-roll'>Finesse Roll</a> (14). While ignited, the target takes <strong>1d4</strong> <a href='#define-damage-type'>magic damage</a> when they make an <a href='#define-action-roll'>action roll</a>.</p>", "<p><strong><em>Split&mdash;Reaction:</em></strong> When the Ooze has 3 or more <a href='#define-hit-point'>HP</a> marked, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to split them into two <a href='#define-adversary-tiny-red-ooze'>Tiny Red Oozes</a> (with no marked <a href='#define-hit-point'>HP</a> or <a href='#define-stress'>Stress</a>). Immediately <a href='#define-spotlight'>spotlight</a> both of them.</p>"], category: "Monster", ednote: "" },
{ label: "Tiny Red Ooze", name: "tiny-red-ooze", tier: 1, type: "Skulk", pages: ["Page 216"], summary: "A small moving mound of translucent flaming red slime.", motive: "Blaze, camouflage", difficulty: 11, thresholdmajor: 5, thresholdsevere: 0, hp: 2, hphorde: 0, stress: 1, attackbonus: -1, attacklabel: "Ooze Appendage", attackrange: "Melee", attackdamage: "1d4+2", attackdamagetype: "mag", features: ["<p><strong><em>Burning&mdash;Reaction:</em></strong> When a creature within <a href='#define-range'>Melee</a> range deals damage to the Ooze, they take <strong>1d6</strong> <a href='#define-damage-type'>direct magic damage</a>.</p>"], category: "Mnoster", ednote: "" },
{ label: "Rotted Zombie", name: "rotted-zombie", tier: 1, type: "Minion", pages: ["Page 219"], summary: "A decaying corpse ambling toward their prey.", motive: "Eat flesh, hunger, maul, surround", difficulty: 8, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -3, attacklabel: "Bite", attackrange: "Melee", attackdamage: "2", attackdamagetype: "phy", features: ["<p><strong><em>Minion (3)&mdash;Passive:</em></strong> The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Rotted Zombies within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 2 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Royal Advisor", name: "royal-advisor", tier: 2, type: "Social", pages: ["Page 225"], summary: "A high-ranking courtier with the ear of the local nobility.", motive: "Curry favor, manufacture evidence, scheme", difficulty: 14, thresholdmajor: 8, thresholdsevere: 15, hp: 3, hphorde: 0, stress: 3, attackbonus: -3, attacklabel: "Wand", attackrange: "Far", attackdamage: "1d4+3", attackdamagetype: "phy", experiences: ["Administration +3", "Courtier +3"], features: ["<p><strong><em>Devastating Retort&mdash;Passive:</em></strong> A PC who rolls less than 17 on an <a href='#define-action-roll'>action roll</a> targeting the Advisor must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Bend Ears&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to influence an NPC within <a href='#define-range'>Melee</a> range with whispered words. That target's opinion on one matter shifts toward the Advisor's preference unless it is in direct opposition to the target's motives.</p>", "<p><strong><em>Scapegoat&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to convince a crowd or notable individual that one person or group is responsible for some problem facing the target. The target becomes hostile to the scapegoat until convinced of their innocence with a successful <a href='#define-trait-roll'>Presence Roll</a> (17).</p>"], category: "Person", ednote: "" },
{ label: "Secret-Keeper", name: "secret-keeper", tier: 2, type: "Leader", pages: ["Page 226", "Errata"], summary: "A clandestine leader with a direct channel to the Fallen Gods.", motive: "Amass great power, plot, take command", difficulty: 16, thresholdmajor: 13, thresholdsevere: 26, hp: 7, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Sigil-Laden Staff", attackrange: "Far", attackdamage: "2d12", attackdamagetype: "mag", experiences: ["Coercion +2", "Fallen Lore +2"], features: ["<p><strong><em>Seize Your Moment&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> <strong>1d4</strong> allies. Attacks they make while <a href='#define-spotlight'>spotlighted</a> in this way deal half damage.</p>", "<p><strong><em>Our Master's Will&mdash;Reaction:</em></strong> When you <a href='#define-spotlight'>spotlight</a> an ally within <a href='#define-range'>Far</a> range, <strong><a href='#define-stress'>mark a Stress</a></strong> to gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Summoning Ritual&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (6)</a></em>. When the Secret-Keeper is in the <a href='#define-spotlight'>spotlight</a> for the first time, activate the countdown. When they mark <a href='#define-hit-point'>HP</a>, tick down this countdown by the number of <a href='#define-hit-point'>HP</a> marked. When it triggers, summon a <a href='#define-adversary-minor-demon'>Minor Demon</a> who appears at <a href='#define-range'>Close</a> range.</p>", "<p><strong><em>Fallen Hounds&mdash;Reaction:</em></strong> Once per scene, when the Secret-Keeper marks 2 or more <a href='#define-hit-point'>HP</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to summon a <a href='#define-adversary-demonic-hound-pack'>Demonic Hound Pack</a>, which appears at <a href='#define-range'>Close</a> range and is immediately <a href='#define-spotlight'>spotlighted</a>.</p>"], category: "Person", ednote: "" },
{ label: "Sellsword", name: "sellsword", tier: 1, type: "Minion", pages: ["Page 217"], summary: "An armed mercenary testing their luck.", motive: "Charge, lacerate, overwhelm, profit", difficulty: 10, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 3, attacklabel: "Longsword", attackrange: "Melee", attackdamage: "3", attackdamagetype: "phy", features: ["<p><strong><em>Minion (4)&mdash;Passive:</em></strong> The Sellsword is defeated when they take any damage. For every 4 damage a PC deals to the Sellsword, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Sellswords within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 3 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Person", ednote: "" },
{ label: "Shambling Zombie", name: "shambling-zombie", tier: 1, type: "Standard", pages: ["Page 219"], summary: "An animated corpse that moves shakily, driven only by hunger.", motive: "Devour, hungry, mob enemy, shred flesh", difficulty: 10, thresholdmajor: 4, thresholdsevere: 6, hp: 4, hphorde: 0, stress: 1, attackbonus: 0, attacklabel: "Bite", attackrange: "Melee", attackdamage: "1d6+1", attackdamagetype: "phy", features: ["<p><strong><em>Too Many to Handle&mdash;Passive:</em></strong> When the Zombie is within <a href='#define-range'>Melee</a> range of a creature and at least one other Zombie is within <a href='#define-range'>Close</a> range, all attacks against that creature have <a href='#define-advantage'>advantage</a>.</p>", "<p><strong><em>Horrifying&mdash;Passive:</em></strong> Targets who mark <a href='#define-hit-point'>HP</a> from the Zombie's attacks must also mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Shark", name: "shark", tier: 2, type: "Bruiser", pages: ["Page 226"], summary: "A large aquatic predator, always on the move.", motive: "Find the blood, isolate prey, target the weak", difficulty: 14, thresholdmajor: 14, thresholdsevere: 28, hp: 7, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Toothy Maw", attackrange: "Very Close", attackdamage: "2d12+1", attackdamagetype: "phy", experiences: ["Sense of Smell +3"], features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> When the Shark makes a successful attack, all PCs within <a href='#define-range'>Far</a> range lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Rending Bite&mdash;Passive:</em></strong> When the Shark makes a successful attack, the target must mark an <a href='#define-armor'>Armor Slot</a> without receiving its benefits (they can still use <a href='#define-armor'>armor</a> to reduce the damage). If they can't mark an <a href='#define-armor'>Armor Slot</a>, they must mark an additional <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Blood in the Water&mdash;Reaction:</em></strong> When a creature within <a href='#define-range'>Close</a> range of the Shark marks <a href='#define-hit-point'>HP</a> from another creature's attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to immediately <a href='#define-spotlight'>spotlight</a> the Shark, moving them into <a href='#define-range'>Melee</a> range of the target and making a standard attack.</p>"], category: "Monster", ednote: "" },
{ label: "Siren", name: "siren", tier: 2, type: "Skulk", pages: ["Page 226"], summary: "A half fish person with shimmering scales and an irresistible voice.", motive: "Consume, lure prey, subdue with song", difficulty: 14, thresholdmajor: 9, thresholdsevere: 18, hp: 5, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Distended Jaw Bite", attackrange: "Melee", attackdamage: "2d6+3", attackdamagetype: "phy", experiences: ["Song Repertoire +3"], features: ["<p><strong><em>Captive Audience&mdash;Passive:</em></strong> If the Siren makes a standard attack against a target <em>Entranced</em> by their song, the attack deals <strong>2d10+1</strong> damage instead of their standard damage.</p>", "<p><strong><em>Enchanting Song&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to sing a song that affects all targets within <a href='#define-range'>Close</a> range. Targets must succeed on an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> or become <em>Entranced</em> until they mark 2 <a href='#define-stress'>Stress</a>. Other Sirens within <a href='#define-range'>Close</a> range of the target can mark a <a href='#define-stress'>Stress</a> to each add a +1 bonus to the <a href='#define-difficulty'>Difficulty</a> of the <a href='#define-reaction-roll'>reaction roll</a>. While <em>Entranced</em>, a target can't act and is <a href='#define-condition'><em>Vulnerable</em></a>.</p>"], category: "Monster", ednote: "" },
{ label: "Skeleton Archer", name: "skeleton-archer", tier: 1, type: "Ranged", pages: ["Page 217"], summary: "A fragile skeleton with a shortbow and arrows.", motive: "Perforate distracted targets, play dead, steal skin", difficulty: 9, thresholdmajor: 4, thresholdsevere: 7, hp: 3, hphorde: 0, stress: 2, attackbonus: 2, attacklabel: "Shortbow", attackrange: "Far", attackdamage: "1d8+1", attackdamagetype: "phy", features: ["<p><strong><em>Opportunist&mdash;Passive:</em></strong> When two or more adversaries are within <a href='#define-range'>Very Close</a> range of a creature, all damage they each deal to that creature is doubled.</p>", "<p><strong><em>Deadly Shot&mdash;Action:</em></strong> Make an attack against a <a href='#define-condition'><em>Vulnerable</em></a> target within <a href='#define-range'>Far</a> range. On a success, <strong><a href='#define-stress'>mark a Stress</a></strong> to deal <strong>3d4+8</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Skeleton Dredge", name: "skeleton-dredge", tier: 1, type: "Minion", pages: ["Page 217"], summary: "A clattering pile of bones.", motive: "Fall apart, overwhelm, play dead, steal skin", difficulty: 8, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -1, attacklabel: "Bone Claws", attackrange: "Melee", attackdamage: "1", attackdamagetype: "phy", features: ["<p><strong><em>Minion (4)&mdash;Passive:</em></strong> The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Dredges within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 1 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Skeleton Knight", name: "skeleton-knight", tier: 1, type: "Bruiser", pages: ["Page 217"], summary: "A large armored skeleton with a huge blade.", motive: "Cut down the living, steal skin, wreak havoc", difficulty: 13, thresholdmajor: 7, thresholdsevere: 13, hp: 5, hphorde: 0, stress: 2, attackbonus: 2, attacklabel: "Rusty Greatsword", attackrange: "Melee", attackdamage: "1d10+2", attackdamagetype: "phy", features: ["<p><strong><em>Terrifying&mdash;Passive:</em></strong> When the Knight makes a successful attack, all PCs within <a href='#define-range'>Close</a> range lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Cut to the Bone&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against all targets within <a href='#define-range'>Very Close</a> range. Targets the Knight succeeds against take <strong>1d8+2</strong> <a href='#define-damage-type'>physical damage</a> and must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Dig Two Graves&mdash;Reaction:</em></strong> When the Knight is defeated, they make an attack against a target within <a href='#define-range'>Very Close</a> range (prioritizing the creature who killed them). On a success, the target takes <strong>1d8+4</strong> <a href='#define-damage-type'>physical damage</a> and loses <strong>1d4</strong> <a href='#define-hope'>Hope</a>.</p>"], category: "", ednote: "" },
{ label: "Skeleton Warrior", name: "skeleton-warrior", tier: 1, type: "Standard", pages: ["Page 217"], summary: "A dirt-covered skeleton armed with a rusted blade.", motive: "Feign death, gang up, steal skin", difficulty: 10, thresholdmajor: 4, thresholdsevere: 8, hp: 3, hphorde: 0, stress: 2, attackbonus: 0, attacklabel: "Sword", attackrange: "Melee", attackdamage: "1d6+2", attackdamagetype: "phy", features: ["<p><strong><em>Only Bones&mdash;Passive:</em></strong> The Warrior is <a href='#define-damage-type'>resistant</a> to <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Reform&mdash;Reaction:</em></strong> When the Warrior is defeated, roll a <strong>d6</strong>. On a result of 6, if there are other adversaries on the battlefield, the Warrior re-forms with no marked <a href='#define-hit-point'>HP</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Spectral Archer", name: "spectral-archer", tier: 2, type: "Ranged", pages: ["Page 226"], summary: "A ghostly fighter with an ethereal bow, unable to move on while their charge is <a href='#define-condition'><em>Vulnerable</em></a>.", motive: "Move through solid objects, stay out of the fray, rehash old battles", difficulty: 13, thresholdmajor: 6, thresholdsevere: 14, hp: 3, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Longbow", attackrange: "Far", attackdamage: "2d10+2", attackdamagetype: "phy", experiences: ["Ancient Knowledge +2"], features: ["<p><strong><em>Ghost&mdash;Passive:</em></strong> The Archer has <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>. <strong><a href='#define-stress'>Mark a Stress</a></strong> to move up to <a href='#define-range'>Close</a> range through solid objects.</p>", "<p><strong><em>Pick Your Target&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make an attack against a target within <a href='#define-range'>Very Close</a> range of at least two other PCs. On a success, the target takes <strong>2d8+12</strong> <a href='#define-damage-type'>physical damage</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Spectral Captain", name: "spectral-captain", tier: 2, type: "Leader", pages: ["Page 226"], summary: "A ghostly commander leading their troops beyond death.", motive: "Move through solid objects, rally troops, rehash old battles", difficulty: 16, thresholdmajor: 13, thresholdsevere: 26, hp: 6, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Longbow", attackrange: "Far", attackdamage: "2d10+3", attackdamagetype: "phy", experiences: ["Ancient Knowledge +3"], features: ["<p><strong><em>Ghost&mdash;Passive:</em></strong> The Captain has <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>. <strong><a href='#define-stress'>Mark a Stress</a></strong> to move up to <a href='#define-range'>Close</a> range through solid objects.</p>", "<p><strong><em>Unending Battle&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to return up to <strong>1d4+1</strong> defeated Spectral allies to the battle at the points where they first appeared (with no marked <a href='#define-hit-point'>HP</a> or <a href='#define-stress'>Stress</a>).</p>", "<p><strong><em>Hold Fast&mdash;Reaction:</em></strong> When the Captain's Spectral allies are forced to make a <a href='#define-reaction-roll'>reaction roll</a>, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to give those allies a +2 bonus to the roll.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Captain makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Spectral Guardian", name: "spectral-guardian", tier: 2, type: "Standard", pages: ["Page 226"], summary: "A ghostly fighter with spears and swords, anchored by duty.", motive: "Move through solid objects, protect treasure, rehash old battles", difficulty: 15, thresholdmajor: 7, thresholdsevere: 15, hp: 4, hphorde: 0, stress: 3, attackbonus: 1, attacklabel: "Spear", attackrange: "Very Close", attackdamage: "2d8+1", attackdamagetype: "phy", experiences: ["Ancient Knowledge +2"], features: ["<p><strong><em>Ghost&mdash;Passive:</em></strong> The Guardian has <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>. <strong><a href='#define-stress'>Mark a Stress</a></strong> to move up to <a href='#define-range'>Close</a> range through solid objects.</p>", "<p><strong><em>Grave Blade&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, deal <strong>2d10+6</strong> <a href='#define-damage-type'>physical damage</a> and the target must mark a <a href='#define-stress'>Stress</a>.</p>"], category: "Supernatural", ednote: "" },
{ label: "Spellblade", name: "spellblade", tier: 1, type: "Leader", pages: ["Page 217"], summary: "A mercenary combining swordplay and magic to deadly effect.", motive: "Blast, command, endure", difficulty: 14, thresholdmajor: 8, thresholdsevere: 14, hp: 6, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Empowered Longsword", attackrange: "Melee", attackdamage: "1d8+4", attackdamagetype: "phy/mag", experiences: ["Magical Knowledge +2"], features: ["<p><strong><em>Arcane Steel&mdash;Passive:</em></strong> Damage dealt by the Spellblade's standard attack is considered both physical and magic.</p>", "<p><strong><em>Suppressing Blast&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> and target a group within <a href='#define-range'>Far</a> range. All targets must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>1d8+2</strong> <a href='#define-damage-type'>magic damage</a>. You gain a <a href='#define-fear'>Fear</a> for each target who marked <a href='#define-hit-point'>HP</a> from this attack.</p>", "<p><strong><em>Move as Unit&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to <a href='#define-spotlight'>spotlight</a> up to five allies within <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Spellblade makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Spy", name: "spy", tier: 2, type: "Social", pages: ["Page 227"], summary: "A skilled espionage agent with a knack for being in the right place to overhear secrets.", motive: "Cut and run, disguise appearance, eavesdrop", difficulty: 15, thresholdmajor: 8, thresholdsevere: 17, hp: 4, hphorde: 0, stress: 3, attackbonus: -2, attacklabel: "Dagger", attackrange: "Melee", attackdamage: "2d6+3", attackdamagetype: "phy", experiences: ["Espionage +3"], features: ["<p><strong><em>Gathering Secrets&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to describe how the Spy knows a secret about a PC in the scene.</p>", "<p><strong><em>Fly on the Wall&mdash;Reaction:</em></strong> When a PC or group is discussing something sensitive, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to reveal that the Spy is present in the scene, observing them. If the Spy escapes the scene to report their findings, you gain <strong>1d4</strong> <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Stag Knight", name: "stag-knight", tier: 3, type: "Standard", pages: ["Page 231"], summary: "A knight with huge, majestic antlers wearing armor made of dangerous thorns.", motive: "Isolate, maneuver, protect the forest, weed the unwelcome", difficulty: 17, thresholdmajor: 19, thresholdsevere: 36, hp: 7, hphorde: 0, stress: 5, attackbonus: 3, attacklabel: "Bramble Sword", attackrange: "Melee", attackdamage: "3d8+3", attackdamagetype: "phy", experiences: ["Forest Knowledge +3"], features: ["<p><strong><em>From Above&mdash;Passive:</em></strong> When the Knight succeeds on a standard attack from above a target, they deal <strong>3d12+3</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage.</p>", "<p><strong><em>Blade of the Forest&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to make an attack against all targets within <a href='#define-range'>Very Close</a> range. Targets the Knight succeeds against take physical damage equal to <strong>3d4</strong> + the target's Major <a href='#define-hit-point'>threshold</a>.</p>", "<p><strong><em>Thorny Armor&mdash;Reaction:</em></strong> When the Knight takes damage from an attack within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to deal <strong>1d10+5</strong> <a href='#define-damage-type'>physical damage</a> to the attacker.</p>"], category: "Person", ednote: "" },
{ label: "Stonewraith", name: "stonewraith", tier: 2, type: "Skulk", pages: ["Page 227"], summary: "A prowling hunter, like a slinking mountain lion, with a slate-gray stone body.", motive: "Defend territory, isolate prey, stalk", difficulty: 13, thresholdmajor: 11, thresholdsevere: 22, hp: 6, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Bite and Claws", attackrange: "Melee", attackdamage: "2d8+6", attackdamagetype: "phy", experiences: ["Stonesense +3"], features: ["<p><strong><em>Stonestrider&mdash;Passive:</em></strong> The Stonewraith can move through stone and earth as easily as air. While within stone or earth, they are <a href='#define-condition'><em>Hidden</em></a> and <a href='#define-damage-type'>immune</a> to all damage.</p>", "<p><strong><em>Rocky Ambush&mdash;Action:</em></strong> While <a href='#define-condition'><em>Hidden</em></a>, <strong><a href='#define-stress'>mark a Stress</a></strong> to leap into <a href='#define-range'>Melee</a> range with a target within <a href='#define-range'>Very Close</a> range. The target must succeed on an <a href='#define-agility'>Agility</a> or <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> (15) or take <strong>2d8</strong> <a href='#define-damage-type'>physical damage</a> and become <a href='#define-temporary'>temporarily</a> <a href='#define-condition'><em>Restrained</em></a>.</p>", "<p><strong><em>Avalanche Roar&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to roar while within a cave and cause a cave-in. All targets within <a href='#define-range'>Close</a> range must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> (14) or take <strong>2d10</strong> <a href='#define-damage-type'>physical damage</a>. The rubble can be cleared with a <a href='#define-countdown'>Progress Countdown (8)</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Stonewraith makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Swarm of Rats", name: "swarm-of-rats", tier: 1, type: "Horde", pages: ["Page 218"], summary: "A skittering mass of ordinary rodents moving as one like a ravenous wave.", motive: "Consume, obscure, swarm", difficulty: 10, thresholdmajor: 6, thresholdsevere: 10, hp: 6, hphorde: 1, stress: 2, attackbonus: -3, attacklabel: "Claws", attackrange: "Melee", attackdamage: "1d8+2", attackdamagetype: "phy", features: ["<p><strong><em>Horde (1d4+1)&mdash;Passive:</em></strong> When the Swarm has marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>1d4+1</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>In Your Face&mdash;Passive:</em></strong> All targets within <a href='#define-range'>Melee</a> range have <a href='#define-advantage'>disadvantage</a> on attacks against targets other than the Swarm.</p>"], category: "Monster", ednote: "" },
{ label: "Sylvan Soldier", name: "sylvan-soldier", tier: 1, type: "Standard", pages: ["Page 218"], summary: "A faerie warrior adorned in armor made of leaves and bark.", motive: "Ambush, hide, overwhelm, protect, trail", difficulty: 11, thresholdmajor: 6, thresholdsevere: 11, hp: 4, hphorde: 0, stress: 2, attackbonus: 0, attacklabel: "Scythe", attackrange: "Melee", attackdamage: "1d8+1", attackdamagetype: "phy", experiences: ["Tracker +2"], features: ["<p><strong><em>Pack Tactics&mdash;Passive:</em></strong> If the Soldier makes a standard attack and another Sylvan Soldier is within <a href='#define-range'>Melee</a> range of the target, deal <strong>1d8+5</strong> <a href='#define-damage-type'>physical damage</a> instead of their standard damage.</p>", "<p><strong><em>Forest Control&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to pull down a tree within <a href='#define-range'>Close</a> range. A creature hit by the tree must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> (15) or take <strong>1d10</strong> <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Blend In&mdash;Reaction:</em></strong> When the Soldier makes a successful attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to become <a href='#define-condition'><em>Hidden</em></a> until the Soldier's next attack or a PC succeeds on an <a href='#define-trait-roll'>Instinct Roll</a> (14) to find them.</p>"], category: "Person", ednote: "" },
{ label: "Tangle Bramble", name: "tangle-bramble", tier: 1, type: "Minion", pages: ["Page 218"], summary: "An animate, blood-drinking tumbleweed.", motive: "Consume, drain, entangle", difficulty: 11, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: -1, attacklabel: "Thorns", attackrange: "Melee", attackdamage: "2", attackdamagetype: "phy", features: ["<p><strong><em>Minion (4)&mdash;Passive:</em></strong> The Bramble is defeated when they take any damage. For every 4 damage a PC deals to the Tangle Bramble, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Tangle Brambles within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 2 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>", "<p><strong><em>Drain and Multiply&mdash;Reaction:</em></strong> When an attack from the Bramble causes a target to mark <a href='#define-hit-point'>HP</a> and there are three or more Tangle Bramble <a href='#define-adversary-type'>Minions</a> within <a href='#define-range'>Close</a> range, you can combine the Minions into a <a href='#define-adversary-tangle-bramble-swarm'>Tangle Bramble Swarm</a> <a href='#define-adversary-type'>Horde</a>. The Horde's <a href='#define-hit-point'>HP</a> is equal to the number of Minions combined.</p>"], category: "Monster", ednote: "" },
{ label: "Tangle Bramble Swarm", name: "tangle-bramble-swarm", tier: 1, type: "Horde", pages: ["Page 218"], summary: "A cluster of animated, blood-drinking tumbleweeds, each the size of a large gourd.", motive: "Digest, entangle, immobilize", difficulty: 12, thresholdmajor: 6, thresholdsevere: 11, hp: 6, hphorde: 3, stress: 3, attackbonus: 0, attacklabel: "Thorns", attackrange: "Melee", attackdamage: "1d6+3", attackdamagetype: "phy", experiences: ["Camouflage +2"], features: ["<p><strong><em>Horde (1d4+2)&mdash;Passive:</em></strong> When the Swarm has marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>1d4+2</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Crush&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to deal <strong>2d6+8</strong> <a href='#define-damage-type'>direct physical damage</a> to a target with 3 or more bramble tokens.</p>", "<p><strong><em>Encumber&mdash;Reaction:</em></strong> When the Swarm succeeds on an attack, give the target a bramble token. If a target has any bramble tokens, they are <a href='#define-condition'><em>Restrained</em></a>. If a target has 3 or more bramble tokens, they are also <a href='#define-condition'><em>Vulnerable</em></a>. All bramble tokens can be removed by succeeding on a <a href='#define-trait-roll'>Finesse Roll</a> (12 + the number of bramble tokens) or dealing <a href='#define-hit-point'>Major</a> or greater damage to the Swarm. If bramble tokens are removed from a target using a <a href='#define-trait-roll'>Finesse Roll</a>, a number of <a href='#define-adversary-tangle-bramble'>Tangle Bramble</a> <a href='#define-adversary-type'>Minions</a> spawn within <a href='#define-range'>Melee</a> range equal to the number of tokens removed.</p>"], category: "Monster", ednote: "" },
{ label: "Treant Sapling", name: "treant-sapling", tier: 3, type: "Minion", pages: ["Page 232"], summary: "A small, sentient tree sapling.", motive: "Blend in, preserve the forest, pummel, surround", difficulty: 14, thresholdmajor: 0, thresholdsevere: 0, hp: 1, hphorde: 0, stress: 1, attackbonus: 0, attacklabel: "Branches", attackrange: "Melee", attackdamage: "8", attackdamagetype: "phy", features: ["<p><strong><em>Minion (6)&mdash;Passive:</em></strong> The Sapling is defeated when they take any damage. For every 6 damage a PC deals to the Sapling, defeat an additional <a href='#define-adversary-type'>Minion</a> within range the attack would succeed against.</p>", "<p><strong><em>Group Attack&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to choose a target and <a href='#define-spotlight'>spotlight</a> all Treant Saplings within <a href='#define-range'>Close</a> range of them. Those <a href='#define-adversary-type'>Minions</a> move into <a href='#define-range'>Melee</a> range of the target and make one shared <a href='#define-attack-roll'>attack roll</a>. On a success, they deal 8 <a href='#define-damage-type'>physical damage</a> each. Combine this damage.</p>"], category: "Monster", ednote: "" },
{ label: "Vampire", name: "vampire", tier: 3, type: "Standard", pages: ["Page 232"], summary: "An intelligent undead with blood-stained lips and a predator's smile.", motive: "Bite, charm, deceive, feed, intimidate", difficulty: 16, thresholdmajor: 18, thresholdsevere: 35, hp: 5, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Rapier", attackrange: "Melee", attackdamage: "3d8", attackdamagetype: "phy", experiences: ["Nocturnal Hunter +3"], features: ["<p><strong><em>Draining Bite&mdash;Action:</em></strong> Make an attack against a target within <a href='#define-range'>Melee</a> range. On a success, deal 4d <a href='#define-damage-type'>physical damage</a>. A target who marks <a href='#define-hit-point'>HP</a> from this attack loses a <a href='#define-hope'>Hope</a> and must mark a <a href='#define-stress'>Stress</a>. The Vampire then clears a <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Mistform&mdash;Reaction:</em></strong> When the Vampire takes <a href='#define-damage-type'>physical damage</a>, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to take half damage.</p>"], category: "Supernatural", ednote: "" },
{ label: "Vault Guardian Gaoler", name: "vault-guardian-gaoler", tier: 3, type: "Support", pages: ["Page 232"], summary: "A boxy, dust-covered construct with thick metallic swinging doors on their torso.", motive: "Carry away, entrap, protect, pummel", difficulty: 16, thresholdmajor: 19, thresholdsevere: 33, hp: 5, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Body Bash", attackrange: "Very Close", attackdamage: "3d6+2", attackdamagetype: "phy", features: ["<p><strong><em>Blocking Shield&mdash;Passive:</em></strong> Creatures within <a href='#define-range'>Melee</a> range of the Gaoler have <a href='#define-advantage'>disadvantage</a> on <a href='#define-attack-roll'>attack rolls</a> against them. Creatures trapped inside the Gaoler are <a href='#define-damage-type'>immune</a> to this feature.</p>", "<p><strong><em>Lock Up&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, the target is <a href='#define-condition'><em>Restrained</em></a> within the Gaoler until freed with a successful <a href='#define-trait-roll'>Strength Roll</a> (18). While <a href='#define-condition'><em>Restrained</em></a>, the target can only attack the Gaoler.</p>"], category: "Monster", ednote: "" },
{ label: "Vault Guardian Sentinel", name: "vault-guardian-sentinel", tier: 3, type: "Bruiser", pages: ["Page 232"], summary: "A dust-covered golden construct with boxy limbs and a huge mace for a hand.", motive: "Destroy at any cost, expunge, protect", difficulty: 17, thresholdmajor: 21, thresholdsevere: 40, hp: 6, hphorde: 0, stress: 3, attackbonus: 3, attacklabel: "Charged Mace", attackrange: "Very Close", attackdamage: "2d12+1", attackdamagetype: "phy", features: ["<p><strong><em>Kinetic Slam&mdash;Passive:</em></strong> Targets who take damage from the Sentinel's standard attack are knocked back to <a href='#define-range'>Very Close</a> range.</p>", "<p><strong><em>Box In&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to choose a target within <a href='#define-range'>Very Close</a> range to focus on. That target has <a href='#define-advantage'>disadvantage</a> on <a href='#define-attack-roll'>attack rolls</a> when they're within <a href='#define-range'>Very Close</a> range of the Sentinel. The Sentinel can only focus on one target at a time.</p>", "<p><strong><em>Mana Bolt&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to lob explosive magic at a point within <a href='#define-range'>Far</a> range. All targets within <a href='#define-range'>Very Close</a> range of that point must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>8d20</strong> <a href='#define-damage-type'>magic damage</a> and are knocked back to <a href='#define-range'>Close</a> range. Targets who succeed take half damage and aren't knocked back.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Sentinel makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Vault Guardian Turret", name: "vault-guardian-turret", tier: 3, type: "Ranged", pages: ["Page 233"], summary: "A massive hulking turret with reinforced armor and twelve piston-driven mechanical legs.", motive: "Concentrate fire, lock down, mark, protect", difficulty: 16, thresholdmajor: 20, thresholdsevere: 32, hp: 5, hphorde: 0, stress: 4, attackbonus: 3, attacklabel: "Magitech Cannon", attackrange: "Far", attackdamage: "3d10+3", attackdamagetype: "mag", features: ["<p><strong><em>Slow Firing&mdash;Passive:</em></strong> When you <a href='#define-spotlight'>spotlight</a> the Turret and they don't have a token on their stat block, they can't make a standard attack. Place a token on their stat block and describe what they're preparing to do. When you <a href='#define-spotlight'>spotlight</a> the Turret and they have a token on their stat block, clear the token and they can attack.</p>", "<p><strong><em>Mark Target&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to <em>Mark</em> a target within <a href='#define-range'>Far</a> range until the Turret is destroyed or the <em>Marked</em> target becomes <a href='#define-condition'><em>Hidden</em></a>. While the target is <em>Marked</em>, their <a href='#define-evasion'>Evasion</a> is halved.</p>", "<p><strong><em>Concentrate Fire&mdash;Reaction:</em></strong> When another adversary deals damage to a target within <a href='#define-range'>Far</a> range of the Turret, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to add the Turret's standard attack damage to the <a href='#define-damage-roll'>damage roll</a>.</p>", "<p><strong><em>Detonation&mdash;Reaction:</em></strong> When the Turret is destroyed, they explode. All targets within <a href='#define-range'>Close</a> range must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>3d20</strong> <a href='#define-damage-type'>physical damage</a>. Targets who succeed take half damage.</p>"], category: "Monster", ednote: "" },
{ label: "Volcanic Dragon: Obsidian Predator", name: "volcanic-dragon-obsidian-predator", tier: 4, type: "Solo", pages: ["Page 238"], summary: "A massive winged creature with obsidian scales and impossibly sharp claws.", motive: "Defend lair, dive-bomb, fly, hunt, intimidate", difficulty: 19, thresholdmajor: 33, thresholdsevere: 65, hp: 6, hphorde: 0, stress: 5, attackbonus: 8, attacklabel: "Obsidian Claws", attackrange: "Close", attackdamage: "4d10+4", attackdamagetype: "phy", experiences: ["Hunt from Above +5"], features: ["<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> The Obsidian Predator can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a>.</p>", "<p><strong><em>Flying&mdash;Passive:</em></strong> While flying, the Obsidian Predator gains +3 <a href='#define-difficulty'>Difficulty</a>.</p>", "<p><strong><em>Obsidian Scales&mdash;Passive:</em></strong> The Obsidian Predator is <a href='#define-damage-type'>resistant</a> to <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Avalanche Tail&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make attack against all targets within <a href='#define-range'>Close</a> range. Success: <strong>4d6+4</strong> <a href='#define-damage-type'>physical damage</a>, knocked to <a href='#define-range'>Far</a> range and <a href='#define-condition'><em>Vulnerable</em></a> until next roll with <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Dive-Bomb&mdash;Action:</em></strong> If the Obsidian Predator is flying, <strong><a href='#define-stress'>mark a Stress</a></strong> to choose point within <a href='#define-range'>Far</a> range. Move to that point and make an attack against all targets within <a href='#define-range'>Very Close</a> range. Targets the Obsidian Predator succeeds against take <strong>2d10+6</strong> physical, mark a <a href='#define-stress'>Stress</a> and lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Erupting Rage (Phase Change)&mdash;Reaction:</em></strong> When the Obsidian Predator marks their last <a href='#define-hit-point'>HP</a>, replace them with the <a href='#define-adversary-volcanic-dragon-molten-scourge'>Molten Scourge</a> and immediately <a href='#define-spotlight'>spotlight</a> them.</p>"], category: "Monster", ednote: "" },
{ label: "Volcanic Dragon: Molten Scourge", name: "volcanic-dragon-molten-scourge", tier: 4, type: "Solo", pages: ["Page 238"], summary: "Engaged by their wounds, the dragon bursts into molten lava.", motive: "Douse with lava, incinerate, repel invaders, respawn", difficulty: 20, thresholdmajor: 30, thresholdsevere: 58, hp: 7, hphorde: 0, stress: 5, attackbonus: 9, attacklabel: "Lava-Coated Claws", attackrange: "Close", attackdamage: "4d12+4", attackdamagetype: "phy", experiences: ["Hunt from Above +5"], features: ["<p><strong><em>Relentless (3)&mdash;Passive:</em></strong> The Molten Scourge can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Cracked Scales&mdash;Passive:</em></strong> When the Molten Scourge takes damage, roll a number of <strong>d6s</strong> equal to <a href='#define-hit-point'>HP</a> marked. For each result of 4 or higher, you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Shattering Might&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against a target within <a href='#define-range'>Very Close</a> range. On a success, target takes <strong>4d8+14</strong> <a href='#define-damage-type'>physical damage</a>, loses a <a href='#define-hope'>Hope</a>, and is knocked back to <a href='#define-range'>Close</a> range. The Molten Scourge clears a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Eruption&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to erupt lava from beneath the Molten Scourge's scales, filling area within <a href='#define-range'>Very Close</a> range with lava. All targets must make <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>4d6+6</strong> <a href='#define-damage-type'>physical damage</a> and be knocked back to <a href='#define-range'>Close</a> range. The area remains lava (6 <a href='#define-hit-point'>HP</a> damage on entry or action).</p>", "<p><strong><em>Volcanic Breath&mdash;Reaction:</em></strong> When the Molten Scourge takes <a href='#define-hit-point'>Major</a> damage, roll <strong>d10</strong>. On 8+, erupt lava in <a href='#define-range'>Very Close</a> range: <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>2d10+4</strong> <a href='#define-damage-type'>physical damage</a>, mark <strong>1d4</strong> <a href='#define-stress'>Stress</a>, and are <a href='#define-condition'><em>Vulnerable</em></a> until clearing a <a href='#define-stress'>Stress</a>. Targets who succeed take half damage and must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Lava Splash&mdash;Reaction:</em></strong> When the Molten Scourge takes <a href='#define-hit-point'>Severe</a> damage from attack within <a href='#define-range'>Very Close</a>, molten blood gushes from the wound and deals <strong>2d10+4</strong> <a href='#define-damage-type'>direct physical damage</a> to attacker.</p>", "<p><strong><em>Ashen Vengeance (Phase Change)&mdash;Reaction:</em></strong> When the Molten Scourge marks their last <a href='#define-hit-point'>HP</a>, replace them with the <a href='#define-adversary-volcanic-dragon-ashen-tyrant'>Ashen Tyrant</a> and immediately <a href='#define-spotlight'>spotlight</a> them.</p>"], category: "Monster", ednote: "" },
{ label: "Volcanic Dragon: Ashen Tyrant", name: "volcanic-dragon-ashen-tyrant", tier: 4, type: "Solo", pages: ["Page 238"], summary: "A legendary, lava-hardened dragon. No enemy has ever had the insolence to wound the dragon so.", motive: "Choke, fly, intimidate, kill or be killed", difficulty: 18, thresholdmajor: 29, thresholdsevere: 55, hp: 8, hphorde: 0, stress: 5, attackbonus: 10, attacklabel: "Claws and Teeth", attackrange: "Close", attackdamage: "4d12+15", attackdamagetype: "phy", experiences: ["Hunt from Above +5"], features: ["<p><strong><em>Relentless (4)&mdash;Passive:</em></strong> The Ashen Tyrant can be <a href='#define-spotlight'>spotlighted</a> up to four times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Cornered&mdash;Passive:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> instead of spending a <a href='#define-fear'>Fear</a> to <a href='#define-spotlight'>spotlight</a> the Ashen Tyrant.</p>", "<p><strong><em>Injured Wings&mdash;Passive:</em></strong> While flying, the Ashen Tyrant gains a +1 bonus to their <a href='#define-difficulty'>Difficulty</a>.", "<p><strong><em>Ashes to Ashes&mdash;Passive:</em></strong> When a PC rolls a failure while within <a href='#define-range'>Close</a> range of the Ashen Tyrant, they lose a <a href='#define-hope'>Hope</a> and you gain a <a href='#define-fear'>Fear</a>. If the PC can't lose a <a href='#define-hope'>Hope</a>, they must mark a <a href='#define-hit-point'>HP</a>.</p>", "<p><strong><em>Desperate Rampage&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to make an attack against all targets within <a href='#define-range'>Close</a> range. Targets the Ashen Tyrant succeeds against take <strong>2d20+2</strong> <a href='#define-damage-type'>physical damage</a>, are knocked back to <a href='#define-range'>Close</a> range of where they were, and must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Ashen Cloud&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to smash the ground beneath an adversary within <a href='#define-range'>Far</a> range. While within the ash cloud, a target has <a href='#define-advantage'>disadvantage</a> on <a href='#define-action-roll'>action rolls</a>. The ash cloud clears the next time an adversary is <a href='#define-spotlight'>spotlighted</a>.</p>", "<p><strong><em>Apocalyptic Thrashing&mdash;Action:</em></strong> <em><a href='#define-countdown'>Countdown (1d12)</a></em>. <strong><a href='#define-fear'>Spend a Fear</a></strong> to activate it. It ticks down when a PC rolls with <a href='#define-fear'>Fear</a>. When it reaches 0, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within <a href='#define-range'>Far</a> range must make a <a href='#define-strength'>Strength</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>2d10+10</strong> <a href='#define-damage-type'>physical damage</a> and are <a href='#define-condition'><em>Restrained</em></a> by the rubble until they break free with a successful <a href='#define-trait-roll'>Strength Roll</a>. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes.</p>"], category: "Monster", ednote: "" },
{ label: "War Wizard", name: "war-wizard", tier: 2, type: "Ranged", pages: ["Page 202"], summary: "A battle-hardened mage trained in destructive magic.", motive: "Develop new spells, seek power, conquer", difficulty: 16, thresholdmajor: 11, thresholdsevere: 23, hp: 5, hphorde: 0, stress: 6, attackbonus: 4, attacklabel: "Staff", attackrange: "Far", attackdamage: "2d10+4", attackdamagetype: "mag", experiences: ["Magical Knowledge +2", "Strategize +2"], features: ["<p><strong><em>Battle Teleport&mdash;Passive:</em></strong> Before or after making a standard attack, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to teleport to a location within <a href='#define-range'>Far</a> range.</p>", "<p><strong><em>Refresh Warding Sphere&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to refresh the Wizard's <strong><em>Warding Sphere</em></strong> reaction.</p>", "<p><strong><em>Eruption&mdash;Action:</em></strong> Spend a <a href='#define-fear'>Fear</a> and choose a point within <a href='#define-range'>Far</a> range. A <a href='#define-range'>Very Close</a> area around that point erupts into impassable terrain. All targets within that area must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> (14). Targets who fail take <strong>2d10</strong> <a href='#define-damage-type'>physical damage</a> and are thrown out of the area. Targets who succeed take half damage and aren't moved.</p>", "<p><strong><em>Arcane Artillery&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to unleash a precise hail of magical blasts. All targets in the scene must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>2d12</strong> <a href='#define-damage-type'>magic damage</a>. Targets who succeed take half damage.</p>", "<p><strong><em>Warding Sphere&mdash;Reaction:</em></strong> When the Wizard takes damage from an attack within <a href='#define-range'>Close</a> range, deal <strong>2d6</strong> <a href='#define-damage-type'>magic damage</a> to the attacker. This reaction can't be used again until the Wizard refreshes it with their <strong><em>Refresh Warding Sphere</em></strong> action.</p>"], category: "Person", ednote: "" },
{ label: "Weaponmaster", name: "weaponmaster", tier: 1, type: "Bruiser", pages: ["Page 218"], summary: "A master-at-arms wielding a sword twice their size.", motive: "Act first, aim for the weakest, intimidate", difficulty: 14, thresholdmajor: 8, thresholdsevere: 15, hp: 6, hphorde: 0, stress: 3, attackbonus: 2, attacklabel: "Claymore", attackrange: "Very Close", attackdamage: "1d12+2", attackdamagetype: "phy", features: ["<p><strong><em>Goading Strike&mdash;Action:</em></strong> Make a standard attack against a target. On a success, mark a <a href='#define-stress'>Stress</a> to Taunt the target until their next successful <a href='#define-attack-roll'>attack</a>. The next time the Taunted target attacks, they have <a href='#define-advantage'>disadvantage</a> against targets other than the Weaponmaster.</p>", "<p><strong><em>Adrenaline Burst&mdash;Action:</em></strong> Once per scene, <a href='#define-fear'><strong>spend a Fear</strong></a> to clear 2 <a href='#define-hit-point'>HP</a> and 2 <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Weaponmaster makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Person", ednote: "" },
{ label: "Young Dryad", name: "young-dryad", tier: 1, type: "Leader", pages: ["Page 218"], summary: "An imperious tree-person leading their forest's defenses.", motive: "Command, nurture, prune the unwelcome", difficulty: 11, thresholdmajor: 6, thresholdsevere: 11, hp: 6, hphorde: 0, stress: 2, attackbonus: 0, attacklabel: "Scythe", attackrange: "Melee", attackdamage: "1d8+5", attackdamagetype: "phy", experiences: ["Leadership +3"], features: ["<p><strong><em>Voice of the Forest&mdash;Action:</em></strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to <a href='#define-spotlight'>spotlight</a> <strong>1d4</strong> allies within range of a target they can attack without moving. On a success, their attacks deal half damage.</p>", "<p><strong><em>Thorny Cage&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to form a cage around a target within <a href='#define-range'>Very Close</a> range and <a href='#define-condition'><em>Restrain</em></a> them until they're freed with a successful <a href='#define-trait-roll'>Strength Roll</a>. When a creature makes an <a href='#define-action-roll'>action roll</a> against the cage, they must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Dryad makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Young Ice Dragon", name: "young-ice-dragon", tier: 3, type: "Solo", pages: ["Page 233"], summary: "A glacier-blue dragon with four powerful limbs and frost-tinged wings.", motive: "Avalanche, defend lair, fly, freeze, defend what is mine, maul", difficulty: 18, thresholdmajor: 21, thresholdsevere: 41, hp: 10, hphorde: 0, stress: 6, attackbonus: 7, attacklabel: "Bite and Claws", attackrange: "Close", attackdamage: "4d10", attackdamagetype: "phy", experiences: ["Protect What Is Mine +3"], features: ["<p><strong><em>Relentless (3)&mdash;Passive:</em></strong> The Dragon can be <a href='#define-spotlight'>spotlighted</a> up to three times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</p>", "<p><strong><em>Rend and Crush&mdash;Passive:</em></strong> If a target damaged by the Dragon doesn't mark an <a href='#define-armor'>Armor Slot</a> to reduce the damage, they must mark a <a href='#define-stress'>Stress</a>.</p>", "<p><strong><em>No Hope&mdash;Passive:</em></strong> When a PC rolls with <a href='#define-fear'>Fear</a> while within <a href='#define-range'>Far</a> range of the Dragon, they lose a <a href='#define-hope'>Hope</a>.</p>", "<p><strong><em>Blizzard Breath&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to release an icy whirlwind in an area within <a href='#define-range'>Close</a> range. All targets in this area must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>4d6+5</strong> <a href='#define-damage-type'>magic damage</a> and are <a href='#define-condition'><em>Restrained</em></a> by ice until they break free with a successful <a href='#define-trait-roll'>Strength Roll</a>. Targets who succeed must mark 2 <a href='#define-stress'>Stress</a> or take half damage.</p>", "<p><strong><em>Avalanche&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to have the Dragon unleash a huge downfall of snow and ice, covering all other creatures within <a href='#define-range'>Far</a> range. All targets within this area must succeed on an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> or be buried in snow and rocks, becoming <a href='#define-condition'><em>Vulnerable</em></a> until they dig themselves out from the debris. For each PC that fails the <a href='#define-reaction-roll'>reaction roll</a>, you gain a <a href='#define-fear'>Fear</a>.</p>", "<p><strong><em>Frozen Scales&mdash;Reaction:</em></strong> When a creature makes a successful attack against the Dragon from within <a href='#define-range'>Very Close</a> range, they must mark a <a href='#define-stress'>Stress</a> and become <em>Chilled</em> until their next rest or they clear a <a href='#define-stress'>Stress</a>. While they are <em>Chilled</em>, they have <a href='#define-advantage'>disadvantage</a> on <a href='#define-attack-roll'>attack rolls</a>.</p>", "<p><strong><em>Momentum&mdash;Reaction:</em></strong> When the Dragon makes a successful attack against a PC, you gain a <a href='#define-fear'>Fear</a>.</p>"], category: "Monster", ednote: "" },
{ label: "Zombie Legion", name: "zombie-legion", tier: 4, type: "Horde", pages: ["Page 239", "Errata"], summary: "A large pack of undead, still powerful despite their rotting flesh.", motive: "Consume brain, shred flesh, surround", difficulty: 17, thresholdmajor: 2, thresholdsevere: 45, hp: 8, hphorde: 3, stress: 5, attackbonus: 2, attacklabel: "Undead Hands", attackrange: "Close", attackdamage: "4d6+10", attackdamagetype: "phy", features: ["<p><strong><em>Horde (2d6+5)&mdash;Passive:</em></strong> When Legion has half or more <a href='#define-hit-point'>HP</a> marked, standard attack deals <strong>2d6+5</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Unyielding&mdash;Passive:</em></strong> Legion has <a href='#define-damage-type'>resistance</a> to <a href='#define-damage-type'>physical damage</a>.</p>", "<p><strong><em>Relentless (2)&mdash;Passive:</em></strong> Legion can be <a href='#define-spotlight'>spotlighted</a> up to two times per <a href='#define-spotlight'>GM turn</a>. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a>.</p>", "<p><strong><em>Overwhelm&mdash;Reaction:</em></strong> When Legion takes <a href='#define-hit-point'>Minor</a> damage from attack within Melee, mark a <a href='#define-stress'>Stress</a> to make standard attack with <a href='#define-advantage'>advantage</a> against the attacker.</p>"], category: "Supernatural", ednote: "" },
{ label: "Zombie Pack", name: "zombie-pack", tier: 1, type: "Horde", pages: ["Page 219"], summary: "A group of shambling corpses instinctively moving together.", motive: "Consume flesh, hunger, maul", difficulty: 8, thresholdmajor: 6, thresholdsevere: 12, hp: 6, hphorde: 2, stress: 3, attackbonus: -1, attacklabel: "Bite", attackrange: "Melee", attackdamage: "1d10+2", attackdamagetype: "phy", features: ["<p><strong><em>Horde (1d4+2)&mdash;Passive:</em></strong> When the Zombies have marked half or more of their <a href='#define-hit-point'>HP</a>, their standard attack deals <strong>1d4+2</strong> <a href='#define-damage-type'>physical damage</a> instead.</p>", "<p><strong><em>Overwhelm&mdash;Reaction:</em></strong> When the Zombies mark <a href='#define-hit-point'>HP</a> from an attack within <a href='#define-range'>Melee</a> range, you can <strong><a href='#define-stress'>mark a Stress</a></strong> to make a standard attack against the attacker.</p>"], category: "Supernatural", ednote: "" }
];
// environments
const environmentList = [
{ label: "Abandoned Grove", name: "abandoned-grove", tier: 1, type: "Exploration", pages: ["Page 243", "Errata"], summary: "A former druidic grove lying fallow and fully reclaimed by nature.", impulses: "Draw in the curious, echo the past", difficulty: 11, adversaries: "Beasts (<a href='#define-adversary-bear'>Bear</a>, <a href='#define-adversary-dire-wolf'>Dire Wolf</a>, <a href='#define-adversary-glass-snake'>Glass Snake</a>), Grove Guardians (<a href='#define-adversary-minor-treant'>Minor Treant</a>, <a href='#define-adversary-sylvan-soldier'>Sylvan Soldier</a>, <a href='#define-adversary-young-dryad'>Young Dryad</a>)", features: [ "<p><strong><em>Overgrown Battlefield&mdash;Passive:</em></strong> There has been a battle here. A PC can make an <a href='#define-trait-roll'>Instinct Roll</a> to identify evidence of that fight. On a <a href='#define-action-roll'>success with Hope</a>, learn all three pieces of information below. On a <a href='#define-action-roll'>success with Fear</a>, learn two. On a failure, a PC can mark 3 <a href='#define-stress'>Stress</a> to learn one and gain <a href='#define-advantage'>advantage</a> on the next <a href='#define-action-roll'>action roll</a> to investigate this environment. A PC with an appropriate background or <a href='#define-experience'>Experience</a> can learn an additional detail and ask a follow-up question about the scene and get a truthful (if not always complete) answer.</p><ul class='og-list-disc'><li>Traces of a battle (broken weapons and branches, gouges in the ground) litter the ground.</li><li>A moss-covered tree trunk is actually the corpse of a treant.</li><li>Still-standing trees are twisted in strange ways, as if by powerful magic.</li></ul>", "<p><strong><em>Barbed Vines&mdash;Action:</em></strong> Pick a point within the grove. All targets within <a href='#define-range'>Very Close</a> range of that point must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>1d8+3</strong> <a href='#define-damage-type'>physical damage</a> and become <a href='#define-condition'><em>Restrained</em></a> by barbed vines. <a href='#define-condition'><em>Restrained</em></a> lasts until they're freed with a successful <a href='#define-trait-roll'>Finesse or Strength Roll</a> or by dealing at least 6 damage to the vines.</p>", "<p><strong><em>You Are Not Welcome Here&mdash;Action:</em></strong> A <a href='#define-adversary-young-dryad'>Young Dryad</a>, two <a href='#define-adversary-sylvan-soldier'>Sylvan Soldiers</a>, and a number of <a href='#define-adversary-minor-treant'>Minor Treants</a> equal to the number of PCs appear to confront the party for their intrusion.</p>", "<p><strong><em>Defiler&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to summon a <a href='#define-adversary-minor-chaos-elemental'>Minor Chaos Elemental</a> drawn to the echoes of violence and discord. They appear within <a href='#define-range'>Far</a> range of a chosen PC and immediately take the <a href='#define-spotlight'>spotlight</a>.</p>"] },
{ label: "Ambushed", name: "ambushed", tier: 1, type: "Event", pages: ["Page 243"], summary: "An ambush is set to catch an unsuspecting party off-guard.", impulses: "Overwhelm, scatter, surround", difficulty: "Special (see <strong><em>Relative Strength</em></strong>)", adversaries: "Any", features: [ "<p><strong><em>Relative Strength&mdash;Passive:</em></strong> The <a href='#define-difficulty'>Difficulty</a> of this environment equals that of the adversary with the highest <a href='#define-difficulty'>Difficulty</a>.</p>", "<p><strong><em>Surprise!&mdash;Action:</em></strong> The ambushers reveal themselves to the party, you gain 2 <a href='#define-fear'>Fear</a>, and the <a href='#define-spotlight'>spotlight</a> immediately shifts to one of the ambushing adversaries.</p>"] },
{ label: "Ambushers", name: "ambushers", tier: 1, type: "Event", pages: ["Page 243"], summary: "An ambush is set by the PCs to catch unsuspecting adversaries off-guard.", impulses: "Escape, group up, protect the most <a href='#define-condition'><em>Vulnerable</em></a>", difficulty: "Special (see <strong><em>Relative Strength</em></strong>)", adversaries: "Any", features: [ "<p><strong><em>Relative Strength&mdash;Passive:</em></strong> The <a href='#define-difficulty'>Difficulty</a> of this environment equals that of the adversary with the highest <a href='#define-difficulty'>Difficulty</a>.</p>", "<p><strong><em>Where Did They Come From?&mdash;Reaction:</em></strong> When a PC starts the ambush on unsuspecting adversaries, you lose 2 <a href='#define-fear'>Fear</a> and the first <a href='#define-attack-roll'>attack roll</a> a PC makes has <a href='#define-advantage'>advantage</a>.</p>"] },
{ label: "Burning Heart of the Woods", name: "burning-heart-of-the-woods", tier: 3, type: "Exploration", pages: ["Page 248", "Errata"], summary: "Thick indigo ash fills the air around a towering moss-covered tree that burns eternally with flames a sickly shade of blue.", impulses: "Beat out an uncanny rhythm for all to follow, corrupt the woods", difficulty: 16, adversaries: "Beasts (<a href='#define-adversary-bear'>Bear</a>, <a href='#define-adversary-glass-snake'>Glass Snake</a>), Elementals (<a href='#define-adversary-elemental-spark'>Elemental Spark</a>), Verdant Defenders (<a href='#define-adversary-dryad'>Dryad</a>, <a href='#define-adversary-oak-treant'>Oak Treant</a>, <a href='#define-adversary-stag-knight'>Stag Knight</a>)", features: [ "<p><strong><em>Chaos Magic Locus&mdash;Passive:</em></strong> When a PC makes a Spellcast Roll, they must roll two <a href='#define-action-roll'>Fear Dice</a> and take the higher result.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What does it feel like to work magic in this chaos-touched place? What do you fear will happen if you lose control of the spell?</p>", "<p><strong><em>The Indigo Flame&mdash;Passive:</em></strong> PCs who approach the central tree can make a <a href='#define-trait-roll'>Knowledge Roll</a> to try to identify the magic that consumed this environment.</p><ul class='og-list-disc'><li><strong>On a success:</strong> They learn three of the below details. On a <a href='#define-action-roll'>success with Fear</a>, they learn two.</li><li><strong>On a failure:</strong> They can mark a <a href='#define-stress'>Stress</a> to learn one and gain <a href='#define-advantage'>advantage</a> on the next <a href='#define-action-roll'>action roll</a> to investigate this environment.</li><li><strong>Details:</strong> This is a result of Fallen magic. The corruption is spread through the ashen moss. It can be cleansed only by a ritual of nature magic with a <a href='#define-countdown'>Progress Countdown (8)</a>.</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>What fell cult corrupted these woods? What have they already done with the cursed wood and sap from this tree?</p>", "<p><strong><em>Grasping Vines&mdash;Action:</em></strong> Animate vines bristling with thorns whip out from the underbrush to ensnare the PCs. A target must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or become <a href='#define-condition'><em>Restrained</em></a> and <a href='#define-condition'><em>Vulnerable</em></a> until they break free, clearing both conditions, with a successful <a href='#define-trait-roll'>Finesse or Strength Roll</a> or by dealing 10 damage to the vines. When the target makes a roll to escape, they take <strong>1d8+4</strong> <a href='#define-damage-type'>physical damage</a> and lose a <a href='#define-hope'>Hope</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What painful memories do the vines bring to the surface as they pierce flesh?</p>", "<p><strong><em>Charcoal Constructs&mdash;Action:</em></strong> Warped animals wreathed in indigo flame trample through a point of your choice. All targets within <a href='#define-range'>Close</a> range of that point must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>3d12+3</strong> <a href='#define-damage-type'>physical damage</a>. Targets who succeed take half damage instead.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Are these real animals consumed by the flame or merely constructs of the corrupting magic?</p>", "<p><strong><em>Choking Ash&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 6)</a></em>. When the PCs enter the Burning Heart of the Woods, activate the countdown. When it triggers, all characters must make a <a href='#define-strength'>Strength</a> or <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>4d6+5</strong> <a href='#define-damage-type'>direct physical damage</a>. Targets who succeed take half damage. Protective masks or clothes give <a href='#define-advantage'>advantage</a> on the <a href='#define-reaction-roll'>Reaction Roll</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What hallucinations does the ash induce? What incongruous taste does it possess?</p>"] },
{ label: "Bustling Marketplace", name: "bustling-marketplace", tier: 1, type: "Social", pages: ["Page 243"], summary: "The economic heart of the settlement, with local artisans, traveling merchants, and patrons across social classes.", impulses: "Buy low, sell high, tempt and tantalize with wares from near and far", difficulty: 10, adversaries: "Guards (<a href='#define-adversary-bladed-guard'>Bladed Guard</a>, <a href='#define-adversary-head-guard'>Head Guard</a>), <a href='#define-adversary-masked-thief'>Masked Thief</a>, <a href='#define-adversary-merchant'>Merchant</a>", features: [ "<p><strong><em>Tip the Scales&mdash;Passive:</em></strong> PCs can gain <a href='#define-advantage'>advantage</a> on a <a href='#define-trait-roll'>Presence Roll</a> by offering a handful of gold as part of the interaction.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Will any coin be accepted, or only local currency? How overt are the PCs in offering this bribe?</p>", "<p><strong><em>Unexpected Find&mdash;Action:</em></strong> Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What cost beyond gold will the merchant ask for in exchange for this rarity?</p>", "<p><strong><em>Sticky Fingers&mdash;Action:</em></strong> A thief tries to steal something from a PC. The PC must succeed on an <a href='#define-trait-roll'>Instinct Roll</a> to notice the thief or lose an item of the GM's choice as the thief escapes to a <a href='#define-range'>Close</a> distance. To retrieve the stolen item, the PCs must complete a <a href='#define-countdown'>Progress Countdown (6)</a> to chase down the thief before the thief completes a <a href='#define-countdown'>Consequence Countdown (4)</a> and escapes to their hideout.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What drove this person to pickpocketing? Where is the thief's hideout and how has it avoided notice?</p>", "<p><strong><em>Crowd Control&mdash;Reaction:</em></strong> When one of the PCs splits from the group, the crowds shift and cut them off from the party.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Where does the crowd's movement carry them? How do they feel about being alone but surrounded?</p>"] },
{ label: "Castle Siege", name: "castle-siege", tier: 3, type: "Event", pages: ["Page 249"], summary: "An active siege with an attacking force fighting to gain entry to a fortified castle.", impulses: "Bleed out the will to fight, breach the walls, build tension", difficulty: 17, adversaries: "Mercenaries (<a href='#define-adversary-harrier'>Harrier</a>, <a href='#define-adversary-sellsword'>Sellsword</a>, <a href='#define-adversary-spellblade'>Spellblade</a>, <a href='#define-adversary-weaponmaster'>Weaponmaster</a>), Noble Forces (<a href='#define-adversary-archer-squadron'>Archer Squadron</a>, <a href='#define-adversary-conscript'>Conscript</a>, <a href='#define-adversary-elite-soldier'>Elite Soldier</a>, <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a>)", features: [ "<p><strong><em>Secret Entrance&mdash;Passive:</em></strong> A PC can find or recall a secret way into the castle with a successful <a href='#define-trait-roll'>Instinct or Knowledge Roll</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How do they get in without revealing the pathway to the attackers? Are any of the defenders monitoring this path?</p>", "<p><strong><em>Siege Weapons (Environment Change)&mdash;Action:</em></strong> <em><a href='#define-countdown'>Consequence Countdown (5)</a></em>. The attacking force deploys siege weapons to try to raze the defenders' fortifications. Activate the countdown when the siege begins (for a protracted siege, make this a <a href='#define-countdown'>long-term countdown</a> instead). When it triggers, the defenders' fortifications have been breached and the attackers flood in. You gain 2 <a href='#define-fear'>Fear</a>, then shift to the <a href='#define-environment-pitched-battle'>Pitched Battle</a> environment and <a href='#define-spotlight'>spotlight</a> it.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What siege weapons are being deployed? Are they magical, mundane, or a mixture of both? What defenses must the characters overcome to storm the castle?</p>", "<p><strong><em>Reinforcements&mdash;Action:</em></strong> Summon a <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a>, a number of Tier 3 <a href='#define-adversary-type'>Minions</a> equal to the number of PCs, and two adversaries of your choice within <a href='#define-range'>Far</a> range of a chosen PC as reinforcements. The <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a> immediately takes the <a href='#define-spotlight'>spotlight</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Who are they targeting first? What formation do they take?</p>", "<p><strong><em>Collateral Damage&mdash;Reaction:</em></strong> When an adversary is defeated, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to have a stray attack from a siege weapon hit a point on the battlefield. All targets within <a href='#define-range'>Very Close</a> range of that point must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>.</p><ul class='og-list-disc'><li>Targets who fail take <strong>3d8+3</strong> <a href='#define-damage-type'>physical</a> or <a href='#define-damage-type'>physical damage</a> and must mark a <a href='#define-stress'>Stress</a>.</li><li>Targets who succeed must mark a <a href='#define-stress'>Stress</a>.</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>What debris is scattered by the attack? What is broken by the strike that can't be easily mended?</p>"] },
{ label: "Chaos Realm", name: "chaos-realm", tier: 4, type: "Traversal", pages: ["Page 250", "Errata"], summary: "An otherworldly space where the laws of reality are unstable and dangerous.", impulses: "Annihilate certainty, consume power, defy logic", difficulty: 20, adversaries: "Outer Realms Monstrosities (<a href='#define-adversary-outer-realms-abomination'>Abomination</a>, <a href='#define-adversary-outer-realms-corruptor'>Corruptor</a>, <a href='#define-adversary-outer-realms-thrall'>Thrall</a>)", features: [ "<p><strong><em>Impossible Architecture&mdash;Passive:</em></strong> Up is down, down is right, right is a stairway. Gravity and directionality themselves are in flux, and any attempt to move through this realm is an odyssey unto itself, requiring a <a href='#define-countdown'>Progress Countdown (8)</a>. On a failure, a PC must mark a <a href='#define-stress'>Stress</a> in addition to the roll's other consequences.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What does it feel like to move in a space so alien to the Mortal Realm? What landmark or point do you fixate on to maintain your balance? What bizarre landmarks do you traverse on your journey?</p>", "<p><strong><em>Everything You Are This Place Will Take from You&mdash;Action:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 14)</a></em>. Activate the countdown. When it triggers, all PCs must succeed on a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a> or their highest trait is <a href='#define-temporary'>temporarily</a> reduced by <strong>1d4</strong> unless they mark a number of <a href='#define-stress'>Stress</a> equal to its value. Any lost trait points are regained if the PC <a href='#define-action-roll'>critically succeeds</a> or escapes the Chaos Realm.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How does this place try to steal from you that which makes you legendary? What does it feel like to have this power taken from you?</p>", "<p><strong><em>Unmake&mdash;Action:</em></strong> On a failure, they take <strong>4d10</strong> <a href='#define-damage-type'>direct magic damage</a>. On a success, they must mark a <a href='#define-stress'>Stress</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What glimpse of other worlds do you catch while this place tries to unmake you? What core facet of your personality does the unmaking try to erase?</p>", "<p><strong><em>Outer Realms Predators&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to summon an <a href='#define-adversary-outer-realms-abomination'>Outer Realms Abomination</a>, an <a href='#define-adversary-outer-realms-corruptor'>Outer Realms Corruptor</a>, and <strong>2d6</strong> <a href='#define-adversary-outer-realms-thrall'>Outer Realms Thralls</a>, who appear at <a href='#define-range'>Close</a> range of a chosen PC in defiance of logic and causality. Immediately <a href='#define-spotlight'>spotlight</a> one of these adversaries, and you can <strong><a href='#define-fear'>spend an additional Fear</a></strong> to automatically succeed on that adversary's standard attack.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What half-consumed remnants of the shattered soul do these monstrosities cast aside in pursuit of living flesh? What jagged reflections of former personhood do you catch between moments of unquenching malice?</p>", "<p><strong><em>Disorienting Reality&mdash;Reaction:</em></strong> On a <a href='#define-action-roll'>result with Fear</a>, you can ask the PC to describe which of their fears the Chaos Realm evokes as a vision of reality unmakes and reconstitutes itself to the PC. The PC loses a <a href='#define-hope'>Hope</a>. If it is their last <a href='#define-hope'>Hope</a>, you gain a <a href='#define-fear'>Fear</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What moment do they see? If it's a memory, how is it usurped by this place? How hard will it be to hold on to the real memory?</p>"] },
{ label: "Cliffside Ascent", name: "cliffside-ascent", tier: 1, type: "Traversal", pages: ["Page 244"], summary: "A steep, rocky cliffside tall enough to make traversal dangerous.", impulses: "Cast the unwary down to a rocky doom, draw people in with promise of what lies at the top", difficulty: 12, adversaries: "<a href='#define-adversary-construct'>Construct</a>, <a href='#define-adversary-deeproot-defender'>Deeproot Defender</a>, <a href='#define-adversary-giant-scorpion'>Giant Scorpion</a>, <a href='#define-adversary-glass-snake'>Glass Snake</a>", features: [ "<p><strong><em>The Climb&mdash;Passive:</em></strong> Climbing up the cliffside uses a <a href='#define-countdown'>Progress Countdown (12)</a>. It ticks down according to the following criteria when the PCs make an <a href='#define-action-roll'>action roll</a> to climb:</p><ul class='og-list-disc'><li><strong>Critical Success:</strong> Tick down 3</li><li><strong>Success with Hope:</strong> Tick down 2</li><li><strong>Success with Fear:</strong> Tick down 1</li><li><strong>Failure with Hope:</strong> No advancement</li><li><strong>Failure with Fear:</strong> Tick up 1</li></ul><p class='og-list-hang-none'>When the countdown triggers, the party has made it to the top of the cliff.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What strange formations are the stones arranged in? What ominous warnings did previous adventurers leave?</p>", "<p><strong><em>Pitons Left Behind&mdash;Passive:</em></strong> Previous climbers left behind large metal rods that climbers can use to aid their ascent. If a PC using the pitons fails an <a href='#define-action-roll'>action roll</a> to climb, they can mark a <a href='#define-stress'>Stress</a> instead of ticking the countdown up.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What do the shape and material of these pitons tell you about the previous climbers? How far apart are they from one another?</p>", "<p><strong><em>Fall&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to have a PC's handhold fail, plummeting them toward the ground. If they aren't saved on the next action, they must make a roll; tick up the countdown by 1, and they take <strong>1d12</strong> <a href='#define-damage-type'>physical damage</a> if the countdown is between 8 and 12, <strong>2d12</strong> between 4 and 7, and <strong>3d12</strong> at 3 or lower.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How can you tell how many others have fallen here before? What lives in these walls that might try to scare adventurers into falling for an easy meal?</p>"] },
{ label: "Cult Ritual", name: "cult-ritual", tier: 2, type: "Event", pages: ["Page 246"], summary: "A fallen cult assembles around a sigil of the defeated gods and a bonfire that burns a sickly shade of green.", impulses: "Profane the land, unite the Mortal Realm with the Circles Below", difficulty: 14, adversaries: "Cult of the Fallen (<a href='#define-adversary-cult-adept'>Cult Adept</a>, <a href='#define-adversary-cult-fang'>Cult Fang</a>, <a href='#define-adversary-cult-initiate'>Cult Initiate</a>, <a href='#define-adversary-secret-keeper'>Secret-Keeper</a>)", features: [ "<p><strong><em>Desecrated Ground&mdash;Passive:</em></strong> Cultists dedicated this place to the Fallen Gods, and their foul influence seeps into it. Reduce the PCs' <a href='#define-action-roll'>Hope Die</a> to a <strong>d10</strong> while in this environment. The desecration can be removed with a <a href='#define-countdown'>Progress Countdown (6)</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How do the PCs first notice that something is wrong about this place? What fears resurface while hope is kept at bay?</p>", "<p><strong><em>Blasphemous Might&mdash;Action:</em></strong> A portion of the ritual's power is diverted into a cult member to fight off interlopers. Choose one adversary to become Imbued with terrible magic until the scene ends or they're defeated. An Imbued adversary immediately takes the <a href='#define-spotlight'>spotlight</a> and gains one of the following benefits, or all three if you <strong><a href='#define-fear'>spend a Fear</a></strong>:</p><ul class='og-list-disc'><li>They gain <a href='#define-advantage'>advantage</a> on all attacks.</li><li>They deal an extra <strong>1d10</strong> damage on a successful attack.</li><li>They gain the following feature: <strong><em>Relentless (2)&mdash;Passive:</em></strong> This adversary can be <a href='#define-spotlight'>spotlighted</a> multiple times per GM turn. Spend <a href='#define-fear'>Fear</a> as usual to <a href='#define-spotlight'>spotlight</a> them.</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>How does the enemy change in appearance? What fears do their blows bring to the surface?</p>", "<p><strong><em>The Summoning&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (6)</a></em>. When the PCs enter the scene or the cult begins the ritual to summon a demon, activate the countdown. Designate one adversary to lead the ritual. The countdown ticks down when a PC <a href='#define-action-roll'>rolls with Fear</a>. When it triggers, summon a <a href='#define-adversary-minor-demon'>Minor Demon</a> within <a href='#define-range'>Very Close</a> range of the ritual's leader. If the leader is defeated, the countdown ends with no effect as the ritual fails.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What will the cult do with this leashed demon if they succeed? What will they try to summon next?</p>", "<p><strong><em>Complete the Ritual&mdash;Reaction:</em></strong> If the ritual's leader is targeted by an attack or spell, an ally within <a href='#define-range'>Very Close</a> range of them can mark a <a href='#define-stress'>Stress</a> to be targeted by that attack or spell instead.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What does it feel like to see such devotion turned to the pursuit of fear and domination?</p>"] },
{ label: "Divine Usurpation", name: "divine-usurpation", tier: 4, type: "Event", pages: ["Page 250"], summary: "A massive ritual designed to breach the gates of the Hallows Above and unseat the New Gods themselves.", impulses: "Collect power, overawe, silence dissent", difficulty: 20, adversaries: "<a href='#define-adversary-arch-necromancer'>Arch-Necromancer</a>, <a href='#define-adversary-fallen-shock-troop'>Fallen Shock Troops</a>, <a href='#define-adversary-mortal-hunter'>Mortal Hunter</a>, <a href='#define-adversary-oracle-of-doom'>Oracle of Doom</a>, <a href='#define-adversary-perfected-zombie'>Perfected Zombie</a>", features: [ "<p><strong><em>Final Preparations&mdash;Passive:</em></strong> When the environment first takes the <a href='#define-spotlight'>spotlight</a>, designate one adversary as the Usurper seeking to overthrow the gods. Activate a <a href='#define-countdown'>Long-Term Countdown (8)</a> as the Usurper assembles what they need to conduct the ritual. When it triggers, <a href='#define-spotlight'>spotlight</a> this environment to use the 'Beginning of the End' feature. While this environment remains in play, you can hold up to 15 <a href='#define-fear'>Fear</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What does the Usurper still require: The heart of a High Seraph? The last notes of an ancient vignette? The loyalty of two archenemies? The heartbroken tears of a pure soul?</p>", "<p><strong><em>Divine Blessing&mdash;Passive:</em></strong> When a PC <a href='#define-action-roll'>critically succeeds</a>, they can spend 2 <a href='#define-hope'>Hope</a> to refresh an ability normally limited by uses (such as once per rest, once per session).</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What god favors you as you fight against this usurpation? How does your renewed power reflect their influence?</p>", "<p><strong><em>Defiers Abound&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend 2 Fear</a></strong> to summon <strong>1d4+2</strong> <a href='#define-adversary-fallen-shock-troop'>Fallen Shock Troops</a> that appear within <a href='#define-range'>Close</a> range of the Usurper to assist their divine siege. Immediately <a href='#define-spotlight'>spotlight</a> the Shock Troops to use a 'Group Attack' action.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Which High Fallen do these troops serve? Which god's flesh do they wish to feast upon?</p>", "<p><strong><em>Godslayer&mdash;Action:</em></strong> If the Divine Siege <a href='#define-countdown'>Countdown</a> (see 'Beginning of the End') has triggered, you can <strong><a href='#define-fear'>spend 3 Fear</a></strong> to describe the Usurper slaying one of the gods of the Hallows Above, feasting upon their power and growing stronger. The Usurper clears 2 <a href='#define-hit-point'>HP</a>. Increase their <a href='#define-difficulty'>Difficulty</a>, damage, attack <a href='#define-procedure'>modifier</a>, or give them a new feature from the slain god.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Which god meets their end? What are their last words? How does the Usurper's new stolen power manifest?</p>", "<p><strong><em>Beginning of the End&mdash;Reaction:</em></strong> When the 'Final Preparations' <a href='#define-countdown'>long-term countdown</a> triggers, the Usurper begins hammering on the gates of the Hallows themselves. Activate a <a href='#define-countdown'>Divine Siege Countdown (10)</a>. Spotlight the Usurper to describe the Usurper's assault and tick down this countdown by 1. If the Usurper takes <a href='#define-hit-point'>Major</a> or greater damage, tick up the countdown by 1. When it triggers, the Usurper shatters the barrier between the Mortal Realm and the Hallows Above to slay the gods and take their place. You gain a <a href='#define-fear'>Fear</a> for each unmarked <a href='#define-hit-point'>HP</a> the Usurper has. You can immediately use the 'Godslayer' feature without spending <a href='#define-fear'>Fear</a> to make an additional GM move.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How does the Mortal Realm writhe as the natural order is violated? What mortals witness this blasphemy from afar?</p>", "<p><strong><em>Ritual Nexus&mdash;Reaction:</em></strong> On any <a href='#define-action-roll'>failure with Fear</a> against the Usurper, the PC must mark <strong>1d4</strong> <a href='#define-stress'>Stress</a> from the backlash of magical power.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What visions of failures past torment you as your efforts fall short? How are these memories twisted by the Usurper?</p>"] },
{ label: "Hallowed Temple", name: "hallowed-temple", tier: 2, type: "Social", pages: ["Page 246"], summary: "A bustling yet well-kept temple that provides healing and hosts regular services, overseen by a priest or seraph.", impulses: "Connect the Mortal Realm with the Hallows Above, display the power of the divine, provide aid and succor to the faithful", difficulty: 13, adversaries: "Guards (<a href='#define-adversary-archer-guard'>Archer Guard</a>, <a href='#define-adversary-bladed-guard'>Bladed Guard</a>, <a href='#define-adversary-head-guard'>Head Guard)</a>", features: [ "<p><strong><em>A Place of Healing&mdash;Passive:</em></strong> A PC who takes a rest in the Hallowed Temple automatically clears all <a href='#define-hit-point'>HP</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What does the incense smell like? What kinds of songs do the acolytes sing?</p>", "<p><strong><em>Divine Guidance&mdash;Passive:</em></strong> A PC who prays to a deity while in the Hallowed Temple can make an <a href='#define-trait-roll'>Instinct Roll</a> to receive answers. If the god they beseech isn't welcome in this temple, roll this made with <a href='#define-advantage'>disadvantage</a>.</p><ul class='og-list-disc'><li><strong>Critical Success:</strong> The PC gains clear information. Additionally, they gain <strong>1d4</strong> <a href='#define-hope'>Hope</a>, which can be distributed between the party if they share the vision and guidance they received.</li><li><strong>Success with Hope:</strong> The PC receives clear information.</li><li><strong>Success with Fear:</strong> The PC receives brief flashes of insight and an emotional impression conveying an answer.</li><li><strong>Any Failure:</strong> The PC receives only vague flashes. They can mark a <a href='#define-stress'>Stress</a> to receive one clear image without context.</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>What does it feel like as you are touched by this vision? What feeling lingers after the images have passed?</p>", "<p><strong><em>Restless Hope&mdash;Reaction:</em></strong> Once per scene, each PC can mark a <a href='#define-stress'>Stress</a> to turn a <a href='#define-action-roll'>result with Fear</a> into a <a href='#define-action-roll'>result with Hope</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What emotions or memories do you connect with when fear presses in?</p>", "<p><strong><em>Divine Censure&mdash;Reaction:</em></strong> When the PCs have trespassed, blasphemed, or offended the clergy, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to summon a <a href='#define-adversary-high-seraph'>High Seraph</a> and <strong>1d4</strong> <a href='#define-adversary-bladed-guard'>Bladed Guards</a> within <a href='#define-range'>Close</a> range of the senior priest to reinforce their will.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What symbols or icons do they bear that signal they are anointed agents of the divinity? Who leads the group and what led them to this calling?</p>"] },
{ label: "Haunted City", name: "haunted-city", tier: 2, type: "Exploration", pages: ["Page 247"], summary: "An abandoned city populated by the restless spirits of eras past.", impulses: "Misdirect and disorient, replay apocalypses both public and personal", difficulty: 14, adversaries: "Ghosts (<a href='#define-adversary-spectral-archer'>Spectral Archer</a>, <a href='#define-adversary-spectral-captain'>Spectral Captain</a>, <a href='#define-adversary-spectral-guardian'>Spectral Guardian</a>), ghostly versions of other adversaries (see 'Ghostly Form')", features: [ "<p><strong><em>Buried Knowledge&mdash;Passive:</em></strong> The city has countless mysteries to unfold. A PC who seeks knowledge about the fallen city can make an <a href='#define-trait-roll'>Instinct or Knowledge Roll</a> to learn about this place and discover (potentially haunted) loot.<ul class='og-list-disc'><li><strong>Critical Success:</strong> Gain valuable information and a related useful item.</li><li><strong>Success with Hope:</strong> Gain valuable information.</li><li><strong>Success with Fear:</strong> Uncover vague or incomplete information.</li><li><strong>Any Failure:</strong> <strong><a href='#define-stress'>Mark a Stress</a></strong> to find a lead after an exhaustive search.</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>What secret secrets does the city contain? Why have so many ghosts lingered here? What doomed adventurers have met a bad fate here already?</p>", "<p><strong><em>Ghostly Form&mdash;Passive:</em></strong> Adversaries who appear here are of a ghostly form. They have resistance to <a href='#define-damage-type'>physical damage</a> and can mark a <a href='#define-stress'>Stress</a> to move up to <a href='#define-range'>Close</a> range through solid objects.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What injuries to their physical form speak to their cause of death? What unfulfilled purpose holds them in the Mortal Plane?</p>", "<p><strong><em>Dead Ends&mdash;Action:</em></strong> The ghosts of an earlier era manifest scenes from the past, such as a street festival, a city council, or a heist. These hauntings change the layout of the city around the PCs, blocking the way behind them, forcing a detour, or presenting them with a challenge, such as mistaking them for rival thieves during the heist.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What do the ghosts want from you? What do you need from them?</p>", "<p><strong><em>Apocalypse Then&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to manifest the echo of a past disaster that ravaged the city. Activate a <a href='#define-countdown'>Progress Countdown (5)</a> as the disaster replays around the PCs. To complete the countdown and escape the catastrophe, the PCs must overcome threats such as rampaging fires, stampeding civilians, collapsing buildings, or crumbling streets, while recalling history and finding clues to escape the inevitable.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Is this the disaster that led the city to be abandoned? What is known about this disaster, and how could that help the PCs escape?</p>"] },
{ label: "Imperial Court", name: "imperial-court", tier: 4, type: "Social", pages: ["Page 251"], summary: "The dazzling mansion of a powerful empire, lavishly appointed with stolen treasures.", impulses: "Justify and perpetuate imperial rule, seduce rivals with promises of power and comfort", difficulty: 20, adversaries: "<a href='#define-adversary-bladed-guard'>Bladed Guard</a>, <a href='#define-adversary-courtesan'>Courtesan</a>, <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a>, <a href='#define-adversary-monarch'>Monarch</a>, <a href='#define-adversary-spy'>Spy</a>", features: [ "<p><strong><em>All Roads Lead Here&mdash;Passive:</em></strong> While in the Imperial Court, a PC has <a href='#define-advantage'>disadvantage</a> on <a href='#define-trait-roll'>Presence Roll</a>s made to take actions that don't fit the imperial way of life or support the empire's dominance.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How does the way language is used make even discussing alternative ways of living difficult? What obvious benefits for loyalty create friction when you try to discuss alternatives?</p>", "<p><strong><em>Rival Vassals&mdash;Passive:</em></strong> The PCs can find imperial subjects, vassals, and supplicants in the court, each vying for favor, seeking proximity to power, exchanging favors for loyalty, and elevating their status above others. Some might be desperate to undermine their rivals, while others might even be open to discussions that verge on sedition.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How do they benefit from vassalage, and what has it cost them? What exploitation drives them to consider opposing the unstoppable?</p>", "<p><strong><em>The Gravity of Empire&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to present a PC with a golden opportunity or offer to satisfy a major goal in exchange for obeying or supporting the empire. The target must make a <a href='#define-presence'>Presence</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, they must mark all their <a href='#define-stress'>Stress</a> or accept the offer. If they have already marked all their <a href='#define-stress'>Stress</a>, they must reduce their <a href='#define-stress'>Stress</a> track by <strong>1d4</strong>. On a success, they must mark <strong>1d4</strong> <a href='#define-stress'>Stress</a> as they're taxed by temptation.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What do the PCs want so desperately they might consider throwing in with this ruthless power? How did imperial agents learn the PC's greatest desires?</p>", "<p><strong><em>Imperial Decree&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to tick down a <a href='#define-countdown'>long-term countdown</a> related to the empire's agenda by <strong>1d4</strong>. If this triggers the countdown, a proclamation related to the agenda is announced at court as the plan is executed.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What display of power or transfer of wealth was needed to expedite this plan? Whose lives were disrupted or upended to make this happen?</p>", "<p><strong><em>Eyes Everywhere&mdash;Reaction:</em></strong> On a <a href='#define-action-roll'>result with Fear</a>, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to have someone loyal to the empire overhear seditious talk within the court. A PC must succeed on an <a href='#define-instinct'>Instinct</a> <a href='#define-reaction-roll'>Reaction Roll</a> to notice that the group has been overheard so they can try to intercept the witness before the PCs are exposed.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How has the empire compromised this witness? Why is their first impulse to protect the empire, even if doesn't treat them well?</p>"] },
{ label: "Local Tavern", name: "local-tavern", tier: 1, type: "Social", pages: ["Page 244"], summary: "A lively tavern that serves as the social hub for its town.", impulses: "Provide opportunities for adventurers, nurture community", difficulty: 10, adversaries: "Guards (<a href='#define-adversary-bladed-guard'>Bladed Guard</a>, <a href='#define-adversary-head-guard'>Head Guard</a>), Mercenaries (<a href='#define-adversary-harrier'>Harrier</a>, <a href='#define-adversary-sellsword'>Sellsword</a>, <a href='#define-adversary-spellblade'>Spellblade</a>, <a href='#define-adversary-weaponmaster'>Weaponmaster</a>), <a href='#define-adversary-merchant'>Merchant</a>", features: [ "<p><strong><em>What's the Talk of the Town?&mdash;Passive:</em></strong> A PC can ask the bartender, staff, or patrons about local events, rumors, and potential work with a <a href='#define-trait-roll'>Presence Roll</a>. On a success, they can pick two of the below details to learn&mdash;or three if they critically succeed. On a failure, they can pick one and mark a <a href='#define-stress'>Stress</a> as the local carries on about something irrelevant.</p><ul class='og-list-disc'><li>A fascinating rumor with a connection to a PC's background</li><li>A promising job for the party involving a nearby threat or situation</li><li>Local folklore that relates to something they've seen</li><li>Town gossip that hints at a community problem</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>Who has what kind of information? What gossip do the locals start spreading about the PCs?</p>", "<p><strong><em>Sing for Your Supper&mdash;Passive:</em></strong> A PC can perform one time for the guests by making a <a href='#define-trait-roll'>Presence Roll</a>. On a success, they earn <strong>1d4</strong> handfuls of <a href='#define-gold'>gold</a> (<strong>2d4</strong> if they critically succeed). On a failure, they mark a <a href='#define-stress'>Stress</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What piece do you perform? What does that piece mean to you? When's the last time you performed it for a crowd?</p>", "<p><strong><em>Mysterious Stranger&mdash;Action:</em></strong> Reveal a stranger concealing their identity, lurking in a shaded booth.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What do they want? What's their impression of the PCs? What mannerisms or accessories do they have?</p>", "<p><strong><em>Someone Comes to Town&mdash;Action:</em></strong> Introduce a significant NPC who wants to hire the party for something or who relates to a PC's background.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Did they know the PCs were here? What do they want in this town?</p>", "<p><strong><em>Bar Fight&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to have a bar fight erupt in the tavern. When a PC tries to move through the tavern while the fight persists, they must succeed on an <a href='#define-agility'>Agility</a> or <a href='#define-trait-roll'>Presence Roll</a> or take <strong>1d6+2</strong> <a href='#define-damage-type'>physical damage</a> from a wild swing or thrown object. A PC can try to activate this feature by succeeding on an <a href='#define-action-roll'>action roll</a> that would provoke tavern patrons.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Who started the fight? What will it take to stop it?</p>"] },
{ label: "Mountain Pass", name: "mountain-pass", tier: 1, type: "Traversal", pages: ["Page 247"], summary: "Stony peaks that pierce the clouds, with a twisting path winding its way up and over through many switchbacks.", impulses: "Exact a chilling toll in supplies and stamina, reveal magical tampering, slow down travel", difficulty: 15, adversaries: "Beasts (<a href='#define-adversary-bear'>Bear</a>, <a href='#define-adversary-giant-eagle'>Giant Eagle</a>, <a href='#define-adversary-glass-snake'>Glass Snake</a>), <a href='#define-adversary-chaos-skull'>Chaos Skull</a>, <a href='#define-adversary-minotaur-wrecker'>Minotaur Wrecker</a>, <a href='#define-adversary-mortal-hunter'>Mortal Hunter</a>", features: [ "<p><strong><em>Engraved Sigils&mdash;Passive:</em></strong> Large markings and engravings have been made in the mountainside. A PC with a relevant background or <a href='#define-experience'>Experience</a> identifies them as weather magic increasing the power of the icy winds. A PC who succeeds on a <a href='#define-trait-roll'>Knowledge Roll</a> can recall information about the sigils, potential information about their creators, and the knowledge of how to dispel them. If a PC <a href='#define-action-roll'>critically succeeds</a>, they recognize that the sigils are of a style created by <a href='#define-ridgeborne'>ridgeborne</a> enchanters and they gain <a href='#define-advantage'>advantage</a> on a roll to dispel the sigils.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Who laid this enchantment? Are they nearby? Why did they want the weather to be more daunting?</p>", "<p><strong><em>Avalanche&mdash;Action:</em></strong> Spend a Fear to carve the mountain with an icy torrent, causing an avalanche. All PCs in its path must succeed on an <a href='#define-agility'>Agility</a> or <a href='#define-strength'>Strength</a> <a href='#define-reaction-roll'>Reaction Roll</a> or be bowled over and carried down the mountain. A PC using rope, pitons, or other climbing gear gains <a href='#define-advantage'>advantage</a> on this roll. Targets who fail are knocked down the mountain to <a href='#define-range'>Far</a> range, take <strong>2d20</strong> <a href='#define-damage-type'>physical damage</a>, and must mark a <a href='#define-stress'>Stress</a>. Targets who succeed must mark a <a href='#define-stress'>Stress</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How do the PCs try to weather the avalanche? What approach do the characters take to find one another when their companions go hurtling down the mountainside?</p>", "<p><strong><em>Raptor Nest&mdash;Reaction:</em></strong> When the PCs enter the raptors' hunting grounds, two <a href='#define-adversary-giant-eagle'>Giant Eagles</a> appear at <a href='#define-range'>Very Far</a> range of a chosen PC, identifying the PCs as likely prey.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How long has it been since the eagles last found prey? Do they have eggs in their nest or unfledged young?</p>", "<p><strong><em>Icy Winds&mdash;Reaction:</em></strong> <em><a href='#define-countdown'>Countdown (Loop 4)</a></em>. When the PCs enter the mountain pass, activate the countdown. When it triggers, all characters traveling through the pass must succeed on a <a href='#define-strength'>Strength</a> <a href='#define-reaction-roll'>Reaction Roll</a> or mark a <a href='#define-stress'>Stress</a>. A PC wearing clothes appropriate for extreme cold gains advantage on these rolls.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What parts of the PC's bodies go numb first? How do they try to keep warm as they press forward?</p>"] },
{ label: "Necromancer's Ossuary", name: "necromancers-ossuary", tier: 4, type: "Exploration", pages: ["Page 251"], summary: "A dusty crypt with a library, twisting corridors, and abundant sarcophagi; spattered with the blood of ill-fated invaders.</em></li>", impulses: "Confound intruders, delve into secrets best left buried, manifest unlife, unleash a tide of undead", difficulty: 19, adversaries: "<a href='#define-adversary-arch-necromancer'>Arch-Necromancer</a>'s Host (<a href='#define-adversary-perfected-zombie'>Perfected Zombie</a>, <a href='#define-adversary-zombie-legion'>Zombie Legion</a>)", features: [ "<p><strong><em>No Place for the Living&mdash;Passive:</em></strong> A feature or action that clears <a href='#define-hit-point'>HP</a> requires spending a <a href='#define-hope'>Hope</a> to use. If it already costs <a href='#define-hope'>Hope</a>, a PC must <strong><a href='#define-hope'>spend an additional Hope</a></strong>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What does it feel like to try to heal in a place so antithetical to life?</p>", "<p><strong><em>Centuries of Knowledge&mdash;Passive:</em></strong> A PC can investigate the library and laboratory and make a <a href='#define-trait-roll'>Knowledge Roll</a> to learn information related to arcana, local history, and the Necromancer's plans.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What are the names of the tomes? What project is the necromancer working on and what does it communicate about their plans?</p>", "<p><strong><em>Skeletal Burst&mdash;Action:</em></strong> All targets within <a href='#define-range'>Close</a> range of a point you choose in this environment must succeed on an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a> or take <strong>4d8+8</strong> <a href='#define-damage-type'>physical damage</a> from bone shrapnel as part of the ossuary detonates around them.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What ancient skeletal architecture is destroyed? What bones stick in your armor?</p>", "<p><strong><em>Aura of Death&mdash;Action:</em></strong> Once per scene, roll a <strong>d4</strong>. Each undead within <a href='#define-range'>Far</a> range of the Necromancer can clear <a href='#define-hit-point'>HP</a> and <a href='#define-stress'>Stress</a> equal to the result rolled. The undead can choose how that total number is divided between <a href='#define-hit-point'>HP</a> and <a href='#define-stress'>Stress</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>How does the power manifest? Do the undead look more lifelike or, paradoxically, are they more decayed but vigorous?</p>", "<p><strong><em>They Just Keep Coming!&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to summon <strong>1d6</strong> <a href='#define-adversary-rotted-zombie'>Rotted Zombies</a>, two <a href='#define-adversary-perfected-zombie'>Perfected Zombies</a>, or a <a href='#define-adversary-zombie-legion'>Zombie Legion</a>, who appear at <a href='#define-range'>Close</a> range of a chosen PC.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Who were these people before they became the necromancer's pawns? What vestiges of those lives remain for the heroes to see?</p>"] },
{ label: "Outpost Town", name: "outpost-town", tier: 1, type: "Social", pages: ["Page 245"], summary: "A small town on the outskirts of a nation or region, close to a dungeon, tombs, or other adventuring destinations.", impulses: "Drive the desperate to certain doom, profit off of ragged hope", difficulty: 12, adversaries: "Jagged Knife Bandits (<a href='#define-adversary-jagged-knife-hexer'>Hexer</a>, <a href='#define-adversary-jagged-knife-kneebreaker'>Kneebreaker</a>, <a href='#define-adversary-jagged-knife-lackey'>Lackey</a>, <a href='#define-adversary-jagged-knife-lieutenant'>Lieutenant</a>, <a href='#define-adversary-jagged-knife-shadow'>Shadow</a>, <a href='#define-adversary-jagged-knife-sniper'>Sniper</a>), <a href='#define-adversary-masked-thief'>Masked Thief</a>, <a href='#define-adversary-merchant'>Merchant</a>", features: [ "<p><strong><em>Rumors Abound&mdash;Passive:</em></strong> Gossip is the fastest-traveling currency in the realm. A PC can inquire about major events by making a <a href='#define-trait-roll'>Presence Roll</a>. What they learn depends on the outcome of their roll, based on the following criteria:</p><ul class='og-list-disc'><li><strong>Critical Success:</strong> Learn about two major events. The PC can ask one follow-up question about one of the rumors and get a truthful (if not always complete) answer.</li><li><strong>Success with Hope:</strong> Learn about two events, at least one of which is relevant to the character's background.</li><li><strong>Success with Fear:</strong> Learn an alarming rumor related to the character's background.</li><li><strong>Any Failure:</strong> The locals respond poorly to their inquiries. The PC must mark a <a href='#define-stress'>Stress</a> to learn one relevant rumor.</li></ul><p class='og-list-hang-none og-omit og-questions fst-italic'>What news do the PCs hear that they could pass along to curious travelers? What do the locals think about these events?</p>", "<p><strong><em>Society of the Broken Compass&mdash;Passive:</em></strong> An adventuring society maintains a chapterhouse here, where heroes meet to exchange news and rumors, drink to their imagined successes, and scheme to undermine their rivals.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What boasts do the adventurers here make, and which do you think are true?</p>", "<p><strong><em>Rival Party&mdash;Passive:</em></strong> Another adventuring party is here, seeking the same treasure or leads as the PCs.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Which PC has a connection to one of the rival party members? Do they approach the PC first or do they wait for the PC to move?</p>", "<p><strong><em>It'd Be a Shame If Something Happened to Your Store&mdash;Action:</em></strong> The PCs witness as agents of a local crime boss shake down a general goods store.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What trouble does it cause if the PCs intervene?</p>", "<p><strong><em>Wrong Place, Wrong Time&mdash;Reaction:</em></strong> At night, or when the party is alone in a back alley, you can <strong><a href='#define-fear'>spend a Fear</a></strong> to introduce a group of thieves who try to rob them. The thieves appear at <a href='#define-range'>Close</a> range of a chosen PC and include a <a href='#define-adversary-jagged-knife-kneebreaker'>Jagged Knife Kneebreaker</a>, as many <a href='#define-adversary-jagged-knife-lackey'>Lackeys</a> as there are PCs, and a <a href='#define-adversary-jagged-knife-lieutenant'>Lieutenant</a>. For a larger party, add a <a href='#define-adversary-jagged-knife-hexer'>Hexer</a> or <a href='#define-adversary-jagged-knife-sniper'>Sniper</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What details show the party that these people are desperate former adventurers?</p>"] },
{ label: "Pitched Battle", name: "pitched-battle", tier: 3, type: "Event", pages: ["Page 249"], summary: "A massive combat between two large groups of armed combatants.", impulses: "Seize people, land, and wealth, spill blood for greed and glory", difficulty: 17, adversaries: "Mercenaries (<a href='#define-adversary-sellsword'>Sellsword</a>, <a href='#define-adversary-harrier'>Harrier</a>, <a href='#define-adversary-spellblade'>Spellblade</a>, <a href='#define-adversary-weaponmaster'>Weaponmaster</a>), Noble Forces (<a href='#define-adversary-archer-squadron'>Archer Squadron</a>, <a href='#define-adversary-conscript'>Conscript</a>, <a href='#define-adversary-elite-soldier'>Elite Soldier</a>, <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a>)", features: [ "<p><strong><em>Adrift on a Sea of Steel&mdash;Passive:</em></strong> Traversing a battlefield during an active combat is extremely dangerous. A PC must succeed on an <a href='#define-trait-roll'>Agility Roll</a> to move at all, and can only go up to <a href='#define-range'>Close</a> range on a success. If an adversary is within <a href='#define-range'>Melee</a> range of them, they must mark a <a href='#define-stress'>Stress</a> to make an <a href='#define-trait-roll'>Agility Roll</a> to move.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Do the combatants mistake you for the enemy or consider you interlopers? Can you tell the difference between friend and foe in the fray?</p>", "<p><strong><em>Raze and Pillage&mdash;Action:</em></strong> The attacking force raises the stakes by lighting a fire, stealing a valuable asset, kidnapping an important person, or killing the populace.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What is valuable here? Who is most vulnerable?</p>", "<p><strong><em>War Magic&mdash;Action:</em></strong> Spend a <a href='#define-fear'>Fear</a> as a mage from one side uses large-scale destructive magic. Pick a point on the battlefield within <a href='#define-range'>Very Far</a> range of the mage. All targets within <a href='#define-range'>Close</a> range of that point must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. Targets who fail take <strong>3d12+8</strong> <a href='#define-damage-type'>physical damage</a> and must mark a <a href='#define-stress'>Stress</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What form does the attack take&mdash;fireball, raining acid, a storm of blades? What tactical objective is this attack meant to accomplish, and what comes next?</p>", "<p><strong><em>Reinforcements&mdash;Action:</em></strong> Summon a <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a>, a number of Tier 3 <a href='#define-adversary-type'>Minions</a> equal to the number of PCs, and two adversaries of your choice within <a href='#define-range'>Far</a> range of a chosen PC as reinforcements. The <a href='#define-adversary-knight-of-the-realm'>Knight of the Realm</a> immediately takes the <a href='#define-spotlight'>spotlight</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Who are they targeting first? What formation do they take?</p>"] },
{ label: "Raging River", name: "raging-river", tier: 1, type: "Traversal", pages: ["Page 245"], summary: "A swift-moving river without a bridge crossing, deep enough to sweep away most people.", impulses: "Bar crossing, carry away the unready, divide the land", difficulty: 10, adversaries: "Beasts (<a href='#define-adversary-bear'>Bear</a>, <a href='#define-adversary-glass-snake'>Glass Snake</a>), Jagged Knife Bandits (<a href='#define-adversary-jagged-knife-hexer'>Hexer</a>, <a href='#define-adversary-jagged-knife-kneebreaker'>Kneebreaker</a>, <a href='#define-adversary-jagged-knife-lackey'>Lackey</a>, <a href='#define-adversary-jagged-knife-lieutenant'>Lieutenant</a>, <a href='#define-adversary-jagged-knife-shadow'>Shadow</a>, <a href='#define-adversary-jagged-knife-sniper'>Sniper</a>)", features: [ "<p><strong><em>Dangerous Crossing&mdash;Passive:</em></strong> Crossing the river requires the party to complete a <a href='#define-countdown'>Progress Countdown (4)</a>. A PC who rolls a <a href='#define-action-roll'>failure with Fear</a> is immediately targeted by the 'Undertow' action without requiring a <a href='#define-fear'>Fear</a> to be spent on the feature.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>Have any of the PCs forded rivers like this before? Are any of them afraid of drowning?</p>", "<p><strong><em>Undertow&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to catch a PC in the undertow. They must make an <a href='#define-agility'>Agility</a> <a href='#define-reaction-roll'>Reaction Roll</a>. On a failure, they take <strong>1d6+1</strong> <a href='#define-damage-type'>physical damage</a> and are moved a <a href='#define-range'>Close</a> distance down the river, becoming <a href='#define-condition'><em>Vulnerable</em></a> until they get out of the river. On a success, they must mark a <a href='#define-stress'>Stress</a>.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What trinkets and baubles lie along the bottom of the riverbed? Do predators swim these rivers?</p>", "<p><strong><em>Patient Hunter&mdash;Action:</em></strong> <strong><a href='#define-fear'>Spend a Fear</a></strong> to summon a <a href='#define-adversary-glass-snake'>Glass Snake</a> within <a href='#define-range'>Close</a> range of a chosen PC. The Snake appears in or near the river and immediately takes the <a href='#define-spotlight'>spotlight</a> to use their 'Spinning Serpent' action.</p><p class='og-list-hang-none og-omit og-questions fst-italic'>What treasures does the beast have in their burrow? What travelers have already fallen victim to this predator?</p>"] },
];

/* UTILITIES */
// refresh tooltips
function refreshTooltips() {
	$("a[href^=\\#define-]")
		.tooltip({
			html: true,
			title: function () {
				return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<div></div>').parent();
			}
		})
};
// print friendy number (minus instead of hyphen)
function getNum(x) {
	let prefix = "+";
	if (x < 0) { prefix = "&minus;"; }
	return prefix + Math.abs(x);
}
// get 2-digit percentage from numerator and denominator
function getChance(x,y) {
  return (x/y*100).toFixed(2) + "%";
};
// roll dice pools
function rollDice(pool, sides) {
	let rollTotal = 0;
	for (let i = 0; i < pool; i++) {
	    let roll = Math.floor(Math.random() * sides) + 1;
	    rollTotal = rollTotal + roll;
	}
	return rollTotal;
};
// print sidebar (lengthy)
function getSidebar(x) {
	return "<div class='og-sidebar pt-3 pb-1 ps-3 pe-3 mt-3 mb-3 og-omit'>" + x + "</div>";
};
// print character creation notes
function getCCnote(x) {
	return "<p class='og-questions small'>" + x + "</p>";
};
// print ednote (one paragraph only)
function getEdnote(x) {
	return "<div class='og-ed pt-3 pb-1 ps-3 pe-3 mt-3 mb-3 og-omit'><p><strong>Editor's Notes &mdash;</strong> " + x + "</p></div>";
};
// link definitions
function linkAncestry(x) {
	let link = x;
	for (let i = 0; i < ancestryList.length; i++) {
		if (x == ancestryList[i].label) {
			link = "<a href='#define-" + ancestryList[i].name + "'>" + ancestryList[i].label + "</a>";
		}
	}
	return link;
};
function linkAdversary(x) {
	let link = x;
	for (let i = 0; i < adversaryList.length; i++) {
		if (x == adversaryList[i].label) {
			link = "<a href='#define-adversary-" + adversaryList[i].name + "'>" + adversaryList[i].label + "</a>";
		}
	}
	return link;
};
function linkClass(x) {
	let link = x;
	for (let i = 0; i < classesList.length; i++) {
		if (x == classesList[i].label) {
			link = "<a href='#define-" + classesList[i].name + "'>" + classesList[i].label + "</a>";
		}
	}
	return link;
};
function linkCommunity(x) {
	let link = x;
	for (let i = 0; i < communityList.length; i++) {
		if (x == communityList[i].label) {
			link = "<a href='#define-" + communityList[i].name + "'>" + communityList[i].label + "</a>";
		}
	}
	return link;
};
function linkConsumable(x) {
	let link = x;
	for (let i = 0; i < consumableList.length; i++) {
		if (x == consumableList[i].label) {
			link = "<a href='#define-consumable-" + consumableList[i].name + "'>" + consumableList[i].label + "</a>";
		}
	}
	return link;
};
function linkDomain(x) {
	let link = x;
	for (let i = 0; i < domainList.length; i++) {
		if (x == domainList[i].label) {
			link = "<a href='#define-" + domainList[i].name + "'>" + domainList[i].label + "</a>";
		}
	}
	return link;
};
function linkDomainCard(x) {
	let link = x;
	for (let i = 0; i < domaincardList.length; i++) {
		if (x == domaincardList[i].label) {
			link = "<a href='#define-domain-card-" + domaincardList[i].name + "'>" + domaincardList[i].label + "</a>";
		}
	}
	return link;
};
function linkEnvironment(x) {
	let link = x;
	for (let i = 0; i < environmentList.length; i++) {
		if (x == environmentList[i].label) {
			link = "<a href='#define-environment-" + environmentList[i].name + "'>" + environmentList[i].label + "</a>";
		}
	}
	return link;
};
function linkLoot(x) {
	let link = x;
	for (let i = 0; i < linkLoot.length; i++) {
		if (x == linkLoot[i].label) {
			link = "<a href='#define-loot-" + linkLoot[i].name + "'>" + linkLoot[i].label + "</a>";
		}
	}
	return link;
};
function linkSubclass(x) {
	let link = x;
	for (let i = 0; i < subclassList.length; i++) {
		if (x == subclassList[i].label) {
			link = "<a href='#define-" + subclassList[i].name + "'>" + subclassList[i].label + "</a>";
		}
	}
	return link;
};
function linkRange(x) {
	return "<a href='#define-range'>" + x + "</a>";
};
function linkTrait(x) {
	let link = x;
	for (let i = 0; i < traitList.length; i++) {
		if (x == traitList[i].label) {
			link = "<a href='#define-" + traitList[i].name + "'>" + traitList[i].label + "</a>";
		}
	}
	return link;
};
// create a page reference from an array
function getReferences(array) {
	let references = "<ul class='og-list-inline og-ref og-omit'>";
	for (let i = 0; i < array.length; i++) {
		references += "<li>" + array[i] + "</li>";
	}
	references += "</ul>";
	return references;
};
// create a tier to level readout
function getTierLevels(t) {
	if (t == 1 ) { return "Level 1"; }
	else if (t == 2 ) { return "Level 2&ndash;4"; }
	else if (t == 3 ) { return "Level 5&ndash;7"; }
	else if (t == 4 ) { return "Level 8&ndash;10"; }
	else return "";
};

/* PRINTOUTS */
// character creation
function printCC() {
	let CC = "";
	CC += "<div class='row'>"; // open row
	CC += "<div class='col-12 col-md-6'>"; // open col
	CC += "<div id='define-character-creation'>"; // open def
	CC += "<h2 id='character-creation'>Character Creation<a class='og-h-anchor' href='#character-creation' title='Permalink' aria-hidden='true'></a></h2>";
	CC += getReferences(["Page 13", "Editorial Addition"]);
	CC += "<div class='og-topbar'>"; // open topbar
	CC += getCCnote("Create your player character (PC) by making a series of choices. Think about the types of <a href='#define-action'>moves and actions</a> you want to make, and what types of <a href='#define-action-roll'>action rolls</a> you want to suceed with. Some choices won't affect game mechanics, but could have a big impact on the story.</p>");
	CC += "<ol>";
	CC += "<li><a href='#cc-step-1'>Heritage</a></li>";
	CC += "<li><a href='#cc-step-2'>Class and Subclass</a></li>";
	CC += "<li><a href='#cc-step-3'>Domain Cards</a></li>";
	CC += "<li><a href='#cc-step-4'>Equipment and Inventory</a></li>";
	CC += "<li><a href='#cc-step-5'>Traits and Statistics</a></li>";
	CC += "<li><a href='#cc-step-6'>Experiences and Description</a></li>";
	CC += "<li><a href='#cc-step-7'>Background and Connnections</a></li>";
	CC += "</ol>";
	CC += "<div class='og-omit'>"; // open omit
	CC += getCCnote("Additional playtest character options are available from <a href='https://www.daggerheart.com/thevoid/'>Daggerheart&mdash;The Void</a>.");
	CC += "<div id='define-character-sheet'>"; // open def	
	CC += "<h3 id='character-sheet'>Character Sheet<a class='og-h-anchor' href='#character-sheet' title='Permalink' aria-hidden='true'></a></h3>";
	CC += getReferences(["Editorial Addition"]);
	CC += getCCnote("Your <strong>character sheet</strong> contains information about your character you'll use to play the game. You can download and print official <a href='https://www.daggerheart.com/downloads/'>Daggerheart Character Sheets and Guides</a>, or use a different solution the GM chooses&mdash;for example, a virtual tabletop (VTT).</p>");
	CC += "<h4 class='h6' id='old-gus-character-sheet'>Old Gus' Character Sheets<a class='og-h-anchor' href='#defiold-gus-character-sheetet' title='Permalink' aria-hidden='true'></a></h4>";
	CC += getCCnote("You can use these printable or form-fillable PDF character sheets for any type of character, including <a href='#define-domain-card'>domain cards</a>. The <a href='https://heartofdaggers.com'>heartofdaggers.com</a> character sheet tools can export your PC to this sheet format. Choose one of the following versions:");
	CC += "<ul class='list-inline'>";
	CC += "<li class='list-inline-item'><a href='pdfs/old-gus-daggerheart-character-sheet.pdf' class='btn mt-1 mb-1 theme-light border' type='button'><span aria-hidden='true' class='fw-bold'>&#x21e9;&nbsp;</span>Extra Notes</a></li>";
	CC += "<li class='list-inline-item'><a href='pdfs/old-gus-daggerheart-character-sheet-fillable.pdf' class='btn mt-1 mb-1 theme-light border' type='button'><span aria-hidden='true' class='fw-bold'>&#x21e9;&nbsp;</span>Extra Notes (Form-Fillable)</a></li>";
	CC += "<li class='list-inline-item'><a href='pdfs/old-gus-daggerheart-character-sheet-ranger.pdf' class='btn mt-1 mb-1 theme-light border' type='button'><span aria-hidden='true' class='fw-bold'>&#x21e9;&nbsp;</span>Ranger Companion</a></li>";
	CC += "<li class='list-inline-item'><a href='pdfs/old-gus-daggerheart-character-sheet-ranger-fillable.pdf' class='btn mt-1 mb-1 theme-light border' type='button'><span aria-hidden='true' class='fw-bold'>&#x21e9;&nbsp;</span>Ranger Companion (Form-Fillable)</a></li>";
	CC += "</ul>";
	CC += "<h4 class='h6' id='qedhup-character-sheet'>Qedhup's Character Sheets<a class='og-h-anchor' href='#qedhup-character-sheet' title='Permalink' aria-hidden='true'></a></h4>";
	CC += getCCnote("This printable A5 PDF by <a href='https://ko-fi.com/qedhup'>Qedhup</a> features a blank sheet, a starter sheet for each <a href='#define-class'>class</a>, and a final shared utility page to track <a href='#define-consumable'>consumables</a> and <a href='#define-advancement'>advancements</a>.");
	CC += "<ul class='list-inline'>";
	CC += "<li class='list-inline-item'><a href='pdfs/qedhup-daggerheart-a5-pc-sheets.pdf' class='btn mt-1 mb-1 theme-light border' type='button'><span aria-hidden='true' class='fw-bold'>&#x21e9;&nbsp;</span>Qedhup's A5 Sheets</a></li>";
	CC += "</ul>";
	CC += "</div>"; // close def	
	CC += "</div>"; // close omit
	CC += "</div>"; // close topbar
	CC += "</div>"; // close def
	CC += "</div>"; // close col
	CC += "<div class='col-12 col-md-6'>"; // open col
	CC += "<div class='alert ps-4 pb-0 og-omit'>"; // open alert
	CC += "<h3 id='character-creation-summary'>PC Summary<a class='og-h-anchor' href='#character-creation-summary' title='Permalink' aria-hidden='true'></a></h3>";
	CC += getReferences(["Editorial Addition"]);
	CC += getCCnote("This character creation guide begins with a random set of options.");
	CC += "<ul class='og-list-disc og-questions small'>";
	CC += "<li>There is a 20% chance for a (random) <a href='#define-mixed-ancestry'>mixed ancestry</a>.</li>";
	CC += "<li><a href='#define-equipment'>Equipment</a>, clothing and attitude are suggested based on class.</li>";
	CC += "<li><a href='#define-trait'>Traits</a> use suggested arrays by class. Traits and statistic values include modifiers from ancestry, class, and equipment features.</li>";
	CC += "<li><a href='#define-experience'>Experiences</a> are drawn from two different categories.</li>";
	CC += "</ul>";
	CC += "<ul class='list-inline'>";
	CC += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='ccRandomize' aria-label='Generate Random PC Options}'><span aria-hidden='true'>&#x1F3B2;&nbsp;</span>Generate Random PC</button></p></li>";
	CC += "</ul>";
	CC += "<div id='ccRandomOutput'><p>&mdash;</p></div>";
	CC += "<div id='ccRandomOutputDetail'></div>";
	CC += getCCnote(" Confirm or change any options you wish by reading the details below. Except for experieces and description, this summary will update accordingly.");
	CC += "</div>"; // close alert
	CC += "</div>"; // close col
	CC += "</div>"; // close row
	// cc randomize
	// STEP 1
	CC += "<h3 id='cc-step-1'><span class='h6'>Step 1:</span> Heritage<a class='og-h-anchor' href='#cc-step-1' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<div class='row'>"; // open row
	CC += "<div class='col-12 col-md-6'>"; // open column 1
	CC += "<h4 class='og-tab'>Ancestry</h4>";
	// select ancestry
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseAncestry'>Ancestry:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseAncestry'>"; // id
	for (let i = 0; i < ancestryList.length + 1; i++) {
		CC += "<option value='" + i + "'>"
		if (i == ancestryList.length) { CC += "Mixed Ancestry"; }
		else { CC += ancestryList[i].label; }
		CC += "</option>";
	}
	CC += "</select>";
	CC += "</div>";
	// mixed ancestry fields to hide and show
	CC += "<div id='ccMixedAncestryOptions' class='d-none'>";
	for (let i = 0; i < 2; i++) {
		let mixfeature = "First";
		if (i > 0) {mixfeature = "Second";}
		CC += "<div class='input-group mb-2'>";
		CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseAncestryMixed" + (i+1) + "'>" + mixfeature +":</label>";
		CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseAncestryMixed" + (i+1) + "'>"; // id
		for (let a = 0; a < ancestryList.length; a++) {
			CC += "<option value='" + a + "'>" + ancestryList[a].label + " (" + ancestryList[a].featurelabel[i] + ")</option>";
		}
		CC += "</select>";
		CC += "</div>";
	}
	CC += "</div>";
	CC += "<div id='ccAncestry'><p>&mdash;</p></div>"; // pop field
	// mixed ancestry output
	CC += "<div id='ccMixedAncestryChoices'>";
	CC += "<p class='og-questions small'>A <strong><a href='#define-mixed-ancestry'>mixed ancestry</a></strong> can be shaped by blood, magic, proximity, or other variety of factors.</p>";
	CC += "<h5 class='h6'>Ancestry Features</h6>";
	CC += "<ul class='list-unstyled'>";
	CC += "<li id='ccAncestryMixed1'><p>&mdash;</p></li>"; // pop field
	CC += "<li id='ccAncestryMixed2'><p>&mdash;</p></li>"; // pop field
	CC += "</ul>";
	CC += "</div>"
	CC += "</div>"; // close column 1
	CC += "<div class='col-12 col-md-6'>"; // open column 2
	CC += "<h4 class='og-tab'>Community</h4>";
	// select community
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseCommunity'>Community:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseCommunity'>"; // id
	for (let i = 0; i < communityList.length; i++) {
		CC += "<option value='" + i + "'>" + communityList[i].label + "</option>";
	}
	CC += "</select>";
	CC += "</div>";
	CC += "<div id='ccCommunity'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close column 2
	CC += "</div>"; // close row
	CC += "</div>"; // close topbar
	// STEP 2
	CC += "<h3 id='cc-step-2'><span class='h6'>Step 2:</span> Class and Subclass<a class='og-h-anchor' href='#cc-step-2' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<div class='row'>"; // open row
	CC += "<div class='col-12 col-md-6'>"; // open column 1
	CC += "<h4 class='og-tab'>Class</h4>"
	// select class
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseClass'>Class:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseClass'>"; // id
	for (let i = 0; i < classesList.length; i++) {
		CC += "<option value='" + i + "'>" + classesList[i].label + "</option>";
	}
	CC += "</select>";
	CC += "</div>";
	CC += "<div id='ccClass'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close column 1
	CC += "<div class='col-12 col-md-6'>";
	CC += "<h4 class='og-tab'>Subclass</h4>"
	// select subclass
	CC += "<div class='input-group mb-2'>"; // open column 2
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseSubclass'>Subclass:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseSubclass'>"; // id
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div id='ccSubclass'><p>&mdash;</p></div>"; // pop field
	CC += "</div>";
	CC += "</div>"; // close column 2
	CC += "</div>"; // close row
	CC += "</div>"; // close topbar
	// STEP 3
	CC += "<h3 id='cc-step-3'><span class='h6'>Step 3:</span> Domain Cards<a class='og-h-anchor' href='#cc-step-3' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<h4 class='og-tab'>Domain Cards</h4>";
	CC += "<div id='ccUserDomainCardOptions'></div>";
	CC += "<div id='ccUserDomainCardBonus'></div>";
	CC += "<div class='row'>"; // open row, pops option and menus in columns
	// choose domain card 1
	CC += "<div class='col-12 col-md-6' id='ccDomainCard1Display'>"; // open column
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseDomainCard1'>First Card:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseDomainCard1'>"; // pop options
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div class='mb-3' id='ccDomainCard1'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close column
	// choose domain card 2
	CC += "<div class='col-12 col-md-6' id='ccDomainCard2Display'>"; // open column
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseDomainCard2'>Second Card:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseDomainCard2'>"; // pop options
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div class='mb-3' id='ccDomainCard2'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close column
	// choose domain card 3
	CC += "<div class='col-12 col-md-4' id='ccDomainCard3Display'>"; // open column
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseDomainCard3'>Third Card:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseDomainCard3'>"; // pop options
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div class='mb-3' id='ccDomainCard3'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close column
	CC += "</div>"; // close row
	CC += "</div>"; // close topbar
	// STEP 4: EQUIPMENT
	CC += "<h3 id='cc-step-4'><span class='h6'>Step 4:</span> Equipment and Inventory<a class='og-h-anchor' href='#cc-step-4' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div id='ccWeaponMagic'></div>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<div class='row'>"; // open topbar
	CC += "<div class='col-12 col-md-6'>"; // open column 1
	// choose weapon
	CC += "<h4 class='og-tab'>Weapons and Armor</h4>";
	CC += getCCnote("Use suggested <strong><a href='#define-weapon'>weapons</a></strong> and <strong><a href='#define-armor'>armor</a></strong>, or choose your own from the Tier 1 <strong><a href='#define-equipment'>equipment</a></strong> lists.");
	// choose primary weapon
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseWeaponPrimary'>Primary:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseWeaponPrimary'>"; // pop options
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div class='mb-3' id='ccWeaponPrimary'><p>&mdash;</p></div>"; // pop field
	// choose secondary weapon
	CC += "<div class='input-group mb-2' id='ccChooseWeaponSecondarySelect'>"; // begin hide
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseWeaponSecondary'>Secondary:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseWeaponSecondary'>"; // pop options
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>"; // end hide
	CC += "<div class='mb-3'  id='ccWeaponSecondary'><p>&mdash;</p></div>"; // pop field
	// choose armor
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseArmor'>Armor:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseArmor'>"; // pop options
	CC += "<option value='0'>&mdash;</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div class='mb-3' id='ccArmor'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close column 1
	CC += "<div class='col-12 col-md-6'>"; // open column 2
	// choose consumable
	CC += "<h4 class='og-tab'>Inventory</h4>";
	CC += getCCnote("Choose a <strong><a href='#define-consumable'>consumable</a></strong>.");
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseConsumable'>Consumable:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseConsumable'>"; // id
	for (let i = 0; i < consumableList.length; i++) {
		if (consumableList[i].label == "Minor Health Potion" || consumableList[i].label == "Minor Stamina Potion") {
			CC += "<option value='" + i + "'>" + consumableList[i].label + "</option>";
		}
	}
	CC += "</select>";
	CC += "</div>";
	// inventory list
	CC += "<div class='mb-3' id='ccInventory'>";
	CC += "<p id='ccConsumable'>&mdash;</p>";
	// class item
	CC += "<div id='ccUserClassItem'><p>&mdash;</p></div>"; // pop id
	// end if
	CC += "<h5 class='h6'>Additional Items</h5>";
	CC += "<ul class='og-list-disc'>";
	CC += "<li>One handful of <a href='#define-gold'>gold</a></li>";
    CC += "<li>Torch</li>";
    CC += "<li>50 feet (15 m) of rope</li>";
    CC += "<li>Basic supplies</li>";
	CC += "</ul>";
	CC += "</div>";
	CC += "</div>"; // close column 3
	CC += "</div>"; // close row
	CC += "</div>"; // close topbar
	// STEP 5
	CC += "<h3 id='cc-step-5'><span class='h6'>Step 5:</span> Traits and Statistics<a class='og-h-anchor' href='#cc-step-5' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<div id='ccChooseTraits'></div>"; // pop field
	CC += "<div id='ccPrintAdditionalStatistics'><p>&mdash;</p></div>", // pop field
	CC += "</div>"; // close topbar
	// STEP 6
	CC += "<h3 id='cc-step-6'><span class='h6'>Step 6:</span> Experiences and Description<a class='og-h-anchor' href='#cc-step-7' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<div class='row'>"; // open row
	CC += "<div class='col-12 col-md-6'>"; // open col
	CC += "<h4 class='og-tab'>Experiences</h4>";
	CC += "<div id='ccClassQualities'><p>&mdash;</p></div>"
	CC += getCCnote("Create two <strong><a href='#define-experience'>Experiences</a></strong> that evoke your personality traits, aptitudes, or life lessons you've learned. You can use these examples, or create your own experiences with the GM. Each has a <strong>+2</strong> bonus.</p>");
	CC += "<ul class='list-unstyled'>";
	CC += "<li class='h6'>First Experience +2</li>";
	CC += "<li class='h6 mt-3'>Second Experience +2</li>";
	CC += "</ul>";
	CC += "<div class='input-group mb-2'>";
	CC += "<label class='input-group-text fw-bold link-dark bg-light border-light' for='ccChooseExperienceList'>Examples:</label>";
	CC += "<select class='form-select link-dark bg-light border-light og-cc-drop' id='ccChooseExperienceList'>"; // id
	CC += "<option id='ccChooseExp-0' value='0'>Backgrounds</option>";
	CC += "<option id='ccChooseExp-1' value='1'>Characteristics</option>";
	CC += "<option id='ccChooseExp-2' value='2'>Specialties</option>";
	CC += "<option id='ccChooseExp-3' value='3'>Skills</option>";
	CC += "<option id='ccChooseExp-4' value='4'>Phrases</option>";
	CC += "</select>";
	CC += "</div>";
	CC += "<div id='ccPrintExperienceList'><p>&mdash;</p></div>"; // pop field
	CC += "</div>"; // close col
	CC += "<div class='col-12 col-md-6'>"; // open col
	CC += "<h4 class='og-tab'>Description</h4>";
	CC += getCCnote("Choose a <strong>name</strong>, <strong>pronouns</strong>, and <strong>description</strong> for your character. You can use these suggestions to describe your character, or come up with your own.");
	CC += "<h5 class='h6'>Eyes</h5>";
	CC += getReferences(["carnations", "earth", "endless ocean", "fire", "ivy", "lilacs", "night", "seafoam", "winter"]);
	CC += "<h5 class='h6'>Body</h5>";
	CC += getReferences(["broad", "carved", "curvy", "lanky", "rotund", "short", "stocky", "tall", "thin", "tiny", "toned"]);
	CC += "<h5 class='h6'>Skin</h5>";
	CC += getReferences(["ashes", "clover", "falling snow", "fine sand", "obsidian", "rose", "sapphire", "wisteria"]);
	CC += "<div id='ccClassClothes'><p>&mdash;</p></div>"
	CC += "<div id='ccClassAttitudes'><p>&mdash;</p></div>"
	CC += "</div>"; // close col
	CC += "</div>"; // close row
	CC += "</div>"; // close topbar
	// STEP 7
	CC += "<h3 id='cc-step-7'><span class='h6'>Step 7:</span> Background and Connections<a class='og-h-anchor' href='#cc-step-8' title='Permalink' aria-hidden='true'></a></h3>";
	CC += "<div class='og-topbar'>"; // open topbar
	CC += "<div class='row'>"; // open row
	CC += "<div class='col-12 col-md-6'>"; // open col
	CC += "<h4 class='og-tab'>Background</h4>";
	CC += "<div id='ccClassBackground'><p>&mdash;</div>"; // pop field
	CC += "</div>"; // close col
	CC += "<div class='col-12 col-md-6'>"; // open col
	CC += "<h4 class='og-tab'>Connections</h4>";
	CC += "<div id='ccClassConnection'><p>&mdash;</div>"; // pop field
	CC += "</div>"; // close col
	CC += "</div>"; // close row
	CC += "</div>"; // close topbar
	CC += "<hr>"; // divide and continue to printing classes
	// print it
	document.getElementById("printCC").innerHTML = CC;
};
function ccChooseClass() {
	ccUserClass = document.getElementById("ccChooseClass").value;
	let cDetail = "";
	// print class foundations
	cDetail += "<div class='ps-2 pe-2'>"
	cDetail += "<p class='og-questions small'>" + linkClass(classesList[ccUserClass].summarybrief) + "</p>";
	cDetail += "<h5 class='h6'>" + classesList[ccUserClass].name + "'s Hope Feature</h5>";
	cDetail += "<ul class='list-unstyled'><li>" + classesList[ccUserClass].hopefeature + "</li></ul>";
	cDetail += "<h5 class='h6'>Class Feature";
	if (classesList[ccUserClass].features.length > 1) {
		cDetail += "s";
	}
	cDetail += "</h5>";
	cDetail += "<ul class='list-unstyled'>";
	for (let f = 0; f < classesList[ccUserClass].features.length; f++) {
		cDetail +=  "<li>" + classesList[ccUserClass].features[f] + "</li>";
	}
	cDetail += "</ul>";
	cDetail += "</div>";
	document.getElementById("ccClass").innerHTML = cDetail;
	// set subclass options and populate
	let sOptions = "";
	for (let i = 0; i < classesList[ccUserClass].subclasses.length; i++) {
		sOptions += "<option value='" + i + "'>" + classesList[ccUserClass].subclasses[i] + "</option>";
	}
	document.getElementById("ccChooseSubclass").innerHTML = sOptions;
	// run subclass
	ccChooseSubclass();
};
function ccChooseSubclass() {
	let s = document.getElementById("ccChooseSubclass").value;
	let sDetail = "";
	sDetail += "<div class='ps-2 pe-2'>";
	for (let i = 0; i < subclassList.length; i++) {
		if (classesList[ccUserClass].subclasses[s] == subclassList[i].label ) {
			ccUserSubclass = i; // record confirmed selection
			sDetail += "<p class='og-questions small'>" + subclassList[i].summarybrief + "</p>";
			for (let t = 0; t < traitList.length; t++) {
				if ( subclassList[i].spellcast == traitList[t].label ) {
					sDetail += "<h6>Spellcast Trait</h6>";
					sDetail += "<p>" + linkTrait(subclassList[i].spellcast) + "</p>";
				}
			}
			sDetail += "<h6>Foundation Feature";
			if (subclassList[i].foundation.length > 1) {
				sDetail += "s";
			}
			sDetail += "</h6>";
			sDetail += "<ul class='list-unstyled'>";
			for (let ff = 0; ff < subclassList[i].foundation.length; ff++) {
				sDetail += "<li>" + subclassList[i].foundation[ff] + "</li>";
			}
			sDetail += "</ul>";
		}
	}
	sDetail += "</div";
	document.getElementById("ccSubclass").innerHTML = sDetail;
	// populate physical primary weapon options
	let wOptionsPrimary = "";
	// physical weapons
	for (let i = 0; i < weaponprimaryList.length; i++) {
		// abbreviate burden
		let b = weaponprimaryList[i].burden;
		if (b == "One-Handed") { b = "1H"; }
		else if (b == "Two-Handed") { b = "2H"; }
		if (weaponprimaryList[i].tier == 1 && weaponprimaryList[i].magic == false) {
			wOptionsPrimary += "<option value='" + i + "'>" + weaponprimaryList[i].label + " &mdash; " + b;
			// note suggestion
			if (weaponprimaryList[i].label == classesList[ccUserClass].weaponprimary) {
				wOptionsPrimary += " (Suggested)</option>";
			}
			wOptionsPrimary += "</option>";
		}
	}
	// magic weapons (for spellcasters only)
	if (subclassList[ccUserSubclass].spellcast != "") {
		for (let i = 0; i < weaponprimaryList.length; i++) {
			// abbreviate burden
			let b = weaponprimaryList[i].burden;
			if (b == "One-Handed") { b = "1H"; }
			else if (b == "Two-Handed") { b = "2H"; }
			if (weaponprimaryList[i].tier == 1 && weaponprimaryList[i].magic == true) {
				wOptionsPrimary += "<option value='" + i + "'>" + weaponprimaryList[i].label + " &mdash; Magic, " + b;
				// note suggestion
				if (weaponprimaryList[i].label == classesList[ccUserClass].weaponprimary) {
					wOptionsPrimary += " (Suggested)</option>";
				}
				wOptionsPrimary += "</option>";
			}
		}
	}
	if (classesList[ccUserClass].spellcast == "") {
		document.getElementById("ccWeaponMagic").innerHTML = "<p>Your " + linkSubclass(ccUserSubclass) + " does't have a Spellcast trait, which are required to .</p>";
	
	}
	document.getElementById("ccChooseWeaponPrimary").innerHTML = wOptionsPrimary;
	// populate secondary weapon options
	let wOptionsSecondary = "";
	for (let i = 0; i < weaponsecondaryList.length; i++) {
		if (weaponsecondaryList[i].tier == 1) {
			wOptionsSecondary += "<option value='" + i + "'>" + weaponsecondaryList[i].label;
			// note suggestion
			if (weaponsecondaryList[i].label == classesList[ccUserClass].weaponsecondary) {
				wOptionsSecondary += " (Suggested)";
			}
			wOptionsSecondary += "</option>";
		}
	}
	document.getElementById("ccChooseWeaponSecondary").innerHTML = wOptionsSecondary;
	// populate armor options
	let aOptions = "";
	for (let i = 0; i < armorList.length; i++) {
		if (armorList[i].tier == 1) {
			aOptions += "<option value='" + i + "'>" + armorList[i].label;
			// note suggestion
			if (armorList[i].label == classesList[ccUserClass].armor) {
				aOptions += " (Suggested)";
			}
			aOptions += "</option>";
		}
	}
	document.getElementById("ccChooseArmor").innerHTML = aOptions;
	// preselect suggested primary weapon
	for (let i = 0; i < weaponprimaryList.length; i++) {
		if (classesList[ccUserClass].weaponprimary == weaponprimaryList[i].label) {
			document.getElementById("ccChooseWeaponPrimary").value = i;
		}
	}
	ccChooseWeapon(1);
	// if secondary weapon is suggested, preselect it
	if (classesList[ccUserClass].weaponsecondary != "") {
		for (let s = 0; s < weaponsecondaryList.length; s++) {
			if (classesList[ccUserClass].weaponsecondary == weaponsecondaryList[s].label) {
					document.getElementById("ccChooseWeaponSecondary").value = s;
			}
		}
		ccChooseWeapon(2);
	}
	// preselect suggested armor
	for (let i = 0; i < armorList.length; i++) {
		if (classesList[ccUserClass].armor == armorList[i].label) {
			document.getElementById("ccChooseArmor").value = i;
		}
	}
	ccChooseArmor();
	// populate class item
	let classItem = "";
	classItem += "<h5 class='h6'>" + classesList[ccUserClass].label + " Item</h5>";
	classItem += "<p>A " + classesList[ccUserClass].items[0] + ", or a " + classesList[ccUserClass].items[1] + "</p>"; // pop id
	document.getElementById("ccUserClassItem").innerHTML = classItem;
	// populate class domains
	let classDomains ="";
	classDomains += getCCnote("As <strong>" + linkClass(classesList[ccUserClass].label) + "</strong>, you begin with two <strong><a href='#define-domain-card'>domain cards</a></strong></strong> from the <strong>" + linkDomain(classesList[ccUserClass].domains[0]) + "</strong> or <strong>" + linkDomain(classesList[ccUserClass].domains[1]) + "</strong> domains.</p>");
	document.getElementById("ccUserDomainCardOptions").innerHTML = classDomains;
	// adjust layout for third domain card
	if (subclassList[ccUserSubclass].label == "School of Knowledge") {
		document.getElementById("ccDomainCard1Display").classList.remove("col-md-6");
		document.getElementById("ccDomainCard1Display").classList.add("col-md-4");
		document.getElementById("ccDomainCard2Display").classList.remove("col-md-6");
		document.getElementById("ccDomainCard2Display").classList.add("col-md-4");
		document.getElementById("ccDomainCard3Display").classList.remove("d-none");
		document.getElementById("ccUserDomainCardBonus").innerHTML = getCCnote("Your <strong>" + linkSubclass(subclassList[ccUserSubclass].label) + "</strong> subclass' <strong>Prepared</strong> feature grants you the choice of a third domain card.");
	}
	else { 
		document.getElementById("ccDomainCard1Display").classList.remove("col-md-4");
		document.getElementById("ccDomainCard1Display").classList.add("col-md-6");
		document.getElementById("ccDomainCard2Display").classList.remove("col-md-4");
		document.getElementById("ccDomainCard2Display").classList.add("col-md-6");
		document.getElementById("ccDomainCard3Display").classList.add("d-none");
		document.getElementById("ccUserDomainCardBonus").innerHTML = "";
	}
	// return to 1 column display for dyslexic readers
	if (readerPreference == "dyslexic") {
		document.getElementById("ccDomainCard1Display").classList.remove("col-md-4");
		document.getElementById("ccDomainCard1Display").classList.remove("col-md-6");
		document.getElementById("ccDomainCard2Display").classList.remove("col-md-4");
		document.getElementById("ccDomainCard2Display").classList.remove("col-md-6");
		document.getElementById("ccDomainCard3Display").classList.remove("col-md-4");
		document.getElementById("ccDomainCard3Display").classList.remove("col-md-6");
	}
	// store domain card options
	let classDeck = 0;
	for (let d = 0; d < classesList[ccUserClass].domains.length; d++) {
		for (let i = 0; i < domaincardList.length; i++) {
			if (domaincardList[i].level == 1 && domaincardList[i].domain == classesList[ccUserClass].domains[d]) {
				ccUserClassDeck[classDeck] = i;
				classDeck++;
			}
		}
	}
	// populate domain card selections
	let cardOptions = "";
	for (let c = 1; c < 4; c++) {
		cardOptions = "";
		for (let d = 0; d < classesList[ccUserClass].domains.length; d++) {
			cardOptions += "<optgroup label='" + classesList[ccUserClass].domains[d] + " Domain'>";
			for (let i = 0; i < ccUserClassDeck.length; i++) {
				if (classesList[ccUserClass].domains[d] == domaincardList[ccUserClassDeck[i]].domain) {
					cardOptions += "<option id='ccCardSelect" + (c) + "-" + ccUserClassDeck[i] + "' value=" + ccUserClassDeck[i] + ">" + domaincardList[ccUserClassDeck[i]].label + "</option>";
				}
			}
			cardOptions += "</optgroup>";
			document.getElementById("ccChooseDomainCard" + c).innerHTML = cardOptions;
		}
	}
	// preselect one card from each domain
	let rCard1 = Math.floor(Math.random() * ccUserClassDeck.length);
	let rCard2 = Math.floor(Math.random() * (ccUserClassDeck.length - 1));
	if (rCard1 == rCard2) { rCard2++ }
	// let rCard3 = Math.floor(Math.random() * ccUserClassDeck.length);
	document.getElementById("ccChooseDomainCard1").value = ccUserClassDeck[rCard1];
	document.getElementById("ccChooseDomainCard2").value = ccUserClassDeck[rCard2];
	document.getElementById("ccChooseDomainCard3").value = ccUserClassDeck[1];
	ccChooseDomainCard1();
	// qualities
	document.getElementById("ccClassQualities").innerHTML = getCCnote(classesList[ccUserClass].qualities);
	// background questions
	ccPrintBackgroundQuestions();
	// clothes
	let classDrip = "";
	classDrip += "<h5 class='h6'>" + classesList[ccUserClass].label + " Clothes</h5>";
	classDrip += "<ul class='og-list-inline og-ref og-omit'>";

	for (let i = 0; i < classesList[ccUserClass].clothes.length; i++) {
		classDrip += "<li>" + classesList[ccUserClass].clothes[i] +  "</li>";
	}
	classDrip += "</ul>";
	document.getElementById("ccClassClothes").innerHTML = classDrip;
	// attitudes
	let classTudes = "";
	classTudes += "<h5 class='h6'>" + classesList[ccUserClass].label + " Attitudes</h5>";
	classTudes += "<ul class='og-list-inline og-ref og-omit'>";

	for (let i = 0; i < classesList[ccUserClass].attitudes.length; i++) {
		classTudes += "<li>" + classesList[ccUserClass].attitudes[i] +  "</li>";
	}
	classTudes += "</ul>";
	document.getElementById("ccClassAttitudes").innerHTML = classTudes;
	ccPrintAdditionalStatistics();
};
function ccChooseAncestry() {
	let a = document.getElementById("ccChooseAncestry").value;
	ccUserAncestry = a;
	let aDetail = "";
	if (a == ancestryList.length) {
		document.getElementById("ccMixedAncestryOptions").classList.remove('d-none');
		document.getElementById("ccMixedAncestryChoices").classList.remove('d-none');
	}
	else {
		document.getElementById("ccMixedAncestryOptions").classList.add('d-none');
		document.getElementById("ccMixedAncestryChoices").classList.add('d-none');
		// print ancestry features
		aDetail += "<p class='og-questions small'>" + linkClass(ancestryList[a].summarybrief) + "</p>";
		aDetail += "<h5 class='h6'>Ancestry Features</h6>";
		aDetail += "<ul class='list-unstyled'>";
		for (let i = 0; i < ancestryList[a].features.length; i++) {
			aDetail += "<li>" + ancestryList[a].features[i] + "</li>";
		}
		aDetail += "</ul>";
	}
	document.getElementById("ccAncestry").innerHTML = aDetail;
	ccPrintAdditionalStatistics();
	ccPrintBackgroundQuestions();
};
function ccChooseAncestryMixed1 () {
	let mFeat = document.getElementById("ccChooseAncestryMixed1").value;
	document.getElementById("ccAncestryMixed1").innerHTML = ancestryList[mFeat].features[0];
	ccUserAncestryMixed1 = mFeat;
	ccPrintAdditionalStatistics();
};
function ccChooseAncestryMixed2 () {
	ccUserAncestryMixed2 = document.getElementById("ccChooseAncestryMixed2").value;
	document.getElementById("ccAncestryMixed2").innerHTML = ancestryList[ccUserAncestryMixed2].features[1];
	ccPrintAdditionalStatistics();
};
function ccChooseCommunity() {
	ccUserCommunity = document.getElementById("ccChooseCommunity").value;
	let cDetail = "";
	cDetail += "<p class='og-questions small'>" + communityList[ccUserCommunity].summarybrief + " " + communityList[ccUserCommunity].roleplay + "</p>";
	cDetail += "<h5 class='h6'>Community Feature</h6>";
	cDetail += "<ul class='list-unstyled'>";
	cDetail += "<li>" + communityList[ccUserCommunity].feature + "</li>";
	cDetail += "</ul>";
	document.getElementById("ccCommunity").innerHTML = cDetail;
	ccPrintAdditionalStatistics();
};
function ccChooseWeapon(x) {
	// primary
	if (x == 1) { 
		ccUserWeaponPrimary = document.getElementById("ccChooseWeaponPrimary").value; 
		// show or hide second field
		if (weaponprimaryList[ccUserWeaponPrimary].burden == "Two-Handed") { 
			document.getElementById("ccChooseWeaponSecondarySelect").classList.add('d-none'); 
			document.getElementById("ccWeaponSecondary").classList.add('d-none'); 
		}
		else { 
			document.getElementById("ccChooseWeaponSecondarySelect").classList.remove('d-none'); 
			document.getElementById("ccWeaponSecondary").classList.remove('d-none'); 
		}
		// details
		let pWep = "";
		pWep += "<ul class='og-list-inline'>";
		pWep += "<li class='pb-1'><strong>Trait and Range:</strong> ";
		if (weaponprimaryList[ccUserWeaponPrimary].trait == "Spellcast") { pWep += "Spellcast (" + linkTrait(subclassList[ccUserSubclass].spellcast) + ")"; }
		else { pWep += linkTrait(weaponprimaryList[ccUserWeaponPrimary].trait) }
		pWep += " <a href='#define-range'>" + weaponprimaryList[ccUserWeaponPrimary].range + "</a></li>";
		pWep += "<li class='pb-1'><strong>Damage Dice and Type:</strong> <a href='#define-damage-roll'>" + weaponprimaryList[ccUserWeaponPrimary].damage + "</a> <a href='#define-damage-type'>" + weaponprimaryList[ccUserWeaponPrimary].damagetype + "</a></li>";
		if (weaponprimaryList[ccUserWeaponPrimary].feature != "") {
			pWep += "<li class='pb-1'><strong>Feature:</strong> <span class='og-divider d-inline og-wrap'>" + weaponprimaryList[ccUserWeaponPrimary].feature + "</span></li>";
		}
		pWep += "</ul>";
		document.getElementById("ccWeaponPrimary").innerHTML = pWep;
	}
	// secondary
	else if (x == 2) { 
		ccUserWeaponSecondary = document.getElementById("ccChooseWeaponSecondary").value;
		// details
		let sWep = "";
		sWep += "<ul class='og-list-inline'>";
		sWep += "<li class='pb-1'><strong>Trait and Range:</strong> " + linkTrait(weaponsecondaryList[ccUserWeaponSecondary].trait) + " <a href='#define-range'>" + weaponsecondaryList[ccUserWeaponSecondary].range + "</a></li>";
		sWep += "<li class='pb-1'><strong>Damage Dice and Type:</strong> <a href='#define-damage-roll'>" + weaponsecondaryList[ccUserWeaponSecondary].damage + "</a> <a href='#define-damage-type'>" + weaponsecondaryList[ccUserWeaponSecondary].damagetype + "</a></li>";
		if (weaponsecondaryList[ccUserWeaponSecondary].feature != "") {
			sWep += "<li class='pb-1'><strong>Feature:</strong> <span class='og-divider d-inline og-wrap'>" + weaponsecondaryList[ccUserWeaponSecondary].feature + "</span></li>";
		}
		sWep += "</ul>";
		document.getElementById("ccWeaponSecondary").innerHTML = sWep;
	}
	ccPrintAdditionalStatistics();
};
function ccChooseArmor() {
	ccUserArmor = document.getElementById("ccChooseArmor").value; 
	let armor = "";
	armor += "<ul class='og-list-inline'>";
	armor += "<li class='pb-1'><strong>Base Score:</strong> <a href='#define-armor'>" + armorList[ccUserArmor].score + "</a></li>";
	armor += "<li class='pb-1'><strong>Base Thresholds:</strong> <a href='#define-hit-point'>" + armorList[ccUserArmor].thresholdmajor + "/" + armorList[ccUserArmor].thresholdsevere + "</a></li>";
	if (armorList[ccUserArmor].feature != "") {
		armor += "<li class='pb-1'><strong>Feature:</strong> <span class='og-divider'>" + armorList[ccUserArmor].feature + "</span></li>";
	}
	armor += "</ul>";
	document.getElementById("ccArmor").innerHTML = armor;
	ccPrintAdditionalStatistics();
};
function ccChooseConsumable() {
	ccUserConsumable = document.getElementById("ccChooseConsumable").value;
	document.getElementById("ccConsumable").innerHTML = "<strong><em>" + consumableList[ccUserConsumable].label + ":</em></strong> " + consumableList[ccUserConsumable].feature;
	ccPrintAdditionalStatistics();
};
function ccChooseDomainCard1() {
	ccUserDomainCard1 = document.getElementById("ccChooseDomainCard1").value;
	document.getElementById("ccDomainCard1").innerHTML = ccPrintDomainCard(ccUserDomainCard1);
	// clear any disabled selections
	for (let i = 0; i < ccUserClassDeck.length; i++) {
		document.getElementById("ccChooseDomainCard2").options["ccCardSelect2-" + ccUserClassDeck[i]].disabled = false;
		document.getElementById("ccChooseDomainCard3").options["ccCardSelect3-" + ccUserClassDeck[i]].disabled = false;
	}
	// check domain card 2
	if (ccUserDomainCard1 == ccUserDomainCard2) {
		for (let d = 0; d < ccUserClassDeck.length; d++) {
			ccUserClassDeck[i] == ccUserClassDeck.indexOf(ccUserDomainCard1);
			if (ccUserClassDeck[d] != ccUserDomainCard2) {
				document.getElementById("ccChooseDomainCard2").value = ccUserClassDeck[d];
			}
		}
	}
	// check domain card 3, replace if duplicate
	if (ccUserDomainCard1 == ccUserDomainCard3) {
		for (let d = 0; d < ccUserClassDeck.length; d++) {
			ccUserClassDeck[i] == ccUserClassDeck.indexOf(ccUserDomainCard1);
			if (ccUserClassDeck[d] != ccUserDomainCard2) {
				document.getElementById("ccChooseDomainCard3").value = ccUserClassDeck[d];
			}
		}
	}
	// set disabled selections
	document.getElementById("ccChooseDomainCard2").options["ccCardSelect2-" + ccUserDomainCard1].disabled = true;
	ccChooseDomainCard2();
};
function ccChooseDomainCard2() {
	ccUserDomainCard2 = document.getElementById("ccChooseDomainCard2").value;
	document.getElementById("ccDomainCard2").innerHTML = ccPrintDomainCard(ccUserDomainCard2);
	// clear any disabled selections
	for (let i = 0; i < ccUserClassDeck.length; i++) {
		document.getElementById("ccChooseDomainCard3").options["ccCardSelect3-" + ccUserClassDeck[i]].disabled = false;
	}
	// check domain card 3, replace if duplicate
	if (ccUserDomainCard1 == ccUserDomainCard3 || ccUserDomainCard2 == ccUserDomainCard3) {
		for (let d = 0; d < ccUserClassDeck.length; d++) {
			ccUserClassDeck[i] == ccUserClassDeck.indexOf(ccUserDomainCard1);
			if (ccUserClassDeck[d] != ccUserDomainCard1 && ccUserClassDeck[d] != ccUserDomainCard2) {
				document.getElementById("ccChooseDomainCard3").value = ccUserClassDeck[d];
			}
		}
	}
	// set disabled selections
	document.getElementById("ccChooseDomainCard3").options["ccCardSelect3-" + ccUserDomainCard1].disabled = true;
	document.getElementById("ccChooseDomainCard3").options["ccCardSelect3-" + ccUserDomainCard2].disabled = true;
	ccChooseDomainCard3();
};
function ccChooseDomainCard3() {
	ccUserDomainCard3 = document.getElementById("ccChooseDomainCard3").value;
	document.getElementById("ccDomainCard3").innerHTML = ccPrintDomainCard(ccUserDomainCard3);
	refreshTooltips();
};
function ccPrintDomainCard(x) {
	// determine domain id for themeing
	let theme = "";
	for (i = 0; i < domainList.length; i++) { 
		if (domaincardList[x].domain == domainList[i].label) { 
			theme = domainList[i].name;
		}
	}
	// return domain card
	let dc = "";
	dc += "<div class='og-theme-" + theme + "'>";
	dc += "<div class='og-statblock'>";
	dc += "<div class='og-domain og-domain-" + theme + "'>";
	dc += "<h6 class='og-tab'>" + domaincardList[x].label + "</h6>"
	dc += "<ul class='og-list-inline og-ref og-omit'>";
	dc += "<li>" + classesList[ccUserClass].label + "</li>";
	if ((domaincardList[x].type == "Spell" || domaincardList[x].type == "Grimoire" )) {
		dc += "<li>Spellcast: " + linkTrait(subclassList[ccUserSubclass].spellcast); + "</li>";
	}
	dc += "</ul>"
	dc += "<ul class='list-unstyled fw-bold'><li>Level " + domaincardList[x].level + " " + linkDomain(domaincardList[x].domain) + " <a href='#define-domain-card'>" + domaincardList[x].type + "</a></li><li>Recall Cost: " + domaincardList[x].recall + "<span class='og-recall' aria-hidden='true'>&#9889;</span></strong></li></ul>";
	dc += domaincardList[x].effects;
	dc += "</div>";
	dc += "</div>";
	dc += "</div>";
	return dc;
};
function ccPrintAdditionalStatistics() {
	// check for traits modifiers from equipment
	let userAgilityMods = 0;
	let userFinesseMods = 0;
	// very heavy armor
	if (armorList[ccUserArmor].label == "Full Plate Armor") { userAgilityMods = -1; }
	// cumbersome weapon
	if (weaponprimaryList[ccUserWeaponPrimary].label == "Halberd" || weaponprimaryList[ccUserWeaponPrimary].label == "Longbow") { userFinesseMods = -1; }
	// suggest traits
	let tArray = "";
	tArray += "<h4 class='og-tab'>Traits</h4>";
	tArray += getCCnote("<strong><a href='#define-trait'>Traits</a></strong> represent physical, mental, and social aptitudes. Assign each trait one of the array values:");
	tArray += "<ul class='list-inline'><li class='d-inline-block h6 pe-3'>+2</li><li class='d-inline-block h6 pe-3'>+1</li><li class='d-inline-block h6 pe-3'>+1</li><li class='d-inline-block h6 pe-3'>+0</li><li class='d-inline-block h6 pe-3'>+0</li><li class='d-inline-block h6 pe-3'>&minus;1</li></ul>";
	tArray += getCCnote("You can use the following suggested trait array for a " + linkClass(classesList[ccUserClass].label) + ". Modifications from selected features are noted.");
	tArray += "<div class='row'>"; // open row
	for (let i = 0; i < traitList.length; i++) {
		tArray += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
		if (traitList[i].label == "Agility") { tArray += "<h5 class='h6'>" + linkTrait(traitList[i].label) + "&nbsp;&nbsp;" + getNum(classesList[ccUserClass].traitarray[i] + userAgilityMods) + "</h5>"; }
		else if (traitList[i].label == "Finesse") { tArray += "<h5 class='h6'>" + linkTrait(traitList[i].label) + "&nbsp;&nbsp;" + getNum(classesList[ccUserClass].traitarray[i] + userFinesseMods) + "</h5>"; }
		else { tArray += "<h5 class='h6'>" + linkTrait(traitList[i].label) + "&nbsp;&nbsp;" + getNum(classesList[ccUserClass].traitarray[i]) + "</h5>"; }
		// add weapon and armor modifiers
		if (traitList[i].label == "Agility" && userAgilityMods != 0) {
			tArray += "<ul class='og-list-inline og-ref og-omit'>";
			tArray += "<li>Array: " + getNum(classesList[ccUserClass].traitarray[i]) + "</li>";
			tArray += "<li><a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a> (Very Heavy): &minus;1</li>";
			tArray += "</ul>";
	}
		else if (traitList[i].label == "Finesse" && userFinesseMods != 0) {
			tArray += "<ul class='og-list-inline og-ref og-omit'>";
			tArray += "<li>Array: " + getNum(classesList[ccUserClass].traitarray[i]) + "</li>";
			tArray += "<li><a href='#define-weapon-primary-" + ccUserWeaponPrimary + "'>" + weaponprimaryList[ccUserWeaponPrimary].label + "</a> (Cumbersome): &minus;1</li>";
			tArray += "</ul>";
		}
		tArray += "<p class='og-questions small'>";
		if (traitList[i].label == subclassList[ccUserSubclass].spellcast) {
			tArray += "<a href='#define-spellcast-roll'>Spellcast Rolls</a>, ";
		}
		for (v = 0; v < traitList[i].action.length; v++) {
			tArray += traitList[i].action[v] + ", ";
		}
		tArray += "etc.</p>";
		tArray += "</div>"; // close col
	}
	tArray += "</div>"; // close row	
	document.getElementById("ccChooseTraits").innerHTML = tArray;
	// additionalstatistics
	let userStats = "";
	userStats += "<h4 class='og-tab'>Statistics</h4>";
	userStats += "<div class='row'>"; // open row
	// calculate level
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	userStats += "<h5 class='h6 og-wrap'><a href='#define-level'>Level</a>&nbsp;&nbsp;" + 1 + "</h5>";
	userStats += getCCnote("As you gain levels, you'll reach higher <a href='#define-tier'>tiers</a> and choose <a href='#define-advancement'>advancements</a>.");
	userStats += "</div>"; // close col
	// calculate evasion
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	let userEvasion = classesList[ccUserClass].evasion;
	let userEvasionBonus = 0;
	// record evasion modifiers
	let eMods = "";
	eMods += "<ul class='og-list-inline og-ref og-omit'>";
	eMods += "<li>" + linkClass(classesList[ccUserClass].label) + ": " + classesList[ccUserClass].evasion + "</li>";
	// evasion modifiers, ancestry
	if (ccUserAncestry == ancestryList.length && ancestryList[ccUserAncestryMixed2].label == "Simiah") {
		userEvasionBonus = userEvasionBonus +1;
		eMods += "<li><a href='#define-mixed-ancestry'>Mixed Ancestry</a> (" + ancestryList[ccUserAncestryMixed2].featurelabel[1] + "): +1</li>";
	}
	else if (ccUserAncestry < ancestryList.length && ancestryList[ccUserAncestry].label == "Simiah") {
		userEvasionBonus = userEvasionBonus +1;
		eMods += "<li>" + linkAncestry("Simiah") + " (" + ancestryList[ccUserAncestry].featurelabel[1] + "): +1</li>";
	}
	// evasion modifiers, equipment
	if (weaponprimaryList[ccUserWeaponPrimary].label == "Greatsword") {
		userEvasionBonus = userEvasionBonus -1;
		eMods += "<li><a href='#define-weapon-primary-" + ccUserWeaponPrimary + "'>" + weaponprimaryList[ccUserWeaponPrimary].label + "</a> (Massive): &minus;1</li>";
	}
	// evasion modifiers, equipment
	if (weaponprimaryList[ccUserWeaponPrimary].label == "Warhammer") {
		userEvasionBonus = userEvasionBonus -1;
		eMods += "<li><a href='#define-weapon-primary-" + ccUserWeaponPrimary + "'>" + weaponprimaryList[ccUserWeaponPrimary].label + "</a> (Heavy): &minus;1</li>";
	}
	if (weaponprimaryList[ccUserWeaponPrimary].label == "Heavy-Frame Wheelchair") {
		userEvasionBonus = userEvasionBonus -1;
		eMods += "<li><a href='#define-weapon-primary-" + ccUserWeaponPrimary + "'>" + weaponprimaryList[ccUserWeaponPrimary].label + "</a> (Heavy): &minus;1</li>";
	}
	if (weaponprimaryList[ccUserWeaponPrimary].burden == "One-Handed" && weaponsecondaryList[ccUserWeaponSecondary].label == "Tower Shield") {
		userEvasionBonus = userEvasionBonus -1;
		eMods += "<li><a href='#define-weapon-secondary-" + ccUserWeaponSecondary + "'>" + weaponsecondaryList[ccUserWeaponSecondary].label + "</a> (Barrier): &minus;1</li>";
	}
	if (armorList[ccUserArmor].label == "Gambeson Armor") {
		userEvasionBonus = userEvasionBonus +1;
		eMods += "<li><a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a> (Flexible): +1</li>";
	}
	if (armorList[ccUserArmor].label == "Chainmail Armor") {
		userEvasionBonus = userEvasionBonus -1;
		eMods += "<li><a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a> (Heavy): &minus;1</li>";
	}
	if (armorList[ccUserArmor].label == "Full Plate Armor") {
		userEvasionBonus = userEvasionBonus -2;
		eMods += "<li><a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a> (Very Heavy): &minus;2</li>";
	}
	eMods += "</ul>";
	// print evasion
	userStats += "<h5 class='h6 og-wrap'><a href='#define-evasion'>Evasion</a>&nbsp;&nbsp;" + (userEvasion + userEvasionBonus) + "</h5>";
	userStats += eMods;
	userStats += "</div>"; // close col
	// calculate armor
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	let userArmor = armorList[ccUserArmor].score;
	let userArmorBonus = 0;
	// record armor modifiers
	let aMods = "";
	aMods += "<ul class='og-list-inline og-ref og-omit'>";
	aMods += "<li><a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a>: " + armorList[ccUserArmor].score + "</li>";
	// armor modifiers, equipment
	if (weaponprimaryList[ccUserWeaponPrimary].burden == "One-Handed" && weaponsecondaryList[ccUserWeaponSecondary].label == "Round Shield") {
		userArmorBonus = userArmorBonus +1;
		aMods += "<li><a href='#define-weapon-secondary-" + ccUserWeaponSecondary + "'>" + weaponsecondaryList[ccUserWeaponSecondary].label + "</a> (Protective): +1</li>";
	}
	if (weaponprimaryList[ccUserWeaponPrimary].burden == "One-Handed" && weaponsecondaryList[ccUserWeaponSecondary].label == "Tower Shield") {
		userArmorBonus = userArmorBonus +2;
		aMods += "<li><a href='#define-weapon-secondary-" + ccUserWeaponSecondary + "'>" + weaponsecondaryList[ccUserWeaponSecondary].label + "</a> (Barrier): +2</li>";
	}
	aMods += "</ul>";
	// print armor
	userStats += "<h5 class='h6 og-wrap'><a href='#define-armor'>Armor</a>&nbsp;&nbsp;" + (userArmor + userArmorBonus) + "</h5>";
	userStats += aMods;
	userStats += "</div>"; // close col
	// calculate thresholds
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	let userThresholdBonus = 0;
	// record threshold modifiers
	let tMods = "";
	tMods += "<ul class='og-list-inline og-ref og-omit'>";
	// threshold modifiers, armor and level
	tMods += "<li><a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a>: " + armorList[ccUserArmor].thresholdmajor + "/" + armorList[ccUserArmor].thresholdsevere + "</li>";
	userThresholdBonus = userThresholdBonus +1;
	tMods += "<li>Level: +1/+1</li>";
	// threshold modifiers, subclass
	if (subclassList[ccUserSubclass].label == "Stalwart") {
		userThresholdBonus = userThresholdBonus +1;
		tMods += "<li>" +  linkSubclass("Stalwart") + " (Unwavering): +1/+1</li>";
	}
	// threshold modifiers, ancestry
	if (ccUserAncestry == ancestryList.length && ancestryList[ccUserAncestryMixed1].label == "Galapa") {
		userThresholdBonus = userThresholdBonus +1;
		tMods += "<li><a href='#define-mixed-ancestry'>Mixed Ancestry</a> (" + ancestryList[ccUserAncestryMixed1].featurelabel[0] + "): +1/+1</li>";
	}
	else if (ccUserAncestry < ancestryList.length && ancestryList[ccUserAncestry].label == "Galapa") {
		userThresholdBonus = userThresholdBonus +1;
		tMods += "<li>" + linkAncestry("Galapa") + " (" + ancestryList[ccUserAncestry].featurelabel[0] + "): +1/+1</li>";
	}
	tMods += "</ul>";
	// thresholds
	// print thresholds
	userStats += "<h5 class='h6 og-wrap'><a href='#define-hit-point'>Thresholds</a>&nbsp;&nbsp;" + (armorList[ccUserArmor].thresholdmajor + userThresholdBonus) + "/" + (armorList[ccUserArmor].thresholdsevere + userThresholdBonus) + "</h5>";
	userStats += tMods;
	userStats += "</div>"; // close col
	// calculate hit points
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	let userHP = classesList[ccUserClass].hp;
	let userHPBonus = 0;
	hpMods = "";
	hpMods += "<ul class='og-list-inline og-ref og-omit'>";
	// hp modifiers, subclass
	hpMods += "<li>" +  linkClass(classesList[ccUserClass].label) + ": " + userHP + "</li>";
	if (subclassList[ccUserSubclass].label == "School of War") {
		userHPBonus = userHPBonus +1;
		hpMods += "<li>" +  linkSubclass("School of War") + " (Battlemage): +1</li>";
	}
	// hp modifiers, ancestry
	if (ccUserAncestry == ancestryList.length && ancestryList[ccUserAncestryMixed1].label == "Giant") {
		userHPBonus = userHPBonus +1;
		hpMods += "<li><a href='#define-mixed-ancestry'>Mixed Ancestry</a> (" + ancestryList[ccUserAncestryMixed1].featurelabel[0] + "): +1</li>";
	}
	else if (ccUserAncestry < ancestryList.length && ancestryList[ccUserAncestry].label == "Giant") {
		userHPBonus = userHPBonus +1;
		hpMods += "<li>" + linkAncestry("Giant") + " (" + ancestryList[ccUserAncestry].featurelabel[0] + "): +1</li>";
	}
	hpMods += "</ul>";
	// print hp
	userStats += "<h5 class='h6 og-wrap'><a href='#define-hit-point'>Hit Points</a>&nbsp;&nbsp;" + (userHP + userHPBonus) + "</h5>";
	userStats += hpMods;
	userStats += "</div>"; // close col
	// calculate stress
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	let userStress = classesList[ccUserClass].hp;
	let userStressBonus = 0;
	stressMods = "";
	stressMods += "<ul class='og-list-inline og-ref og-omit'>";
	// stress modifiers, subclass
	userStress = 6 // set base
	stressMods += "<li>Base: 6</li>";
	if (subclassList[ccUserSubclass].label == "Vengeance") {
		userStressBonus = userStressBonus +1;
		stressMods += "<li>" +  linkSubclass("Vengeance") + " (At Ease): +1</li>";
	}
	// stress modifiers, ancestry
	if (ccUserAncestry == ancestryList.length && ancestryList[ccUserAncestryMixed1].label == "Human") {
		userStressBonus = userStressBonus +1;
		stressMods += "<li><a href='#define-mixed-ancestry'>Mixed Ancestry</a> (" + ancestryList[ccUserAncestryMixed1].featurelabel[0] + "): +1</li>";
	}
	else if (ccUserAncestry < ancestryList.length && ancestryList[ccUserAncestry].label == "Human") {
		userStressBonus = userStressBonus +1;
		stressMods += "<li>" + linkAncestry("Human") + " (" + ancestryList[ccUserAncestry].featurelabel[0] + "): +1</li>";
	}
	stressMods += "</ul>";
	userStats += "<h5 class='h6 og-wrap'><a href='#define-stress'>Stress</a>&nbsp;&nbsp;" + (userStress + userStressBonus) + "</h5>";
	userStats += stressMods;
	userStats += "</div>"; // close col
	// calculate proficiency
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	userStats += "<h5 class='h6 og-wrap'><a href='#define-damage-roll'>Proficiency</a>&nbsp;&nbsp;" + 1 + "</h5>";
	userStats += getCCnote("Proficiency determines <a href='#damage-rolls'>damage rolls</a> and interacts with some features and <a href='#define-domain-card'>domain cards</a>.");
	userStats += "</div>"; // close col
	// calculate hope
	userStats += "<div class='col-12 col-md-6 col-lg-4'>"; // open col
	userStats += "<h5 class='h6 og-wrap'><a href='#define-hope'>Hope</a>&nbsp;&nbsp;" + 2 + "</h5>";
	userStats += getCCnote("You'll gain more Hope through the <a href='#define-flow-of-the-game'>flow of the game</a> and during <a href='#define-downtime'>downtime</a>.");
	userStats += "</div>"; // close col
	userStats += "</div>"; // close row
	document.getElementById("ccPrintAdditionalStatistics").innerHTML = userStats;
	// assemble summary
	let summary = "";
	summary += "<h5 class='h6'>Character Options</h5>";
	summary += "<ul class='og-list-inline og-ref og-omit'>";
	if (ccUserAncestry == ancestryList.length) { 
		summary += "<li>Ancestry <a href='#define-mixed-ancestry'>Mixed Ancestry</a> (" + linkAncestry(ancestryList[ccUserAncestryMixed1].label) + "&ndash;" + linkAncestry(ancestryList[ccUserAncestryMixed2].label) + ")</li>"; 
	}
	else { summary += "<li>Ancestry " + linkAncestry(ancestryList[ccUserAncestry].label) + "</li>"; }
	summary += "<li>Community " + linkCommunity(communityList[ccUserCommunity].label) + "</li>";
	summary += "<li>Class " + linkClass(classesList[ccUserClass].label) + "</li>";
	summary += "<li>Subclass " + linkSubclass(subclassList[ccUserSubclass].label) + "</li>";
	summary += "<li>Domain Card " + linkDomainCard(domaincardList[ccUserDomainCard1].label) + "</li>";
	summary += "<li>Domain Card " + linkDomainCard(domaincardList[ccUserDomainCard2].label) + "</li>";
	if (subclassList[ccUserSubclass].label == "School of Knowledge") {
		summary += "<li>Domain Card " + linkDomainCard(domaincardList[ccUserDomainCard3].label); + "</li>";
	}
	summary += "</ul>";
	// report equipment
	let wtype = "";
	if (weaponprimaryList[ccUserWeaponPrimary].magic == false) { wtype = "physical"; }
	else { wtype = "magic"; }
	summary += "<h5 class='h6'>Equipment and Inventory</h5>";
	summary += "<ul class='og-list-inline og-ref og-omit'>";
	summary += "<li>Primary Weapon <a href='#define-weapon-primary-" + ccUserWeaponPrimary + "'>" + weaponprimaryList[ccUserWeaponPrimary].label + "</a></li>";
	if (weaponprimaryList[ccUserWeaponPrimary].burden == "One-Handed") {
		summary += "<li>Secondary Weapon <a href='#define-weapon-secondary-" + ccUserWeaponSecondary + "'>" + weaponsecondaryList[ccUserWeaponSecondary].label + "</a></li>";
	}
	summary += "<li>Armor <a href='#define-armor-" + ccUserArmor + "'>" + armorList[ccUserArmor].label + "</a></li>";
	summary += "<li>" + linkConsumable(consumableList[ccUserConsumable].label) + "</li>";
	summary += "<li>" + classesList[ccUserClass].items[ccUserClassItem] + "</li>";
	summary += "<li><a href='#define-gold'>Gold</a> 1 handful</li>";
	summary += "<li>Torch</li>";
	summary += "<li>50 feet (15 m) of rope</li>";
	summary += "<li>Basic supplies</li>";
	summary += "</ul>";
	// report traits
	summary += "<h5 class='h6'>Traits and Statistics</h5>";
	summary += "<ul class='og-list-inline og-ref og-omit'>";
	summary += "<li>" + linkTrait(traitList[0].label) + " " + getNum(classesList[ccUserClass].traitarray[0] + userAgilityMods) + "</li>";
	summary += "<li>" + linkTrait(traitList[1].label) + " " + getNum(classesList[ccUserClass].traitarray[1]) + "</li>";
	summary += "<li>" + linkTrait(traitList[2].label) + " " + getNum(classesList[ccUserClass].traitarray[2] + userFinesseMods) + "</li>";
	summary += "<li>" + linkTrait(traitList[3].label) + " " + getNum(classesList[ccUserClass].traitarray[3]) + "</li>";
	summary += "<li>" + linkTrait(traitList[4].label) + " " + getNum(classesList[ccUserClass].traitarray[4]) + "</li>";
	summary += "<li>" + linkTrait(traitList[5].label) + " " + getNum(classesList[ccUserClass].traitarray[5]) + "</li>";
	// report statistics
	summary += "<li><a href='#define-level'>Level</a> 1</li>";
	summary += "<li><a href='#define-evasion'>Evasion</a> " + (userEvasion + userEvasionBonus) + "</li>";
	summary += "<li><a href='#define-armor'>Armor</a> " + (userArmor + userArmorBonus) + "</li>";
	summary += "<li><a href='#define-hit-point'>Thresholds</a> " + (armorList[ccUserArmor].thresholdmajor + userThresholdBonus) + "/" + (armorList[ccUserArmor].thresholdsevere + userThresholdBonus) + "</li>";
	summary += "<li><a href='#define-hit-point'>Hit Points</a> " + (userHP + userHPBonus) + "</li>";
	summary += "<li><a href='#define-stress'>Stress</a> " + (userStress + userStressBonus) + "</li>";
	summary += "<li><a href='#define-damage-roll'>Proficiency</a> 1</li>";
	summary += "<li><a href='#define-hope'>Hope</a> 2</li>";
	summary += "</ul>";
	document.getElementById("ccRandomOutput").innerHTML = summary;
	refreshTooltips();
};
function ccPrintBackgroundQuestions() {
	//background
	let bgQ = "";
	let ccUserSummary = "";
	ccUserSummary += "Think about your unique <strong>background</strong> as a " + linkCommunity(communityList[ccUserCommunity].label) + " ";
	if (ccUserAncestry == ancestryList.length) { 
		ccUserSummary += "<a href='#define-mixed-ancestry'>Mixed Ancestry</a>"; 
	}
	else { 
		ccUserSummary += linkAncestry(ancestryList[ccUserAncestry].label); 
	}
	ccUserSummary += " " + linkSubclass(subclassList[ccUserSubclass].label) + " " + " " + linkClass(classesList[ccUserClass].label) + ". Depending on the setting, the GM might ask different questions.";
	bgQ += getCCnote(ccUserSummary);
	bgQ += "<ul class='og-questions small'>";
	for (i = 0; i < classesList[ccUserClass].questions.length; i++) {
		bgQ += "<li>" + classesList[ccUserClass].questions[i] + "</li>";
	}
	bgQ += "</ul>";
	document.getElementById("ccClassBackground").innerHTML = bgQ;
	// connections
	let cQ = "";
	cQ += getCCnote("You can use these " + linkClass(classesList[ccUserClass].label) + " questions to build <strong>party connections</strong> with the other player characters, or come up with your own.");
	cQ += "<ul class='og-questions small'>";
	for (i = 0; i < classesList[ccUserClass].connections.length; i++) {
		cQ += "<li>" + classesList[ccUserClass].connections[i] + "</li>";
	}
	cQ += "</ul>";
	cQ += "";
	document.getElementById("ccClassConnection").innerHTML = cQ;
}
function ccPrintExperienceList() {
	ccUserExperienceList = document.getElementById("ccChooseExperienceList").value;
	let expList = "";
	expList += "<ul class='og-list-inline og-ref og-omit'>";
	if  (ccUserExperienceList == 0) { for (let i = 0; i < experiencesList[0].backgrounds.length; i++) { expList += "<li>" + experiencesList[0].backgrounds[i] + "</li>"; } }
	else if  (ccUserExperienceList == 1) { for (let i = 0; i < experiencesList[0].characteristics.length; i++) { expList += "<li>" + experiencesList[0].characteristics[i] + "</li>"; } }
	else if  (ccUserExperienceList == 2) { for (let i = 0; i < experiencesList[0].specialties.length; i++) { expList += "<li>" + experiencesList[0].specialties[i] + "</li>"; } }
	else if  (ccUserExperienceList == 3) { for (let i = 0; i < experiencesList[0].skills.length; i++) { expList += "<li>" + experiencesList[0].skills[i] + "</li>"; } }
	else if  (ccUserExperienceList == 4) { for (let i = 0; i < experiencesList[0].phrases.length; i++) { expList += "<li>" + experiencesList[0].phrases[i] + "</li>"; } }
	expList += "</ul>";
	document.getElementById("ccPrintExperienceList").innerHTML = expList;
};
// classes
function printClasses() {
	let classContent = "";
	// intro
	classContent += "<h2 id='classes-and-subclasses'>Classes and Subclasses<a class='og-h-anchor' href='#classes-and-subclasses' title='Permalink' aria-hidden='true'></a></h2>";
	classContent += "<div class='alert ps-4 pb-0 og-omit'>"; // open index
	classContent += "<ul class='list-unstyled og-qr'>";
	for (let i = 0; i < classesList.length; i++) {
		classContent += "<li>";
		classContent += "<span class='h6'><a href='#define-" + classesList[i].name + "'>" + classesList[i].label + "</a></span>";
		classContent += "<ul class='og-list-inline'>";
		for (let s = 0; s < classesList[i].subclasses.length; s++) {
			for (let o = 0; o < subclassList.length; o++) {
				if (classesList[i].subclasses[s] == subclassList[o].label) {
					classContent += "<li class='d-block'><a href='#define-" + subclassList[o].name + "'>" + subclassList[o].label + "</a></li>";
				}
			}
		}
		if (classesList[i].name == "druid") {
			classContent += "<li class='d-block'><a href='#define-druid-beastform-options'>Beastform Options</a></li>";
		}
		if (classesList[i].name == "ranger") {
			classContent += "<li class='d-block'><a href='#define-beastbound-companion'>Beastbound Companion</a></a></li>";
		}
		classContent += "</ul>";
		classContent += "</li>";
	}
	classContent += "</ul>";
	classContent += "</div>"; // close index
	classContent += "<div class='row'>"; // open row
	classContent += "<div class='col-12 col-md-6'>"; // open col
	classContent += "<div id='define-class'>"; // open def
	classContent += "<h3 id='classes'>Class<a class='og-h-anchor' href='#classes' title='Permalink' aria-hidden='true'></a></h3>";
	classContent += getReferences(["Page 27"]);
	classContent += "<p>A <strong>class</strong> is a role-based archetype that grants you:</p>";
	classContent += "<ul class='og-list-disc'>";
	classContent += "<li>Access to two <a href='#define-domain'>domains</a></li>";
	classContent += "<li>Starting <a href='#define-evasion'>Evasion</a> and <a href='#define-hit-point'>Hit Points</a></li>";
	classContent += "<li>Starting items</li>";
	classContent += "<li>Class features, including a <a href='#define-hope'>Hope Feature</a></li>";
	classContent += "<li>A choice of <a href='#define-subclass'>subclass</a></li>";
	classContent += "</ul>";
	classContent += "<ul class='og-list-inline og-tooltip-block'>";
	for (let i = 0; i < classesList.length; i++) {
		classContent += "<li>" + classesList[i].label + "</li>";
	}
	classContent += "</ul>";
	classContent += getSidebar("<p>When you reach <a href='#define-level'>Level 5</a> or higher, you can select the <a href='#define-multiclass'>Multiclassing</a> advancement, gaining a second class and <a href='#define-subclass'>subclass</a>.</p>");
	classContent += "</div>"; // close def
	classContent += "</div>"; // close col
	classContent += "<div class='col-12 col-md-6'>"; // open col
	classContent += "<div id='define-subclass'>"; // open def
	classContent += "<h4 id='subclasses'>Subclass<a class='og-h-anchor' href='#subclasses' title='Permalink' aria-hidden='true'></a></h4>";
	classContent += getReferences(["Page 27"]);
	classContent += "<p>Each <a href='#define-class'>class</a> is divided into subclasses that further refine their archetype.</p>";
	classContent += "<dl>";
	classContent += "<dt>Spellcast Trait</dt>";
	classContent += "<dd>If the subclass casts spells, this is the <a href='#define-trait'>trait</a> <a href='#define-procedure'>modifier</a> added to <a href='#define-spellcast-roll'>Spellcast Rolls</a> and is sometimes used to determine a spell's <a href='#define-damage-roll'>damage roll</a>.</dd>";
	classContent += "<dt>Foundation Features</dt>";
	classContent += "<dd>These features gained at <a href='#define-level'>Level 1</a>.</dd>";
	classContent += "<dt>Specialization Features</dt>";
	classContent += "<dd>At <a href='#define-tier'>Tier 3</a>, you can purchase the Enhanced Subclass <a href='#define-advancement'>advancement</a> to gain its Specialization Features.</dd>";
	classContent += "<dt>Mastery Features</dt>";
	classContent += "<dd>At <a href='#define-tier'>Tier 4</a>, if you already have its Specialization Features, you can purchase another Enhanced Subclass <a href='#define-advancement'>advancement</a> to gain its Mastery Features.</dd>";
	classContent += "</dl>";
	classContent += "</div>"; // close def
	classContent += "</div>"; // close col
	classContent += "</div>"; // close row
	classContent += "<hr>";
	// classes
	for (let i = 0; i < classesList.length; i++) {
		let classRecord = "<div id='define-" + classesList[i].name + "'>";
		classRecord += "<h3 class='og-tab' id='" + classesList[i].name + "'>" + classesList[i].label + "<a class='og-h-anchor' href='#" + classesList[i].name + "' title='Permalink' aria-hidden='true'></a></h3>";
		classRecord += getReferences(classesList[i].pages);
		classRecord += "<p class='og-tooltip-block'>" + classesList[i].summarybrief + "</p>";
		classRecord += "<p class='og-omit'>" + classesList[i].summary + "</p>";
		classRecord += "<div class='og-topbar'><ul class='list-unstyled'>";
		classRecord += "<li><strong>Domains:</strong> <ul class='d-inline og-list-inline'>";
		for (let domainCount = 0; domainCount < classesList[i].domains.length; domainCount++) {
			for (let d = 0; d < domainList.length; d++) {
				if (domainList[d].label == classesList[i].domains[domainCount]) {
					classRecord += "<li class='og-theme-" + domainList[d].name + "'><a href='#define-" + domainList[d].name + "'>" + domainList[d].label + "</a></li>";
				};
			}
		}
		classRecord += "</ul></li>";
		classRecord += "<li><strong><span class='og-omit'>Starting</span> Evasion:</strong> " + classesList[i].evasion + "</li>";
		classRecord += "<li><strong><span class='og-omit'>Starting</span> Hit Points:</strong> " + classesList[i].hp + "</li>";
		classRecord += "<li class='d-block'><strong>Class Items:</strong> A " + classesList[i].items[0] + ", or a " + classesList[i].items[1] + "</li>";
		classRecord += "</ul></div>";
		classRecord += "<h4 class='h6'>" + classesList[i].name + "'s Hope Feature</h4>";
		classRecord += "<ul class='list-unstyled'><li>" + classesList[i].hopefeature + "</li></ul>";
		classRecord += "<h4 class='h6'>Class Feature";
		if (classesList[i].features.length > 1) {
			classRecord += "s";
		}
		classRecord += "</h4>";
		classRecord += "<ul class='list-unstyled'>";
		for (let f = 0; f < classesList[i].features.length; f++) {
			classRecord +=  "<li>" + classesList[i].features[f] + "</li>";
		}
		classRecord += "</ul>";
		if (classesList[i].sidebar != "") {
			classRecord += getSidebar(classesList[i].sidebar);
		}
		classRecord += "</div>";
		// subclasses
		classRecord += "<h4 id='" + classesList[i].name + "-subclasses'>" + classesList[i].label + " Subclasses<a class='og-h-anchor' href='#" + classesList[i].name + "-subclasses' title='Permalink' aria-hidden='true'></a></h4>";
		classRecord += "<div class='row'>";
		for (let subclassCount = 0; subclassCount < classesList[i].subclasses.length; subclassCount++) {
			for (let s = 0; s < subclassList.length; s++) {
				if (subclassList[s].label == classesList[i].subclasses[subclassCount]) {
					classRecord += "<div class='col-12 col-md-6'>"; // open div
					classRecord += "<div id='define-" + subclassList[s].name + "'>"; // open def
					classRecord += "<h5 class='og-tab' id='" + subclassList[s].name + "'>" + subclassList[s].label +"<a class='og-h-anchor' href='#" + subclassList[s].name + "' title='Permalink' aria-hidden='true'></a></h5>";
					classRecord += getReferences(subclassList[s].pages);
					classRecord += "<p>" + subclassList[s].summary + "</p>";
					for (let t = 0; t < traitList.length; t++) {
						if (subclassList[s].spellcast == traitList[t].label) {
							classRecord += "<h6>Spellcast Trait</h6>";
							classRecord += "<p>" + linkTrait(subclassList[s].spellcast) + "</p>";
						}
					}
					classRecord += "<h6>Foundation Feature";
					if (subclassList[s].foundation.length > 1) {
						classRecord += "s";
					}
					classRecord += "</h6>";
					classRecord += getReferences(subclassList[s].foundationcard);
					classRecord += "<ul class='list-unstyled'>";
					for (let ff = 0; ff < subclassList[s].foundation.length; ff++) {
						classRecord += "<li>" + subclassList[s].foundation[ff] + "</li>";
					}
					classRecord += "</ul>";
					// omit later cards from tooltips
					classRecord += "<div class='og-omit'>"; // open omit
					classRecord += "<h6>Specialization Feature";
					if (subclassList[s].specialization.length > 1) {
						classRecord += "s";
					}
					classRecord += "</h6>";
					classRecord += getReferences(subclassList[s].specializationcard);
					classRecord += "<ul class='list-unstyled'>";
					for (let fs = 0; fs < subclassList[s].specialization.length; fs++) {
						classRecord += "<li>" + subclassList[s].specialization[fs] + "</li>";
					}
					classRecord += "</ul>";
					classRecord += "<h6>Mastery Feature";
					if (subclassList[s].mastery.length > 1) {
						classRecord += "s";
					}
					classRecord += "</h6>";
					classRecord += getReferences(subclassList[s].masterycard);
					classRecord += "<ul class='list-unstyled'>";
					for (let fm = 0; fm < subclassList[s].mastery.length; fm++) {
						classRecord += "<li>" + subclassList[s].mastery[fm] + "</li>";
					}
					classRecord += "</ul>";
					classRecord += "</div>"; // close omit
					classRecord += "</div>"; // close def
					classRecord += "</div>"; // close col
				}
			}
		}
		classRecord += "</div>"; // close row
		// special class indices
		if (classesList[i].label == "Druid") {
			classRecord += "<div id='define-druid-beastform-options'>";
			classRecord += "<h4 id='druid-beastform-options'>Beastform Options<a class='og-h-anchor' href='#druid-beastform-options' title='Permalink' aria-hidden='true'></a></h4>";
			// index beastform options
			classRecord += "<div class='alert ps-4 pb-0 og-omit'><ul class='list-unstyled'>";
			for (let tier = 1; tier < 5; tier++) {
				classRecord += "<li><p class='h6'>Tier " + tier + "</p>";
				classRecord += "<ul class='list-unstyled og-qr'>";
				for (let bf = 0; bf < beastformList.length; bf++) {
					if (tier == beastformList[bf].tier ) {
						classRecord += "<li><a href='#define-druid-beastform-" + beastformList[bf].name + "'>" + beastformList[bf].label + "</a></li>";
					}
				}
				classRecord += "</ul></li>";
			}
			// beastform info
			classRecord += "</ul></div>";
			classRecord += getReferences(["Page 32"]);
			classRecord += "<p>When you use <a href='#define-druid'>Beastform</a>, choose a creature category of your <a href='#define-tier'>tier</a> or lower. Beastform categories are divided by <a href='#define-tier'>tier</a>. Each entry includes modifications that apply until you drop out of <a href='#define-druid'>Beastform</a>, including:</p>";
			classRecord += "<dl>";
			classRecord += "<dt>Creature Category</dt><dd>Role or behavior, with examples of forms. <span class='og-omit'>For example, an <a href='#define-druid-beastform-agile-scout'>Agile Scout</a> form could be a fox, mouse, weasel, or other creature the GM approves.</span></dd>";
			classRecord += "<dt>Trait</dt><dd>You gain a bonus to the listed <a href='#define-trait'>trait</a>. <span class='og-omit'>For example, as an <a href='#define-druid-beastform-agile-scout'>Agile Scout</a>, you gain a +1 bonus to your <a href='#define-agility'>Agility</a>.</span></dd>";
			classRecord += "<dt>Evasion</dt><dd>Add your Beastform's <a href='#define-evasion'>Evasion</a> bonus to your Evasion. <span class='og-omit'>For example, if your Evasion is usually 10, your <a href='#define-druid-beastform-agile-scout'>Agile Scout</a> form's +2 bonus raises it to 12.</span></dd>";
			classRecord += "<dt>Attack Rolls</dt><dd>Your <a href='#define-attack-roll'>attack rolls</a> are replaced by your form's <a href='#define-range'>range</a>, <a href='#define-trait'>trait</a>, and <a href='#define-damage-roll'>damage dice</a>. <span class='og-omit'>For example, as a <a href='#define-level'>Level 1</a> <a href='#define-druid'>druid</a>, your <a href='#define-druid-beastform-agile-scout'>Agile Scout</a> form makes <a href='#define-range'>Melee</a> range attacks with <a href='#define-agility'>Agility</a>, dealing <strong>1d4</strong> <a href='#define-damage-type'>physical damage</a> on a success.</span></dd>";
			classRecord += "<dt>Advantages</dt><dd>You gain <a href='#define-advantage'>advantage</a> on <a href='#define-action-roll'>action rolls</a> and <a href='#define-reaction-roll'>reaction rolls</a> related to these activities. <span class='og-omit'>For example, an <a href='#define-druid-beastform-agile-scout'>Agile Scout</a> for  gains advantage on rolls to sneak around and search for objects.</span></dd>";
			classRecord += "<dt>Features</dt><dd>Each form includes unique features. <span class='og-omit'>For example, an <a href='#define-druid-beastform-agile-scout'>Agile Scout</a> form excels at silent, dexterous movement&mdash;but it's easier force you to drop out of <a href='#define-druid'>Beastform</a>.</span></dd>";
			classRecord += "</dl>";
			classRecord += "</div>";
			// beastform options
			for (let t = 1; t < 5; t++) {
				classRecord += "<h5 id='druid-beastform-tier-" + t + "'>Tier " + t + " Beastform Options<a class='og-h-anchor' href='#druid-beastform-tier-" + t + "' title='Permalink' aria-hidden='true'></a></h5>";
				classRecord += "<div class='row'>";
				for (let bf = 0; bf < beastformList.length; bf++) {
					if (beastformList[bf].tier == t) {
						classRecord += "<div class='col col-12 col-md-6 col-lg-4'><div class='og-statblock'><div id='define-druid-beastform-" + beastformList[bf].name + "'>";
						classRecord += "<h6 class='og-tab' id='druid-beastform-" + beastformList[bf].name + "'>" + beastformList[bf].label + "<a class='og-h-anchor' href='#druid-beastform-" + beastformList[bf].name + "' title='Permalink' aria-hidden='true'></a></h6>"
						classRecord += getReferences(beastformList[bf].pages);
						classRecord += "<p><em>" + beastformList[bf].examples + "</em></p>";
						if (beastformList[bf].stat != "") {
							classRecord += "<div class='og-topbar'>";
							classRecord += "<ul class='og-list-inline'>";
							classRecord += "<li>" + linkTrait(beastformList[bf].stat) + " +" + beastformList[bf].statbonus + "</li>";
							classRecord += "<li><a href='#define-evasion'>Evasion</a> +" + beastformList[bf].evasionbonus + "</li>";
							classRecord += "<li class='d-block'><a href='#define-range'>" + beastformList[bf].attackrange + "</a> " + linkTrait(beastformList[bf].attacktrait) + " <span class='og-divider'><a href='#define-damage-roll'>" + beastformList[bf].attackdamage + "</a> <a href='#define-damage-type'>" + beastformList[bf].attackdamagetype + "</a></span></li>";
							classRecord += "</ul>";
							if (beastformList[bf.advantage] != undefined) {
								classRecord += "<div class='og-topbar2'><p><strong>Gain advantage on:</strong> " + beastformList[bf].advantage + "</p></div>";
							} else { classRecord += "<div class='mt-3'></div>"; }
							classRecord += "</div>";
						}
						classRecord += "<ul class='list-unstyled og-list-hang'>";
						for (let bfeat = 0; bfeat < beastformList[bf].features.length; bfeat++) {
							classRecord += "<li>" + beastformList[bf].features[bfeat] + "</li>";
						}
						classRecord += "</ul>";
						classRecord += "</div></div></div>";
					}
				} 
				classRecord += "</div>";
			}
		}
		else if (classesList[i].label == "Ranger") {
			classRecord += "<div id='define-beastbound-companion'>";
			classRecord += "<h4 id='ranger-beastbound-companion'>Beastbound Companion<a class='og-h-anchor' href='#ranger-beastbound-companion' title='Permalink' aria-hidden='true'></a></h4>";
			classRecord += getReferences(["Page 40", "Errata"]);
			classRecord += "<p>Your <a href='#define-ranger-beastbound'>Beastbound</a> companion starts with the following statistics:</p>";
			classRecord += "<div class='og-topbar'>";
			classRecord += "<ul class='list-unstyled'>";
			classRecord += "<li><strong>Evasion:</strong> 10</li>";
			classRecord += "<li><strong>Stress:</strong> 3</li>";
			classRecord += "<li><strong>Attack:</strong> <a href='#define-range'>Melee</a>, d6</li>";
			classRecord += "<li><strong>Experiences:</strong> 2</li>";
			classRecord += "</ul>";
			classRecord += "</div>";
			classRecord += "<dl>";
			classRecord += "<dt>Companion Basics</dt>";
			classRecord += "<dd>Work with the GM to choose the type of animal and their name. Choose whether they deal <a href='#define-damage-type'>physical damage</a> or <a href='#define-damage-type'>magic damage.</a></dd>";
			classRecord += "<dt>Companion Experiences</dt>";
			classRecord += "<dd>Based on their training and your shared history, create two <a href='#define-experience'>Experiences</a> for your companion, each with a +2 <a href='#define-procedure'>modifier</a>. You can increase the bonus of a companion experience as a <a href='#define-beastbound-companion-advancement'>companion advancement</a>.</dd>";
			classRecord += "<dt>Issuing Commands</dt>";
			classRecord += "<dd>Make a <strong><a href='#define-spellcast-roll'>Spellcast Roll</a></strong> to command your companion to take <a href='#define-action'>action</a>. You can <strong><a href='#define-hope'>spend a Hope</a></strong> to add a relevant companion Experience's <a href='#define-procedure'>modifier</a> to the roll. On a <a href='#define-action-roll'>success with Hope</a>, if your next <a href='#define-action'>action</a> builds on their success, you gain <a href='#define-advantage'>advantage</a> on the roll.</dd>";
			classRecord += "<dt>Companion Attacks</dt>";
			classRecord += "<dd>Your companion's <a href='#define-attack-roll'>attack rolls</a> gain benefits that normally only apply to you&mdash;for example, your <a href='#define-ranger'><em>Ranger's Focus</em></a> feature. The companion's <a href='#define-damage-roll'>damage roll</a> uses your <a href='#define-damage-roll'>Proficiency</a> and the companion's <a href='#define-damage-roll'>damage die</a>, which starts as a <strong>d6</strong>. You can increase your companion's damage die or the range of its attacks as a <a href='#define-beastbound-companion-advancement'>companion advancement</a>.</dd>";
			classRecord += "<dt>Stress as Damage</dt>";
			classRecord += "<dd>When your companion would take any amount of damage, they mark a <a href='#define-stress'>Stress</a> instead. If you choose a <a href='#define-downtime-move'>downtime move</a> that clears your Stress, your companion clears an equal amount. If their last Stress is marked, they exit the scene, becoming unavailable until the start of your next <a href='#define-downtime'>long rest</a>, when they clear 1 Stress and return to you. You can increase your companion's Stress slots as a <a href='#define-beastbound-companion-advancement'>companion advancement</a>.</dd>";
			classRecord += "</dl>";
			classRecord += getSidebar("<p>Since companion damage is measured in <a href='#define-stress'>Stress</a>, they don't have <a href='#define-hit-point'>damage thresholds</a> or <a href='#define-hit-point'>Hit Points</a>.</p>");
			classRecord += "</div>";
			classRecord += "<div class='og-topbar'>";
			classRecord += "<h5 class='h6' id='ranger-example-companion-experiences'>Example Companion Experiences</h5>";
			classRecord += "<ul class='og-list-inline og-ref og-omit'>";
			classRecord += "<li>Bold Distraction</li>";
			classRecord += "<li>Expert Climber</li>";
			classRecord += "<li>Fetch</li>";
			classRecord += "<li>Friendly</li>";
			classRecord += "<li>Guardian of the Forest</li>";
			classRecord += "<li>Horrifying</li>";
			classRecord += "<li>Intimidating</li>";
			classRecord += "<li>Loyal Until the End</li>";
			classRecord += "<li>Navigation</li>";
			classRecord += "<li>Nimble</li>";
			classRecord += "<li>Nobody Left Behind</li>";
			classRecord += "<li>On High Alert</li>";
			classRecord += "<li>Protective</li>";
			classRecord += "<li>Royal Companion</li>";
			classRecord += "<li>Scout</li>";
			classRecord += "<li>Service Animal</li>";
			classRecord += "<li>Trusted Mount</li>";
			classRecord += "<li>Vigilant</li>";
			classRecord += "<li>We Always Find Them</li>";
			classRecord += "<li>You Can't Hit What You Can't Find</li>";
			classRecord += "</ul>";
			classRecord += "</div>";
			classRecord += getEdnote("There aren't rules for riding a companion. Consider choosing a riding <a href='#define-experience'>Experience</a> for you, your companion, or both.");
			classRecord += "<div id='define-beastbound-companion-advancement'>";
			classRecord += "<h5 id='ranger-companion-levels'>Beastbound Companion Levels<a class='og-h-anchor' href='#ranger-companion-levels' title='Permalink' aria-hidden='true'></a></h5>";
			classRecord += getReferences(["Page 40"]);
			classRecord += "<p>When you gain a <a href='#define-level'>level</a>, choose one available option for your <a href='#define-beastbound-companion'>companion</a> from the following list. Options with multiple slots can be chosen more than once. When you choose an advancement, mark one of its slots.</p>";
			classRecord += "<p>Additionally, whenever you gain a new <a href='#define-experience'>Experience</a> by reaching a new <a href='#define-tier'>tier</a>, your companion also gains a new <a href='#define-experience'>Experience</a> at +2.</p>";
			classRecord += "<h4 class='h6'>Beastbound Companion Advancements</h4>";
			classRecord += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
			classRecord += "<caption>Beastbound Companion Advancements</caption>";
			classRecord += "<thead>";
			classRecord += "<tr>";
			classRecord += "<th scope='col'>Advancement</th>";
			classRecord += "<th scope='col'>Notes</th>";
			classRecord += "<th class='text-end og-nowrap ps-2 pe-2' scope='col'>Slots</th>";
			classRecord += "</tr>";
			classRecord += "</thead>";
			classRecord += "<tbody>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Intelligent</th>";
			classRecord += "<td>Your companion gains a +1 bonus to an <a href='#define-experience'>Experience</a>.</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>3</span><span aria-hidden='true'>&#x2B54;&nbsp;&#x2B54;&nbsp;&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Light in the Dark</th>";
			classRecord += "<td>Your companion gains a <a href='#define-hope'>Hope</a> slot you can use as if it were your own.</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>1</span><span aria-hidden='true'>&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Creature Comfort</th>";
			classRecord += "<td>Once per <a href='#define-downtime'>rest</a>, you can share in love and attention, choosing one of the following benefits:";
			classRecord += "<ul class='og-list-disc mb-0'>";
			classRecord += "<li>Gain a <a href='#define-hope'>Hope</a></li>";
			classRecord += "<li>You and your companion clear a <a href='#define-stress'>Stress</a></li>";
			classRecord += "</ul>";
			classRecord += "</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>1</span><span aria-hidden='true'>&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Armored</th>";
			classRecord += "<td>When your companion takes damage, you can <a href='#define-armor'><strong>mark one of your Armor Slots</strong></a> instead of their <a href='#define-stress'>Stress</a>.</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>1</span><span aria-hidden='true'>&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Vicious</th>";
			classRecord += "<td>You can choose to use this advancement to modify your companion's standard attack in one of two ways:";
			classRecord += "<ul class='og-list-disc mb-0'>";
			classRecord += "<li>Increase <a href='#define-damage-roll'>damage dice</a> by one step (to a maximum of <strong>d12</strong>).</li>";
			classRecord += "<li>Increase <a href='#define-range'>range</a> by one step, for example, from Melee to Very Close.</li>";
			classRecord += "</ul>";
			classRecord += "</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>3</span><span aria-hidden='true'>&#x2B54;&nbsp;&#x2B54;&nbsp;&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Resilient</th>";
			classRecord += "<td>Your companion gains 1 <a href='#define-stress'>Stress</a> slot.</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>3</span><span aria-hidden='true'>&#x2B54;&nbsp;&#x2B54;&nbsp;&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Bonded</th>";
			classRecord += "<td>When you mark your last <a href='#define-hit-point'>Hit Point</a>, your companion rushes to your side. Roll a number of <strong>d6s</strong> equal to their unmarked <a href='#define-stress'>Stress</a> slots and mark them. If any <strong>d6</strong> results in a 6, your companion helps you up, you clear your last <a href='#define-hit-point'>Hit Point</a>, and return to the scene.</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>1</span><span aria-hidden='true'>&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "<tr>";
			classRecord += "<th class='fw-normal' scope='row'>Aware</th>";
			classRecord += "<td>Companion gains a +1 bonus to <a href='#define-evasion'>Evasion</a>.</td>";
			classRecord += "<td class='text-end og-nowrap ps-2 pe-2'><span class='visually-hidden'>3</span><span aria-hidden='true'>&#x2B54;&nbsp;&#x2B54;&nbsp;&#x2B54;</span></td>";
			classRecord += "</tr>";
			classRecord += "</tbody>";
			classRecord += "</table></div>";
			classRecord += "</div>";
		}
		classRecord += "<hr>";
		classContent += classRecord;
	}
	document.getElementById("printClasses").innerHTML = classContent;
};
// domains
function printDomains() {
	let domainContent = "";
	domainContent += "<div id='define-domain'>"; // open def
	domainContent += "<h2 id='domains'>Domains<a class='og-h-anchor' href='#domains' title='Permalink' aria-hidden='true'></a></h2>";
	domainContent += "<div class='alert ps-4 pb-0 og-omit'>"; // open index
	domainContent += "<ul class='list-unstyled og-qr-compact'>";
	for (let i = 0; i < domainList.length; i++) {
		domainContent += "<li><a href='#define-" + domainList[i].name + "'>" + domainList[i].label + "</a></li>";
	}
	domainContent += "</ul>";
	domainContent += "</div>"; // close index
	domainContent += getReferences(["Page 24"]);
	domainContent += "<p>Each <a href='#define-class'>class</a> grants access to two thematic <strong>domains</strong>. Each includes a collection of <a href='#define-domain-card'>domain cards</a>.</p>";
	domainContent += "<ul class='og-list-inline og-tooltip-block'>";
	for (let i = 0; i < domainList.length; i++) {
		domainContent += "<li><a href='#define-" + domainList[i].name + "'>" + domainList[i].label + "</a></li>";
	}
	domainContent += "</ul>";
	domainContent += "</div>"; // close def
	domainContent += "<hr>";
	domainContent += "<div class='row'>"; // open row
	domainContent += "<div class='col-12 col-md-6'>"; // open col
	domainContent += "<div id='define-domain-card'>"; // open def
	domainContent += "<h3 id='domain-cards'>Domain Cards<a class='og-h-anchor' href='#domain-cards' title='Permalink' aria-hidden='true'></a></h3>";
	domainContent += getReferences(["Page 26"]);
	domainContent += "<p>Domain cards provide unique <a href='#define-action'>moves</a>, passive bonuses, <a href='#define-downtime-move'>downtime moves</a>, or <a href='#define-temporary'>temporary</a> benefits to your PC. You choose two Level 1 <strong>domain cards</strong> at <a href='#define-character-creation'>character creation</a>, and choose another each time you gain a <a href='#define-level'>level</a>. You can gain an additional domain card each <a href='#define-tir'>tier</a> by purchasing an <a href='#define-advancement'>advancement</a>.</p>";
	domainContent += "<dl>";
	domainContent += "<dt>Level</dt>";
	domainContent += "<dd>You can't choose a domain card with a <a href='#define-level'>level</a> greater than yours&mdash;or half your level if you gained access to the card's <a href='#define-domain'>domain</a> deck by <a href='#define-multiclass'>multiclassing</a>.</dd>";
	domainContent += "<dt>Domain</dt>";
	domainContent += "<dd>You can only choose cards from your <a href='#define-class'>class</a> <a href='#define-domain'>domains</a>.</dd>";
	domainContent += "<dt>Recall Cost: X<span class='og-recall' aria-hidden='true'>&#9889;</span></dt>";
	domainContent += "<dd>When you have the <a href='#define-spotlight'>spotlight</a>, you can mark <a href='#define-stress'>Stress</a> equal to a <a href='#define-loadout'>vaulted</a> domain card's Recall Cost to exchange it for one in your <a href='#define-loadout'>loadout</a>.</dd>";
	domainContent += "<dt>Type</dt>";
	domainContent += "<dd>There are three types of domain cards: <strong>Abilities</strong> are non-magical. <strong>Spells</strong> are magical. <strong>Grimoires</strong> from the <a href='#define-codex'>Codex</a> domain grant you multiple, less potent spells.</dd>";
	domainContent += "<dt>Usage Limits</dt>";
	domainContent += "<dd>Some domain cards can only be used a certain number of times before a <a href='#define-downtime'>short rest</a> or <a href='#define-downtime'>long rest</a>. If a card has number of uses equal to a <a href='#define-trait'>trait</a> with a <a href='#define-procedure'>modifier</a> of +0 or less, you can't use it.</dd>";
	domainContent += "</dl>";
	domainContent += getSidebar("<p>When you place cards with a Usage Limit in your <a href='#define-loaout'>loadout</a>, be sure to track that information.</p>");
	domainContent += "</div>"; // close def
	domainContent += "</div>"; // close col
	domainContent += "<div class='col-12 col-md-6'>"; // open col
	domainContent += "<div id='define-loadout'>"; // open def
	domainContent += "<h4 id='loadout-and-vault'>Loadout and Vault<a class='og-h-anchor' href='#loadout-and-vault' title='Permalink' aria-hidden='true'></a></h4>";
	domainContent += getReferences(["Page 101", "Page 107"]);
	domainContent += "<dl>";
	domainContent += "<dt>Loadout</dt>";
	domainContent += "<dd>Your loadout is the set of <a href='#define-domain-card'>domain cards</a> you can use during play. You can have up to 5 domain cards in your loadout.</dd>";
	domainContent += "<dt>Vault</dt>";
	domainContent += "<dd>Domain cards that aren't in our loadout are placed in your vault. Unless stated otherwise, vaulted cards don't provide you any benefits. If you cast a spell and then place that <a href='#define-domain-card'>domain card</a> in your vault, its effects remain.</dd>";
	domainContent += "<dt>Exchanging Cards</dt>";
	domainContent += "<dd>At the start of <a href='#define-downtime'>downtime</a>, you can exchange cards between your loadout and vault without paying <a href='#define-domain-card'>Recall Costs</a>.</dd>";
	domainContent += "</dl>";
	domainContent += "</div>"; // close def
	domainContent += "<div class='text-center'>"; // open fig
	domainContent += "<img class='og-fig-lg d-light' src='images/class-domain-wheel-light.svg' alt='Classes and Domains' aria-hidden='true'>";
	domainContent += "<img class='og-fig-lg d-dark' src='images/class-domain-wheel-dark.svg' alt='Classes and Domains' aria-hidden='true'>";
	domainContent += "</div>"; // close fig
	domainContent += "</div>"; // close col
	domainContent += "</div>"; // close row
	domainContent += "<hr>";
	// domain details
	domainContent += "<div class='row'>";
	for (let i = 0; i < domainList.length; i++) {
		let domainRecord = "<div class='col-12 col-md-6 col-lg-4'><div id='define-" + domainList[i].name + "'><div class='og-theme-" + domainList[i].name + "'>";
		domainRecord += "<h3 class='og-tab og-tab-" + domainList[i].name + "' id='" + domainList[i].name + "'>" + domainList[i].label + "<a class='og-h-anchor' href='#" + domainList[i].name + "' title='Permalink' aria-hidden='true'></a></h3>";
		domainRecord += getReferences(domainList[i].pages);
		domainRecord += "<p class='h6'>" + domainList[i].theme + "</p>";
		domainRecord += domainList[i].summary;
		domainRecord += "<ul class='list-unstyled fst-italic'><li><strong>Classes:</strong> <ul class='d-inline og-list-inline'>";
		for (let classCount = 0; classCount < classesList.length; classCount++) {
			for (let d = 0; d < classesList[classCount].domains.length; d++) {
				if ( classesList[classCount].domains[d] == domainList[i].label ) {
					domainRecord += "<li><a href='#define-" + classesList[classCount].name + "'>" + classesList[classCount].label + "</a></li>";
				};
			}
		}
		domainRecord += "</ul></li></ul>";
		domainRecord += "<h4 class='h6'>" + domainList[i].name + " Domain Deck</h4>";
		domainRecord += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>"
		domainRecord += "<caption>" + domainList[i].label + " Domain Cards</caption>";
		domainRecord += "<thead><tr><th class='text-center w-15' scope='col'>Level</th><th scope='col'>Domain Cards</th></tr></thead>";
		for (let level = 1; level < 11; level++) {
			domainRecord += "<th class='text-center fw-normal' scope='row'>" + level + "</th><td><ul class='og-list-inline mb-0'>";
			for (let dc = 0; dc < domaincardList.length; dc++) {
				if ( domaincardList[dc].domain == domainList[i].label && domaincardList[dc].level == level) {
				domainRecord += "<li><a class='og-nowrap' href='#define-domain-card-" + domaincardList[dc].name + "'>" + domaincardList[dc].label + "</a></li>";
				}
			}
			domainRecord += "</ul></td></tr>";
		}
		domainRecord += "</tbody></table></div>";
		domainRecord += "</div></div></div>";
		domainContent += domainRecord;
	}
	domainContent += "</div><hr>";
	document.getElementById("printDomains").innerHTML = domainContent;
};
// domain card details
function printDomainCards() {
	let domainCardContent = "<h4 id='domain-card-references'>Domain Card References<a class='og-h-anchor' href='#domain-card-references' title='Permalink' aria-hidden='true'></a></h4>";
	for (let d = 0; d < domainList.length; d++) {
		domainCardContent += "<div class='og-theme-" + domainList[d].name + "'>";
		domainCardContent += "<h5 id='domain-cards-" + domainList[d].name + "'>" + domainList[d].label +" Domain Cards<a class='og-h-anchor' href='#domain-cards-" + domainList[d].name + "' title='Permalink' aria-hidden='true'></a></h5>";
		domainCardContent += "<div class='row'>"
		for (cl = 1; cl < 11; cl++) {
			for (dc =0; dc < domaincardList.length; dc++) {
				if (domaincardList[dc].domain == domainList[d].label && domaincardList[dc].level == cl) {
					domainCardContent += "<div class='col-12 col-md-6 col-lg-4'><div class='og-statblock'><div id='define-domain-card-" + domaincardList[dc].name + "' class='og-domain og-domain-" + domainList[d].name + "'>";
					domainCardContent += "<h6 class='og-tab' id='domain-card-" + domaincardList[dc].name + "'>" + domaincardList[dc].label + "<a class='og-h-anchor' href='#domain-card-" + domaincardList[dc].name + "' title='Permalink' aria-hidden='true'></a></h6>"
					domainCardContent += getReferences(domaincardList[dc].pages);
					domainCardContent += "<ul class='list-unstyled fw-bold'><li>Level " + domaincardList[dc].level + " " + domaincardList[dc].domain + " " + domaincardList[dc].type + "</li><li>Recall Cost: " + domaincardList[dc].recall + "<span class='og-recall' aria-hidden='true'>&#9889;</span></strong></li></ul>";
					domainCardContent += domaincardList[dc].effects;
					domainCardContent += "</div></div></div>";
				}
			}
		}
		domainCardContent += "</div></div><hr>";
	}
	document.getElementById("printDomainCards").innerHTML = domainCardContent;
};
// ancestries
function printAncestries() {
	let ancestryContent =  "";
	ancestryContent += "<div id='define-ancestry'>"; // open def
	ancestryContent += "<h2 id='ancestries'>Ancestries<a class='og-h-anchor' href='#ancestries' title='Permalink' aria-hidden='true'></a></h2>";
	ancestryContent += "<div class='alert ps-4 pb-0 og-omit'>"; // open index
	ancestryContent += "<ul class='list-unstyled og-qr-compact'>";
	for (i = 0; i < (ancestryList.length + 1); i++) {
		if (i == ancestryList.length) { ancestryContent += "<li><a href='#define-mixed-ancestry'>Mixed Ancestry</a></li>"; }
		else { ancestryContent += "<li><a href='#define-" + ancestryList[i].name + "'>" + ancestryList[i].label + "</a></li>"; }
	}
	ancestryContent += "</ul>";
	ancestryContent += "</div>"; // close index
	ancestryContent += getReferences(["Page 52"]);
	ancestryContent += "<p><strong>Ancestry</strong> represent a your lineage and physical appearance. Each ancestry's description includes common characteristics, but you decide how much your PC aligns with the average expression of their ancestry.</p>";
	ancestryContent += "<p>Each ancestry grants two <strong>ancestry features</strong>. Some features&mdash;for example, the ability to fly&mdash;are tied to anatomy, but you determine your PC's physical form. Work with the GM to change any implied characteristics that don't align with your character concept.</p>";
	ancestryContent += "<ul class='og-list-inline og-tooltip-block'>";
	for (i = 0; i < (ancestryList.length + 1); i++) {
		if (i == ancestryList.length) { ancestryContent += "<li><a href='#define-mixed-ancestry'>Mixed Ancestry</a></li>"; }
		else { ancestryContent += "<li><a href='#define-" + ancestryList[i].name + "'>" + ancestryList[i].label + "</a></li>"; }
	}
	ancestryContent += "</ul>";
	ancestryContent += getSidebar("<p><strong>People</strong> refers to all ancestries. Some ancestries are described as humanoid. This doesn't imply genetic relation to <a href='#define-human'>humans</a>, but rather to a set of anatomical characteristics&mdash;bipedal movement, upright posture, and facial structure.</p>");
	ancestryContent += "</div>"; // close def
	ancestryContent += "<hr>";
	// print ancestry details
	for (let a = 0; a < ancestryList.length; a++) {
		ancestryContent += "<div id='define-" + ancestryList[a].name + "'>";
		ancestryContent += "<h3 class='og-tab' id='" + ancestryList[a].name + "'>" + ancestryList[a].label + "<a class='og-h-anchor' href='#" + ancestryList[a].name + "' title='Permalink' aria-hidden='true'></a></h3>";
		ancestryContent += getReferences(ancestryList[a].pages);
		ancestryContent += ancestryList[a].summary;
		ancestryContent += "<h4 class='h6'>Ancestry Features</h4>";
		ancestryContent += getReferences(ancestryList[a].featurecard);
		ancestryContent += "<ul class='list-unstyled'>";
		for (let af = 0; af < ancestryList[a].features.length ; af++) {
			ancestryContent += "<li>" + ancestryList[a].features[af] + "</li>";
		}
		ancestryContent += "</ul>";
		ancestryContent += "</div><hr>";
	}
	// add mixed ancestry
	ancestryContent += "<div id='define-mixed-ancestry'>"; // open def
	ancestryContent += "<h3 class='og-tab' id='mixed-ancestry'>Mixed Ancestry<a class='og-h-anchor' href='#mixed-ancestry' title='Permalink' aria-hidden='true'></a></h3>";
	ancestryContent += getReferences(["Page 71"]);
	ancestryContent += "<p>Families are as unique as the peoples and cultures that inhabit them. Anyone's appearance and abilities can be shaped by blood, magic, proximity, or other variety of factors. If you are a descendant of multiple ancestries, use the steps below:</p>";
	ancestryContent += "<h4 class='h6'>Step 1: Choose an Ancestry Combination</h4>";
	ancestryContent += "<p>When you choose an heritage at <a href='#define-character-creation'>character creation</a>, write down how you identify&mdash;for example, if you are descended from <a href='#define-goblin'>goblins</a> and <a href='#define-orc'>orcs</a>, you could be a <strong>goblin-orc</strong>. You could also choose the ancestry you identify with&mdash;<strong>goblin</strong> or <strong>orc</strong>. Alternatively, invent a new name for your ancestry&mdash;for example, <strong>toothling</strong>.</p>";
	ancestryContent += "<h4 class='h6'>Step 2: Choose Ancestry Features</h4>";
	ancestryContent += "<p>Choose the <strong>first feature</strong> from one ancestry, and the <strong>second feature</strong> from the other&mdash;for example, if you are mixing the <a href='#define-goblin'>goblin</a>-<a href='#define-orc'>orc</a> ancestries, you can take the <strong><em>Surefooted</em></strong> and <strong><em>Tusks</em></strong> features, or the <strong><em>Sturdy</em></strong> and <strong><em>Danger Sense</em></strong> features.</p>";
	ancestryContent += "</div>";
	ancestryContent += getSidebar("<p>If your heritage includes more than two ancestries, you can represent additional ancestries through their appearance, backstory, and <a href='#define-experience'>Experiences</a>. You can experiment with different mixed ancestry combinations in <a href='#character-creation'>character creation</a>.</p>");
	ancestryContent += "</div>"; // close def
	ancestryContent += "<hr>"; // divide and move on
	document.getElementById("printAncestries").innerHTML = ancestryContent;
};
// communities
function printCommunities() {
	let communityContent = "";
	communityContent += "<div id='define-community'>";
	communityContent += "<h2 id='communities'>Communities<a class='og-h-anchor' href='#communities' title='Permalink' aria-hidden='true'></a></h2>";
	communityContent += "<div class='alert ps-4 pb-0 og-omit'>";
	communityContent += "<ul class='list-unstyled og-qr-compact'>";
	communityContent += "<li><a href='#define-highborne'>Highborne</a></li>";
	communityContent += "<li><a href='#define-loreborne'>Loreborne</a></li>";
	communityContent += "<li><a href='#define-orderborne'>Orderborne</a></li>";
	communityContent += "<li><a href='#define-ridgeborne'>Ridgeborne</a></li>";
	communityContent += "<li><a href='#define-seaborne'>Seaborne</a></li>";
	communityContent += "<li><a href='#define-slyborne'>Slyborne</a></li>";
	communityContent += "<li><a href='#define-underborne'>Underborne</a></li>";
	communityContent += "<li><a href='#define-wanderborne'>Wanderborne</a></li>";
	communityContent += "<li><a href='#define-wildborne'>Wildborne</a></li>";
	communityContent += "</ul>";
	communityContent += "</div>";
	communityContent += getReferences(["Page 72"]);
	communityContent += "<p>Communities represent the <strong>culture</strong>, <strong>class</strong>, or <strong>environment of origin</strong> that has had a significant on a PC's upbringing.</p>";
	communityContent += "<ul class='og-list-inline og-tooltip-block'>";
	communityContent += "<li><a href='#define-highborne'>Highborne</a></li>";
	communityContent += "<li><a href='#define-loreborne'>Loreborne</a></li>";
	communityContent += "<li><a href='#define-orderborne'>Orderborne</a></li>";
	communityContent += "<li><a href='#define-ridgeborne'>Ridgeborne</a></li>";
	communityContent += "<li><a href='#define-seaborne'>Seaborne</a></li>";
	communityContent += "<li><a href='#define-slyborne'>Slyborne</a></li>";
	communityContent += "<li><a href='#define-underborne'>Underborne</a></li>";
	communityContent += "<li><a href='#define-wanderborne'>Wanderborne</a></li>";
	communityContent += "<li><a href='#define-wildborne'>Wildborne</a></li>";
	communityContent += "</ul>";
	communityContent += "<h3 class='h6'>Community Features</h3>";
	communityContent += "<p>Your community grants you a <strong>community feature</strong>.</p>";
	communityContent += "</div>";
	communityContent += "<hr>";
	for (let i = 0; i < communityList.length; i++) {
		communityContent += "<div id='define-" + communityList[i].name + "'>";
		communityContent += "<h3 class='og-tab' id='" + communityList[i].name + "'>" + communityList[i].label + "<a class='og-h-anchor' href='#" + communityList[i].name + "' title='Permalink' aria-hidden='true'></a></h3>";
		communityContent += getReferences(communityList[i].pages);
		communityContent += communityList[i].summary;
		communityContent += "<p class='og-questions small'>" + communityList[i].roleplay + "</p>";
		communityContent += "<h4 class='h6'>Community Features</h4>";
		communityContent += getReferences(communityList[i].featurecard);
		communityContent += "<ul class='list-unstyled'><li>" + communityList[i].feature + "</li></ul>";
		communityContent += "</div><hr>";
	}
	document.getElementById("printCommunities").innerHTML = communityContent;
};
// traits
function printTraits() {
	let traitContent = "";
	traitContent += "<div id='define-trait'>";
	traitContent += "<h2 id='traits'>Traits<a class='og-h-anchor' href='#traits' title='Permalink' aria-hidden='true'></a></h2>";
	traitContent += getReferences(["Page 17"]);
	traitContent += "<p>You have six <strong>traits</strong> that represent your physical, mental, and social aptitudes.</p>";
	traitContent += "<ul class='og-list-inline og-tooltip-block'>";
	for (i = 0; i < traitList.length; i++) {
		traitContent += "<li><a href='#define-" + traitList[i].name + "'>" + traitList[i].label + "</a></li>";
	}
	traitContent += "</ul>";
	traitContent += "<dl>";
	traitContent += "<dt>Trait Arrays</dt>";
	traitContent += "<dd>Your traits start with an <a href='#define-trait-array'>array</a> of <a href='#define-procedure'>modifiers</a> assigned during <a href='#define-character-creation'>character creation</a>.</dd>";
	traitContent += "<dt>Traits and Action Rolls</dt>";
	traitContent += "<dd>When you make an <a href='#define-action-roll'>action roll</a>, the relevant trait's <a href='#define-procedure'>modifier</a> is added to the roll's total.</dd>";
	traitContent += "<dt>Negative Modifiers</dt>";
	traitContent += "<dd>Unless otherwise stated, if a mechanic other than a roll uses a trait modifier and yours is negative, treat it as if it were 0&mdash;for example, if you are a <a href='#define-druid'>Druid</a> and choose the <a href='#define-warden-of-renewal'>Warden of Renewal</a>, your <strong><em>Clarity of Nature</em></strong> feature requires an <a href='#define-instinct'>Instinct</a> modifier of +1 or higher to have any effect. A few mechanics set a minimum&mdash;for example, the <a href='#define-domain-card-flight'>Flight</a> spell grants 1 counter even if your <a href='#define-agility'>Agility</a> modifier is &minus;1.</dd> ";
	traitContent += "<dt>Increasing Trait Modifiers</dt>";
	traitContent += "<dd>When you gain a <a href='#define-level'>level</a>, you can increase purchase an <a href='#define-advancement'>advancement</a> to increase the modifiers of two traits. You can increase a trait's modifier only once each <a href='#define-tier'>tier</a>.</dd>";
	traitContent += "</dl>";
	traitContent += "</div>";
	traitContent += "<hr>";
	// trait details
	traitContent += "<div class='row'>";
	for (let i = 0; i < traitList.length; i++) {
		let traitRecord = "<div class='col-12 col-md-6 col-lg-4'><div id='define-" + traitList[i].name + "'>";
		traitRecord += "<h3 class='og-tab' id='" + traitList[i].name + "'>" + traitList[i].label + "<a class='og-h-anchor' href='#" + traitList[i].name + "' title='Permalink' aria-hidden='true'></a></h3>";
		traitRecord += getReferences(traitList[i].pages);
		traitRecord += "<h4 class='h6'>";
		for (v = 0; v < traitList[i].action.length; v++) {
			traitRecord += traitList[i].action[v] + ", ";
		}
		traitRecord += " <em>etc.</em></h4>";
		traitRecord += traitList[i].summary;
		traitRecord += "<p class='fst-italic og-omit'><strong>Difficulty:</strong> <a href='#define-" + traitList[i].name + "-benchmark'>" + traitList[i].label + " Benchmarks</a></p>";
		traitRecord += "</div></div>";
		traitContent += traitRecord;
	}
	traitContent += "</div><hr>";
	document.getElementById("printTraits").innerHTML = traitContent;
};
// weapons, primary
function printEquipment() {
	// define equipment
	let iEquip = "";
	iEquip += "<div id='define-equipment'>"; // open def
	iEquip += "<h2 id='equipment'>Equipment<a class='og-h-anchor' href='#define-equipment' title='Permalink' aria-hidden='true'></a></h2>";
	iEquip += "<div class='alert ps-4 pb-0 og-omit'>"; // open index
	iEquip += "<ul class='list-unstyled'>";  // open list
	// weapons index
	iEquip += "<li><span class='h6'><a href='#define-weapon'>Weapons</a></span></li>";
	// primary weapon index
	iEquip += "<li>";
	iEquip += "<span class='h6'><a href='#weapons-primary'>Primary Weapon Tables</a></span>";
	iEquip += "<ul class='list-unstyled og-qr'>";
	for (let i = 1; i < 5; i++) {
		iEquip += "<li><a href='#weapons-primary-tier-" + i + "-physical'>Tier " + i + " Physical</a></li>";
		iEquip += "<li><a href='#weapons-primary-tier-" + i + "-magic'>Tier " + i + " Magic</a></li>";
	}
	iEquip += "</ul>";
	iEquip += "</li>";
	// secondary weapon index
	iEquip += "<li>";
	iEquip += "<span class='h6'><a href='#weapons-secondary'>Secondary Weapon Tables</a></span>";
	iEquip += "<ul class='list-unstyled og-qr'>";
	for (let i = 1; i < 5; i++) {
		iEquip += "<li><a href='#weapons-secondary-tier-" + i + "'>Tier " + i + "</a></li>";
	}
	iEquip += "</ul>";
	iEquip += "</li>";
	// armor index
	iEquip += "<li>";
	iEquip += "<span class='h6'><a href='#define-armor'>Armor</a></span>";
	iEquip += "<ul class='list-unstyled og-qr'>";
	for (let i = 1; i < 5; i++) {
		iEquip += "<li><a href='#armor-tier-" + i + "'>Tier " + i + "</a></li>";
	}
	iEquip += "</ul>";
	iEquip += "</li>";
	// loot
	iEquip += "<li>";
	iEquip += "<span class='h6'><a href='#define-loot'>Loot</a></span>";
	iEquip += "<ul class='list-unstyled og-qr'>";
	iEquip += "<li><a href='#define-consumable'>Consumables</a></li>";
	iEquip += "<li><a href='#define-gold'>Gold</a></li>";
	iEquip += "</ul>";
	iEquip += "</li>";
	iEquip += "</ul>"; // end list
	iEquip += "</div>"; // close index
	iEquip += getReferences(["Page 112", "Page 115", "Errata"]);
	iEquip += "<p><strong>Equipment</strong> includes <a href='#define-weapon'>weapons</a>, <a href='#define-armor'>armor</a>, <a href='#define-loot'>loot</a>, <a href='#define-consumable'>consumables</a>, <a href='#define-gold'>gold</a>, and other items the GM makes available you gain <a href='#define-level'>levels</a>.</p>";
	iEquip += getSidebar("<p>For information on creating new equipment, see <a href='#pc-benchmarks'>PC Benchmarks</a>.</p>");
	iEquip += "</div>"; // close def
	iEquip += "<hr>";
	// weapon	
	let iWep = "";
	iWep += "<div class='row'>"; // open row
	iWep += "<div class='col-12 col-md-6'>"; // open col
	iWep += "<div id='define-weapon'>"; // open def
	iWep += "<h3 id='weapons'>Weapons<a class='og-h-anchor' href='#weapons' title='Permalink' aria-hidden='true'></a></h3>";
	iWep += getReferences(["Page 96", "Page 112", "Page 113", "Errata"]);
	iWep += "<dl>";
	iWep += "<dt>Equipping Weapons</dt>";
	iWep += "<dd>You can equip up to two <strong>active weapons</strong>&mdash;one <strong>primary weapon</strong>, and one <strong>secondary weapon</strong>. You can equip weapons whose <a href='#define-tier'>tier</a> is equal or lower than yours. If your <a href='#define-subclass'>subclass</a> didn't assign you a Spellcast trait, you can't equip magic weapons. You can make <a href='#define-attack-roll'>attack rolls</a> with your active weapons. You can carry two <strong>inventory weapons</strong>. You can swap an inventory weapon with an active weapon during <a href='#define-downtime'>downtime</a> or a moment of calm. In danger, you must mark a <a href='#define-stress'>Stress</a> to swap weapons.</dd>";
	iWep += "<dt>Trait</dt>";
	iWep += "<dd>The <a href='#define-trait'>trait</a> used for <a href='#define-attack-roll'>attack rolls</a> made using the weapon.</dd>";
	iWep += "<dt>Range</dt>";
	iWep += "<dd>The maximum <a href='#define-range'>range</a> between you and the target.</dd>";
	iWep += "<dt>Damage and Damage Type</dt>";
	iWep += "<dd>The weapon's <a href='#define-damage-roll'>damage roll</a> and <a href='#define-damage-type'>damage type</a>.</dd>";
	iWep += "<dt>Burden</dt>";
	iWep += "<dd>The number of hands the weapon occupies when active. You have two hands.</dd>";
	iWep += "<dt>Feature</dt>";
	iWep += "<dd>Some weapons have special properties or features when active.</dd>";
	iWep += "<dt>Throwing Weapons</dt>";
	iWep += "<dd>You can make an <a href='#define-finesse'>Finesse</a> <a href='#define-attack-roll'>attack roll</a> to throw an active weapon within <a href='#define-range'>Very Close</a> range, dealing its <a href='#define-damage-roll'>damage</a> on a success. Once thrown, the weapon isn't active.</dd>";
	iWep += "<dt>Unarmed Attacks</dt>";
	iWep += "<dd>Use either <a href='#define-strength'>Strength</a> or <a href='#define-finesse'>Finesse</a> for the <a href='#define-attack-roll'>attack roll</a> unless the GM allows otherwise, and deal <strong>d4</strong> <a href='#define-damage-type'>physical damage</a>.</dd>";
	iWep += "</dl>";
	iWep += "</div>"; // close def
	iWep += getSidebar("<p>Dual wielding is handled through <a href='#pc-benchmark-weapons-secondary'>secondary weapon features</a>.</p>");
	iWep += "</div>"; // close col
	iWep += "<div class='col-12 col-md-6'>"; // open col
	iWep += "<div id='define-combat-wheelchair'>"; // open def
	iWep += "<h4 id='combat-wheelchair'>Combat Wheelchair<a class='og-h-anchor' href='#combat-wheelchair' title='Permalink' aria-hidden='true'></a></h4>";
	iWep += getReferences(["Page 122", "Page 123"]);
	iWep += "<p>Combat wheelchairs are <a href='#define-weapon'>primary weapons</a>.</p>";
	iWep += "<dl>";
	iWep += "<dt>Movement</dt>";
	iWep += "<dd>You are skilled in navigating your wheelchair in numerous situations.</dd>";
	iWep += "<dt>Burden</dt>";
	iWep += "<dd>Wheelchairs have a burden like any <a href='#define-weapon'>weapon</a>. Outside of combat, you can maneuver using one or two hands. If you have limited or no mobility in your arms, a wheelchair can be magically attuned to you.</dd>";
	iWep += "<dt>Light Frame Models</dt>";
	iWep += "<dd>Light frame models move with you in more acrobatic ways.</dd>";
	iWep += "<dt>Heavy Frame Models</dt>";
	iWep += "<dd>Heavy frame models lend their weight to <a href='#define-attack-roll'>attacks</a>, but make you an easier target.</dd>";
	iWep += "<dt>Arcane Frame Models</dt>";
	iWep += "<dd>When <a href='#define-attack-roll'>attacking</a> with an arcane frame model, you can use a <a href='#define-subclass'>Spellcast trait</a> assigned by a <a href='#define-subclass'>subclass</a>.</p>";
	iWep += "</dl>";
	iWep += "</div>"; //close def
	iWep += "<div class='og-topbar'>"; // open topbar
	iWep += "<h5 class='h6'>Action and Movement</h5>";
	iWep += "<ul class='og-list-disc og-questions small'>";
	iWep += "<li>\"I roll over to the door to see if it's open.\"</li>";
	iWep += "<li>\"I wheel myself over to the group to ask what's going on.\"</li>";
	iWep += "<li>\"I pull my brakes and skid to a halt, turning in my seat to level my bow at the intruder.\"</li>";
	iWep += "</ul>";
	iWep += "<h6 class='h6'>Consequences</h5>";
	iWep += "<ul class='og-list-disc og-questions small'>";
	iWep += "<li>\"I pull my brakes, but I don't think to account for the loose gravel on the ground.\"</li>";
	iWep += "<li>\"I hit a patch of ice awkwardly and am sent skidding out past my target.\"</li>";
	iWep += "<li>\"I go to push off in pursuit, but one of my front caster wheels snags on a crack in the pavement, stalling me for a moment.\"</li>";
	iWep += "</ul>";
	iWep += "</div>"; // close topbar
	iWep += getSidebar("<p>The GM should avoid breaking removing a PC's wheelchair, unless everyone&mdash;especially the player&mdash;agrees.</p>");
	iWep += "</div>"; // close col
	iWep += "</div>"; // close row
	iWep += "<hr>"; // divide and continue
	// primary weapon tables
	let pwTable = "";
	pwTable += "<h4 id='weapons-primary'>Primary Weapon Tables<a class='og-h-anchor' href='#weapons-primary' title='Permalink' aria-hidden='true'></a></h4>";
	pwTable += getReferences(["Page 115"]);
	for (let t = 1; t < 5; t++) {
		pwTable += "<h5 id='weapons-primary-tier-" + t + "'>Tier " + t + " Primary Weapons (" + getTierLevels(t) + ")<a class='og-h-anchor' href='#weapons-primary-tier-" + t + "' title='Permalink' aria-hidden='true'></a></h5>";
		pwTable += printWeaponPrimaryTable(t, false);
		pwTable += printWeaponPrimaryTable(t, true);
	}
	pwTable += "<hr>";
	iWep += pwTable;
	// weapons, secondary
	let swTable = "";
	swTable += "<h4 id='weapons-secondary'>Secondary Weapon Tables<a class='og-h-anchor' href='#weapons-secondary' title='Permalink' aria-hidden='true'></a></h4>";
	for (let t = 1; t < 5; t++) {
		swTable += "<h5 id='weapons-secondary-tier-" + t + "'>Tier " + t + " Secondary Weapons (" + getTierLevels(t) + ")<a class='og-h-anchor' href='#weapons-secondary-tier-" + t + "' title='Permalink' aria-hidden='true'></a></h5>";
		// print weapon stats for tooltips
		let wStats = "";
		swTable += "<div class='visually-hidden'>"; // open hide
		for (let i = 0; i < weaponsecondaryList.length; i++) {
			if (weaponsecondaryList[i].tier == t) {
				wStats = ""; // new weapon
				wStats += "<div id='define-weapon-secondary-" + i + "'>"; // open def
				wStats += "<h5 class='h6 og-tab'>" + weaponsecondaryList[i].label + "</h5>";
				wStats += "<p class='fst-italic fw-bold'>Tier " + t + " Secondary Weapon</p>";
				wStats += "<ul class='list-unstyled d-table'>";
				wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Trait: </span><span class='d-table-cell'>" + weaponsecondaryList[i].trait + "</span></li>";
				wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Range: </span><span class='d-table-cell'>" + weaponsecondaryList[i].range + "</span></li>";
				wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Damage: </span><span class='d-table-cell'>" + weaponsecondaryList[i].damage + " " + weaponsecondaryList[i].damagetype + "</span></li>";
				wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3'>Burden: </span><span class='d-table-cell'>" + weaponsecondaryList[i].burden + "</span></li>";
				if (weaponsecondaryList[i].feature != "") {
					wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pt-1'>Feature: </span><span class='d-table-cell'>" + weaponsecondaryList[i].feature + "</span></li>";
				}
				wStats += "</ul>";
				wStats += "</div>"; // close def
				swTable += wStats;
			}
		}
		swTable += "</div>"; // close hide
		// continue
		let weaponPage = "";
		let weaponErrata = false;
		if (t == 1) {
			weaponPage = ["Page 124"];
		}
		else if (t == 2) {
			weaponPage = ["Page 124"];
		}
		else if (t == 3) {
			weaponPage = ["Page 125", "Errata"];
			weaponErrata = true;
		}
		else if (t == 4) {
			weaponPage = ["Page 125"];
		}
		swTable += getReferences(weaponPage);
		if (weaponErrata == true) {
			swTable += "<p class='og-questions small'>&dagger; &mdash; indicates a weapon with errata changes.</p>";
		}
		swTable += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
		swTable += "<caption>Tier " + t + " Secondary Weapons</caption>";
		swTable += "<thead><tr>";
		swTable += "<th class='w-15' scope='col'>Name</th>";
		swTable += "<th class='text-center w-5' scope='col'>Trait</th>";
		swTable += "<th class='text-center w-10' scope='col'>Range</th>";
		swTable += "<th class='text-center w-10' scope='col'>Damage</th>";
		swTable += "<th class='text-center w-10' scope='col'>Burden</th>";
		swTable += "<th class='w-50' scope='col'>Feature</th>";
		swTable += "</tr></thead>";
		swTable += "<tbody>";
		for (w = 0; w < weaponsecondaryList.length; w++) {
			if (weaponsecondaryList[w].tier == t) {
				swTable += "<tr>";
				swTable += "<th class='fw-normal' scope='row'>" + weaponsecondaryList[w].label;
				if (weaponsecondaryList[w].errata == true) {
					swTable += "<span class='og-questions'>&dagger;</span>";
				}
				swTable += "</th>";
				swTable += "<td class='text-center og-nowrap'>" + weaponsecondaryList[w].trait + "</td>";
				swTable += "<td class='text-center'>" + weaponsecondaryList[w].range + "</td>";
				swTable += "<td class='text-center'>" + weaponsecondaryList[w].damage + " " + weaponsecondaryList[w].damagetype + "</td>";
				swTable += "<td class='text-center'>" + weaponsecondaryList[w].burden + "</td>";
				swTable += "<td>";
				if (weaponsecondaryList[w].feature == "") {
					swTable += "&mdash;";
				}
				else {
					swTable += weaponsecondaryList[w].feature;
				}
				swTable += "</td>";
				swTable += "</tr>";
			}
		}
		swTable += "</tbody></table></div>";
	}
	swTable += "<hr>";
	iWep += swTable;
	// armor
	let iArm = "";
	iArm += "<div id='define-armor'>"; // open def
	iArm += "<h3 id='armor'>Armor<a class='og-h-anchor' href='#armor' title='Permalink' aria-hidden='true'></a></h3>";
	iArm += getReferences(["Page 112", "Page 114", "Errata"]);
	iArm += "<dl>";
	iArm += "<dt>Unarmored</dt>";
	iArm += "<dd>While unarmored, your base Armor Score is 0, your <a href='#define-hit-point'>Major threshold</a> is equal to your <a href='#define-level'>level</a>, and your <a href='#define-hit-point'>Severe threshold</a> is equal to twice your <a href='#define-level'>level</a>.</dd>";
	iArm += "<dt>Equipping Armor</dt>";
	iArm += "<dd>You can't equip armor while in danger or under pressure, and you can't equip armor of a higher <a href='#define-tier'>tier</a> than yours. You can equip only one set of armor.  Each set of armor has its own Armor Slots. If you change armor, track its marked Armor Slots. You can't carry armor in your inventory.</dd>";
	iArm += "<dt>Base Thresholds</dt>";
	iArm += "<dd>When equipped, a set of armor's base thresholds determine your Major and Severe <a href='#define-hit-point'>damage thresholds</a>. Add your <a href='#define-level'>level</a> to each.</dd>";
	iArm += "<dt>Armor Score and Armor Slots</dt>";
	iArm += "<dd>Your <strong>Armor Score</strong> equals your equipped armor's <strong>Base Score</strong> plus any <a href='#define-procedure'>modifiers</a> (to a maximum of 12) you gain from your <a href='#define-ancestry'>ancestry</a>, <a href='#define-class'>class</a>, or <a href='#define-subclass'>subclass</a> features and your <a href='#define-domain-card'>domain cards</a>. When <a href='#define-damage-roll'>incoming damage</a> would cause you to mark <a href='#define-hit-point'>Hit Points</a>, you can mark one <strong>Armor Slot</strong> to reduce the severity of the damage by one <a href='#define-hit-point'>threshold</a>&mdash;for example, from Severe to Major, Major to Minor, or Minor to Nothing.</dd>";
	iArm += "<dt>Feature</dt>";
	iArm += "<dd>Some armors grant a feature when equipped.</dd>";
	iArm += "<dt>Temporary Armor</dt>";
	iArm += "<dd>If your Armor Score gains a <a href='#define-temporary'>temporary</a> bonus&mdash;for example, from a <a href='#define-domain-card'>domain card</a> like <a href='#define-domain-card-book-of-ava'>Book of Ava</a>&mdash;your available Armor Slots increase by the same amount. When the effect ends, clear a number of Armor Slots equal to the bonus.</dd>";
	iArm += "<dt>Repairing Armor</dt>";
	iArm += "<dd>When you take a <a href='#define-downtime'>rest</a>, you can clear marked armor slots as a <a href='#define-downtime-move'>downtime move</a>.</dd>";
	iArm += "<dt>Shields</dt>";
	iArm += "<dd>Shields aren't armor. They are <a href='#define-equipment'>secondary weapons</a> that provide a bonus to your Armor Score.</dd>";
	iArm += "</dl>";
	iArm += getSidebar("<p>Some features alter your <a href='#define-hit-point'>damage thresholds</a>&mdash;for example, the <em>Shell</em> feature from the <a href='#define-galapa'>Galapa</a> ancestry, or the <em>Unwavering</em> feature from the <a href='#define-stalwart'>Stalwart</a> <a href='#define-guardian'>Guardian</a>, or <a href='#define-domain-card'>domain cards</a> like <a href='#define-domain-card-bare-bones'>Bare Bones</a>.</p>");
	iArm += "</div>"; // close def
	// armor tables
	let aTable = "";
	aTable += "<h4 id='armor-tables'>Armor Tables<a class='og-h-anchor' href='#armor-tables' title='Permalink' aria-hidden='true'></a></h4>";
	for (let t = 1; t < 5; t++) {
		aTable += "<h5 id='armor-tier-" + t + "'>Tier " + t + " Armor (" + getTierLevels(t) + ")<a class='og-h-anchor' href='#armor-tier-" + t + "' title='Permalink' aria-hidden='true'></a></h5>";
		// print weapon stats for tooltips
		let aStats = "";
		aTable += "<div class='visually-hidden'>"; // open hide
		for (let i = 0; i < armorList.length; i++) {
			if (armorList[i].tier == t) {
				aStats = ""; // new weapon
				aStats += "<div id='define-armor-" + i + "'>"; // open def
				aStats += "<h6 class='og-tab'>" + armorList[i].label + "</h6>";
				aStats += "<p class='fst-italic fw-bold'>Tier " + t + " Armor</p>";
				aStats += "<ul class='list-unstyled d-table'>";
				aStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Base Thresholds: </span><span class='d-table-cell'>" + armorList[i].thresholdmajor + "/" + armorList[i].thresholdsevere + "</span></li>";
				aStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Base Score: </span><span class='d-table-cell'>" + armorList[i].score + "</span></li>";
				if (armorList[i].feature != "") {
					aStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pt-1'>Feature: </span><span class='d-table-cell'>" + armorList[i].feature + "</span></li>";
				}
				aStats += "</ul>";
				aStats += "</div>"; // close def
				aTable += aStats;
			}
		}
		aTable += "</div>"; // close hide
		// continue
		let armorPage = "";
		if (t == 1) { armorPage = "Page 126"; }
		else if (t == 2) { armorPage = "Page 126"; }
		else if (t == 3) { armorPage = "Page 127"; }
		else if (t == 4) { armorPage = "Page 127"; }
		aTable += "<ul class='og-list-inline og-ref og-omit'><li>" + armorPage + "</li></ul>";
		aTable += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
		aTable += "<caption>Tier " + t + " Armor</caption>";
		aTable += "<thead><tr>";
		aTable += "<th class='w-20' scope='col'>Name</th>";
		aTable += "<th class='text-center w-15' scope='col'>Base Thresholds</th>";
		aTable += "<th class='text-center w-15' scope='col'>Base Score</th>";
		aTable += "<th class='w-50' scope='col'>Feature</th>";
		aTable += "</tr></thead>";
		aTable += "<tbody>";
		for (a = 0; a < armorList.length; a++) {
			if (armorList[a].tier == t) {
				aTable += "<tr>";
				aTable += "<th class='fw-normal' scope='row'>" + armorList[a].label;
				aTable += "</th>";
				aTable += "<td class='text-center og-nowrap'>" + armorList[a].thresholdmajor + "/" + armorList[a].thresholdsevere + "</td>";
				aTable += "<td class='text-center og-nowrap'>" + armorList[a].score + "</td>";
				aTable += "<td>";
				if (armorList[a].feature == "") {
					aTable += "&mdash;";
				}
				else {
					aTable += armorList[a].feature;
				}
				aTable += "</td>";
				aTable += "</tr>";
			}
		}
		aTable += "</tbody></table></div>";
	}
	aTable += "<hr>";
	iArm += aTable;
	// loot
	// rarity
	let rollRarity = "";
	rollRarity += "<ul class='og-list-disc'>";
	rollRarity += "<li><strong>Common:</strong> 1d12 or 2d12</li>";
	rollRarity += "<li><strong>Uncommon:</strong> 2d12 or 3d12</li>";
	rollRarity += "<li><strong>Rare:</strong> 3d12 or 4d12</li>";
	rollRarity += "<li><strong>Legendary:</strong> 4d12 or 5d12</li>";
	rollRarity += "</ul>";
	// loot section
	let iLoot = "";
	iLoot += "<div class='row'>"; // open row
	iLoot += "<div class='col-12 col-md-6'>"; // open col
	iLoot += "<div class='og-item' id='define-loot'>"; //open def
	iLoot += "<h3 id='loot'>Loot<a class='og-h-anchor' href='#loot' title='Permalink' aria-hidden='true'></a></h3>";
	iLoot += getReferences(["Page 129"]);
	iLoot += "<p><strong>Loot</strong> comprises any <a href='#define-consumable'>consumables</a> or reusable items the party acquires, which can be used until sold, discarded, or lost.</p>";
	iLoot += "<p>To generate a random piece of loot, choose a rarity, roll the designated dice, and match the total to the item in the table:</p>";
	iLoot += rollRarity;
	iLoot += "</div>"; // close def
	// random cache
	iLoot += "<h4 class='h6'>Random Loot</h4>";
	iLoot += getReferences(["Editorial Addition"]);
	iLoot += "<p>The GM can use this generator to generate caches of five pieces of <a href='#define-loot'>loot</a> using the dice rolls specified above.</p>";
	iLoot += "<ul class='list-inline'>";
	for (let i = 1; i < 6; i++) {
		iLoot += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='new-random-loot-" + i + "d12' aria-label='New Loot: " + i + "d12'>" + i + "d12</button></p></li>";
	}
	for (let i = 1; i < 4; i++) {
		iLoot += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='new-random-loot-" + i + "d20' aria-label='New Loot: " + i + "d20'>" + i + "d20</button></p></li>";
	}
	iLoot += "</ul>";
	iLoot += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	iLoot += "<caption>Random Loot</caption>";
	iLoot += "<thead>";
	iLoot += "<tr>";
	iLoot += "<th class='text-center w-15' scope='col'><span id='random-loot-roll'>&mdash;</span></th>";
	iLoot += "<th>Loot</th>";
	iLoot += "</tr>";
	iLoot += "</thead>";
	iLoot += "<tbody>";
	for (let i = 1; i < 6; i++) {
		iLoot += "<tr>";
		iLoot += "<th class='text-center fw-normal'><span id='random-loot-result-" + i + "'>&mdash;</span><span class='d-block small'>(<span id='random-loot-chance-" + i + "'>&mdash;</span>)</span></th>";
		iLoot += "<td><div class='og-item' id='random-loot-" + i + "'>&mdash;</div></td>";
		iLoot += "</tr>";
	}
	iLoot += "</tbody>";
	iLoot += "</table></div>";
	// random cache
	let lootTable = "";
	lootTable += "<h4 class='h6' id='loot-table'>Loot Table<a class='og-h-anchor' href='#loot-table' title='Permalink' aria-hidden='true'></a></h4>";
	lootTable += getReferences(["Page 129"]);
	lootTable += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	lootTable += "<caption>Loot</caption>";
	lootTable += "<thead><tr><th class='text-center w-15' scope='col'>Roll</th><th>Loot</th></tr></thead><tbody>";
	for (i = 0; i < lootList.length; i++) {
		lootTable += "<tr>";
		lootTable += "<th class='text-center fw-normal'>" + (i + 1) + "</th>";
		lootTable += "<td><div class='og-item' id='define-loot-" + lootList[i].name + "'><strong><em>" + lootList[i].label + ":</em></strong> " + lootList[i].feature + " </div></td>";
		lootTable += "</tr>";
	}
	lootTable += "<tbody></table></div>";
	iLoot += lootTable;
	iLoot += "</div>"; // close col
	iLoot += "<div class='col-12 col-md-6'>"; // open cal
	iLoot += "<div id='define-consumable'>"; // open def
	iLoot += "<h4 id='consumables'>Consumables<a class='og-h-anchor' href='#consumables' title='Permalink' aria-hidden='true'></a></h4>";
	iLoot += getReferences(["Page 132"]);
	iLoot += "<p>Consumables are <a href='#define-loot'>loot</a> that can only be used once. You can carry up to five of each consumable at a time in your inventory. Using a consumable doesn't require a roll unless required by the GM.</p>";
	iLoot += "<p>To generate a random consumable, choose a rarity, roll the designated dice, and match the total to the item in the table:</p>";
	iLoot += rollRarity;
	iLoot += "</div>"; // close def
	// random cache
	iLoot += "<h5 class='h6'>Random Consumable</h5>";
	iLoot += getReferences(["Editorial Addition"]);
	iLoot += "<p>The GM can use this generator to generate caches of five <a href='#define-consumable'>consumables</a> using the dice rolls specified above.</p>";
	iLoot += "<ul class='list-inline'>";
	for (let i = 1; i < 6; i++) {
		iLoot += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='new-random-consumable-" + i + "d12' aria-label='New Consumable: " + i + "d12'>" + i + "d12</button></p></li>";
	}
	for (let i = 1; i < 4; i++) {
		iLoot += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='new-random-consumable-" + i + "d20' aria-label='New Consumable: " + i + "d20'>" + i + "d20</button></p></li>";
	}
	iLoot += "</ul>";
	iLoot += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	iLoot += "<caption>Random Consumable</caption>";
	iLoot += "<thead>";
	iLoot += "<tr>";
	iLoot += "<th class='text-center w-15' scope='col'><span id='random-consumable-roll'>&mdash;</span></th>";
	iLoot += "<th>Consumable</th>";
	iLoot += "</tr>";
	iLoot += "</thead>";
	iLoot += "<tbody>";
	for (let i = 1; i < 6; i++) {
		iLoot += "<tr>";
		iLoot += "<th class='text-center fw-normal'><span id='random-consumable-result-" + i + "'>&mdash;</span><span class='d-block small'>(<span id='random-consumable-chance-" + i + "'>&mdash;</span>)</span></th>";
		iLoot += "<td><div class='og-item' id='random-consumable-" + i + "'>&mdash;</div></td>";
		iLoot += "</tr>";
	}
	iLoot += "</tbody>";
	iLoot += "</table></div>";
	// print consumable table
	let consumableTable = "";
	consumableTable += "<h5 class='h6' id='consumables-table'>Consumables Table<a class='og-h-anchor' href='#consumables-table' title='Permalink' aria-hidden='true'></a></h5>";
	consumableTable += getReferences(["Page 132"]);
	consumableTable += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	consumableTable += "<caption>Consumables</caption>";
	consumableTable += "<thead><tr><th class='text-center w-15' scope='col'>Roll</th><th>Loot</th></tr></thead><tbody>";
	for (i = 0; i < consumableList.length; i++) {
		consumableTable += "<tr>";
		consumableTable += "<th class='text-center fw-normal'>" + (i + 1) + "</th>";
		consumableTable += "<td><div class='og-item' id='define-consumable-" + consumableList[i].name + "'><strong><em>" + consumableList[i].label + ":</em></strong> " + consumableList[i].feature + " </div></td>";
		consumableTable += "</tr>";
	}
	consumableTable += "<tbody></table></div>";
	iLoot += consumableTable;
	iLoot += "</div>"; // close col
	iLoot += "</div>"; // col row
	iLoot += "<hr>"; // divide and move on
	iLoot += "<div class='row'>"; // open row 
	iLoot += "<div class='col-12 col-md-6'>"; // open col
	iLoot += "<div id='define-gold'>"; // open def
	iLoot += "<h3 id='gold'>Gold<a class='og-h-anchor' href='#gold' title='Permalink' aria-hidden='true'></a></h3>";
	iLoot += getReferences(["Page 104", "Page 165"]);
	iLoot += "<p><strong>Gold</strong> is an abstract measurement wealth measured in handfuls, bags, and chests. It's up to the GM and players to decide how much importance to place on tracking gold. If you don't wish to track gold, the GM might allow the PCs to choose items and services they from a prepared list of available vendors instead.</p>";
	iLoot += "<dl>";
	iLoot += "<dt>Handful</dt>";
	iLoot += "<dd>10 handfuls of gold equals 1 bag.</dd>";
	iLoot += "<dt>Bag</dt>";
	iLoot += "<dd>10 bags of gold equals 1 chest.</dd>";
	iLoot += "<dt>Chest</dt>";
	iLoot += "<dd>You can't carry more than 1 chest, so you'll need to spend some or store it somewhere before you can acquire more.</dd>";
	iLoot += "</dl>";
	iLoot += "</div>"; // close def
	iLoot += "<div class='og-topbar'>"; // open topbar
	iLoot += "<div id='define-optional-rule-gold-coins'>";
	iLoot += "<h4 id='optional-rule-gold-coins'>Optional Rule: Gold Coins<a class='og-h-anchor' href='#optional-rule-gold-coins' title='Permalink' aria-hidden='true'></a></h4>";
	iLoot += getReferences(["Page 104"]);
	iLoot += "<p>You can add coins as an even lower denomination:</p>";
	iLoot += "<dl>";
	iLoot += "<dt>Coin</dt>";
	iLoot += "<dd>10 coins equals 1 handful.</dd>";
	iLoot += "</dl>";
	iLoot += "</div>"; // close topbar
	iLoot += "</div>"; // close def
	iLoot += "</div>"; // close col
	iLoot += "<div class='col-12 col-md-6'>"; // open col
	iLoot += "<h4 id='average-costs'>Average Costs<a class='og-h-anchor' href='#average-costs' title='Permalink' aria-hidden='true'></a></h4>";
	iLoot += getReferences(["Page 165"]);
	iLoot += "<p>The GM can adjust the following prices for <a href='#define-equipment'>equipment</a>, goods, and services to better reflect the tone, themes, or setting:</p>";
	iLoot += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	iLoot += "<caption>Average Costs</caption>";
	iLoot += "<thead>";
	iLoot += "<tr>";
	iLoot += "<th scope='col'>Goods and Services</th>";
	iLoot += "<th class='text-center' scope='col'>Gold</th>";
	iLoot += "<th class='text-end og-nowrap' scope='col'>Coins</th>";
	iLoot += "</tr>";
	iLoot += "</thead>";
	iLoot += "<tbody>";
	for (i = 0; i < goldList.length; i++) {
		iLoot += "<tr>";
		iLoot += "<th class='fw-normal'>" + goldList[i].label + "</th>";
		iLoot += "<td class='text-center og-nowrap'>" + goldList[i].gold + "</td>";
		iLoot += "<td class='text-end og-nowrap'>" + goldList[i].coins + "</td>";
		iLoot += "</tr>";
	}
	iLoot += "</tbody>";
	iLoot += "</table></div>";
	iLoot += "</div>"; // close col
	iLoot += "</div>"; // close ro
	iLoot += "<hr>";
	iEquip += iWep + iArm + iLoot;
	document.getElementById("printEquipment").innerHTML = iEquip;
};
// weapons (table printer)
function printWeaponPrimaryTable(weaponTier, weaponType) {
	let weaponTypeLabel = "";
	let weaponTypeName = "";
	if (weaponType == false) {
		weaponTypeLabel = "Physical"; 
		weaponTypeName = "physical"; 
	}
	else {
		weaponTypeLabel = "Magic"; 
		weaponTypeName = "magic"; 
	}
	let weaponContent = "";
	weaponContent += "<h6 id='weapons-primary-tier-" + weaponTier + "-" + weaponTypeName + "'>Tier " + weaponTier + " " + weaponTypeLabel + " Weapons<a class='og-h-anchor' href='#weapons-primary-tier-" + weaponTier + "-" + weaponTypeName + "' title='Permalink' aria-hidden='true'></a></h6>";
	// print weapon stats for tooltips
	let wStats = "";
	weaponContent += "<div class='visually-hidden'>"; // open hide
	for (let i = 0; i < weaponprimaryList.length; i++) {
		if (weaponprimaryList[i].tier == weaponTier && weaponprimaryList[i].magic == weaponType) {
			wStats = ""; // new weapon
			wStats += "<div id='define-weapon-primary-" + i + "'>"; // open def
			wStats += "<h6 class='og-tab'>" + weaponprimaryList[i].label + "</h6>";
			wStats += "<p class='fst-italic fw-bold'>Tier " + weaponTier + " Primary Weapon (" + weaponTypeLabel + ")</p>";
			wStats += "<ul class='list-unstyled d-table'>";
			wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Trait: </span><span class='d-table-cell'>" + weaponprimaryList[i].trait + "</span></li>";
			wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Range: </span><span class='d-table-cell'>" + weaponprimaryList[i].range + "</span></li>";
			wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pb-1'>Damage: </span><span class='d-table-cell'>" + weaponprimaryList[i].damage + " " + weaponprimaryList[i].damagetype + "</span></li>";
			wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3'>Burden: </span><span class='d-table-cell'>" + weaponprimaryList[i].burden + "</span></li>";
			if (weaponprimaryList[i].feature != "") {
				wStats += "<li class='d-table-row'><span class='d-table-cell fw-bold pe-3 pt-1'>Feature: </span><span class='d-table-cell'>" + weaponprimaryList[i].feature + "</span></li>";
			}
			wStats += "</ul>";
			wStats += "</div>"; // close def
			weaponContent += wStats;
		}
	}
	weaponContent += "</div>"; // close hide
	// continue
	let weaponPage = "";
	let weaponErrata = false;
	if (weaponTier == 1 && weaponType == false) {
		weaponPage = ["Page 115", "Page 123", "Errata"];
		weaponErrata = true;
	}
	else if (weaponTier == 1 && weaponType == true) {
		weaponPage = ["Page 115", "Page 123", "Errata"];
		weaponErrata = true;
	}
	else if (weaponTier == 2 && weaponType == false) {
		weaponPage = ["Page 116", "Page 123", "Errata"];
		weaponErrata = true;
	}
	else if (weaponTier == 2 && weaponType == true) {
		weaponPage = ["Page 117", "Page 123"];
	}
	else if (weaponTier == 3 && weaponType == false) {
		weaponPage = ["Page 119", "Page 123", "Errata"];
		weaponErrata = true;
	}
	else if (weaponTier == 3 && weaponType == true) {
		weaponPage = ["Page 119", "Page 123"];
	}
	else if (weaponTier == 4 && weaponType == false) {
		weaponPage = ["Page 120", "Page 123", "Errata"];
		weaponErrata = true;
	}
	else if (weaponTier == 4 && weaponType == true) {
		weaponPage = ["Page 121", "Page 123"];
	}
	weaponContent += getReferences(weaponPage);
	if (weaponErrata == true) {
		weaponContent += "<p class='og-questions small'>&dagger; &mdash; indicates a weapon with errata changes.</p>";
	}
	weaponContent += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	weaponContent += "<caption>Tier " + weaponTier + " " + weaponTypeLabel + " Weapons</caption>";
	weaponContent += "<thead><tr>";
	weaponContent += "<th class='w-15' scope='col'>Name</th>";
	weaponContent += "<th class='text-center w-5' scope='col'>Trait</th>";
	weaponContent += "<th class='text-center w-10' scope='col'>Range</th>";
	weaponContent += "<th class='text-center w-10' scope='col'>Damage</th>";
	weaponContent += "<th class='text-center w-10' scope='col'>Burden</th>";
	weaponContent += "<th class='w-50' scope='col'>Feature</th>";
	weaponContent += "</tr></thead>";
	weaponContent += "<tbody>";
	for (w = 0; w < weaponprimaryList.length; w++) {
		if (weaponprimaryList[w].tier == weaponTier && weaponprimaryList[w].magic == weaponType) {
			weaponContent += "<tr>";
			weaponContent += "<th class='fw-normal' scope='row'>" + weaponprimaryList[w].label;
			if (weaponprimaryList[w].errata == true) {
				weaponContent += "<span class='og-questions'>&dagger;</span>";
			}
			weaponContent += "</th>";
			weaponContent += "<td class='text-center og-nowrap'>" + weaponprimaryList[w].trait + "</td>";
			weaponContent += "<td class='text-center'>" + weaponprimaryList[w].range + "</td>";
			weaponContent += "<td class='text-center'>" + weaponprimaryList[w].damage + " " + weaponprimaryList[w].damagetype + "</td>";
			weaponContent += "<td class='text-center og-nowrap'>" + weaponprimaryList[w].burden + "</td>";
			weaponContent += "<td>";
			if (weaponprimaryList[w].feature == "") {
				weaponContent += "&mdash;";
			}
			else {
				weaponContent += weaponprimaryList[w].feature;
			}
			weaponContent += "</td>";
			weaponContent += "</tr>";
		}
	}
	weaponContent += "</tbody></table></div>";
	return weaponContent;
};
// loot
function randomLoot(p, d) {
	document.getElementById("random-loot-roll").innerHTML = p + "d" + d;
	for (let i = 1; i < 6; i++) {
	  let roll = rollDice(p, d);
      let result = roll - 1;
	  document.getElementById("random-loot-result-" + i).innerHTML = roll;
	  document.getElementById("random-loot-" + i).innerHTML = "<strong><em>" + lootList[result].label + ":</em></strong> " + lootList[result].feature;
	  if ( p == 1 ) { document.getElementById("random-loot-chance-" + i).innerHTML = getChance(1, d); }
	  else if ( p == 2 && d == 12) { document.getElementById("random-loot-chance-" + i).innerHTML = chance2d12[result]; }
	  else if ( p == 3 && d == 12) { document.getElementById("random-loot-chance-" + i).innerHTML = chance3d12[result]; }
	  else if ( p == 4 && d == 12) { document.getElementById("random-loot-chance-" + i).innerHTML = chance4d12[result]; }
	  else if ( p == 5 && d == 12) { document.getElementById("random-loot-chance-" + i).innerHTML = chance5d12[result]; }
	  else if ( p == 2 && d == 20) { document.getElementById("random-loot-chance-" + i).innerHTML = chance2d20[result]; }
	  else if ( p == 3 && d == 20) { document.getElementById("random-loot-chance-" + i).innerHTML = chance3d20[result]; }
	}
	for (let i = 1; i < 6; i++) {
		document.getElementById("new-random-loot-" + i + "d12").classList.remove('btn-hope');
	}
	for (let i = 1; i < 4; i++) {
		document.getElementById("new-random-loot-" + i + "d20").classList.remove('btn-hope');
	}
	document.getElementById("new-random-loot-" + p + "d" + d).classList.add('btn-hope');
	refreshTooltips(); 
};
// consumables
function randomConsumable(p, d) {
	document.getElementById("random-consumable-roll").innerHTML = p + "d" + d;
	for (let i = 1; i < 6; i++) {
	  let roll = rollDice(p, d);
      let result = roll - 1;
	  document.getElementById("random-consumable-result-" + i).innerHTML = roll;
	  document.getElementById("random-consumable-" + i).innerHTML = "<strong><em>" + consumableList[result].label + ":</em></strong> " + consumableList[result].feature;
	  if ( p == 1 ) { document.getElementById("random-consumable-chance-" + i).innerHTML = getChance(1, d); }
	  else if ( p == 2 && d == 12) { document.getElementById("random-consumable-chance-" + i).innerHTML = chance2d12[result]; }
	  else if ( p == 3 && d == 12) { document.getElementById("random-consumable-chance-" + i).innerHTML = chance3d12[result]; }
	  else if ( p == 4 && d == 12) { document.getElementById("random-consumable-chance-" + i).innerHTML = chance4d12[result]; }
	  else if ( p == 5 && d == 12) { document.getElementById("random-consumable-chance-" + i).innerHTML = chance5d12[result]; }
	  else if ( p == 2 && d == 20) { document.getElementById("random-consumable-chance-" + i).innerHTML = chance2d20[result]; }
	  else if ( p == 3 && d == 20) { document.getElementById("random-consumable-chance-" + i).innerHTML = chance3d20[result]; }
	}
	for (let i = 1; i < 6; i++) {
		document.getElementById("new-random-consumable-" + i + "d12").classList.remove('btn-hope');
	}
	for (let i = 1; i < 4; i++) {
		document.getElementById("new-random-consumable-" + i + "d20").classList.remove('btn-hope');
	}
	document.getElementById("new-random-consumable-" + p + "d" + d).classList.add('btn-hope');
	refreshTooltips(); 
};
// ranges
function printRanges() {
	let iRange = "";
	iRange += "<div id='define-range'>";
	iRange += "<h3 id='maps-range-and-movement'>Maps, Range, and Movement<a class='og-h-anchor' href='#maps-range-and-movement' title='Permalink' aria-hidden='true'></a></h3>";
	iRange += getReferences(["Page 103", "Page 104"]);
	iRange += "<p>Range is measured from the source of an effect (for example, the attacker or spellcaster) to the target or object of an effect. A <a href='#define-weapon'>weapon</a>, spell, ability, item, or other effect's stated range is a maximum range. Usually, it can be used at closer distances.</p>";
	iRange += "<dl>";
	iRange += "<dt>Movement Under Pressure</dt>";
	iRange += "<dd>You can move within <strong>Very Close</strong> or <strong>Close</strong> range and take an <a href='#define-action'>action</a>. If you move within <strong>Far</strong> or <strong>Very Far</strong> range, you must succeed on an <a href='#define-trait-roll'>Agility Roll</a> to reposition yourself safely.</dd>";
	iRange += "<dt>Adversary Movement</dt>";
	iRange += "<dd>An <a href='#define-adversary'>adversary</a> can move within <strong>Close</strong> range for free as part of an <a href='#define-adversary-action'>adversary action</a>, or within <a href='#define-range'>Very Far</a> range as a separate action.</dd>";
	iRange += "</dl>";
	iRange += "<h4 class='h6'>Ranges</h4>";
	iRange += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	iRange += "<caption>Ranges</caption>";
	iRange += "<thead>";
	iRange += "<tr>";
	iRange += "<th scope='col'>Range</th>";
	iRange += "<th scope='col'>Description</th>";
	iRange += "<th scope='col'>Movement</th>";
	iRange += "<th class='text-end' scope='col'>Feet</th>";
	iRange += "<th class='text-end' scope='col'>Meters</th>";
	iRange += "</tr>";
	iRange += "</thead>";
	iRange += "<tbody>";
	for (let i = 0; i < rangesList.length; i++) {
		iRange += "<tr>";
		iRange += "<th class='fw-normal og-nowrap' scope='row'>" + rangesList[i].label + "</th>";
		iRange += "<td>" + rangesList[i].summary + "</td>";
		iRange += "<td>" + rangesList[i].move + "</td>";
		iRange += "<td class='text-end'><span class='og-nowrap'>" + rangesList[i].feet + " feet</span></td>";
		iRange += "<td class='text-end'><span class='og-nowrap'>" + rangesList[i].meters + " m</span></td>";
		iRange += "</tr>";
	}
	iRange += "</tbody>";
	iRange += "</table></div>";
	iRange += "</div>";
	iRange += "<div class='og-topbar'>";
	iRange += "<div id='define-optional-rule-defined-ranges'>";
	iRange += "<h4 id='optional-rule-defined-ranges'>Optional Rule: Defined Ranges<a class='og-h-anchor' href='#optional-rule-defined-ranges' title='Permalink' aria-hidden='true'></a></h4>";
	iRange += getReferences(["Page 103"]);
	iRange += "<p>If you would rather play with more precise <a href='#define-range'>range</a> rules, the conversions below assume 1 inch (2.5 cm) of map represents 5 feet (1.5 m).</p>";
	iRange += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
	iRange += "<caption>Defined Ranges</caption>";
	iRange += "<thead>";
	iRange += "<tr>";
	iRange += "<th scope='col'>Range</th>";
	iRange += "<th scope='col'>Ruler</th>";
	iRange += "<th class='text-center' scope='col'>Squares</th>";
	iRange += "<th class='text-end' scope='col'>Inches</th>";
	iRange += "<th class='text-end' scope='col'>Centimeters</th>";
	iRange += "</tr>";
	iRange += "</thead>";
	iRange += "<tbody>";
	for (let i = 0; i < rangesList.length; i++) {
		iRange += "<tr>";
		iRange += "<th class='fw-normal og-nowrap' scope='row'>" + rangesList[i].label + "</th>";
		iRange += "<td>" + rangesList[i].ruler + "</td>";
		iRange += "<td class='text-center'>" + rangesList[i].squares + "</td>";
		iRange += "<td class='text-end'>" + rangesList[i].inches + "</td>";
		iRange += "<td class='text-end'>" + rangesList[i].cm + "</td>";
		iRange += "</tr>";
	}
	iRange += "</tbody>";
	iRange += "</table></div>";
	iRange += "</div>";
	iRange += "</div>";
	iRange += "<hr>";
	document.getElementById("printRange").innerHTML = iRange;
};
function printDifficultyBenchmarks() {
	let dBench = "";
	dBench += "<h3 id='difficulty-benchmarks'>Difficulty Benchmarks<a class='og-h-anchor' href='#difficulty-benchmarks' title='Permalink' aria-hidden='true'></a></h3>";
	dBench += getReferences(["Page 158", "Editorial Addition"]);
	dBench += "<div class='alert ps-4 pb-0'>"; // open index
	dBench += "<ul class='list-unstyled og-qr'>";
	dBench += "<li><a href='#duality-dice-benchmark'>Duality Dice</a></li>";
	dBench += "<li><a href='#gms-die-benchmarks'>GM's Die</a></li>";
	for (i = 0; i < traitList.length; i++) {
		dBench += "<li><a href='#define-" + traitList[i].name + "-benchmark'>" + traitList[i].label + "</a></li>";

	}
	dBench += "</ul>";
	dBench += "</div>"; // close index
	dBench += "<div class='row'>"; // open row
	dBench += "<div class='col-12 col-md-6'>"; // open col
	dBench += "<h4 id='duality-dice-benchmark'>Duality Dice Benchmarks<a class='og-h-anchor' href='#duality-dice-benchmark' title='Permalink' aria-hidden='true'></a></h4>";
	dBench += getReferences(["Editorial Addition"]);
	dBench += "<p>The following tables display the approximate percentage of <a href='#define-action-roll'>duality dice</a> roll results, including those made with an <a href='#define-advantage'>advantage</a> die or <a href='#define-advantage'>disadvantage</a> die. To account for a modifier, subtract it from the Difficulty to determine the chance of success&mdash;for example, if the Difficulty is 13 and the modifier is +3, the chances of success are equal to the listed percentages for Difficulty 10. The actual chance to succeed on a roll is never less than the <a href='#define-action-roll'>critical success</a> rate.</p>";
	dBench += "</div>"; // close col
	dBench += "<div class='col-12 col-md-6'>"; // open col
	dBench += "<div class='text-center'>"; // open fig
	dBench += "<img class='og-fig-md' src='images/duality-dice.svg' alt='Duality Dice: The Hope die result is 12. The Fear die result is 1.' aria-hidden='true'>";
	dBench += "</div>"; // close fig
	dBench += "</div>"; // close col
	dBench += "</div>"; // close row
	// interface
	dBench += "<div class='row'>"; // opwn row
	dBench += "<div class='col-12 col-md-6 col-xl-3'>"; // open row
	dBench += "<h5 class='h6'>Hope Die</h5>";
	dBench += "<ul class='list-inline'>";
	for (let i = 4; i < 8; i++) {
		dBench += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='benchmark-hope-" + diceList[i] + "' aria-label='Hope Die: " + diceList[i] + "'>" + diceList[i] + "</button></p></li>";
	}
	dBench += "</ul>";
	dBench += "</div>";
	dBench += "<div class='col-12 col-md-6 col-xl-3'>"; // open row
	dBench += "<h5 class='h6'>Fear Die</h5>"; // close col
	dBench += "<ul class='list-inline'>";
	for (let i = 4; i < 8; i++) {
		dBench += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='benchmark-fear-" + diceList[i] + "' aria-label='Fear Die: " + diceList[i] + "'>" + diceList[i] + "</button></p></li>";
	}
	dBench += "</ul>";
	dBench += "</div>"; // close col
	dBench += "<div class='col-12 col-md-6 col-xl-3'>"; // open row
	dBench += "<h5 class='h6'>Advantage Die</h5>";
	dBench += "<ul class='list-inline'>";
	for (let i = 3; i < 6; i++) {
		dBench += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='benchmark-advantage-" + diceList[i] + "' aria-label='Advantage Die: " + diceList[i] + "'>" + diceList[i] + "</button></p></li>";
	}
	dBench += "</ul>";
	dBench += "</div>"; // close col
	dBench += "<div class='col-12 col-md-6 col-xl-3'>"; // open row
	dBench += "<h5 class='h6'>Disadvantage Die</h5>";
	dBench += "<ul class='list-inline'>";
	for (let i = 3; i < 6; i++) {
		dBench += "<li class='list-inline-item'><p><button class='btn mt-1 mb-1 theme-light border' type='button' id='benchmark-disadvantage-" + diceList[i] + "' aria-label='Advantage Die: " + diceList[i] + "'>" + diceList[i] + "</button></p></li>";
	}
	dBench += "</ul>";
	dBench += "</div>"; // close col
	dBench += "</div>"; // close row
	// hope and fear
	dBench += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3 small'>";
	dBench += "<caption>Duality Dice Hope and Fear Benchmarks</caption>";
	dBench += "<thead>";
	dBench += "<tr>";
	dBench += "<th class='text-center w-15' scope='col'>Hope + Fear</th>";
	dBench += "<th class='text-center w-10 og-nowrap' scope='col'><span class='text-fear'>&#x25AE;</span> Fear</th>";
	dBench += "<th class='text-center w-15 og-nowrap' scope='col'><span class='text-hope'>&#x25AE;</span> Hope</th>";
	dBench += "<th class='text-center w-10 og-nowrap' scope='col'><span class='text-info'>&#x25AE;</span> Crit</th>";
	dBench += "<th class='og-nowrap w-50' scope='col' aria-hidden='true'></th>";
	dBench += "</tr>";
	dBench += "</thead>";
	dBench += "<tbody>";
	dBench += "<tr>";
	dBench += "<th class='text-center fw-normal'>";
	dBench += "<span class='og-nowrap'><span id='benchmark-hope-die'>&mdash;</span></span> <span class='og-nowrap'>+ <span id='benchmark-fear-die'>&mdash;</span></span></th>";
	dBench += "<td id='benchmark-fear-percent' class='text-center'>&mdash;</td>";
	dBench += "<td id='benchmark-hope-percent' class='text-center'>&mdash;</td>";
	dBench += "<td id='benchmark-crit-percent' class='text-center'>&mdash;</td>";
	dBench += "<td aria-hidden='true'><span id='benchmark-fear-chart' class='d-inline-block bg-fear' style='width: 33.33%'>&nbsp;</span><span id='benchmark-hope-chart' class='d-inline-block bg-hope' style='width: 33.33%'>&nbsp;</span><span id='benchmark-crit-chart' class='d-inline-block bg-info' style='width: 33.33%'>&nbsp;</span></td>";
	dBench += "</tr>";
	dBench += "</tbody>";
	dBench += "</table></div>";
	dBench += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3 small'>";
	dBench += "<caption>Duality Dice Difficulty Benchmarks</caption>";
	dBench += "<thead>";
	dBench += "<tr>";
	dBench += "<th class='text-center w-15' scope='col'>Difficulty</th>";
	dBench += "<th class='text-center w-10 og-nowrap' scope='col'><span class='text-danger'>&#x25AE;</span> &minus;<span id='benchmark-difficulty-disadvantage-die'>&mdash;</span></th>";
	dBench += "<th class='text-center w-15 og-nowrap' scope='col'><span class='text-warning'>&#x25AE;</span> <span id='benchmark-difficulty-hope-die'>&mdash;</span> +<span id='benchmark-difficulty-fear-die'></span></th>";
	dBench += "<th class='text-center w-10 og-nowrap' scope='col'><span class='text-success'>&#x25AE;</span> +<span id='benchmark-difficulty-advantage-die'>&mdash;</span></th>";
	dBench += "<th class='og-nowrap w-50' scope='col' aria-hidden='true'></th>";
	dBench += "</tr>";
	dBench += "</thead>";
	dBench += "<tbody id='difficulty-benchmark-table'>";
	for (i = 5; i < 31; i++) {
		dBench += "<tr>";
		dBench += "<th id='benchmark-" + i + "' class='text-center fw-normal'>" + i + "</th>";
		dBench += "<td id='benchmark-" + i + "-disadvantage' class='text-center'>&mdash;</td>";
		dBench += "<td id='benchmark-" + i + "-duality' class='text-center'>&mdash;</td>";
		dBench += "<td id='benchmark-" + i + "-advantage' class='text-center'>&mdash;</td>";
		dBench += "<td aria-hidden='true'><span id='benchmark-" + i + "-disadvantage-chart' class='d-inline-block bg-danger' style='width: 0%'>&nbsp;</span><span id='benchmark-" + i + "-duality-chart' class='d-inline-block bg-warning' style='width: 0%'>&nbsp;</span><span id='benchmark-" + i + "-advantage-chart' class='d-inline-block bg-success' style='width: 0%'>&nbsp;</span></td>";
		dBench += "</tr>";
	}
	dBench += "</tbody>";
	dBench += "</table></div>";
	// d20 benchmarks
	dBench += "<h4 id='gms-die-benchmarks'>GM's Die Benchmarks<a class='og-h-anchor' href='#gms-die-benchmarks' title='Permalink' aria-hidden='true'></a></h4>";
	dBench += getReferences(["Editorial Addition"]);
	dBench += "<p>The following table shows the success rate of <a href='#define-adversary'>adversary</a> rolls made with the <a href='#define-action-roll'>GM's die</a>. Most of the time, these only include <a href='#define-attack-roll'>attack rolls</a> against a PC's <a href='#define-evasion'>Evasion</a>, or <a href='#define-reaction-roll'>reaction rolls</a>. The table includes rolls made with <a href='#define-advantage'>advantage</a> and <a href='#define-advantage'>disadvantage</a>. To account for a <a href='#define-procedure'>modifier</a>, subtract it from the Evasion to determine the chance of success&mdash;for example, if the PC's Evasion is 13 and the modifier is +3, the chances of success are equal to the listed percentages for Difficulty 10. The actual chance to succeed on a roll is never less than the <a href='#define-action-roll'>critical success</a> rate.</p>";
	dBench += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3 small'>";
	dBench += "<caption>GM's Die Critical Success Rates</caption>";
	dBench += "<thead>";
	dBench += "<tr>";
	dBench += "<th class='text-center w-10' scope='col'>GM's Die</th>";
	dBench += "<th class='text-center w-15 og-nowrap' scope='col'><span class='text-fear'>&#x25AE;</span> Disadvantage</th>";
	dBench += "<th class='text-center w-10 og-nowrap' scope='col'><span class='text-info'>&#x25AE;</span> d20</th>";
	dBench += "<th class='text-center w-15 og-nowrap' scope='col'><span class='text-primary'>&#x25AE;</span> Advantage</th>";
	dBench += "<th class='og-nowrap w-50' scope='col' aria-hidden='true'></th>";
	dBench += "</tr>";
	dBench += "</thead>";
	dBench += "<tbody>";
	dBench += "<tr>";
	dBench += "<th class='text-center fw-normal'>Crit</th>";
	dBench += "<td class='text-center'>0.25%</td>";
	dBench += "<td class='text-center'>5.00%</td>";
	dBench += "<td class='text-center'>10.00%</td>";
	dBench += "<td aria-hidden='true'><span class='d-inline-block bg-fear' style='width: 0.25%'>&nbsp;</span><span class='d-inline-block bg-info' style='width: 4.75%'>&nbsp;</span><span class='d-inline-block bg-primary' style='width: 5%'>&nbsp;</span></td>";
	dBench += "</tr>";
	dBench += "</tbody>";
	dBench += "</table></div>";
	dBench += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3 small'>";
	dBench += "<caption>GM's Die Difficulty Benchmarks</caption>";
	dBench += "<thead>";
	dBench += "<tr>";
	dBench += "<th class='text-center w-10' scope='col'>Difficulty</th>";
	dBench += "<th class='text-center w-15 og-nowrap' scope='col'><span class='text-danger'>&#x25AE;</span> Disadvantage</th>";
	dBench += "<th class='text-center w-10 og-nowrap' scope='col'><span class='text-warning'>&#x25AE;</span> d20</th>";
	dBench += "<th class='text-center w-15 og-nowrap' scope='col'><span class='text-success'>&#x25AE;</span> Advantage</th>";
	dBench += "<th class='og-nowrap w-50' scope='col' aria-hidden='true'></th>";
	dBench += "</tr>";
	dBench += "</thead>";
	dBench += "<tbody>";
	for (i = 1; i < 21; i++) {
		dBench += "<tr>";
		dBench += "<th id='adversary-" + i + "-difficulty' class='text-center fw-normal'>&mdash;</th>";
		dBench += "<td id='adversary-" + i + "-disadvantage-percent' class='text-center'>&mdash;</td>";
		dBench += "<td id='adversary-" + i + "-d20-percent' class='text-center'>&mdash;</td>";
		dBench += "<td id='adversary-" + i + "-advantage-percent' class='text-center'>&mdash;</td>";
		dBench += "<td aria-hidden='true'><span id='adversary-" + i + "-disadvantage-chart' class='d-inline-block bg-danger' style='width: 0%'>&nbsp;</span><span id='adversary-" + i + "-d20-chart' class='d-inline-block bg-warning' style='width: 0%'>&nbsp;</span><span id='adversary-" + i + "-advantage-chart' class='d-inline-block bg-success' style='width: 0%'>&nbsp;</span></td>";
		dBench += "</tr>";
	}
	dBench += "</tbody>";
	dBench += "</table></div>";
	// trait benchmarks
	let tBench = "";
	for (let i = 0; i < traitList.length; i++) {
		tBench += "<div id='define-" + traitList[i].name + "-benchmark'>";
		tBench += "<h4 id='difficulty-benchmarks-" + traitList[i].name + "'>" + traitList[i].label + "<a class='og-h-anchor' href='#difficulty-benchmarks-" + traitList[i].name + "' title='Permalink' aria-hidden='true'></a></h4>";
		tBench += getReferences(traitList[i].pages);
		tBench += "<div class='table-responsive'><table class='table table-light table-striped table-sm mb-3'>";
		tBench += "<caption>Difficulty Benchmarks &mdash; " + traitList[i].label + "</caption>";
		tBench += "<thead>";
		tBench += "<tr>";
		tBench += "<th class='text-center w-10' scope='col'>Roll</th>";
		for (v = 0; v < 3; v++) {
			tBench += "<th class='w-30' scope='col'>" + traitList[i].action[v] + "</th>";
		}
		tBench += "</tr>";
		tBench += "</thead>";
		tBench += "<tbody>";
		for (let row = 1; row < 7; row++) {
			let d = row * 5;
			tBench += "<tr>";
			tBench += "<th class='text-center fw-normal' scope='row'>" + d + "</th>";
			for (col = 0; col < 3; col++) {
				tBench += "<td>";
				if (d == 5) { tBench += traitList[i].roll5[col] }
				if (d == 10) { tBench += traitList[i].roll10[col] }
				if (d == 15) { tBench += traitList[i].roll15[col] }
				if (d == 20) { tBench += traitList[i].roll20[col] }
				if (d == 25) { tBench += traitList[i].roll25[col] }
				if (d == 30) { tBench += traitList[i].roll30[col] }
				tBench += "</td>";
			}
			tBench += "</tr>";
		}
		tBench += "</tbody>";
		tBench += "</table></div>";
		tBench += "</div>";
	}
	dBench += tBench;
	document.getElementById("printDifficultyBenchmarks").innerHTML = dBench;
};
// Clear selections
function deselectHope() {
  document.getElementById('benchmark-hope-d8').classList.remove('btn-hope');
  document.getElementById('benchmark-hope-d10').classList.remove('btn-hope');
  document.getElementById('benchmark-hope-d12').classList.remove('btn-hope');
  document.getElementById('benchmark-hope-d20').classList.remove('btn-hope');
};
function deselectFear() {
  document.getElementById('benchmark-fear-d8').classList.remove('btn-fear');
  document.getElementById('benchmark-fear-d10').classList.remove('btn-fear');
  document.getElementById('benchmark-fear-d12').classList.remove('btn-fear');
  document.getElementById('benchmark-fear-d20').classList.remove('btn-fear');
};
function deselectAdvantage() {
  document.getElementById('benchmark-advantage-d6').classList.remove('btn-advantage');
  document.getElementById('benchmark-advantage-d8').classList.remove('btn-advantage');
  document.getElementById('benchmark-advantage-d10').classList.remove('btn-advantage');
};
function deselectDisadvantage() {
  document.getElementById('benchmark-disadvantage-d6').classList.remove('btn-disadvantage');
  document.getElementById('benchmark-disadvantage-d8').classList.remove('btn-disadvantage');
  document.getElementById('benchmark-disadvantage-d10').classList.remove('btn-disadvantage');
};
// Making Selections
function setHdie(x) {
  deselectHope();
  Hdie = x;
  if (Hdie == 8) { document.getElementById("benchmark-hope-d8").classList.add('btn-hope'); }
  if (Hdie == 10) { document.getElementById("benchmark-hope-d10").classList.add('btn-hope'); }
  if (Hdie == 12) { document.getElementById("benchmark-hope-d12").classList.add('btn-hope'); }
  if (Hdie == 20) { document.getElementById("benchmark-hope-d20").classList.add('btn-hope'); }
  calcHopeFear();
  calcDifficulty();
};
function setFdie(x) {
  deselectFear();
  Fdie = x;
  if (Fdie == 8) { document.getElementById("benchmark-fear-d8").classList.add('btn-fear'); }
  if (Fdie == 10) { document.getElementById("benchmark-fear-d10").classList.add('btn-fear'); }
  if (Fdie == 12) { document.getElementById("benchmark-fear-d12").classList.add('btn-fear'); }
  if (Fdie == 20) { document.getElementById("benchmark-fear-d20").classList.add('btn-fear'); }
  calcHopeFear();
  calcDifficulty();
};
function setAdie(x) {
  deselectAdvantage();
  Adie = x;
  if (Adie == 6) { document.getElementById("benchmark-advantage-d6").classList.add('btn-advantage'); }
  if (Adie == 8) { document.getElementById("benchmark-advantage-d8").classList.add('btn-advantage'); }
  if (Adie == 10) { document.getElementById("benchmark-advantage-d10").classList.add('btn-advantage'); }
  calcDifficulty();
};
function setDdie(x) {
  deselectDisadvantage();
  Ddie = x;
  if (Ddie == 6) { document.getElementById("benchmark-disadvantage-d6").classList.add('btn-disadvantage'); }
  if (Ddie == 8) { document.getElementById("benchmark-disadvantage-d8").classList.add('btn-disadvantage'); }
  if (Ddie == 10) { document.getElementById("benchmark-disadvantage-d10").classList.add('btn-disadvantage'); }
  calcDifficulty();
};
function calcHopeFear() {
  var H = 0;
  var F = 0;
  var D = 0;
  var C = 0;
  // detrmine total duality dice outcomes (denominator)
  D = Hdie * Fdie;
  // determine smaller die to set crit, hope, and fear outcomes (numerators)
  if (Hdie >= Fdie) {
    C = Fdie;
    for (let i = 0; i < Fdie; i++) {
      F = F + i;
    }
    H = D - C - F;
  }
  else if (Fdie > Hdie) {
    C = Hdie;
    for (let i = 0; i < Hdie; i++) {
      H = H + i;
    }
    F = D - C - H;
  }
  // calculate percentages
  dualityDiceFear = getChance(F, D);
  dualityDiceHope = getChance(H, D);
  dualityDiceCrit = getChance(C, D);
  // populate table headers
  document.getElementById('benchmark-hope-die').innerHTML = "d" + Hdie;
  document.getElementById('benchmark-fear-die').innerHTML = "d" + Fdie;
  // populate percentages
  document.getElementById('benchmark-fear-percent').innerHTML = dualityDiceFear;
  document.getElementById('benchmark-hope-percent').innerHTML = dualityDiceHope;
  document.getElementById('benchmark-crit-percent').innerHTML = dualityDiceCrit;
  // populate chart widths
  $("#benchmark-hope-chart").css("width", dualityDiceHope);
  $("#benchmark-fear-chart").css("width", dualityDiceFear);
  $("#benchmark-crit-chart").css("width", dualityDiceCrit);
};
// Calculate Difficulty Benchmarks
function calcDifficulty() {
  // populate table headers
  document.getElementById('benchmark-difficulty-hope-die').innerHTML = "d" + Hdie;
  document.getElementById('benchmark-difficulty-fear-die').innerHTML = "d" + Fdie;
  document.getElementById('benchmark-difficulty-advantage-die').innerHTML = "d" + Adie;
  document.getElementById('benchmark-difficulty-disadvantage-die').innerHTML = "d" + Ddie;
  // populate rows
  for (let i = 5; i < 31; i++) {
    difficultyBenchmark(i);
  }
};
function difficultyBenchmark(x) {
  // gather row data
  var rowDisadvantage = calcDisadvantage(x-1);
  var rowDuality = calcDuality(x-1);
  var rowAdvantage = calcAdvantage(x-1);
  // string rows
  var xDifficulty = "benchmark-" + x;
  var xDisadvantage = "benchmark-" + x + "-disadvantage";
  var xDuality = "benchmark-" + x + "-duality";
  var xAdvantage = "benchmark-" + x + "-advantage";
  // populate row
  document.getElementById(xDifficulty).innerHTML = x;
  document.getElementById(xDisadvantage).innerHTML = getChance(rowDisadvantage,100);
  document.getElementById(xDuality).innerHTML = getChance(rowDuality,100);
  document.getElementById(xAdvantage).innerHTML = getChance(rowAdvantage,100);
  // populate chart by difference
  $("#benchmark-" + x + "-disadvantage-chart").css("width", getChance((rowDisadvantage),100));
  $("#benchmark-" + x + "-duality-chart").css("width", getChance((rowDuality - rowDisadvantage),100));
  $("#benchmark-" + x + "-advantage-chart").css("width", getChance((rowAdvantage - rowDuality),100));
};
function calcDisadvantage(x) {
  var dadv = 0;
  if (Hdie == 8) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d8d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d8d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d8d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d10d8dadvd6[x];}
      if (Ddie == 8) {dadv = d10d8dadvd8[x];}
      if (Ddie == 10) {dadv = d10d8dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d12d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d8dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d8dadvd10[x];}
    }
  }
  else if (Hdie == 10) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d10d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d10d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d10d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d10d10dadvd6[x];}
      else if (Ddie == 8) {dadv = d10d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d10d10dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d12d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d12dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d10advd6[x];}
      else if (Ddie == 8) {dadv = d20d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d10dadvd10[x];}
    }
  }
  else if (Hdie == 12) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d12d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d12d10dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d10dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d12d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d12d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d12d12dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d12dadvd10[x];}
    }
  }
  else if (Hdie == 20) {
    if (Fdie == 8) {
      if (Ddie == 6) {dadv = d20d8dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d8dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d8dadvd10[x];}
    }
    else if (Fdie == 10) {
      if (Ddie == 6) {dadv = d20d10dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d10dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d10dadvd10[x];}
    }
    else if (Fdie == 12) {
      if (Ddie == 6) {dadv = d20d12dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d12dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d12dadvd10[x];}
    }
    else if (Fdie == 20) {
      if (Ddie == 6) {dadv = d20d20dadvd6[x];}
      else if (Ddie == 8) {dadv = d20d20dadvd8[x];}
      else if (Ddie == 10) {dadv = d20d20dadvd10[x];}
    }
  }
  return dadv;
};
function calcDuality(x) {
  var dd = 0;
  if (Hdie == 8) {
    if (Fdie == 8) {dd = d8d8[x];}
    else if (Fdie == 10) {dd = d10d8[x];}
    else if (Fdie == 12) {dd = d12d8[x];}
    else if (Fdie == 20) {dd = d20d8[x];}
  }
  else if (Hdie == 10) {
    if (Fdie == 8) {dd = d10d8[x];}
    else if (Fdie == 10) {dd = d10d10[x];}
    else if (Fdie == 12) {dd = d12d10[x];}
    else if (Fdie == 20) {dd = d20d10[x];}
  }
  else if (Hdie == 12) {
    if (Fdie == 8) {dd = d12d8[x];}
    else if (Fdie == 10) {dd = d12d10[x];}
    else if (Fdie == 12) {dd = d12d12[x];}
    else if (Fdie == 20) {dd = d20d12[x];}
  }
  else if (Hdie == 20) {
    if (Fdie == 8) {dd = d20d8[x];}
    else if (Fdie == 10) {dd = d20d10[x];}
    else if (Fdie == 12) {dd = d20d12[x];}
    else if (Fdie == 20) {dd = d20d20[x];}
  }
  return dd;  
};
function calcAdvantage(x) {
  var adv = 0;
  if (Hdie == 8) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d8d8d6[x];}
      else if (Adie == 8) {adv = d8d8d8[x];}
      else if (Adie == 10) {adv = d10d8d8[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d10d8d6[x];}
      else if (Adie == 8) {adv = d8d8d8[x];}
      else if (Adie == 10) {adv = d10d10d8[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d12d8d6[x];}
      else if (Adie == 8) {adv = d12d8d8[x];}
      else if (Adie == 10) {adv = d12d10d8[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d8d6[x];}
      else if (Adie == 8) {adv = d20d8d8[x];}
      else if (Adie == 10) {adv = d20d10d8[x];}
    }
  }
  else if (Hdie == 10) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d10d8d6[x];}
      else if (Adie == 8) {adv = d10d8d8[x];}
      else if (Adie == 10) {adv = d10d10d8[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d10d10d6[x];}
      else if (Adie == 8) {adv = d10d10d8[x];}
      else if (Adie == 10) {adv = d10d10d10[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d12d10d6[x];}
      else if (Adie == 8) {adv = d12d10d8[x];}
      else if (Adie == 10) {adv = d12d10d10[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d10d6[x];}
      else if (Adie == 8) {adv = d20d10d8[x];}
      else if (Adie == 10) {adv = d20d10d10[x];}
    }
  }
  else if (Hdie == 12) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d12d8d6[x];}
      else if (Adie == 8) {adv = d12d8d8[x];}
      else if (Adie == 10) {adv = d12d10d10[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d12d10d6[x];}
      else if (Adie == 8) {adv = d12d10d8[x];}
      else if (Adie == 10) {adv = d12d10d10[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d12d12d6[x];}
      else if (Adie == 8) {adv = d12d12d8[x];}
      else if (Adie == 10) {adv = d12d12d10[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d12d6[x];}
      else if (Adie == 8) {adv = d20d12d8[x];}
      else if (Adie == 10) {adv = d20d12d10[x];}
    }
  }
  else if (Hdie == 20) {
    if (Fdie == 8) {
      if (Adie == 6) {adv = d20d8d6[x];}
      else if (Adie == 8) {adv = d20d8d8[x];}
      else if (Adie == 10) {adv = d20d10d10[x];}
    }
    else if (Fdie == 10) {
      if (Adie == 6) {adv = d20d10d6[x];}
      else if (Adie == 8) {adv = d20d10d8[x];}
      else if (Adie == 10) {adv = d20d10d10[x];}
    }
    else if (Fdie == 12) {
      if (Adie == 6) {adv = d20d12d6[x];}
      else if (Adie == 8) {adv = d20d12d8[x];}
      else if (Adie == 10) {adv = d20d12d10[x];}
    }
    else if (Fdie == 20) {
      if (Adie == 6) {adv = d20d20d6[x];}
      else if (Adie == 8) {adv = d20d20d8[x];}
      else if (Adie == 10) {adv = d20d20d10[x];}
    }
  }
  return adv;
};
// Populate Adversary Benchmarks
function populateAdversaryBenchmarks() {
  for (let i = 1; i < 21; i++) {
    populateAdversaryBenchmarkRow(i);
  }
};
function populateAdversaryBenchmarkRow(x) {
  // gather row data
  var rowDADV = calcAdversaryDisadvantage(x-1);
  var rowD20 = calcAdversaryD20(x-1);
  var rowADV = calcAdversaryAdvantage(x-1);
  // string rows
  var xAdversaryDifficulty = "adversary-" + x + "-difficulty";
  var xAdversaryDisadvantage = "adversary-" + x + "-disadvantage-percent";
  var xAdversaryDuality = "adversary-" + x + "-d20-percent";
  var xAdversaryAdvantage = "adversary-" + x + "-advantage-percent";
  // populate row
  document.getElementById(xAdversaryDifficulty).innerHTML = x;
  document.getElementById(xAdversaryDisadvantage).innerHTML = getChance(rowDADV,100);
  document.getElementById(xAdversaryDuality).innerHTML = getChance(rowD20,100);
  document.getElementById(xAdversaryAdvantage).innerHTML = getChance(rowADV,100);
  // populate chart by difference
  $("#adversary-" + x + "-disadvantage-chart").css("width", getChance((rowDADV),100));
  $("#adversary-" + x + "-d20-chart").css("width", getChance((rowD20 - rowDADV),100));
  $("#adversary-" + x + "-advantage-chart").css("width", getChance((rowADV - rowD20),100));
};
function calcAdversaryDisadvantage(x) {
  return d20dadv[x];
};
function calcAdversaryD20(x) {
  return d20[x];
};
function calcAdversaryAdvantage(x) {
  return d20adv[x];
};
// adversaries
function printAdversaries() {
	let iAdv = "";
	iAdv += "<h3 id='adversary-stat-blocks'>Adversary Stat Blocks<a class='og-h-anchor' href='#adversary-stat-blocks' title='Permalink' aria-hidden='true'></a></h3>";
	iAdv += getReferences(["Page 209"]);
	iAdv += "<div class='alert ps-4 pb-0 og-omit'>";
	for (t = 1; t < 5; t++) {
		iAdv += "<h4 id='adversaries-by-tier-" + t + "'>Tier " + t + " (" + getTierLevels(t) + ")<a class='og-h-anchor' href='#adversaries-by-tier-" + t + "' title='Permalink' aria-hidden='true'></a></h4>";
		if (t < 4) {
			iAdv += "<h5 class='h6'>People</h5>";
			iAdv += "<ul class='list-unstyled og-qr'>";
			for (let a = 0; a < adversaryList.length; a++) {
				if (adversaryList[a].tier == t && adversaryList[a].category == "Person") {
					iAdv += "<li><a href='#define-adversary-" + adversaryList[a].name + "'>" + adversaryList[a].label + "</a> <em>(" + adversaryList[a].type + ")</em></li>";
				}
			}
		}
		iAdv += "</ul>";
		iAdv += "<h5 class='h6'>Animals and Monsters</h5>";
		iAdv += "<ul class='list-unstyled og-qr'>";
		for (let a = 0; a < adversaryList.length; a++) {
			if (adversaryList[a].tier == t && adversaryList[a].category == "Monster") {
				iAdv += "<li><a href='#define-adversary-" + adversaryList[a].name + "'>" + adversaryList[a].label + "</a> <em>(" + adversaryList[a].type + ")</em></li>";
			}
		}
		iAdv += "</ul>";
		iAdv += "<h5 class='h6'>Supernatural Beings</h5>";
		iAdv += "<ul class='list-unstyled og-qr'>";
		for (let a = 0; a < adversaryList.length; a++) {
			if (adversaryList[a].tier == t && adversaryList[a].category == "Supernatural") {
				iAdv += "<li><a href='#define-adversary-" + adversaryList[a].name + "'>" + adversaryList[a].label + "</a> <em>(" + adversaryList[a].type + ")</em></li>";
			}
		}
		iAdv += "</ul>";
	}
	iAdv += "</div>";
	// print statblocks
	iAdv += "<h4 id='adversary-stat-blocks-listings'>Adversary Stat Blocks in Alphabetical Order<a class='og-h-anchor' href='#adversary-stat-blocks-listings' title='Permalink' aria-hidden='true'></a></h4>";
	iAdv += "<div class='row'>";
	for (let a = 0; a < adversaryList.length; a++) {
		iAdv += "<div class='col-12 col-md-6'><div class='og-statblock'><div id='define-adversary-" + adversaryList[a].name + "'>";
		iAdv += "<h5 id='adversary-" + adversaryList[a].name + "'>" + adversaryList[a].label + "<a class='og-h-anchor' href='#adversary-" + adversaryList[a].name + "' title='Permalink' aria-hidden='true'></a></h5>"
		iAdv += getReferences(adversaryList[a].pages);
		iAdv += "<ul class='list-unstyled'>";
		iAdv += "<li class='fw-bold fst-italic'>Tier " + adversaryList[a].tier + " <a href='#define-adversary-type'>" + adversaryList[a].type + "</a>";
		if (adversaryList[a].type == "Horde") {
			iAdv += " (" + adversaryList[a].hphorde + "/HP)";
		}
		iAdv += "</li>";
		iAdv += "<li class='fst-italic'>" + adversaryList[a].summary + "</li>";
		iAdv += "<li><strong>Motives and Tactics:</strong> " + adversaryList[a].motive + "</li>";
		iAdv += "</ul>";
		iAdv += "<div class='og-topbar'><ul class='og-list-inline'>";
		iAdv += "<li><strong>Difficulty:</strong> " + adversaryList[a].difficulty + "</li>";
		iAdv += "<li><strong>Thresholds:</strong> ";
		if (adversaryList[a].thresholdmajor < 1) { iAdv += "None" } 
		else { 
			iAdv += adversaryList[a].thresholdmajor + "/";
			if (adversaryList[a].thresholdsevere < 1) { iAdv += "None"; }
			else { iAdv += adversaryList[a].thresholdsevere; }
		}
		iAdv += "</li>";
		iAdv += "<li><strong>HP:</strong> " + adversaryList[a].hp + "</li>";
		iAdv += "<li><strong>Stress:</strong> " + adversaryList[a].stress + "</li>";
		iAdv += "<li class='d-block'><strong>ATK:</strong> ";
		if (adversaryList[a].attackbonus == 2.4) { iAdv += "2d4"; } // in case of irregular attack bonuses like the Outer Realms Abomination, use a decimal places detection for now
		else { iAdv += getNum(adversaryList[a].attackbonus); }
		iAdv += "<span class='og-divider'><strong>" + adversaryList[a].attacklabel + ":</strong> <a href='#define-range'>" + adversaryList[a].attackrange + "</a></span><span class='og-divider'>" + adversaryList[a].attackdamage + " <a href='#define-damage-type'>" + adversaryList[a].attackdamagetype + "</a></span></li>";
		iAdv +=  "</ul></div>";
		if (adversaryList[a].experiences != undefined) {
			iAdv += "<div class='og-topbar2'>";
			iAdv += "<p><strong>Experience:</strong> " + adversaryList[a].experiences + "</p>";
			iAdv += "</div>";
		} else {
			iAdv += "<div class='mt-3'></div>";
		}
		iAdv += "<h6>Features</h6>";
		iAdv += "<ul class='list-unstyled og-list-hang'>";
		for (let afeat = 0; afeat < adversaryList[a].features.length; afeat++){
			iAdv += "<li>" + adversaryList[a].features[afeat] + "</li>";
		}
		iAdv += "</ul>";
		iAdv += "</div></div>";
		if (adversaryList[a].ednote != "") {
			iAdv += getEdnote(adversaryList[a].ednote);
		}
		iAdv += "</div>";
	}
	iAdv += "</div><hr>";
	document.getElementById("printAdversaries").innerHTML = iAdv;
};
// environments
function printEnvironments() {
	let iEnv = "";
	iEnv += "<h3 id='environment-stat-blocks'>Environment Stat Blocks by Tier<a class='og-h-anchor' href='#environment-stat-blocks' title='Permalink' aria-hidden='true'></a></h3>";
	iEnv += getReferences(["Page 242"]);
	iEnv += "<div class='alert ps-4 pb-0 og-omit'>";
	for (let t = 1; t < 5; t++) {
		iEnv += "<h4 class='h6'>Tier " + t + " (" + getTierLevels(t) + ")</h4>";
		iEnv += "<ul class='list-unstyled og-qr'>";
		for (e = 0; e < environmentList.length; e++) {
			if (environmentList[e].tier == t) {
				iEnv += "<li><a href='#define-environment-" + environmentList[e].name + "'>" + environmentList[e].label + "</a> <em>(" + environmentList[e].type + ")</em></li>";
			}
		}
		iEnv += "</ul>";
	}
	iEnv += "</div>";
	iEnv += "<h4 id='environments-listings'>Environment Stat Blocks in Alphabetical Order<a class='og-h-anchor' href='#environments-listings' title='Permalink' aria-hidden='true'></a></h4>";
	// print env statblocks
	let envStats = "";
	envStats += "<div class='row'>";
	for (let e = 0; e < environmentList.length; e++) {
		let envSB = "";
		envSB += "<div class='col-12 col-md-6'>"; // open col
		envSB += "<div class='og-statblock'>";  // open statblock
		envSB += "<div id='define-environment-" + environmentList[e].name + "'>";  // open def
		envSB += "<h5 id='environment-" + environmentList[e].name + "'>" + environmentList[e].label + "<a class='og-h-anchor' href='#environment-" + environmentList[e].name + "' title='Permalink' aria-hidden='true'></a></h5>";
		envSB += getReferences(environmentList[e].pages);
		envSB += "<ul class='list-unstyled'>";
		envSB += "<li class='fw-bold fst-italic'>Tier " + environmentList[e].tier + " <a href='#define-environment-type'>" + environmentList[e].type + "</a></li>";
		envSB += "<li class='fst-italic'>" + environmentList[e].summary + "</li>";
		envSB += "<li><strong>Impulses:</strong> " + environmentList[e].impulses + "</li>";
		envSB += "</ul>";
		envSB += "<div class='og-topbar'>";
		envSB += "<ul class='og-list-inline'>";
		envSB += "<li><strong>Difficulty:</strong> " + environmentList[e].difficulty + "</li>";
		envSB += "<li class='d-block'><strong>Potential Adversaries:</strong> " + environmentList[e].adversaries + "</li>";
		envSB += "</ul>";
		envSB += "<div class='mt-3'></div>";
		envSB += "</div>";
		envSB += "<h6>Features</h6>";
		envSB += "<ul class='list-unstyled og-list-hang'>";
		for (let efeat = 0; efeat < environmentList[e].features.length; efeat++) {
			envSB += "<li>" + environmentList[e].features[efeat] + "</li>";
		}
		envSB += "</ul>";
		envSB += "</div>"; // close def
		envSB += "</div>"; // close statblock
		envSB += "</div>"; // close col
		envStats += envSB;
	}
	envStats += "</div>"; // close row
	envStats += "<hr>"; // divide and move on
	// sum sections and populate
	iEnv = iEnv + envStats;
	document.getElementById("printEnvironments").innerHTML = iEnv;
};

function ccRandomize() {
	// randomize character options
	let mixbonus = 3 // increase the chance of a mixed ancestry
	let aRandom = Math.floor(Math.random() * (ancestryList.length + mixbonus)) // randomize
	if (aRandom > ancestryList.length) { aRandom = ancestryList.length } // compare and set mixed ancestry if bonus range is rolled
	document.getElementById("ccChooseAncestry").value = aRandom;
	ccChooseAncestry()
	if (ccUserAncestry == ancestryList.length) {
		document.getElementById("ccChooseAncestryMixed1").value = Math.floor(Math.random() * (ancestryList.length));
		ccChooseAncestryMixed1();
		document.getElementById("ccChooseAncestryMixed2").value = Math.floor(Math.random() * (ancestryList.length));
		ccChooseAncestryMixed2();
		// just in case, reroll once in case of a match
		if (ccUserAncestryMixed1 == ccUserAncestryMixed2) {
				document.getElementById("ccChooseAncestryMixed2").value = Math.floor(Math.random() * (ancestryList.length));
				ccChooseAncestryMixed2();
		}
	}
	document.getElementById("ccChooseCommunity").value = Math.floor(Math.random() * communityList.length);
	ccChooseCommunity();
	document.getElementById("ccChooseClass").value = Math.floor(Math.random() * classesList.length);
	ccChooseClass();
	document.getElementById("ccChooseSubclass").value = Math.floor(Math.random() * classesList[ccUserClass].subclasses.length);
	ccChooseSubclass();
	// randomize class item
	ccUserClassItem = Math.floor(Math.random() * 2);
	// randomize consumable choice
	let rPotion = Math.floor(Math.random() * 2);
	document.getElementById("ccChooseConsumable").value = 6 + rPotion;
	ccChooseConsumable();
	// random experiences
	let pcDetail = "";
	pcDetail += "<h5 class='h6'>Experiences and Description</h5>";
	pcDetail += "<ul class='og-list-inline og-ref og-omit'>";
	let eCat1 = Math.floor(Math.random() * 5);
	let rExp1 = "";
	if ( eCat1 == 0) { rExp1 = experiencesList[0].backgrounds[Math.floor(Math.random() * experiencesList[0].backgrounds.length)] }
	if ( eCat1 == 1) { rExp1 = experiencesList[0].characteristics[Math.floor(Math.random() * experiencesList[0].characteristics.length)] }
	if ( eCat1 == 2) { rExp1 = experiencesList[0].specialties[Math.floor(Math.random() * experiencesList[0].specialties.length)] }
	if ( eCat1 == 3) { rExp1 = experiencesList[0].skills[Math.floor(Math.random() * experiencesList[0].skills.length)] }
	if ( eCat1 == 4) { rExp1 = experiencesList[0].phrases[Math.floor(Math.random() * experiencesList[0].phrases.length)] }
	pcDetail += "<li><a href='#define-experience'>" + rExp1 + "</a> +2<li>";
	let eCat2 = Math.floor(Math.random() * 4);
	if (eCat2 == eCat1) { eCat2 = eCat2++; }
	let rExp2 = "";
	if ( eCat2 == 0) { rExp2 = experiencesList[0].backgrounds[Math.floor(Math.random() * experiencesList[0].backgrounds.length)] }
	if ( eCat2 == 1) { rExp2 = experiencesList[0].characteristics[Math.floor(Math.random() * experiencesList[0].characteristics.length)] }
	if ( eCat2 == 2) { rExp2 = experiencesList[0].specialties[Math.floor(Math.random() * experiencesList[0].specialties.length)] }
	if ( eCat2 == 3) { rExp2 = experiencesList[0].skills[Math.floor(Math.random() * experiencesList[0].skills.length)] }
	if ( eCat2 == 4) { rExp2 = experiencesList[0].phrases[Math.floor(Math.random() * experiencesList[0].phrases.length)] }
	pcDetail += "<a href='#define-experience'>" + rExp2 + "</a> +2</li>";
	pcDetail += "<li>" + classesList[ccUserClass].clothes[Math.floor(Math.random() * classesList[ccUserClass].clothes.length)] + " clothes</li>";
	pcDetail += "<li>eyes like " + descriptionList[0].eyes[Math.floor(Math.random() * descriptionList[0].eyes.length)] + "</li>";
	pcDetail += "<li>" + descriptionList[0].body[Math.floor(Math.random() * descriptionList[0].body.length)] + " body</li>";
	pcDetail += "<li>skin like " + descriptionList[0].skin[Math.floor(Math.random() * descriptionList[0].skin.length)] + "</li>";
	pcDetail += "<li>" + classesList[ccUserClass].attitudes[Math.floor(Math.random() * classesList[ccUserClass].attitudes.length)] + " attitude</li>";
	pcDetail += "</ul>";
	document.getElementById("ccRandomOutputDetail").innerHTML = pcDetail;
	refreshTooltips();
};

function dyslexiaMode() {

	if (document.getElementById("dyslexiaSwitch").checked == false) {
		document.getElementById("body-content").classList.remove("dyslexia");
		const col6 = document.querySelectorAll('.null6');
		col6.forEach(element => {
			element.classList.add("col-md-6");
			element.classList.remove("null6");
		});
		const col4 = document.querySelectorAll('.null4');
		col4.forEach(element => {
			element.classList.add("col-lg-4");
			element.classList.remove("null4");
		});
		readerPreference = "standard";
		localStorage.setItem('readerMode', 'standard');
		// reset domain card widths
		document.getElementById("ccDomainCard1Display").classList.add("col-md-6") 
		document.getElementById("ccDomainCard2Display").classList.add("col-md-6") 
		if (subclassList[ccUserSubclass].label == "School of Knowledge") { 
			document.getElementById("ccDomainCard1Display").classList.remove("col-md-6") 
			document.getElementById("ccDomainCard2Display").classList.remove("col-md-6") 
			document.getElementById("ccDomainCard1Display").classList.add("col-md-4") 
			document.getElementById("ccDomainCard2Display").classList.add("col-md-4") 
			document.getElementById("ccDomainCard3Display").classList.add("col-md-4") 
		}
	}
	else {
		document.getElementById("body-content").classList.add("dyslexia");
		const col6 = document.querySelectorAll('.col-md-6');
		col6.forEach(element => {
			element.classList.add("null6");
			element.classList.remove("col-md-6");
		});
		const col4 = document.querySelectorAll('.col-lg-4');
		col4.forEach(element => {
			element.classList.add("null6");
			element.classList.remove("col-lg-4");
		});
		readerPreference = "dyslexic";
		localStorage.setItem('readerMode', 'dyslexic');
		// reset domain card widths
		document.getElementById("ccDomainCard1Display").classList.remove("col-md-6") 
		document.getElementById("ccDomainCard2Display").classList.remove("col-md-6") 
		if (subclassList[ccUserSubclass].label == "School of Knowledge") { 
			document.getElementById("ccDomainCard1Display").classList.remove("col-md-4") 
			document.getElementById("ccDomainCard2Display").classList.remove("col-md-4") 
			document.getElementById("ccDomainCard3Display").classList.remove("col-md-4") 
		}
	}
};

// INITIALIZE ON LOAD
window.addEventListener("load", (event) => { 
	// dyslexiamode (load preference)
	if (readerPreference == "dyslexic") { document.getElementById("dyslexiaSwitch").checked = true }
	// dyslexiamode (switch)
	if (document.getElementById("dyslexiaSwitch").checked == true) { dyslexiaMode(); }

	document.querySelector('#dyslexiaSwitch').addEventListener("click", function(event) { dyslexiaMode(); });
	// randomize
	document.querySelector('#ccRandomize').addEventListener("click", function(event) { ccRandomize(); });
	// class
	document.querySelector('#ccChooseClass').addEventListener("change", function() { ccChooseClass(); });
	document.querySelector('#ccChooseSubclass').addEventListener("change", function() { ccChooseSubclass(); });
	// heritage
	document.querySelector('#ccChooseAncestry').addEventListener("change", function() { ccChooseAncestry(); });
	document.querySelector('#ccChooseAncestryMixed1').addEventListener("change", function() { ccChooseAncestryMixed1(); });
	document.querySelector('#ccChooseAncestryMixed2').addEventListener("change", function() { ccChooseAncestryMixed2(); });
	document.querySelector('#ccChooseCommunity').addEventListener("change", function() { ccChooseCommunity(); });
	// equipment
	document.querySelector('#ccChooseWeaponPrimary').addEventListener("change", function() { ccChooseWeapon(1); });
	document.querySelector('#ccChooseWeaponSecondary').addEventListener("change", function() { ccChooseWeapon(2); });
	document.querySelector('#ccChooseArmor').addEventListener("change", function() { ccChooseArmor(); });
	document.querySelector('#ccChooseConsumable').addEventListener("change", function() { ccChooseConsumable(); });
	// domain card
	document.querySelector('#ccChooseDomainCard1').addEventListener("change", function() { ccChooseDomainCard1(); });
	document.querySelector('#ccChooseDomainCard2').addEventListener("change", function() { ccChooseDomainCard2(); });
	document.querySelector('#ccChooseDomainCard3').addEventListener("change", function() { ccChooseDomainCard3(); });
	// experiences
	document.querySelector('#ccChooseExperienceList').addEventListener("change", function() { ccPrintExperienceList(); });
	// cc init
	ccChooseClass();
	ccChooseAncestry();
	ccChooseAncestryMixed1();
	ccChooseAncestryMixed2();
	ccChooseCommunity();
	// default to health potion
	for (i = 0; i < consumableList.length; i++) {
		if (consumableList[i].label == "Minor Health Potion") {
			document.getElementById("ccChooseConsumable").value = i;
			ccChooseConsumable();
		}
	}
	ccPrintExperienceList();
	// d12 rollers
	for (let i = 1; i < 6; i++) {
		document.getElementById("new-random-loot-" + i + "d12").addEventListener("click", function (event) { randomLoot(i,12); });
		document.getElementById("new-random-consumable-" + i + "d12").addEventListener("click", function (event) { randomConsumable(i,12); });
	}
	// d20 rollers
	for (let i = 1; i < 4; i++) {
		document.getElementById("new-random-loot-" + i + "d20").addEventListener("click", function (event) { randomLoot(i,20); });
		document.getElementById("new-random-consumable-" + i + "d20").addEventListener("click", function (event) { randomConsumable(i,20); });
	}
	// Benchmark Hope
	document.getElementById("benchmark-hope-d8").addEventListener("click", function (event) { setHdie(8); });
	document.getElementById("benchmark-hope-d10").addEventListener("click", function (event) { setHdie(10); });
	document.getElementById("benchmark-hope-d12").addEventListener("click", function (event) { setHdie(12); });
	document.getElementById("benchmark-hope-d20").addEventListener("click", function (event) { setHdie(20); });
	// Benchmark Fear
	document.getElementById("benchmark-fear-d8").addEventListener("click", function (event) { setFdie(8); });
	document.getElementById("benchmark-fear-d10").addEventListener("click", function (event) { setFdie(10); });
	document.getElementById("benchmark-fear-d12").addEventListener("click", function (event) { setFdie(12); });
	document.getElementById("benchmark-fear-d20").addEventListener("click", function (event) { setFdie(20); });
	// Benchmark Advantage
	document.getElementById("benchmark-advantage-d6").addEventListener("click", function (event) { setAdie(6); });
	document.getElementById("benchmark-advantage-d8").addEventListener("click", function (event) { setAdie(8); });
	document.getElementById("benchmark-advantage-d10").addEventListener("click", function (event) { setAdie(10); });
	// Benchmark Disadvantage
	document.getElementById("benchmark-disadvantage-d6").addEventListener("click", function (event) { setDdie(6); });
	document.getElementById("benchmark-disadvantage-d8").addEventListener("click", function (event) { setDdie(8); });
	document.getElementById("benchmark-disadvantage-d10").addEventListener("click", function (event) { setDdie(10); });
	// setup
	ccRandomize();
	randomLoot(1,12);
	randomConsumable(1,12);
	populateAdversaryBenchmarks();
	deselectHope();
	setHdie(12);
	setFdie(12);
	setAdie(6);
	setDdie(6);
});

/* CONSTRUCT */
// print character creation assistance
printCC();
// print character options
printClasses();
printDomains();
printDomainCards();
printAncestries();
printCommunities();
printTraits();
printRanges();
// print equipment
printEquipment();
// print gm material
printDifficultyBenchmarks();
printAdversaries();
printEnvironments();
