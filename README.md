# mappedin-coding-challenge

Strategy:

1.Install React and create app

2.Setup repo, update README.

3.init setup and basic components creation

4.data fetching from git API
    // attepted to use react-fetch lib, but later realized it does not reconize array, only object. 
    // succeeded to use req.open to fetch data, ran into problem with 'this' ---- what it is refering to
    // ran into the problem of extracting data before it finish loading, created a boolean to manipulate the 'loading' effect and resolved the problem.

5.content creation
    // combined fetch.js into App.js as I read about how each React component is usually about what's showing on the screen, rather than the functionalities
    // changed the way repoData is mapped and made repo.js seperate from App.js 
    // stuggled for about half an hour, trying to find out why my link isn't working from repo.js, turns out I had <a 'herf'>. Derp :( 

6.styling adjustment 

7.testing

8.run eslint to clean up code

9.optional* check code efficiency
