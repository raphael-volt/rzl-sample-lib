import { TestBed, async } from '@angular/core/testing'
import { SampleLibModule } from '../src/sample-lib.module'

describe('SampleLibModule', () => {
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                SampleLibModule
            ]
        })
    })

    it('should log module SampleLibModule', () => {
        console.log(SampleLibModule)
        expect(SampleLibModule).toBeTruthy()
    })
})
