import Brasao from '../../assets/Brasao.svg';
import Bandeira from '../../assets/Bandeira.svg';
import {Container} from './style.js'

export const Header = () =>{
    return(
        <Container>
            <header>
                <img src={Brasao} alt="brasao do municipio" />
                <h4>PREFEITURA MUNICIPAL DE ANANNINDEU <br/> SECRETARIA MUNICIAPAL DE SANEAMENTO E INFRA ESTRUTURA</h4>
                <img src={Bandeira} alt="brasao do municipio" />
            </header>
            <h4 className='h4planoTrabalho'>PLANO DE TRABALHO</h4>
        </Container>
    )
}