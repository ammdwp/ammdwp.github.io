import {
  getAuth
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  tieneRol
} from "./seguridad.js";
import {
  checksRoles,
  guardaUsuario,
  selectStreamers
} from "./usuarios.js";

/** @type {HTMLFormElement} */
const forma = document["forma"];
/** @type {HTMLUListElement} */
const listaRoles = document.
  querySelector("#listaRoles");

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
    selectStreamers(
      forma.streamerId, "");
    checksRoles(listaRoles, []);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  const formData =
    new FormData(forma);
  const id = getString(
    formData, "cuenta").trim();
  await guardaUsuario(evt,
    formData, id);
}