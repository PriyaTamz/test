import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  ReactFlowProvider,
  Elements
} from "react-flow-renderer";
import Sidebar from "./Sidebar";

const initialElements = [
  {
    id: "1",
    type: "customNode",
    data: { title: "Start", description: "Cart Review" },
    position: { x: 150, y: 50 },
  },
  {
    id: "2",
    type: "customNode",
    data: { title: "Shipping", description: "Shipping Details" },
    position: { x: 300, y: 150 },
  },
  {
    id: "3",
    type: "customNode",
    data: { title: "Payment", description: "Payment Details" },
    position: { x: 450, y: 250 },
  },
  {
    id: "4",
    type: "customNode",
    data: { title: "End", description: "Confirmation" },
    position: { x: 600, y: 350 },
  },
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
];

const App = () => {
  const [elements, setElements] = useState(initialElements);

  const onConnect = useCallback(
    (params) =>
      setElements((eds) => addEdge({ ...params }, eds)),
    []
  );

  return (
    <ReactFlowProvider>
      <div>
        <Sidebar />
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default App;

