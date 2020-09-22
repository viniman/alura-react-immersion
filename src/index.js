import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


// function CadastroVideo() {
//   return (
//     <div>
//       Página de Cadastro de Vídeo
//     </div>
//   )
// }

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // fazer com react router
  // Sistema de roteamento: quando carregar temos que decidir qual página vai carregar
  <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact /> {/* exact: exatamente a rota */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
      {/*<Route component={() => (<div>Página 404</div>)} />  arrow function */}
      
    </Switch>


  </BrowserRouter>,
  //renderiza react dentro do nosso root dentro desse conteiner
  document.getElementById('root')
);

