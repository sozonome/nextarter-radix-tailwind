/* eslint-disable @next/next/no-img-element */
import { Button } from '@radix-ui/themes';

const repoName = 'sozonome/nextarter-radix-tailwind';

const CTASection = () => {
  return (
    <div className="grid justify-items-center gap-2.5">
      <div className="flex items-center gap-2">
        <a
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </a>

        <a
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <div className="flex items-center gap-4">
        <Button asChild color="green" size="3">
          <a
            href={`https://github.com/${repoName}/generate`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use This Template
          </a>
        </Button>
        <Button asChild variant="ghost">
          <a
            className="rounded-3xl p-2 font-semibold"
            href={`https://github.com/${repoName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
