This is a project to create a virtual pet that be interacted with using the console. The pet will age, get hungry and become less fit as time passes. The user will be able to feed the pet, exercise the pet and interact with it to discover it's needs.
The pet is an object that can be initilised using defining a varable to new Pet(name). The name is the only variable initial property. When a pet is created it will automatically be assigned the following: age: 0, hunger: 0, fitness: 10, isAlive: True. 
Calling the growUp function will cause the pets age to increase by 1, it's hunger to increse by 5 and it's fitness to decrease by 3. Calling the growUp function will also call checkHealth which will provide information on the needs of your pet or inform you if your pet has died. 
Your pet will die if it's age reachs 30, it's hunger reaches 10 or it's fitness reaches 0. 
To increase the pets fitness by 4, with the maximum value being 10, the walk funciton should be called.
To decrease the pets hunger by 3, with a minimum hunger of 0, the feed function should be called. 
To check the needs of your pet the checkUp function should be called. This will inform you if your pet is hungry, needs to be walked, both or if it feels great. 
Once your pet has died it can no longer be fed or walked. 
