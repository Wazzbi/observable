import { Observable } from "rxjs";
import { WeatherInfo } from "../models/weather-info.model";
import { WeatherServiceService } from "../weather-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  _destination: string = "Prague";
  destination = new WeatherInfo();

  _destinations: string[] = ["Paris", "London", "Berlin"];
  destinations: WeatherInfo[] = [];

  //destination$: Array<Observable<WeatherInfo>>;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit() {
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
        res.main.temp = Math.round(res.main.temp - 273.15);
        this.destinations.push(res);
      });
    });
  }

  //TODO: získat observable<> do html přes | async
  /**
    getDestinations$(): void {
    this._destinations.forEach(element => {
      let x: Observable<WeatherInfo> = this.weatherService.getWeather(element);
      this.destination$.push(x);
      console.log(this.destination$.length);
    });
  } 
   */
}
