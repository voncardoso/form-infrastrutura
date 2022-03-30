import styled from "styled-components";



export const DadosProponente = styled.div`
    margin: 10px;
    padding-bottom: 40px;
    border-bottom: 2px solid var(--blue);
    width:100.4% ;
    h4{
        margin-top: 60px;
        margin-bottom: 20px;
        font-size: 1.125rem;
    }
    ul{
        li{
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            margin-bottom: 20px;
            div{
                padding-right: 20px;
                label{
                    margin-top: 20px;
                }

                input{
                    margin-top: 10px;
                    width: 100%;
                    background: var(--blue);
                    border: none;
                    font-size: 1rem;
                    padding: 5px;
                }
            }
            
            
        }
    }

    .proponenteNome{
        grid-column: 1 / 4;
        
    }

    .propnenteCnpj{
        grid-column: 4 / 8;

    }

    .proponenteEndereco{
        grid-column: 1 / 6;
    }

    .proponenteCEP{
        grid-column: 1 / 3;
    }

    .proponenteCidade{
        grid-column: 3 / 6;
    }

    .proponenteEmail{
        grid-column: 1 / 8;
    }

    .proponenteNomeResponsavel{
        grid-column: 1 / 4;
    }

    .proponenteCPF{
        grid-column: 4 / 8;
    }

    .proponenteRG{
        grid-column: 1 / 3;
    }

    .proponenteCargo{
        grid-column: 3 / 5;
    }

    .proponenteFuncao{
        grid-column: 5 / 8;
    }

    .proponenteEnderecoResidencial{
        grid-column: 1 / 6;
    }
    .proponenteNumeroRedidencia{
        grid-column: 6 / 8;
    }

    .proponenteTelefone{
        grid-column: 1 / 4;
    }

    .proponenteEA{
        grid-column: 4 / 8;
    }
`;