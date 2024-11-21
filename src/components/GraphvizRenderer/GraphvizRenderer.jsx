import React, { useEffect } from 'react';
import Graphviz from 'graphviz-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Graph = ({ dot }) => {
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

const GraphvizRenderer = ({ dot }) => {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.7}
      maxScale={5}
      zoomAnimation
    >
      <TransformComponent>
        <Graph dot={dot} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default GraphvizRenderer;