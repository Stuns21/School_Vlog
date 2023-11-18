function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;

    // Aquí puedes enviar el id_token a tu servidor para verificarlo y autenticar al usuario
    console.log('ID Token: ' + id_token);

    // Muestra información del usuario en la consola
    console.log('ID: ' + profile.getId());
    console.log('Nombre: ' + profile.getName());
    console.log('Imagen: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}