import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractProductService} from '../../../Services/ProductServices/AbstractProductService';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit, OnDestroy {
  searchBox: FormGroup;
  unsubscriber$ = new Subject();
  constructor(private abstractProductsService: AbstractProductService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchBox = this.formBuilder.group({
      searchingFor: ''
    });
    this.searchBox.valueChanges
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscriber$))
      .subscribe(val => {
      this.abstractProductsService.searchForProductsByName(val.searchingFor);
    });
  }
  ngOnDestroy(): void {
    this.unsubscriber$.next();
  }

}
