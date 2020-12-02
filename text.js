import { d as defineStanzaElement } from './stanza-element-d1cc4290.js';

async function text(stanza, params) {
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
	"@id": "text",
	"stanza:label": "Text",
	"stanza:definition": "",
	"stanza:type": "Stanza",
	"stanza:display": "Text",
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
	},
	{
		"stanza:key": "--border-style",
		"stanza:type": "string",
		"stanza:default": "1px solid #333",
		"stanza:description": "emphasized color when you hover on labels and rects"
	}
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<style>\n  *{\n    font-family: \"Helvetica Nune\";\n    box-sizing: border-box;\n  }\n  table{\n    width: 800px;\n  }\n  tr{\n    border-bottom: 1px solid #999;\n  }\n\n  dl{\n    border-bottom: 0.5px solid #999;\n    margin: 0;\n    padding: 10px 0 15px 0;  \n  }\n  dt{\n    font-weight: bold;\n    font-size: 13px;\n    line-height: 14px;\n  }\n  dd{\n    font-size: 11px;\n    margin-inline-start: 0px;\n  }\n\n\n</style>\n\n\n<table>\n    <tr>\n      <td>\n        <dl>\n          <dt>Homozygous loss of function BRCA1 variant causing a Fanconi-anemia-like phenotype, a clinical report and review of previous patients.</dt>\n          <dd>Freire B.L., Funari M.F.A., Homma T.K., Jorge A.A.L., Leal A.M., Lerario A.M., Malaquias A.C., Velloso E.D.R.P.\nEur. J. Med. Genet. 61 130-133 (2018-01-01T00:00:00+09:00) https://pubmed.ncbi.nlm.nih.gov/29133208</dd>\n        </dl>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <dl>\n          <dt>Homozygous loss of function BRCA1 variant causing a Fanconi-anemia-like phenotype, a clinical report and review of previous patients.</dt>\n          <dd>Freire B.L., Funari M.F.A., Homma T.K., Jorge A.A.L., Leal A.M., Lerario A.M., Malaquias A.C., Velloso E.D.R.P.\nEur. J. Med. Genet. 61 130-133 (2018-01-01T00:00:00+09:00) https://pubmed.ncbi.nlm.nih.gov/29133208</dd>\n        </dl>\n      </td>\n    </tr>\n      <td>\n        <dl>\n          <dt>Homozygous loss of function BRCA1 variant causing a Fanconi-anemia-like phenotype, a clinical report and review of previous patients.</dt>\n          <dd>Freire B.L., Funari M.F.A., Homma T.K., Jorge A.A.L., Leal A.M., Lerario A.M., Malaquias A.C., Velloso E.D.R.P.\nEur. J. Med. Genet. 61 130-133 (2018-01-01T00:00:00+09:00) https://pubmed.ncbi.nlm.nih.gov/29133208</dd>\n        </dl>\n      </td>\n    </tr>\n    </tr>\n</table>\n";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement(text, {metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=text.js.map
