import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';

async function tableWithScroll(stanza, params) {

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
	"@id": "table_with_scroll",
	"stanza:label": "table with scroll",
	"stanza:definition": "metastanza table with scroll",
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
		"stanza:default": "#256d80",
		"stanza:description": "basic fill color"
	},
	{
		"stanza:key": "--emphasized-color",
		"stanza:type": "color",
		"stanza:default": "#44b8cc",
		"stanza:description": "emphasized color"
	},
	{
		"stanza:key": "--background-color",
		"stanza:type": "color",
		"stanza:default": "#fff",
		"stanza:description": "background color"
	},
	{
		"stanza:key": "--title-size",
		"stanza:type": "number",
		"stanza:default": "12px",
		"stanza:description": "font size of titles"
	},
	{
		"stanza:key": "--ruled-line",
		"stanza:type": "text",
		"stanza:default": "0.5px solid #eee",
		"stanza:description": "style of ruled line"
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
		"stanza:key": "--label-color",
		"stanza:type": "color",
		"stanza:default": "#555",
		"stanza:description": "font color of labels"
	},
	{
		"stanza:key": "--label-size",
		"stanza:type": "number",
		"stanza:default": "10px",
		"stanza:description": "font size of labels"
	},
	{
		"stanza:key": "--label-font",
		"stanza:type": "text",
		"stanza:default": "Helvetica",
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
    return "  <div class=\"container\">\n    <div class=\"infomation\">\n      <form class=\"search-form\" action=\"#\">\n        <input class=\"search-box\" type=\"text\" placeholder=\"Serch for keywords...\">\n        <button class=\"search-btn\" type=\"submit\">\n          <img src=\"../../../assets/white-search1.svg\" alt=\"search\">\n        </button>\n      </form>\n      <a class=\"dl-btn\" href=\"#\" download=\"#\"><img src=\"../../../assets/key-download1.svg\" alt=\"\"></a>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <td class=\"stack\">Original source<span class=\"icon filter-icon\"></span><span class=\"icon sort-icon\"></span></td>\n          <td>Organism name<span class=\"icon filter-icon\"></span><span class=\"icon sort-icon\"></span></td>\n          <td>Taxonomy ID<span class=\"icon filter-icon\"></span><span class=\"icon sort-icon\"></span></td>\n          <td>Isolation<span class=\"icon filter-icon\"></span><span class=\"icon sort-icon\"></span></td>\n          <td>Environments<span class=\"icon filter-icon\"></span><span class=\"icon sort-icon\"></span></td>\n        </tr>    \n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"stack\" rowspan=\"2\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <!-- <td class=\"stack\">NBRC 14436</td> -->\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <td class=\"stack\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <td class=\"stack\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <td class=\"stack\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <td class=\"stack\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <td class=\"stack\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n        <tr>\n          <td class=\"stack\">NBRC 14436</td>\n          <td>\"Thermoanaerobacter cellulolyticus\" Taya et al.</td>\n          <td>NBRC 14436</td>\n          <td>Hot spring sediments in Nozawa, Japan</td>\n          <td>hot spring,  spring sediment</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>  ";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}\n\n* {\n  font-family: var(--label-font);\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  color: var(--label-color);\n}\n\n.container {\n  width: 800px;\n}\n\n.infomation {\n  width: 100%;\n  height: 47px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.search-form {\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-box {\n  margin-right: 5px;\n  height: 20px;\n  width: 164px;\n  border: 1px solid var(--basic-fill-color);\n  border-radius: 3px;\n  font-size: 10px;\n  color: #c1c0c0;\n}\n\n::placeholder {\n  color: #eaeaea;\n}\n\n.search-btn {\n  margin-right: 2px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid var(--basic-fill-color);\n  border-radius: 3px;\n  background-color: var(--basic-fill-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-btn img {\n  width: 12px;\n  height: 12px;\n  display: block;\n}\n\n.dl-btn img {\n  width: 18px;\n  height: 18px;\n}\n\ntable {\n  width: inherit;\n  text-align: left;\n  border-collapse: collapse;\n  margin: 0;\n  background-color: var(--background-color);\n  box-shadow: 1px 1px 3px 1px #eee;\n}\n\nthead {\n  font-size: var(--title-size);\n  border-bottom: 1px solid var(--stroke-color);\n  margin-bottom: 0;\n  padding: 8px 8px 0 8px;\n}\n\nthead > tr > td {\n  color: var(--basic-fill-color);\n}\n\nthead > tr > td > .icon {\n  cursor: pointer;\n  content: \"\";\n  display: inline-block;\n  width: 9px;\n  height: 13px;\n  background-repeat: no-repeat;\n  background-position: center 5px;\n  background-size: 8px 8px;\n}\n\n.filter-icon {\n  margin-left: 2px;\n  background-image: url(../../assets/grey-filter2.svg);\n}\n\n.sort-icon {\n  background-image: url(../../assets/grey-sort2.svg);\n}\n\ntbody {\n  font-size: var(--label-size);\n  color: var(--label-color);\n  padding: 0px 8px 0px 8px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 250px;\n}\n\nthead, tbody {\n  display: block;\n}\n\ntbody tr td:hover {\n  color: var(--emphasized-color);\n}\n\ntd {\n  width: 150px;\n  padding: 5px;\n}\n\ntbody td {\n  border-bottom: var(--ruled-line);\n  border-collapse: collapse;\n}\n\n.stack {\n  border-right: 1px solid var(--stroke-color);\n}\n\n#pagenation {\n  padding-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n\n#pagenation ul {\n  display: flex;\n  font-size: var(--label-size);\n  padding: 0 0 8px 0;\n}\n\n#pagenation li {\n  margin: 4px;\n  padding: 4px;\n}\n\n#pagenation .first-btn, #pagenation .previous-btn, #pagenation .last-btn, #pagenation .next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#pagenation .first-btn span, #pagenation .previous-btn span {\n  display: block;\n  width: 7px;\n  height: 7px;\n  border: 1px solid;\n  border-color: transparent transparent var(--basic-fill-color) var(--basic-fill-color);\n  transform: rotate(45deg);\n}\n\n#pagenation .last-btn span, #pagenation .next-btn span {\n  display: block;\n  width: 7px;\n  height: 7px;\n  border: 1px solid;\n  border-color: var(--basic-fill-color) var(--basic-fill-color) transparent transparent;\n  transform: rotate(45deg);\n}\n\n#pagenation .current-btn {\n  color: var(--basic-fill-color);\n  border-bottom: 1px solid var(--basic-fill-color);\n}\n\n.show-info {\n  display: flex;\n  justify-content: center;\n  font-size: var(--label-size);\n  color: var(--basic-fill-color);\n}";

defineStanzaElement(tableWithScroll, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=table_with_scroll.js.map
