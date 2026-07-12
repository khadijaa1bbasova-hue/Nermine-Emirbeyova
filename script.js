
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA11rseaqCmYwk6hFjMYxstoAkhjV73Dfg",
  authDomain: "nermine-emirbeyova.firebaseapp.com",
  projectId: "nermine-emirbeyova",
  storageBucket: "nermine-emirbeyova.firebasestorage.app",
  messagingSenderId: "1059708153114",
  appId: "1:1059708153114:web:c8872a1763db00a52910a3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addStudent(name, username, password) {
    try {
        const docRef = await addDoc(collection(db, "students"), {
            name: name,
            username: username,
            password: password,
            createdAt: new Date()
        });
        alert("Tələbə uğurla bazaya yazıldı! ID: " + docRef.id);
    } catch (e) {
        console.error("Xəta baş verdi: ", e);
    }
}