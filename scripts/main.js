var ASSETS_DIR = 'assets/';
var nodes = null;
var edges = null;
var network = null;

function draw() {
// create an array with nodes
    nodes = new vis.DataSet([
        {id: 1, label: 'Tomasz Karczewski', group: 'root'},
        {id: 2, label: 'Education', group: 'education'},
        {id: 3, label: 'Work experience', group: 'experience'},
        {id: 4, label: 'Knowledge & skills', group: 'qualifications'},
        {id: 5, label: 'Hobbies', group: 'hobbies'},
        {id: 6, label: 'Personal information', group: 'personal'},
        {id: 7, shape: 'circularImage', image: ASSETS_DIR + 'photo.png', group: 'personal'}
    ]);

// create an array with edges
    edges = new vis.DataSet([
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 1, to: 5},
        {from: 1, to: 6},
        {from: 6, to: 7}
    ]);

// create a network
    var container = document.getElementById('main-network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            borderWidth: 4,
            size: 30,
            margin: 50,
            color: {
                border: '#222222',
                background: '#666666'
            },
            font: {color: '#eeeeee'},
            shapeProperties: {
                useBorderWithImage:true
            }
        },
        edges: {
            color: '#b2ebff'
        }
    };
    network = new vis.Network(container, data, options);
}