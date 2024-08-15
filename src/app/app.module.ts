import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';

import { appC } from './app.component';

@NgModule({
  declarations: [
    appC,
    AboutComponent,
    HeaderComponent,
    HobbiesComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}
