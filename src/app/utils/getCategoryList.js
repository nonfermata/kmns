import allBook from '../data/book/allBook';

const getCategoryList = (category) => {
    return allBook.filter((item) => item.cat === category);
};

export default getCategoryList;
