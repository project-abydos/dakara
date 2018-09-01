import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DodAcronymsService, IDoDAcronym } from '../dod-acronyms.service';

@Component({
  selector: 'app-acronym-lookup',
  templateUrl: './acronym-lookup.component.html',
  styleUrls: ['./acronym-lookup.component.css']
})
export class AcronymLookupComponent implements OnInit {

  acronyms: IDoDAcronym[];
  search: string;

  constructor(private dodAcronymService: DodAcronymsService) { }

  ngOnInit() {
  }

  doSearch(search: string) {
    this.acronyms = this.dodAcronymService.lookup(search);
  }

}
