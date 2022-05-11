import React from "react"


  const Cabecalho = () =>{
  
      return (
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
  );
};

export default Cabecalho;