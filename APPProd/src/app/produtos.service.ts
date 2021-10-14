import { Produtos } from './Produtos';
import { API_PATH } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions =
{
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  obterProdutos(): Observable<Produtos[]>
  {
    return this.httpClient.get<Produtos[]>(`${API_PATH}Produtos`);
  }

  getById(id: string): Observable<Produtos>
  {
    return this.httpClient.get<Produtos>(`${API_PATH}Produtos/${id}`);
  }

  incluirProduto(produto: Produtos) : Observable<any>
  {
    return this.httpClient.post<Produtos>(`${API_PATH}Produtos`, produto, httpOptions);
  }

  atualizarProduto(produto: Produtos) : Observable<any>
  {
    return this.httpClient.put<Produtos>(`${API_PATH}Produtos`, produto, httpOptions);
  }

  deletarProduto(id: string) : Observable<any>
  {
    return this.httpClient.delete<string>(`${API_PATH}Produtos/${id}`, httpOptions);

  }


}
