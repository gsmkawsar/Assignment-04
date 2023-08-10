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

// const address = {
//     street: 10,
//     house: "15A",
//     society: "EarthPerfect"
// };
// console.log(findAddress(address));