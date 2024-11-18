import React, { useEffect } from 'react';
import Graphviz from 'graphviz-react';

const GraphvizRenderer = ({ dot }) => {
  useEffect(() => {}, [dot]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Graphviz
        dot={dot}
        options={{ useWorker: false, width: 1200, height: 800 }}
      />
    </div>
  );
};

export default GraphvizRenderer;
