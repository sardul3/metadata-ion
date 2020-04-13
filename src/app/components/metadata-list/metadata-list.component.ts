import { Component, OnInit } from '@angular/core';
import { Metadata } from 'src/app/commons/metadata';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-metadata-list',
  templateUrl: './metadata-list.component.html',
  styleUrls: ['./metadata-list.component.scss'],
})
export class MetadataListComponent implements OnInit {

  stations: Metadata[];

  constructor(private metadataService: MetadataService) { }

  ngOnInit(): void {
    this.metadataService.getMetadatas().subscribe(data => {
      this.stations = data;
    });
  }

  onClick(id) {
    this.metadataService.getMetadata(id).subscribe(data => {
      const metadata = data;
      this.metadataService.selectedMetadata.emit(metadata);
    });
  }

}
