import { useLocation, useNavigate } from "react-router";

export default function Service01() {
  const navigate = useNavigate();

  return (
    <div>
      Service01 Description
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
