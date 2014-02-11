/**
 * @author
 */

/*The purpose of this program is to create a list of cookies with specific properties, and from that list create two new lists
			 * One of my favorites
			 * And one of the rest
			 */
				var myCookies = [{
					"name" : "Oreo",
					"shape" : "round"
				}, {
					"name" : "chipsAhoy",
					"shape" : "round"
				}, {
					"name" : "Lorna Doone",
					"shape" : "square"
				}, {
					"name" : "Fig Newton",
					"shape" : "square"
				}];

				console.log(myCookies);
				
				//These are the lists I will sort my cookies into
				
				var myFaves = [];
				var theRest = [];
				
				//For every item in my cookie list, check it's shape. If it's round, add to myFaves, otherwise add to theRest
				
				for(var i=0; i<myCookies.length; i++){
					console.log(i);
					var currentCookie = myCookies [i];
					console.log(currentCookie);
					if(currentCookie.shape == "round"){
						
						console.log(currentCookie);
						
						//because shape is round, add the currentCookie to myFaves
						myFaves.push(currentCookie);
						}else{
							//otherwise, add the currentCookie to theRest
							theRest.push(currentCookie);
							
						}//this is the end of my if/else statement
					
						console.log(myFaves);
						console.log(theRest);
						
				}//this is the end of my for loop

