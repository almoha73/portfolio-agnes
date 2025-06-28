import React from "react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 py-12">
      <main className="container mx-auto px-4 py-8 lg:py-16 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Mentions Légales</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 leading-relaxed text-lg">
          <p className="mb-4">
            Ce site est la propriété d'Agnès Beaumatin, ci-après dénommé "le
            propriétaire", qui en est le responsable de la publication.
          </p>
          <p className="mb-4">
            <strong>Coordonnées :</strong><br />
            38 rue Commandant Hautreux <br />
            33300 Bordeaux <br />
            Téléphone : 06 28 40 84 80 <br />
            E-mail : almoha@gmail.com
          </p>
          <p className="mb-4">
            <strong>Hébergement :</strong> Le site est hébergé sur Vercel, dont le siège social est
            situé à l'adresse suivante : Vercel, Inc. 340 Brannan Street, Suite 500
            San Francisco, CA 94107 États-Unis. <br />
            Pour contacter Vercel, veuillez utiliser le formulaire de contact
            disponible sur leur site web.
          </p>
          <p className="mb-4">
            <strong>Base de données :</strong> Le propriétaire utilise Firebase comme base de données.
          </p>
          <p className="mb-4">
            <strong>Collecte de données personnelles :</strong> Le site comporte un formulaire de
            contact permettant aux visiteurs de contacter le propriétaire. Les données
            personnelles collectées via ce formulaire sont utilisées uniquement pour
            répondre à la demande de l'utilisateur et ne sont pas communiquées à des
            tiers. Conformément à la loi Informatique et Libertés du 6 janvier 1978,
            les utilisateurs disposent d'un droit d'accès, de rectification et de
            suppression des données les concernant. Pour exercer ce droit, ils peuvent
            contacter le propriétaire à l'adresse e-mail mentionnée ci-dessus.
          </p>
          <p className="mb-4">
            <strong>Cookies :</strong> Le site n'utilise pas de cookies.
          </p>
          <p>
            <strong>Liens vers d'autres sites :</strong> Le site comporte des liens vers des sites
            externes hébergés sur Github Pages ou Vercel. Le propriétaire ne peut être
            tenu responsable du contenu de ces sites externes.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MentionsLegales;
