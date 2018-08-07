/* global gapi */
/* eslint-disable no-unused-vars */

/* utility code for all sites */
document.getElementById('year').innerHTML = new Date().getFullYear()

/* project specific */
document.getElementById('b_login').addEventListener('click', () => {
  console.log('click #b_login')
})

function onSignIn (googleUser) {
  var profile = googleUser.getBasicProfile()
  console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName())
  console.log('Image URL: ' + profile.getImageUrl())
  console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
}

function signOut () {
  var auth2 = gapi.auth2.getAuthInstance()
  auth2.signOut().then(function () {
    console.log('User signed out.')
  })
}