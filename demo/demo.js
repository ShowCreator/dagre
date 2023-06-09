/*
 * @Author: sfy
 * @Date: 2023-04-07 15:14:31
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-09 15:48:44
 * @FilePath: /dagre/demo/demo.js
 * @Description: update here
 */
var bodyElem = d3.select('body'),
    jsElem = d3.select('#js'),
    jsPanel = bodyElem.append('div').attr('id', 'jsPanel');
    cssElem = d3.select('#css'),
    cssPanel = bodyElem.append('div').attr('id', 'cssPanel');

function setupPanel(panel, elem, title) {
  panel.append('h2').text(title);
  return panel.append('pre').append('code').text(elem.html().trim());
}

var jsCode = setupPanel(jsPanel, jsElem, 'JavaScript');
var cssCode = setupPanel(cssPanel, cssElem, 'CSS');

var hljsRoot = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1';

bodyElem.append('link')
  .attr('rel', 'stylesheet')
  .attr('href', hljsRoot + '/styles/xcode.min.css');
bodyElem.append('script')
  .attr('src', hljsRoot + '/highlight.min.js')
  .on('load', function() {
    hljs.highlightBlock(jsCode.node());
    hljs.highlightBlock(cssCode.node());
  });


// g.nodes().forEach(function (v) {
//   const {x,y} = g.node(v)
//   console.log(`Node: ${v}    x: ${x}   y: ${y}`);
// });


// g.edges().forEach(function (e) {
//   console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
// });

