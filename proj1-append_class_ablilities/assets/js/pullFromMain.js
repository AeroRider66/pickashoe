const buttonEL = document.getElementById('clickMe');
const information = document.getElementById('information');
const raceHuman = document.getElementById('raceOne');
const raceDwarf = document.getElementById('raceTwo');
const raceElf = document.getElementById('raceThree');
const raceHalfling = document.getElementById('raceFour');
const classFighter = document.getElementById('classOne');
const classBarbarian = document.getElementById('classTwo');
const classWizard = document.getElementById('classThree');
const classRanger = document.getElementById('classFour');
const submitBtn = document.getElementById('modelSubmitBtn');

let characterObject = {
    name: '',
    prof: '',
    lang: '',
    traits: ''
} 




//++++++++++++++ START class abilities WIZARD  +++++++++++++++++++++

const wizardSpecificInfoLvl1 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray1) {
        console.log("After json", levelArray1);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray1[0];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray1[0].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray1[0].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const wizardSpecificInfoLvl2 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray2) {
        console.log("After json", levelArray2);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray2[0];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray2[0].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray2[0].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const wizardSpecificInfoLvl3 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray3) {
        console.log("After json", levelArray3);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray3[0];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray3[0].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray3[0].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const wizardSpecificInfoLvl4 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray4) {
        console.log("After json", levelArray4);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray4[0];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray4[0].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray4[0].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const wizardSpecificInfoLvl5 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray5) {
        console.log("After json", levelArray5);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray5[0];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray5[0].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray5[0].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

//+++++++++++++++++++ END class abilites WIZARD +++++++++++++++//

//++++++++++++++ START class abilities RANGER  +++++++++++++++++++++

// const rangerSpecificInfoLvl1 = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/ranger/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levelArray1) {
//         console.log("After json", levelArray1);

//         //tags for HTML
//         const { 
//             level: rangerLevel } 
//         = levelArray1[0];
//         console.log("Ranger Level: ", rangerLevel);
        
//         const {
//             cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
//             = levelArray1[0].spellcasting;
//         console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
//         console.log("Level 1 Spell Slots: ", spellsLevel_1);
//         console.log("Level 2 Spell Slots: ", spellsLevel_2);
//         console.log("Level 3 Spell Slots: ", spellsLevel_3);

//         const {
//             favored_enemies: favoredEnemies, favored_terrain: favoredTerrain } 
//             = levelArray1[0].class_specific;
//             console.log("Favored Enemies: ", favoredEnemies);
//             console.log("Favored Terrain: ", favoredTerrain);
//         }
//     )
// }

// const rangerSpecificInfoLvl2 = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levelArray2) {
//         console.log("After json", levelArray2);

//         //tags for HTML
//         const { 
//             level: rangerLevel } 
//         = levelArray1[0];
//         console.log("Ranger Level: ", rangerLevel);
        
//         const {
//             cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
//             = levelArray1[0].spellcasting;
//         console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
//         console.log("Level 1 Spell Slots: ", spellsLevel_1);
//         console.log("Level 2 Spell Slots: ", spellsLevel_2);
//         console.log("Level 3 Spell Slots: ", spellsLevel_3);

//         const {
//             favored_enemies: favoredEnemies, favored_terrain: favoredTerrain } 
//             = levelArray1[0].class_specific;
//             console.log("Favored Enemies: ", favoredEnemies);
//             console.log("Favored Terrain: ", favoredTerrain);
//         }
//     )
// }

// const rangerSpecificInfoLvl3 = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levelArray3) {
//         console.log("After json", levelArray3);

//         //tags for HTML
//         const { 
//             level: rangerLevel } 
//         = levelArray1[0];
//         console.log("Ranger Level: ", rangerLevel);
        
//         const {
//             cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
//             = levelArray1[0].spellcasting;
//         console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
//         console.log("Level 1 Spell Slots: ", spellsLevel_1);
//         console.log("Level 2 Spell Slots: ", spellsLevel_2);
//         console.log("Level 3 Spell Slots: ", spellsLevel_3);

//         const {
//             favored_enemies: favoredEnemies, favored_terrain: favoredTerrain } 
//             = levelArray1[0].class_specific;
//             console.log("Favored Enemies: ", favoredEnemies);
//             console.log("Favored Terrain: ", favoredTerrain);
//         }
//     )
// }

// const rangerSpecificInfoLvl4 = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levelArray4) {
//         console.log("After json", levelArray4);

//         //tags for HTML
//         const { 
//             level: rangerLevel } 
//         = levelArray1[0];
//         console.log("Ranger Level: ", rangerLevel);
        
//         const {
//             cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
//             = levelArray1[0].spellcasting;
//         console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
//         console.log("Level 1 Spell Slots: ", spellsLevel_1);
//         console.log("Level 2 Spell Slots: ", spellsLevel_2);
//         console.log("Level 3 Spell Slots: ", spellsLevel_3);

//         const {
//             favored_enemies: favoredEnemies, favored_terrain: favoredTerrain } 
//             = levelArray1[0].class_specific;
//             console.log("Favored Enemies: ", favoredEnemies);
//             console.log("Favored Terrain: ", favoredTerrain);
//         }
//     )
// }

// const classRangerSpecificInfoLvl5 = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levelArray5) {
//         console.log("After json", levelArray5);

//         //tags for HTML
//         const { 
//             level: rangerLevel } 
//         = levelArray1[0];
//         console.log("Ranger Level: ", rangerLevel);
        
//         const {
//             cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
//             = levelArray1[0].spellcasting;
//         console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
//         console.log("Level 1 Spell Slots: ", spellsLevel_1);
//         console.log("Level 2 Spell Slots: ", spellsLevel_2);
//         console.log("Level 3 Spell Slots: ", spellsLevel_3);

//         const {
//             favored_enemies: favoredEnemies, favored_terrain: favoredTerrain } 
//             = levelArray1[0].class_specific;
//             console.log("Favored Enemies: ", favoredEnemies);
//             console.log("Favored Terrain: ", favoredTerrain);
//         }
//     )
// }

//+++++++++++++++++++ END class abilites RANGER +++++++++++++++//






//++++++++++++++++++++++++ DID NOT WORK ++++++++++++++++++++++++++++++
// 

// const classSpecificInfo = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levels) {
//         console.log("After json", levels);

//         // tags for HTML 
//         const informationArea5 = document.getElementById('information5');
//         const level = document.createElement('h3');
//         let cantrips = document.createElement('li');
//         const spellsByLevel1 = document.createElement('li');
//         const spellsByLevel2 = document.createElement('li');
//         const spellsByLevel3 = document.createElement('li');
//         const arcaneRecovery = document.createElement('li');
        
        
//         // API grab required elements
//         for (i = 0; i < 5; i++) {
//             level.textContent = 'Wizard Level: ' + levels[i].level;
//             console.log(level.textContent);

//             cantrips.textContent = "Cantrips for this level: " + levels[i].spellcasting.cantrips_known;
//             spellsByLevel1.textContent = "Level 1 spell slots: " + levels[i].spellcasting.spell_slots_level_1;
//             spellsByLevel2.textContent = "Level 2 spell slots: " + levels[i].spellcasting.spell_slots_level_2;
//             spellsByLevel3.textContent = "Level 3 spell slots: " + levels[i].spellcasting.spell_slots_level_3;
//             arcaneRecovery.textContent = "Arcane Recovery: " + levels[i].class_specific.arcane_recovery_levels;

            // for (i = 0; i < 5; i++) {
            //     cantrips[i]
            // }
        


            // console.log(cantrips.textContent);
            // console.log(spellsByLevel1.textContent);
            // console.log(spellsByLevel2.textContent);
            // console.log(spellsByLevel3.textContent);
            // console.log(arcaneRecovery.textContent);
//         }
//         //rearrange append information based on changed variables above
//         for (i = 0; i < 5; i++) {
//             informationArea5.append(level);
//             informationArea5.append(cantrips);
//             informationArea5.append(spellsByLevel1);
//             informationArea5.append(spellsByLevel2);
//             informationArea5.append(spellsByLevel3);
//             informationArea5.append(arcaneRecovery);
//         }
//     })
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// these event listeners are for testing purposes
//buttonEL.addEventListener('click', humanStats);
// buttonEL.addEventListener('click', dwarfStats);
// buttonEL.addEventListener('click', elfStats);
// buttonEL.addEventListener('click', halflingStats);
//buttonEL.addEventListener('click', classSpells);
// buttonEL.addEventListener('click', classSpecificInfo);