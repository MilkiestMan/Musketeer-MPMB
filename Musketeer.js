AddSubClass("fighter", "Musketeer", {
	regExpSearch : /^(?=.*(war|fighter|Musketeer|martial))(?=.*master).*$/i,
	subname : "Musketeer",
	fullname : "Musketeer",
	source : [["P", 1000]],
	abilitySave : 2,
	abilitySaveAlt : 2,
	features : {
		"subclassfeature3" : {
			name : "Daring Strikes",
			source : [["P", 1000]],
			minlevel : 3,
			description : "\n   " + "You trained with the blade, becoming an expert swordsman learning to attack the weaknessess of your enemies. You learn two Daring Strikes of your choice." + "\n   " + "Once per turn, when you attack with a melee finesse weapon, as part of the attack action, you may apply one of your Daring Strike options. You may decide to use this feature when you hit, unless the option doesn't involve an attack roll. You have four uses of this ability and gain all expended uses of it upon a long rest. You gain additional Daring Strikes at levels in this class: 7th, 10th, 15th, 18th. You also gain additional uses of this ability at levels 7 and 15. Some of your daring strikes require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows: 8+ your proficency bonus + your Strength or Dexterity modifer.",
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Daring Strikes",
			source : [["P", 1000]],
			minlevel : 3,
			description : "\n   " + 'Use the "Choose Feature" button above to add a Daring Strike to the third page' + "\n   " + "I can use a Daring Strike by expending a useage (only one Daring Strike per attack)",
			additional : levels.map(function (n) {
				return n < 3 ? "" : (n < 7 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9) + " known";
			}),
			extraname : "Daring Strike",
			extrachoices : ["Broom Strikes", "Circle Swing", "Clash", "Eye Thrust", "Mixed Martial Combatant", "Pushing the Advance", "Strike the Knee", "Vena Aperta",],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9;
			}),
			"broom Strikes" : {
				name : "Broom Strikes",
				source : [["P", 1000]],
				description : "\n   " + "While taking the disengage action, you may choose to make an attack, swinging your weapon in a sweeping motion back and forth to keep your opponent at bay.",
				action : ["Disengage",]
			},
			"circle Swing" : {
				name : "Circle Swing",
				source : [["P", 1000]],
				description : "\n   " + "Inplace of your attack action, you may swing your sword in a circle around you attacking all adjacent." + "\n   " + "creatures. You make separate attack rolls for each individual creature."
			},
			"clash" : {
				name : "Clash",
				source : [["P", 1000]],
				description : "\n   " + "You clash and lock melee weapons against a foe holding both you and your opponent within 5ft of each other." + "\n   " + "You may attempt to shove your opponent using Dexterity (Acrobatics) or Strength (Athletics) contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, your opponent has a -2 to their AC until the start of their next turn. The target must be no more than one size larger or smaller than you."
			},
			"eye thrust" : {
				name : "Eye Thrust",
				source : [["P", 1000]],
				description : "\n   " + "You thrust your weapon forward attempting to poke the eye of a creature, temporarily blinding it, dealing an additional 1d6 damage. The creature must make a Dexterity saving throw or otherwise be blinded for until the end of their next turn. On a successful save, they take half damage and avoid being blinded."
			},
			"mixed martial combatant" : {
				name : "Mixed Martial Combatant",
				source : [["P", 1000]],
				description : "\n   " + "Once per turn when you hit a creature with a melee weapon attack, you can activate this ability and gain advantage on your next ranged attack in the same round.",
				action : ["bonus action", ""]
			},
			"pushing the advance" : {
				name : "Pushing the Advance",
				source : [["P", 1000]],
				description : "\n   " + "When you hit a creature with a melee weapon attack, you may perform this Daring Strike, pushing your opponent back five feet." + "\n   " + "You make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check. The target must be no more than one size larger or smaller than you."
			},
			"strike the knee" : {
				name : "Strike the Knee",
				source : [["P", 1000]],
				description : "\n   " + "You drop low, piercing the knee of your opponent doing an additional 2d6 damage." + "\n   " + "The creature must make a Constitution saving throw or otherwise have their movement reduced by half for until the end of their next turn. On a successful save, they take half damage and don’t have their movement reduced."
			},
			"vena aperta" : {
				name : "Vena Aperta",
				source : [["P", 1000]],
				description : "\n   " + "You strike at a vein attempting to leave the creature bleeding, dealing an additional 1d4 damage. The creature must make a Constitution saving throw or otherwise begin taking 1d6 damage at the beginning of their turn." + "\n   " + "At the start of each of its turns, the creature can make another saving throw. On a success, the effect ends. The effect ends after a minute."
		},
		"subclassfeature3.2" : {
			name : "Musketeer Training",
			source : [["P", 1000]],
			minlevel : 3,
			description : "\n   " + "You gain proficiency with firearms and gain a proficiency in Acrobatics if you did not already have it.",
			skillstxt : "Proficiency with one Acrobatics.",
			weaponProfs : [["Firearms", 1]]
		},
		"subclassfeature7" : {
			name : "Point Blank Shot",
			source : [["P", 1000]],
			minlevel : 7,
			description : "\n   " + "Your further experience and calmness under pressure has taught you to be able to make a ranged attack while you are within 5 feet of a hostile creature without imposing disadvantage on your attack."
		},
		"subclassfeature7.2" : {
			name : "Reflexive Reload",
			source : [["P", 1000]],
			minlevel : 7,
			description : "\n   " + "At 7th level, you gain the ability to Reload and Load firearms as a bonus action. Additionally, you may stow a held firearm and draw another as part of the same object interaction during your turn."
		},
		"subclassfeature10" : {
			name : "Economic Osmosis",
			source : [["P", 1000]],
			minlevel : 10,
			description : "\n   " + "At 10th level, you may choose one of the following options." + "\n   " + " Thief Taker, You gain the capacity from your exploits against thieves, learning what they target and the approximate value of these things. You gain advantage on checks to estimate the value of items and magic items up to Rare. You further learn how to read the symbols of Thieves used in Thieves Cant. Mercantile Savant, Spending time around merchants and other traders has given you unique insight into the transport of goods giving you the capacity to estimate the cost of travel as well as the ability to estimate the generally most expensive items or any specialty goods the local area may contain. You learn a Standard Language of your choice. Artisanal Ace Your long conversations into the night with other travellers of the road, and clients has granted you particular insight into the inner workings of certain professions. You gain proficiency with one set of artisan tools of your choice. ",
		},
		"subclassfeature15" : {
			name : "Fearless",
			source : [["P", 1000]],
			minlevel : 15,
			description : "\n   " + "At 15th level, you’ve become hardened to those that strike fear into the masses, becoming immune to the frightened condition."
		},
		"subclassfeature18" : {
			name : "Tenacity",
			source : [["P", 1000]],
			minlevel : 15,
			description : "\n   " + "At 18th level your tenacity has driven you far, at the start of combat, if you have no uses of your Daring Strikes left, you regain one use. "
		}
	}
},});
