import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    public API_URL: string = "http://localhost:8082";
}