define(["pipAPI", "https://afrench22.github.io/quiat9.js"], function (
  APIConstructor,
  iatExtension,
) {
  var API = new APIConstructor();

  return iatExtension({
    category1: {
      name: "Male", //Will appear in the data.
      title: {
        media: { word: "Male" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "Michael" },
        { word: "Matthew" },
        { word: "Josh" },
        { word: "Chris" }
      ],
      //Stimulus css (style)
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },
    category2: {
      name: "Female", //Will appear in the data.
      title: {
        media: { word: "Female" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "Emily" },
        { word: "Hannah" },
        { word: "Madison" },
        { word: "Ashley" }
      ],
      //Stimulus css
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },
    attribute2: {
         name: "Sexually Passive", //Will appear in the data and in the default feedback message.
         title: {
          media: { word: "Sexually Passive" }, //Name of the category presented in the task.
          css: { color: "#0000FF", "font-size": "2.3em" }, //Style of the category title.
          height: 4, //Used to position the "Or" in the combined block.
        },
        stimulusMedia: [
          //Stimuli content as PIP's media objects
          { word: "Prude" },
          { word: "Innocent" },
          { word: "Modest" },
          { word: "Naive" }
        ],
        //Stimulus css (style)
        stimulusCss: { color: "#0000FF", "font-size": "2.3em" },
	},		
	attribute1: {
         name: "Sexually Active", //Will appear in the data and in the default feedback message.
         title: {
          media: { word: "Sexually Active" }, //Name of the category presented in the task.
          css: { color: "#0000FF", "font-size": "2.3em" }, //Style of the category title.
          height: 4, //Used to position the "Or" in the combined block.
        },
        stimulusMedia: [
          //Stimuli content as PIP's media objects
          { word: "Dominant" },
          { word: "Seducer" },
          { word: "Vulgar" },
          { word: "Explicit" }
        //Stimulus css (style)
        stimulusCss: { color: "#336600", "font-size": "2.3em" }
      },
    base_url: {
      //Where are your images at?
      image: "https://afrench22.github.io/images/",
    },
  });
});
