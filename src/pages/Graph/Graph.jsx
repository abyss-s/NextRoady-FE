import React from 'react';
import GraphvizRenderer from '../../components/GraphvizRenderer/GraphvizRenderer';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Graph = () => {
  const dot = `
    digraph BackendDeveloperRoadmap {\n    layout = neato; // Radial layout\n    overlap = false; // 노드 겹침 방지\n    splines = true; // 부드러운 연결선\n    node [shape=box, style=filled, fontsize=16];\n\n    // 중앙 노드\n    A [label=\"Backend Developer Roadmap\", shape=ellipse, style=filled, fillcolor=lightblue, fontsize=20];\n\n    // 주요 카테고리 - 색상 추가\n    B [label=\"Programming Languages\", fillcolor=green];\n    C [label=\"Databases\", fillcolor=lightcoral];\n    D [label=\"Frameworks\", fillcolor=lightgoldenrod];\n    E [label=\"Version Control\", fillcolor=lightcyan];\n    F [label=\"APIs\", fillcolor=lightpink];\n    G [label=\"Deployment\", fillcolor=lightgray];\n\n    // 중앙에서 퍼지는 연결\n    A -> B;\n    A -> C;\n    A -> D;\n    A -> E;\n    A -> F;\n    A -> G;\n\n    // Programming Languages\n    B1 [label=\"Java\"];\n    B2 [label=\"Python\"];\n    B3 [label=\"Node.js\"];\n    B4 [label=\"Go\"];\n    B -> B1;\n    B -> B2;\n    B -> B3;\n    B -> B4;\n\n    // Databases\n    C1 [label=\"Relational DB\"];\n    C2 [label=\"NoSQL\"];\n    C -> C1;\n    C -> C2;\n    C1a [label=\"PostgreSQL\"];\n    C1b [label=\"MySQL\"];\n    C1 -> C1a;\n    C1 -> C1b;\n    C2a [label=\"MongoDB\"];\n    C2b [label=\"Cassandra\"];\n    C2 -> C2a;\n    C2 -> C2b;\n\n    // Frameworks\n    D1 [label=\"Spring\"];\n    D2 [label=\"Django\"];\n    D3 [label=\"Express\"];\n    D -> D1;\n    D -> D2;\n    D -> D3;\n\n    // Version Control\n    E1 [label=\"Git\"];\n    E2 [label=\"GitHub\"];\n    E3 [label=\"GitLab\"];\n    E -> E1;\n    E -> E2;\n    E -> E3;\n\n    // APIs\n    F1 [label=\"REST\"];\n    F2 [label=\"GraphQL\"];\n    F -> F1;\n    F -> F2;\n\n    // Deployment\n    G1 [label=\"Docker\"];\n    G2 [label=\"Kubernetes\"];\n    G3 [label=\"Ansible\"];\n    G -> G1;\n    G -> G2;\n    G -> G3;\n}
  `;

  return (
    <>
      <div>
        <TransformWrapper
          initialScale={1}
          minScale={0.7}
          maxScale={5}
          zoomAnimation
        >
          <TransformComponent>
            <GraphvizRenderer dot={dot} />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </>
  );
};

export default Graph;
