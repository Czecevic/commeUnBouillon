export type Reservation = {
  id: number;
  name: string;
  date: string;
  time: string;
  message: string | null;
  people: number;
};

export type PlatAdmin = {
  category: string;
  id: number;
  nom: string;
  prix: string;
  image: string;
};

export type Plat = {
  id: number;
  nom: string;
  prix: string;
  image: string;
  category: string;
};

export type MenuSectionAdminProps = {
  title: string;
  plats: Plat[];
  onEdit: (plat: Plat) => void;
  onDelete: (id: number) => void;
};

export type MenuSectionProps = {
  title: string;
  plats: Plat[];
};

export type InfoItemProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: string;
  onClick: () => void;
  className?: string;
};

export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export type InputFieldProps = {
  id: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
};

export type NavButtonProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

export type FormFieldProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  min?: number | string;
  max?: number | string;
  required?: boolean;
};
