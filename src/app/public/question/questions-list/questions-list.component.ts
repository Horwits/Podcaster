import { Component, OnInit } from '@angular/core';
import { Question } from '../../../core/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  private questions: Question[];
  constructor() { }

  ngOnInit() {
  }
}
