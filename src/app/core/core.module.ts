import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EnsureModuleImportedOnceGuard } from './guards/ensure-module-imported-once.guard';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class CoreModule extends EnsureModuleImportedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent, 'CoreModule');
  }
}
