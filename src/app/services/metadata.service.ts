import { Injectable, EventEmitter } from '@angular/core';
import { Metadata } from '../commons/metadata';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  selectedMetadata = new EventEmitter<Metadata>();
  baseUrl = 'http://localhost:8080/metadatas';

  constructor(private http: HttpClient) { }

  getMetadatas(){
    return this.http.get<MetadataResponse>(this.baseUrl).pipe(
      map(response => response._embedded.metadatas)
    );
  }

  getMetadata(id: number){
    const finalUrl = `${this.baseUrl}/${id}`;
    return this.http.get<Metadata>(finalUrl).pipe(
      map(response => response)
    );
  }

}

interface MetadataResponse {
  _embedded: {
    metadatas: Metadata[];
  };
};