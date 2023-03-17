// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers() {
    let newDrivers = drivers.slice(0, 2);
    return newDrivers
}

returnLastTwoDrivers();
function returnLastTwoDrivers() {
    let lastTwoDrivers = ['Amari', 'Mo'];
    return lastTwoDrivers
}

returnFirstTwoDrivers();
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(f) {
    return function(fare=1) {
        return f*fare
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, array){
    return array(arrayOfDrivers);
}