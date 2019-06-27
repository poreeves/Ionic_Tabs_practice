import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { Segment1Component } from './segment1/segment1';
import { Segment2Component } from './segment2/segment2';
import { Segment3Component } from './segment3/segment3';
import { QuestionsComponent } from './questions/questions';
@NgModule({
	declarations: [Segment1Component,
    Segment2Component,
    Segment3Component,
    QuestionsComponent],
	imports: [IonicModule],
	exports: [Segment1Component,
    Segment2Component,
    Segment3Component,
    QuestionsComponent]
})
export class ComponentsModule {}
