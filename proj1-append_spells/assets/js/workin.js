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

//====================== WIZARD level 1 START ===================================

const wizardSpecificInfoLvl1 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray1) {
        console.log("After json", levelArray1);
        
        const classAttributes1 = document.getElementById('classAttributes1');
        const classAttributes1a = document.getElementById('classAttributes1a');
        const classAttributes1b = document.getElementById('classAttributes1b');
        const classAttributes1c = document.getElementById('classAttributes1c');
        const classAttributes1d = document.getElementById('classAttributes1d');
        const classAttributes1e = document.getElementById('classAttributes1e');

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

            classAttributes1.append("Wizard Level: ", wizardLevel);
            classAttributes1a.append("Level 1 Cantrip Slots: ", level_1Cantrips);
            classAttributes1b.append("Level 1 Spell Slots: ", spellsLevel_1);
            classAttributes1c.append("Level 2 Spell Slots: ", spellsLevel_2);
            classAttributes1d.append("Level 3 Spell Slots: ", spellsLevel_3);
            classAttributes1e.append("Level Arcane Recovery: ", arcaneRecovery);
        }
    )
}
//======================== WIZARD level 1 END ===================================

//====================== WIZARD level 2 START ===================================

const wizardSpecificInfoLvl2 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray1) {
        console.log("After json", levelArray1);
        
        const classAttributes1 = document.getElementById('classAttributes1');
        const classAttributes1a = document.getElementById('classAttributes1a');
        const classAttributes1b = document.getElementById('classAttributes1b');
        const classAttributes1c = document.getElementById('classAttributes1c');
        const classAttributes1d = document.getElementById('classAttributes1d');
        const classAttributes1e = document.getElementById('classAttributes1e');

        //tags for HTML
        const { 
            level: wizardLevel } 
        = levelArray1[1];
        console.log("Wizard Level: ", wizardLevel);
        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray1[1].spellcasting;
        console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
        console.log("Level 1 Spell Slots: ", spellsLevel_1);
        console.log("Level 2 Spell Slots: ", spellsLevel_2);
        console.log("Level 3 Spell Slots: ", spellsLevel_3);

        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray1[1].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);

            classAttributes1.append("Wizard Level: ", wizardLevel);
            classAttributes1a.append("Level 1 Cantrip Slots: ", level_1Cantrips);
            classAttributes1b.append("Level 1 Spell Slots: ", spellsLevel_1);
            classAttributes1c.append("Level 2 Spell Slots: ", spellsLevel_2);
            classAttributes1d.append("Level 3 Spell Slots: ", spellsLevel_3);
            classAttributes1e.append("Level Arcane Recovery: ", arcaneRecovery);
        }

    )
}

//====================== WIZARD level 2 END ====================================

//====================== RANGER level 1 START ===================================

const rangerSpecificInfoLvl1 = function() {
    fetch("https://www.dnd5eapi.co/api/classes/ranger/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levelArray1) {
        console.log("After json", levelArray1);
        
        const classAttributes1 = document.getElementById('classAttributes1');
        const classAttributes1a = document.getElementById('classAttributes1a');
        const classAttributes1b = document.getElementById('classAttributes1b');
        const classAttributes1c = document.getElementById('classAttributes1c');
        const classAttributes1d = document.getElementById('classAttributes1d');
        const classAttributes1e = document.getElementById('classAttributes1e');

        //tags for HTML
        const { 
            level: rangerLevel } 
            = levelArray1[0];
            console.log("Ranger Level: ", rangerLevel);
        
        const {
            index: favEnemies, index: favTerrain} =levelArray1[0].features[0];
            console.log("Favored enemies: ", favEnemies);
            console.log("Favored terrain: ", favTerrain);
        

        
        const {
            cantrips_known: level_1Cantrips, spell_slots_level_1: spellsLevel_1, spell_slots_level_2: spellsLevel_2, spell_slots_level_3: spellsLevel_3 } 
            = levelArray1[1].spellcasting;
            console.log("Level 1 Cantrip Slots: ", level_1Cantrips);
            console.log("Level 1 Spell Slots: ", spellsLevel_1);
            console.log("Level 2 Spell Slots: ", spellsLevel_2);
            console.log("Level 3 Spell Slots: ", spellsLevel_3);



        const {
            arcane_recovery_levels: arcaneRecovery } 
            = levelArray1[1].class_specific;
            console.log("Level Arcane Recovery: ", arcaneRecovery);

            classAttributes1.append("Wizard Level: ", wizardLevel);
            classAttributes1a.append("Level 1 Cantrip Slots: ", level_1Cantrips);
            classAttributes1b.append("Level 1 Spell Slots: ", spellsLevel_1);
            classAttributes1c.append("Level 2 Spell Slots: ", spellsLevel_2);
            classAttributes1d.append("Level 3 Spell Slots: ", spellsLevel_3);
            classAttributes1e.append("Level Arcane Recovery: ", arcaneRecovery);
        }

    )
}


//====================== RANGER level 1 END ====================================


buttonEL.addEventListener('click', humanStats);
buttonEL.addEventListener('click', dwarfStats);
buttonEL.addEventListener('click', elfStats);
buttonEL.addEventListener('click', halflingStats);
buttonEL.addEventListener('click', wizardSpecificInfoLvl1);
buttonEL.addEventListener('click', wizardSpecificInfoLvl2);
buttonEL.addEventListener('click', rangerSpecificInfoLvl1);


// Hey guys, I do apologize that I contributed almost nothing in working code and the project in general.  I wanted to apologize for letting you down on this.  I'm including Jung on this as he should know what I did/didn't accomplish.  

// Since the initial layer from the API was an array, I took on the trying to loop through the first level.  Then the second level - I knew this would be a nested loop, but even that wasn't a full description.  Here's the path to get to what is needed.
// First array - character class
    // Results of first array is an array itself.  
        // next level is both arrays and elements
            // next level is arrays and elements.
                //next level is elements, however some of those elements at the lowest level actually refer to the URL that contains that element.  
                    // An example of this would be 'favorite enemies' for a ranger.  When you drill down all the way in the API data, the bottom level is of that is merely a number, in this case '1'.  If you need to actually find the favorite enemy name, you have to go on to another URL and drill down from there.

                    //Looking briefly, there are least 5 different URLs, and probably more.

// All of that to say that the only realistic way to deal with this would be from the nested for loops, on both arrays and elements, and likely using objects throughout.  

// If all I did was to hard code (which I really should have but got too focused on finding the for loop solutio and ran out of time).  I do have a working result that could be duplicated and slightly modified for each instance. 

// It's about 40 LOC for each iteration (I managed to recover some from my last estimate) and with that LOC per class, per level would take it to a total of 800+ LOC on the JavaScript file alone, and more on the HTML, and those would be ADDED to the current LOC cound on both of those.