/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT?: string; // Déclare VITE_PORT comme une chaîne optionnelle
  // Ajoutez d'autres variables d'environnement ici si nécessaire
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


//Ce fichier est une déclaration de type pour les variables d'environnement dans un projet Vite.
//Ce fichier pour déclarer import.meta.env, qui est un objet contenant les variables d'environnement définies dans le fichier .env ou dans le système d'exploitation.