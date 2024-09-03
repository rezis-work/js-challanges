class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addvettex(vtx) {
    if (!this.adjecencyList[vtx]) {
      this.adjecencyList[vtx] = [];
      return true;
    }
    return false;
  }

  addEdga(vtx1, vtx2) {
    if (this.adjecencyList[vtx1] && this.adjecencyList[vtx2]) {
      this.adjecencyList[vtx1].push(vtx2);
      this.adjecencyList[vtx2].push(vtx1);
      return true;
    }

    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjecencyList[vtx1] && this.adjecencyList[vtx2]) {
      this.adjecencyList[vtx1] = this.adjecencyList[vtx2].filter(
        (v) => v !== vtx2
      );
      this.adjecencyList[vtx2] = this.adjecencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx) {
    if (!this.adjecencyList[vtx]) return undefined;

    for (let neighbor of this.adjecencyList[vtx]) {
      this.adjecencyList[neighbor] = this.adjecencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    delete this.adjecencyList[vtx];
    return this;
  }
}

const g = new Graph();
g.addvettex("A");
g.addvettex("B");
g.addvettex("C");
g.addEdga("A", "B");
g.addEdga("B", "C");
g.addEdga("C", "A");
console.log(g);
