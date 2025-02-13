import { useLocation, useNavigate } from "react-router";
import { useData } from "../Context";
import Button from "./Button";

export default function Service01() {
  const navigate = useNavigate();
  const { setIsService } = useData();

  function handleBack() {
    navigate(-1);
    setIsService(false);
  }

  return (
    <div>
      Service01 Description
      <div>
        <Button onClick={handleBack}>Go back</Button>
      </div>
    </div>
  );
}
