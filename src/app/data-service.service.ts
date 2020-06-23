import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private getLista = 'prueba';
  respuesta: any[];
  is_private: boolean;
  mIncognito: string;
  constructor(private http: HttpClient) { 
   }

    obtenerListado() {
    const dataPost = {
      userAgent: navigator.userAgent,
      modoIncognito: this.is_private
    }
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
      return this.http.post(this.getLista, dataPost, {headers}).subscribe((data: any[]) => {
        this.respuesta = data;
    })
  }

  async incognito() {

    if ("storage" in navigator && "estimate" in navigator.storage) {
      const { usage, quota } = await navigator.storage.estimate();
      console.log(`Using ${usage} out of ${quota} bytes.`);
      if (quota < 120000000) {
        // Incognito;
        this.is_private = true;
      } else {
        // Not Incognito
        this.is_private = false;
      }
    } else {
      // Can not detect
      this.is_private = null;
    }
    setTimeout(()=>{ 
      this.obtenerListado();
    });
  }
}