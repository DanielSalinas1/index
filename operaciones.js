import { guardadatosig } from './conection.js';

const form = document.getElementById('datosig');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const contraseña = document.getElementById('contraseña').value.trim();
  const nombre = document.getElementById('nombre').value.trim();
  
  await guardarDatos(contraseña, nombre);
});

const guardarDatos = async (contraseña, nombre) => {
  try {
    await guardadatosig(contraseña, nombre);
    console.log('Datos guardados correctamente en Firebase');
    // Aquí puedes agregar el código adicional que deseas ejecutar después de guardar los datos en Firebase
  } catch (error) {
    console.error('Error al guardar los datos en Firebase:', error);
    // Aquí puedes agregar el código de manejo de errores si la operación de guardado falla
  }
};


