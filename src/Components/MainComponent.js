import React from 'react';
import Header from './Header';
// import CreateScreen from '../Screens/CreateScreen'
import CreateBlog from '../Screens/CreateBlog';
import EditScreen from '../Screens/EditScreen';
import Accounts from '../Screens/Accounts';

const MainContent = () => {
    return (
        <>
            <Header />
            {/* <CreateScreen /> */}
            {/* <CreateBlog/> */}
            {/* <EditScreen/> */}
            <Accounts/>
        </>
    );
};

export default MainContent;
