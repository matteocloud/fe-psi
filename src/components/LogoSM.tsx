import { getAssetUrl } from "../utils/assets";

type LogoSMProps = {
  className?: string;
  title?: string;
  variant?: "solid" | "outline";
};

const LogoSM = (props: LogoSMProps) => {
  const { className = "", title = "Studio di Psicologia · Silvia Malandra" } = props;
  const logoSrc = getAssetUrl("logo.png");

  return (
    <img
      src={logoSrc}
      alt={title}
      className={className}
      loading="lazy"
    />
  );
};

export default LogoSM;
