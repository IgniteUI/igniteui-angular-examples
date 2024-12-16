import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html",
    standalone: false
})
export class HomeComponent implements OnInit {

    constructor() { }

    public ngOnInit() {
        // console.log("SB home ngOnInit");
    }
}
