# cs361-Microservice
Microservice for my CS361 partner for use in their portfolio project. The microservice will return a random single word for use in a game of Hangman, through the use of an API call.
# How to Request
The microservice requires a numerical input (1) to trigger the fetch. Any other input will result in nothing. Local testing requires a node run of index.js coupled with the integer. Integration services will require '1' to be sent through the RabbitMQ service this microservice utilizes, as a JSON.

Example

sampleRequest = {

  Word: '1'
  
 }
 
 # How to Receive
 The microservice will return a single word, packaged in a json to be parsed
 
 ![image](https://user-images.githubusercontent.com/71418632/218648259-9864a7b9-d48a-4d23-82e9-548d978c928b.png)
