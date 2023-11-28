class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  }

  mostrarGeneracion() {
    let generacion;

    if (this.anoNacimiento >= 1994 && this.anoNacimiento <= 2010) {
      generacion = "Generación Z";
    } else if (this.anoNacimiento >= 1981 && this.anoNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
    } else if (this.anoNacimiento >= 1969 && this.anoNacimiento <= 1980) {
      generacion = "Generación X";
    } else if (this.anoNacimiento >= 1949 && this.anoNacimiento <= 1968) {
      generacion = "Baby Boom";
    } else {
      generacion = "Silent Generation (Los niños de la posguerra)";
    }

    return `Pertenece a la ${generacion}.`;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad} años, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso} kg, Altura: ${this.altura} cm, Año de Nacimiento: ${this.anoNacimiento}`;
  }
}

function registrarPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseInt(document.getElementById("altura").value);
  const anoNacimiento = parseInt(
    document.getElementById("anoNacimiento").value
  );

  if (
    nombre &&
    !isNaN(edad) &&
    dni &&
    sexo &&
    !isNaN(peso) &&
    !isNaN(altura) &&
    !isNaN(anoNacimiento)
  ) {
    const nuevaPersona = new Persona(
      nombre,
      edad,
      dni,
      sexo,
      peso,
      altura,
      anoNacimiento
    );
    mostrarResultados(nuevaPersona);
  } else {
    alert("Por favor, completa todos los campos correctamente.");
  }
}

function mostrarResultados(persona) {
  const datosPersona = document.getElementById("datosPersona");
  datosPersona.innerHTML = persona.mostrarDatos();

  const resultados = document.getElementById("resultados");
  resultados.style.display = "block";
}

function mostrarGeneracion() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const anoNacimiento = parseInt(
    document.getElementById("anoNacimiento").value
  );

  const persona = new Persona(nombre, edad, "", "", 0, 0, anoNacimiento);
  const generacion = persona.mostrarGeneracion();
  alert(`${nombre} ${generacion}`);
}

function esMayorDeEdad() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);

  const persona = new Persona(nombre, edad, "", "", 0, 0, 0);
  const mensaje = persona.esMayorDeEdad() ? `${nombre} es mayor de edad.` : `${nombre} NO es mayor de edad.`;
  alert(mensaje);
}
