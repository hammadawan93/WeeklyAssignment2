"use strict";
function clothesSuggest(temperature) {
    if (temperature <= 15) {
        console.log(`It is cold.`);
        console.log(`You should wear warm clothes!`);
    }
    else {
        console.log(`It is warm.`);
        console.log(`You should wear cool clothes!`);
    }
}
clothesSuggest(9);
