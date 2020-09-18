const Color = require('color');

export const breakpoints = {
  mobileGrande: '468px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  notebook: '1920px',
};

// Funcion para leer el color, devuelve el valor del color en hsl para que sea constante en distintas pantallas.

export const leerColor = color => color.hsl().string();

/**
 * Para definir un color utilizamos la librería colors. (Importada arriba). Esto nos permite tener colores exactos a traves de las distintas pantallas.
 * Además podemos hacer ajustes sobre la opacidad, brillo y otras variables del color.
 *
 * Documentación: https://github.com/Qix-/color#readme [IMPORTANTE LEER]
 *
 */
export const colores = {
  blanco: Color.rgb(255, 255, 255),
  gris: Color.rgb(59, 71, 87),
  grisDos: Color.rgb(177, 178, 180),
  grisTres: Color.rgb(112, 112, 112),
  grisBlanco: Color.rgb(241, 245, 246), 
  violeta: Color.rgb(51, 40, 82), 
  violetaDos: Color.rgb(78, 52, 154), 
  lila: Color.rgb(152, 122, 239), 
  lila2: Color.rgb(187, 167, 245), 
  lila3: Color.rgb(227, 217, 255), 
  rosa: Color.rgb(239, 97, 119), 
  rosaDos: Color.rgb(248, 151, 166), 
  rosaTres: Color.rgb(252, 198, 206), 
  amarillo: Color.rgb(247, 198, 103), 
  amarilloDos: Color.rgb(255, 221, 156), 
  amarilloTres: Color.rgb(255, 240, 212), 
  naranja: Color.rgb(243, 154, 110), 
  naranjaDos: Color.rgb(255, 199, 171), 
  naranjaTres: Color.rgb(255, 231, 219)
};
