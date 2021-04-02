function countLetters(str) {
    let tempArr = str.split('');

    tempArr = tempArr.sort((a, b) => {
        return a > b ? 1 : -1;
    })

    let letters = [];
    let count = 1;

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === tempArr[i + 1]) {
            count++;
        } else {
            let value = `${count}${tempArr[i]}`;
            letters = [...letters, value];
            count = 1;
        }

    }

    return letters.join('');

}
console.log(countLetters('aabbbcccccddefrraaa'));
//