import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);



//ce fichier est le point d'entrée de l'application React. 
//Il importe la bibliothèque ReactDOM et la fonction createRoot pour créer un point d'entrée pour l'application. 
//Il importe également le composant App et le fichier CSS index.css.
//Ensuite, il utilise createRoot pour rendre le composant App dans l'élément HTML avec l'ID "root".
