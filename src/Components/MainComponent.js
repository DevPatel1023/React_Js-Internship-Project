import React from 'react';
import Header from './Header';
// import CreateScreen from '../Screens/CreateScreen'
import CreateBlog from '../Screens/CreateBlog';
const MainContent = () => {
    return (
        <>
            <Header />
            {/* <CreateScreen /> */}
            <CreateBlog/>
        </>
    );
};

export default MainContent;
