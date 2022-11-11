import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img src="./assets/images/brand.png" class="matero-branding-logo-expanded" alt="logo" />
      <span class="matero-branding-name">Bank Helper 3000</span>
    </a>
  `,
})
export class BrandingComponent {}
