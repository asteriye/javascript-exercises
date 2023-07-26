const sumAll = function(num1, num2) {
    let result = 0;

    let biggerNum = Math.max(num1, num2);
    let smallerNum = Math.min(num1, num2);

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    else if(typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }

        while (smallerNum <= biggerNum) {
            result += smallerNum;
            smallerNum++;
        }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
