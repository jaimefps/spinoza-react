export const greuler_object = {
  target: '#demo',
  width: 600,
  height: 600,
  data: {
    nodes: [],
    links: []
  }
}

export const reset = () => {
  greuler_object.data.nodes = [];
  greuler_object.data.links = [];
}
