import React, { useEffect, useRef } from 'react';
import Graphviz from 'graphviz-react';

const GraphvizRenderer = ({ dot }) => {
  const graphRef = useRef(null);

  useEffect(() => {}, [dot]);

  return (
    <div>
      <Graphviz
        ref={graphRef}
        dot={dot}
        options={{ width: 1200, height: 800 }}
      />
    </div>
  );
};

export default GraphvizRenderer;
