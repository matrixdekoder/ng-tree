import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {TreeViewComponent} from './tree-view/tree-view.component';
import {TreeViewNodeComponent} from './tree-view/tree-view-node.component';
import {ContextMenuComponent} from './context-menu/context-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    TreeViewComponent,
    TreeViewNodeComponent,
    ContextMenuComponent,
  ],
  exports: [
    TreeViewComponent,
    ContextMenuComponent,
  ],
  providers: []
})
export class TreeModule {
}
