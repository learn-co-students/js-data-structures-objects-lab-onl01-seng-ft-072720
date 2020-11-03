// Write your solution in this file!
let driver = {name: 'sam'}

function updateDriverWithKeyAndValue(driver, key, value){
   let newDriver = Object.assign({}, driver, {[key]: value})
   return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
