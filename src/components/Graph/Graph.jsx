import React, { useEffect, useRef } from 'react';
import { graphviz } from 'd3-graphviz';

const Graph = ({ dot }) => {
  const graphContainerRef = useRef(null);

  useEffect(() => {
    if (graphContainerRef.current && dot) {
      // DOT 데이터를 렌더링
      graphviz(graphContainerRef.current).renderDot(dot);
    }
  }, [dot]);

  return (
    <div
      ref={graphContainerRef}
      className="w-full aspect-video overflow-auto border border-gray-300 bg-white font-pm text-gray-800"
    />
  );
};

export default Graph;
