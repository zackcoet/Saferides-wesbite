// Single Firebase module for the entire SafeRides marketing site.
// All configuration comes from import.meta.env.VITE_* variables — never hardcode
// values here. See .env.example for the required keys (project: saferides-73eb2).
import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
};

// Initialize defensively. When the VITE_FIREBASE_* env vars are missing,
// getAuth() throws auth/invalid-api-key at module load — which would crash every
// page that imports this module (blank render). Catching it here lets those
// pages render; each Firebase call site already runs inside its own try/catch
// and surfaces a graceful fallback when Firebase is unavailable.
let appInstance: FirebaseApp | undefined;
let authInstance: Auth | undefined;
let dbInstance: Firestore | undefined;
let storageInstance: FirebaseStorage | undefined;

try {
  // Reuse the existing app during HMR / repeat imports instead of re-initializing.
  appInstance = getApps().length ? getApp() : initializeApp(firebaseConfig);
  authInstance = getAuth(appInstance);
  dbInstance = getFirestore(appInstance);
  storageInstance = getStorage(appInstance);
} catch (error) {
  // Most commonly a missing or invalid VITE_FIREBASE_API_KEY at build time.
  console.error(
    "Firebase failed to initialize. Verify the VITE_FIREBASE_* environment variables.",
    error,
  );
}

// Export types stay non-optional so existing consumers compile unchanged. If
// initialization failed, these are undefined at runtime and the consumers' own
// try/catch blocks handle that path.
export const app = appInstance as FirebaseApp;
export const auth = authInstance as Auth;
export const db = dbInstance as Firestore;
export const storage = storageInstance as FirebaseStorage;
