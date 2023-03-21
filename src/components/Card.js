import React, {useState, useRef, useEffect} from "react";

const Card = ({ href, text, page, code, name, npm }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
  }, []);
  return (
    <>
      <div
        className={`flex flex-col xl:flex-row border p-4 w-11/12 text-black h-auto rounded shadow-lg ${
          show ? "animate-fade-in" : ""
        }`}
        ref={ref}
      >
        {href && (
          <div className="flex justify-center">
            <img
              src={href}
              alt="project screenshot"
              className="xl:max-w-[700px]"
            />
          </div>
        )}

        <div className="py-2  xl:px-6">
          <p className="text-xl text-justify">{text}</p>
          <br />
          {href ? (
            <p className="text-xl">
              Lien github pages:
              <a
                href={page}
                className="text-blue-500 hover:text-[#802836]"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {name}
              </a>
            </p>
          ) : (
            <p className="text-xl">
              Lien du package sur npm:
              <a
                href={npm}
                className="text-blue-500 hover:text-[#802836]"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {name}
              </a>
            </p>
          )}

          <p className="text-xl">
            Lien vers le code sur github:{" "}
            <a
              href={code}
              className="text-blue-500 hover:text-[#802836]"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Code {name}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
