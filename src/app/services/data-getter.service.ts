import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface AkatsukiList {
  name: string;
  rank: string;
  age: number;
  acod: number;
}

@Injectable({
  providedIn: "root",
})
export class DataGetterService {
  baseUrl = "http://localhost/api/";
  private akatsuki = [];
  private skills = [];
  private users = [];

  private userName = "";
  private token = "";

  constructor(private http: HttpClient) {}

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + "?action=login", user);
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  setToken(token: string) {
    this.token = token;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getAkatsuki() {
    return this.http.get<any>(
      this.baseUrl + "?action=get-akatsuki&token=" + this.token
    );
  }

  addAkatsuki(person: AkatsukiList) {
    this.akatsuki.push(person);
  }

  delAkatsuki(id) {
    this.akatsuki.splice(id, 1);
  }

  getSkills(cod: number): Observable<any[]> {
    return of(
      this.skills.filter((elem) => {
        return elem.cod === cod;
      })
    );
  }
}
