import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';
import './array-2b5f08c6.js';
import './vega.module-c3463ded.js';
import './timer-a7d16713.js';
import { e as embed } from './vega-embed.module-ab9284a0.js';

async function vegaPiechart(stanza, params) {
  let spec = await fetch(params["src-url"]).then((res) => res.json());
  console.log(spec.marks);
  // spec.data[0].values = [
  //   {"id": 1, "field": 1},
  //   {"id": 2, "field": 1},
  //   {"id": 3, "field": 1},
  //   {"id": 4, "field": 5},
  //   {"id": 5, "field": 8},
  //   {"id": 6, "field": 10}
  // ]

  // vega.scheme('metastabasic', ['#AB3F61', '#F7EF8D', '#F7749E', '#5CD5F7', '#4895AB', '#4895AB']);
  // spec.scales[0].range.scheme = 'pastel1';
  spec.scales[0].range.scheme = params["color-scheme"];

  const el = stanza.root.querySelector("main");
  const opts = {
    renderer: "svg"
  };
  await embed(el, spec, opts);
}

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "vega_piechart",
	"stanza:label": "Vega Piechart",
	"stanza:definition": "vega_wrapping",
	"stanza:type": "Stanza",
	"stanza:context": "Environment",
	"stanza:display": "Chart",
	"stanza:provider": "TogoStanza",
	"stanza:license": "MIT",
	"stanza:author": "TogoStanza",
	"stanza:address": "admin@biohackathon.org",
	"stanza:contributor": [
],
	"stanza:created": "2020-11-05",
	"stanza:updated": "2020-11-05",
	"stanza:parameter": [
	{
		"stanza:key": "src-url",
		"stanza:example": "https://vega.github.io/vega/examples/pie-chart.vg.json",
		"stanza:description": "source url which returns Vega specification compliant JSON",
		"stanza:required": true
	},
	{
		"stanza:key": "title",
		"stanza:example": "Example",
		"stanza:description": "title",
		"stanza:required": true
	},
	{
		"stanza:key": "color-scheme",
		"stanza:example": "pastel2",
		"stanza:description": "pastel2",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"pastel1",
			"pastel2",
			"set1"
		],
		"stanza:required": false
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--greeting-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "text color of greeting"
	},
	{
		"stanza:key": "--greeting-align",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"left",
			"center",
			"right"
		],
		"stanza:default": "center",
		"stanza:description": "text align of greeting"
	}
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p class=\"greeting\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"greeting") || (depth0 != null ? lookupProperty(depth0,"greeting") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"greeting","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":32}}}) : helper)))
    + "</p>";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement(vegaPiechart, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=vega_piechart.js.map
