import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question-short/question.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuestionComponent,
    QuestionsListComponent
  ]
})
export class QuestionModule { }
