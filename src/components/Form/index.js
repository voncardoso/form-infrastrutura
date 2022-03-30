import {DescricaoServico} from './style.js'

import {DadosProponentes} from '../DadosProponentes';
export const Form = () =>{

    return(
        <form>
            <DescricaoServico>  
                <h4>DESCRIÇÃO DO SERVIÇO</h4>
                <textarea 
                    name="" 
                    id="" 
                    cols="30"
                     rows="10"
                     placeholder='Descreva o serviço a ser realizado'
                     required
                />
            </DescricaoServico>

           <DadosProponentes />
            
            
            <button type='submit'>Cadastrar</button>
        </form>
    )
}