export default function FormSuccess({ message }: { message?: string | null }) {
  if (!message) return null;
  return (
    <div className="p-2 bg-green-400/50 text-green-600 w-full rounded-md font-normal">
      {message}
    </div>
  );
}
