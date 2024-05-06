import { Component, OnInit } from '@angular/core';
import { PageListService } from '../services/page-list.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  dataSource: any;

  dataSourceToShow: any;

  selectedItem: any;

  isSearch = true;
  searchText: string = '';

  filteredDataSource: any;

  constructor(
    private pageListService: PageListService
  ) { }

  ngOnInit(): void {
    this.pageListService.getPageList().subscribe((items) => {
      this.dataSource = items;
      this.dataSourceToShow = items;
    })
  }

  onSearchTextEntered(search: string) {
    const searchText = search.toLowerCase();
  
    if (searchText === '') {
      this.dataSourceToShow = this.dataSource;
    } else {
      this.filteredDataSource = this.dataSource.filter((dataItem: any) =>
        dataItem.title.toLowerCase().includes(searchText)
      );
  
      this.dataSourceToShow = this.filteredDataSource.length > 0 ? this.filteredDataSource : null;
    }
  
    console.log(this.dataSourceToShow);
  }

  removerItem(item: any) { 
    const index = this.dataSource.findIndex((dataItem: any) => dataItem.id === item); 
    if (index !== -1) {
      this.dataSource.splice(index, 1); 
    }
  }

}
