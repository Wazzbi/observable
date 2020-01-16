import { Observable } from "rxjs";
import { WeatherInfo } from "./models/weather-info.model";
import { WeatherServiceService } from "./weather-service.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  _destination: string = "Prague";
  _destinations: string[] = ["Paris", "London", "Berlin"];
  destination = new WeatherInfo();
  destinations: WeatherInfo[] = [];

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getDestination();
    this.getDestinations();
  }

  getDestination(): void {
    this.weatherService.getWeather(this._destination).subscribe(res => {
      this.destination = res;
    });
  }

  getDestinations(): void {
    this._destinations.forEach(element => {
      this.weatherService.getWeather(element).subscribe(res => {
        this.destinations.push(res);
      });
    });
  }

  //TODO: získat observable<> do html přes | async
}
