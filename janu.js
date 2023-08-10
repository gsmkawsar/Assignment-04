function cubeNumber(number) {
    if(typeof number !== "number"){
        return "please provide me a number";
        }   
    else {
    const result = number * number * number 
        return result
        }

}

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


    function sortMaker(arr) {

        if (arr[0] <= 0 || arr[1] <= 0 ) {
            return "Invalid Input";
        } 
        else if  (arr[0] === arr[1]) {
            return "equal";
        }
    
        const sortedArr = [];
        while (arr.length > 0) {
            let max = -Infinity;
            let maxIndex = -1;
    
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    maxIndex = i;
                }
            }
    
            sortedArr.push(max);
            arr.splice(maxIndex, 1);
        }
    
        return sortedArr;
    }


    function findAddress(obj) {
        if (typeof obj !== "object") {
            return "Type A Valid ";
        } else {
            const street = obj.street || "missing";
            const house = obj.house || "__";
            const society = obj.society || "__";
    
            return street + ', ' + house + ', ' + society;
        }
    }


    function canPay(changeArray, totalDue){
                   
        if (changeArray.length === 0) {
           return "you have no balance";
       }
      
        
        let totalCash = 0;
        for (let i = 0; i < changeArray.length; i++) {
            totalCash += changeArray[i];
        }
      
      
        if (totalCash >= totalDue) {
            return true;
        } else {
            return false;
        }
      }