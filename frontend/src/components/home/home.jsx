import React from 'react';
import Main from '../template/main';
const homeProps = {
    icon:"home",
    title:"Inicio",
    subtitle:"Projeto React"
}

export default props =>

<Main {...homeProps}>
         <div className='display-4'>Bem vindo</div>
         <hr />
         <p className="mb-0">Estudo de CRUD em REACT</p>

</Main>