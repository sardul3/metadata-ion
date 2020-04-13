import { Component, OnInit } from '@angular/core';
import { Metadata } from 'src/app/commons/metadata';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-metadata-detail',
  templateUrl: './metadata-detail.component.html',
  styleUrls: ['./metadata-detail.component.scss'],
})
export class MetadataDetailComponent implements OnInit {

  selectedStation: Metadata = new Metadata();

  constructor(private route: ActivatedRoute, private metadataService: MetadataService) { }

  ngOnInit(): void {
        this.metadataService.selectedMetadata.subscribe( data => {
          this.selectedStation = data;
        });
      }
}
