import {Component, OnInit} from '@angular/core';
import DateRange from "../../../../models/date-range";
import {FortuneFivehundredService} from "../../../../services/fortune-fivehundred.service";
import {DateFormatterService} from "../../../../services/date-formatter.service";

@Component({
  selector: 'app-fortune-fivehundred-company-info',
  templateUrl: './fortune-fivehundred-company-info.component.html',
  styleUrls: ['./fortune-fivehundred-company-info.component.scss']
})
export class FortuneFivehundredCompanyInfoComponent implements OnInit {

  public dateRange: DateRange | undefined;
  public companies: any[] = [];
  public loading: boolean = false;

  constructor(private fortuneFivehundredService: FortuneFivehundredService) {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.dateRange !== undefined) {

      const startYear = DateFormatterService.dateToYear(this.dateRange.start);
      const endYear = DateFormatterService.dateToYear(this.dateRange.end);

      let years: string[] = [];
      for (let year = startYear; year <= endYear; year++) {
        years.push(String(year));
      }

      this.loading = true;
      this.fortuneFivehundredService.getCompanyUrls(years)
        .subscribe(urlByYear => {
          console.log(urlByYear);
          // urls.forEach((url: string) => {
          //   this.fortuneFivehundredService.getCompanies(url)
          //     .subscribe(company => {
          //       this.companies.push(company);
          //     })
          // })
        })
    }
  }

  public processCompany(url: string) {

  }

}
