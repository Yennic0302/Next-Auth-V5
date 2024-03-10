export default function Header({ label }: { label: string }) {
  return (
    <header className="w-fulll flex flex-col gap-y-4 items-center justify-center ">
      <h1 className="text-3xl font-semibold">Auth</h1>
      <p className="text-sm">{label}</p>
    </header>
  );
}
