***Project Two***
**Movies and actors**

//Wireframes
<--Login-->
https://wireframe.cc/2eCO3x
<--User Landing-->
https://wireframe.cc/QD8zBc
<--All Users-->
https://wireframe.cc/k7Ilp3


//Self Stretch
<--Actor Landing-->
Create Page listing other movies that have a favorite actor in them.
https://wireframe.cc/sHC1oJ
<--Movies Landing-->
Create view to populate individual movies with links to IMDb, rottentomatoes et al.
https://wireframe.cc/I39kiJ


***Technologies to Use***
Mongoose, passport, express, mongo, css, html (jquery? javascript?)


***User Stories***
```
As a movie lover, I want a place to share my favorite movies and find works done by actors that were involved!
```
```
As a person that loves -actor- I want a place to find their works, especially those that are frequently loved!
```


**Data Modeling**
<--User-->
-username
-password
-email?
-favorite movies
  [<--Movie-->
  --[actors]
  --title
  --year
  --summary
  --Genre
  --times fav'd]
*Rambling Garbage*
```
User authentication, create account. Email? Regular username? No recovery possible, no email server. Can't save in plaintext.
User only edits their stuff, session id has to match user to edit. Can delete and add, maybe stays on DB but is removed from favorites?
Total times fav'd? title req. main actor req.(maybe just one req. at all?) imdb req? rotten req?
Search by actor, looks in all fav'd to find matching. Maybe # times fav'd?
Search by # times fav'd? Have filters? # filters?
Look at other users pages, see their favorites links to search by actor links to show singular movie with links to actors
Nav bar across all views? layout? above title? only way to keep it the same... unless body.title? Need to look into hbs more than {{body}} in layout.
Edit view? drop in form on button click? JS? jquery? dom manip or just all hard code? attach jscript?
def need css, as to styles, gotta mess with it and see.
for loop with links for actors and movies. If actorname matches pull existing for the movie?
constant var for number of times fav'd? maybe as a part of the data?
pushing into array so leverage .length?
```
