export interface Request {
  body: any;
}

export interface Request {
  json: any;
}

function handleRequest(req: Request) {
  req.body;
  req.json;
}
