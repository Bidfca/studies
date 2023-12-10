// Short form
// type PointCreator = new (x: number, y: number) => { x: number; y: number };

type PointCreator = {
  new (x: number, y: number): { x: number; y: number };
};

const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
