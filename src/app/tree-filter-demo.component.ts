import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITreeNode, ITreeService, MenuItem} from '../ng-tree';
import {TreeDemoService} from './tree-demo.service';

@Component({
  selector: 'app-tree-filter-demo',
  template: `
    <app-tree-view
      [service]="treeService"
      [selectedNode]="selectedNode"
      (selectedChanged)="onSelectNode($event)"
      [serverSideFiltering]="true"
      [contextMenu]="contextMenu">
    </app-tree-view>
    <app-context-menu #contextMenu [items]="items"></app-context-menu>
  `
})
export class TreeFilterDemoComponent implements OnInit {

  public treeService: ITreeService;
  public selectedNode: ITreeNode;
  public items: MenuItem[];

  constructor(private http: HttpClient) {
    this.treeService = new TreeDemoService(this.http);
  }

  ngOnInit() {
    this.items = [
      {label: 'View Task', command: (event) => console.log(this.selectedNode)},
      {label: 'Edit Task', command: (event) => console.log(event)},
      {label: 'Delete Task', command: (event) => console.log(event), disabled: true}
    ];
  }

  onSelectNode(node: ITreeNode) {
    this.selectedNode = node;
    console.log(node);
  }

}
