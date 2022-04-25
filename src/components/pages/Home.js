import "./Home.css"

function Home (){
    return(
        <>
        <div id="cabecario" >
            <ul>
                <li>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wheelchair_symbol.svg/483px-Wheelchair_symbol.svg.png' alt='acessibilidade'/>
                    Acessibilidade
                </li>
                <li>
                    <img src='https://cdn-icons-png.flaticon.com/512/61/61410.png' alt='alto contraste'/>
                    Alto Contraste
                </li>
                <li>
                    <img src='https://cdn-icons-png.flaticon.com/512/48/48652.png' alt='mapa do site'/>
                    Mapa do Site
                </li>
                <li id='cinza'>
                    <img src='https://cdn.icon-icons.com/icons2/1129/PNG/512/facebookblacksocialbuttoncircle_79771.png' alt='Ícone Facebook'/>
                </li>
                <li id='cinza'>
                    <img src='https://i.pinimg.com/originals/7c/c0/21/7cc02104ee0b1c1e191141464fab8a21.png' alt='Ícone instagram'/>
                </li>
            </ul>
        </div>


        <div className='menu'>
            <div>
                <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQFPVKv0egy-oQ/company-logo_200_200/0/1519883139861?e=2147483647&v=beta&t=6LwQmzv5PpDRjlk8JOwLmNnPDM6ZoEC5lzFB-_Y7Mhw' alt='icone saite'/>
                <img id='saite' src='https://uploaddeimagens.com.br/images/003/840/966/full/image_2.png?1650817239' alt='saite'/>
            </div>
            <div>
                <ul>
                    <li>
                        Quem Somos
                    </li>
                    <li>
                        Nossos Projetos
                    </li>
                    <li>
                        Nossa Equipe
                    </li>
                    <li>
                        Notícias
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </div>
        </div>


        <h1 className='noticias'>
            <span className="textnoticia" id='text1'>SAITE</span>
            <span className="textnoticia" id='text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
            <img src='https://uploaddeimagens.com.br/images/003/840/743/full/FOTOGRAFIA_-_PCD_MULHERES-02_1.png?1650760999' alt='PCD - mulheres'/>
            <span className="textnoticia" id='saibamais'>Saiba Mais</span>
        </h1>


        <h2 className='menu2'>
            <div id='coluna33'>
                <div id="quadrado"></div>
                Educação a Distância
            </div>
            <div id='coluna33'>
                <div id="quadrado"></div>
                Pesquisa e Inovação
            </div>
            <div id='coluna33'>
                <div id="quadrado"></div>
                Tecnologia
            </div>
        </h2>


        <h2 className='projetos'>
            <div id='div1projeto'>
                <p id='nossosprojetos'>Nossos Projetos</p>
            </div>
        </h2>
        


        <h2 id='numeros'>
            <p>Nossos números</p>
            <div className="coluna25">
                <div className='bola2'></div>
            </div>
            <div className="coluna25">
                <div className='bola1'></div>
            </div>
            <div className="coluna25">
                <div className='bola2'></div>
            </div>
            <div className="coluna25">
                <div className='bola1'></div>
            </div>
        </h2>
        

        <h2 id='equipe'>
            <p>Nossa Equipe</p>
            <div className='coluna25'>
                <div id="imgequipe"></div>
                <p id='descricao_equipe'>
                    Nome, pequeno texto e descrição rapida sobre seu papel na equipe e função
                </p>
            </div>
            <div className='coluna25'>
                <div id="imgequipe"></div>
                <p id='descricao_equipe'>
                Nome, pequeno texto e descrição rapida sobre seu papel na equipe e função
                </p>
            </div>
            <div className='coluna25'>
                <div id="imgequipe"></div>
                <p id='descricao_equipe'>
                Nome, pequeno texto e descrição rapida sobre seu papel na equipe e função
                </p>
            </div>
            
        </h2>


        <h2 id='fale-conosco'>
            Fale conosco
            <div id='mapa'></div>
            <p id='text3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
            <p id='ligar'>
                Ligar pra gente
            </p>
            <p id='mensagem'>
                Enviar mensagem
            </p>
        </h2>


        <h2 id='paceiros'>
            Parceiros
            <div id='botaovoltar'><img src='https://uploaddeimagens.com.br/images/003/840/858/thumb/Botão_voltar.png?1650778172' alt="seta voltar"></img>
            </div>
        </h2>

        <div className='vazia'></div>


        <h2 id='rodape'>
            <ul>
                <li>
                    Quem Somos
                </li>
                <li>
                    Nossas Soluções
                </li>
                <li>
                    Nossos Projetos
                </li>
                <li>
                    Nossa Equipe
                </li>
                <li>
                    Notícias
                </li>
                <li>
                    Contato
                </li>
            </ul>
        </h2>
        </>
    )
}

export default Home