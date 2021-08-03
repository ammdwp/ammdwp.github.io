import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraStreamers
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoStreamer =
  getFirestore().
    collection("Streamer");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    const nombre = getString(formData, "nombre").trim();
    const telefono = getString(formData, "telefono").trim();
    const plataforma = getString(formData, "plataforma").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
      nombre,
      telefono,
      plataforma,
      fecha 
    };
    await daoStreamer.
      add(modelo);
    muestraStreamers();
  } catch (e) {
    muestraError(e);
  }
}

