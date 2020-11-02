// Write your solution in this file!
let driver = new Object;

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    console.log(driver, key);
    let newObj = Object.assign({}, driver)
    console.log(newObj)
    delete newObj[key]
    console.log(newObj)
    console.log(driver, newObj)
    return newObj
}

function  destructivelyDeleteFromDriverByKey(driver, key) {
    console.log(driver, key)
    delete driver[key]
    console.log(driver)
    return driver
   
}

