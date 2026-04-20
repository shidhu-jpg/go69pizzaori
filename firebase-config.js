// ════════════════════════════════════════════════════════════════
//  Go69 Pizza — Firebase Configuration
//  HOW TO SET UP (one-time, takes ~5 minutes):
//
//  1. Go to https://firebase.google.com and sign in with Google
//  2. Click "Go to console" → "Add project" → name it "go69pizza"
//  3. Disable Google Analytics (not needed) → Create project
//
//  4. In the project, click the </> (Web) icon to add a web app
//     → App nickname: "go69-menu" → Register app
//     → Copy the firebaseConfig object below and paste it here


//
//  5. In the left sidebar → Build → Firestore Database
//     → Create database → Start in production mode → pick any region
//     → Go to Rules tab, replace ALL the text with:
//
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /menu/{itemId} {
//              allow read, write: if true;
//            }
//          }
//        }
//
//     → Click Publish
//
//  6. Open admin.html in your browser → enter password → click
//     "Seed Menu from JSON" → all items load into Firestore
//
//  7. Push to GitHub — done! Menu is now live and editable.
// ════════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyC1jj2-KopDSncUjqATfCaGi0cU7hPic0E",
  authDomain: "go69pizza-2b3e7.firebaseapp.com",
  projectId: "go69pizza-2b3e7",
  storageBucket: "go69pizza-2b3e7.firebasestorage.app",
  messagingSenderId: "224911733461",
  appId: "1:224911733461:web:5081ba326edfc1a583285c"
};
