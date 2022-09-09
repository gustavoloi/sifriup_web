import { Component, OnInit } from "@angular/core";
import { ChartOptions } from "chart.js";
import { switchMap } from "rxjs/operators";
import { GenericService } from "../../../services/generic/generic.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  constructor(private service: GenericService) {}

  public barChartLabels = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public chartColors: Array<any> = [
    {
      // all colors in order
      backgroundColor: ["#f28f8f", "#f2d48f", "#9cf28f"],
    },
  ];

  public barChartType = "doughnut";
  public barChartData: any = [];
  ngOnInit() {
    this.service
      .get("setor")
      .pipe(
        switchMap((labels) => {
          this.barChartLabels = labels.map((setor) => setor.nome);
          return this.service.get("foto/hoje");
        })
      )
      .subscribe((resultData) => {
        this.barChartData = resultData.map((map: any) => map.total);
      });
  }
}
