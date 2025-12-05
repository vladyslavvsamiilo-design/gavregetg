let n1 = []
for (let i = 0; i < 20; i++)
{
    n1[i] = Math.round(Math.random() * 100 - 50);
}

function findMaxInArray(inputArray = []) {
    let max = inputArray[0]

    if (inputArray.length === 0) {
        return null;
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > max) {
            max = inputArray[i]
        }
    }

    return max;
}

function displayPrice(price) {
    const normalizedPrice = price / 100;
    console.log(`${normalizedPrice} in USD`);
}

const maxFromArray = findMaxInArray();
console.log(maxFromArray);


displayPrice(99);
