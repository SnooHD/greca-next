import Link from "next/link";
import { Title } from "@components/Title.component";

export default function Home() {

  const routeView = [
    {
      url: '/sign-up',
      label: 'View sign up form'
    }, 
    {
      url: '/prefetch',
      label: 'View prefetch data'
    }
  ];
  return (
    <main className="flex flex-col items-center p-4">
      <Title size="h1">Overview</Title>
      <div className="space-y-4 flex flex-col justify-center items-center w-full min-h-[240px]">
        {
          routeView.map(({url, label}, index) => (
            <Link 
              key={`link-to-page-${url}-${label}-${index}`}
              href={url}
              className={`
                p-4 bg-blue text-white rounded w-[180px]
                text-center
                transition-colors
                hover:bg-blue/80
                active:bg-blue/60
              `}
            >
              {label}
            </Link>
          ))
        }
      </div>
    </main>
  );
}
