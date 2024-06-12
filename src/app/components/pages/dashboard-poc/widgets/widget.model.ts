

import { GridsterItem } from 'angular-gridster2';

export interface Widget extends GridsterItem {
    type: string;
    config: any;
    x: number;
    y: number;
    cols: number;
    rows: number;
  }