import * as out from "readline-sync";

async function main() {


    var i = out.question("donnez votre note: ");

    switch (true) {
        case (parseInt(i) > 0 && parseInt(i) < 5):console.log("hhihouuun");
        case (parseInt(i) > 5 && parseInt(i) < 10):console.log("c'est une movese note");
        case (parseInt(i) > 10 && parseInt(i) < 15):console.log("c'est bonne not");
        case (parseInt(i) > 15 && parseInt(i) < 20):console.log("félésitation");
    }
}

main();