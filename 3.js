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

// const inputArray = [3, 1];
// const output = sortMaker(inputArray);
// console.log(output);