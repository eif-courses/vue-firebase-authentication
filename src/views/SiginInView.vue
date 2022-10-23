<script setup>

import { ref } from "vue";
import {
getAuth,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} from "firebase/auth"
import { useRouter } from "vue-router";

const email = ref("")
const password = ref("")
const router = useRouter()
const errMsg = ref()
const signIn = () => {

const auth = getAuth()
signInWithEmailAndPassword(auth, email.value, password.value)
// eslint-disable-next-line no-unused-vars
.then((data) => {
console.log("Successfully Signed in!");
console.log(auth.currentUser)
router.push('/');
}).catch((error) => {
console.log(error.code);

switch (error.code) {
  case "auth/invalid-email":
    errMsg.value = "Invalid email";
    break;
  case "auth/user-not-found":
    error.value = "No account with that email was found";
    break;
  case "auth/wrong-password":
    errMsg.value = "Incorrect password";
    break;
  default:
    errMsg.value = "Email or password was incorrect";
    break;
}


alert(error.message);
})
}
const signInWithGoogle = () => {
const provider = new GoogleAuthProvider();
signInWithPopup(getAuth(), provider)
.then((result) => {
console.log(result.user);
router.push("/about")
})
// eslint-disable-next-line no-unused-vars
.catch((error) => {

});
}


</script>

<template>
<h1> Sign In </h1>
<p><input type="text" placeholder="Email" v-model="email"/></p>
<p><input type="password" placeholder="Password" v-model="password"/></p>
<p v-if="errMsg">{{ errMsg }}</p>
<p><button @click="signIn"> Submit </button></p>
<p><button @click="signInWithGoogle"> Sign In With Google</button></p>
</template>