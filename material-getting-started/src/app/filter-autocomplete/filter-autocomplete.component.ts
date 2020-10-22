import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filter-autocomplete',
  templateUrl: './filter-autocomplete.component.html',
  styleUrls: ['./filter-autocomplete.component.css']
})
export class FilterAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[]  = ['One', 'Two', 'Three'];
  filteredOptions: Observable<String[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
