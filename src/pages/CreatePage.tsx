
import CreateCampaignPage from "@/components/CreateCampaignPage";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return <CreateCampaignPage onBack={handleBack} />;
};

export default CreatePage;
