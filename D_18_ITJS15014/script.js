// DODAVANJE FILMOVA
db.collection("movies")
  .doc("Gattacca")
  .set({
    Name: "Gattacca",
    Director: {
      name: "Andrew",
      surname: "Nicole",
    },
    Release_year: 1997,
    Genres: ["Sci-Fi", "Drama", "Thriller"],
    Rating: 7.8,
  })
  .then(function () {
    console.log("Movie successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding movie: ", error);
  });

db.collection("movies")
  .doc("A.I.")
  .set({
    Name: "A.I. Artificial Intelligence",
    Director: {
      name: "Steven",
      surname: "Spielberg",
    },
    Release_year: 2001,
    Genres: ["Sci-Fi", "Drama"],
    Rating: 7.2,
  })
  .then(() => {
    console.log("Movie successfully added!");
    return db
      .collection("movies")
      .doc("A.I.")
      .update({
        // Dodaje žanr nekom filmu
        Genres: firebase.firestore.FieldValue.arrayUnion("Thriller"),
      });
  })
  .catch(function (error) {
    console.error("Error adding movie: ", error);
  });

console.log(db);
db.collection("movies")
  .doc("Contact")
  .set({
    Name: "Contact",
    Director: {
      name: "Robert",
      surname: "Zemeckis",
    },
    Release_year: 1997,
    Genres: ["Sci-Fi", "Drama", "Mystery"],
    Rating: 7.5,
  })
  .then(() => {
    console.log("Movie successfully added!");
    return db
      .collection("movies")
      .doc("Contact")
      .update({
        // Brise žanr nekom filmu,
        Genres: firebase.firestore.FieldValue.arrayRemove("Drama"),
      });
  })
  .then(function () {
    console.log("Drama removed from Genres");
  })
  .catch(function (error) {
    console.error("Error adding 'Drama': ", error);
  });

// MENJANJE PODATAKA O FILMU

db.collection("movies")
  .doc("Gattacca")
  .update({
    Release_year: 1998,
    Rating: 8.5,
  })
  .then(() => {
    console.log("Release year and rating updated");
  })
  .catch((err) => {
    console.log(err);
  });

// Menja ime ili prezime nekom režiseru.

let movie = db.doc("movies/Gattacca");

movie
  .update({
    "Director.name": "Michael",
  })
  .then(() => {
    console.log("Director name updated");
  })
  .catch((err) => {
    console.log(err);
  });
