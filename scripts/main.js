var ASSETS_DIR = 'assets/';
var nodes = null;
var edges = null;
var network = null;

function draw() {
// create an array with nodes
    nodes = new vis.DataSet([
        {id: 1, label: 'Tomasz\nKarczewski', group: 'root'},
        {id: 2, label: 'Education', group: 'education'},
        {id: 3, label: 'Work experience', group: 'experience'},
        {id: 4, label: 'Knowledge & skills', group: 'qualifications'},
        {id: 5, label: 'Hobbies', group: 'hobbies'},
        {id: 6, label: 'Personal information', group: 'personal'},
        {id: 7, shape: 'circularImage', image: ASSETS_DIR + 'photo.png', group: 'personal'},
        {id: 8, label: '27.01.1992', group: 'personal'},
        {id: 9, label: 'imralav@gmail.com', group: 'personal'},
        {id: 10, label: 'Backend developer\n(2015-2017)', group: 'experience'},
        {id: 11, label: 'Full-stack developer\n(2017+)', group: 'experience'},
        {id: 12, label: 'Master of Computer Science', group: 'education'},
        {id: 13, label: 'Bialystok University\nof Science (2012-2016)', group: 'education'},
        {id: 14, label: 'Military University\nof Technology in Warsaw\n(2016-2017)', group: 'education'},
        {id: 15, label: 'Languages', group: 'qualifications'},
        {id: 16, label: 'English (advanced)', group: 'qualifications'},
        {id: 17, label: 'French (basic)', group: 'qualifications'},
        {id: 18, label: 'Java', group: 'qualifications'},
        {id: 19, label: 'Spring, Hibernate,\nJPA', group: 'qualifications'},
        {id: 20, label: 'Java8, JavaFX,\nGroovy, Spock', group: 'qualifications'},
        {id: 21, label: 'Quartz, JasperReports', group: 'qualifications'},
        {id: 22, label: 'Web', group: 'qualifications'},
        {id: 23, label: 'HTML, CSS', group: 'qualifications'},
        {id: 24, label: 'JS (ES6), AngularJS,\nReactJS, NodeJS,\nJasmine', group: 'qualifications'},
        {id: 25, label: 'Git, Gulp,\nMaven, Gradle', group: 'qualifications'},
        {id: 26, label: 'XML, SOAP,\nREST, WSO2', group: 'qualifications'},
        {id: 27, label: 'SQL, MySQL', group: 'qualifications'},
        {id: 28, label: '(+48) 505 626 778', group: 'personal'},
        {id: 29, label: 'Fantasy theme', group: 'hobbies'},
        {id: 30, label: 'Books, movies', group: 'hobbies'},
        {id: 31, label: 'Tabletop and roleplaying games', group: 'hobbies'},
        {id: 32, label: 'Gym, Inline-skating', group: 'hobbies'},
        {id: 33, label: 'Jigsaw puzzles', group: 'hobbies'}
    ]);

// create an array with edges
    edges = new vis.DataSet([
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 1, to: 5},
        {from: 1, to: 6},
        {from: 6, to: 7},
        {from: 6, to: 8},
        {from: 6, to: 9},
        {from: 3, to: 10},
        {from: 3, to: 11},
        {from: 2, to: 12},
        {from: 12, to: 13},
        {from: 12, to: 14},
        {from: 4, to: 15},
        {from: 15, to: 16},
        {from: 15, to: 17},
        {from: 4, to: 18},
        {from: 18, to: 19},
        {from: 18, to: 20},
        {from: 4, to: 21},
        {from: 4, to: 22},
        {from: 22, to: 23},
        {from: 22, to: 24},
        {from: 4, to: 25},
        {from: 4, to: 26},
        {from: 4, to: 27},
        {from: 6, to: 28},
        {from: 5, to: 29},
        {from: 29, to: 30},
        {from: 29, to: 31},
        {from: 5, to: 32},
        {from: 5, to: 33}
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