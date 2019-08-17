import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
    return (    
        <React.Fragment>    
            <Header />
            <Slider />
            <Main />
            <Footer /> 
        </React.Fragment>
    );
};

export default App;
