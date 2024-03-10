import { LoginButton } from "@/components/auth/LoginButton";

export default function Home() {
  return (
    <main className={`flex h-full flex-col items-center justify-center `}>
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton asChild={true}>
            <button className=" px-6 p-2 text-center rounded-sm drop-shadow-md bg-slate-200">
              Sign In
            </button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
