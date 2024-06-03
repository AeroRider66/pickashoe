const buttonEL = document.getElementById('clickMe');
const information = document.getElementById('information');

const humanStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/human')
    .then(function(response) {
        return response.json()
    })
    .then(function(human) {
        console.log("After json", human);

        //change variable def based on layout of future HTML
        const informationArea = document.getElementById('information');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');


        name.textContent = 'Race: ' + human.index;
        prof.textContent = 'Proficiencies: ' + human.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + human.languages[0].index;

        //rearrange append information based on changed variables above
        informationArea.append(name);
        name.append(prof);
        name.append(lang);
    })
}

const dwarfStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/dwarf')
    .then(function(response) {
        return response.json()
    })
    .then(function(dwarf) {
        console.log("After json", dwarf);

        //change variable def based on layout of future HTML
        const informationArea2 = document.getElementById('information2');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');

        name.textContent = 'Race: ' + dwarf.index;
        prof.textContent = 'Proficiencies: ' + dwarf.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + dwarf.languages[0].index + ', ' + dwarf.languages[1].index

        //rearrange append information based on changed variables above
        informationArea2.append(name);
        name.append(prof);
        name.append(lang);
    })
}

const elfStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/elf')
    .then(function(response) {
        return response.json()
    })
    .then(function(elf) {
        console.log("After json", elf);

        //change variable def based on layout of future HTML
        const informationArea3 = document.getElementById('information2');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');

        name.textContent = 'Race: ' + elf.index;
        prof.textContent = 'Proficiencies: ' + elf.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + elf.languages[0].index + ', ' + elf.languages[1].index

        //rearrange append information based on changed variables above
        informationArea3.append(name);
        name.append(prof);
        name.append(lang);
    })
}

const halflingStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/halfling')
    .then(function(response) {
        return response.json()
    })
    .then(function(halfling) {
        console.log("After json", halfling);

        //change variable def based on layout of future HTML
        const informationArea4 = document.getElementById('information4');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');

        name.textContent = 'Race: ' + halfling.index;
        prof.textContent = 'Proficiencies: ' + halfling.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + halfling.languages[0].index + ', ' + halfling.languages[1].index

        //rearrange append information based on changed variables above
        informationArea4.append(name);
        name.append(prof);
        name.append(lang);
    })
}





// const classSpecificInfo = function() {
//     fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
//     .then(function(response) {
//          return response.json()
//     })
//     .then(function(levels) {
//         console.log("After json", levels);

//         //change variable def based on layout of future HTML 
//         const informationArea5 = document.getElementById('information5');
//         const level = document.createElement('h3');
//         const cantrips = document.createElement('li');
//         const spellsByLevel1 = document.createElement('li');
//         const spellsByLevel2 = document.createElement('li');
//         const spellsByLevel3 = document.createElement('li');
//         const arcaneRecovery = document.createElement('li');
        
const classSpecificInfoLvl1 = function() {
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


const classSpecificInfoLvl2 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray2) {
        console.log("After json", levelArray2);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray2[1];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray2[1].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray2[1].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const classSpecificInfoLvl3 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray3) {
        console.log("After json", levelArray3);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray3[2];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray3[2].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray3[2].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const classSpecificInfoLvl4 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray4) {
        console.log("After json", levelArray4);

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray4[3];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray4[3].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray4[3].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}

const classSpecificInfoLvl5 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray5) {
        console.log("After json", levelArray5);

        //tags for HTML
        const { 
            level: wizardLevel[4] } 
        = levelArray5[4];
        console.log("Wizard Level: ", wizardLevel)[4];
        
        const {
            cantrips_known: level_1Cantrips[4], spell_slots_level_1: spellsLevel_1[4], spell_slots_level_2: spellsLevel_2[4], spell_slots_level_3[4]: spellsLevel_3 } 
            = levelArray5[4].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips[4]);
        console.log("Level 1 Spell Slots: ", spellsLevel_1[4]);
        console.log("Level 2 Spell Slots: ", spellsLevel_2[4]);
        console.log("Level 3 Spell Slots: ", spellsLevel_3)[4];

        const {
            arcane_recovery_levels: arcaneRecovery[4] } 
            = levelArray5[4].class_specific;
            console.log("Leel Arcane Recovery: ", arcaneRecovery[4]);
        }
    )
}




        // for (i = 0; i < 5; i++) {
        //     level.textContent = 'Wizard Level: ' + levelArray[i].level;
        //     console.log(level.textContent);


            // cantrips.textContent = "Cantrips for this level: " + levelArray[i].spellcasting.cantrips_known;
            // spellsByLevel1.textContent = "Level 1 spell slots: " + levelArray[i].spellcasting.spell_slots_level_1;
            // spellsByLevel2.textContent = "Level 2 spell slots: " + levelArray[i].spellcasting.spell_slots_level_2;
            // spellsByLevel3.textContent = "Level 3 spell slots: " + levelArray[i].spellcasting.spell_slots_level_3;
            // arcaneRecovery.textContent = "Arcane Recovery: " + levelArray[i].class_specific.arcane_recovery_levels;

            // console.log(cantrips.textContent);
            // console.log(spellsByLevel1.textContent);
            // console.log(spellsByLevel2.textContent);
            // console.log(spellsByLevel3.textContent);
            // console.log(arcaneRecovery.textContent);
        //}
        //rearrange append information based on changed variables above
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



buttonEL.addEventListener('click', humanStats);
buttonEL.addEventListener('click', dwarfStats);
buttonEL.addEventListener('click', elfStats);
buttonEL.addEventListener('click', halflingStats);
//buttonEL.addEventListener('click', classSpells);
buttonEL.addEventListener('click', classSpecificInfoLvl1);
buttonEL.addEventListener('click', classSpecificInfoLvl2);
buttonEL.addEventListener('click', classSpecificInfoLvl3);
buttonEL.addEventListener('click', classSpecificInfoLvl4);
buttonEL.addEventListener('click', classSpecificInfoLvl5);
// buttonEL.addEventListener('click', humanStats);
// buttonEL.addEventListener('click', dwarfStats);
// buttonEL.addEventListener('click', elfStats);
// buttonEL.addEventListener('click', halflingStats);


//////////API for footer/////////

const riddleButton = document.getElementById('riddle');
const jokePost = document.getElementById('jokePost');
const answerButton = document.getElementById('answer');
const jokeAnswer = document.getElementById('jokeAnswer');

const riddlePost = function(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){
        return response.json()
    })
    .then(function(joke){
        console.log("Jokes here", joke);
        const jokeArea = document.getElementById('jokePost');
        const displayJoke = document.createElement('h3');
        displayJoke.textContent =  joke.setup;
        jokeArea.append(displayJoke);
    })
}
const answerPost = function(){
        return(function(answer){
        console.log("Jokes here", answer);
        const answerArea = document.getElementById('jokeAnswer');
        const displayAnswer= document.createElement('h3');
        displayAnswer.textContent =  answer.punchline;
        answerArea.append(displayAnswer);
    })
}
// riddleButton.addEventListener('click', riddlePost);
// answerButton.addEventListener('click', answerPost);
