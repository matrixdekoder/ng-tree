import {EventEmitter} from '@angular/core';

export interface MenuItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  eventEmitter?: EventEmitter<any>;
  disabled?: boolean;
}

export interface ITreeNode {
  id: string;
  name: string;
  data?: any;
  children?: ITreeNode[];
  expanded?: boolean;
  leaf?: boolean;
  parent?: ITreeNode;
  icon?: string;
  $$id?: string;
  $$filterState?: number;
  $$level?: number;
}

export interface ITreeService {
  url: string;
  getNodes(node?: ITreeNode): Promise<ITreeNode[]>;
  searchNodes(name: string): Promise<any>;
}
