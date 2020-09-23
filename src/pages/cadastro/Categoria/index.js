import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  // uso do state
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    console.log(infosDoEvento);

    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }



  // ============
/*
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);
*/
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      {/* handle = manipular */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        console.log('envio de form');
        
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>


        <FormField
          label="Nome da Categoria "
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;