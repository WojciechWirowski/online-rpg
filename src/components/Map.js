const MapElements = {
    GRASS: 'grass',
    TREE: 'tree',
    ROCK: 'rock',
  };
  
  const MapConfigurations = {
    Default: [
        
      ],
        Map1: [
            MapElements.GRASS,
            MapElements.TREE,
            MapElements.GRASS,
            MapElements.GRASS,
            MapElements.TREE,
            MapElements.GRASS,
            MapElements.GRASS,
            MapElements.TREE,
            MapElements.GRASS,
            MapElements.GRASS,
            MapElements.TREE,
            MapElements.GRASS,
            MapElements.GRASS,
            MapElements.TREE,
            MapElements.GRASS,
            ...Array.from({ length: 24 }, () => ''), // 24 empty elements
          ],
    // Map2: [
    //   [MapElements.GRASS, MapElements.ROCK, MapElements.GRASS, /* ... */],
    //   // ... additional rows
    // ],
    // // ... additional maps
  };
  
  export { MapElements, MapConfigurations };