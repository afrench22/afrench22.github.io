define(["pipAPI", "https://afrench22.github.io/quiat9.js"], function (
  APIConstructor,
  iatExtension,
) {
  var API = new APIConstructor();

  return iatExtension({
    category1: {
      name: "SEXUALLY ACTIVE", //Will appear in the data.
      title: {
        media: { word: "SEXUALLY ACTIVE" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "male" },
        { word: "male" },
        { word: "male" },
        { word: "male" },
        { word: "male" },
        { word: "male" },
      ],
      //Stimulus css (style)
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },
    category2: {
      name: "Sexually Passive", //Will appear in the data.
      title: {
        media: { word: "Sexually Passive" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "female" },
        { word: "female" },
        { word: "female" },
        { word: "female" },
        { word: "female" },
        { word: "female" },
      ],
      //Stimulus css
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },

    base_url: {
      //Where are your images at?
      image: "https://afrench22.github.io/images/",
    },
  });
});
