// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// import { Route, Link, BrowserRouter } from 'react-router-dom'


// import WrappedLoginForm from './components/LoginForm/LoginForm';
// import WrappedAccount from './components/Account/Account';
// import { connect } from 'react-redux';


// const App = ({ currentUser }) => {
//   return (
//     <BrowserRouter>
//       {currentUser === null ? <WrappedLoginForm /> : <WrappedAccount />}
//     </BrowserRouter>
//   )
// };

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.auth.currentUser
//   };
// };

// const WrappedApp = connect(mapStateToProps)(App);

// export default WrappedApp;






































import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
    return (    
        <>    
            <Header />
            <Slider />
            <Main />
            <Footer /> 
        </>
    );
};

export default App;
