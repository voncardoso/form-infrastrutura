import Brasao from '../../assets/Brasao.svg';
import Bandeira from '../../assets/Bandeira.svg';
import './style.css'

export const Header = () =>{
    return(
        <header>
            <img src={Brasao} alt="brasao do municipio" />
            <h4>PREFEITURA MUNICIPAL DE ANANNINDEU <br/> SECRETARIA MUNICIAPAL DE SANEAMENTO E INFRA ESTRUTURA</h4>
            <img src={Bandeira} alt="brasao do municipio" />
        </header>
    )
}