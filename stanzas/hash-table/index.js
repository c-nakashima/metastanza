import loadData from "@/lib/load-data";

export default async function hashTable(stanza, params) {
  const dataset = await loadData(params["data-url"], params["data-type"]);
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      dataset: Object.entries(dataset[0]).map((datam) => {
        return {
          key: datam[0],
          value: datam[1],
        };
      }),
    },
  });

  const main = stanza.root.querySelector("main");
  main.setAttribute(
    "style",
    `width: ${params["width"]};
    height: ${params["height"]};
    padding: ${params["padding"]}`
  );
}
