import React from 'react'; // , { useEffect, useState }
import MainPageContent from './mainPageContent';
import Loader from '../../common/loader/loader';

const MainPage = () => {
    const isLoadedImage = true;
    // const [isLoadedImage, setIsLoadedImage] = useState(false);
    // useEffect(() => {
    //     if (localStorage.getItem('mainPageLoaded')) {
    //         setIsLoadedImage(true);
    //     } else {
    //         setTimeout(() => {
    //             setIsLoadedImage(true);
    //         }, 4000);
    //     }
    // }, []);

    return isLoadedImage ? <MainPageContent /> : <Loader />;
};

export default MainPage;
