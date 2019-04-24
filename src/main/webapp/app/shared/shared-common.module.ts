import { NgModule } from '@angular/core';

import { JustTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JustTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JustTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JustTestSharedCommonModule {}
