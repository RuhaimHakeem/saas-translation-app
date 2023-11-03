import { getServerSession } from "next-auth";
import { PricingCard } from "@/components/pricing-card";
import { AuthOptions } from "@/auth";

const Register = async () => {
  const session = await getServerSession(AuthOptions);
  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Lets handle your membership {session?.user?.name?.split(" ")?.[0]}!{" "}
          </p>
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 1208 1024"
            className="blur-3xl opacity-30 absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side, white, transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-gradient">
                <stop stopColor="#7775d6" />
                <stop offset={1} stopColor="#e935c1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <PricingCard redirect={false} />
    </div>
  );
};

export default Register;
