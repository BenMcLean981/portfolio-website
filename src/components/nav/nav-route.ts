export interface NavRoute {
  path: string;

  name: string;
}

export interface NavMenu {
  name: string;

  routes: ReadonlyArray<NavRoute>;
}
