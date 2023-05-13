function saludar() {
    // Verificar si el navegador soporta la síntesis de voz
    if ('speechSynthesis' in window) {
      // Crear el objeto SpeechSynthesisUtterance para configurar el mensaje
      const mensaje = new SpeechSynthesisUtterance();
      mensaje.text = '¡Hola! Bienvenido a tu casa inteligente';
      
      // Reproducir el mensaje de voz
      window.speechSynthesis.speak(mensaje);
    } else {
      console.log('El navegador no soporta síntesis de voz.');
    }
  }