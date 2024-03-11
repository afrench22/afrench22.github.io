 return iatExtension({
    category1: {
      name: "Male", //Will appear in the data.
      name: "Sexually Active", //Will appear in the data.
      title: {
        media: { word: "Male" }, //Name of the category presented in the task.
        media: { word: "Sexually Active" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
@@ -25,9 +25,9 @@ define(["pipAPI", "https://afrench22.github.io/quiat9.js"], function (
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },
    category2: {
      name: "Female", //Will appear in the data.
      name: "Sexually Passive", //Will appear in the data.
      title: {
        media: { word: "Female" }, //Name of the category presented in the task.
        media: { word: "Sexually Passive" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "Emily" },
        { word: "Hannah" },
        { word: "Madison" },
        { word: "Ashley" },
        { word: "Sarah" },
        { word: "Alexis" },
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
