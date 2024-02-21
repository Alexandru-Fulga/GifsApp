import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h2 class="display-5">Buscar:</h2>
  <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag()" #txtTagInput>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    if (newTag == '') return;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
