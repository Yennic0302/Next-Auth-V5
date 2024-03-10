// import NextAuth from "next-auth";
// import authConfig from "./auth.config";

import { auth } from "@/auth";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   const isLoggedIn = !!req.auth;
//   console.log(req.auth);
//   console.log(req.nextUrl.pathname);
//   console.log("is logged in ? ", isLoggedIn);
// });

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log(req.auth);
  console.log(req.nextUrl.pathname);
  console.log("is logged in ? ", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
