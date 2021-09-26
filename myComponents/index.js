const getBaseURL = () => {
  return new URL(".", import.meta.url);
};

class MyLogoCustomize extends HTMLElement {
  style = `
    span {
			width: 4rem;
			display: inline-block;
		}
    
		button {
			width: 4rem;
			height: 4rem;
			border: none;
			border-radius: 10px;
		}
      
    #parametres{
      padding-left: 40%;
    }


    label{
      color: lightblue;
      font-size: 21px;
      outline: 5px; padding: 10px; text-shadow: 2px 2px blue; text-align: center;
    }
		#logo {
			font-size: 100px;
			height: auto;
			width: auto;
			--sheenX: 0;
			--sheenY: 0;
			background-size: cover;
			box-shadow: 0 0 140px 10px rgba(0, 0, 0, .5);
      position: relative;
      margin:auto;
      display:table;
      
		}
		#logo::after {
			position: absolute;
			top: -400px;
			right: -400px;
			bottom: -400px;
			left: -400px;
			background: linear-gradient(217deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.25) 45%, rgba(255, 255, 255, .25) 50%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);
      transform: translateX(var(--sheenX)) translateY(var(--sheenY));
      pointer-events: none
		}
		.logoTexture {
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-shadow: none !important;
		}

    .shadow-drop-center {
      -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
              animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    @-webkit-keyframes shadow-drop-center {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
                box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      }
    }
    @keyframes shadow-drop-center {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
                box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      }
    }

    .vibrate-1 {
      -webkit-animation: vibrate-1 0.3s linear infinite both;
              animation: vibrate-1 0.3s linear infinite both;
    }

    /**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

.vibrate-3 {
	-webkit-animation: vibrate-3 0.5s linear infinite both;
	        animation: vibrate-3 0.5s linear infinite both;
}

/**
 * ----------------------------------------
 * animation vibrate-3
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

.jello-horizontal {
	-webkit-animation: jello-horizontal 0.9s ease-in infinite both;
	        animation: jello-horizontal 0.9s ease-in infinite both;
}

/**
 * ----------------------------------------
 * animation jello-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}

.kenburns-top {
	-webkit-animation: kenburns-top 5s ease-out infinite alternate-reverse both;
	        animation: kenburns-top 5s ease-out infinite alternate-reverse both;
}


/**
 * ----------------------------------------
 * animation kenburns-top
 * ----------------------------------------
 */
@-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}
@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}



    
    

    /* ----------------------------------------------
 * Generated by Animista on 2021-9-26 22:10:12
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
 .tracking-in-expand {
	-webkit-animation: tracking-in-expand 3s cubic-bezier(0.600, -0.280, 0.735, 0.045) infinite alternate backwards;
	        animation: tracking-in-expand 3s cubic-bezier(0.600, -0.280, 0.735, 0.045) infinite alternate backwards;
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

     /* ----------------------------------------------
     /* ----------------------------------------------
     * Generated by Animista on 2021-9-26 22:17:56
     * Licensed under FreeBSD License.
     * See http://animista.net/license for more info. 
     * w: http://animista.net, t: @cssanimista
     * ---------------------------------------------- */
    
    /**
     * ----------------------------------------
     * animation rotate-scale-down
     * ----------------------------------------
     */

     .rotate-scale-down {
      -webkit-animation: rotate-scale-down 0.65s linear infinite both;
              animation: rotate-scale-down 0.65s linear infinite both;
    }

    @-webkit-keyframes rotate-scale-down {
      0% {
        -webkit-transform: scale(1) rotateZ(0);
                transform: scale(1) rotateZ(0);
      }
      50% {
        -webkit-transform: scale(0.5) rotateZ(180deg);
                transform: scale(0.5) rotateZ(180deg);
      }
      100% {
        -webkit-transform: scale(1) rotateZ(360deg);
                transform: scale(1) rotateZ(360deg);
      }
    }
    @keyframes rotate-scale-down {
      0% {
        -webkit-transform: scale(1) rotateZ(0);
                transform: scale(1) rotateZ(0);
      }
      50% {
        -webkit-transform: scale(0.5) rotateZ(180deg);
                transform: scale(0.5) rotateZ(180deg);
      }
      100% {
        -webkit-transform: scale(1) rotateZ(360deg);
                transform: scale(1) rotateZ(360deg);
      }
    }
    
    /* ----------------------------------------------

    `;
  html = `
    
     </br></br></br></br></br></br>
     
   
       <span id="logo">Default</span>
   
       <br></br></br></br></br></br></br></br>
   
       <div id= "parametres">
       <label> 
       Texte : <input id="textInput" type="text"> 
       </label>
       </br>
       <label> Taille : <input id="heightRanger" type="range" min="10" max="200" step="1"> </label>
       <span id="height"></span>
  
     </br>
    
       <label> Opacité : <input id="opacityRanger" type="range" min="0" max="1" step="0.01"> </label> 
       <span id="opacity"></span>
    
     </br>
    
       <label for="textureSelect"> Arrière-plan animé : </label>
       <select name="textureSelect" id="textureSelect">
       {
           <option value="https://c.tenor.com/vXzvxEewFlAAAAAC/guitar.gif">gitare</option>
           <option value="https://c.tenor.com/QgurVK_OWEQAAAAC/dj-scratch.gif">DJ</option>
           <option value="https://c.tenor.com/zvWdei-o1BIAAAAC/anime.gif">city</option>
           <option value="https://c.tenor.com/1JsRrmdcTIcAAAAC/ayyee.gif">reactif color</option>
           <option value="https://c.tenor.com/eUGNMYebEwoAAAAd/bleu-blanc-rouge-france.gif">France</option>
           <option value="https://c.tenor.com/rKS8__SLDFkAAAAC/lights-border.gif">Cadre</option>
           <option value="https://c.tenor.com/qzivdvTZ_ngAAAAM/fireworks-explosion.gif">feu d'artifice</option>
       }
       </select>
    
     </br>
    
       <label for="texturePosSelect">Type de fond :</label>
       <select name="texturePosSelect" id="texturePosSelect">
       {
         <option value="onBackground">Fond</option>
         <option value="onText">Texte</option>
       }
       </select>
    
     </br>
    
       <label for="animationPicker">Animation :</label>
       <select name="animationPicker" id="animationPicker">
       {
         <option value="shadow-drop-center">Shadow Only</option>
         <option value="tracking-in-expand">open/close</option>
         <option value="rotate-scale-down">Infinite rotate down</option>
         <option value="vibrate-1">Vibration low</option>
         <option value="vibrate-3">Vibration hight</option>
         <option value="jello-horizontal"> jello efect </option>
         <option value="kenburns-top">moving -> / <-  </option>


       }
       </select>
    
   
   </br>
   <label for="fontPicker">Police :</label>
   <select name="fontPicker" id="fontPicker">
   {
     <option style="font-family: 'Times New Roman'">Times New Roman</option>
     <option style="font-family: 'Lucida Console'">Lucida Console</option>
     <option style="font-family: 'Rockwell'">Rockwell </option>
     <option style="font-family: Verdana">Verdana</option>
     <option style="font-family: 'Comic Sans Serif'">Comic Sans Serif</option>
     <option style="font-family: 'Trebuchet MS'">Trebuchet MS</option>
     <option style="font-family: 'Brush Script MT', cursive" value="'Brush Script MT', cursive">Brush Script MT</option>
     <option style="font-family: 'Garamond', serif" value="'Garamond', serif">Garamond</option>
     <option style="font-family: 'Impact', fantasy" value="'Impact', fantasy">Impact</option>
     <option style="font-family: 'Georgia', serif" value="'Georgia', serif">Georgia</option>
     <option style="font-family: sans-serif">Font-familly Name</option>
     <option style="font-family: arial">Arial</option>
     
   }
   </select>
   </br>
   
   <label> Couleur text : <input id="colorPicker" type="color">
  
   </label>
   <span id="colorID"></span>
   </br>
   <label>
   
     Couleur Bordure : <input id="borderColorPicker" type="color">
   
   </label>
   <span id="borderColorID"></span>
   </div>   

   </br>
    `;

  constructor() {
    super();
    // On crée le "shadow DOM"
    this.attachShadow({ mode: "open" });

    // récupérer les propriétés/attributs HTML
    this.text = this.getAttribute("text");
    this.animationClass = this.getAttribute("animation");
    this.controls = this.getAttribute("controls");
    this.size = this.getAttribute("size");
    this.couleur = this.getAttribute("couleur");
    this.shadowColorBox = this.getAttribute("shadowColorBox");
    this.bordure = this.getAttribute("bordure");
    this.opacite = this.getAttribute("opacite");
    this.opaciteBox = this.getAttribute("opaciteBox");
    this.taille = this.getAttribute("taille");
    this.positionTexture = this.getAttribute("positionTexture");
    this.texture = this.getAttribute("texture");
  }

  updateShadowMap() {
    this.updateShadow(
      this.shadowRoot.getElementById("borderColorPicker").value
    );
  }

  connectedCallback() {
    // ici on instancie l'interface graphique etc.
    this.shadowRoot.innerHTML = `<style>${this.style}</style>` + this.html;

    this.logo = this.shadowRoot.querySelector("#logo");

    // affecter les valeurs des attributs à la création
    this.logo.style.color = this.couleur;
    this.logo.classList.add(this.animationClass);

    this.shadowRoot.getElementById("textInput").oninput = () =>
      this.updateText(this.shadowRoot.getElementById("textInput").value);

    //this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById("opacityRanger").oninput = () =>
      this.updateOpacity(this.shadowRoot.getElementById("opacityRanger").value);
    this.shadowRoot.getElementById("textInput").oninput = () =>
      this.updateText(this.shadowRoot.getElementById("textInput").value);
    this.shadowRoot.getElementById("colorPicker").oninput = () =>
      this.updateColor(this.shadowRoot.getElementById("colorPicker").value);

    this.shadowRoot.getElementById("borderColorPicker").oninput = () =>
      this.updateShadowMap();
    this.shadowRoot.getElementById("animationPicker").onchange = () =>
      this.updateAnimation(
        this.shadowRoot.getElementById("animationPicker").value
      );
    this.shadowRoot.getElementById("fontPicker").onchange = () =>
      this.updateFont(this.shadowRoot.getElementById("fontPicker").value);
    this.shadowRoot.getElementById("heightRanger").oninput = () =>
      this.updateHeight(this.shadowRoot.getElementById("heightRanger").value);
    this.shadowRoot.getElementById("texturePosSelect").onchange = () =>
      this.updateTextureMap();
    this.shadowRoot.getElementById("textureSelect").onchange = () =>
      this.updateTextureMap();
//update des valeurs

    this.updateColor(this.couleur);
    this.updateOpacity(this.opacite);

    this.updateTexture(this.positionTexture, this.texture);
    this.updateHeight(this.taille);
    this.updateShadow(this.shadowColorBox, this.bordure, this.opaciteBox);
    this.updateText(this.text);
    this.fixRelativeURLs();

    this.myLogo = this.shadowRoot.querySelector("#logo");
    this.myLogo.setAttribute(
      "webkit-mask-image",
      getBaseURL() + "assets/flamme.jpg"
    );
    this.myLogo.textContent = this.text;

    this.updateFont(this.getAttribute("font"));

    this.currentAnimation = this.getAttribute("animation");

    this.myLogo.classList.add(this.currentAnimation);

    // On modifie les URLs relatifs
    this.fixRelativeURLs();
  }

  // methodes de mise à jour

  updateTexture(pos, texture) {
    if (pos == "onText") {
      this.shadowRoot.querySelector("#logo").classList.add("logoTexture");
      this.shadowRoot.getElementById("texturePosSelect").value = "onText";
      ("none");
    } else {
      console.log(pos, texture);
      this.shadowRoot.getElementById("texturePosSelect").value = "onBackground";
      this.shadowRoot.querySelector("#logo").classList.remove("logoTexture");
    }
    this.shadowRoot.querySelector("#logo").style["background-image"] =
      "url(" + texture + ")";
  }

  fixRelativeURLs() {
    let images = this.shadowRoot.querySelectorAll("img");
    images.forEach((e) => {
      console.log("dans le foreach");
      let imagePath = e.getAttribute("src");
      e.src = getBaseURL() + "/" + imagePath;
    });
  }

  updateHeight(height) {
    this.shadowRoot.getElementById("heightRanger").value = height;
    this.shadowRoot.getElementById("height").innerHTML = height;
    this.shadowRoot.querySelector("span").style.fontSize = height + "px";
  }

  updateAnimation(name) {
    this.shadowRoot
      .querySelector("#logo")
      .classList.remove(this.currentAnimation);
    this.currentAnimation = name;

    this.shadowRoot.querySelector("#logo").classList.add(this.currentAnimation);
  }

  updateFont(name) {
    this.myLogo.style.fontFamily = name;
    this.shadowRoot.getElementById("fontPicker").value = name;
  }

  updateOpacity(opacity) {
    this.shadowRoot.getElementById("opacityRanger").value = opacity;
    this.shadowRoot.getElementById("opacity").innerHTML = opacity;
    this.shadowRoot.querySelector("#logo").style.opacity = opacity;
  }

  updateColor(color) {
    this.shadowRoot.querySelector("#logo").classList.remove("logoTexture");
    this.updateTexture(
      "onBackground",
      this.shadowRoot.getElementById("textureSelect").value
    ); // Because if the texture is on the text, we wont see the color
    this.shadowRoot.getElementById("colorID").innerHTML = color;
    this.shadowRoot.getElementById("colorPicker").value = color;
    this.shadowRoot.querySelector("#logo").style.color = color;
  }

  updateShadow(borderColor) {
    this.shadowRoot.getElementById("borderColorID").innerHTML = borderColor;
    this.shadowRoot.getElementById("borderColorPicker").value = borderColor;
    this.shadowRoot.querySelector("#logo").style.textShadow =
      "1px 1px 2px" + borderColor + ", 0 0 " + ", 0 0 ";
  }

  updateText(newText) {
    if (this.shadowRoot.getElementById("textInput").value == "") {
      this.shadowRoot.getElementById("textInput").value = newText;
    }
    this.shadowRoot.querySelector("#logo").textContent = newText;
  }

  updateTextureMap() {
    this.updateTexture(
      this.shadowRoot.getElementById("texturePosSelect").value,
      this.shadowRoot.getElementById("textureSelect").value
    );
  }
}

customElements.define("my-logo-customize", MyLogoCustomize);
