//import cors from 'cors' backend me frontend aur backend ko connect karne ke liye hota hai.
//cors =>  Cross-Origin Resource Sharing
//JavaScript me ek security hoti hai jiska rule ye hota hai: 
// "Ek website sirf apne hi server se data fetch kar sakti hai."
//Lekin aaj kal hamara frontend (React) aur backend (Node.js/Express) alag servers par hote hain:
// Dono ka origin alag hota hai.
// Isliye JavaScript normally request block kar deta hai.
// Yahi block hatane ke liye CORS use hota hai
//“cors backend ki permission hoti hai jo frontend ko bolta hai:
// Tum mujhe request bhejo, allowed ho.”
//Sirf Specific Site ko allow karna (best practice)
// app.use(cors({
//     origin: "http://localhost:5173"
// }));

