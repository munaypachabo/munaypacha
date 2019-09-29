import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { AntService } from '../ant.service';
import { Ant } from '../../shared/models/ant.model';

@Component({
  selector: 'pacha-ant-profile',
  templateUrl: './ant-profile.component.html',
  styleUrls: ['./ant-profile.component.scss']
})
export class AntProfileComponent implements OnInit {
  ant$: Observable<Ant>;
  antId: string;

  constructor(private route: ActivatedRoute, private antService: AntService) {}

  ngOnInit(): void {
    this.antId = this.route.snapshot.paramMap.get('id');
    this.ant$ = this.antService.getById(this.antId);
  }
}
