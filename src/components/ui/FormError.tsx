export default function FormError({ error }: { error: string | null }) {
  if (!error) return null;
  return (
    <div className="p-2 bg-red-400/50 text-red-600 w-full rounded-md font-normal">
      {error}
    </div>
  );
}
