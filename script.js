



//Cifra el texto ingresado
function textoIngresado(texto, desp){

  return texto.split('').map(char => {
    let texto2 = char.charCodeAt(0)

    if(texto2 >= 97 && texto2 <= 122){
      return String.fromCharCode(((texto2 - 97 + desp) % 26) + 97)
    }
    return char
  }).join('')
  
}

//Encriptar el texto
function encriptarTexto(){
  let texto = document.getElementById("texto").value.toLowerCase()
  let desp = 5
  let textoEncriptado = textoIngresado(texto, desp)
  document.getElementById('resultado').textContent = `${textoEncriptado}`
  
  // Limpiar la caja de texto de entrada
  document.getElementById('texto').value = '';
  mostrarOcultarImg()
}

function mostrarOcultarImg(){
  let icono = document.getElementById('icono');
  let texto = document.getElementById('resultado').value;
  if (texto === '') {
      icono.style.display = 'block'; // Mostrar la imagen si el campo está vacío
  } else {
      icono.style.display = 'none'; // Ocultar la imagen si hay texto
  }
}

document.getElementById('resultado').addEventListener('textarea', mostrarOcultarImg)

mostrarOcultarImg()

//Desencripta el texto cifrado
function desencriptarTexto(){
  let texto = document.getElementById("resultado").value
  let desp = -5
  let textoDesencriptado = textoIngresado(texto, desp)
  document.getElementById('resultado').textContent = `${textoDesencriptado}`
}

//Copia el texto cifrado
function copiarTexto(){
  let texto = document.getElementById('resultado').value

  document.getElementById('texto').value = texto

  //Limpia la caja de texto luego de copiarla
  //document.getElementById('resultado').value = '';
  //
}

