import { RouteInfo } from "../type";
import View from "./View";

class Roter {
  routeTable: RouteInfo[];
  defaultPage: RouteInfo | null;

  constructor() {
    window.addEventListener("hashchange", this.route);
    this.routeTable = [];
    this.defaultPage = null;
  }

  setDefault(page: View): void {
    this.defaultPage = {
      path: "",
      page,
    };
  }

  addPath(path: string, page: View): void {
    this.routeTable.push({
      path,
      page,
    });
  }

  route(): void {
    const routePath: string = location.hash;

    if (routePath === "" && this.defaultPage) {
      return this.defaultPage.page.render();
    }

    for (const routeInfo of this.routeTable) {
      const { path, page } = routeInfo;
      if (routePath.indexOf(path) >= 0) {
        page.render();
        break;
      }
    }

    console.log("404");
  }
}
