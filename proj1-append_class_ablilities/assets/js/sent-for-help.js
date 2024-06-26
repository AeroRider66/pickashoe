const classSpecificInfo = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levels) {
        console.log("After json", levels);

        //change variable def based on layout of future HTML 
        const informationArea5 = document.getElementById('information5');
        const level = document.createElement('h3');
        const cantrips = document.createElement('li');
        const spellsByLevel1 = document.createElement('li');
        const spellsByLevel2 = document.createElement('li');
        const spellsByLevel3 = document.createElement('li');
        const arcaneRecovery = document.createElement('li');

        

        for (i = 0; i < 5; i++) {
        level.textContent = 'Wizard Level: ' + levels[i].level;
        console.log(level.textContent);


        cantrips.textContent = "Cantrips for this level: " + levels[i].spellcasting.cantrips_known;
        spellsByLevel1.textContent = "Level 1 spell slots: " + levels[i].spellcasting.spell_slots_level_1;
        spellsByLevel2.textContent = "Level 2 spell slots: " + levels[i].spellcasting.spell_slots_level_2;
        spellsByLevel3.textContent = "Level 3 spell slots: " + levels[i].spellcasting.spell_slots_level_3;
        arcaneRecovery.textContent = "Arcane Recovery: " + levels[i].class_specific.arcane_recovery_levels;

        console.log(level.textContent);
        console.log(level.textContent);
        console.log(level.textContent);
        console.log(level.textContent);
        }
        //rearrange append information based on changed variables above
        for (i = 0; i < 5; i++) {
        informationArea5.append(level);
        //level.append(level);
        level.append(cantrips);
        level.append(spellsByLevel1);
        level.append(spellsByLevel2);
        level.append(spellsByLevel3);
        level.append(arcaneRecovery);
        }

    })
}


// Guys, I'm punting on the streamlinded version of this.  The difference between my section and Duffy's is that mine goes directly into an array from the landing API.  I have tried every way I can think of to make it work both for the iteration (which I can do) and for giving an output of all 5 levels.  

// The easy, and dirty way of doing this would be to simply set the algorithm as it is now, and pull a single index each time through the code.  So in other words, the block would be 5x as long as it could be.  I've dropped an additonal js file (called 'b-up.js') which give some snapshots in time of a few versions that I've tried.

// My code block in the main 'script.js' file is from lines 161 through 209 (got a whole bunch of +++++++)

// 5-31-24 @1930 This was my latest attempt at getting back to normal working but output is not iterating, and I'm still getting 'null' errors for all sections

const classSpecificInfo = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levels) {
        console.log("After json", levels);

        // let charClassObject = {
        //     charClass: '',
        //     level: '',
        //     cantrips: '',
        //     spellsByLevel_1: '',
        //     spellsByLevel_2: '',
        //     spellsByLevel_3: '',
        //     arcaneRecovery: ''
        // }

        // tag definition for HTML 
        const informationArea5 = document.getElementById('information5');
        const charClass = document.getElementById('h3')
        const level = document.createElement('li');
        const cantrips = document.createElement('li');
        const spellsByLevel_1 = document.createElement('li');
        const spellsByLevel_2 = document.createElement('li');
        const spellsByLevel_3 = document.createElement('li');
        const arcaneRecovery = document.createElement('li');
        
        
        // for (i = 0; i < 5; i++) {
            
            charClass.textContent = "Class: " + levels[0].class.name
            level.textContent = "Level: " + levels[0].level;
            cantrips.textContent = "Cantrips for this level: " + levels[0].spellcasting.cantrips_known;
            spellsByLevel_1.textContent = "Level 1 spell slots: " + levels[0].spellcasting.spell_slots_level_1;
            spellsByLevel_2.textContent = "Level 2 spell slots: " + levels[0].spellcasting.spell_slots_level_2;
            spellsByLevel_3.textContent = "Level 3 spell slots: " + levels[0].spellcasting.spell_slots_level_3;
            arcaneRecovery.textContent = "Arcane Recovery: " + levels[0].class_specific.arcane_recovery_levels;

            // iteration index 0
            informationArea5.append(ted);
            informationArea5.append(level);
            informationArea5.append(cantrips);
            informationArea5.append(spellsByLevel_1);
            informationArea5.append(spellsByLevel_2);
            informationArea5.append(spellsByLevel_3);
            informationArea5.append(arcaneRecovery);

            // debug cut/paste
            // console.log(charClass.textContent);
            // console.log(level.textContent);
            // console.log(cantrips.textContent);
            // console.log(spellsByLevel_1.textContent);
            // console.log(spellsByLevel_2.textContent);
            // console.log(spellsByLevel_3.textContent);
            // console.log(arcaneRecovery.textContent);
        // }
    })
}

// 5.31.24 @1000 - initial code state from last night.

const classSpecificInfo = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levels) {
        console.log("After json", levels);

        const informationArea5 = document.getElementById('information5').innerHTML;
        const level = document.createElement('h3').innerHTML;
        const cantrips = [];
        const spellsByLevel1 = [];
        const spellsByLevel2 = [];
        const spellsByLevel3 = [];
        const arcaneRecovery = [];
        
        
        // informationArea5 = document.getElementById('information5');
        // level = document.createElement('h3');
        // cantrips = document.createElement('li');
        // spellsByLevel1 = document.createElement('li');
        // spellsByLevel2 = document.createElement('li');
        // spellsByLevel3 = document.createElement('li');
        // arcaneRecovery = document.createElement('li');
        

        for (i = 0; i < 5; i++) {
        level.textContent = 'Wizard Level: ' + levels[i].level;
        console.log(level.textContent);


        cantrips.textContent = "Cantrips for this level: " + levels[i].spellcasting.cantrips_known;
        spellsByLevel1.textContent = "Level 1 spell slots: " + levels[i].spellcasting.spell_slots_level_1;
        spellsByLevel2.textContent = "Level 2 spell slots: " + levels[i].spellcasting.spell_slots_level_2;
        spellsByLevel3.textContent = "Level 3 spell slots: " + levels[i].spellcasting.spell_slots_level_3;
        arcaneRecovery.textContent = "Arcane Recovery: " + levels[i].class_specific.arcane_recovery_levels;

        console.log(level.textContent);
        console.log(level.textContent);
        console.log(level.textContent);
        console.log(level.textContent);
        }
        //rearrange append information based on changed variables above
        for (i = 0; i < 5; i++) {
        informationArea5.append(level[i]);
        //level.append(level);
        level.append(cantrips);
        level.append(spellsByLevel1);
        level.append(spellsByLevel2);
        level.append(spellsByLevel3);
        level.append(arcaneRecovery);
        }

    })
}