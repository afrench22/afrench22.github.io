efine(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        category1: {
            name: 'Attribute practice',
            title: {
                media: { word: 'Attribute practice' },
                css: { color: '#31940F', 'font-size': '2em' },
                height: 4
            },
            stimulusMedia: [
                { word: 'Ashley' },
                { word: 'Makayla' },
                { word: 'Grace' },
                // ... add all attribute practice words
            ],
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
        },
        category2: {
            name: 'Practice',
            title: {
                media: { word: 'Practice' },
                css: { color: '#31940F', 'font-size': '2em' },
                height: 4
            },
            stimulusMedia: [
                { word: 'Fuck Boy' },
                { word: 'Bitch Boy' },
                { word: 'Daddy' },
                // ... add all practice words
            ],
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
        },
        category3: {
            name: 'Test',
            title: {
                media: { word: 'Test' },
                css: { color: '#31940F', 'font-size': '2em' },
                height: 4
            },
            stimulusMedia: [
                { word: 'Flowers' },
                { word: 'Love' },
                { word: 'Money' },
                // ... add all test words
            ],
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
