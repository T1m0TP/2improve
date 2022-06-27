function sendEmail() {
    sendEmail.send({
      Host: 'smtp.gmail.com',
      //Sécuriser via un token !
      Username: '2improve_coaching@gmail.com',
      Password: '',
      To: '2improve_coaching@gmail.com',
      From: document.querySelector("email").value,
      Subject: 'Question ou Suggestion ',
      Body: 'Nom' + document.getElementById("name").value
          + "<br> Email : " + document.getElementById("email").value
          + "<br> Numéro de tél : " + document.getElementById("phone").value
          + "<br> Message : " + document.getElementById("message").value
    }).then(
      message => alert("Le Message a bien été envoyé")
    );
  }