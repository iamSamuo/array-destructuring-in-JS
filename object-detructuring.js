 const bob = {
    first:'bob',
    last:'sanders',
    city:'chicago',
    siblings:{
        sister:'jane',
    }
 };
 const {first:shakeandbake,last,city, siblings:{sister:favoriteSibling}} = bob;
 console.log(shakeandbake,last,city,favoriteSibling);


 function printFucntion ({first,last,city, siblings:{sister:themaster}}){
    console.log(first,last,themaster,city)

 }
printFucntion(bob);

//  const fisrtname = bob.first
//  const lastname = bob.last;
//  const sister = bob.siblings.sister;

//  console.log(fisrtname, lastname, sister);