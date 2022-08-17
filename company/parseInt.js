function myParseInt(string, number) {
    const letterMap = new Map([
        ['0', 0],
        ['1', 1],
        ['2', 2],
        ['3', 3],
        ['4', 4],
        ['5', 5],
        ['6', 6],
        ['7', 7],
        ['8', 8],
        ['9', 9],
        ['a', 10],
        ['b', 11],
        ['c', 12]
    ]);
    let result = 0;
    for (let i = string.length - 1, j = 0; i >=0, j < string.length; i--, j++) {
        const letter = string[i];
        if (letterMap.has(letter)) {
            result += letterMap.get(letter) * Math.pow(number, j);
        }
    }
    return result;
}

console.log(myParseInt('a1', 20));