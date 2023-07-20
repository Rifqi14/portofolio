import Image from 'next/image';

type ToolType = {
  source: string;
  alt: string;
  className: string;
};

export function ToolSection() {
  const tools: ToolType[] = [
    {
      source: '/tools/typescript.svg',
      alt: 'typescript',
      className: 'w-9 h-9 sm:w-16 sm:h-16'
    },
    {
      source: '/tools/vscode.svg',
      alt: 'vscode',
      className: 'w-9 h-9 sm:w-16 sm:h-16'
    },
    {
      source: '/tools/golang.svg',
      alt: 'golang',
      className: 'w-20 h-20 sm:w-28 sm:h-28'
    },
    {
      source: '/tools/nestjs.svg',
      alt: 'nestj',
      className: 'w-20 h-20 sm:w-36 sm:h-36'
    },
    {
      source: '/tools/nodejs.svg',
      alt: 'nodejs',
      className: 'w-20 h-20 sm:w-36 sm:h-36'
    }
  ];
  return (
    <section className='flex px-6 py-4 justify-evenly items-center content-center gap-4 self-stretch flex-wrap'>
      {tools.map(tool => (
        <Image
          key={tool.alt}
          alt={tool.alt}
          src={tool.source}
          width={0}
          height={0}
          sizes='100vw'
          className={tool.className}
        />
      ))}
    </section>
  );
}
