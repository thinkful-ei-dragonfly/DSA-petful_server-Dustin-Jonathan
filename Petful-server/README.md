PETFUL Brought to you by Jonathan & Dustin

Live App https://petful-client-dustin-jonathan.jmjonemoore.now.sh

Server Address https://intense-lowlands-42230.herokuapp.com/api

Client Repo https://github.com/thinkful-ei-dragonfly/DSA-petful_client-Dustin-Jonathan

Server Repository https://github.com/thinkful-ei-dragonfly/DSA-petful_server-Dustin-Jonathan

Team Jonathan & Dustin

Summary Petful is a site for an animal shelter which allows adoption of cats and dogs. The adoption process works strictly on a "First-In, First-Out" basis. The FIFO is based on the animals that came to the shelter first. People can adopt a cat, or a dog, or both, but they may only adopt the animal that came to the shelter first. In addition, people who want to adopt are also put in a Queue so they can adopt when its their turn. If the animal has been adopted by someone else, you are unable to adopt this animal and have to wait your turn.

Tech Stack Client: React Server: Express, Node, and Queue data structures

API Use Information

The API can be used to get a list of pets that are available for adoption.  These pets are hard coded in the server as a queue.  We use a queue for the fifo of pet adoption process.  There are also routes that hold pets that have already been adopted to keep a history of the activity.  The routes '/api/cats' and '/api/dogs' are used to access pets that are still available for adoption.  and the endpoints '/api/adoptedcats' and '/api/adopteddogs' are to get the pets that are already adopted. There is also an endpoint '/api/adopters' that is used to keep a queue of people who are looking to adopt.  This has a post method and a delete method so that a user can add their name to a list of people looking to adopt and so that once they adopt they are removed from the list.  