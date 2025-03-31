import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  templateUrl: "./sidebar.component.html",
  selector: "sidebar-main",
  imports: [RouterLink, RouterLinkActive]

})
export class sidebar { }