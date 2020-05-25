//porque aqui eu não posso usae { }
//porque não se trata de um objeto do react 
//  e sim dele como um todo??
import React from 'react';

import { render } from 'react-dom';

import App from './App';

//  JSX: HTML dentro do JavaScript (Javasccript XML) 

//rederizarei este h1 dentro do elemento de Id app
//<App /> usar como uma tag que é um componente
render(<App />, document.getElementById('app'));
