function mapToNegativize(arr) {
    return arr.map(x => x * -1);
}

function mapToNoChange(arr){
    return arr
}

function mapToDouble(arr) {
    return arr.map(x => x * 2);
}

function mapToSquare(arr) {
    return arr.map(x => x ** 2)
}

function reduceToTotal(arr, initialValue=0) {
    return arr.reduce(function( accumulator, currentValue) {
        return accumulator + currentValue
    }, initialValue)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false
    }
    return true
}
  
function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true
    }
    return false
}