import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PlainData from './data/PlainData';
import './index.css';


import reportWebVitals from './reportWebVitals';
import ResultCard from './card/ResultCard';
import CardContainer from './container/CardContainer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorld /> */}

    <CardContainer />
    

    {/* <ResultCard 
    id= {0}
    variableName= {"pierwsze"}
    fullVariablePath= {"pierwsze"}
    calculationResult= {1}
     /> */}

     {/* <PlainData /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

