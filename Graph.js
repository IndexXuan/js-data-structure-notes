/*******************************************************
    > File Name: Graph.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年12月18日 星期五 22时56分48秒
 ******************************************************/

/**
 * 图的定义
 * 由边的集合及顶点的集成组成
 * 属性：权重，方向
 *
 * 用图对现实世界的很多系统进行建模，比如交通流量建模，顶点可以表示街道的十字路口，
 * 边可以表示街道，加权的边可以表示限速或者车道的数量，建模人员可以用这个系统来
 * 判断最佳路线以及最可能堵车的街道
 *
 * 网路更是图
 */

/**
 * Vertex
 * 类似树的Node,用来表示结点以及该结点是否被访问过
 *
 * @param {any} label
 * @param {Boolean} wasVisited
 */
function Vertex(label,wasVisited) {
  this.labale = label;
  this.wasVisited = wasVisited;
}

/**
 * Craph
 * 这个类记录图有多少条边，并使用一个长度与图的顶点数相同的数组来记录点的数量
 * 通过for循环为数组中的每个元素添加一个子数组来存储所有的相邻顶点，并将所有
 * 元素初始化为空字符串。
 *
 * @param v
 * @return {undefined}
 */
function Craph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0, len = this.vertices; i < len; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.toString = toString;
}

function showGraph() {
  for (var i = 0, len = this.vertices; i < len; i++) {
    console.log(i + ' -> ');
    for (var j = 0, len = this.vertices; j < len; j++) {
      if (this.adj[i][j] != void 0) {
        console.log(this.adj[i][j] + ' ');
      } 
    }
    console.log();
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}




