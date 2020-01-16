export class WeatherInfo {
  public coord: Coord;
  public weather: Weather[];
  public base: string;
  public main: Main;
  public visibility: number;
  public wind: Wind;
  public clouds: Clouds;
  public dt: number;
  public sys: Sys;
  public timezone: number;
  public id: number;
  public name: string;
  public cod: number;

  /**
    constructor(name: string) {
    this.name = name;
  } */
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Coord {
  lon: number;
  lat: number;
}
