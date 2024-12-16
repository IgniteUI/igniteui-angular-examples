import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit } from "@angular/core";

@Component({
    selector: "app-docs-layout",
    styleUrls: ["./docs-layout.component.scss"],
    template: `<router-outlet></router-outlet>`,
    standalone: false
})

export class DocsLayoutComponent {}
