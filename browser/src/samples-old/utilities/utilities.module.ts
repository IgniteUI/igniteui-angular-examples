import { ModuleWithProviders, NgModule } from "@angular/core";
import { KeysPipe } from "./keys-pipe";

@NgModule({
    declarations: [
        KeysPipe
    ],
    exports: [
        KeysPipe
    ]
})
export class SamplesUtilitiesModule {
    public static forRoot(): ModuleWithProviders<SamplesUtilitiesModule> {
        return {
            ngModule: SamplesUtilitiesModule
        };
    }
}
