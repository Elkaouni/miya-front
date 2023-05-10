import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [],
})
export class ConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: ConfigModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Config module in the AppModule only.`);
    }
  }
}
