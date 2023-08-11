import Graph from 'react-graph-vis';

const Graphcomponent = () => {
    const graph = {
        nodes: [
          { id: 1, label: 'Basics of Data' },
          { id: 2, label: 'Data Pipeline' },
          { id: 3, label: 'Data-first Modernization' },
          { id: 4, label: 'Data Governance' },
          { id: 5, label: 'Data Security' },
          { id: 6, label: 'DataHub' }
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4 },
          { from: 3, to: 5 },
          { from: 4, to: 6 }
        ],
      };
    
      const options = {
        nodes: {
          shape: 'box',
          color: {
            background: '#00CC99',
            border: '#00873D',
          },
        },
      };

    return (  
        <div style={{ height: '400px' }}>
            <Graph graph={graph} options={options} />
        </div>
    );
}
 
export default Graphcomponent;

