import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MentionsLegales = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
    
    <Navbar />
    <main className="flex-1 flex items-center flex-col mb-8 w-full">
      <h1 className="text-4xl p-4 text-secondary">Mentions Légales</h1>
    <p className="bg-primary w-11/12 lg:w-5/12 mx-auto p-4 text-justify leading-7 rounded-lg shadow-lg ">
      Ce site est la propriété d'Agnès Beaumatin, ci-après dénommé "le
      propriétaire", qui en est le responsable de la publication. <br /> <br />
      Coordonnées : 38 rue Commandant Hautreux <br />   Code postal : 33300 <br />      Ville : Bordeaux <br />
      Téléphone : 0628408480 <br />
      E-mail : almoha@gmail.com <br /> <br />
      Hébergement : Le site est hébergé sur Vercel, dont le siège social est
      situé à l'adresse suivante : Vercel, Inc. 340 Brannan Street, Suite 500
      San Francisco, CA 94107 États-Unis. <br />
      Pour contacter Vercel, veuillez utiliser le formulaire de contact
      disponible sur leur site web. <br /> <br />
      Base de données : Le propriétaire utilise Firebase comme base de données.{" "}
      <br />  <br />
      Collecte de données personnelles : Le site comporte un formulaire de
      contact permettant aux visiteurs de contacter le propriétaire. Les données
      personnelles collectées via ce formulaire sont utilisées uniquement pour
      répondre à la demande de l'utilisateur et ne sont pas communiquées à des
      tiers. Conformément à la loi Informatique et Libertés du 6 janvier 1978,
      les utilisateurs disposent d'un droit d'accès, de rectification et de
      suppression des données les concernant. Pour exercer ce droit, ils peuvent
      contacter le propriétaire à l'adresse e-mail mentionnée ci-dessus. <br /> <br />
      Cookies : Le site n'utilise pas de cookies. <br />  <br />
      Liens vers d'autres sites : Le site comporte des liens vers des sites
      externes hébergés sur Github Pages ou Vercel. Le propriétaire ne peut être
      tenu responsable du contenu de ces sites externes.
    </p>
    </main>
    
    <Footer />
    </div>
  );
};

export default MentionsLegales;
