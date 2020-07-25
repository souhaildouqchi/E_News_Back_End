
A back end nodejs and express application.

# Nodejs / Express / mongoose (Back end ) :
The second part of the project requires having a back end server that is connected to the already existing mongodb data base from the first step in order to create endpoints that will be used in the future by the front end application.The technology that was used for the back end was: Nodejs / Express / Mongoose but since the back end project won't be running on the local machine and it will be running inside a docker container instead we wont have to do any setting up to node or run any npm commands That's the beauty of docker its all inside the dockerfile already set up in simple steps.

#### Setting up the environment :
##### Building the backend docker image : 
In the first step we created a docker network in order to make the database accessible , we specified how to add the back end container to the network, but we didn't specify how to build it in the first place. 
To build the docker container for the back end server all you need to do is run the following command :
```bash
docker build -t mynodeapp . 
```
And that's it , this command goes through the dockerfile and excutes every single step the result is a docker container called mynodeapp that is connected to the other docker container with the mongodb data base through the e_news network ( the network created in the first step ) with the following command (also mentioned in the first step !)
```bash 
docker run -d --net=e_news --name mynodeapp -p 5001:5001 mynodeapp 
```
The port that was exposed was 5001 it is the same port that the nodejs app uses to listen to comming requests.
#### Acessing the endpoints  : 
After setting up the environment , and if you have done everything correctly you should be able to check the diffrent endpoints offered by the back end server by going to the following link : 

    https://YOUR_IP_ADDRESS:5001/Name_Of_DATA_COLLECTION
For example : 
    https://192.168.1.5:5001/articles
In this case /articles will be the same name given to the results form while filling the form to make a configurable spider in the first step ! 
It will also be the same name given inside the data model in mongoose.

If everything goes right you should be able to see some json data being displayed in your browser or in postman.
