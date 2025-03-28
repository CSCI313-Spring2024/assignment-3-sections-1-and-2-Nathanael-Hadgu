import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // readonly baseurl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  // Inject the HousingService into the component
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];
      
  constructor() { 
    //setting housingLocationList to the data array in HousingService
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  filterResults(text: string) {
    if(text!){
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => {
       housingLocation?.city.toLowerCase().includes(text.toLowerCase());
    });
  }
}
