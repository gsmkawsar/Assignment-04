function matchFinder(string1, string2) {
    if(typeof string1 !== "string" && typeof string2 !== "string" ){
        return "please provide me a valid file name (string)";
        }

        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }

// const retune =matchFinder("JavaScript", "Code");
// console.log(retune)
