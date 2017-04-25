# mappedin-coding-challenge



Strategy: // comments include some of the problems that I ran into as well as few thoughts of mine

1.Install React and create app
    // struggled for 3 hours with webPack till I discovered create-react-app, then everything was beautiful. Hail FB.

2.Setup repo, update README.

3.init setup and basic components creation

4.data fetching from git API
    // attepted to use react-fetch lib, but later realized it does not recognize array, only object. Bad lib, bad.
    // succeeded to use req.open to fetch data, ran into a problem with 'this' ---- what it is refering to
    // ran into the problem of extracting data before it finish loading, created a boolean to manipulate the 'loading' effect and resolved the problem.

5.content creation
    // combined fetch.js into App.js as I read about how each React component is usually about what's showing on the screen, rather than the functionalities
    // changed the way repoData is mapped and made repo.js seperate from App.js 
    // stuggled for about half an hour, trying to find out why my link isn't working from repo.js, turns out I had <a 'herf'>. Derp :( 

6.styling adjustment
    // I thought that I would hate styled-components, but turns out I loved it
    // why do 'a:link' and 'a:visited' pointing to the same style?
    // so the font 'Segoe Ui'...is MicroSoft, I didn't bother to try to download it on linux, hope this isn't part of the test :p
    
7.testing

8.run elint to clean up code

9.optional* check code efficiency

10.Write instructions in README file

11.fix grammar/spelling errors

