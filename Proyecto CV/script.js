// Variable para verificar si se ha cargado una foto
let fotoCargada = false;

document.getElementById("cargar__foto").addEventListener("click", () => {
    document.getElementById("input__cargarFoto").click();
});

document.getElementById("input__cargarFoto").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        fotoCargada = true; // Marcamos que se ha cargado una foto
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("foto__perfil").src = e.target.result;
            document.getElementById("foto__perfil_final").src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        fotoCargada = false; // Reiniciamos el estado si no se carga una foto
    }
});

// BOTON GENERAR CV
let generarCV = document.getElementById("generar__cv");
generarCV.addEventListener("click", generarCurriculum);

let cv = document.getElementById("cv");
cv.style.display = "none";
let buttonContainer = document.getElementById("button__container");
buttonContainer.style.display = "none";

function generarCurriculum() {
    // INPUTS: DATOS PERSONALES
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let edad = document.getElementById("edad").value.trim();

    let spanNombre = document.getElementById("span__nombre");
    let spanApellido = document.getElementById("span__apellido");
    let spanEdad = document.getElementById("span__edad");

    spanNombre.textContent = nombre + ",";
    spanApellido.textContent = apellido;
    spanEdad.textContent = `${edad} Años`;

    // INPUTS: CONTACTO
    let celular = document.getElementById("celular").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let domicilio = document.getElementById("domicilio").value.trim();

    let spanCelular = document.getElementById("span__celular");
    let spanCorreo = document.getElementById("span__correo");
    let spanDomicilio = document.getElementById("span__domicilio");

    spanCelular.textContent = "• " + celular;
    spanCorreo.textContent = "• " + correo;
    spanDomicilio.textContent = "• " + domicilio;

    // INPUTS: HABILIDADES
    let habilidad1 = document.getElementById("habilidad1").value.trim();
    let habilidad2 = document.getElementById("habilidad2").value.trim();
    let habilidad3 = document.getElementById("habilidad3").value.trim();
    let habilidad4 = document.getElementById("habilidad4").value.trim();
    let habilidad5 = document.getElementById("habilidad5").value.trim();
    let habilidad6 = document.getElementById("habilidad6").value.trim();

    let spanHabilidad1 = document.getElementById("span__habilidad1");
    let spanHabilidad2 = document.getElementById("span__habilidad2");
    let spanHabilidad3 = document.getElementById("span__habilidad3");
    let spanHabilidad4 = document.getElementById("span__habilidad4");
    let spanHabilidad5 = document.getElementById("span__habilidad5");
    let spanHabilidad6 = document.getElementById("span__habilidad6");

    spanHabilidad1.textContent = "• " + habilidad1;
    spanHabilidad2.textContent = "• " + habilidad2;
    spanHabilidad3.textContent = "• " + habilidad3;
    spanHabilidad4.textContent = "• " + habilidad4;
    spanHabilidad5.textContent = "• " + habilidad5;
    spanHabilidad6.textContent = "• " + habilidad6;

    // INPUTS: EMPRESA
    let empresa1 = document.getElementById("empresa1").value.trim();
    let cargo1 = document.getElementById("cargo1").value.trim();
    let añoInicio1 = document.getElementById("añoInicio1").value.trim();
    let añoFin1 = document.getElementById("añoFin1").value.trim();

    let spanEmpresa1 = document.getElementById("span__empresa1");
    let spanCargo1 = document.getElementById("span__cargo1");
    let spanAñoInicio1 = document.getElementById("span__añoInicio1");
    let spanAñoFin1 = document.getElementById("span__añoFin1");

    spanEmpresa1.textContent = `• ${empresa1}`;
    spanCargo1.textContent = cargo1;
    spanAñoInicio1.textContent = `${añoInicio1}-`;
    spanAñoFin1.textContent = añoFin1;

    let empresa2 = document.getElementById("empresa2").value.trim();
    let cargo2 = document.getElementById("cargo2").value.trim();
    let añoInicio2 = document.getElementById("añoInicio2").value.trim();
    let añoFin2 = document.getElementById("añoFin2").value.trim();

    let spanEmpresa2 = document.getElementById("span__empresa2");
    let spanCargo2 = document.getElementById("span__cargo2");
    let spanAñoInicio2 = document.getElementById("span__añoInicio2");
    let spanAñoFin2 = document.getElementById("span__añoFin2");

    spanEmpresa2.textContent = `• ${empresa2}`;
    spanCargo2.textContent = cargo2;
    spanAñoInicio2.textContent = `${añoInicio2}-`;
    spanAñoFin2.textContent = añoFin2;

    let empresa3 = document.getElementById("empresa3").value.trim();
    let cargo3 = document.getElementById("cargo3").value.trim();
    let añoInicio3 = document.getElementById("añoInicio3").value.trim();
    let añoFin3 = document.getElementById("añoFin3").value.trim();

    let spanEmpresa3 = document.getElementById("span__empresa3");
    let spanCargo3 = document.getElementById("span__cargo3");
    let spanAñoInicio3 = document.getElementById("span__añoInicio3");
    let spanAñoFin3 = document.getElementById("span__añoFin3");

    spanEmpresa3.textContent = `• ${empresa3}`;
    spanCargo3.textContent = cargo3;
    spanAñoInicio3.textContent = `${añoInicio3}-`;
    spanAñoFin3.textContent = añoFin3;

    let empresa4 = document.getElementById("empresa4").value.trim();
    let cargo4 = document.getElementById("cargo4").value.trim();
    let añoInicio4 = document.getElementById("añoInicio4").value.trim();
    let añoFin4 = document.getElementById("añoFin4").value.trim();

    let spanEmpresa4 = document.getElementById("span__empresa4");
    let spanCargo4 = document.getElementById("span__cargo4");
    let spanAñoInicio4 = document.getElementById("span__añoInicio4");
    let spanAñoFin4 = document.getElementById("span__añoFin4");

    spanEmpresa4.textContent = `• ${empresa4}`;
    spanCargo4.textContent = cargo4;
    spanAñoInicio4.textContent = `${añoInicio4}-`;
    spanAñoFin4.textContent = añoFin4;

    // Verificar si todos los campos están llenos y si se ha cargado una foto
    if (nombre === "" || apellido === "" || edad === "" || celular === "" || correo === "" || domicilio === "" ||
        habilidad1 === "" || habilidad2 === "" || habilidad3 === "" || habilidad4 === "" || habilidad5 === "" || habilidad6 === "" ||
        empresa1 === "" || cargo1 === "" || añoInicio1 === "" || añoFin1 === "" ||
        empresa2 === "" || cargo2 === "" || añoInicio2 === "" || añoFin2 === "" ||
        (empresa3 === "" && cargo3 === "" && añoInicio3 === "" && añoFin3 === "" && empresa4 === "")) {
        
        alert("Se detectaron campos vacíos... Por favor, complete todos los campos.");
        
        // Verificar si la foto está cargada
        if (!fotoCargada) {
            alert("Por favor, cargue una foto.");
        }
        
        // Limpiar campos si faltan datos de empresa
        if (empresa3 === "" || cargo3 === "" || añoInicio3 === "" || añoFin3 === "" || empresa4 === "") {
            spanEmpresa3.textContent = "";
            spanAñoInicio3.textContent = "";
            spanEmpresa4.textContent = "";
            spanAñoInicio4.textContent = "";
        }
    } else if (!fotoCargada) {
        alert("Por favor, cargue una foto.");
    } else {
        alert("Su CV se generó con éxito.");
        let recepcion = document.getElementById("recepcion");
        recepcion.style.display = "none";
        cv.style.display = "flex";
        buttonContainer.style.display = "flex";
    }

    let parrafoDinamico = document.getElementById("paragraph__adm");
    parrafoDinamico.contentEditable = true;
}

document.getElementById("descargar").addEventListener("click", () => {
    const element = document.getElementById("cv");
    html2pdf().from(element).save("cv.pdf");
});
