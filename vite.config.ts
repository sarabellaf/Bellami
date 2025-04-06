import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());           // Charger les var d'environnement depuis .env
  console.log("VITE_PORT:", env.VITE_PORT);           // Vérifier qu'elle est bien chargée

  return {
    server: {
      host: "::", 
      port: parseInt(env.VITE_PORT || "4000", 10),    // env.VITE_PORT pour récupérer le port depuis les vard'environnement , 10 pour la base
      open: true,                                     // Ouvre automatiquement le navigateur
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),    // Plugin en mode développement uniquement
    ].filter(Boolean),                                // Supprime les valeurs null ou undefined dans la liste des plugins
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),        //Pour simplifier les imports
      },
    },
  };
});


//Ce fichier en format TypeScript pour configurer Vite
//un outil de construction moderne et rapide pour les applications web (comme Plugins, alias, options de serveur, etc.).

// https://vitejs.dev/config/
