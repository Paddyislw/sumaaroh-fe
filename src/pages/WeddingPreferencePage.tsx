import { useEffect, useState } from "react";
import LoadingScreen from "../components/global/LoadingScreen";
import GuestCount from "../components/WeddingPrefrence/GuestCount";
import VenueSelect from "../components/WeddingPrefrence/VenueSelect";
import { Search } from "lucide-react";

const WeddingPreferencePage = () => {
  const [isGuestCountLoading, setIsGuestCountLoading] = useState(true);
  const [venueSelectLoading, setVenueSelectLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userPreferences, setUserPreferences] = useState<{
    guestCount: string;
    venueType: string;
  }>({
    guestCount: "",
    venueType: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsGuestCountLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (venueSelectLoading) {
      setTimeout(() => {
        setVenueSelectLoading(false);
      }, 3000);
    }
  }, [venueSelectLoading]);

  if (isGuestCountLoading) {
    return (
      <LoadingScreen message="Great, let our planners craft the perfect setting for your magical day" />
    );
  }

  if (venueSelectLoading) {
    return (
      <LoadingScreen
        message="Shortlisting venues to accommodate your wedding party"
        icon={Search}
      />
    );
  }
  return (
    <div>
      {currentStep === 1 && (
        <GuestCount
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setVenueSelectLoading={setVenueSelectLoading}
          userPreferences={userPreferences}
          setUserPreferences={setUserPreferences}
        />
      )}
      {currentStep === 2 && (
        <VenueSelect
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setVenueSelectLoading={setVenueSelectLoading}
          userPreferences={userPreferences}
          setUserPreferences={setUserPreferences}
        />
      )}
    </div>
  );
};

export default WeddingPreferencePage;
