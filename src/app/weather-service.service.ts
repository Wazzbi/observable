import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherInfo } from "../app/models/weather-info.model";

@Injectable({
  providedIn: "root"
})
export class WeatherServiceService {
  private API_KEY = "0cb19ff372d553d93a274679f779e70b";

  constructor(private http: HttpClient) {}

  public getWeather(destination: string): Observable<WeatherInfo> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${this.API_KEY}`;
    return this.http.get<WeatherInfo>(url);
  }
}
