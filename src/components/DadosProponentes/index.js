import {DadosProponente} from './style.js'

export const DadosProponentes = () =>{
    return(
        <>
         <DadosProponente>
                <h4>DADOS CADASTRAIS PROPONENTE</h4>

                <ul>
                    <li>
                        <div className='proponenteNome'>
                            <label htmlFor="nomePropnente">ENTIDADE PROPONENTE</label>
                            <input type="text" name="nomePropnente" id="nomePropnente" required/>
                        </div>

                        <div className='propnenteCnpj'>
                            <label htmlFor="cnpjPropnente">CNPJ</label>
                            <input type="number" name="cnpjPropnente" id="cnpjPropnente" required/>
                        </div>
                    </li>

                    {/**ENDEREÇO E NUMERO */}
                    <li>
                        <div className='proponenteEndereco'>
                            <label htmlFor="enderecoPropnente">ENDEREÇO DA ENTIDADE</label>
                            <input type="text" name="enderecoPropnente" id="enderecoPropnente" required/>
                        </div>

                        <div className='proponenteNumero'>
                            <label htmlFor="numeroPropnente">Nº</label>
                            <input type="number" name="nuemroPropnente" id="numeroPropnente" required/>
                        </div>
                    </li>

                    {/**CEP CIDADE UF */}
                    <li>
                        <div className='proponenteCEP'>
                            <label htmlFor="cepPropnente">CEP</label>
                            <input type="number" name="cepPropnente" id="cepPropnente" required/>
                        </div>

                        <div className='proponenteCidade'>
                            <label htmlFor="cidadePropnente">CIDADE</label>
                            <input type="text" name="cidadePropnente" id="cidadePropnente" required/>
                        </div>

                        <div className='proponenteUF'>
                            <label htmlFor="ufPropnente">UF</label>
                            <input type="text" name="ufPropnente" id="ufPropnente" required/>
                        </div>
                    </li>
                      {/**telefone e EA */}
                    <li>
                        <div className='proponenteTelefone'>
                            <label htmlFor="telefonePropnente">TELEFONE</label>
                            <input type="number" name="telefonePropnente" id="telefonePropnente" required/>
                        </div>

                        <div className='proponenteEA'>
                            <label htmlFor="EAPropnente">EA</label>
                            <input type="text" name="EAPropnente" id="EAPropnente" required/>
                        </div>
                    </li>

                    {/**email */}
                    <li>
                        <div className='proponenteEmail'>
                            <label htmlFor="emailPropnente">E-MAIL</label>
                            <input type="text" name="emailPropnente" id="emailPropnente" required/>
                        </div>
                    </li>

                    {/**nome do responsavel e cpf */}
                    <li>
                        <div className='proponenteNomeResponsavel'>
                            <label htmlFor="responsavelPropnente">RESPONSAVEL</label>
                            <input type="text" name="responsavelPropnente" id="responsavelPropnente" required/>
                        </div>

                        
                        <div className='proponenteCPF'>
                            <label htmlFor="cpfPropnente">CPF</label>
                            <input type="number" name="cpfPropnente" id="cpfPropnente" required/>
                        </div>
                    </li>

                    {/**rg, cargo e função */}
                    <li>
                        <div className='proponenteRG'>
                            <label htmlFor="rgPropnente">RG</label>
                            <input type="number" name="rgPropnente" id="rgPropnente" required/>
                        </div>

                        <div className='proponenteCargo'>
                            <label htmlFor="cargoPropnente">CARGO</label>
                            <input type="text" name="cargoPropnente" id="cargoPropnente" required/>
                        </div>
                        
                        <div className='proponenteFuncao'>
                            <label htmlFor="funcaoPropnente">FUNÇÃO</label>
                            <input type="text" name="funcaoPropnente" id="funcaoPropnente" required/>
                        </div>
                    </li>

                    {/**endereço residencial e numero */}
                    <li>
                        <div className='proponenteEnderecoResidencial'>
                            <label htmlFor="enderecoResidencialPropnente">ENDEREÇO RESIDENCIAL</label>
                            <input type="text" name="enderecoResidencialPropnente" id="enderecoResidencialPropnente" required/>
                        </div>

                        
                        <div className='proponenteNumeroRedidencia'>
                            <label htmlFor="numeroRedidenciaPropnente">Nº</label>
                            <input type="number" name="numeroRedidenciaPropnente" id="numeroRedidenciaPropnente" required/>
                        </div>
                    </li>
                </ul>
            </DadosProponente>
        </>
    )
}