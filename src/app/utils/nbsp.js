const nbsp = (arr) => {
    const newArr = [];
    arr.forEach((item) => {
        const arrStr = item.split(' ');
        const newArrStr = arrStr.map((itemWord, index, arr) => {
            if (
                (itemWord.length === 1 && itemWord !== '—') ||
                arr[index + 1] === '—' ||
                !isNaN(Number(itemWord))
            ) {
                return itemWord + ' ';
            } else return itemWord + ' ';
        });
        newArr.push(newArrStr.join(''));
    });
    return newArr;
};

export default nbsp;
