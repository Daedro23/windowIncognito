import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private getLista = 'https://dominioDanny.com/prueba';
  respuesta: any;
  is_private: boolean;
  mIncognito: string;
  constructor(private http: HttpClient) { 
    this.incognito().then(() => {
      this.guardarLocalStorage();
    })
   }

  postFunction(localVar) {
    const dataPost = {
      userAgent: navigator.userAgent,
      modoIncognito: this.is_private,
      esPrimeraVez: localVar.primeraVez
    }
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
      return this.http.post(this.getLista, dataPost, {headers}).subscribe((data: any) => {
        this.respuesta = data;
    })
  }


  guardarLocalStorage() {
    if(localStorage.getItem("localVar") === null) {
      let localVar = {
        primeraVez: true
      }
      localStorage.setItem("localVar", JSON.stringify(localVar));
      console.log("Esta es la primera vez");
      this.postFunction(localVar);
    } else {
      let localVar = JSON.parse(localStorage.getItem("localVar"));
      localVar = {
        primeraVez: false
      }
      console.log("No es primera vez");
      this.postFunction(localVar);
    }
  }

  async incognito() {

    if ("storage" in navigator && "estimate" in navigator.storage) {
      const { usage, quota } = await navigator.storage.estimate();
      console.log(`Using ${usage} out of ${quota} bytes.`);
      if (quota < 120000000) {
        // Incognito;
        this.is_private = true;
      } else {
        // No es Incognito
        this.is_private = false;
      }
    } else {
      // No se puede detectar
      this.is_private = null;
    }
  }
}