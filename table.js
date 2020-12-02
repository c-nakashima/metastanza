import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';

async function table(stanza, params) {

  const sayTo = params['say-to'] || 'world';
  
  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      greeting: `Hello, ${params['say-to']}!`
    }
  });
}

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "table",
	"stanza:label": "Table",
	"stanza:definition": "table",
	"stanza:type": "Stanza",
	"stanza:display": "Table",
	"stanza:provider": "Togostanza",
	"stanza:license": "MIT",
	"stanza:author": "c-nakashima",
	"stanza:address": "nakashima@penqe.com",
	"stanza:contributor": [
],
	"stanza:created": "2020-12-02",
	"stanza:updated": "2020-12-02",
	"stanza:parameter": [
	{
		"stanza:key": "say-to",
		"stanza:example": "world",
		"stanza:description": "who to say hello to",
		"stanza:required": false
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--basic-fill-color",
		"stanza:type": "color",
		"stanza:default": "#94d0da",
		"stanza:description": "basic fill color"
	},
	{
		"stanza:key": "--stroke-color",
		"stanza:type": "color",
		"stanza:default": "#999",
		"stanza:description": "border color"
	},
	{
		"stanza:key": "--stroke-width",
		"stanza:type": "text",
		"stanza:default": "0.5px",
		"stanza:description": "stroke wodth"
	},
	{
		"stanza:key": "--label-font",
		"stanza:type": "text",
		"stanza:default": "serif",
		"stanza:description": "font(e.g: serif,san serif,fantasy)"
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
    return "<style>\n  *{\n    font-family: var(--label-font);\n    box-sizing: border-box;\n  }\n  table{\n    width: 800px;\n    align: left;\n    border-collapse: collapse;\n  }\n  thead{\n    background-color :var(--basic-fill-color);\n    font-weight: bold;\n    font-size: 12px;\n    border-width: 1px;\n    border-style: solid; \n    border-color: var(--stroke-color);\n  }\n  tbody,td,tr{\n    font-size: 10px;\n    padding:8px 5px;\n  }\n  td{\n    border-width: 1px;\n    border-style: solid; \n    border-color: var(--stroke-color);\n    border-collapse: collapse;\n  }\n\n</style>\n\n<table>\n  <thead>\n    <tr>\n      <td>Original source</td>\n      <td>Organism name</td>\n      <td>Taxonomy ID</td>\n      <td>Isolation</td>\n      <td>Environments</td>\n    </tr>    \n  </thead>\n  <tbody>\n    <tr>\n      <td>NBRC 14436</td>\n      <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n      <td>NBRC 14436</td>\n      <td>Hot spring sediments in Nozawa, Japan</td>\n      <td>hot spring,  spring sediment</td>\n    </tr>\n    <tr>\n      <td>NBRC 14436</td>\n      <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n      <td>NBRC 14436</td>\n      <td>Hot spring sediments in Nozawa, Japan</td>\n      <td>hot spring,  spring sediment</td>\n    </tr>\n    <tr>\n      <td>NBRC 14436</td>\n      <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n      <td>NBRC 14436</td>\n      <td>Hot spring sediments in Nozawa, Japan</td>\n      <td>hot spring,  spring sediment</td>\n    </tr>\n    <tr>\n      <td>NBRC 14436</td>\n      <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n      <td>NBRC 14436</td>\n      <td>Hot spring sediments in Nozawa, Japan</td>\n      <td>hot spring,  spring sediment</td>\n    </tr>\n  </tbody>\n</table>\n\n";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement(table, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=table.js.map
