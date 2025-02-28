export interface ContainerStyle {
  gapX: number;
  gapY: number;
  column: number;
  sm: number;
  md: number;
  lg: number;
}
export interface GridItem {
  x: number;
  y: number;
  w: number;
  h: number;
  config: {
    name: string;
    colSpan: string;
  };
}
export type Breakpoint = 'sm' | 'md' | 'lg';
