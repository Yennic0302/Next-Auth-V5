const buttonThemes = {
  dark: "bg-black hover:bg-gray-700 text-white",
  light: "bg-slate-100 hover:bg-gray-300 text-black",
};

export default function Button({
  children,
  theme = "light",
  func,
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
  func?: () => void;
}) {
  return (
    <button
      className={`py-2 px-6 w-full drop-shadow-md rounded-sm flex items-center justify-center  transition-all ${buttonThemes[theme]}`}
      onClick={func}
    >
      {children}
    </button>
  );
}
