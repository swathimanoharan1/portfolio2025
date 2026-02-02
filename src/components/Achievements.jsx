import { useEffect, useRef } from "react";

const achievementBadges = [
  {
    name: "Python For DataScience",
    imageUrl: "/PythonForDataScience.png",
    verifyUrl:
      "https://www.credly.com/badges/97d2d8cf-2d64-4eb2-bc16-cb3aedfab9c3/public_url",
    provider: "IBM Credly",
  },
  {
    name: "AWS Certified Developer Associate",
    imageUrl: "/AWSCertifiedDeveloperAssociate.png",
    verifyUrl:
      "https://www.credly.com/badges/84fd294e-c0e2-4c4f-ae09-95fad9176f83/public_url",
    provider: "AWS Credly",
  },
  {
    name: "Angular Developer Program",
    imageUrl: "/AngularDeveloperProgram.png",
    verifyUrl:
      "https://gameconfig.lex.infosysapps.com/Gamification/GetBadgeImage/?AppId=2&TokenNo=DDUPPGZGMT&BadgeCode=PODIMWCJK3",
    provider: "Infosys",
  },
  {
    name: "Salesforce Certified AI Associate",
    imageUrl: "/SalesforceCertifiedAIAssociate.png",
    verifyUrl: "https://www.salesforce.com/trailblazer/profile",
    provider: "Salesforce",
  },
  {
    name: "Infosys AI Aware",
    imageUrl: "/InfosysAIAware.png",
    verifyUrl:
      "https://gameconfig.lex.infosysapps.com/Gamification/GetBadgeImage/?AppId=2&TokenNo=DDUPPGZGMT&BadgeCode=44AGKTWTWU",
    provider: "Infosys",
  },
  {
    name: "Low Code No Code Aware",
    imageUrl: "/LowCodeNoCode.png",
    verifyUrl:
      "https://gameconfig.lex.infosysapps.com/Gamification/GetBadgeImage/?AppId=2&TokenNo=DDUPPGZGMT&BadgeCode=CQJPU2F78Q",
    provider: "Infosys",
  },
  {
    name: "Microsoft AI Skill Fest",
    imageUrl: "/microsoft-ai-skills-fest.svg",
    verifyUrl:
      "https://learn.microsoft.com/api/achievements/share/en-us/SWATHIM-7550/8ZERH8CW?sharingId=F0C3C45EF3662A3F",
    provider: "Microsoft",
  },
  {
    name: "Common Wealth Job Simulation",
    imageUrl: "/CommonWealthJobSimulation.png",
    verifyUrl:
      "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_tR4kTHJmkokcCnpxT_1749374954089_completion_certificate.pdf",
    provider: "Forage",
  },
];

const Achievements = () => {
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  // Desktop scrolling
  useEffect(() => {
    const container = desktopRef.current;
    if (!container) return;

    const cardWidth = 160 + 40; // image width + gap (adjust to your actual sizes)
    let index = 0;

    const interval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // If at (or very near) the end → jump back to start
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
        index = 0;
      } else {
        index += 1;
        container.scrollBy({
          left: cardWidth, // move one card at a time
          behavior: "smooth",
        });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Mobile scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      const container = mobileRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // If at (or very near) the end → jump back to start
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
      } else {
        container.scrollBy({
          left: container.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12">
      <h3 className="text-3xl font-bold mb-4 text-white text-center">
        Achievements
      </h3>
      <div className="w-20 h-0.5 mx-auto bg-red-500 mb-6" />

      {/* Mobile: Horizontal auto-scroll carousel */}
      <div
        ref={mobileRef}
        className="flex sm:hidden overflow-x-auto no-scrollbar gap-6 px-4 snap-x snap-mandatory scroll-smooth"
      >
        {achievementBadges.map((badge, index) => (
          <a
            key={index}
            href={badge.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-center shrink-0 w-64 text-center transform hover:scale-105 transition-transform duration-50"
            title={`View ${badge.name} on ${badge.provider}`}
          >
            <img
              src={badge.imageUrl}
              alt={badge.name}
              className="w-44 h-44 mx-auto rounded-lg shadow-lg border border-gray-700"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {/* Desktop: Horizontal auto-scroll carousel */}
      <div
        ref={desktopRef}
        className="hidden sm:flex overflow-x-auto no-scrollbar gap-10 px-6 mt-12 max-w-[1120px] mx-auto"
      >
        {achievementBadges.map((badge, index) => (
          <a
            key={index}
            href={badge.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hover:scale-105 transition-transform"
            title={`View ${badge.name} on ${badge.provider}`}
          >
            <img
              src={badge.imageUrl}
              alt={badge.name}
              className="w-40 h-40 rounded-lg shadow-lg border border-gray-700"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
