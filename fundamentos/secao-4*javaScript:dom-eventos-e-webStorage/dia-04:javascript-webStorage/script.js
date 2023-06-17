window.onload = () => {
    const setBackgroundColor = (color) => {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color
    }

  setBackgroundColor(localStorage.getItem('corFundo'));

    const setFontColor = (color) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
      }
    }

  setFontColor(localStorage.getItem('corTexto'));

    const setFontSize = (size) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size
      }
    }

  setFontSize(localStorage.getItem('tamanhoFonte'));

    const setLineHeight = (height) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = height
      }
    }

  setLineHeight(localStorage.getItem('espacoLinha'));

    const setFontFamily = (family) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = family
      }
    }

  setFontFamily(localStorage.getItem('fonte'));

    // Cor de fundo da tela;
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
      backgroundColorButtons[index].addEventListener("click", (event) => {
        setBackgroundColor(event.target.innerHTML);
        if (localStorage.getItem('corFundo') === null) {
          localStorage.setItem('corFundo', event.target.innerHTML);
        } else {
            localStorage.removeItem('corFundo');
            localStorage.setItem('corFundo', event.target.innerHTML)
        }
      })
    }
  
    // Cor do texto;
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < fontColorButtons.length; index += 1) {
      fontColorButtons[index].addEventListener("click", (event) => {
        setFontColor(event.target.innerHTML);
        if (localStorage.getItem('corTexto') === null) {
          localStorage.setItem('corTexto', event.target.innerHTML);
        } else {
            localStorage.removeItem('corTexto');
            localStorage.setItem('corTexto', event.target.innerHTML)
        }
      })
    }
  
    // Tamanho da fonte
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
      fontSizeButtons[index].addEventListener("click", (event) => {
        setFontSize(event.target.innerHTML);
        if (localStorage.getItem('tamanhoFonte') === null) {
          localStorage.setItem('tamanhoFonte', event.target.innerHTML);
        } else {
            localStorage.removeItem('tamanhoFonte');
            localStorage.setItem('tamanhoFonte', event.target.innerHTML)
        }
      })
    }
  
    // Espaçamento entre as linhas do texto;
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", (event) => {
        setLineHeight(event.target.innerHTML);
        if (localStorage.getItem('espacoLinha') === null) {
          localStorage.setItem('espacoLinha', event.target.innerHTML);
        } else {
            localStorage.removeItem('espacoLinha');
            localStorage.setItem('espacoLinha', event.target.innerHTML)
        }
      })
    }
  
    // Tipo da fonte (_Font family_).
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", (event) => {
        setFontFamily(event.target.innerHTML);
        if (localStorage.getItem('fonte') === null) {
          localStorage.setItem('fonte', event.target.innerHTML);
        } else {
            localStorage.removeItem('fonte');
            localStorage.setItem('fonte', event.target.innerHTML)
        }
      })
    }
  }