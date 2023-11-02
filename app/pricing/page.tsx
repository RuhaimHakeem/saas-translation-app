import { PricingCard } from "@/components/pricing-card";

const Pricing = () => {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-500">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white">
            We are 99% sure we have a plan to match 100% of your needs
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="blur-3xl opacity-20 absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side, white, transparent)] sm:top-12 md:-top-20 lg:top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#777506" />
                <stop offset={1} stopColor="#e935c1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCard redirect={true} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;