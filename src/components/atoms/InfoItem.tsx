import { InfoItemProps } from "../../../interfaces";

export const InfoItem: React.FC<InfoItemProps> = ({ children }) => (
  <li className="info-item">{children}</li>
);
