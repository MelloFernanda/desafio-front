import React from "react"

import "./Home.css"

import imgSAITE from "../../../assents/img/imgSAITE.png"
import imgSAITE2 from "../../../assents/img/imgSAITE2.png"

function Home (){
    return(
        <>

        <section className="acessibility" id='acessibility'>
            <ul>
                <li>
                    <d id="text">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wheelchair_symbol.svg/483px-Wheelchair_symbol.svg.png' alt='acessibilidade'/>
                        Acessibilidade
                  </d>
                </li>
                <li>
                    <d id='text'>
                        <img src='https://cdn-icons-png.flaticon.com/512/61/61410.png' alt='alto contraste'/>
                        Alto Contraste
                    </d>
                </li>
                <li>
                    <d id="text">
                        <img src='https://cdn-icons-png.flaticon.com/512/48/48652.png' alt='mapa do site'/>
                        Mapa do Site
                    </d>        
                </li>

                <li>
                    <d id="img">
                        <img id="facebook" src='https://cdn.icon-icons.com/icons2/1129/PNG/512/facebookblacksocialbuttoncircle_79771.png' alt='Ícone Facebook'/>
                    </d>        
                </li>

                <li>
                    <d id="img">
                        <img id="instagram" src='https://i.pinimg.com/originals/7c/c0/21/7cc02104ee0b1c1e191141464fab8a21.png' alt='Ícone instagram'/>
                    </d>        
                </li>   
            </ul>
        </section>


        <section className="menu">
            
            <div className="imagemSaite">
                <div id="logoSaite"><img src={imgSAITE} alt="logo SAITE"/></div>
                <div id="descricaoSaite"><img src={imgSAITE2} alt="Significado SAITE"/></div>
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
        </section>


        <header>
            <div id="wrapper">
                <h1 className="saite">
                    saite
                </h1>
                <div className="saitedescription">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <button className="SaibaMais">Saiba Mais</button>
                </div>
            </div>

            <nav className="navigation">
                <div className="div-nav">
                    <div className="caixa">
                        <svg width="117" height="126" viewBox="0 0 117 126" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="117" height="126" fill="#F51051"/></svg>
                    </div>
                    <h2>
                        Educação a Distância
                    </h2>
                </div>
                <div>
                    <div className="caixa">
                        <svg width="117" height="126" viewBox="0 0 117 126" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="117" height="126" fill="#4441DF"/></svg>
                    </div>
                    <h2>
                        Pesquisa e Inovação
                    </h2>
                </div>
                <div>
                    <div className="caixa">
                        <svg width="117" height="126" viewBox="0 0 117 126" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="117" height="126" fill="#4441DF"/></svg>
                    </div>
                    <h2>
                        Tecnologia
                    </h2>
                </div>
            </nav>

                    
        </header>
        
        
        <section className="NossosProjetos">
            
            <h2 className="textProjects">Nossos Projetos</h2>
                
            <div className="projects">
                <div className="project">
                    <div id='project1'></div>
                    <button className="botao" type="butoon">Clique</button>
                </div>
                <div className="project">
                    <div id='project2'></div>
                    <button className="botao" type="butoon">Clique</button>
                </div>
                <div className="project">
                    <div id='project3'></div>
                    <button className="botao" type="butoon">Clique</button>
                </div>
                <div className="project">
                    <div id='project4'></div>
                    <button className="botao" type="butoon">Clique</button>
                </div>
            </div>    
        </section>


        <section className="nossosNumeros">
            <h2>
                Nossos Números
            </h2>
            <div className="bolas">
                <div className="bola1">
                </div>
                <div className="bola2">
                </div>
                <div className="bola1">
                </div>
                <div className="bola2">
                </div>
            </div>

        </section>


        <section className="nossaEquipe">
            
            <h2>Nossa Equipe</h2>
            
            <div className="team">
                <di className="teamPerson">
                    <div className="imgTeam"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </di>
                <di className="teamPerson">
                    <div className="imgTeam"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </di>
                <di className="teamPerson">
                    <div className="imgTeam"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </di>
            </div>
        </section>


        <section className="faleConosco">
            <h2>
                Fale Conosco
            </h2>
            <div className="descritionFaleConosco">
                <div className="comunication">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <div>
                        <button id="call">Ligar pra gente
                        </button>
                        <button id="message">Mandar mensagem
                        </button>
                    </div>
                    
                </div>
                <div className="map"></div>
            </div>
        </section>


        <section className="parceiros">
            <h2>Parceiros</h2>
            <div>
                <a href="#acessibility">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_0_78)"><circle cx="44" cy="40" r="40" fill="#F51051"/>
                        <path d="M70.9387 48.9796L44.8163 22.8572L18.6938 48.9796" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_0_78" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_78"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_78" result="shape"/></filter>
                        </defs>
                    </svg>
                </a>
            </div>
        </section>


        <div className="vazia"></div>
        
        <section className="rodape">
            <ul>
                <li>
                    Quem Somos
                </li>
                <li>
                    Nossas Seleções
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
        </section>
        </>
    )
}

export default Home