var ASSETS_DIR = 'assets/';
var nodes = null;
var edges = null;
var network = null;

function draw() {
// create an array with nodes
    let linkedInNodeId = 34;
    let githubNodeId = 35;
    nodes = new vis.DataSet([
        {id: 1, label: 'Tomasz\nKarczewski', group: 'root'},
        {id: 2, label: 'Education', group: 'education'},
        {id: 3, label: 'Work experience', group: 'experience'},
        {id: 4, label: 'Knowledge & skills', group: 'qualifications'},
        {id: 5, label: 'Hobbies', group: 'hobbies'},
        {id: 7, shape: 'circularImage', image: ASSETS_DIR + 'photo.png', group: 'personal', size: 80},
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
        {id: 33, label: 'Jigsaw puzzles', group: 'hobbies'},
        {id: linkedInNodeId, shape: 'image', image: ASSETS_DIR + 'In-White-34px-R.png', group: 'personal'},
        {id: githubNodeId, shape: 'circularImage', image: ASSETS_DIR + 'GitHub-Mark-Light-64px.png', group: 'personal'}
    ]);

// create an array with edges
    edges = new vis.DataSet([
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 1, to: 5},
        {from: 1, to: 6},
        {from: 1, to: 7},
        {from: 7, to: 8},
        {from: 7, to: 9},
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
        {from: 7, to: 28},
        {from: 5, to: 29},
        {from: 5, to: 30},
        {from: 5, to: 31},
        {from: 5, to: 32},
        {from: 5, to: 33},
        {from: 7, to: linkedInNodeId},
        {from: 7, to: githubNodeId}
    ]);

// create a network
    var container = document.getElementById('main-network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        interaction: {
            hover: true,
            hoverConnectedEdges: true
        },
        nodes: {
            borderWidth: 1,
            borderWidthSelected: 1,
            margin: 10,
            chosen: true,
            labelHighlightBold: false,
            color: {
                border: '#9f9f9f',
                background: '#585858',
                highlight: {
                    border: '#9f9f9f',
                    background: '#585858'
                },
                hover: {
                    border: '#adadad',
                    background: '#636363'
                }
            },
            font: {color: '#eeeeee'},
            shape: 'box',
            shapeProperties: {
                borderRadius: 25,
                useBorderWithImage:true
            }
        },
        edges: {
            width: 1,
            hoverWidth: 1,
            chosen: false,
            color: '#b2ebff',
            smooth: {
                enabled: true,
                type: "dynamic",
                roundness: 0.75
            }
        },
        groups: {
            root: {
                fixed: true,
                font: {
                    size: 20
                }
            },
            education: {
                color: {
                    border: '#5f9f40',
                    background: '#31581d',
                    highlight: {
                        border: '#5f9f40',
                        background: '#31581d'
                    },
                    hover: {
                        border: '#6ab248',
                        background: '#3f7125'
                    }
                }
            },
            experience: {
                color: {
                    border: '#fffdbf',
                    background: '#62624f',
                    highlight: {
                        border: '#fffdbf',
                        background: '#62624f'
                    },
                    hover: {
                        border: '#ffffca',
                        background: '#797962'
                    }
                }
            },
            qualifications: {
                color: {
                    border: '#9f2126',
                    background: '#581b1f',
                    highlight: {
                        border: '#9f2126',
                        background: '#581b1f'
                    },
                    hover: {
                        border: '#b4252b',
                        background: '#712328'
                    }
                }
            },
            hobbies: {
                color: {
                    border: '#333a9f',
                    background: '#202658',
                    highlight: {
                        border: '#333a9f',
                        background: '#202658'
                    },
                    hover: {
                        border: '#373eab',
                        background: '#272e6a'
                    }
                }
            },
            personal: {
                font: {
                    color: "#000000"
                },
                color: {
                    border: '#d9e1e4',
                    background: '#becdd1',
                    highlight: {
                        border: '#d9e1e4',
                        background: '#becdd1'
                    },
                    hover: {
                        border: '#e1e9ec',
                        background: '#c3d3d7'
                    }
                }
            }
        }
    };
    network = new vis.Network(container, data, options);
    network.on('click', function(event) {
        if(event.nodes.indexOf(linkedInNodeId) !== -1) {
            window.open('https://www.linkedin.com/in/tomasz-karczewski-a37909159/', '_blank')
        } else if(event.nodes.indexOf(githubNodeId) !== -1) {
            window.open('https://github.com/imralav', '_blank')
        }
    });
}