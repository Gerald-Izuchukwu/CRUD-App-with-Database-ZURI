/**
 * an express app that
 * 1.connects to a db
 * 2.creates the payload{message: String, data : object}
 * no 2 means we are to return an obj that tells the client if the req is successful or not conatined in the message
 * and the data should contain the result 
 * 
 * if there is an error, the response should return the error instead
 * 
 * 3. gets the data created
 * 4. updates the data created 
 * 5. deletes the data created  
 */

const expre