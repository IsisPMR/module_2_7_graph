//Crear la clase grafo  diapositiva 44
class Graph {
    //Defining vertex array and adjacent list
    constructor (noOfVertices){
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
    }

    //G=(V,E) Grafo es igual a vertices y aristas
    //Funcion para añadir vertice
    addVertex(v){
    //Initialize the adjacent list with a null     La lista de adyacencia es un Mat
    this.AdjList.set(v, []);  //Referencia a la lista que declaramos en el constructor, con un set vamos añadirle el parametro como llabe y como segundo parametro un arreglo vacio
    }

    //add edge to the graph    Recibe como parametro las etiqutas de los nodos que vamos a crear un link
    addEdge(v,w){
        //get the list for vertex v and put the 
        //vertex w denoting edge between y and w
        this.AdjList.get(v).push(w);

        //Since graph is undirected,
        //and and edge from w to v also     COn esta linea se hace bidireccional porque es el espejo
        this.AdjList.get(w).push(v);
    }

    //Prints the vertex and adjacency list
    printGraph(){
        //get all the vertices
        var get_keys = this.AdjList.keys(); //keys es una funcion que ya trae el metodo map, te regresa un arreglo de llaves
        
        //[
        //[{“A”,[{“A”,“B”},{“A”,“C”}]}, {“B”,[{“B”,“A”}]}, {“C”,[{“C”,“A”}]}, {“D”,[]}, {“E”,[]}, {“F”,[]}]
        //["A","B",...]
        
        //iterate over the vertices
        for (var i of get_keys) { //El arrelgo de llaves A,B,C,D,... POR CADA IDERACION SE LE VA ASIGNAR A LUEGO B LUEGO C LUEGO...
            //great the corresponding adjacency list for the vertex
            var get_values = this.AdjList.get(i);
            //var get_values = this.AdjList.get("A");
            //var get_values = this.AdjList.get("B");
            //var get_values = this.AdjList.get("C");
            var conc = "";
            //iterate over the adjacency list concatenaate the calues into a string
            for (var j of get_values) conc += j + " ";
            // for (var j of get_values) conc += j + " ";  J vale [{“A”,“B”},{“A”,“C”}]}
            // for (var j of get_values) conc += j + " ";  J vale {“B”,[{“B”,“A”}]}}

            //print the vertex and its adjacency list
            console.log(i +  " ->" + conc);
        }
    }
}

//Using the above implemented graph class
// g es el opjeto de la clase
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

//ADDING VERTICES
for (var i=0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}

//ADDING ADGES
g.addEdge('A','B');
g.addEdge('A','D');
g.addEdge('A','E');
g.addEdge('B','C');
g.addEdge('D','E');
g.addEdge('E','F');
g.addEdge('E','C');
g.addEdge('C','F');

g.printGraph();

