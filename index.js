function myEach(collection, callback){
    if(typeof collection === "object"){
        let collectionArray = Object.values(collection)
        collectionArray.map(elementArray => callback(elementArray))

        return collection
    } else{
    collection.map(element => callback(element))

    return collection
    }
}

function myMap(collection, callback){
    if(typeof collection === "object"){
        let collectionArray = Object.values(collection)
        let finalCollectionArray = collectionArray.map(elementArray => callback(elementArray))

        return finalCollectionArray
    } else{
    let newCollection = collection.map(element => callback(element))

    return newCollection
    }
}


function myFind(collection, predicate){
    if(typeof collection === "object"){
        let collectionArray = Object.values(collection)

        let solutionObj = collectionArray.find(value => predicate(value) === true)

        return solutionObj
    } else{
        let solutionArray = collection.find(value => predicate(value) === true)

        return solutionArray
    }
}

function myFilter(collection, predicate){
    if(typeof collection === "object"){
        let collectionArray = Object.values(collection)
        let solutionObj = collectionArray.filter(value => predicate(value) === true)

        return solutionObj
    } else{
        let solutionArray = collection.filter(value => predicate(value) === true)

        return solutionArray
    }
}

function mySize(collection){
    if(typeof collection === "object"){
        let collectionArray = Object.values(collection)
        return collectionArray.length
    } else{
        return collection.length
    }
}

function myFirst(array, n){
    if(n === undefined){
        return parseInt(array.slice(0, 1))
    } else{
        return array.slice(0, n)
    }
    
}

function myLast(array, n){
    if(n === undefined){
        return parseInt(array.slice(array.length - 1))
    } else{
        return array.slice(array.length - n)
    }
    
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}


function myReduce(collection, callback, acc){
    if(typeof collection === "object"){
        let collectionArray = Object.values(collection)
        
        if(acc === undefined){
            let shiftedArray = collectionArray.slice(1)
            let reducedObj = shiftedArray.reduce((acc, val)=>{
                return callback(acc, val, collection)
            }, collectionArray[0])

            return reducedObj
        }else{
            let reducedObj = collectionArray.reduce((acc, val)=>{
                return callback(acc, val, collection)
            }, acc)
    
            return reducedObj
        }
    } else{
        if(acc === undefined){
            let shiftedArray = collection.slice(1)
            let reducedArray = shiftedArray.reduce((acc, val)=>{
                return callback(acc, val, collection)
            }, collection[0])

            return reducedArray
            }else{
                let reducedArray = collection.reduce((acc, val)=>{
                    return callback(acc, val, collection)
                }, acc)
    
                return reducedArray
            }
    }
}

// [1, 2, 3, 4]
// (acc + (val * 3))

// im getting 31 now but i want to get 28

// 1 + 3 = 4 + 5 = 10 +9 = 19 + 12 = 31

// 1 + 6 = 7 + 9 = 16 + 12 = 28