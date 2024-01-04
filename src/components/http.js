export async function fetchAvailablePlaces(){
     const response = await fetch("http://localhost:3000/places");
     const resData = await response.json();

     if (!response.ok) {
       throw new Error("Failed to fetch places");
     }

     return resData.places;
}


export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    // Body einer HTTP-Anfrage: Der Body einer HTTP-Anfrage enthält normalerweise die Daten, die an den Server gesendet werden. Bei vielen Anfragen wird der Body in Form von JSON übermittelt. Die JSON.stringify()-Methode wird verwendet, um sicherzustellen, dass die Daten im richtigen Format (JSON) vorliegen.
    body: JSON.stringify({places}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Nach dem Senden der Anfrage wartet die Funktion darauf, dass die Antwort des Servers als JSON-Objekt geparsed wird. Dies geschieht asynchron, daher wird await verwendet.
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update user data. ");
  }
  return resData.message;
}