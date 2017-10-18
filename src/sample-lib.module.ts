import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleServiceService } from './sample-service.service'

@NgModule({
    imports: [CommonModule],
    declarations: [SampleComponentComponent],
    exports: [SampleComponentComponent],
    providers: [SampleServiceService]
})
export class SampleLibModule { 

}
