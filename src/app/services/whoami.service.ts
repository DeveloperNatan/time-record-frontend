import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";

interface CurrentUser {
    authenticated: boolean;
    email: string;
    userId: string;
    name: string;
}

@Injectable({
    providedIn: 'root',
})

export class WhoAmi {
    private http = inject(HttpClient);

    private readonly apiUrl = environment.apiUrl;

    GetCurrentUser() {
        return this.http.get<CurrentUser>(`${this.apiUrl}/api/auth/me`);
    }
}